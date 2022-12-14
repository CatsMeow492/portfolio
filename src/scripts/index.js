import Gl from './gl';
import Blob from './Blob';
import gsap from 'gsap';

class App {
  constructor() {
    this.blob = null;
    this.addBlobs();

    // Main animation tl
    this.tl = gsap.timeline({
      delay: 0.25,
    });

    this.tl
      // .add(this.article())
      .add(this.animBlobs(), '-=1');
  }

  addBlobs() {
    // size, speed, color, freq, density, strength, offset
    this.blob = new Blob(4.5, 0.15, 1.0, 2.0, 0.3, Math.PI * 2);
    this.blob.position.set(0, 0, 0);
    this.blob.rotation.set(0, 0, 0);

    Gl.scene.add(this.blob);
  }

  animBlobs() {
    // Move Threejs Blobs
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: 'power3.inOut'
      },
    });

    tl
      .from(this.blob.position, {
        z: 5,
      })
      .from(this.blob.mesh.material.uniforms.uAlpha, {
        value: 0,
        stagger: 0.2,
      }, 0);

    return tl;
  }
}

new App();