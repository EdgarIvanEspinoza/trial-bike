import { initScene } from './scene.js';
import { initPhysics } from './physics.js';
import { setupControls } from './controls.js';
import * as CANNON from 'cannon-es';
import * as THREE from 'three';

// Inicializar escena y físicas
const { scene, camera, renderer } = initScene();
const world = new CANNON.World();
initPhysics(world);
setupControls();

// Crear el suelo en Three.js para visualizarlo
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Animación y render loop
function animate() {
  requestAnimationFrame(animate);
  world.step(1 / 60); // Avanza la simulación física
  renderer.render(scene, camera);
}

// Posicionar la cámara y arrancar animación
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);
animate();
