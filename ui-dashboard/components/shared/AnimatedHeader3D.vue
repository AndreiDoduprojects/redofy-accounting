<template>
  <div class="animated-header-container">
    <canvas ref="canvas" class="animated-header-canvas"></canvas>
    <div class="header-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { 
  createCurrencySymbol, 
  createDocumentModel, 
  createPieChart, 
  createBarChart,
  animateAccountingObjects 
} from './AccountingModels.js';

const canvas = ref(null);
let scene, camera, renderer, animationFrameId;
let cubes = [];
let graphs = [];
let accountingObjects = [];

// Config
const config = {
  cubeCount: 6,
  graphCount: 4,
  rotationSpeed: 0.005,
  floatSpeed: 0.01,
  colorPrimary: new THREE.Color('#0066cc'),
  colorSecondary: new THREE.Color('#35495e'),
  colorAccent: new THREE.Color('#00c6ff')
};

// Initialize Three.js scene
const initScene = () => {
  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#12192c');

  // Create camera
  camera = new THREE.PerspectiveCamera(
    50, 
    window.innerWidth / 300, 
    0.1, 
    1000
  );
  camera.position.z = 15;

  // Create renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, 300);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Add point lights for better highlighting
  const pointLight1 = new THREE.PointLight(0x0066cc, 1, 20);
  pointLight1.position.set(-5, 2, 5);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0x00c6ff, 0.8, 20);
  pointLight2.position.set(5, -2, 5);
  scene.add(pointLight2);

  // Create accounting-themed objects
  createAccountingScene();

  // Handle window resize
  window.addEventListener('resize', onWindowResize);
};

// Create accounting themed 3D objects
const createAccountingScene = () => {
  // Create basic cubes and graphs for the background
  createBackgroundElements();
  
  // Add accounting-specific elements
  
  // Currency symbols
  accountingObjects.push(
    createCurrencySymbol(
      scene, 
      { x: -8, y: 0, z: -2 }, 
      0x00c6ff, 
      1.2, 
      { x: Math.PI/4, y: 0, z: Math.PI/4 }
    )
  );
  
  accountingObjects.push(
    createCurrencySymbol(
      scene, 
      { x: 8, y: 1, z: -3 }, 
      0x0066cc, 
      1.5, 
      { x: -Math.PI/6, y: Math.PI/4, z: 0 }
    )
  );
  
  // Document/invoice models
  accountingObjects.push(
    createDocumentModel(
      scene, 
      { x: -5, y: -1, z: -1 }, 
      0x0066cc, 
      1.3
    )
  );
  
  accountingObjects.push(
    createDocumentModel(
      scene, 
      { x: 6, y: -2, z: -2 }, 
      0x35495e, 
      1.1
    )
  );
  
  // Pie charts
  accountingObjects.push(
    createPieChart(
      scene, 
      { x: -2, y: 2, z: -4 }, 
      1.5
    )
  );
  
  accountingObjects.push(
    createPieChart(
      scene, 
      { x: 4, y: -1, z: -3 }, 
      1.2
    )
  );
  
  // Bar charts
  accountingObjects.push(
    createBarChart(
      scene, 
      { x: 0, y: -2, z: -1 }, 
      0x0066cc, 
      1.4
    )
  );
  
  accountingObjects.push(
    createBarChart(
      scene, 
      { x: -7, y: 2, z: -5 }, 
      0x00c6ff, 
      1.1
    )
  );
};

// Create basic background elements
const createBackgroundElements = () => {
  // Create floating cubes (representing data blocks)
  for (let i = 0; i < config.cubeCount; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: i % 2 === 0 ? config.colorPrimary : config.colorSecondary,
      transparent: true,
      opacity: 0.5,
    });
    
    const cube = new THREE.Mesh(geometry, material);
    
    // Position cubes randomly in the scene
    cube.position.x = (Math.random() - 0.5) * 20;
    cube.position.y = (Math.random() - 0.5) * 10;
    cube.position.z = (Math.random() - 0.5) * 10 - 5;
    
    // Scale cubes randomly
    const scale = Math.random() * 0.4 + 0.1;
    cube.scale.set(scale, scale, scale);
    
    // Store initial position for floating animation
    cube.userData.initialY = cube.position.y;
    cube.userData.floatFactor = Math.random() * 2 + 1;
    
    scene.add(cube);
    cubes.push(cube);
  }

  // Create line graphs (representing financial data)
  for (let i = 0; i < config.graphCount; i++) {
    createGraph(i);
  }
};

// Create a financial graph visualization
const createGraph = (index) => {
  const points = [];
  const segmentCount = 20;
  const width = 6;
  const height = 1.5;
  
  // Generate random graph data with upward trend
  for (let i = 0; i < segmentCount; i++) {
    const x = (i / (segmentCount - 1)) * width - width / 2;
    // Create different graph patterns
    let y;
    if (index % 3 === 0) {
      // Upward trend
      y = (i / segmentCount) * height + Math.random() * 0.2;
    } else if (index % 3 === 1) {
      // Cyclical pattern
      y = Math.sin(i * 0.5) * 0.5 + Math.random() * 0.1;
    } else {
      // Step function
      y = Math.floor(i / 5) * 0.3 + Math.random() * 0.1;
    }
    
    points.push(new THREE.Vector3(x, y, 0));
  }
  
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ 
    color: index % 2 === 0 ? config.colorPrimary : config.colorAccent,
    linewidth: 2
  });
  
  const graph = new THREE.Line(geometry, material);
  
  // Position graphs in different areas
  graph.position.x = (index % 2) * 10 - 5 + (Math.random() - 0.5) * 5;
  graph.position.y = (index % 3) * 3 - 3 + (Math.random() - 0.5) * 2;
  graph.position.z = -8 + index;
  
  // Rotate to face camera better
  graph.rotation.x = Math.PI * 0.1;
  
  // Store initial position for animation
  graph.userData.initialY = graph.position.y;
  graph.userData.floatFactor = Math.random() * 1 + 0.5;
  
  scene.add(graph);
  graphs.push(graph);
};

// Handle window resize
const onWindowResize = () => {
  camera.aspect = window.innerWidth / 300;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, 300);
};

// Animation loop
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  // Animate cubes
  cubes.forEach(cube => {
    cube.rotation.x += config.rotationSpeed;
    cube.rotation.y += config.rotationSpeed * 0.8;
    
    // Floating animation
    cube.position.y = cube.userData.initialY + 
      Math.sin(Date.now() * config.floatSpeed * 0.001 * cube.userData.floatFactor) * 0.3;
  });
  
  // Animate graphs
  graphs.forEach(graph => {
    // Gentle floating animation for graphs
    graph.position.y = graph.userData.initialY + 
      Math.sin(Date.now() * config.floatSpeed * 0.0005 * graph.userData.floatFactor) * 0.2;
  });
  
  // Animate accounting objects
  animateAccountingObjects(accountingObjects);
  
  // Slowly rotate entire scene for more dynamism
  scene.rotation.y = Math.sin(Date.now() * 0.0001) * 0.1;
  
  renderer.render(scene, camera);
};

// Lifecycle hooks
onMounted(() => {
  // Wait for the next tick to ensure the component is fully rendered
  setTimeout(() => {
    // Check if we can use Three.js (add basic capability check)
    if (typeof window !== 'undefined') {
      initScene();
      animate();
    }
  }, 100);
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  window.removeEventListener('resize', onWindowResize);
  
  // Clean up Three.js resources
  if (renderer) {
    renderer.dispose();
  }
  
  // Clean up all meshes
  const cleanupObjects = [...cubes, ...graphs, ...accountingObjects];
  
  if (cleanupObjects.length) {
    cleanupObjects.forEach(object => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
      scene.remove(object);
    });
  }
});
</script>

<style>
.animated-header-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.animated-header-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem;
}
</style> 