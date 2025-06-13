// Main JavaScript for SB Pharmaceuticals Website

// Declare AOS variable first to avoid use before declaration
var AOS;

// Check if AOS is available globally, otherwise declare it
if (typeof AOS === 'undefined') {
    AOS = {
        init: function(options) {
            console.warn('AOS library not loaded. Animation on scroll may not work.');
        }
    };
}

// Declare particlesJS variable first to avoid use before declaration
var particlesJS;

// Check if particlesJS is available globally, otherwise declare it
if (typeof particlesJS === 'undefined') {
    particlesJS = function(id, options) {
        console.warn('particles.js library not loaded. Particle effects will not be displayed.');
    };
}

// Check if THREE is available globally, otherwise declare it
if (typeof THREE === 'undefined') {
    var THREE = {
        Scene: function() {},
        PerspectiveCamera: function() {},
        WebGLRenderer: function() { return { setSize: function() {}, render: function() {} }; },
        Group: function() { return { rotation: { x: 0, y: 0 }, add: function() {} }; },
        SphereGeometry: function() {},
        MeshBasicMaterial: function() {},
        Mesh: function() { return { position: { set: function() {} } }; },
        Vector3: function() { return { subVectors: function() { return { length: function() { return 0; }, clone: function() { return { normalize: function() { return {}; } }; } }; } }; },
        CylinderGeometry: function() { return { translate: function() {}, applyMatrix4: function() {} }; },
        Quaternion: function() { return { setFromUnitVectors: function() {} }; },
        Matrix4: function() { return { makeRotationFromQuaternion: function() {}, setPosition: function() {} }; }
    };
    console.warn('THREE.js library not loaded. 3D molecule animation will not work.');
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Preloader
    setTimeout(function() {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
        }, 500);
    }, 1500);
    
    // Initialize Particles.js for background
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#2e3192'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#2e3192',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Initialize CTA Particles
    if (document.getElementById('cta-particles')) {
        particlesJS('cta-particles', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: false
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 3D Molecule Animation (if on homepage)
    if (document.getElementById('molecule-canvas')) {
        initMoleculeAnimation();
    }
    
    // Product Carousel Navigation
    const productCarousel = document.querySelector('.product-carousel');
    if (productCarousel) {
        const prevBtn = document.getElementById('prev-product');
        const nextBtn = document.getElementById('next-product');
        
        prevBtn.addEventListener('click', function() {
            productCarousel.scrollBy({
                left: -330,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            productCarousel.scrollBy({
                left: 330,
                behavior: 'smooth'
            });
        });
    }
    
    // Testimonial Carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    
    if (testimonialCards.length > 0 && indicators.length > 0) {
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                
                testimonialCards.forEach(card => {
                    card.classList.remove('active');
                });
                
                indicators.forEach(ind => {
                    ind.classList.remove('active');
                });
                
                testimonialCards[index].classList.add('active');
                this.classList.add('active');
            });
        });
        
        // Auto rotate testimonials
        let currentTestimonial = 0;
        setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            
            testimonialCards.forEach(card => {
                card.classList.remove('active');
            });
            
            indicators.forEach(ind => {
                ind.classList.remove('active');
            });
            
            testimonialCards[currentTestimonial].classList.add('active');
            indicators[currentTestimonial].classList.add('active');
        }, 5000);
    }
    
    // Animate Statistics Counter
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const statsSection = document.querySelector('.stats-container');
        
        const animateStats = function() {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                
                let current = 0;
                const timer = setInterval(function() {
                    current += step;
                    if (current >= target) {
                        stat.textContent = target;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });
        };
        
        // Use Intersection Observer to trigger animation when stats are visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        if (statsSection) {
            observer.observe(statsSection);
        }
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a.scroll-btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 3D Molecule Animation
function initMoleculeAnimation() {
    const canvas = document.getElementById('molecule-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create molecule structure
    const moleculeGroup = new THREE.Group();
    
    // Create atoms
    const atomGeometry = new THREE.SphereGeometry(1, 32, 32);
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0x4facfe }), // Blue
        new THREE.MeshBasicMaterial({ color: 0xf7941d }), // Orange
        new THREE.MeshBasicMaterial({ color: 0x13547a }), // Dark Blue
        new THREE.MeshBasicMaterial({ color: 0xff758c })  // Pink
    ];
    
    // Create atoms positions
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
        { x: -3, y: 0, z: -3 }
    ];
    
    // Add atoms to molecule
    atomPositions.forEach((pos, index) => {
        const material = materials[index % materials.length];
        const atom = new THREE.Mesh(atomGeometry, material);
        atom.position.set(pos.x, pos.y, pos.z);
        moleculeGroup.add(atom);
        
        // Add connections (bonds) between atoms
        if (index > 0) {
            const startPos = new THREE.Vector3(pos.x, pos.y, pos.z);
            const endPos = new THREE.Vector3(
                atomPositions[0].x,
                atomPositions[0].y,
                atomPositions[0].z
            );
            
            const bondGeometry = createBondGeometry(startPos, endPos);
            const bondMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.6 });
            const bond = new THREE.Mesh(bondGeometry, bondMaterial);
            moleculeGroup.add(bond);
        }
    });
    
    // Add additional bonds between atoms
    addBond(1, 2, moleculeGroup, atomPositions);
    addBond(3, 4, moleculeGroup, atomPositions);
    addBond(5, 6, moleculeGroup, atomPositions);
    addBond(7, 8, moleculeGroup, atomPositions);
    addBond(9, 10, moleculeGroup, atomPositions);
    
    scene.add(moleculeGroup);
    
    // Position camera
    camera.position.z = 15;
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate molecule
        moleculeGroup.rotation.x += 0.003;
        moleculeGroup.rotation.y += 0.005;
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
    
    animate();
}

// Helper function to create bond geometry
function createBondGeometry(startPos, endPos) {
    const direction = new THREE.Vector3().subVectors(endPos, startPos);
    const length = direction.length();
    
    // Create a cylinder geometry for the bond
    const bondGeometry = new THREE.CylinderGeometry(0.2, 0.2, length, 8);
    bondGeometry.translate(0, length / 2, 0);
    
    // Orient the cylinder to point from start to end
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
    
    const matrix = new THREE.Matrix4();
    matrix.makeRotationFromQuaternion(quaternion);
    matrix.setPosition(startPos);
    
    bondGeometry.applyMatrix4(matrix);
    
    return bondGeometry;
}

// Helper function to add bond between atoms
function addBond(atom1Index, atom2Index, moleculeGroup, atomPositions) {
    const startPos = new THREE.Vector3(
        atomPositions[atom1Index].x,
        atomPositions[atom1Index].y,
        atomPositions[atom1Index].z
    );
    
    const endPos = new THREE.Vector3(
        atomPositions[atom2Index].x,
        atomPositions[atom2Index].y,
        atomPositions[atom2Index].z
    );
    
    const bondGeometry = createBondGeometry(startPos, endPos);
    const bondMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.6 });
    const bond = new THREE.Mesh(bondGeometry, bondMaterial);
    moleculeGroup.add(bond);
}