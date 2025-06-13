// Products Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sample product data (in a real application, this would come from a database)
    const products = generateSampleProducts(120);
    
    // Initialize variables
    let currentView = 'grid';
    let currentPage = 1;
    let currentCategory = 'all';
    let currentSort = 'name-asc';
    let searchTerm = '';
    let categoryFilter = '';
    let formFilter = '';
    const productsPerPage = 12;
    
    // Initial load
    let filteredProducts = [...products];
    displayProducts(filteredProducts, currentPage, productsPerPage);
    updateResultsCount(filteredProducts.length);
    
    // Apply filter button
    document.getElementById('apply-filter').addEventListener('click', function() {
        searchTerm = document.getElementById('search-term').value.toLowerCase();
        categoryFilter = document.getElementById('category-filter').value;
        formFilter = document.getElementById('form-filter').value;
        
        filterProducts();
    });
    
    // View switcher
    document.getElementById('grid-view').addEventListener('click', function() {
        setActiveView('grid');
    });
    
    document.getElementById('list-view').addEventListener('click', function() {
        setActiveView('list');
    });
    
    document.getElementById('card-view').addEventListener('click', function() {
        setActiveView('cards');
    });
    
    // Sort products
    document.getElementById('sort-products').addEventListener('change', function() {
        currentSort = this.value;
        sortProducts();
        displayProducts(filteredProducts, currentPage, productsPerPage);
    });
    
    // Category navigation
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            if (category === 'more') {
                // Show all categories modal
                const categoriesModal = new bootstrap.Modal(document.getElementById('categoriesModal'));
                categoriesModal.show();
            } else {
                currentCategory = category;
                filterProducts();
            }
        });
    });
    
    // Category cards
    document.querySelectorAll('.view-category').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // Update active category button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                }
            });
            
            filterProducts();
            
            // Scroll to products section
            document.querySelector('.product-display-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // All categories modal
    document.getElementById('view-all-categories').addEventListener('click', function(e) {
        e.preventDefault();
        const categoriesModal = new bootstrap.Modal(document.getElementById('categoriesModal'));
        categoriesModal.show();
    });
    
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // Update active category button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                }
            });
            
            // Close modal
            const categoriesModal = bootstrap.Modal.getInstance(document.getElementById('categoriesModal'));
            categoriesModal.hide();
            
            filterProducts();
            
            // Scroll to products section
            document.querySelector('.product-display-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Function to set active view
    function setActiveView(view) {
        currentView = view;
        
        // Update active button
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`${view}-view`).classList.add('active');
        
        // Show selected view
        document.querySelectorAll('.products-grid, .products-list, .products-cards').forEach(el => {
            el.classList.remove('active-view');
        });
        document.getElementById(`products-${view}`).classList.add('active-view');
        
        // Ensure the current view is populated
        displayProducts(filteredProducts, currentPage, productsPerPage);
    }
    
    // Function to filter products
    function filterProducts() {
        filteredProducts = products.filter(product => {
            const matchesSearch = searchTerm === '' || 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm);
                
            const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
            
            const matchesCategoryFilter = categoryFilter === '' || product.category === categoryFilter;
            
            const matchesFormFilter = formFilter === '' || product.form.toLowerCase() === formFilter;
            
            return matchesSearch && matchesCategory && matchesCategoryFilter && matchesFormFilter;
        });
        
        // Reset to first page
        currentPage = 1;
        
        // Sort products
        sortProducts();
        
        // Update display
        displayProducts(filteredProducts, currentPage, productsPerPage);
        updateResultsCount(filteredProducts.length);
    }
    
    // Function to sort products
    function sortProducts() {
        switch (currentSort) {
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'category':
                filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            default:
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
    
    // Function to update results count
    function updateResultsCount(count) {
        document.getElementById('results-count').textContent = count;
    }
    
    // Function to display products
    function displayProducts(products, page, productsPerPage) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = products.slice(startIndex, endIndex);
        
        // Display products based on current view
        switch (currentView) {
            case 'grid':
                displayGridView(paginatedProducts);
                break;
            case 'list':
                displayListView(paginatedProducts);
                break;
            case 'cards':
                displayCardsView(paginatedProducts);
                break;
        }
        
        // Setup pagination
        setupPagination(products, productsPerPage);
    }
    
    // Function to display grid view
    function displayGridView(products) {
        const gridContainer = document.getElementById('products-grid-container');
        gridContainer.innerHTML = '';
        
        if (products.length === 0) {
            gridContainer.innerHTML = '<div class="col-12 text-center"><p>No products found matching your criteria.</p></div>';
            return;
        }
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-6 col-lg-4 col-xl-3 mb-4';
            productCard.innerHTML = `
                <div class="card product-card h-100 border-0 shadow-sm" data-product-id="${product.id}">
                    <div class="product-image">
                        <div class="product-pill ${product.category}-pill">
                            <div class="pill-half"></div>
                            <div class="pill-half"></div>
                        </div>
                    </div>
                    <div class="product-content">
                        <h5 class="product-title">${product.name}</h5>
                        <p class="product-category">${capitalizeFirstLetter(product.category)}</p>
                        <p class="product-description">${product.description.substring(0, 80)}...</p>
                        <button class="btn btn-sm btn-outline-primary view-product" data-product-id="${product.id}">View Details</button>
                    </div>
                </div>
            `;
            gridContainer.appendChild(productCard);
        });
        
        // Add event listeners to product cards
        addProductEventListeners();
    }
    
    // Function to display list view
    function displayListView(products) {
        const listContainer = document.getElementById('products-list-container');
        listContainer.innerHTML = '';
        
        if (products.length === 0) {
            listContainer.innerHTML = '<div class="text-center"><p>No products found matching your criteria.</p></div>';
            return;
        }
        
        products.forEach(product => {
            const listItem = document.createElement('div');
            listItem.className = 'product-list-item mb-4';
            listItem.setAttribute('data-product-id', product.id);
            listItem.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-2">
                        <div class="product-image">
                            <div class="product-pill ${product.category}-pill">
                                <div class="pill-half"></div>
                                <div class="pill-half"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="product-content">
                            <div class="product-header">
                                <div>
                                    <h5 class="product-title">${product.name}</h5>
                                    <span class="product-category">${capitalizeFirstLetter(product.category)}</span>
                                </div>
                                <button class="btn btn-sm btn-outline-primary view-product" data-product-id="${product.id}">View Details</button>
                            </div>
                            <p class="product-description">${product.description}</p>
                            <div class="product-meta">
                                <div class="meta-item">
                                    <i class="fas fa-pills"></i>
                                    <span>${product.form}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-flask"></i>
                                    <span>${product.activeIngredient}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-tag"></i>
                                    <span>${product.therapeuticClass}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listContainer.appendChild(listItem);
        });
        
        // Add event listeners to list items
        addProductEventListeners();
    }
    
    // Function to display cards view
    function displayCardsView(products) {
        const cardsContainer = document.getElementById('products-cards-container');
        cardsContainer.innerHTML = '';
        
        if (products.length === 0) {
            cardsContainer.innerHTML = '<div class="col-12 text-center"><p>No products found matching your criteria.</p></div>';
            return;
        }
        
        products.forEach(product => {
            const cardItem = document.createElement('div');
            cardItem.className = 'col-md-6 col-lg-4 col-xl-3 mb-4';
            cardItem.innerHTML = `
                <div class="product-card" data-product-id="${product.id}">
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="product-image">
                                <div class="product-pill ${product.category}-pill">
                                    <div class="pill-half"></div>
                                    <div class="pill-half"></div>
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="product-title">${product.name}</h5>
                                <p class="product-category">${capitalizeFirstLetter(product.category)}</p>
                                <p>Hover for details</p>
                            </div>
                        </div>
                        <div class="card-back">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <button class="btn btn-sm view-product" data-product-id="${product.id}">View Details</button>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(cardItem);
        });
        
        // Add event listeners to card items
        addProductEventListeners();
    }
    
    // Function to setup pagination
    function setupPagination(products, productsPerPage) {
        const totalPages = Math.ceil(products.length / productsPerPage);
        
        const paginationContainers = [
            document.getElementById('grid-pagination'),
            document.getElementById('list-pagination'),
            document.getElementById('cards-pagination')
        ];
        
        paginationContainers.forEach(container => {
            container.innerHTML = '';
            
            // Previous button
            const prevLi = document.createElement('li');
            prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
            prevLi.innerHTML = '<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
            container.appendChild(prevLi);
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const li = document.createElement('li');
                li.className = `page-item ${i === currentPage ? 'active' : ''}`;
                li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
                container.appendChild(li);
            }
            
            // Next button
            const nextLi = document.createElement('li');
            nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
            nextLi.innerHTML = '<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
            container.appendChild(nextLi);
        });
        
        // Add event listeners to pagination items
        document.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const pageItem = this.parentElement;
                
                // Previous button
                if (this.getAttribute('aria-label') === 'Previous') {
                    if (currentPage > 1) {
                        currentPage--;
                        displayProducts(filteredProducts, currentPage, productsPerPage);
                    }
                    return;
                }
                
                // Next button
                if (this.getAttribute('aria-label') === 'Next') {
                    if (currentPage < totalPages) {
                        currentPage++;
                        displayProducts(filteredProducts, currentPage, productsPerPage);
                    }
                    return;
                }
                
                // Page number
                currentPage = parseInt(this.textContent);
                displayProducts(filteredProducts, currentPage, productsPerPage);
            });
        });
    }
    
    // Function to add event listeners to product elements
    function addProductEventListeners() {
        // View product buttons
        document.querySelectorAll('.view-product').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const productId = this.getAttribute('data-product-id');
                showProductModal(products.find(p => p.id == productId));
            });
        });
        
        // Product cards (grid view)
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                showProductModal(products.find(p => p.id == productId));
            });
        });
        
        // Product list items
        document.querySelectorAll('.product-list-item').forEach(item => {
            item.addEventListener('click', function(e) {
                if (!e.target.classList.contains('view-product')) {
                    const productId = this.getAttribute('data-product-id');
                    showProductModal(products.find(p => p.id == productId));
                }
            });
        });
    }
    
    // Function to show product modal
    function showProductModal(product) {
        // Set modal content
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-category').textContent = capitalizeFirstLetter(product.category);
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-product-ingredient').textContent = product.activeIngredient;
        document.getElementById('modal-product-form').textContent = product.form;
        document.getElementById('modal-product-strength').textContent = product.strength;
        document.getElementById('modal-product-class').textContent = product.therapeuticClass;
        document.getElementById('modal-product-indications').textContent = product.indications;
        
        // Initialize 3D product viewer
        init3DProductViewer(product);
        
        // Show modal
        const productModal = new bootstrap.Modal(document.getElementById('productModal'));
        productModal.show();
    }
    
    // Function to initialize 3D product viewer
    function init3DProductViewer(product) {
        const canvas = document.getElementById('product-3d-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        
        // Create product 3D model based on category
        let productModel;
        
        switch (product.category) {
            case 'antibiotics':
                productModel = createPill(0x4facfe, 0x00f2fe);
                break;
            case 'cardiovascular':
                productModel = createPill(0xff5858, 0xf09819);
                break;
            case 'respiratory':
                productModel = createInhaler(0x13547a, 0x80d0c7);
                break;
            case 'analgesics':
                productModel = createPill(0xff758c, 0xff7eb3);
                break;
            case 'gastrointestinal':
                productModel = createPill(0x667eea, 0x764ba2);
                break;
            case 'dermatological':
                productModel = createTube(0xa18cd1, 0xfbc2eb);
                break;
            case 'neurological':
                productModel = createPill(0x6a11cb, 0x2575fc);
                break;
            case 'ophthalmological':
                productModel = createDropper(0x0ba360, 0x3cba92);
                break;
            default:
                productModel = createPill(0x4facfe, 0x00f2fe);
        }
        
        scene.add(productModel);
        
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        
        // Position camera
        camera.position.z = 5;
        
        // Variables for rotation control
        let rotationSpeed = 0.01;
        let autoRotate = true;
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            if (autoRotate) {
                productModel.rotation.y += rotationSpeed;
            }
            
            renderer.render(scene, camera);
        }
        
        // Handle window resize
        function handleResize() {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        }
        
        window.addEventListener('resize', handleResize);
        
        // Viewer controls
        document.getElementById('rotate-left').addEventListener('click', function() {
            autoRotate = false;
            productModel.rotation.y -= 0.3;
        });
        
        document.getElementById('rotate-right').addEventListener('click', function() {
            autoRotate = false;
            productModel.rotation.y += 0.3;
        });
        
        document.getElementById('zoom-in').addEventListener('click', function() {
            if (camera.position.z > 2) {
                camera.position.z -= 0.5;
            }
        });
        
        document.getElementById('zoom-out').addEventListener('click', function() {
            if (camera.position.z < 10) {
                camera.position.z += 0.5;
            }
        });
        
        // Start animation
        animate();
        
        // Clean up on modal close
        document.getElementById('productModal').addEventListener('hidden.bs.modal', function() {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            scene.clear();
        });
    }
    
    // Helper function to create pill 3D model
    function createPill(color1, color2) {
        const group = new THREE.Group();
        
        // Create pill geometry
        const geometry = new THREE.CylinderGeometry(0.8, 0.8, 2, 32);
        geometry.rotateZ(Math.PI / 2);
        
        // Create materials
        const materials = [
            new THREE.MeshPhongMaterial({ color: color1, shininess: 100 }),
            new THREE.MeshPhongMaterial({ color: color2, shininess: 100 })
        ];
        
        // Create pill halves
        const leftCap = new THREE.Mesh(
            new THREE.SphereGeometry(0.8, 32, 32, 0, Math.PI),
            materials[0]
        );
        leftCap.rotation.y = Math.PI / 2;
        leftCap.position.x = -1;
        
        const rightCap = new THREE.Mesh(
            new THREE.SphereGeometry(0.8, 32, 32, 0, Math.PI),
            materials[0]
        );
        rightCap.rotation.y = -Math.PI / 2;
        rightCap.position.x = 1;
        
        const cylinder = new THREE.Mesh(geometry, materials[0]);
        
        // Add pill parts to group
        group.add(leftCap);
        group.add(cylinder);
        group.add(rightCap);
        
        return group;
    }
    
    // Helper function to create inhaler 3D model
    function createInhaler(color1, color2) {
        const group = new THREE.Group();
        
        // Create inhaler body
        const bodyGeometry = new THREE.BoxGeometry(1.5, 2.5, 1);
        const bodyMaterial = new THREE.MeshPhongMaterial({ color: color1, shininess: 100 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        
        // Create mouthpiece
        const mouthpieceGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 32);
        const mouthpieceMaterial = new THREE.MeshPhongMaterial({ color: color2, shininess: 100 });
        const mouthpiece = new THREE.Mesh(mouthpieceGeometry, mouthpieceMaterial);
        mouthpiece.rotation.z = Math.PI / 2;
        mouthpiece.position.set(0, 1.5, 0);
        
        // Add inhaler parts to group
        group.add(body);
        group.add(mouthpiece);
        
        return group;
    }
    
    // Helper function to create tube 3D model
    function createTube(color1, color2) {
        const group = new THREE.Group();
        
        // Create tube body
        const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2.5, 32);
        const bodyMaterial = new THREE.MeshPhongMaterial({ color: color1, shininess: 100 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        
        // Create cap
        const capGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 32);
        const capMaterial = new THREE.MeshPhongMaterial({ color: color2, shininess: 100 });
        const cap = new THREE.Mesh(capGeometry, capMaterial);
        cap.position.y = 1.4;
        
        // Add tube parts to group
        group.add(body);
        group.add(cap);
        
        return group;
    }
    
    // Helper function to create dropper 3D model
    function createDropper(color1, color2) {
        const group = new THREE.Group();
        
        // Create dropper body
        const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
        const bodyMaterial = new THREE.MeshPhongMaterial({ color: color1, shininess: 100 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        
        // Create dropper tip
        const tipGeometry = new THREE.ConeGeometry(0.2, 0.8, 32);
        const tipMaterial = new THREE.MeshPhongMaterial({ color: color2, shininess: 100 });
        const tip = new THREE.Mesh(tipGeometry, tipMaterial);
        tip.position.y = -1.4;
        
        // Create cap
        const capGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.4, 32);
        const capMaterial = new THREE.MeshPhongMaterial({ color: color2, shininess: 100 });
        const cap = new THREE.Mesh(capGeometry, capMaterial);
        cap.position.y = 1.2;
        
        // Add dropper parts to group
        group.add(body);
        group.add(tip);
        group.add(cap);
        
        return group;
    }
    
    // Function to generate sample product data
    function generateSampleProducts(count) {
        const categories = ['antibiotics', 'cardiovascular', 'respiratory', 'analgesics', 'gastrointestinal', 'dermatological', 'neurological', 'ophthalmological', 'endocrine'];
        const forms = ['Tablet', 'Capsule', 'Injection', 'Syrup', 'Cream', 'Ointment', 'Drops', 'Inhaler', 'Patch'];
        const therapeuticClasses = ['Anti-infective', 'Anti-hypertensive', 'Bronchodilator', 'Analgesic', 'Anti-ulcer', 'Anti-fungal', 'Anti-convulsant', 'Hormone', 'Anti-glaucoma'];
        const strengths = ['5mg', '10mg', '25mg', '50mg', '100mg', '250mg', '500mg', '1g', '2.5%', '5%', '10%'];
        
        const products = [];
        
        for (let i = 1; i <= count; i++) {
            const categoryIndex = Math.floor(Math.random() * categories.length);
            const category = categories[categoryIndex];
            
            // Generate product name based on category
            let prefix;
            switch (category) {
                case 'antibiotics': prefix = 'Amox'; break;
                case 'cardiovascular': prefix = 'Card'; break;
                case 'respiratory': prefix = 'Resp'; break;
                case 'analgesics': prefix = 'Pain'; break;
                case 'gastrointestinal': prefix = 'Gast'; break;
                case 'dermatological': prefix = 'Derm'; break;
                case 'neurological': prefix = 'Neur'; break;
                case 'ophthalmological': prefix = 'Opht'; break;
                case 'endocrine': prefix = 'Endo'; break;
                default: prefix = 'Med';
            }
            
            const suffix = ['zol', 'cin', 'vir', 'lol', 'zide', 'pril', 'sartan', 'statin', 'mab'][Math.floor(Math.random() * 9)];
            const name = `${prefix}${suffix} ${Math.floor(Math.random() * 500)}`;
            const form = forms[categoryIndex];
            const therapeuticClass = therapeuticClasses[categoryIndex];
            const strength = strengths[Math.floor(Math.random() * strengths.length)];
            
            products.push({
                id: i,
                name: name,
                category: category,
                form: form,
                strength: strength,
                description: `${name} is a pharmaceutical product designed for ${getRandomDescription(category)}.`,
                activeIngredient: `${prefix.toLowerCase()}${suffix.toLowerCase()}um ${strength}`,
                therapeuticClass: therapeuticClass,
                indications: `Treatment of ${getRandomIndications(category)}.`
            });
        }
        
        return products;
    }
    
    // Helper function for product descriptions
    function getRandomDescription(category) {
        const descriptions = {
            'antibiotics': 'treating bacterial infections with enhanced efficacy and reduced resistance',
            'cardiovascular': 'managing heart conditions, hypertension, and improving cardiovascular health',
            'respiratory': 'treating respiratory conditions, improving breathing, and reducing inflammation',
            'analgesics': 'effective pain relief with minimal side effects and improved patient comfort',
            'gastrointestinal': 'treating digestive system disorders and improving gastrointestinal health',
            'dermatological': 'treating skin conditions with advanced formulations for better absorption',
            'neurological': 'managing neurological disorders with targeted action and reduced side effects',
            'ophthalmological': 'treating eye conditions with precision delivery and enhanced efficacy',
            'endocrine': 'treating hormonal imbalances with improved bioavailability and stability'
        };
        
        return descriptions[category] || 'various medical conditions with innovative pharmaceutical technology';
    }
    
    // Helper function for product indications
    function getRandomIndications(category) {
        const indications = {
            'antibiotics': 'respiratory infections, urinary tract infections, and skin infections',
            'cardiovascular': 'hypertension, heart failure, and coronary artery disease',
            'respiratory': 'asthma, COPD, and bronchitis',
            'analgesics': 'moderate to severe pain, inflammation, and fever',
            'gastrointestinal': 'peptic ulcers, GERD, and irritable bowel syndrome',
            'dermatological': 'eczema, psoriasis, and fungal infections',
            'neurological': 'epilepsy, Parkinson\'s disease, and neuropathic pain',
            'ophthalmological': 'glaucoma, dry eye syndrome, and eye infections',
            'endocrine': 'diabetes, thyroid disorders, and hormonal deficiencies'
        };
        
        return indications[category] || 'various medical conditions requiring pharmaceutical intervention';
    }
    
    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});