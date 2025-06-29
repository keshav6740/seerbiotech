var AOS = window.AOS || { init: () => console.warn("AOS not loaded.") };
var particlesJS =
  window.particlesJS || (() => console.warn("particles.js not loaded."));
var THREE =
  window.THREE ||
  (() => {
    console.warn("THREE.js not loaded.");
    return {};
  })();

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 500);
  }

  if (document.getElementById("particles-js")) initMainParticles();
  if (document.getElementById("cta-particles")) initCtaParticles();

  const navbar = document.getElementById("mainNav");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }

  if (document.getElementById("molecule-canvas")) {
    initMoleculeAnimation();
  }

  if (document.querySelector(".product-carousel")) {
    initProductCarousel();
  }

  // *** NEW: Animate Statistics Counter on About Page ***
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stat = entry.target;
            const targetText = stat.getAttribute("data-count");
            const target = parseInt(targetText.replace("+", ""));

            let current = 0;
            const increment = target / 100; // Animate over 100 steps
            const duration = 2000; // 2 seconds total

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                stat.textContent = targetText; // Use original text with '+' if present
                clearInterval(timer);
              } else {
                stat.textContent = Math.floor(current);
              }
            }, duration / 100);

            observer.unobserve(stat); // Animate only once
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is visible

    statNumbers.forEach((stat) => {
      observer.observe(stat);
    });
  }

  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) backToTopBtn.classList.add("active");
      else backToTopBtn.classList.remove("active");
    });
    backToTopBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  document.querySelectorAll("a.scroll-btn").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});

function initProductCarousel() {
  const carouselContainer = document.querySelector(".product-carousel");
  if (!carouselContainer || typeof $ === "undefined" || !$.fn.slick) {
    console.error(
      "Carousel container not found or jQuery/Slick is not loaded."
    );
    return;
  }
  // A subset of your products for the homepage carousel
  const featuredProducts = [
    {
      id: 1,
      name: "BONSER-CZ Softgel",
      packing: "10x10 Blister",
      image: "images/merged/BONSER-CZ-3D-BIG.png",
    },
    {
      id: 3,
      name: "BONSER-K2-7 Softgel",
      packing: "10x1x10 Blister",
      image: "images/merged/BONSER-K2-7-3D.jpg",
    },
    {
      id: 5,
      name: "BPSER-AT Tabs",
      packing: "10x10 Alu. Alu.",
      image: "images/merged/bpser-at.jpg",
    },
    {
      id: 14,
      name: "COLNET CREAM",
      packing: "20 gm Lemi Tube",
      image: "images/merged/COLNET-3D-BIG.png",
    },
    {
      id: 15,
      name: "DEFNET-6 Tabs",
      packing: "10x10 Alu.Alu.",
      image: "images/merged/DEFNET-6-3D.png",
    },
    {
      id: 22,
      name: "FIXER-OF Tabs",
      packing: "10x10 Alu.Alu.",
      image: "images/merged/FIXER-OF-3D.png",
    },
    {
      id: 28,
      name: "GINSER Softgel",
      packing: "10x1x10 Blister",
      image: "images/merged/GINSER-3D-BIG.png",
    },
    {
      id: 32,
      name: "LYCOSER SOFTGEL",
      packing: "10x10 Blister",
      image: "images/merged/LYCOSER-SOFT-3D-BIG.png",
    },
    {
      id: 44,
      name: "NACPOL-SP Tabs",
      packing: "10x10 Alu. Alu.",
      image: "images/merged/NACPOL-SP-3D.png",
    },
    {
      id: 53,
      name: "RABENET-DSR Caps",
      packing: "10x10 Alu. Alu.",
      image: "images/merged/RABENET-DSR-3D.png",
    },
    {
      id: 77,
      name: "SERVE-E Powder",
      packing: "105 gm",
      image: "images/merged/SERVE-E-3D.jpg",
    },
    {
      id: 88,
      name: "VOMSER-MD Tabs",
      packing: "10x10 Alu.Alu",
      image: "images/merged/VOMSER-MD-3D.png",
    },
  ];

  let carouselHTML = "";
  featuredProducts.forEach((product) => {
    carouselHTML += `<div class="product-card"><div class="product-card-inner"><div class="product-image"><img src="${product.image}" alt="${product.name}"></div><div class="product-content"><h5>${product.name}</h5><p class="category">${product.packing}</p><a href="products.html" class="btn btn-sm btn-outline-primary">View All Products</a></div></div></div>`;
  });
  carouselContainer.innerHTML = carouselHTML;
  $(carouselContainer).slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });
}

// --- Placeholder PARTICLE AND 3D ANIMATION FUNCTIONS ---
function initMainParticles() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#2e3192" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#2e3192",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
}
function initCtaParticles() {
  particlesJS("cta-particles", {
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 5, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
  });
}
function initMoleculeAnimation() {
  if (typeof THREE.Scene === "undefined") return;
  const canvas = document.getElementById("molecule-canvas");
  if (!canvas) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  const moleculeGroup = new THREE.Group();
  const atomGeometry = new THREE.SphereGeometry(1, 32, 32);
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0x4facfe }),
    new THREE.MeshBasicMaterial({ color: 0xf7941d }),
    new THREE.MeshBasicMaterial({ color: 0x13547a }),
    new THREE.MeshBasicMaterial({ color: 0xff758c }),
  ];
  const atomPositions = [
    { x: 0, y: 0, z: 0 },
    { x: 3, y: 3, z: 0 },
    { x: -3, y: 3, z: 0 },
    { x: 0, y: -3, z: 3 },
    { x: 0, y: -3, z: -3 },
    { x: 3, y: -3, z: 0 },
    { x: -3, y: -3, z: 0 },
    { x: 3, y: 0, z: 3 },
    { x: -3, y: 0, z: 3 },
    { x: 3, y: 0, z: -3 },
    { x: -3, y: 0, z: -3 },
  ];
  atomPositions.forEach((pos, index) => {
    const atom = new THREE.Mesh(
      atomGeometry,
      materials[index % materials.length]
    );
    atom.position.set(pos.x, pos.y, pos.z);
    moleculeGroup.add(atom);
    if (index > 0) {
      const bond = new THREE.Mesh(
        createBondGeometry(
          new THREE.Vector3(pos.x, pos.y, pos.z),
          new THREE.Vector3(
            atomPositions[0].x,
            atomPositions[0].y,
            atomPositions[0].z
          )
        ),
        new THREE.MeshBasicMaterial({
          color: 0xcccccc,
          transparent: true,
          opacity: 0.6,
        })
      );
      moleculeGroup.add(bond);
    }
  });
  addBond(1, 2, moleculeGroup, atomPositions);
  addBond(3, 4, moleculeGroup, atomPositions);
  addBond(5, 6, moleculeGroup, atomPositions);
  addBond(7, 8, moleculeGroup, atomPositions);
  addBond(9, 10, moleculeGroup, atomPositions);
  scene.add(moleculeGroup);
  camera.position.z = 15;
  function animate() {
    requestAnimationFrame(animate);
    moleculeGroup.rotation.x += 0.003;
    moleculeGroup.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  window.addEventListener("resize", () => {
    if (!canvas) return;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
  animate();
}
function createBondGeometry(startPos, endPos) {
  const direction = new THREE.Vector3().subVectors(endPos, startPos);
  const length = direction.length();
  const bondGeometry = new THREE.CylinderGeometry(0.2, 0.2, length, 8);
  bondGeometry.translate(0, length / 2, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.clone().normalize()
  );
  const matrix = new THREE.Matrix4()
    .makeRotationFromQuaternion(quaternion)
    .setPosition(startPos);
  bondGeometry.applyMatrix4(matrix);
  return bondGeometry;
}
function addBond(i1, i2, group, positions) {
  const startPos = new THREE.Vector3(
    positions[i1].x,
    positions[i1].y,
    positions[i1].z
  );
  const endPos = new THREE.Vector3(
    positions[i2].x,
    positions[i2].y,
    positions[i2].z
  );
  const bond = new THREE.Mesh(
    createBondGeometry(startPos, endPos),
    new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      transparent: true,
      opacity: 0.6,
    })
  );
  group.add(bond);
}
