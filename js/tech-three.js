// Style 3: Linear Tech Holographic Cube Matrix
(function initTech3D() {
  const container = document.getElementById('tech-3d-box');
  const canvas = document.getElementById('tech-3d-canvas');
  if (!container || !canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 48);

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

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
  mainLight.position.set(30, 30, 30);
  scene.add(mainLight);

  // Cyan Neon Point
  const cyanLight = new THREE.PointLight(0x38bdf8, 5.0, 90);
  cyanLight.position.set(-20, 20, 25);
  scene.add(cyanLight);

  // Teal Accent
  const tealLight = new THREE.PointLight(0x2dd4bf, 3.5, 70);
  tealLight.position.set(20, -15, -15);
  scene.add(tealLight);

  // --- Group ---
  const group = new THREE.Group();
  scene.add(group);

  // 1. Central Metallic Dark Core
  const coreGeo = new THREE.OctahedronGeometry(9, 0);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    metalness: 0.95,
    roughness: 0.12,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  group.add(coreMesh);

  // 2. Holographic Outer Cage (Box)
  const boxGeo = new THREE.BoxGeometry(18, 18, 18);
  const boxEdges = new THREE.EdgesGeometry(boxGeo);
  const boxLineMat = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    linewidth: 1.5,
    transparent: true,
    opacity: 0.7
  });
  const boxLine = new THREE.LineSegments(boxEdges, boxLineMat);
  group.add(boxLine);

  // 3. Inner Precision Wireframe Octahedron
  const octWireGeo = new THREE.OctahedronGeometry(13, 0);
  const octWireMat = new THREE.MeshBasicMaterial({
    color: 0x2dd4bf,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const octWire = new THREE.Mesh(octWireGeo, octWireMat);
  group.add(octWire);

  // 4. Dual Orbiting Rings
  const ringGeo = new THREE.TorusGeometry(22, 0.18, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.6
  });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 3;
  group.add(ring1);

  // 5. Ambient Data Nodes
  const pCount = 160;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i++) {
    const i3 = i * 3;
    const r = 16 + Math.random() * 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pPos[i3] = r * Math.sin(phi) * Math.cos(theta);
    pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pPos[i3 + 2] = r * Math.cos(phi);
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 1.1,
    transparent: true,
    opacity: 0.7
  });
  const particles = new THREE.Points(pGeo, pMat);
  group.add(particles);

  // --- Mouse Motion ---
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

    group.rotation.y = time * 0.2 + mouseX * 0.7;
    group.rotation.x = time * 0.12 + mouseY * 0.7;

    coreMesh.rotation.y = -time * 0.3;
    boxLine.rotation.y = time * 0.15;
    ring1.rotation.z = time * 0.2;
    particles.rotation.y = time * 0.04;

    renderer.render(scene, camera);
  }

  animate();
})();
