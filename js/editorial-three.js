// Style 2: Bespoke Olive & Gold Organic 3D Sculpture
(function initEditorial3D() {
  const container = document.getElementById('editorial-3d-box');
  const canvas = document.getElementById('editorial-3d-canvas');
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
  const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.4);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffeedd, 3.2);
  keyLight.position.set(25, 30, 25);
  scene.add(keyLight);

  // Warm Gold Fill
  const goldLight = new THREE.PointLight(0xd4b16a, 5.0, 80);
  goldLight.position.set(-20, 15, 20);
  scene.add(goldLight);

  // Soft Sage Rim
  const sageLight = new THREE.PointLight(0x86efac, 3.0, 70);
  sageLight.position.set(15, -20, -15);
  scene.add(sageLight);

  // --- Group ---
  const group = new THREE.Group();
  scene.add(group);

  // 1. Organic Golden Torus Knot
  const knotGeo = new THREE.TorusKnotGeometry(10, 2.5, 140, 32, 2, 3);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0x1f2b23,
    metalness: 0.88,
    roughness: 0.18,
    wireframe: false
  });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  group.add(knotMesh);

  // 2. Fine Golden Wireframe Halo
  const wireGeo = new THREE.TorusKnotGeometry(10.2, 2.55, 64, 16, 2, 3);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xd4b16a,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  group.add(wireMesh);

  // 3. Ambient Floating Gold Dust
  const pCount = 140;
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
    color: 0xd4b16a,
    size: 1.2,
    transparent: true,
    opacity: 0.65
  });
  const particles = new THREE.Points(pGeo, pMat);
  group.add(particles);

  // --- Mouse Tilt ---
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

    group.rotation.x = time * 0.18 + mouseY * 0.6;
    group.rotation.y = time * 0.22 + mouseX * 0.6;
    particles.rotation.y = time * 0.03;

    renderer.render(scene, camera);
  }

  animate();
})();
