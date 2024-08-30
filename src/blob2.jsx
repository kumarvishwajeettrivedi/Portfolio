import React, { useEffect, useRef } from 'react';
import './blob2.css';

class Blob {
  constructor() {
    this.points = [];
  }

  init() {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * i, this);
      this.push(point);
    }
  }

  render() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    let pointsArray = this.points;
    let center = this.center;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsArray[0].solveWith(pointsArray[pointsArray.length - 1], pointsArray[1]);

    let p0 = pointsArray[pointsArray.length - 1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < pointsArray.length; i++) {
      pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

      let p2 = pointsArray[i].position;
      let xc = (p1.x + p2.x) / 2;
      let yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

      p1 = p2;
    }

    let xc = (p1.x + _p2.x) / 2;
    let yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

    ctx.fillStyle = `rgba(250, 188, 63, 0.5)`; 
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    if (this.mousePos) {
      this.points.forEach(point => {
        point.updateForMouseInteraction(this.mousePos, this.radius + 20); 
      });
    }

    requestAnimationFrame(this.render.bind(this));
  }

  push(item) {
    if (item instanceof Point) {
      this.points.push(item);
    }
  }

  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || '#000000';
  }

  set canvas(value) {
    if (value instanceof HTMLCanvasElement) {
      this._canvas = value;
      this.ctx = this._canvas.getContext('2d');
    }
  }
  get canvas() {
    return this._canvas;
  }


  set numPoints(value) {
    if (value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 400;
  }

  set position(value) {
    if (typeof value === 'object' && value.x !== undefined && value.y !== undefined) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.6, y: 0.7 };
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints;
  }

  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };

    this.acceleration = -0.3 + Math.random() * 0.6;
  }

  solveWith(leftPoint, rightPoint) {
    this.acceleration = (-0.3 * this.radialEffect +
      (leftPoint.radialEffect - this.radialEffect) +
      (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
  }

  set acceleration(value) {
    if (typeof value === 'number') {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }

  set speed(value) {
    if (typeof value === 'number') {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }

  set radialEffect(value) {
    if (typeof value === 'number') {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }

  get position() {
    return {
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect)
    };
  }

  get components() {
    return this._components;
  }

  set elasticity(value) {
    if (typeof value === 'number') {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }
  set friction(value) {
    if (typeof value === 'number') {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0085;
  }

  updateForMouseInteraction(mousePos, mouseRadius) {
    const dx = this.position.x - mousePos.x;
    const dy = this.position.y - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseRadius) {
      const force = (mouseRadius - distance) / mouseRadius;
      this.acceleration = force * 0.2;
      this.speed += this.acceleration * 1.5;
    }
  }
}

// React component
const BlobCanvas2 = () => {
  const canvasRef = useRef(null);
  const blobRef = useRef(null);

  const updateBlobProperties = () => {
    if (blobRef.current) {
      const width = window.innerWidth;
      
      
      if (width <= 768) {
        blobRef.current.radius = 80; 
        blobRef.current.position = { x: 0.9, y: 0.4 }; 
      } else {
        blobRef.current.radius = 280;
        blobRef.current.position = { x: 0.3, y: 1 }; 
      }
      
      blobRef.current.render(); 
    }
  };
  


  useEffect(() => {
    const canvas = canvasRef.current;
    const blob = new Blob();

    blob.canvas = canvas;
    blob.init();
    updateBlobProperties(); 
    blobRef.current = blob;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateBlobProperties(); 
    };


    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial call to set canvas size

    const mouseMoveHandler = (e) => {
      const pos = blob.center;
      const mousePos = { x: e.clientX, y: e.clientY };
      const dx = mousePos.x - pos.x;
      const dy = mousePos.y - pos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < blob.radius + 20) { // Check if within larger radius
        blob.mousePos = mousePos;
      } else {
        blob.mousePos = null;
      }

      blob.render();
    };

    window.addEventListener('pointermove', mouseMoveHandler);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', mouseMoveHandler);
    };
  }, []);

  return (
    <div class="parent-section">
    <div class="canvas-wrapper">
      <canvas ref={canvasRef} />
    </div>
    
  </div>
  );
};

export default BlobCanvas2;
