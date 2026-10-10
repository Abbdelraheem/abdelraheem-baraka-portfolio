/* ============================================================
   HYBRID ARCHITECT PORTFOLIO — CORE ENGINE & 3D
   Colors: White & Emerald Green | Structure: Oweiss | 3D: Geometric Sculpture
   Primary Language: English (Default) | Secondary Language: Arabic
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Preloader & Landing Sequence ---------- */
  const preloader = document.querySelector('.preloader');
  const preNum = document.getElementById('preloaderNum');
  const preFill = document.getElementById('preloaderFill');

  function triggerHeroLanding() {
    if (typeof window.trigger3dLanding === 'function') {
      window.trigger3dLanding();
    }
  }

  function finishPreloader() {
    if (!preloader) {
      triggerHeroLanding();
      initCounters();
      return;
    }
    preloader.classList.add('done');
    setTimeout(() => {
      if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
    }, 700);
    setTimeout(triggerHeroLanding, 100);
    initCounters();
  }

  if (preloader) {
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      if (preNum) preNum.textContent = String(p).padStart(2, '0');
      if (preFill) preFill.style.width = p + '%';
      if (p >= 100) {
        clearInterval(interval);
        finishPreloader();
      }
    }, 25);
  } else {
    triggerHeroLanding();
    initCounters();
  }

  /* ---------- Animated Counters ---------- */
  function initCounters() {
    const counterEls = document.querySelectorAll('[data-count]');
    counterEls.forEach(el => {
      const target = parseFloat(el.getAttribute('data-count')) || 0;
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';

      let start = 0;
      const duration = 1600;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * ease;

        el.textContent = current.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toFixed(decimals) + suffix;
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  /* ---------- Custom Cursor ---------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  if (cursorDot && cursorRing && !window.matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('cursor-on');
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    function loopCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(loopCursor);
    }
    loopCursor();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
    });
  }

  /* ---------- Scroll Progress Bar ---------- */
  const progressEl = document.querySelector('.scroll-progress');
  if (progressEl) {
    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressEl.style.transform = `scaleX(${pct})`;
    }, { passive: true });
  }

  /* ---------- Nav Toggle & Mobile Menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });
  }

  /* ============================================================
     3D ENGINE: TWEAKED GEOMETRIC SCULPTURE
     Crystalline Dodecahedron Core + Outer Lattice Cage + Dual Gyro Rings + Particle Nebula
     Rendered in White & Emerald Green palette with mouse parallax
     ============================================================ */
  let syncSculpturePosition = null;

  (function initTweakedGeometric3D() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 75;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.6);
    mainLight.position.set(30, 40, 40);
    scene.add(mainLight);

    const emeraldLight = new THREE.PointLight(0x059669, 4.5, 120);
    emeraldLight.position.set(-25, 20, 30);
    scene.add(emeraldLight);

    const mintFillLight = new THREE.PointLight(0x10b981, 2.8, 90);
    mintFillLight.position.set(25, -20, -20);
    scene.add(mintFillLight);

    // Sculpture Group
    const group = new THREE.Group();
    let baseTargetX = 0;
    let currentX = 0;

    function syncPos() {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      baseTargetX = window.innerWidth > 992 ? (isRtl ? -18 : 18) : 0;
      if (currentX === 0) currentX = baseTargetX;
    }
    syncSculpturePosition = syncPos;
    window.syncSculpturePos = syncPos;
    syncPos();
    currentX = baseTargetX;

    // Start in the sky with compact scale for the landing drop
    group.position.set(baseTargetX, 38, -10);
    group.scale.set(0.28, 0.28, 0.28);
    scene.add(group);

    // Landing Animation State
    let landingStartTime = null;
    const LANDING_DURATION = 1800; // ms

    function trigger3dLanding() {
      landingStartTime = performance.now();
    }
    window.trigger3dLanding = trigger3dLanding;

    if (!document.querySelector('.preloader')) {
      trigger3dLanding();
    }

    // 1. Central Polished Crystalline Core (12-faceted Dodecahedron — sleek, geometric, NO spiky triangles)
    const coreGeo = new THREE.DodecahedronGeometry(13.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      roughness: 0.16,
      metalness: 0.92
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Glowing Wireframe Edge Highlight on the Crystalline Core
    const coreWireGeo = new THREE.DodecahedronGeometry(13.6, 0);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    group.add(coreWireMesh);

    // 2. Outer Faceted Geometric Lattice Cage
    const outerCageGeo = new THREE.IcosahedronGeometry(21.5, 1);
    const outerCageMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      wireframe: true,
      transparent: true,
      opacity: 0.42,
      roughness: 0.2,
      metalness: 0.8
    });
    const outerCage = new THREE.Mesh(outerCageGeo, outerCageMat);
    group.add(outerCage);

    // 3. Orbiting Gyroscopic Rings
    // Ring 1: Emerald Vibrant Ring
    const ringGeo1 = new THREE.TorusGeometry(28, 0.28, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x059669,
      metalness: 0.9,
      roughness: 0.15
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // Ring 2: Dark Slate & Titanium Ring
    const ringGeo2 = new THREE.TorusGeometry(32, 0.22, 16, 120);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.95,
      roughness: 0.2
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 5;
    group.add(ring2);

    // 4. Floating Particle Nebula Swarm (750 sparkling emerald & mint particles)
    const particleCount = 750;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorEmerald = new THREE.Color(0x059669);
    const colorMint = new THREE.Color(0x10b981);
    const colorSlate = new THREE.Color(0x64748b);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 25 + Math.random() * 65;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const randCol = Math.random();
      const chosenColor = randCol < 0.6 ? colorEmerald : (randCol < 0.85 ? colorMint : colorSlate);
      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particleSystem);

    // Mouse & Touch Parallax
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;

    window.addEventListener('mousemove', e => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      syncPos();
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const now = performance.now();

      // Calculate Landing Drop
      let landingEase = 1;
      let landingOffsetY = 0;
      let landingScale = 1;
      let landingExtraSpin = 0;

      if (landingStartTime !== null) {
        const elapsed = now - landingStartTime;
        const p = Math.min(Math.max(elapsed / LANDING_DURATION, 0), 1);
        landingEase = 1 - Math.pow(1 - p, 4); // Quartic ease-out

        landingOffsetY = (1 - landingEase) * 38;

        if (p < 0.8) {
          landingScale = 0.28 + 0.72 * (p / 0.8);
        } else {
          const settleT = (p - 0.8) / 0.2;
          landingScale = 1.0 + Math.sin(settleT * Math.PI) * 0.035;
        }

        landingExtraSpin = (1 - landingEase) * 3.0;
      }

      currentX += (baseTargetX - currentX) * 0.08;
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      // Harmonic Hover
      const hoverY = landingEase > 0.95 ? Math.sin(time * 1.3) * 0.75 : 0;

      group.position.x = currentX + curX * 2.2;
      group.position.y = landingOffsetY + hoverY - curY * 1.5;
      group.position.z = (1 - landingEase) * -10;

      group.scale.set(landingScale, landingScale, landingScale);

      group.rotation.y = time * 0.16 + curX * 0.7 + landingExtraSpin;
      group.rotation.x = Math.sin(time * 0.12) * 0.18 + curY * 0.5;

      coreMesh.rotation.y = -time * 0.22 - landingExtraSpin * 1.2;
      coreMesh.rotation.x = time * 0.12;
      coreWireMesh.rotation.y = -time * 0.22 - landingExtraSpin * 1.2;
      coreWireMesh.rotation.x = time * 0.12;

      outerCage.rotation.y = time * 0.14 + landingExtraSpin * 0.8;
      ring1.rotation.z = time * 0.2 + landingExtraSpin * 2.0;
      ring2.rotation.x = -time * 0.16 - landingExtraSpin * 1.8;
      particleSystem.rotation.y = time * 0.035;

      renderer.render(scene, camera);
    }
    animate();
  })();

  /* ============================================================
     COMPREHENSIVE BILINGUAL ENGINE
     Default: English (Primary) | Secondary: Arabic
     ============================================================ */
  const i18nData = {
    en: {
      roleSub: "Systems & Cloud Architect",
      navProblem: "The Problem",
      navPhilosophy: "Philosophy",
      navMethod: "The Method",
      navCases: "Systems",
      navContact: "Consultation",
      navCta: "Book Architecture Call",
      navWa: "Direct WhatsApp",
      eyebrow: "Advanced Cloud & Systems Engineering",
      heroT1: "Software",
      heroT2: "is not just",
      heroT3: "code.",
      heroSub: "Behind every scalable platform is a <strong>rock-solid architecture.</strong>",
      heroPara: "Eng. Abdelraheem Baraka architects enterprise SaaS platforms, automated AI video pipelines, and advanced cybersecurity audits — built strictly to withstand traffic and drive business revenue.",
      heroBtn1: "Book Architecture Call",
      heroBtn2: "Explore Systems",
      stat1Lbl: "Cloud SaaS Platforms Built",
      stat2Lbl: "Vulnerability Scanning Engines",
      stat3Lbl: "Infrastructure Uptime SLA",
      stat4Lbl: "Milestone Execution Rate",
      scrollCue: "Scroll",

      // 01 The Problem
      probSec: "01 // THE PROBLEM",
      probTitle1: "Your issue isn't finding a programmer.",
      probTitle2: "Your issue is paying for code that crashes under load or stays unfinished.",
      probLead: "You invest thousands and wait months, only to get a sluggish app, critical security loopholes, or spaghetti code that can never scale. The gap between naive scripts and production systems begins here.",
      p1Tag: "01 // ARCHITECTURE",
      p1Title: "Building Without Architecture",
      p1Desc: "Developers jumping straight into writing code without modeling data flow, concurrency bottlenecks, or future scale.",
      p1Gap: "Appearance vs Reality",
      p1Before: "UI looks pretty on Day 1",
      p1After: "System crashes at the first 1,000 concurrent users",

      p2Tag: "02 // INTEGRATION",
      p2Title: "Superficial AI",
      p2Desc: "Hooking raw LLM APIs directly in synchronous request loops without worker queues, caching, or cost circuit-breakers.",
      p2Gap: "Appearance vs Reality",
      p2Before: "AI feature works in isolated testing",
      p2After: "Skyrocketing token bills and server timeouts under load",

      p3Tag: "03 // SECURITY",
      p3Title: "Security As An Afterthought",
      p3Desc: "Postponing penetration testing until release day, leaving SSRF, SQLi, and data exfiltration vectors wide open.",
      p3Gap: "Appearance vs Reality",
      p3Before: "App seems operational without visible bugs",
      p3After: "Catastrophic breach destroys your reputation and investment",

      // 02 The Architect
      archSec: "02 // THE ARCHITECT",
      archBadge: "LEAD SYSTEMS ENGINEER",
      archName: "Eng. Abdelraheem Baraka",
      archRole: "Systems & Cloud Architect",
      archBio: "I engineer software as resilient mission-critical systems, not disposable code. Every design decision serves system availability, data integrity, and low infrastructure costs over the long run.",
      pillarsTitle: "Three foundational pillars govern every line of code I ship.",
      pillarsLead: "Production stability is never an accident — it is the result of strict architectural discipline.",
      pil1Title: "Architecture Before Code",
      pil1Desc: "Data flow modeling, bottleneck profiling, and choosing the right stack before writing the first line of code.",
      pil2Title: "Security by Design",
      pil2Desc: "Sanitization, least-privilege scoping, and strict threat isolation built natively into every endpoint and storage bucket.",
      pil3Title: "Observable Performance",
      pil3Desc: "Sub-second response SLAs, low memory footprint, and comprehensive real-time telemetry.",

      // 03 The Method
      methodSec: "03 // THE METHOD",
      methodTitle: "How we build your system from blueprint to resilient production.",
      methodLead: "A 5-phase engineering methodology with documented execution and zero delays.",
      m1Title: "Decomposition & Analysis",
      m1Desc: "Deconstructing business logic, edge cases, and architectural risk points.",
      m1Tag: "REQUIREMENTS DECOMPOSITION",
      m2Title: "System Blueprint",
      m2Desc: "Database schemas, microservice contracts, and high-availability blueprints.",
      m2Tag: "SYSTEM BLUEPRINT",
      m3Title: "Core Implementation",
      m3Desc: "Writing high-throughput Clean Architecture domain code and asynchronous job queues.",
      m3Tag: "CORE IMPLEMENTATION",
      m4Title: "DevSecOps Audit",
      m4Desc: "17-module penetration testing, load testing, and deterministic vulnerability validation.",
      m4Tag: "DEVSECOPS AUDIT",
      m5Title: "Deployment & SLA",
      m5Desc: "Cloud infrastructure provisioning, automated CI/CD pipelines, and 24/7 telemetry monitoring.",
      m5Tag: "DEPLOYMENT & SLA",

      // 04 Case Studies
      casesSec: "04 // CASE STUDIES",
      casesTitle: "Systems speak in metrics.",
      casesLead: "Documented case studies of real-world running software platforms — architecture, business impact, and tech stack.",
      btnArch: "View Architecture & Solution",

      // Case 1 Clipzila
      c1Tag: "AI VIDEO PIPELINE",
      c1Sub: "CLIPZILA SAAS",
      c1Title: "Clipzila — One video in. A week of clips out.",
      c1Lbl1: "Manual Editing Saved",
      c1Note1: "Automated framing & tracking",
      c1Lbl2: "Processing Latency",
      c1Note2: "Per 1 hour of video footage",
      c1Lbl3: "Pipeline Defense",
      c1Note3: "SSRF protection & bucket isolation",
      c1Arch: "Architecture:",
      c1ArchText: "Decoupled worker queue uniting Groq Whisper, InsightFace speaker tracking, and accelerated FFmpeg, writing directly to Cloudflare R2 with Paddle automated billing.",
      c1Imp: "Business Impact:",
      c1ImpText: "Converts long video production into an automated pipeline with zero human intervention — production-ready for global subscribers.",

      // Case 2 RecFlow
      c2Tag: "DISTRIBUTED MEDIA SAAS",
      c2Sub: "HIGH-LOAD RECORDING",
      c2Title: "RecFlow — Distributed Cloud Media & Screen Recording SaaS",
      c2Lbl1: "API Bandwidth Drain",
      c2Note1: "Zero-API-Load Ingestion",
      c2Lbl2: "Concurrent Sessions",
      c2Note2: "Handled by BullMQ & Redis",
      c2Lbl3: "Transcoding Speedup",
      c2Note3: "Compared to traditional servers",
      c2Arch: "Architecture:",
      c2ArchText: "Chunked direct client uploads to S3/R2 storage buckets via presigned multi-part URLs, completely bypassing the web server with Fastify 5 and Redis background queues.",
      c2Imp: "Business Impact:",
      c2ImpText: "Cuts infrastructure data transfer costs by over 85% while delivering infinite scaling under concurrent streaming loads.",

      // Case 3 Kashf
      c3Tag: "ENTERPRISE SECURITY SCANNER",
      c3Sub: "DEVSECOPS & AUDITING",
      c3Title: "Kashf — Enterprise Cybersecurity & Vulnerability Scanner",
      c3Lbl1: "Security Audit Modules",
      c3Note1: "Includes AI Prompt Injection tests",
      c3Lbl2: "False Positives",
      c3Note2: "Automated PoC Validation",
      c3Lbl3: "Executive Reports",
      c3Note3: "Bilingual compliance summaries",
      c3Arch: "Architecture:",
      c3ArchText: "Deep scanning engine auditing 17 vulnerability vectors (SQLi, SSRF, Deserialization, SSTI) with an LLM security barrier and deterministic proof-of-concept validation.",
      c3Imp: "Business Impact:",
      c3ImpText: "Prevents critical data breaches and regulatory compliance fines before software deployment to production.",

      // Case 4 Yad Biyad
      c4Tag: "LIVE PRODUCTION PLATFORM",
      c4Sub: "HUMANITARIAN RELIEF",
      c4Title: "Yad Biyad — Live Field Relief Portal (handbyhandps.com)",
      c4Lbl1: "Deployment State",
      c4Note1: "Active on live official domain",
      c4Lbl2: "Uptime on Constrained Networks",
      c4Note2: "Ultra-resilient lightweight stack",
      c4Lbl3: "Audit Transparency",
      c4Note3: "Instant campaign documentation",
      c4Arch: "Architecture:",
      c4ArchText: "High-efficiency platform engineered for zero latency under severe mobile connectivity constraints with dedicated CMS for relief disbursements.",
      c4Imp: "Humanitarian Impact:",
      c4ImpText: "Powers transparent, verified disaster relief fundraising and transparent aid distribution for thousands of real beneficiaries.",

      // Case 5 NeonArcade
      c5Tag: "WEB GAMING HUB",
      c5Sub: "NEXT.JS 14 ECOSYSTEM",
      c5Title: "NeonArcade — Instant Browser Gaming Hub",
      c5Lbl1: "Instant Web Games",
      c5Note1: "Zero installation required",
      c5Lbl2: "Avg Session Duration",
      c5Note2: "Exceptional user retention",
      c5Lbl3: "Download Overhead",
      c5Note3: "Dynamic Code-Splitting",
      c5Arch: "Architecture:",
      c5ArchText: "Modular Next.js 14 architecture utilizing dynamic code-splitting and lazy imports with programmatic advertising slots.",
      c5Imp: "Business Impact:",
      c5ImpText: "Achieves an average session duration exceeding 15 minutes, generating reliable advertising monetisation.",

      // Case 6 Wasalny
      c6Tag: "MOBILE SYSTEMS",
      c6Sub: "FLUTTER ORDERS & LOGISTICS",
      c6Title: "Wasalny (وصلني) — Delivery & Logistics Operations Platform",
      c6Lbl1: "Offline Operation",
      c6Note1: "Automated sync upon reconnect",
      c6Lbl2: "UI Smoothness",
      c6Note2: "Clean Architecture on Flutter",
      c6Lbl3: "Manifest Data Loss",
      c6Note3: "Protected local SQLite ledger",
      c6Arch: "Architecture:",
      c6ArchText: "Cross-platform mobile application (Android & iOS) designed with Flutter Clean Architecture, featuring an offline-first SQLite cache layer.",
      c6Imp: "Business Impact:",
      c6ImpText: "Eliminates field delivery downtime in remote dead zones and ensures zero lost shipment records.",

      // Case 7 ElectroLux
      c7Tag: "HIGH-CONVERTING E-COMMERCE",
      c7Sub: "REACTIVE SPA STORE",
      c7Title: "ElectroLux — Luxury Precision E-Commerce Platform",
      c7Lbl1: "Catalog Response Time",
      c7Note1: "Sub-second reactive filtering",
      c7Lbl2: "Cart Conversion Lift",
      c7Note2: "Frictionless multi-step funnel",
      c7Lbl3: "Mobile Readiness",
      c7Note3: "Fully responsive luxury layout",
      c7Arch: "Architecture:",
      c7ArchText: "Single-page reactive storefront built with React and Tailwind CSS delivering instantaneous client-side transitions and fluid cart state.",
      c7Imp: "Business Impact:",
      c7ImpText: "Drives higher cart completion rates and presents a prestigious digital shopping experience.",

      // Buttons & Navigation
      navPricing: "Investment",
      btnPreview: "Interactive UI Preview",
      tabPreview: "Live UI Preview",
      tabStyles: "Original Style Code (CSS)",
      tabArch: "Architecture Blueprint",
      btnOpenExternal: "↗ Open in Full Tab",
      styleTokensTitle: "Authentic Design System & CSS Tokens",
      styleSourceTitle: "Original Project Stylesheet Source",
      btnCopyCss: "Copy Original CSS Code",
      cssCopied: "Copied to Clipboard!",
      btnViewStyleCode: "View Original Style Code",

      // 05 Pricing & Investment
      pricingSec: "05 // INVESTMENT & PACKAGES",
      pricingTitle: "Transparent engineering investments tailored for ambitious teams.",
      pricingLead: "Realistic regional market rates designed for startups, founders, and growing enterprises in the Arab world and Gulf region.",
      p1Badge: "SECURITY & RESILIENCE",
      p1Title: "Security & Architecture Audit",
      p1Desc: "Comprehensive vulnerability assessment, bottleneck profiling, and production hardening.",
      p1AltCurr: "~ 1,300 – 2,400 SAR / AED",
      p1F1: "17-Module Vulnerability Scan",
      p1F2: "Database & API Bottleneck Profiling",
      p1F3: "Official DevSecOps Architecture Report",
      p1F4: "Remediation Blueprint & Code Review",

      p2Badge: "HIGH-ROI AUTOMATION",
      p2Title: "AI & Automation Pipelines",
      p2Desc: "Custom autonomous AI workflows, automated video rendering, and serverless background workers.",
      p2AltCurr: "~ 2,250 – 4,500 SAR / AED",
      p2F1: "Whisper / LLM / FFmpeg Automation",
      p2F2: "Worker Queue & Cloud Storage Sync",
      p2F3: "Webhook & Third-Party API Connectors",
      p2F4: "Automated Retry & Dead-Letter Queues",

      p3Badge: "OFFLINE-FIRST & FLUID UI",
      p3Title: "Mobile & Reactive Platforms",
      p3Desc: "Cross-platform mobile apps (Flutter) or high-performance single-page web applications.",
      p3AltCurr: "~ 2,800 – 5,250 SAR / AED",
      p3F1: "Flutter Clean Architecture or React SPA",
      p3F2: "Offline SQLite / Local Storage Sync",
      p3F3: "Bilingual Arabic/English RTL Readiness",
      p3F4: "Smooth 60FPS Micro-Interactions",

      p4Badge: "COMPLETE PLATFORM BUILD",
      p4Title: "Cloud SaaS Platform (MVP)",
      p4Desc: "Full-cycle system engineering from database schemas to multi-tenant billing and production deployment.",
      p4AltCurr: "~ 3,550 – 6,750 SAR / AED",
      p4F1: "Enterprise Node / Python / Go Architecture",
      p4F2: "Role-Based Auth & Multi-Tenant Schemas",
      p4F3: "Paddle / Stripe Subscription Billing",
      p4F4: "Docker CI/CD & Cloudflare CDN Deployment",
      btnSelectPkg: "Select This Package",

      // 06 Consultation & Order Form
      contactSec: "06 // DIRECT CONSULTATION & ORDER",
      consBadge: "STRATEGIC ENGINEERING PARTNERSHIP",
      contactTitle: "Ready to build your next significant system?",
      contactLead: "Fill out the project details below to dispatch your request directly via WhatsApp (+970594369446) or Email (Abbdelraheem@gmail.com).",
      consPoint1: "In-depth Architectural Assessment",
      consPoint2: "Documented Milestone Deliveries",
      consPoint3: "Dedicated Support & SLA",
      formNameLbl: "Your Name / Organization",
      formContactLbl: "WhatsApp Number or Email",
      formServiceLbl: "Required System / Service",
      optSaas: "Cloud SaaS Platform (MVP Architecture)",
      optAi: "AI Video & Automation Pipeline",
      optMobile: "Mobile App or Reactive Web Platform",
      optAudit: "Security Audit & Architecture Review",
      optCustom: "Custom System Consultation",
      formBudgetLbl: "Target Investment / Budget Range",
      formBriefLbl: "Project Brief & Key Requirements",
      btnSendWa: "Send Request via WhatsApp",
      btnSendMail: "Send Request via Email",
      formNote: "Requests are dispatched immediately to Eng. Abdelraheem's direct channels. Guaranteed response within 12 business hours.",

      // Footer & Modal
      footerTitle: "Eng. Abdelraheem Baraka",
      footerRole: "— Cloud & Systems Architecture",
      footerCopy: "© 2026 Abdelraheem Baraka. All systems engineered with precision.",
      modalClose: "Close",
      modalSec1: "System Overview",
      modalSec2: "Architecture & Solution",
      modalSec3: "Technology Stack",
      modalSec4: "Business Impact"
    },

    ar: {
      roleSub: "مهندس نظم سحابية وبرمجيات متقدمة",
      navProblem: "المشكلة",
      navPhilosophy: "الفلسفة",
      navMethod: "النظام",
      navCases: "الأنظمة المعتمدة",
      navContact: "الاستشارة والتعاقد",
      navCta: "احجز استشارة برمجية",
      navWa: "واتساب مباشر",
      eyebrow: "نظام المعمارية السحابية المتقدمة",
      heroT1: "البرمجة",
      heroT2: "مش مجرد",
      heroT3: "كود.",
      heroSub: "وراء كل منصة ناجحة <strong>معمارية صلبة.</strong>",
      heroPara: "م. عبدالرحيم بركة يبني للشركات ورواد الأعمال منصات الـ SaaS السحابية، خطوط معالجة الفيديو بالذكاء الاصطناعي، والتدقيق الأمني السيبراني المتقدم — أنظمة تخدم أهدافك التجارية وتتحمل الضغط.",
      heroBtn1: "احجز استشارة برمجية",
      heroBtn2: "استكشف الأنظمة",
      stat1Lbl: "منصات SaaS سحابية من الصفر",
      stat2Lbl: "موديول فحص أمني وتدقيق ثغرات",
      stat3Lbl: "جاهزية واستقرار البنية التحتية",
      stat4Lbl: "التزام كامل بالمواصفات والمواعيد",
      scrollCue: "مرّر",

      // 01 The Problem
      probSec: "01 // THE PROBLEM",
      probTitle1: "مشكلتك مش إنك مش لاقي مبرمج.",
      probTitle2: "مشكلتك إنك بتدفع لأنظمة بتنهار تحت الضغط أو ما بتكتمل.",
      probLead: "تدفع آلاف الدولارات وتنتظر أشهراً، لتتفاجأ بنظام بطيء، ثغرات كارثية، أو كود عشوائي غير قابل للتوسع. الفجوة بين الكود السطحي والأنظمة الحقيقية تبدأ من هنا.",
      p1Tag: "01 // ARCHITECTURE",
      p1Title: "بناء بدون معمارية",
      p1Desc: "مبرمجون يبدأون بكتابة الكود فوراً بدون تخطيط لتدفق البيانات، الحمل المتوقع، أو التوسع المستقبلي.",
      p1Gap: "الظاهر vs الحقيقة",
      p1Before: "شاشات تبدو جميلة في اليوم الأول",
      p1After: "نظام ينهار عند أول 1,000 مستخدم متزامن",

      p2Tag: "02 // INTEGRATION",
      p2Title: "الذكاء الاصطناعي السطحي",
      p2Desc: "ربط نماذج الـ AI عبر استدعاءات API مباشرة بدون طوابير معالجة (Workers)، كاشينج، أو حماية التكلفة.",
      p2Gap: "الظاهر vs الحقيقة",
      p2Before: "ميزة ذكاء اصطناعي تعمل في التجربة",
      p2After: "فواتير API فلكية وتوقف دائم تحت الضغط",

      p3Tag: "03 // SECURITY",
      p3Title: "الأمان كفكرة لاحقة",
      p3Desc: "تجاهل التدقيق الأمني حتى اللحظة الأخيرة، مما يترك ثغرات SSRF، حقن القواعد، وتسريب البيانات مكشوفة.",
      p3Gap: "الظاهر vs الحقيقة",
      p3Before: "تطبيق يعمل ظاهرياً بدون أخطاء",
      p3After: "اختراق كارثي يدمّر سمعة شركتك واستثمارك",

      // 02 The Architect
      archSec: "02 // THE ARCHITECT",
      archBadge: "LEAD SYSTEMS ENGINEER",
      archName: "م. عبدالرحيم بركة",
      archRole: "Systems & Cloud Architect",
      archBio: "أتعامل مع البرمجيات كمنظومات هندسية متكاملة وليست مجرد سطور كود. كل قرار تصميمي يخدم استقرار النظام، حماية البيانات، وخفض التكاليف التشغيلية على المدى الطويل.",
      pillarsTitle: "ثلاثة أركان تحكم كل سطر كود وكل نظام أبنيه.",
      pillarsLead: "الأنظمة الناجحة ليست صدفة — هي نتيجة منهجية صارمة تبدأ من التأسيس المعماري وتستمر حتى استقرار التشغيل تحت أقصى حمل.",
      pil1Title: "المعمارية قبل الكود (Architecture First)",
      pil1Desc: "رسم تدفق البيانات، تحديد نقاط الاختناق، واختيار التقنيات الأنسب لحجم العمل قبل كتابة أول سطر كود.",
      pil2Title: "الأمان المتأصل (Security by Design)",
      pil2Desc: "تضمين فحوصات الأمان وعزل الصلاحيات وحماية البيانات كجزء أساسي من كل واجهة برمجية وطبقة تخزين.",
      pil3Title: "الأداء القابل للقياس (Observable Performance)",
      pil3Desc: "أنظمة مبنية بمؤشرات واضحة: أوقات استجابة سريعة، استهلاك موارد منخفض، ومراقبة شاملة لأي خلل لحظياً.",

      // 03 The Method
      methodSec: "03 // THE METHOD",
      methodTitle: "كيف نبني نظامك البرمجي من الفكرة إلى الإنتاج المستقر.",
      methodLead: "خطة هندسية من 5 مراحل واضحة المعالم، بدون مفاجآت، بدون تأخير، وبتسليم موثق خطوة بخطوة.",
      m1Title: "التفكيك والتحليل",
      m1Desc: "تحليل متطلبات العمل، رسم حالات الاستخدام، وتحديد نقاط الضغط والمخاطر التقنية بدقة.",
      m1Tag: "REQUIREMENTS DECOMPOSITION",
      m2Title: "هندسة المعمارية",
      m2Desc: "تصميم مخطط النظام، هياكل قواعد البيانات، تدفق البيانات، واستراتيجية الحماية والتوسع.",
      m2Tag: "SYSTEM BLUEPRINT",
      m3Title: "بناء النواة والخدمات",
      m3Desc: "تطوير الكود بكفاءة عالية، معمارية نظيفة Clean Architecture، وربط الخدمات بسلاسة.",
      m3Tag: "CORE IMPLEMENTATION",
      m4Title: "الحصانة والاختبار",
      m4Desc: "فحص أمني دقيق بمحرك 17 موديول، اختبارات الحمل الشديد، والتحقق التام من عدم وجود ثغرات.",
      m4Tag: "DEVSECOPS AUDIT",
      m5Title: "الإطلاق والمراقبة",
      m5Desc: "نشر البنية التحتية السحابية، تفعيل خطوط الإنتاج CI/CD، وإعداد أنظمة المراقبة اللحظية.",
      m5Tag: "DEPLOYMENT & SLA",

      // 04 Case Studies
      casesSec: "04 // CASE STUDIES",
      casesTitle: "الأنظمة تتحدث بالأرقام.",
      casesLead: "دراسات حالة موثّقة لأنظمة برمجية حقيقية قيد التشغيل — المعمارية، الأثر التجاري، والتقنيات.",
      btnArch: "استعراض المعمارية والحل",

      // Case 1 Clipzila
      c1Tag: "AI VIDEO PIPELINE",
      c1Sub: "منصة CLIPZILA SAAS",
      c1Title: "Clipzila — فيديو واحد يدخل، أسبوع مقاطع يخرج",
      c1Lbl1: "توفير وقت المونتاج",
      c1Note1: "أتمتة كاملة للقص والتتبع",
      c1Lbl2: "زمن المعالجة",
      c1Note2: "لكل ساعة فيديو يوتيوب",
      c1Lbl3: "حماية التدفق",
      c1Note3: "حماية SSRF وعزل الرفع",
      c1Arch: "المعمارية:",
      c1ArchText: "طابور معالجة موزع (Decoupled Worker Queue) يجمع بين Groq Whisper للنسخ الصوتي و InsightFace لتتبع حركة الوجه و FFmpeg للمعالجة المتسارعة، مع تخزين مباشر على Cloudflare R2 واشتراكات Paddle.",
      c1Imp: "الأثر التجاري:",
      c1ImpText: "تحويل صناعة المحتوى إلى عملية مؤتمتة بدون تدخل بشري — جاهزة لاستقبال المشتركين العالميين.",

      // Case 2 RecFlow
      c2Tag: "DISTRIBUTED MEDIA SAAS",
      c2Sub: "HIGH-LOAD RECORDING",
      c2Title: "RecFlow — نظام وسائط سحابي موزع لتسجيل الشاشة والبث",
      c2Lbl1: "استنزاف باندويث API",
      c2Note1: "معمارية Zero-API-Load",
      c2Lbl2: "تسجيلات متزامنة",
      c2Note2: "عبر عمال BullMQ و Redis",
      c2Lbl3: "سرعة تجهيز الفيديو",
      c2Note3: "مقارنة بالطرق التقليدية",
      c2Arch: "المعمارية:",
      c2ArchText: "رفع المقاطع المجزأة مباشرة من المتصفح إلى حاويات S3/R2 عبر Signed URLs بدون مرور البيانات بخادم التطبيق، مع محرك معالجة خلفي مبني على Fastify 5 و BullMQ و Redis.",
      c2Imp: "الأثر التجاري:",
      c2ImpText: "تقليص تكاليف الباندويث بأكثر من 85% مع استقرار مطلق يتيح التوسع لآلاف المستخدمين المتزامنين.",

      // Case 3 Kashf
      c3Tag: "ENTERPRISE SECURITY SCANNER",
      c3Sub: "DEVSECOPS & AUDITING",
      c3Title: "Kashf (كشف) — محرك الأمن السيبراني وتدقيق الاختراق",
      c3Lbl1: "موديولات الفحص الأمني",
      c3Note1: "تشمل ثغرات الـ AI Prompt",
      c3Lbl2: "البلاغات الوهمية",
      c3Note2: "تحقق آلي PoC Validation",
      c3Lbl3: "تقارير تنفيذية رسمية",
      c3Note3: "صيغ احترافية ثنائية اللغة",
      c3Arch: "المعمارية:",
      c3ArchText: "محرك فحص آلي عميق يختبر 17 صنفاً من الثغرات (SQLi, SSRF, Deserialization, SSTI) مع وحدة متطورة لفحص هجمات الذكاء الاصطناعي وتوليد إثبات اختراق قطعي بدون إنذارات كاذبة.",
      c3Imp: "الأثر التجاري:",
      c3ImpText: "حماية المؤسسات من التسريبات الكارثية وغرامات الامتثال قبل إطلاق الأنظمة للإنتاج.",

      // Case 4 Yad Biyad
      c4Tag: "LIVE PRODUCTION PLATFORM",
      c4Sub: "HUMANITARIAN RELIEF",
      c4Title: "منصة يد بيد — بوابة الإغاثة والتبرعات الميدانية (handbyhandps.com)",
      c4Lbl1: "حالة التشغيل",
      c4Note1: "قيد العمل على النطاق الرسمي",
      c4Lbl2: "جاهزية تحت ضعف الشبكة",
      c4Note2: "معمارية خفيفة وسريعة",
      c4Lbl3: "شفافية التوثيق",
      c4Note3: "نشر فوري للقصص والحملات",
      c4Arch: "المعمارية:",
      c4ArchText: "منصة تفاعلية مصممة لتعمل بكفاءة فائقة وسرعة استجابة عالية حتى تحت ظروف انقطاع الإنترنت وضعف شبكات الاتصال، مع نظام إدارة محتوى آمن لإدارة التبرعات وتوثيق المساعدات.",
      c4Imp: "الأثر الإنساني:",
      c4ImpText: "تمكين المؤسسة من إيصال المساعدات الإغاثية بشفافية وسرعة إلى آلاف المتضررين على أرض الواقع.",

      // Case 5 NeonArcade
      c5Tag: "WEB GAMING HUB",
      c5Sub: "NEXT.JS 14 ECOSYSTEM",
      c5Title: "NeonArcade — منصة ألعاب الويب التفاعلية الفورية",
      c5Lbl1: "ألعاب فورية بالمتصفح",
      c5Note1: "بدون أي تثبيت مسبق",
      c5Lbl2: "متوسط وقت الجلسة",
      c5Note2: "استبقاء استثنائي للمستخدم",
      c5Lbl3: "تنزيل مسبق",
      c5Note3: "Dynamic Code-Splitting",
      c5Arch: "المعمارية:",
      c5ArchText: "بنية تفاعلية حديثة بـ Next.js 14 تعتمد على تقسيم الكود الديناميكي والتحميل الكسول المخصص، مع لوحة تحكم إدارية ومساحات إعلانية محسوبة.",
      c5Imp: "الأثر التجاري:",
      c5ImpText: "رفع مدة بقاء المستخدم لأكثر من 15 دقيقة للجلسة وتوليد عوائد إعلانية رقمية متصاعدة ومستقرة.",

      // Case 6 Wasalny
      c6Tag: "MOBILE SYSTEMS",
      c6Sub: "إدارة الطلبات واللوجستيات",
      c6Title: "وصلني — تطبيق إدارة التوصيل والخدمات اللوجستية الذكية",
      c6Lbl1: "العمل بدون إنترنت",
      c6Note1: "مزامنة تلقائية عند الاتصال",
      c6Lbl2: "سلاسة الحركة والواجهة",
      c6Note2: "Clean Architecture مع Flutter",
      c6Lbl3: "فقدان بيانات الشحنات",
      c6Note3: "تخزين محلي SQLite محصن",
      c6Arch: "المعمارية:",
      c6ArchText: "تطبيق عابر للمنصات (Android & iOS) مبني بـ Flutter وفق نمط المعمارية النظيفة Clean Architecture، مع طبقة مزامنة ذكية تعتمد SQLite للعمل الميداني بدون شبكة.",
      c6Imp: "الأثر التجاري:",
      c6ImpText: "القضاء التام على تعطل مندوبي التوصيل في المناطق النائية وضمان عدم ضياع أي شحنة أو إيصال استلام.",

      // Case 7 ElectroLux
      c7Tag: "HIGH-CONVERTING E-COMMERCE",
      c7Sub: "REACTIVE SPA STORE",
      c7Title: "ElectroLux — متجر إلكتروني فاخر عالي التحويل",
      c7Lbl1: "زمن استجابة التصفح",
      c7Note1: "فلترة تفاعلية فورية بـ React",
      c7Lbl2: "معدل إتمام الشراء",
      c7Note2: "سلة تفاعلية ومسار مبسط",
      c7Lbl3: "جاهزية الهواتف",
      c7Note3: "تصميم فخم ومتجاوب بالكامل",
      c7Arch: "المعمارية:",
      c7ArchText: "واجهة متجر تفاعلية بنمط SPA مبنية بـ React و Tailwind CSS تقدم تصفحاً فورياً بدون إعادة تحميل الصفحات، مع مسار شراء مريح يرفع معدلات التحويل.",
      c7Imp: "الأثر التجاري:",
      c7ImpText: "تجربة تسوق فخمة تحول الزوار إلى مشترين فعليين وتنافس المتاجر العالمية الكبرى.",

      // Buttons & Navigation
      navPricing: "باقات الاستثمار",
      btnPreview: "معاينة تفاعلية للنظام",
      tabPreview: "معاينة واجهة النظام",
      tabStyles: "كود الستايل الأصلي (CSS)",
      tabArch: "المعمارية والحل الهندسي",
      btnOpenExternal: "↗ فتح في نافذة مستقلة",
      styleTokensTitle: "نظام التصميم ومتغيرات الألوان (CSS Tokens)",
      styleSourceTitle: "كود الستايل الأصلي المأخوذ من ملفات المشروع",
      btnCopyCss: "نسخ كود الـ CSS الأصلي",
      cssCopied: "تم النسخ بنجاح!",
      btnViewStyleCode: "عرض كود الستايل الأصلي",

      // 05 Pricing & Investment
      pricingSec: "05 // باقات الاستثمار والأسعار",
      pricingTitle: "استثمارات هندسية شفافة ومدروسة تناسب المشاريع الطموحة.",
      pricingLead: "متوسط أسعار واقعي ومدروس للسوق العربي والخليجي، مصمم لرواد الأعمال والشركات الناشئة.",
      p1Badge: "الأمان والاستقرار",
      p1Title: "التدقيق المعماري والأمني الشامل",
      p1Desc: "فحص الثغرات، تدقيق تدفق البيانات وعلاج الاختناقات قبل الإطلاق.",
      p1AltCurr: "~ 1,300 – 2,400 ر.س / د.إ",
      p1F1: "فحص 17 موديول ثغرات أمنية",
      p1F2: "تحليل اختناقات قواعد البيانات وAPIs",
      p1F3: "تقرير معماري أمني رسمي مفصل",
      p1F4: "خطة معالجة ومراجعة كود فورية",

      p2Badge: "أتمتة عالية العائد",
      p2Title: "خطوط الأتمتة والذكاء الاصطناعي",
      p2Desc: "بناء خطوط معالجة وسائط ومهام ذكاء اصطناعي مؤتمتة في الخلفية.",
      p2AltCurr: "~ 2,250 – 4,500 ر.س / د.إ",
      p2F1: "أتمتة نماذج Whisper وLLM وFFmpeg",
      p2F2: "طوابير مهام ومزامنة مع التخزين السحابي",
      p2F3: "ربط بوابات Webhooks وAPIs الخارجية",
      p2F4: "معالجة أخطاء تلقائية وإعادة المحاولة",

      p3Badge: "عمل بدون إنترنت وواجهات 60FPS",
      p3Title: "تطبيقات الجوال والمنصات التفاعلية",
      p3Desc: "تطبيقات موبايل Flutter متكاملة أو منصات ويب تفاعلية فائقة السرعة.",
      p3AltCurr: "~ 2,800 – 5,250 ر.س / د.إ",
      p3F1: "معمارية Clean Architecture لـ Flutter أو React",
      p3F2: "مزامنة محلية مع SQLite بدون إنترنت",
      p3F3: "دعم كامل للغتين العربية والإنجليزية RTL/LTR",
      p3F4: "حركات تفاعلية سلسة بمعدل 60FPS",

      p4Badge: "بناء معمارية منصة كاملة",
      p4Title: "منصة سحابية متكاملة SaaS (MVP)",
      p4Desc: "تطوير شامل من قواعد البيانات وبوابات الدفع إلى النشر السحابي.",
      p4AltCurr: "~ 3,550 – 6,750 ر.س / د.إ",
      p4F1: "باك إند مؤسسي بـ Node / Python / Go",
      p4F2: "نظام صلاحيات متعدد المستأجرين Multi-Tenant",
      p4F3: "ربط بوابات الاشتراكات والدفع الآلي",
      p4F4: "حاويات Docker ونشر CI/CD مع حماية Cloudflare",
      btnSelectPkg: "اختيار هذه الباقة",

      // 06 Consultation & Order Form
      contactSec: "06 // الاستشارة المباشرة ونموذج الطلب",
      consBadge: "STRATEGIC ENGINEERING PARTNERSHIP",
      contactTitle: "جاهز لبناء نظامك البرمجي القادم؟",
      contactLead: "املأ تفاصيل المشروع أدناه لإرسال طلبك مباشرة عبر واتساب (+970594369446) أو عبر البريد الإلكتروني (Abbdelraheem@gmail.com).",
      consPoint1: "استشارة معمارية متعمقة",
      consPoint2: "تسليم موثق بالمواعيد",
      consPoint3: "دعم فني وتشغيلي مستمر",
      formNameLbl: "الاسم / اسم المؤسسة",
      formContactLbl: "رقم الواتساب أو البريد الإلكتروني",
      formServiceLbl: "نوع النظام أو الخدمة المطلوبة",
      optSaas: "بناء معمارية منصة سحابية SaaS",
      optAi: "خطوط أتمتة الوسائط والذكاء الاصطناعي",
      optMobile: "تطبيق جوال أو منصة ويب تفاعلية",
      optAudit: "تدقيق وفحص أمني ومعماري شامل",
      optCustom: "استشارة برمجية وتخطيط نظام خاص",
      formBudgetLbl: "الميزانية أو نطاق الاستثمار المستهدف",
      formBriefLbl: "نبذة عن فكرة المشروع والمتطلبات",
      btnSendWa: "إرسال الطلب عبر واتساب",
      btnSendMail: "إرسال الطلب عبر الإيميل",
      formNote: "يتم إرسال الطلبات مباشرة إلى قنوات المهندس عبدالرحيم مع رد مؤكد خلال 12 ساعة عمل.",

      // Footer & Modal
      footerTitle: "م. عبدالرحيم بركة",
      footerRole: "— هندسة النظم السحابية والمتقدمة",
      footerCopy: "© 2026 Abdelraheem Baraka. All systems engineered with precision.",
      modalClose: "إغلاق",
      modalSec1: "نظرة عامة على النظام",
      modalSec2: "المعمارية والحل الهندسي",
      modalSec3: "حزمة التقنيات المستخدمة",
      modalSec4: "الأثر والقيمة المحققة"
    }
  };

  /* Projects Architecture Database */
  const projectsData = {
    clipzila: {
      en: {
        title: "Clipzila — One video in. A week of clips out.",
        tag: "AI VIDEO PIPELINE",
        overview: "An automated SaaS transforming long YouTube content into viral 9:16 vertical shorts using computer vision speaker tracking and dynamic karaoke captions.",
        solution: "Decoupled pipeline leveraging Groq Whisper, InsightFace, and GPU FFmpeg streaming directly to Cloudflare R2 with Paddle billing and strict SSRF sanitization.",
        impact: "Cuts 95% of manual editing overhead, outputting 10 viral clips from 1 hour of footage in under 90 seconds.",
        stack: ["Next.js", "Forge Orange System", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      },
      ar: {
        title: "Clipzila — فيديو واحد يدخل، أسبوع مقاطع يخرج",
        tag: "AI VIDEO PIPELINE",
        overview: "منصة SaaS متطورة لتحويل مقاطع اليوتيوب الطويلة إلى فيديوهات قصيرة (Shorts & Reels 9:16) تلقائياً بنماذج الذكاء الاصطناعي مع تتبع الوجه وتوليد كابشنز حركية.",
        solution: "طابور معالجة موزع (Groq Whisper + InsightFace + FFmpeg) يرفع تلقائياً لسحابة Cloudflare R2 مع اشتراكات Paddle الآلية ونظام حماية SSRF صارم.",
        impact: "توفير 95% من وقت المونتاج اليدوي — معالجة فيديو كامل مدته ساعة إلى 10 مقاطع احترافية في أقل من 90 ثانية.",
        stack: ["Next.js", "Forge Orange System", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      }
    },
    cliptica: {
      en: {
        title: "Clipzila — One video in. A week of clips out.",
        tag: "AI VIDEO PIPELINE",
        overview: "An automated SaaS transforming long YouTube content into viral 9:16 vertical shorts using computer vision speaker tracking and dynamic karaoke captions.",
        solution: "Decoupled pipeline leveraging Groq Whisper, InsightFace, and GPU FFmpeg streaming directly to Cloudflare R2 with Paddle billing and strict SSRF sanitization.",
        impact: "Cuts 95% of manual editing overhead, outputting 10 viral clips from 1 hour of footage in under 90 seconds.",
        stack: ["Next.js", "Forge Orange System", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      },
      ar: {
        title: "Clipzila — فيديو واحد يدخل، أسبوع مقاطع يخرج",
        tag: "AI VIDEO PIPELINE",
        overview: "منصة SaaS متطورة لتحويل مقاطع اليوتيوب الطويلة إلى فيديوهات قصيرة (Shorts & Reels 9:16) تلقائياً بنماذج الذكاء الاصطناعي مع تتبع الوجه وتوليد كابشنز حركية.",
        solution: "طابور معالجة موزع (Groq Whisper + InsightFace + FFmpeg) يرفع تلقائياً لسحابة Cloudflare R2 مع اشتراكات Paddle الآلية ونظام حماية SSRF صارم.",
        impact: "توفير 95% من وقت المونتاج اليدوي — معالجة فيديو كامل مدته ساعة إلى 10 مقاطع احترافية في أقل من 90 ثانية.",
        stack: ["Next.js", "Forge Orange System", "Groq Whisper", "InsightFace", "FFmpeg", "Cloudflare R2", "Paddle", "PostgreSQL"]
      }
    },
    recflow: {
      en: {
        title: "RecFlow — Distributed Cloud Media SaaS",
        tag: "DISTRIBUTED MEDIA SAAS",
        overview: "Zero-install browser screen recorder and live streaming portal uploading directly into distributed cloud buckets.",
        solution: "Zero-API-Load ingestion utilizing presigned multi-part chunk uploads orchestrated by Fastify 5, BullMQ workers, and Redis background queues.",
        impact: "Handles thousands of concurrent browser recording sessions with near-zero API bandwidth strain.",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "Stripe", "AWS S3 / R2"]
      },
      ar: {
        title: "RecFlow — نظام وسائط سحابي موزع",
        tag: "DISTRIBUTED MEDIA SAAS",
        overview: "منصة ويب متطورة لتسجيل الشاشة والبث الفوري من المتصفح بدون تثبيت أي برامج مع رفع ومعالجة سحابية فورية.",
        solution: "معمارية Zero-API-Load: رفع الفيديوهات المجزأة مباشرة إلى S3/R2 عبر روابط موقّعة Signed URLs مع عمال Fastify 5 و BullMQ و Redis للمعالجة بالخلفية.",
        impact: "استيعاب آلاف التسجيلات المتزامنة بتكلفة خوادم منخفضة وبدون أي استنزاف لباندويث خادم الـ API.",
        stack: ["Next.js 15", "Fastify 5", "BullMQ", "Redis", "FFmpeg", "Stripe", "AWS S3 / R2"]
      }
    },
    kashf: {
      en: {
        title: "Kashf — Enterprise Cybersecurity Scanner",
        tag: "ENTERPRISE SECURITY SCANNER",
        overview: "Deep vulnerability auditing engine covering 17 critical vectors (SQLi, SSRF, Deserialization, SSTI) alongside an AI Prompt Injection assessment module.",
        solution: "Deterministic PoC validation eliminates false alarms and compiles executive security audit reports.",
        impact: "Protects enterprise systems against catastrophic data leaks and regulatory penalties.",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"]
      },
      ar: {
        title: "Kashf (كشف) — محرك الأمن السيبراني والـ DevSecOps",
        tag: "ENTERPRISE SECURITY SCANNER",
        overview: "ماسح أمني شامل وتدقيق اختراق يختبر تطبيقات الويب ضد 17 صنفاً من الثغرات المتقدمة مع وحدة لفحص هجمات نماذج الذكاء الاصطناعي (Prompt Injection).",
        solution: "محرك تحقق آلي PoC Validation يمنع البلاغات الوهمية وينتج تقارير تنفيذية رسمية بصيغتي العربية والإنجليزية للشركات.",
        impact: "حماية الأنظمة الحساسة من تسريب البيانات وغرامات الامتثال قبل إطلاق الأنظمة للإنتاج.",
        stack: ["Python 3.11", "17 Engine Audits", "LLM Security Guard", "Automated PoC", "PDF Reports"]
      }
    },
    yadbiyad: {
      en: {
        title: "Yad Biyad — Live Humanitarian Portal",
        tag: "LIVE PRODUCTION PLATFORM",
        overview: "An active, live humanitarian portal (handbyhandps.com) managing urgent relief campaigns and international donations.",
        solution: "Ultra-resilient, lightweight architecture engineered for zero-latency response on constrained cellular networks.",
        impact: "Directly powers transparent disaster relief fundraising for thousands of real beneficiaries.",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"]
      },
      ar: {
        title: "منصة يد بيد — بوابة إغاثة وتبرعات حية",
        tag: "LIVE PRODUCTION PLATFORM",
        overview: "منصة خيرية حقيقية تعمل على النطاق الحي (handbyhandps.com) لإدارة حملات الإغاثة والتبرعات ونشر القصص الميدانية الشفافة.",
        solution: "معمارية خفيفة وسريعة تحت ظروف الاتصال الضعيف مع قاعدة بيانات آمنة ولوحة تحكم CMS مخصصة.",
        impact: "تمكين المؤسسة من جمع وإدارة تبرعات للمتضررين بشفافية وسرعة على أرض الواقع.",
        stack: ["PHP", "MySQL", "Apache", "Custom CMS", "Live Production (handbyhandps.com)"]
      }
    },
    wasalny: {
      en: {
        title: "Wasalny (وصلني) — Delivery & Logistics Operations Platform",
        tag: "MOBILE SYSTEMS",
        overview: "Production cross-platform mobile & web application built with Flutter Clean Architecture managing field shipments, drivers, operations dashboard, and local SQLite offline sync.",
        solution: "Decoupled domain layers, SQLite local ledger, reactive provider state management, and real-time operations dashboard with zero-data-loss field syncing.",
        impact: "Eliminates delivery downtime in remote zones with automated background syncing and delivers a 60FPS fluid experience.",
        stack: ["Flutter", "Dart", "Clean Architecture", "Provider", "SQLite", "Material 3"]
      },
      ar: {
        title: "وصلني — تطبيق إدارة التوصيل والخدمات اللوجستية الذكية",
        tag: "MOBILE SYSTEMS",
        overview: "تطبيق هواتف ذكية لمنصتي Android و iOS مطور بنمط Clean Architecture مع لوحة تحكم عمليات متقدمة لإدارة الطلبات، السائقين، والعمل بدون اتصال بالإنترنت.",
        solution: "تطبيق نمط Clean Architecture مع قاعدة بيانات SQLite للمزامنة التلقائية فور عودة الاتصال وحركة 60 إطار في الثانية وشاشات إدارة وتوصيل متكاملة.",
        impact: "منع تعطل مندوبي التوصيل في المناطق الخالية من التغطية وتسريع دورة تسليم الطرود وحماية سجلات الشحنات.",
        stack: ["Flutter", "Dart", "Clean Architecture", "Provider", "SQLite", "Material 3"]
      }
    },
    electrolux: {
      en: {
        title: "ElectroLux — Luxury Precision E-Commerce",
        tag: "HIGH-CONVERTING E-COMMERCE",
        overview: "High-performance luxury e-commerce platform built for high checkout conversions with dynamic filtering and reactive cart state.",
        solution: "Single-page reactive catalog with frictionless multi-step checkout funnel.",
        impact: "Maximizes cart checkout conversions and delivers sub-second page transitions.",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"]
      },
      ar: {
        title: "ElectroLux — متجر إلكتروني فاخر عالي التحويل",
        tag: "HIGH-CONVERTING E-COMMERCE",
        overview: "تجربة تسوق إلكتروني متطورة للأجهزة والمعدات الدقيقة تجمع بين الفخامة والسرعة الفائقة وسلة تسوق تفاعلية سريعة.",
        solution: "تطبيق SPA تفاعلي بـ React يقدم استجابة فورية بدون إعادة تحميل للصفحة وفلترة ديناميكية سريعة للمنتجات.",
        impact: "رفع نسبة إتمام عمليات الشراء (Checkout Conversion) إلى مستويات استثنائية.",
        stack: ["React", "JavaScript", "Tailwind CSS", "PHP API", "Admin Suite"]
      }
    }
  };

  // English is the default primary language
  let currentLang = localStorage.getItem('portfolio_lang_v2') || 'en';
  let activeModalProjectKey = null;

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang_v2', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (lang === 'en') {
      document.title = "Abdelraheem Baraka | Systems & Cloud Architect";
    } else {
      document.title = "م. عبدالرحيم بركة | مهندس برمجيات ونظم سحابية — Abdelraheem Baraka";
    }

    const dict = i18nData[lang];
    if (dict) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (dict[k] !== undefined) {
          el.innerHTML = dict[k];
        }
      });
    }

    document.querySelectorAll('.lang-toggle-btn, #langToggleBtn').forEach(btn => {
      btn.innerHTML = lang === 'en'
        ? `<strong style="color:var(--green)">English</strong> <span style="color:var(--muted)">/</span> <span style="opacity:0.65">العربية</span>`
        : `<span style="opacity:0.65">English</span> <span style="color:var(--muted)">/</span> <strong style="color:var(--green)">العربية</strong>`;
    });

    if (typeof syncSculpturePosition === 'function') {
      syncSculpturePosition();
    }

    if (activeModalProjectKey && modal && modal.classList.contains('active')) {
      let activeTab = 'preview';
      if (tabContentStyles && tabContentStyles.classList.contains('is-active')) activeTab = 'styles';
      else if (tabContentArch && tabContentArch.classList.contains('is-active')) activeTab = 'arch';
      openProjectModal(activeModalProjectKey, activeTab);
    }
  }

  // Language Button Click Handler
  document.querySelectorAll('.lang-toggle-btn, #langToggleBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  });

  /* ============================================================
     3D INTERACTIVE CARD TILT (PERSPECTIVE & SHINE)
     ============================================================ */
  const caseCards = document.querySelectorAll('.case-card');
  caseCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = -y * 8;
      const rotY = x * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  /* ============================================================
     INTERACTIVE PROJECT ORDER FORM & DIRECT WHATSAPP/EMAIL DISPATCH
     ============================================================ */
  const btnSendWhatsApp = document.getElementById('btnSendWhatsApp');
  const btnSendEmail = document.getElementById('btnSendEmail');
  const orderName = document.getElementById('orderName');
  const orderContact = document.getElementById('orderContact');
  const orderService = document.getElementById('orderService');
  const orderBudget = document.getElementById('orderBudget');
  const orderBrief = document.getElementById('orderBrief');

  function getOrderPayload() {
    const name = orderName ? orderName.value.trim() : '';
    const contact = orderContact ? orderContact.value.trim() : '';
    const serviceEl = orderService ? orderService.options[orderService.selectedIndex] : null;
    const serviceName = serviceEl ? serviceEl.textContent.trim() : '';
    const budgetEl = orderBudget ? orderBudget.options[orderBudget.selectedIndex] : null;
    const budgetVal = budgetEl ? budgetEl.textContent.trim() : '';
    const brief = orderBrief ? orderBrief.value.trim() : '';

    if (!name || !contact) {
      alert(currentLang === 'ar' ? 'يرجى إدخال اسمك ووسيلة التواصل (واتساب أو إيميل)' : 'Please enter your name and contact details (WhatsApp or Email).');
      if (!name && orderName) orderName.focus();
      else if (!contact && orderContact) orderContact.focus();
      return null;
    }

    return { name, contact, serviceName, budgetVal, brief };
  }

  if (btnSendWhatsApp) {
    btnSendWhatsApp.addEventListener('click', () => {
      const p = getOrderPayload();
      if (!p) return;

      const isAr = currentLang === 'ar';
      const msg = isAr
        ? `السلام عليكم م. عبدالرحيم، يرجي مراجعة طلب المشروع الجديد:\n\n` +
          `👤 *الاسم / المؤسسة:* ${p.name}\n` +
          `📞 *وسيلة التواصل:* ${p.contact}\n` +
          `⚙️ *نوع النظام المطلوب:* ${p.serviceName}\n` +
          `💰 *الميزانية المستهدفة:* ${p.budgetVal}\n` +
          `📝 *تفاصيل المتطلبات:*\n${p.brief || 'مطلوب استشارة وتحديد المعمارية'}`
        : `Hello Eng. Abdelraheem, I would like to request an engineering consultation / project:\n\n` +
          `👤 *Name / Org:* ${p.name}\n` +
          `📞 *Contact:* ${p.contact}\n` +
          `⚙️ *Required System:* ${p.serviceName}\n` +
          `💰 *Target Budget:* ${p.budgetVal}\n` +
          `📝 *Brief & Requirements:*\n${p.brief || 'Consultation & architecture assessment requested'}`;

      const waUrl = `https://wa.me/970594369446?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  if (btnSendEmail) {
    btnSendEmail.addEventListener('click', () => {
      const p = getOrderPayload();
      if (!p) return;

      const isAr = currentLang === 'ar';
      const subject = isAr
        ? `طلب مشروع جديد: ${p.serviceName} — ${p.name}`
        : `New Project Request: ${p.serviceName} — ${p.name}`;

      const body =
        `Client Name: ${p.name}\n` +
        `Contact Info: ${p.contact}\n` +
        `Required System: ${p.serviceName}\n` +
        `Target Budget: ${p.budgetVal}\n\n` +
        `Project Brief & Requirements:\n${p.brief || 'Consultation & architecture assessment requested'}\n\n` +
        `Sent via Portfolio Direct Console`;

      const mailUrl = `mailto:Abbdelraheem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailUrl;
    });
  }

  // Quick Package Select Buttons
  document.querySelectorAll('.pricing-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const srv = btn.getAttribute('data-service');
      const bgt = btn.getAttribute('data-budget');

      if (orderService && srv) orderService.value = srv;
      if (orderBudget && bgt) {
        for (let i = 0; i < orderBudget.options.length; i++) {
          if (orderBudget.options[i].value.includes(bgt) || bgt.includes(orderBudget.options[i].value)) {
            orderBudget.selectedIndex = i;
            break;
          }
        }
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        if (orderName) orderName.focus();
      }, 600);
    });
  });

  /* ============================================================
     INTERACTIVE PROJECT SANDBOX & AUTHENTIC STYLE CODE ENGINE
     ============================================================ */
  const projectUrls = {
    cliptica: "https://cliptica.app/studio",
    recflow: "https://recflow.ai/dashboard",
    kashf: "https://kashf.sec/audit-console",
    yadbiyad: "https://handbyhandps.com/emergency-relief",
    neonarcade: "https://neonarcade.io/cyber-arena",
    wasalny: "https://wasalny.app/driver-terminal",
    electrolux: "https://electrolux.store/luxury-collection"
  };

  /* ============================================================
     AUTHENTIC ORIGINAL STYLESHEET DATA & DESIGN TOKENS
     (Extracted directly from project codebases on disk)
     ============================================================ */
  const projectStylesData = {
    clipzila: {
      filePath: "Desktop/cliptica/src/app/globals.css",
      tokens: [
        { name: "--onyx", val: "#050507", note: "Near-Black Obsidian Backdrop" },
        { name: "--champagne", val: "#ff7a3d", note: "Warm Orange Gradient Accent" },
        { name: "--gold", val: "#ff5a1f", note: "Forge Brand Orange (#FF5A1F)" },
        { name: "--gold-2", val: "#e8430a", note: "Deep Ember Glow" },
        { name: "--emerald", val: "#7c2d12", note: "Deep Bronze Accent" },
        { name: "--mist", val: "rgba(255, 255, 255, 0.78)", note: "Silver Typo Ink" },
        { name: "--hair-orange", val: "rgba(255, 90, 31, 0.35)", note: "Orange Neon Hairline" }
      ],
      code: `/* ========================================================
   CLIPZILA — AI Video Clipping SaaS Design System
   Source: cliptica/src/app/globals.css
   Near-black · Charcoal · Forge Orange (#FF5A1F)
   ======================================================== */
:root {
  --onyx: #050507;
  --onyx-2: #0a0a0e;
  --surface: rgba(255, 255, 255, 0.04);
  --surface-2: rgba(255, 255, 255, 0.02);

  --pearl: #ffffff;
  --mist: rgba(255, 255, 255, 0.78);
  --mist-2: rgba(255, 255, 255, 0.52);

  --champagne: #ff7a3d;
  --gold: #ff5a1f;
  --gold-2: #e8430a;
  --emerald: #7c2d12;

  --hair: rgba(255, 255, 255, 0.08);
  --hair-orange: rgba(255, 90, 31, 0.35);

  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

/* Ambient Forge Terrain Backdrop */
.amb {
  position: fixed;
  inset: 0;
  background-color: #050507;
  background-image:
    radial-gradient(ellipse at 50% 45%, rgba(255, 90, 31, 0.18) 0%, transparent 60%),
    url('/images/bg-terrain.webp');
  background-size: cover;
}

/* 9:16 Vertical Clip Card with Face Tracking */
.clipcard {
  border: 1px solid var(--hair-orange);
  background: linear-gradient(165deg, rgba(20, 16, 22, 0.9), rgba(10, 10, 14, 0.85));
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), inset 0 0 25px rgba(255, 90, 31, 0.08);
}

.flame-badge {
  background: rgba(255, 90, 31, 0.2);
  border: 1px solid rgba(255, 90, 31, 0.5);
  color: #ffb27a;
}`
    },

    cliptica: {
      filePath: "Desktop/cliptica/src/app/globals.css",
      tokens: [
        { name: "--onyx", val: "#050507", note: "Near-Black Obsidian Backdrop" },
        { name: "--champagne", val: "#ff7a3d", note: "Warm Orange Gradient Accent" },
        { name: "--gold", val: "#ff5a1f", note: "Forge Brand Orange (#FF5A1F)" },
        { name: "--gold-2", val: "#e8430a", note: "Deep Ember Glow" },
        { name: "--emerald", val: "#7c2d12", note: "Deep Bronze Accent" },
        { name: "--mist", val: "rgba(255, 255, 255, 0.78)", note: "Silver Typo Ink" },
        { name: "--hair-orange", val: "rgba(255, 90, 31, 0.35)", note: "Orange Neon Hairline" }
      ],
      code: `/* ========================================================
   CLIPZILA — AI Video Clipping SaaS Design System
   Source: cliptica/src/app/globals.css
   Near-black · Charcoal · Forge Orange (#FF5A1F)
   ======================================================== */
:root {
  --onyx: #050507;
  --champagne: #ff7a3d;
  --gold: #ff5a1f;
  --gold-2: #e8430a;
  --emerald: #7c2d12;
  --hair-orange: rgba(255, 90, 31, 0.35);
}`
    },

    recflow: {
      filePath: "Desktop/REC/apps/web/app/globals.css (Black & Red Edition)",
      tokens: [
        { name: "--bg-black", val: "#060608", note: "Obsidian Deep Canvas" },
        { name: "--card-black", val: "#0c0c10", note: "Dark Glass Container" },
        { name: "--rec-red", val: "#ff1e44", note: "Cyberpunk Crimson Red" },
        { name: "--rec-red-bright", val: "#ff3b5c", note: "Neon Pulse Glow Accent" },
        { name: "--rec-red-glow", val: "rgba(255, 30, 68, 0.35)", note: "Recording Aura Glow" },
        { name: "--hair-red", val: "rgba(255, 30, 68, 0.22)", note: "Crimson Border" }
      ],
      code: `/* ========================================================
   RecFlow — Distributed Cloud Media (Black & Red Edition)
   Source: REC/apps/web/app/globals.css
   Obsidian Black · Crimson Glow · Cyberpunk Red (#FF1E44)
   ======================================================== */
:root {
  --bg-black: #060608;
  --card-black: #0c0c10;
  --card-black-2: #121218;
  --rec-red: #ff1e44;
  --rec-red-bright: #ff3b5c;
  --rec-red-glow: rgba(255, 30, 68, 0.35);
  --hair-red: rgba(255, 30, 68, 0.22);
}

body {
  background-color: var(--bg-black);
  color: #f5f5f7;
  font-family: 'Inter', sans-serif;
}

/* Neon Red Pulse Recording Indicator */
.rec-btn {
  background: linear-gradient(135deg, #ff1e44 0%, #d80b2d 100%);
  color: #ffffff;
  box-shadow: 0 4px 25px var(--rec-red-glow);
}

.rec-btn:hover {
  box-shadow: 0 6px 32px rgba(255, 30, 68, 0.55);
}

/* Audio Wave Visualizer Bars */
.rec-waveform-bar {
  background-color: var(--rec-red);
  box-shadow: 0 0 10px var(--rec-red-glow);
}`
    },

    kashf: {
      filePath: "Desktop/كشف/webui/static/style.css (Cybersecurity Edition)",
      tokens: [
        { name: "--cyber-black", val: "#040805", note: "Deep Terminal Void" },
        { name: "--cyber-card", val: "#0d1710", note: "Matrix Panel Surface" },
        { name: "--cyber-green", val: "#00ff66", note: "Terminal Matrix Green (#00FF66)" },
        { name: "--cyber-green-glow", val: "rgba(0, 255, 102, 0.35)", note: "Hacker Terminal Glow" },
        { name: "--cyber-card-border", val: "rgba(0, 255, 102, 0.22)", note: "Green Hairline Grid" }
      ],
      code: `/* ========================================================
   Kashf — Enterprise Cybersecurity Terminal Specification
   Source: كشف/webui/static/style.css
   Matrix Terminal Green (#00FF66) · Deep Terminal Black
   ======================================================== */
:root {
  --cyber-black: #040805;
  --cyber-card: #0d1710;
  --cyber-card-border: rgba(0, 255, 102, 0.22);
  --cyber-green: #00ff66;
  --cyber-green-dim: #00cc52;
  --cyber-green-glow: rgba(0, 255, 102, 0.35);
  --cyber-text: #e2fbe8;
  --cyber-muted: #7aa584;
}

body {
  background-color: var(--cyber-black);
  color: var(--cyber-text);
  font-family: 'JetBrains Mono', 'Cairo', monospace;
}

/* Live Terminal Log Stream */
.terminal-box {
  background: #020403;
  border: 1px solid rgba(0, 255, 102, 0.3);
  color: var(--cyber-green);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
}

.cyber-btn {
  background: var(--cyber-green);
  color: #040805;
  font-weight: 900;
  box-shadow: 0 4px 25px var(--cyber-green-glow);
}`
    },

    yadbiyad: {
      filePath: "Desktop/yadbiyad-upload/assets/css/style.css",
      tokens: [
        { name: "--primary", val: "#1B7A4B", note: "Forest Relief Green" },
        { name: "--primary-light", val: "#2E9B63", note: "Emerald Highlight" },
        { name: "--primary-dark", val: "#145A38", note: "Deep Emerald Anchor" },
        { name: "--secondary", val: "#C9A227", note: "Warm Bronze Gold" },
        { name: "--card", val: "#FFFFFF", note: "Clean Relief Card Surface" },
        { name: "--border", val: "#E5E5E5", note: "Card Border" }
      ],
      code: `/* ========================================================
   Yad Biyad (يداً بيد) — Official Relief Portal Tokens
   Source: yadbiyad-upload/assets/css/style.css
   ======================================================== */
:root {
  --primary: #1B7A4B;
  --primary-light: #2E9B63;
  --primary-dark: #145A38;
  --secondary: #C9A227;
  --secondary-light: #D4B84A;
  --background: #FFFFFF;
  --foreground: #1A1A1A;
  --muted: #F5F5F5;
  --muted-foreground: #666666;
  --card: #FFFFFF;
  --border: #E5E5E5;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.12);
}

body {
  font-family: 'Cairo', -apple-system, sans-serif;
  direction: rtl;
  color: var(--foreground);
  background: var(--background);
}

/* Humanitarian Campaign Card */
.campaign-card {
  background: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
  border-radius: 10px;
  transition: width 0.5s ease;
}

.amount-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.whatsapp-btn {
  background: #25D366;
  color: white;
  border-radius: var(--radius);
  transition: all 0.3s ease;
}`
    },

    electrolux: {
      filePath: "Desktop/موقع/Catalog.html",
      tokens: [
        { name: "surface", val: "#131315", note: "Dark Obsidian Studio" },
        { name: "surface-container", val: "#1f1f21", note: "Bento Product Box" },
        { name: "surface-container-high", val: "#2a2a2c", note: "Elevated Glass Border" },
        { name: "secondary", val: "#e9c349", note: "Champagne Gold" },
        { name: "blue-600", val: "#2563eb", note: "Checkout Funnel Primary" },
        { name: "on-surface", val: "#e4e2e4", note: "Luxury Silver Typo" }
      ],
      code: `/* ========================================================
   ElectroLux — Dark Luxury E-Commerce Theme Specification
   Source: موقع/Catalog.html (Tailwind & Glass Panel Config)
   ======================================================== */
:root {
  --surface: #131315;
  --surface-container: #1f1f21;
  --surface-container-high: #2a2a2c;
  --on-surface: #e4e2e4;
  --secondary: #e9c349; /* Luxury Champagne Gold */
  --secondary-container: #af8d11;
  --tertiary: #adc6ff;
  --outline: #8e9192;
  --blue-primary: #2563eb;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #131315;
  color: #e4e2e4;
}

/* Frosted Studio Glass Navigation */
.glass-panel {
  background: rgba(28, 28, 30, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* High-Converting Bento Product Card */
.product-card {
  background: #1f1f21;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}`
    },

    wasalny: {
      filePath: "Desktop/elevry/lib/theme/app_theme.dart",
      tokens: [
        { name: "primaryNavy", val: "#0F2942", note: "Brand Dark Navy (#0F2942)" },
        { name: "secondaryNavy", val: "#1B365D", note: "Operations Blue Header" },
        { name: "accentOrange", val: "#F5A623", note: "Operations Accent Orange (#F5A623)" },
        { name: "successGreen", val: "#2ECC71", note: "Delivered Status Emerald" },
        { name: "dangerRed", val: "#E74C3C", note: "Undelivered Return Alert" },
        { name: "scaffoldBackground", val: "#F6F8FB", note: "Clean Fluid Slate Canvas" }
      ],
      code: `/* ========================================================
   Wasalny — Delivery & Logistics Flutter App Theme
   Source: elevry/lib/theme/app_theme.dart
   Primary Navy (#0F2942) · Accent Orange (#F5A623)
   ======================================================== */
class AppTheme {
  static const Color primaryNavy = Color(0xFF0F2942);
  static const Color secondaryNavy = Color(0xFF1B365D);
  static const Color accentOrange = Color(0xFFF5A623);
  static const Color successGreen = Color(0xFF2ECC71);
  static const Color dangerRed = Color(0xFFE74C3C);
  static const Color scaffoldBackground = Color(0xFFF6F8FB);
  static const Color cardSurface = Colors.white;

  // Soft Operations Card Shadow
  static List<BoxShadow> softShadow = [
    BoxShadow(
      color: Color(0xFF0F2942).withOpacity(0.06),
      blurRadius: 16,
      offset: Offset(0, 6),
    ),
  ];
}`
    }
  };

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderProjectStyleCode(key, container) {
    if (!container) return;
    const isAr = currentLang === 'ar';
    const data = projectStylesData[key];
    if (!data) return;

    container.innerHTML = `
      <div class="style-tokens-box">
        <div class="style-tokens-header">
          <div class="style-tokens-title">${isAr ? 'نظام التصميم ومتغيرات الألوان (CSS Tokens)' : 'Authentic Design System & CSS Tokens'}</div>
          <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--muted); font-weight:700;">${data.filePath}</span>
        </div>
        <div class="style-tokens-list">
          ${data.tokens.map(t => `
            <div class="token-pill">
              <span class="token-swatch" style="background:${t.val};"></span>
              <strong>${t.name}</strong>
              <span style="color:var(--muted); font-size:0.7rem;">${t.val}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="code-source-box">
        <div class="code-source-header">
          <span class="code-file-badge">📄 ${data.filePath}</span>
          <button type="button" class="btn-copy-code" id="btnCopyProjectCss">
            📋 ${isAr ? 'نسخ كود الـ CSS الأصلي' : 'Copy Original CSS Code'}
          </button>
        </div>
        <pre class="code-source-body"><code>${escapeHtml(data.code)}</code></pre>
      </div>
    `;

    const copyBtn = container.querySelector('#btnCopyProjectCss');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(data.code).then(() => {
          copyBtn.textContent = isAr ? '✔ تم نسخ الكود بنجاح!' : '✔ Copied to Clipboard!';
          copyBtn.style.background = 'var(--green)';
          setTimeout(() => {
            copyBtn.textContent = isAr ? '📋 نسخ كود الـ CSS الأصلي' : '📋 Copy Original CSS Code';
            copyBtn.style.background = '';
          }, 2000);
        }).catch(() => {
          copyBtn.textContent = isAr ? '✔ تم التحديد للنسخ' : '✔ Ready to Copy';
        });
      });
    }
  }

  function renderInteractiveSandbox(key, container) {
    if (!container) return;
    const isAr = currentLang === 'ar';

    if (key === 'cliptica') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'أستوديو تقطيع الفيديو بالذكاء الاصطناعي — بيئة تفاعلية' : 'AI Video Trimmer Studio — Live Interactive Sandbox'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--muted);">GROQ-WHISPER + INSIGHTFACE</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="cliptica">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>

        <div class="sb-cliptica-frame">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid rgba(15,255,204,0.2); padding-bottom:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="clip-badge-cyan">● RAW STREAM</span>
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:#94a3b8;">podcast_master_episode_42.mp4 (48:12)</span>
            </div>
            <span style="font-family:'Orbitron', sans-serif; font-size:0.75rem; color:#0fffcc; text-shadow:0 0 8px rgba(15,255,204,0.6);">● 60 FPS SYNCED</span>
          </div>

          <div style="display:grid; grid-template-columns:minmax(0, 1.4fr) minmax(0, 1fr); gap:1.2rem; align-items:center;">
            <div class="clip-tracker-box" style="height:185px; display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative;">
              <div id="clipticaAspectRatioBadge" style="position:absolute; top:8px; right:8px; background:rgba(10,10,15,0.85); font-family:'Orbitron', sans-serif; font-size:0.68rem; padding:0.25rem 0.6rem; border-radius:3px; color:#0fffcc; border:1px solid rgba(15,255,204,0.4);">9:16 SHORTS</div>
              <div style="font-size:2.4rem; margin-bottom:0.4rem;">🎬</div>
              <div style="font-size:0.85rem; color:#e8e8f0; font-family:'Orbitron', sans-serif; font-weight:700;">${isAr ? 'إطار التتبع الذكي للمتحدث' : 'Smart Active Speaker Framing'}</div>
              <div style="font-size:0.72rem; color:#0fffcc; font-family:var(--font-mono); margin-top:0.3rem;">B-Box: [X: 420, Y: 180, Conf: 99.4%]</div>
            </div>

            <div>
              <div style="font-size:0.76rem; color:#94a3b8; font-family:'Orbitron', sans-serif; font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">${isAr ? 'تبديل أبعاد المقطع (Aspect Ratio):' : 'Output Target Ratio:'}</div>
              <div class="sb-btn-group" style="margin-top:0;">
                <button type="button" class="clip-ratio-btn is-active" data-ratio="9:16">9:16 Reels/Shorts</button>
                <button type="button" class="clip-ratio-btn" data-ratio="16:9">16:9 YouTube</button>
                <button type="button" class="clip-ratio-btn" data-ratio="1:1">1:1 Square</button>
              </div>

              <div style="margin-top:1.2rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#94a3b8; font-family:'Orbitron', sans-serif;">
                  <span>${isAr ? 'عتبة الجاذبية (Virality Score):' : 'Hook Detection Threshold:'}</span>
                  <span id="clipticaThresholdVal" style="color:#0fffcc; font-weight:700;">85%</span>
                </div>
                <input type="range" id="clipticaThreshold" min="60" max="98" value="85" style="width:100%; accent-color:#0fffcc; margin-top:0.4rem; cursor:pointer;">
              </div>

              <button type="button" id="clipticaActionBtn" class="clip-btn-primary" style="width:100%; margin-top:1.2rem; display:flex; justify-content:center; align-items:center;">
                ⚡ ${isAr ? 'توليد المقاطع التلقائية (Run Auto-Clip)' : 'Run AI Viral Cut Pipeline'}
              </button>
            </div>
          </div>

          <div id="clipticaOutputFeed" style="margin-top:1.2rem; display:grid; grid-template-columns:repeat(3, 1fr); gap:0.6rem; font-family:var(--font-mono); font-size:0.72rem;">
            <div style="background:#12121a; border:1px solid rgba(15,255,204,0.3); padding:0.6rem; border-radius:4px;">
              <div style="color:#0fffcc; font-family:'Orbitron', sans-serif; font-weight:700;">CLIP #1 (00:45)</div>
              <div style="color:#94a3b8; font-size:0.65rem;">Viral Hook: 98.2%</div>
            </div>
            <div style="background:#12121a; border:1px solid rgba(15,255,204,0.3); padding:0.6rem; border-radius:4px;">
              <div style="color:#0fffcc; font-family:'Orbitron', sans-serif; font-weight:700;">CLIP #2 (00:38)</div>
              <div style="color:#94a3b8; font-size:0.65rem;">Viral Hook: 94.1%</div>
            </div>
            <div style="background:#12121a; border:1px solid rgba(15,255,204,0.3); padding:0.6rem; border-radius:4px;">
              <div style="color:#0fffcc; font-family:'Orbitron', sans-serif; font-weight:700;">CLIP #3 (00:52)</div>
              <div style="color:#94a3b8; font-size:0.65rem;">Viral Hook: 91.5%</div>
            </div>
          </div>
        </div>
      `;

      const ratioBtns = container.querySelectorAll('[data-ratio]');
      const ratioBadge = container.querySelector('#clipticaAspectRatioBadge');
      ratioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          ratioBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const r = btn.getAttribute('data-ratio');
          if (ratioBadge) ratioBadge.textContent = r + (r === '9:16' ? ' SHORTS' : (r === '16:9' ? ' WIDESCREEN' : ' SQUARE'));
        });
      });

      const threshSlider = container.querySelector('#clipticaThreshold');
      const threshVal = container.querySelector('#clipticaThresholdVal');
      if (threshSlider && threshVal) {
        threshSlider.addEventListener('input', () => {
          threshVal.textContent = threshSlider.value + '%';
        });
      }

      const actionBtn = container.querySelector('#clipticaActionBtn');
      if (actionBtn) {
        actionBtn.addEventListener('click', () => {
          actionBtn.disabled = true;
          actionBtn.textContent = isAr ? '⏳ جاري المعالجة وتقطيع الفيديو...' : '⏳ Processing Neural Split...';
          setTimeout(() => {
            actionBtn.disabled = false;
            actionBtn.textContent = isAr ? '✔ تم استخراج 3 مقاطع بنجاح!' : '✔ 3 Viral Clips Extracted!';
            setTimeout(() => {
              actionBtn.textContent = isAr ? '⚡ توليد المقاطع التلقائية (Run Auto-Clip)' : 'Run AI Viral Cut Pipeline';
            }, 2500);
          }, 800);
        });
      }

    } else if (key === 'recflow') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'وحدة رندرة الوسائط السحابية الموزعة' : 'Distributed Cloud Media Ingestion Console'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--muted);">BUFFER: REDIS 7 + BULLMQ MESH</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="recflow">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>

        <div class="sb-screen" style="background:#09090b; border:1px solid #27272a; border-radius:8px; padding:1.2rem; color:#f4f4f5;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid #27272a; padding-bottom:0.75rem;">
            <div>
              <div style="display:inline-flex; align-items:center; gap:6px; border:1px solid rgba(99,102,241,0.4); background:rgba(99,102,241,0.1); padding:0.2rem 0.75rem; border-radius:9999px; font-size:0.75rem; color:#a5b4fc; margin-bottom:0.4rem;">
                ● Works in Chrome, Edge, Firefox & Safari
              </div>
              <div style="font-weight:700; color:#ffffff; font-size:1rem;">${isAr ? 'معمارية الرفع المباشر Zero-API-Load' : 'Direct Presigned Multipart S3/R2 Streaming'}</div>
            </div>
            <button type="button" id="recflowSimulateBtn" style="background:#4f46e5; color:#ffffff; border:none; border-radius:8px; padding:0.5rem 1rem; font-weight:600; cursor:pointer; box-shadow:0 4px 15px rgba(79,70,229,0.3);">
              + ${isAr ? 'محاكاة تسجيل جديد' : 'Simulate Session Upload'}
            </button>
          </div>

          <div id="recflowQueueList" style="display:flex; flex-direction:column; gap:0.6rem;">
            <div style="background:#18181b; border:1px solid #27272a; padding:0.75rem; border-radius:6px;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700;">
                <span style="color:#ffffff;">Screen_Cast_Meeting_Archive.webm (2.4 GB)</span>
                <span style="color:#10b981; font-family:var(--font-mono);">RENDERING 100%</span>
              </div>
              <div class="sb-progress-bar"><div class="sb-progress-fill" style="width:100%; background:#10b981;"></div></div>
            </div>
            <div style="background:#18181b; border:1px solid #27272a; padding:0.75rem; border-radius:6px;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700;">
                <span style="color:#ffffff;">Engineering_Handoff_Keynote.mp4 (840 MB)</span>
                <span style="color:#818cf8; font-family:var(--font-mono);">TRANSCODING 68%</span>
              </div>
              <div class="sb-progress-bar"><div class="sb-progress-fill" style="width:68%; background:#818cf8;"></div></div>
            </div>
          </div>

          <div class="sb-metric-grid">
            <div class="sb-metric-item" style="background:#18181b; border-color:#27272a;">
              <div class="sb-metric-val" style="color:#10b981;">0%</div>
              <div class="sb-metric-lbl" style="color:#a1a1aa;">${isAr ? 'حمل الخادم' : 'Server CPU Drain'}</div>
            </div>
            <div class="sb-metric-item" style="background:#18181b; border-color:#27272a;">
              <div class="sb-metric-val" style="color:#818cf8;">4.2 Gbps</div>
              <div class="sb-metric-lbl" style="color:#a1a1aa;">${isAr ? 'سرعة المعالجة' : 'Pipeline Throughput'}</div>
            </div>
            <div class="sb-metric-item" style="background:#18181b; border-color:#27272a;">
              <div class="sb-metric-val" style="color:#ffffff;">10,000+</div>
              <div class="sb-metric-lbl" style="color:#a1a1aa;">${isAr ? 'جلسات متزامنة' : 'Concurrent Workers'}</div>
            </div>
          </div>
        </div>
      `;

      const simBtn = container.querySelector('#recflowSimulateBtn');
      const queueList = container.querySelector('#recflowQueueList');
      if (simBtn && queueList) {
        simBtn.addEventListener('click', () => {
          const newItem = document.createElement('div');
          newItem.style.cssText = 'background:#18181b; border:1px solid #818cf8; padding:0.75rem; border-radius:6px;';
          newItem.innerHTML = `
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700;">
              <span style="color:#ffffff;">Live_Client_Stream_${Date.now().toString().slice(-4)}.mp4</span>
              <span id="simStatus" style="color:#818cf8; font-family:var(--font-mono);">INGESTING 15%</span>
            </div>
            <div class="sb-progress-bar"><div id="simBar" class="sb-progress-fill" style="width:15%; background:#818cf8;"></div></div>
          `;
          queueList.prepend(newItem);
          let w = 15;
          const itv = setInterval(() => {
            w += 25;
            const bar = newItem.querySelector('#simBar');
            const status = newItem.querySelector('#simStatus');
            if (bar) bar.style.width = Math.min(w, 100) + '%';
            if (status) status.textContent = w >= 100 ? 'COMPLETED 100%' : `INGESTING ${w}%`;
            if (w >= 100) clearInterval(itv);
          }, 350);
        });
      }

    } else if (key === 'kashf') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'محرك كشف الثغرات والتدقيق الأمني' : 'Enterprise Cybersecurity Vulnerability Auditor'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">CVE MATRIX: 17 VECTORS</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="kashf">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>

        <div class="sb-kashf-frame">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; border-bottom:1px solid #2a3245; padding-bottom:0.75rem;">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <div class="kashf-brand-logo">ك</div>
              <div>
                <strong style="color:#ffffff; font-size:0.95rem;">كشف Kashf</strong>
                <div style="font-size:0.72rem; color:#8b96ab;">${isAr ? 'ماسح أمني شامل وفحص PoC مؤتمت' : 'Enterprise DevSecOps Scanner'}</div>
              </div>
            </div>
            <button type="button" id="kashfRunScanBtn" class="kashf-btn-exec">
              🛡️ ${isAr ? 'ابدأ الفحص الأمني المباشر' : 'Execute Penetration Audit'}
            </button>
          </div>

          <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:0.8rem; margin-bottom:1rem;">
            <label style="font-size:0.75rem; color:#8b96ab; display:flex; flex-direction:column; gap:4px;">
              ${isAr ? 'رابط الموقع (دومين العميل):' : 'Audit Target Domain:'}
              <input type="text" class="kashf-input-field" value="https://gateway.secure-corp.sa/v2/" readonly>
            </label>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; align-items:center; font-size:0.72rem; color:#e8ecf4; padding-top:1rem;">
              <span>☑ فحص أعمق</span>
              <span>☑ Prompt Injection</span>
              <span>☑ Rate Limit</span>
            </div>
          </div>

          <div style="margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-family:var(--font-mono); color:#8b96ab; margin-bottom:0.3rem;">
              <span id="kashfScanStatus">${isAr ? 'الحالة: في انتظار أمر الفحص' : 'STATUS: SYSTEM IDLE — READY'}</span>
              <span id="kashfScanPct">0%</span>
            </div>
            <div class="sb-progress-bar"><div id="kashfScanBar" class="sb-progress-fill" style="width:0%; background:#7c3aed;"></div></div>
          </div>

          <div class="kashf-terminal-box" id="kashfTerminalOutput">
            [+] Kashf Engine 2026 initialized.<br>
            [+] Target validated: https://gateway.secure-corp.sa/v2/<br>
            [i] Ready to scan 17 security vectors.
          </div>
        </div>
      `;

      const scanBtn = container.querySelector('#kashfRunScanBtn');
      const scanBar = container.querySelector('#kashfScanBar');
      const scanStatus = container.querySelector('#kashfScanStatus');
      const scanPct = container.querySelector('#kashfScanPct');
      const termBox = container.querySelector('#kashfTerminalOutput');

      if (scanBtn) {
        scanBtn.addEventListener('click', () => {
          scanBtn.disabled = true;
          let p = 0;
          const logs = [
            "[+] Module 1/17: Testing SQL Injection vectors... [PASSED - 0 Vuln]",
            "[+] Module 4/17: Auditing SSRF & DNS Rebinding barriers... [HARDENED]",
            "[+] Module 9/17: Injecting Adversarial LLM Prompt Injections... [GUARDED]",
            "[+] Module 14/17: Validating Deserialization signatures... [CLEAN]",
            "[✔] AUDIT COMPLETE: 17/17 vectors verified. 0 Critical CVEs. Grade: A+"
          ];
          let logIdx = 0;
          const itv = setInterval(() => {
            p += 20;
            if (scanBar) scanBar.style.width = p + '%';
            if (scanPct) scanPct.textContent = p + '%';
            if (scanStatus) scanStatus.textContent = isAr ? `جاري تدقيق الموديول ${Math.ceil(p/6)} من 17...` : `AUDITING MODULE ${Math.ceil(p/6)} OF 17...`;
            if (termBox && logs[logIdx]) {
              termBox.innerHTML += '<br>' + logs[logIdx];
              termBox.scrollTop = termBox.scrollHeight;
              logIdx++;
            }
            if (p >= 100) {
              clearInterval(itv);
              if (scanStatus) scanStatus.textContent = isAr ? '✔ اكتمل الفحص: النظام محصن بنسبة 100% (صفر ثغرات حرجة)' : '✔ AUDIT COMPLETE: 0 CRITICAL CVEs (GRADE A+)';
              scanBtn.disabled = false;
            }
          }, 300);
        });
      }

    } else if (key === 'yadbiyad') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'منصة الإغاثة الإنسانية — حاسبة الأثر والشفافية' : 'Humanitarian Relief Field Portal — Impact Calculator'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">DOMAIN: HANDBYHANDPS.COM</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="yadbiyad">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>

        <div class="sb-yadbiyad-frame">
          <div style="margin-bottom:1.2rem; border-bottom:1px solid #e5e5e5; padding-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <strong style="color:#1a1a1a; font-size:1.15rem; font-weight:800;">${isAr ? 'حملة الطوارئ الغذائية والطبية' : 'Emergency Field Aid & Shelter Campaign'}</strong>
              <span style="font-family:var(--font-mono); font-size:0.85rem; color:#1B7A4B; font-weight:800;">$284,500 / $300,000 (94.8%)</span>
            </div>
            <div class="sb-progress-bar"><div class="sb-progress-fill" style="width:94.8%; background:linear-gradient(90deg, #1B7A4B, #2E9B63);"></div></div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:1.2rem; border-radius:8px; margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
              <span style="font-weight:700; color:#1a1a1a;">${isAr ? 'حدد قيمة المساهمة المباشرة:' : 'Select Contribution Amount:'}</span>
              <span id="yadbiyadDonationAmount" style="font-size:1.6rem; font-weight:800; color:#1B7A4B;">$100</span>
            </div>
            <div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-bottom:0.8rem;">
              <button type="button" class="yad-amt-btn" data-amt="25">$25</button>
              <button type="button" class="yad-amt-btn" data-amt="50">$50</button>
              <button type="button" class="yad-amt-btn is-active" data-amt="100">$100</button>
              <button type="button" class="yad-amt-btn" data-amt="250">$250</button>
            </div>
            <input type="range" id="yadbiyadSlider" min="25" max="500" step="25" value="100" style="width:100%; accent-color:#1B7A4B; cursor:pointer;">
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:1rem;">
            <div style="display:flex; align-items:center; gap:0.8rem;">
              <div style="font-size:2rem;">📦</div>
              <div>
                <div id="yadbiyadImpactFormula" style="font-weight:800; color:#145A38;">
                  ${isAr ? 'مساهمتك تغطي سلات غذائية لـ 4 عائلات لمدة شهر كامل' : 'Provides Emergency Family Food Baskets for 4 Families'}
                </div>
                <div style="font-size:0.74rem; color:#1B7A4B; margin-top:0.2rem;">
                  ${isAr ? 'توثيق فوري وربط مباشر عبر السجل السحابي الشفاف' : 'Instant Ledger Verification & 100% Direct Disbursement'}
                </div>
              </div>
            </div>
            <a href="https://wa.me/970594369446?text=${encodeURIComponent('مرحباً، أود المساهمة في حملة الإغاثة الإنسانية (يداً بيد)')}" target="_blank" class="yad-wa-btn">
              💬 ${isAr ? 'تأكيد المساهمة عبر واتساب' : 'Donate via WhatsApp'}
            </a>
          </div>
        </div>
      `;

      const slider = container.querySelector('#yadbiyadSlider');
      const amount = container.querySelector('#yadbiyadDonationAmount');
      const formula = container.querySelector('#yadbiyadImpactFormula');
      const amtBtns = container.querySelectorAll('.yad-amt-btn');

      function updateImpact(v) {
        if (amount) amount.textContent = '$' + v;
        const fams = Math.max(1, Math.floor(v / 25));
        if (formula) {
          formula.textContent = isAr 
            ? `مساهمتك تغطي سلات غذائية لـ ${fams} عائلات لمدة شهر كامل`
            : `Provides Emergency Family Food Baskets for ${fams} Families`;
        }
      }

      amtBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          amtBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const val = parseInt(btn.getAttribute('data-amt'), 10);
          if (slider) slider.value = val;
          updateImpact(val);
        });
      });

      if (slider) {
        slider.addEventListener('input', () => {
          const v = parseInt(slider.value, 10);
          amtBtns.forEach(b => {
            b.classList.toggle('is-active', parseInt(b.getAttribute('data-amt'), 10) === v);
          });
          updateImpact(v);
        });
      }

    } else if (key === 'electrolux') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'المتجر الإلكتروني الفاخر — تجربة تسوق تفاعلية' : 'Luxury Precision Storefront — Interactive Shopping Experience'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">SPA REACT + TAILWIND</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="electrolux">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>

        <div class="sb-electrolux-frame">
          <div class="lux-glass-nav">
            <div style="display:flex; align-items:center; gap:1.2rem;">
              <strong style="color:#ffffff; font-size:1.1rem; letter-spacing:-0.02em;">ElectroLux</strong>
              <span style="color:#2563eb; font-size:0.8rem; font-weight:600;">${isAr ? 'المجموعات الفاخرة' : 'Collections'}</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:0.78rem; color:#e4e2e4; display:flex; align-items:center; gap:0.5rem;">
              🛒 ${isAr ? 'حقيبة التسوق:' : 'SHOPPING BAG:'}
              <span id="luxCartCount" class="lux-gold-badge">0</span>
            </div>
          </div>

          <div class="sb-btn-group" style="margin-bottom:1rem; margin-top:0;">
            <button type="button" class="sb-pill-btn is-active lux-cat-btn" data-cat="all">${isAr ? 'الكل' : 'All Catalog'}</button>
            <button type="button" class="sb-pill-btn lux-cat-btn" data-cat="audio">${isAr ? 'الصوتيات الفاخرة' : 'Precision Audio'}</button>
            <button type="button" class="sb-pill-btn lux-cat-btn" data-cat="watches">${isAr ? 'الساعات الميكانيكية' : 'Horology Timepieces'}</button>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:1rem;">
            <div class="lux-item" data-cat="audio" style="border:1px solid #2a2a2c; border-radius:8px; padding:1rem; background:#1f1f21;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span style="font-size:1.8rem;">🎧</span>
                <span style="font-size:0.65rem; background:#2563eb; color:#fff; padding:0.2rem 0.5rem; border-radius:3px; text-transform:uppercase;">Discount 20%</span>
              </div>
              <strong style="color:#ffffff; font-size:0.95rem; display:block; margin-top:0.4rem;">Sonic Core Pro</strong>
              <div style="color:#e9c349; font-weight:800; font-size:1.1rem; margin:0.3rem 0;">$399</div>
              <p style="font-size:0.72rem; color:#a1a1aa; margin-bottom:0.6rem;">Ultra-low latency reference acoustics.</p>
              <button type="button" class="lux-btn-cart lux-add-btn" style="width:100%;">
                + ${isAr ? 'إضافة للسلة' : 'Add to Bag'}
              </button>
            </div>

            <div class="lux-item" data-cat="watches" style="border:1px solid #2a2a2c; border-radius:8px; padding:1rem; background:#1f1f21;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span style="font-size:1.8rem;">⌚</span>
                <span style="font-size:0.65rem; background:rgba(233,195,73,0.2); color:#e9c349; border:1px solid #e9c349; padding:0.2rem 0.5rem; border-radius:3px; text-transform:uppercase;">Edition 01</span>
              </div>
              <strong style="color:#ffffff; font-size:0.95rem; display:block; margin-top:0.4rem;">Chronograph Titanium 42mm</strong>
              <div style="color:#e9c349; font-weight:800; font-size:1.1rem; margin:0.3rem 0;">$1,450</div>
              <p style="font-size:0.72rem; color:#a1a1aa; margin-bottom:0.6rem;">Grade-5 titanium aerospace movement.</p>
              <button type="button" class="lux-btn-cart lux-add-btn" style="width:100%;">
                + ${isAr ? 'إضافة للسلة' : 'Add to Bag'}
              </button>
            </div>
          </div>
        </div>
      `;

      let cartCount = 0;
      const cartCountEl = container.querySelector('#luxCartCount');
      container.querySelectorAll('.lux-add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          cartCount++;
          if (cartCountEl) cartCountEl.textContent = cartCount;
          btn.textContent = isAr ? '✔ تمت الإضافة' : '✔ Added to Bag';
          setTimeout(() => {
            btn.textContent = isAr ? '+ إضافة للسلة' : '+ Add to Bag';
          }, 1500);
        });
      });

      const catBtns = container.querySelectorAll('.lux-cat-btn');
      const items = container.querySelectorAll('.lux-item');
      catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          catBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const cat = btn.getAttribute('data-cat');
          items.forEach(it => {
            it.style.display = (cat === 'all' || it.getAttribute('data-cat') === cat) ? 'block' : 'none';
          });
        });
      });

    } else if (key === 'neonarcade') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'محرك الألعاب التفاعلي السريع' : 'High-Performance Instant Web Games Engine'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">60 FPS LOCKED</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="neonarcade">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>
        <div class="sb-screen" style="background:#090d16; color:#fff; border-radius:6px; padding:1.2rem; border:1px solid #1e293b; text-align:center;">
          <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; color:#94a3b8; margin-bottom:0.8rem;">
            <span>SCORE: <strong id="neonScore" style="color:#10b981;">0</strong></span>
            <span>CYBER ORB PHYSICS (MOVE MOUSE)</span>
            <span style="color:#10b981;">● 60 FPS</span>
          </div>
          <canvas id="neonMiniCanvas" width="560" height="180" style="width:100%; height:180px; background:#040711; border-radius:4px; border:1px solid #1e293b; cursor:crosshair;"></canvas>
          <div style="font-size:0.75rem; color:#64748b; font-family:var(--font-mono); margin-top:0.6rem;">
            ${isAr ? 'حرك الماوس لتوجيه كرات الطاقة الزمردية (انقر لمضاعفة السرعة)' : 'Move mouse inside arena to deflect emerald photon particles'}
          </div>
        </div>
      `;

      const cvs = container.querySelector('#neonMiniCanvas');
      const scoreEl = container.querySelector('#neonScore');
      if (cvs && cvs.getContext) {
        const ctx = cvs.getContext('2d');
        let ballX = 280, ballY = 90, vx = 4, vy = 3;
        let score = 0;
        let paddleX = 280;

        cvs.addEventListener('mousemove', e => {
          const r = cvs.getBoundingClientRect();
          paddleX = (e.clientX - r.left) * (cvs.width / r.width);
        });

        cvs.addEventListener('click', () => {
          vx *= 1.2;
          vy *= 1.2;
        });

        function renderNeon() {
          if (!document.getElementById('neonMiniCanvas')) return;
          ctx.fillStyle = '#040711';
          ctx.fillRect(0, 0, cvs.width, cvs.height);

          ctx.fillStyle = '#10b981';
          ctx.fillRect(paddleX - 35, cvs.height - 12, 70, 6);

          ballX += vx;
          ballY += vy;

          if (ballX <= 8 || ballX >= cvs.width - 8) vx = -vx;
          if (ballY <= 8) vy = -vy;
          if (ballY >= cvs.height - 20) {
            if (ballX >= paddleX - 45 && ballX <= paddleX + 45) {
              vy = -Math.abs(vy);
              score += 10;
              if (scoreEl) scoreEl.textContent = score;
            } else if (ballY > cvs.height) {
              ballX = cvs.width / 2;
              ballY = 40;
              vy = 3;
            }
          }

          ctx.beginPath();
          ctx.arc(ballX, ballY, 7, 0, Math.PI * 2);
          ctx.fillStyle = '#059669';
          ctx.fill();

          requestAnimationFrame(renderNeon);
        }
        renderNeon();
      }

    } else if (key === 'wasalny') {
      container.innerHTML = `
        <div class="sb-header">
          <div class="sb-badge"><span class="sb-dot"></span> ${isAr ? 'لوحة تحكم السائق اللوجستية — بيئة العمل دون اتصال' : 'Field Logistics Terminal — Offline-First SQLite Ledger'}</div>
          <div class="sb-quick-actions">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">FLUTTER CLEAN ARCH</span>
            <button type="button" class="btn-switch-to-styles" data-goto-styles="wasalny">
              💻 ${isAr ? 'عرض كود الستايل الأصلي (CSS)' : 'View Original Style Code'}
            </button>
          </div>
        </div>

        <div class="sb-screen" style="background:#ffffff; border:1px solid var(--line); border-radius:6px; padding:1.2rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--line-2); padding-bottom:0.75rem;">
            <div>
              <strong style="color:var(--ink);">${isAr ? 'حالة شبكة السائق الميداني:' : 'Driver Network Connection State:'}</strong>
              <div id="wasalnySyncStatus" style="font-family:var(--font-mono); font-size:0.75rem; color:var(--green); font-weight:700;">
                ● ${isAr ? 'متصل بالإنترنت (مزامنة فورية للسيرفر)' : 'ONLINE (REAL-TIME CLOUD SYNC)'}
              </div>
            </div>
            <button type="button" id="wasalnyToggleMode" class="btn btn-ghost btn-sm">
              📶 ${isAr ? 'تبديل وضع الاتصال (Online/Offline)' : 'Toggle Connection'}
            </button>
          </div>

          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            <div style="background:#f8fafc; border:1px solid var(--line-2); padding:0.75rem; border-radius:4px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-weight:700; color:var(--ink);">📦 WAYPOINT #1084 — RIYADH INDUSTRIAL ZONE</div>
                <div style="font-size:0.75rem; color:var(--muted); font-family:var(--font-mono);">Local TxID: 0x8F9C21A • Status: Out for Delivery</div>
              </div>
              <button type="button" class="btn btn-lime btn-sm wasalny-del-btn">${isAr ? 'تأكيد التسليم' : 'Mark Delivered'}</button>
            </div>
          </div>

          <div style="margin-top:1rem; padding:0.75rem 1rem; background:var(--green-light); border:1px solid var(--green-border); border-radius:4px; font-size:0.78rem; font-family:var(--font-mono); color:var(--ink);">
            ${isAr ? 'حماية البيانات: صفر فقدان للسجلات بفضل قاعدة البيانات المحلية المدمجة.' : 'Zero Data Loss Protocol: Local transactions persist encrypted when offline.'}
          </div>
        </div>
      `;

      let isOnline = true;
      const toggleBtn = container.querySelector('#wasalnyToggleMode');
      const syncStatus = container.querySelector('#wasalnySyncStatus');
      if (toggleBtn && syncStatus) {
        toggleBtn.addEventListener('click', () => {
          isOnline = !isOnline;
          if (isOnline) {
            syncStatus.style.color = 'var(--green)';
            syncStatus.textContent = isAr ? '● متصل بالإنترنت (مزامنة فورية للسيرفر)' : '● ONLINE (REAL-TIME CLOUD SYNC)';
          } else {
            syncStatus.style.color = '#f59e0b';
            syncStatus.textContent = isAr ? '○ غير متصل (حفظ محلي فوري مشفر في SQLite)' : '○ OFFLINE (TRANSACTIONS SAVED TO LOCAL SQLITE)';
          }
        });
      }

      container.querySelectorAll('.wasalny-del-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.disabled = true;
          btn.style.background = '#e2e8f0';
          btn.style.color = '#64748b';
          btn.textContent = isAr ? '✔ تم التسليم والمزامنة' : '✔ Delivered & Logged';
        });
      });
    }

    // Attach click listeners to all "View Original Style Code" buttons
    container.querySelectorAll('.btn-switch-to-styles').forEach(btn => {
      btn.addEventListener('click', () => {
        setModalTab('styles');
      });
    });
  }

  /* ============================================================
     TABBED IN-PAGE MODAL ENGINE (PREVIEW, STYLES, ARCHITECTURE)
     ============================================================ */
  const modal = document.getElementById('archModal');
  const mTitle = document.getElementById('modalTitle');
  const mCat = document.getElementById('modalCat');
  const mOverview = document.getElementById('modalOverview');
  const mSolution = document.getElementById('modalSolution');
  const mImpact = document.getElementById('modalImpact');
  const mStack = document.getElementById('modalStack');
  const mClose = document.getElementById('modalClose');
  const mUrlDisplay = document.getElementById('modalUrlDisplay');
  const mStyleCodeContainer = document.getElementById('modalStyleCodeContainer');
  const pIframe = document.getElementById('projectLiveIframe');
  const pSiteName = document.getElementById('previewSiteName');
  const pUrlBar = document.getElementById('previewUrlBar');
  const pBtnExternal = document.getElementById('btnExternalPreview');

  const projectPreviewPaths = {
    clipzila: "previews/clipzila/index.html",
    cliptica: "previews/cliptica/index.html",
    electrolux: "previews/electrolux/index.html",
    yadbiyad: "previews/yadbiyad/index.html",
    kashf: "previews/kashf/index.html",
    recflow: "previews/recflow/index.html",
    wasalny: "previews/wasalny/index.html"
  };

  const tabContentPreview = document.getElementById('tabContentPreview');
  const tabContentStyles = document.getElementById('tabContentStyles');
  const tabContentArch = document.getElementById('tabContentArch');
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');

  function setModalTab(tabName) {
    modalTabBtns.forEach(b => {
      if (b.getAttribute('data-tab') === tabName) b.classList.add('is-active');
      else b.classList.remove('is-active');
    });

    if (tabContentPreview) tabContentPreview.classList.toggle('is-active', tabName === 'preview');
    if (tabContentStyles) tabContentStyles.classList.toggle('is-active', tabName === 'styles');
    if (tabContentArch) tabContentArch.classList.toggle('is-active', tabName === 'arch');
  }

  modalTabBtns.forEach(b => {
    b.addEventListener('click', () => {
      setModalTab(b.getAttribute('data-tab'));
    });
  });

  function openProjectModal(key, initialTab) {
    activeModalProjectKey = key;
    const data = projectsData[key]?.[currentLang];
    if (!data) return;

    if (mTitle) mTitle.textContent = data.title;
    if (mCat) mCat.textContent = data.tag;
    if (mOverview) mOverview.textContent = data.overview;
    if (mSolution) mSolution.textContent = data.solution;
    if (mImpact) mImpact.textContent = data.impact;

    if (mUrlDisplay && projectUrls[key]) {
      mUrlDisplay.textContent = projectUrls[key];
    }

    if (mStack) {
      mStack.innerHTML = '';
      data.stack.forEach(s => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = s;
        mStack.appendChild(span);
      });
    }

    // Embed authentic running standalone website inside the live browser preview iframe
    const previewRel = projectPreviewPaths[key] || 'previews/cliptica/index.html';
    if (pIframe) {
      pIframe.src = previewRel;
    }
    if (pSiteName) {
      pSiteName.textContent = data.title;
    }
    if (pUrlBar) {
      const origin = window.location.origin || 'http://localhost:3000';
      pUrlBar.textContent = `${origin}/${previewRel}`;
    }
    if (pBtnExternal) {
      pBtnExternal.href = previewRel;
    }

    // Render authentic original style code & design tokens
    if (mStyleCodeContainer) {
      renderProjectStyleCode(key, mStyleCodeContainer);
    }

    setModalTab(initialTab || 'preview');

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeArchModal() {
    activeModalProjectKey = null;
    if (pIframe) {
      pIframe.src = 'about:blank';
    }
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Open Preview Click Handlers
  document.querySelectorAll('[data-open-preview]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openProjectModal(btn.getAttribute('data-open-preview'), 'preview');
    });
  });

  // Open Architecture Click Handlers
  document.querySelectorAll('[data-open-arch]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openProjectModal(btn.getAttribute('data-open-arch'), 'arch');
    });
  });

  if (mClose) mClose.addEventListener('click', closeArchModal);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeArchModal();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeArchModal();
  });

  // Initialize Language (Defaults to English)
  applyLanguage(currentLang);
})();
