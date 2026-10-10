// Interactive 3D WebGL Hero Canvas using Three.js
(function initThreeScene() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07090e, 0.0018);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 85;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Lighting ---
  const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
  scene.add(ambientLight);

  const pointLightCyan = new THREE.PointLight(0x00f2fe, 3, 150);
  pointLightCyan.position.set(30, 40, 50);
  scene.add(pointLightCyan);

  const pointLightPurple = new THREE.PointLight(0x8a2be2, 3, 150);
  pointLightPurple.position.set(-30, -30, 40);
  scene.add(pointLightPurple);

  // --- 3D Holographic Geometric Nodes ---
  const group = new THREE.Group();
  scene.add(group);

  // Central Icosahedron wireframe core
  const coreGeometry = new THREE.IcosahedronGeometry(22, 2);
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
    roughness: 0.2,
    metalness: 0.8
  });
  const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(coreMesh);

  // Inner floating octahedron
  const innerGeo = new THREE.OctahedronGeometry(12, 0);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x4facfe,
    wireframe: true,
    transparent: true,
    opacity: 0.45,
    roughness: 0.1,
    metalness: 0.9
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  group.add(innerMesh);

  // Orbiting Torus Rings
  const ringGeo = new THREE.TorusGeometry(32, 0.25, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    transparent: true,
    opacity: 0.25
  });
  const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
  ringMesh1.rotation.x = Math.PI / 3;
  group.add(ringMesh1);

  const ringMesh2 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
    color: 0x8a2be2,
    transparent: true,
    opacity: 0.2
  }));
  ringMesh2.rotation.y = Math.PI / 4;
  group.add(ringMesh2);

  // --- Floating Cyber Particle Nebula ---
  const particleCount = 1400;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const color1 = new THREE.Color(0x00f2fe);
  const color2 = new THREE.Color(0x4facfe);
  const color3 = new THREE.Color(0x8a2be2);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Distribute in a spherical cloud around the scene
    const radius = 40 + Math.random() * 90;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    // Mixed vibrant cyber colors
    const randCol = Math.random();
    const chosenColor = randCol < 0.5 ? color1 : (randCol < 0.8 ? color2 : color3);
    colors[i3] = chosenColor.r;
    colors[i3 + 1] = chosenColor.g;
    colors[i3 + 2] = chosenColor.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle material with soft circle texture simulation
  const particleMaterial = new THREE.PointsMaterial({
    size: 1.4,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  // --- Mouse & Interaction Variables ---
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - window.innerWidth / 2) * 0.04;
    targetMouseY = (e.clientY - window.innerHeight / 2) * 0.04;
  });

  // Touch support for mobile devices
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      targetMouseX = (e.touches[0].clientX - window.innerWidth / 2) * 0.03;
      targetMouseY = (e.touches[0].clientY - window.innerHeight / 2) * 0.03;
    }
  }, { passive: true });

  // Scroll reaction
  let scrollY = 0;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  // Responsive resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // --- Animation Loop ---
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth lerp mouse tracking
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    camera.position.x = mouseX * 0.5;
    camera.position.y = -mouseY * 0.5;
    camera.lookAt(0, 0, 0);

    // Continuous 3D Core rotation
    coreMesh.rotation.y = elapsedTime * 0.15;
    coreMesh.rotation.x = elapsedTime * 0.1;

    innerMesh.rotation.y = -elapsedTime * 0.25;
    innerMesh.rotation.z = elapsedTime * 0.18;

    ringMesh1.rotation.z = elapsedTime * 0.2;
    ringMesh2.rotation.x = -elapsedTime * 0.15;

    // Slow ambient rotation of particles
    particleSystem.rotation.y = elapsedTime * 0.03;
    particleSystem.rotation.x = elapsedTime * 0.015;

    // Shift group according to scroll
    group.position.y = (scrollY * 0.03);
    group.rotation.y = (scrollY * 0.001);

    renderer.render(scene, camera);
  }

  animate();
})();
