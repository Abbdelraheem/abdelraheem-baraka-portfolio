// Dedicated Clean 3D Hero Sculpture (High-Contrast Titanium & Lime Core)
(function initClean3D() {
  const container = document.getElementById('hero-3d-box');
  const canvas = document.getElementById('hero-3d-canvas');
  if (!container || !canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 46);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Lighting ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
  mainLight.position.set(25, 35, 30);
  scene.add(mainLight);

  // Lime Accent Spotlight
  const limeLight = new THREE.PointLight(0xc8ff3d, 4.5, 90);
  limeLight.position.set(-20, 20, 25);
  scene.add(limeLight);

  // Subtle Cyan Rim
  const rimLight = new THREE.PointLight(0x38bdf8, 2.5, 70);
  rimLight.position.set(20, -20, -20);
  scene.add(rimLight);

  // --- 3D Sculpture Group ---
  const group = new THREE.Group();
  scene.add(group);

  // 1. Central Faceted Titanium/Lime Core
  const coreGeo = new THREE.IcosahedronGeometry(11, 0);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x161b24,
    metalness: 0.95,
    roughness: 0.15,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  group.add(coreMesh);

  // 2. Outer Wireframe Cage with Lime Edges
  const cageGeo = new THREE.IcosahedronGeometry(15, 1);
  const cageMat = new THREE.MeshBasicMaterial({
    color: 0xc8ff3d,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const cageMesh = new THREE.Mesh(cageGeo, cageMat);
  group.add(cageMesh);

  // 3. Primary Orbital Precision Ring
  const ringGeo1 = new THREE.TorusGeometry(20.5, 0.28, 16, 100);
  const ringMat1 = new THREE.MeshStandardMaterial({
    color: 0xc8ff3d,
    metalness: 0.9,
    roughness: 0.15
  });
  const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
  ringMesh1.rotation.x = Math.PI / 3;
  group.add(ringMesh1);

  // 4. Secondary Cross Ring (Titanium)
  const ringGeo2 = new THREE.TorusGeometry(23.5, 0.2, 16, 100);
  const ringMat2 = new THREE.MeshStandardMaterial({
    color: 0x8e98a8,
    metalness: 0.95,
    roughness: 0.2
  });
  const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
  ringMesh2.rotation.y = Math.PI / 4;
  ringMesh2.rotation.z = Math.PI / 6;
  group.add(ringMesh2);

  // 5. Ambient Floating Lime Star Particles
  const pCount = 180;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i++) {
    const i3 = i * 3;
    const r = 18 + Math.random() * 22;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pPos[i3] = r * Math.sin(phi) * Math.cos(theta);
    pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pPos[i3 + 2] = r * Math.cos(phi);
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xc8ff3d,
    size: 1.2,
    transparent: true,
    opacity: 0.7
  });
  const particles = new THREE.Points(pGeo, pMat);
  group.add(particles);

  // --- Mouse Interactivity ---
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    targetX = ((e.clientX - (rect.left + rect.width / 2)) / rect.width) * 1.5;
    targetY = ((e.clientY - (rect.top + rect.height / 2)) / rect.height) * 1.5;
  });

  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    group.rotation.y = time * 0.2 + mouseX * 0.8;
    group.rotation.x = Math.sin(time * 0.12) * 0.2 + mouseY * 0.8;

    ringMesh1.rotation.z = time * 0.25;
    ringMesh2.rotation.x = -time * 0.18;
    cageMesh.rotation.y = -time * 0.15;
    particles.rotation.y = time * 0.04;

    renderer.render(scene, camera);
  }

  animate();
})();
