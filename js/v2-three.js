// V2 Precision Engineering 3D Canvas (Monochrome Architectural Wireframe)
(function initV2ThreeScene() {
  const canvas = document.getElementById('v2-webgl-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0c10, 0.0035);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 15, 65);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Lighting: Neutral Titanium & Clean White ---
  const ambientLight = new THREE.AmbientLight(0x20242c, 1.8);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(20, 40, 20);
  scene.add(dirLight);

  // Subtle Warm Amber Accent Focal Light (Very subtle, 0 rainbow)
  const amberLight = new THREE.PointLight(0xf59e0b, 1.5, 90);
  amberLight.position.set(-25, 20, 25);
  scene.add(amberLight);

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // --- 1. Architectural Wireframe Terrain (Lidar Mesh) ---
  const planeWidth = 140;
  const planeHeight = 140;
  const planeSegments = 40;
  const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight, planeSegments, planeSegments);
  planeGeometry.rotateX(-Math.PI / 2);

  // Initial wave structure in vertices
  const posAttr = planeGeometry.attributes.position;
  const originalY = new Float32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const z = posAttr.getZ(i);
    const dist = Math.sqrt(x * x + z * z);
    const yVal = Math.sin(dist * 0.1) * 3 - 12;
    posAttr.setY(i, yVal);
    originalY[i] = yVal;
  }
  posAttr.needsUpdate = true;

  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0x222a38,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const terrainMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  terrainMesh.position.y = -8;
  mainGroup.add(terrainMesh);

  // --- 2. Central Mathematical Polytope (Nested Wireframe Gyroscope) ---
  const cageGroup = new THREE.Group();
  cageGroup.position.set(0, 10, 0);
  mainGroup.add(cageGroup);

  // Outer Icosahedron
  const outerGeo = new THREE.IcosahedronGeometry(16, 1);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0x475569,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });
  const outerCage = new THREE.Mesh(outerGeo, outerMat);
  cageGroup.add(outerCage);

  // Mid Octahedron
  const midGeo = new THREE.OctahedronGeometry(10, 0);
  const midMat = new THREE.MeshBasicMaterial({
    color: 0x94a3b8,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  const midCage = new THREE.Mesh(midGeo, midMat);
  cageGroup.add(midCage);

  // Inner Solid Amber Core Node
  const coreGeo = new THREE.DodecahedronGeometry(3.5, 0);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.9,
    roughness: 0.15,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  cageGroup.add(coreMesh);

  // Outer Coordinates Crosshair Rings (Architectural HUD)
  const ringGeo1 = new THREE.RingGeometry(24, 24.15, 64);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x334155,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.25
  });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 2;
  cageGroup.add(ring1);

  // --- Mouse & Parallax Handling ---
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let scrollY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX - window.innerWidth / 2) * 0.02;
    targetY = (e.clientY - window.innerHeight / 2) * 0.02;
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

    // Lerp mouse
    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    camera.position.x = currentX * 0.4;
    camera.position.y = 15 - currentY * 0.4;
    camera.lookAt(0, 5, 0);

    // Architectural Gyroscope Rotation
    outerCage.rotation.y = time * 0.08;
    outerCage.rotation.x = time * 0.04;

    midCage.rotation.y = -time * 0.12;
    midCage.rotation.z = time * 0.09;

    coreMesh.rotation.y = time * 0.2;
    coreMesh.rotation.x = -time * 0.15;

    // Subtle wave on terrain
    const pos = planeGeometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const wave = Math.sin(x * 0.1 + time * 0.8) * Math.cos(z * 0.1 + time * 0.6) * 1.8;
      pos.setY(i, originalY[i] + wave);
    }
    pos.needsUpdate = true;

    // Scroll vertical parallax
    mainGroup.position.y = scrollY * 0.02;
    mainGroup.rotation.y = scrollY * 0.0006;

    renderer.render(scene, camera);
  }

  animate();
})();
