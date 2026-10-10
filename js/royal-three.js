// Royal Emerald & Gold Kinetic 3D Canvas
(function initRoyalThree() {
  const canvas = document.getElementById('royal-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x021a12, 0.0028);

  const camera = new THREE.PerspectiveCamera(
    58,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 10, 75);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Lighting: Warm Champagne Gold & Deep Emerald Rim ---
  const ambientLight = new THREE.AmbientLight(0x053022, 1.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xf8e8d0, 2.2);
  keyLight.position.set(30, 45, 40);
  scene.add(keyLight);

  const goldSpot = new THREE.PointLight(0xf2cb8b, 3.5, 120);
  goldSpot.position.set(-25, 20, 30);
  scene.add(goldSpot);

  const emeraldRim = new THREE.PointLight(0x0e5d43, 2.5, 100);
  emeraldRim.position.set(20, -30, -20);
  scene.add(emeraldRim);

  const rootGroup = new THREE.Group();
  scene.add(rootGroup);

  // --- Central Luxury Kinetic Sculpture ---
  const coreGroup = new THREE.Group();
  coreGroup.position.set(0, 8, 0);
  rootGroup.add(coreGroup);

  // 1. Faceted Champagne Gold Core Jewel
  const coreGeo = new THREE.IcosahedronGeometry(14, 0);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xf2cb8b,
    metalness: 0.88,
    roughness: 0.18,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreGroup.add(coreMesh);

  // 2. Outer Wireframe Halo Cage in Warm Cream
  const cageGeo = new THREE.IcosahedronGeometry(20, 1);
  const cageMat = new THREE.MeshBasicMaterial({
    color: 0xf8e8d0,
    wireframe: true,
    transparent: true,
    opacity: 0.28
  });
  const cageMesh = new THREE.Mesh(cageGeo, cageMat);
  coreGroup.add(cageMesh);

  // 3. Orbital Royal Rings
  const ringGeo1 = new THREE.TorusGeometry(28, 0.22, 16, 120);
  const ringMat1 = new THREE.MeshStandardMaterial({
    color: 0xdfb26b,
    metalness: 0.9,
    roughness: 0.2
  });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 3.2;
  coreGroup.add(ring1);

  const ringGeo2 = new THREE.TorusGeometry(32, 0.18, 16, 120);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0xf8e8d0,
    transparent: true,
    opacity: 0.2
  });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.y = Math.PI / 2.6;
  coreGroup.add(ring2);

  // --- Floating Gold Embers / Starlight Field ---
  const particleCount = 750;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleScales = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const r = 35 + Math.random() * 95;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    particlePositions[i3] = r * Math.sin(phi) * Math.cos(theta);
    particlePositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePositions[i3 + 2] = r * Math.cos(phi);

    particleScales[i] = Math.random();
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xf2cb8b,
    size: 1.3,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });

  const particleField = new THREE.Points(particleGeo, particleMat);
  rootGroup.add(particleField);

  // --- Mouse & Parallax Logic ---
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let scrollY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX - window.innerWidth / 2) * 0.025;
    targetY = (e.clientY - window.innerHeight / 2) * 0.025;
  });

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

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
    const time = clock.getElapsedTime();

    // Smooth lerp mouse tracking
    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    camera.position.x = currentX * 0.5;
    camera.position.y = 10 - currentY * 0.5;
    camera.lookAt(0, 8, 0);

    // Jewel & Ring Choreography
    coreMesh.rotation.y = time * 0.12;
    coreMesh.rotation.x = time * 0.08;

    cageMesh.rotation.y = -time * 0.09;
    cageMesh.rotation.z = time * 0.06;

    ring1.rotation.z = time * 0.14;
    ring2.rotation.x = -time * 0.11;

    particleField.rotation.y = time * 0.02;

    // Scroll vertical parallax
    rootGroup.position.y = scrollY * 0.022;
    rootGroup.rotation.y = scrollY * 0.0005;

    renderer.render(scene, camera);
  }

  animate();
})();
