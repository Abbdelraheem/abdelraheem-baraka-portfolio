// Multi-Style 3D WebGL Engine (5 Swappable Styles in Real-Time)
(function initMulti3DEngine() {
  const canvas = document.getElementById('multi-3d-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 10, 75);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- Lighting Setup ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
  dirLight1.position.set(30, 45, 40);
  scene.add(dirLight1);

  const pointLightColor = new THREE.PointLight(0xf2cb8b, 3.0, 120);
  pointLightColor.position.set(-25, 20, 30);
  scene.add(pointLightColor);

  const rimLight = new THREE.PointLight(0x38bdf8, 2.0, 100);
  rimLight.position.set(20, -30, -20);
  scene.add(rimLight);

  // Groups for each style
  const groups = {
    emerald: new THREE.Group(),
    mercury: new THREE.Group(),
    lidar: new THREE.Group(),
    crystals: new THREE.Group(),
    quantum: new THREE.Group()
  };

  Object.values(groups).forEach(g => scene.add(g));

  let currentActiveStyle = localStorage.getItem('active_3d_style') || 'emerald';

  // ==========================================
  // 1. STYLE: EMERALD (Oweiss Emerald & Gold)
  // ==========================================
  (function buildEmerald() {
    const g = groups.emerald;
    
    // Core Jewel
    const jewelGeo = new THREE.IcosahedronGeometry(13, 0);
    const jewelMat = new THREE.MeshStandardMaterial({
      color: 0xf2cb8b,
      metalness: 0.9,
      roughness: 0.15
    });
    const jewel = new THREE.Mesh(jewelGeo, jewelMat);
    g.add(jewel);

    // Halo Cage
    const cageGeo = new THREE.IcosahedronGeometry(19, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xf8e8d0,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    g.add(cage);

    // Orbit Ring
    const ringGeo = new THREE.TorusGeometry(27, 0.2, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xdfb26b,
      metalness: 0.9,
      roughness: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    g.add(ring);

    // Embers
    const emberCount = 650;
    const emberGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount; i++) {
      const i3 = i * 3;
      const r = 35 + Math.random() * 85;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const embers = new THREE.Points(emberGeo, new THREE.PointsMaterial({
      color: 0xf2cb8b,
      size: 1.2,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    }));
    g.add(embers);

    g.userData = { jewel, cage, ring, embers };
  })();

  // ==========================================
  // 2. STYLE: MERCURY (Liquid Chrome Torus Knot)
  // ==========================================
  (function buildMercury() {
    const g = groups.mercury;

    // Liquid Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(12, 3.8, 128, 32);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xdde6ed,
      metalness: 0.95,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    g.add(knot);

    // Liquid floating droplets
    const droplets = [];
    for (let i = 0; i < 12; i++) {
      const dropGeo = new THREE.SphereGeometry(1.2 + Math.random() * 1.8, 24, 24);
      const drop = new THREE.Mesh(dropGeo, knotMat);
      const angle = (i / 12) * Math.PI * 2;
      const dist = 26 + Math.random() * 10;
      drop.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist * 0.6, (Math.random() - 0.5) * 20);
      drop.userData = { angle, dist, speed: 0.005 + Math.random() * 0.008 };
      droplets.push(drop);
      g.add(drop);
    }

    g.userData = { knot, droplets };
  })();

  // ==========================================
  // 3. STYLE: LIDAR (Mathematical Terrain & Gyroscope)
  // ==========================================
  (function buildLidar() {
    const g = groups.lidar;

    // Wireframe wave grid
    const planeGeo = new THREE.PlaneGeometry(120, 120, 36, 36);
    planeGeo.rotateX(-Math.PI / 2);
    const pos = planeGeo.attributes.position;
    const origY = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const d = Math.sqrt(x * x + z * z);
      const y = Math.sin(d * 0.12) * 3.5 - 14;
      pos.setY(i, y);
      origY[i] = y;
    }
    pos.needsUpdate = true;

    const terrain = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
      color: 0x334155,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    }));
    g.add(terrain);

    // Gyroscope Cage
    const cageGeo = new THREE.OctahedronGeometry(12, 1);
    const cage = new THREE.Mesh(cageGeo, new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    }));
    cage.position.set(0, 10, 0);
    g.add(cage);

    g.userData = { terrain, planeGeo, origY, cage };
  })();

  // ==========================================
  // 4. STYLE: CRYSTALS (Floating Obsidian & Gold Prisms)
  // ==========================================
  (function buildCrystals() {
    const g = groups.crystals;

    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x181818,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false
    });
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.6 });

    const prisms = [];
    for (let i = 0; i < 18; i++) {
      const geo = new THREE.ConeGeometry(2 + Math.random() * 3, 7 + Math.random() * 8, 4);
      const mesh = new THREE.Mesh(geo, crystalMat);
      
      const wireGeo = new THREE.WireframeGeometry(geo);
      const wire = new THREE.LineSegments(wireGeo, edgeMat);
      mesh.add(wire);

      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        rotX: (Math.random() - 0.5) * 0.015,
        rotY: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.008 + Math.random() * 0.01,
        origY: mesh.position.y
      };

      prisms.push(mesh);
      g.add(mesh);
    }

    g.userData = { prisms };
  })();

  // ==========================================
  // 5. STYLE: QUANTUM (Wavefield Points Matrix)
  // ==========================================
  (function buildQuantum() {
    const g = groups.quantum;

    const count = 2200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const origPos = new Float32Array(count * 3);

    const cols = 50;
    const rows = 44;
    let idx = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        const i3 = idx * 3;
        const xPos = (x - cols / 2) * 2.4;
        const zPos = (z - rows / 2) * 2.4;
        const yPos = Math.sin(x * 0.25) * Math.cos(z * 0.25) * 5 - 5;

        pos[i3] = xPos;
        pos[i3 + 1] = yPos;
        pos[i3 + 2] = zPos;

        origPos[i3] = xPos;
        origPos[i3 + 1] = yPos;
        origPos[i3 + 2] = zPos;

        idx++;
      }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 1.4,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const waveField = new THREE.Points(geo, mat);
    g.add(waveField);

    g.userData = { waveField, geo, origPos, count };
  })();

  // --- Switch Function ---
  window.switch3DStyle = function (styleKey) {
    if (!groups[styleKey]) return;
    currentActiveStyle = styleKey;
    localStorage.setItem('active_3d_style', styleKey);

    // Update document theme attribute
    document.documentElement.setAttribute('data-theme', styleKey);

    // Update Active Button in Dock
    document.querySelectorAll('[data-style-target]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-style-target') === styleKey);
    });

    // Adjust lights according to style
    if (styleKey === 'emerald') {
      scene.fog.color.setHex(0x021a12);
      pointLightColor.color.setHex(0xf2cb8b);
      rimLight.color.setHex(0x0e5d43);
    } else if (styleKey === 'mercury') {
      scene.fog.color.setHex(0x08090d);
      pointLightColor.color.setHex(0x60a5fa);
      rimLight.color.setHex(0xe2e8f0);
    } else if (styleKey === 'lidar') {
      scene.fog.color.setHex(0x07080a);
      pointLightColor.color.setHex(0xf59e0b);
      rimLight.color.setHex(0x38bdf8);
    } else if (styleKey === 'crystals') {
      scene.fog.color.setHex(0x050505);
      pointLightColor.color.setHex(0xd4af37);
      rimLight.color.setHex(0xffffff);
    } else if (styleKey === 'quantum') {
      scene.fog.color.setHex(0x020b08);
      pointLightColor.color.setHex(0x10b981);
      rimLight.color.setHex(0x34d399);
    }

    // Toggle Visibility
    Object.keys(groups).forEach(key => {
      groups[key].visible = (key === styleKey);
    });
  };

  // --- Mouse & Parallax State ---
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

    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    camera.position.x = currentX * 0.45;
    camera.position.y = 10 - currentY * 0.45;
    camera.lookAt(0, 5, 0);

    // 1. Animate Emerald
    if (groups.emerald.visible) {
      const { jewel, cage, ring, embers } = groups.emerald.userData;
      jewel.rotation.y = time * 0.12;
      jewel.rotation.x = time * 0.08;
      cage.rotation.y = -time * 0.08;
      ring.rotation.z = time * 0.14;
      embers.rotation.y = time * 0.02;
      groups.emerald.position.y = scrollY * 0.02;
    }

    // 2. Animate Mercury
    if (groups.mercury.visible) {
      const { knot, droplets } = groups.mercury.userData;
      knot.rotation.y = time * 0.2;
      knot.rotation.x = Math.sin(time * 0.3) * 0.4;
      droplets.forEach((d, i) => {
        d.userData.angle += d.userData.speed;
        d.position.x = Math.cos(d.userData.angle) * d.userData.dist;
        d.position.y = Math.sin(d.userData.angle) * d.userData.dist * 0.6 + Math.sin(time + i) * 2;
      });
      groups.mercury.position.y = scrollY * 0.02;
    }

    // 3. Animate Lidar
    if (groups.lidar.visible) {
      const { planeGeo, origY, cage } = groups.lidar.userData;
      cage.rotation.y = time * 0.15;
      cage.rotation.x = time * 0.08;
      const pos = planeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const wave = Math.sin(x * 0.1 + time * 0.8) * Math.cos(z * 0.1 + time * 0.6) * 2;
        pos.setY(i, origY[i] + wave);
      }
      pos.needsUpdate = true;
      groups.lidar.position.y = scrollY * 0.02;
    }

    // 4. Animate Crystals
    if (groups.crystals.visible) {
      const { prisms } = groups.crystals.userData;
      prisms.forEach((p, idx) => {
        p.rotation.x += p.userData.rotX;
        p.rotation.y += p.userData.rotY;
        p.position.y = p.userData.origY + Math.sin(time * 0.8 + idx) * 3;
      });
      groups.crystals.position.y = scrollY * 0.02;
    }

    // 5. Animate Quantum
    if (groups.quantum.visible) {
      const { geo, origPos, count } = groups.quantum.userData;
      const pos = geo.attributes.position;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = origPos[i3];
        const z = origPos[i3 + 2];
        const yVal = origPos[i3 + 1] + Math.sin(x * 0.15 + time * 1.5) * Math.cos(z * 0.15 + time * 1.2) * 3.5;
        pos.setY(i, yVal);
      }
      pos.needsUpdate = true;
      groups.quantum.rotation.y = time * 0.015;
      groups.quantum.position.y = scrollY * 0.02;
    }

    renderer.render(scene, camera);
  }

  animate();

  // Initial activate
  window.switch3DStyle(currentActiveStyle);
})();
