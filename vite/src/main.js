import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

// Add the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Setup the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create 5 rotating cubes/dodecahedrons
const meshes = [];

for (let i = 0; i < 5; i++) {
  const geometry = i % 2 === 0 
    ? new THREE.BoxGeometry(2, 0.1, 2) 
    : new THREE.DodecahedronGeometry();

  const material = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(`hsl(${i * 60}, 70%, 60%)`), 
    emissive: '#304040' 
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = (i - 2) * 2; // Spread them vertically
  scene.add(mesh);
  meshes.push(mesh);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  meshes.forEach((mesh, i) => {
    mesh.rotation.x += 0.01 + i * 0.005;
    mesh.rotation.y += 0.01 + i * 0.005;
  });

  renderer.render(scene, camera);
}

animate();
