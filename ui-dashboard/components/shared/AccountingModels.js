import * as THREE from 'three';

// Creates a 3D dollar/currency symbol
export function createCurrencySymbol(scene, position, color, scale = 1, rotation = { x: 0, y: 0, z: 0 }) {
  // Create the currency sign using a TextGeometry or custom geometry
  const material = new THREE.MeshPhongMaterial({
    color: color,
    transparent: true,
    opacity: 0.9,
    specular: 0xffffff,
    shininess: 100
  });

  // Using a torus as base for the $ sign
  const mainGeometry = new THREE.TorusGeometry(0.5 * scale, 0.1 * scale, 16, 32);
  const main = new THREE.Mesh(mainGeometry, material);
  main.position.set(position.x, position.y, position.z);
  main.rotation.set(rotation.x, rotation.y, rotation.z);
  
  // Add a vertical line through the center
  const lineGeometry = new THREE.CylinderGeometry(0.08 * scale, 0.08 * scale, 1.2 * scale, 16);
  const line = new THREE.Mesh(lineGeometry, material);
  line.position.set(position.x, position.y, position.z + 0.01);
  line.rotation.set(rotation.x, rotation.y, rotation.z);
  
  // Create a group for the symbol
  const currencySymbol = new THREE.Group();
  currencySymbol.add(main);
  currencySymbol.add(line);
  
  // Add animation data
  currencySymbol.userData = {
    initialY: position.y,
    rotationSpeed: 0.01,
    floatFactor: Math.random() * 0.5 + 0.8
  };
  
  scene.add(currencySymbol);
  return currencySymbol;
}

// Creates a simplified document/invoice model
export function createDocumentModel(scene, position, color, scale = 1) {
  // Document base
  const docGeometry = new THREE.BoxGeometry(0.8 * scale, 1 * scale, 0.05 * scale);
  const docMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: false,
  });
  
  const document = new THREE.Mesh(docGeometry, docMaterial);
  document.position.set(position.x, position.y, position.z);
  
  // Document lines (text representation)
  const lineMaterial = new THREE.MeshBasicMaterial({ color: color });
  
  // Create 4 lines to represent text
  for (let i = 0; i < 4; i++) {
    const lineWidth = (Math.random() * 0.3 + 0.3) * scale;
    const lineGeometry = new THREE.BoxGeometry(lineWidth, 0.05 * scale, 0.06 * scale);
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    
    // Position the line on the document
    line.position.set(
      position.x - 0.2 * scale + (Math.random() * 0.1),
      position.y + 0.3 * scale - (i * 0.2 * scale),
      position.z + 0.06 * scale
    );
    
    document.add(line);
  }
  
  // Add animation data
  document.userData = {
    initialY: position.y,
    rotationSpeed: 0.002,
    floatFactor: Math.random() * 0.3 + 0.5
  };
  
  scene.add(document);
  return document;
}

// Creates a circular chart/pie chart
export function createPieChart(scene, position, scale = 1) {
  const pieGroup = new THREE.Group();
  pieGroup.position.set(position.x, position.y, position.z);
  
  // Number of segments (3-5)
  const segments = Math.floor(Math.random() * 3) + 3;
  const segmentSize = (Math.PI * 2) / segments;
  
  // Create each segment with different colors
  const colors = [0x0066cc, 0x00c6ff, 0x35495e, 0x41b883, 0xe74c3c];
  
  for (let i = 0; i < segments; i++) {
    const startAngle = i * segmentSize;
    const endAngle = (i + 1) * segmentSize;
    
    const segmentGeometry = new THREE.RingGeometry(
      0.2 * scale,
      0.7 * scale,
      16,
      1,
      startAngle,
      segmentSize
    );
    
    const segmentMaterial = new THREE.MeshPhongMaterial({
      color: colors[i % colors.length],
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    
    const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
    pieGroup.add(segment);
  }
  
  // Add animation data
  pieGroup.userData = {
    initialY: position.y,
    rotationSpeed: 0.005,
    floatFactor: Math.random() * 0.4 + 0.6
  };
  
  scene.add(pieGroup);
  return pieGroup;
}

// Creates a bar chart
export function createBarChart(scene, position, color, scale = 1) {
  const barGroup = new THREE.Group();
  barGroup.position.set(position.x, position.y, position.z);
  
  // Base for the chart
  const baseGeometry = new THREE.BoxGeometry(1.5 * scale, 0.05 * scale, 0.05 * scale);
  const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  barGroup.add(base);
  
  // Create bars
  const numBars = 5;
  const barWidth = (1.5 * scale) / (numBars * 2);
  
  for (let i = 0; i < numBars; i++) {
    // Random height for each bar
    const height = (Math.random() * 0.5 + 0.2) * scale;
    
    const barGeometry = new THREE.BoxGeometry(barWidth, height, 0.05 * scale);
    const barMaterial = new THREE.MeshPhongMaterial({
      color: i % 2 === 0 ? color : 0x00c6ff,
      transparent: true,
      opacity: 0.9
    });
    
    const bar = new THREE.Mesh(barGeometry, barMaterial);
    
    // Position the bar
    bar.position.set(
      -0.7 * scale + (i * barWidth * 2) + barWidth,
      height / 2,
      0
    );
    
    barGroup.add(bar);
  }
  
  // Add animation data
  barGroup.userData = {
    initialY: position.y,
    rotationSpeed: 0.003,
    floatFactor: Math.random() * 0.3 + 0.7
  };
  
  scene.add(barGroup);
  return barGroup;
}

// Animate the accounting objects
export function animateAccountingObjects(objects, deltaTime) {
  objects.forEach(object => {
    // Rotate the object
    object.rotation.y += object.userData.rotationSpeed;
    
    // Floating animation
    object.position.y = object.userData.initialY + 
      Math.sin(Date.now() * 0.001 * object.userData.floatFactor) * 0.2;
  });
} 