/* ==========================================================================
   AI Software Explore & Learning - Core JavaScript Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialise All Core Modules
    initTheme();
    initNavigation();
    initBookmarks();
    initSearchAndFilters();
    initComparisonTable();
    initLearningHub();
    initProjectsModule();
    initModalHandlers();
    initBackToTop();
    initContactForm();
});

/* --------------------------------------------------------------------------
   1. Data Repositories (Software Tools, Learning Paths, Projects, Comparisons)
   -------------------------------------------------------------------------- */
const AI_TOOLS_DATA = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        category: 'AI Chatbots',
        level: 'Beginner',
        pricing: 'Freemium',
        icon: 'fa-robot',
        desc: 'Advanced conversational AI model capable of answering questions, writing text, debugging code, and generating ideas.',
        features: ['Multimodal Input', 'Web Browsing', 'Code Execution', 'Custom GPTs'],
        useCase: 'General Assistance, Writing, Brainstorming',
        link: 'https://chatgpt.com',
        rating: 4.9
    },
    {
        id: 'claude',
        name: 'Claude 3.5 Sonnet',
        category: 'Generative AI',
        level: 'Intermediate',
        pricing: 'Freemium',
        icon: 'fa-brain',
        desc: 'State-of-the-art AI assistant by Anthropic known for superior reasoning, long context window, and clean coding skills.',
        features: ['200K Context Window', 'Artifacts UI', 'Vision Analysis', 'Precise Tone Control'],
        useCase: 'Complex Analysis, Long-doc Summarization, Coding',
        link: 'https://claude.ai',
        rating: 4.95
    },
    {
        id: 'cursor',
        name: 'Cursor AI',
        category: 'Coding AI',
        level: 'Intermediate',
        pricing: 'Freemium',
        icon: 'fa-code',
        desc: 'AI-first code editor built on VS Code with real-time codebase indexing, automated refactoring, and multi-file editing.',
        features: ['Full Codebase Indexing', 'Cmd+K Code Edit', 'Terminal AI Debugger', 'Custom Rules'],
        useCase: 'Software Engineering, Automated Refactoring',
        link: 'https://cursor.com',
        rating: 4.9
    },
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        category: 'Coding AI',
        level: 'Beginner',
        pricing: 'Paid',
        icon: 'fa-laptop-code',
        desc: 'Your AI pair programmer that provides real-time autocomplete suggestions directly inside your IDE.',
        features: ['Real-time Autocomplete', 'Copilot Chat', 'CLI Integration', 'Pull Request Summaries'],
        useCase: 'Fast Code Completion, Boilerplate Generation',
        link: 'https://github.com/features/copilot',
        rating: 4.7
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        category: 'Image Generation',
        level: 'Intermediate',
        pricing: 'Paid',
        icon: 'fa-palette',
        desc: 'Leading photorealistic image generation model capable of creating artistic visuals from natural language prompts.',
        features: ['Photorealistic Style', 'Inpainting / Vary Region', 'Character Consistency', 'Web Editor'],
        useCase: 'Digital Art, Graphic Design, Concept Visuals',
        link: 'https://midjourney.com',
        rating: 4.85
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        category: 'Image Generation',
        level: 'Advanced',
        pricing: 'Free',
        icon: 'fa-wand-magic-sparkles',
        desc: 'Open-source image generation architecture allowing full control over fine-tuning, ControlNet, and local hardware execution.',
        features: ['Open Source', 'ControlNet Support', 'Local Hardware Run', 'LoRA Training'],
        useCase: 'Custom Fine-Tuned Artwork, Game Assets',
        link: 'https://stability.ai',
        rating: 4.8
    },
    {
        id: 'runway',
        name: 'Runway Gen-3',
        category: 'Video Generation',
        level: 'Intermediate',
        pricing: 'Freemium',
        icon: 'fa-film',
        desc: 'Next-generation generative AI suite specializing in text-to-video, image-to-video, and cinematic motion control.',
        features: ['Text to Video', 'Camera Control', 'Motion Brush', 'Frame Interpolation'],
        useCase: 'Cinematic Visuals, Video Editing, AI Filmmaking',
        link: 'https://runwayml.com',
        rating: 4.75
    },
    {
        id: 'perplexity',
        name: 'Perplexity AI',
        category: 'Education AI',
        level: 'Beginner',
        pricing: 'Freemium',
        icon: 'fa-magnifying-glass',
        desc: 'AI-powered search and answer engine providing cited research sources, follow-up queries, and structured summaries.',
        features: ['Real-Time Web Citations', 'Pro Search Deep Dive', 'File Analysis', 'Collections'],
        useCase: 'Academic Research, Fact-Checking, Quick Study',
        link: 'https://perplexity.ai',
        rating: 4.9
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        category: 'Productivity AI',
        level: 'Beginner',
        pricing: 'Paid',
        icon: 'fa-file-lines',
        desc: 'Integrated workspace AI that helps draft notes, summarize documents, translate text, and automate table properties.',
        features: ['Q&A Across Workspace', 'Auto-Summarization', 'Translation', 'Grammar Correction'],
        useCase: 'Note Taking, Project Management, Knowledge Base',
        link: 'https://notion.so',
        rating: 4.65
    },
    {
        id: 'huggingface',
        name: 'Hugging Face Hub',
        category: 'Data Science',
        level: 'Advanced',
        pricing: 'Free',
        icon: 'fa-cubes',
        desc: 'The GitHub for AI models and datasets, offering thousands of open-source pre-trained models, Spaces, and transformers.',
        features: ['Model Repository', 'Datasets Library', 'Spaces Hosting', 'Inference APIs'],
        useCase: 'Data Science, Machine Learning Research, Model Deployment',
        link: 'https://huggingface.co',
        rating: 4.95
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        category: 'Generative AI',
        level: 'Beginner',
        pricing: 'Freemium',
        icon: 'fa-microphone',
        desc: 'Industry-leading AI voice generator offering emotional text-to-speech, voice cloning, and multilingual dubbing.',
        features: ['Human-like Intonation', 'Voice Cloning', 'AI Dubbing', 'Sound Effects Generator'],
        useCase: 'Podcasts, Audiobooks, Video Voiceovers',
        link: 'https://elevenlabs.io',
        rating: 4.9
    },
    {
        id: 'jasper',
        name: 'Jasper AI',
        category: 'Business AI',
        level: 'Intermediate',
        pricing: 'Paid',
        icon: 'fa-briefcase',
        desc: 'Enterprise marketing and copy assistant designed for content creators, SEO optimization, and brand voice scaling.',
        features: ['Brand Voice Memory', 'SEO Optimization', 'Campaign Builder', 'Multilingual Output'],
        useCase: 'Marketing Copy, Social Media Ads, Blog Writing',
        link: 'https://jasper.ai',
        rating: 4.6
    }
];

const LEARNING_PATHS_DATA = [
    {
        id: 'ai-basics',
        title: 'AI Basics & Concepts',
        difficulty: 'Beginner',
        time: '3 Hours',
        lessonsCount: 6,
        icon: 'fa-lightbulb',
        desc: 'Understand what Artificial Intelligence is, difference between ML, DL, and GenAI, and key historical milestones.',
        lessons: [
            'What is Artificial Intelligence?',
            'Weak AI vs Strong AI vs AGI',
            'Understanding Machine Learning Principles',
            'How Neural Networks Learn',
            'Overview of Generative AI Models',
            'Ethical AI & Future Impact'
        ]
    },
    {
        id: 'prompt-engineering',
        title: 'Prompt Engineering',
        difficulty: 'Beginner',
        time: '4 Hours',
        lessonsCount: 8,
        icon: 'fa-comments',
        desc: 'Master the art of crafting effective prompts for ChatGPT, Claude, and Midjourney to achieve precision outputs.',
        lessons: [
            'Fundamentals of Prompt Structure',
            'Role Prompting & System Instructions',
            'Few-Shot & Zero-Shot Techniques',
            'Chain-of-Thought Reasoning',
            'Preventing AI Hallucinations',
            'Midjourney & Image Prompting Hacks',
            'Advanced Parameter Tuning (Temperature, Top-P)',
            'Building Custom Prompt Templates'
        ]
    },
    {
        id: 'python-for-ai',
        title: 'Python for AI & Data',
        difficulty: 'Beginner',
        time: '8 Hours',
        lessonsCount: 10,
        icon: 'fa-brands fa-python',
        desc: 'Learn essential Python fundamentals, NumPy, Pandas, and environment setup required for modern AI development.',
        lessons: [
            'Python Setup & Jupyter Notebooks',
            'Data Structures & Control Flow',
            'NumPy Vector Operations',
            'Pandas Data Handling & Cleaning',
            'Matplotlib & Seaborn Visualization',
            'Working with REST APIs in Python',
            'Environment Managers (Conda & venv)',
            'Asynchronous Operations & Requests',
            'Building Command Line AI Tools',
            'Mini-Project: Automated Data Summarizer'
        ]
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning Core',
        difficulty: 'Intermediate',
        time: '12 Hours',
        lessonsCount: 10,
        icon: 'fa-chart-line',
        desc: 'Explore Supervised & Unsupervised Learning algorithms, model training, Scikit-Learn, and evaluation metrics.',
        lessons: [
            'Linear & Logistic Regression',
            'Decision Trees & Random Forests',
            'Support Vector Machines (SVM)',
            'K-Means Clustering',
            'Model Evaluation & Confusion Matrix',
            'Overfitting, Underfitting & Cross-Validation',
            'Feature Engineering & Scaling',
            'Hyperparameter Tuning with GridSearch',
            'Scikit-Learn Pipeline Architecture',
            'End-to-End ML Prediction Project'
        ]
    },
    {
        id: 'generative-ai',
        title: 'Generative AI & LLMs',
        difficulty: 'Intermediate',
        time: '10 Hours',
        lessonsCount: 8,
        icon: 'fa-wand-magic-sparkles',
        desc: 'Dive deep into Transformers, Embeddings, Vector Databases, LangChain, RAG (Retrieval-Augmented Generation), and API integration.',
        lessons: [
            'The Transformer Architecture Explained',
            'Tokenization & Vector Embeddings',
            'Working with OpenAI & Anthropic APIs',
            'Vector Databases (ChromaDB, Pinecone)',
            'Retrieval-Augmented Generation (RAG)',
            'Building Agents with LangChain & LlamaIndex',
            'Fine-Tuning LLMs with LoRA',
            'Deploying GenAI Apps with Streamlit'
        ]
    },
    {
        id: 'computer-vision',
        title: 'Computer Vision Basics',
        difficulty: 'Advanced',
        time: '10 Hours',
        lessonsCount: 7,
        icon: 'fa-eye',
        desc: 'Learn image processing with OpenCV, Convolutional Neural Networks (CNNs), and object detection with YOLO.',
        lessons: [
            'Digital Image Fundamentals & OpenCV',
            'Filtering, Thresholding & Edge Detection',
            'Convolutional Neural Networks (CNNs)',
            'Object Detection with YOLO',
            'Image Segmentation Techniques',
            'Face & Pose Recognition',
            'Deploying Computer Vision Models'
        ]
    }
];

const PROJECTS_DATA = [
    {
        id: 'ai-chatbot',
        title: 'Custom AI Chatbot',
        desc: 'Build a full-featured conversational AI chatbot in Python with conversation memory and dark-mode web UI.',
        difficulty: 'Beginner',
        tech: ['Python', 'OpenAI API', 'Streamlit', 'HTML/CSS'],
        steps: [
            '1. Install dependencies (`pip install openai streamlit`)',
            '2. Set up API key secret handling',
            '3. Maintain session state for user conversation history',
            '4. Render chat UI using Streamlit speech bubbles',
            '5. Add model temperature parameter sliders'
        ]
    },
    {
        id: 'image-generator',
        title: 'AI Image Generator App',
        desc: 'Create an interactive web application that transforms user prompts into visual artwork using DALL-E 3 API.',
        difficulty: 'Beginner',
        tech: ['JavaScript', 'HTML5', 'DALL-E 3 API', 'CSS Glassmorphism'],
        steps: [
            '1. Design modern prompt input UI with resolution selectors',
            '2. Create fetch request to DALL-E 3 endpoint',
            '3. Display image skeleton loading state during generation',
            '4. Add one-click HD image download button'
        ]
    },
    {
        id: 'study-assistant',
        title: 'Student Study Assistant (RAG)',
        desc: 'Upload PDF textbooks and ask instant questions with accurate source page citations using local vector database.',
        difficulty: 'Intermediate',
        tech: ['Python', 'LangChain', 'ChromaDB', 'PyPDF'],
        steps: [
            '1. Extract raw text from uploaded PDF files',
            '2. Split text into manageable chunks using RecursiveCharacterTextSplitter',
            '3. Generate embeddings and store in Chroma vector store',
            '4. Implement question-answering chain with source page references'
        ]
    },
    {
        id: 'resume-analyzer',
        title: 'AI Resume Analyzer & ATS Scorer',
        desc: 'Compare resumes against job descriptions to provide automated ATS compatibility scores and improvement tips.',
        difficulty: 'Intermediate',
        tech: ['Python', 'SpaCy NLP', 'Scikit-Learn', 'Streamlit'],
        steps: [
            '1. Parse PDF resumes and job descriptions',
            '2. Extract key technical skills using NLP entity matching',
            '3. Compute cosine similarity score between resume and job spec',
            '4. Generate missing keyword alerts and formatting suggestions'
        ]
    }
];

/* --------------------------------------------------------------------------
   2. Theme Switcher (Dark / Light Persistence)
   -------------------------------------------------------------------------- */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('ai_hub_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeBtn, savedTheme);
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('ai_hub_theme', newTheme);
        updateThemeIcon(themeBtn, newTheme);
        showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
    });
}

function updateThemeIcon(btn, theme) {
    btn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
}

/* --------------------------------------------------------------------------
   3. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            toggleBtn.innerHTML = navMenu.classList.contains('active')
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });
    }
    
    // Highlight Active Page Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });
}

/* --------------------------------------------------------------------------
   4. Bookmarks Management
   -------------------------------------------------------------------------- */
function getBookmarks() {
    return JSON.parse(localStorage.getItem('ai_hub_bookmarks') || '[]');
}

function initBookmarks() {
    document.addEventListener('click', (e) => {
        const bookmarkBtn = e.target.closest('.bookmark-btn');
        if (!bookmarkBtn) return;
        
        const toolId = bookmarkBtn.dataset.id;
        let bookmarks = getBookmarks();
        
        if (bookmarks.includes(toolId)) {
            bookmarks = bookmarks.filter(id => id !== toolId);
            bookmarkBtn.classList.remove('active');
            bookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
            showToast('Removed from favorites', 'info');
        } else {
            bookmarks.push(toolId);
            bookmarkBtn.classList.add('active');
            bookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            showToast('Saved to favorites!', 'success');
        }
        
        localStorage.setItem('ai_hub_bookmarks', JSON.stringify(bookmarks));
    });
}

/* --------------------------------------------------------------------------
   5. Search & Filter Engine (For Explorer Page & Homepage)
   -------------------------------------------------------------------------- */
function initSearchAndFilters() {
    const searchInput = document.getElementById('tool-search');
    const chipContainer = document.getElementById('category-chips');
    const gridContainer = document.getElementById('tools-grid');
    
    if (!gridContainer) return; // Not on tools/explorer page
    
    let activeCategory = 'All';
    let searchQuery = '';

    function renderTools() {
        const bookmarks = getBookmarks();
        gridContainer.innerHTML = '';
        
        const filtered = AI_TOOLS_DATA.filter(tool => {
            const matchesCat = (activeCategory === 'All') || 
                               (activeCategory === 'Favorites' && bookmarks.includes(tool.id)) ||
                               (tool.category === activeCategory);
            const matchesQuery = tool.name.toLowerCase().includes(searchQuery) ||
                                 tool.desc.toLowerCase().includes(searchQuery) ||
                                 tool.category.toLowerCase().includes(searchQuery);
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            gridContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No AI Tools Found</h3>
                    <p style="color: var(--text-secondary);">Try adjusting your search query or category filter.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(tool => {
            const isBookmarked = bookmarks.includes(tool.id);
            const cardHtml = `
                <div class="tool-card">
                    <div class="tool-card-header">
                        <div class="tool-icon-wrapper">
                            <i class="fa-solid ${tool.icon}"></i>
                        </div>
                        <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${tool.id}" title="Favorite Tool">
                            <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                        </button>
                    </div>
                    <span class="tool-category">${tool.category}</span>
                    <h3 class="tool-name">${tool.name}</h3>
                    <p class="tool-desc">${tool.desc}</p>
                    <div class="tool-features-list">
                        ${tool.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
                    </div>
                    <div class="tool-card-footer">
                        <div style="display: flex; gap: 0.5rem;">
                            <span class="badge badge-${tool.level.toLowerCase()}">${tool.level}</span>
                            <span class="badge badge-${tool.pricing.toLowerCase()}">${tool.pricing}</span>
                        </div>
                        <button class="btn btn-outline view-tool-btn" data-id="${tool.id}" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;">
                            Learn More
                        </button>
                    </div>
                </div>
            `;
            gridContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderTools();
        });
    }

    // Category Chips Listener
    if (chipContainer) {
        chipContainer.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeCategory = chip.dataset.category;
            renderTools();
        });
    }

    // Initial render
    renderTools();
}

/* --------------------------------------------------------------------------
   6. Comparison Table Engine
   -------------------------------------------------------------------------- */
function initComparisonTable() {
    const tableBody = document.getElementById('comparison-tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    AI_TOOLS_DATA.slice(0, 8).forEach(tool => {
        const rowHtml = `
            <tr>
                <td style="font-weight: 700; display: flex; align-items: center; gap: 0.75rem;">
                    <i class="fa-solid ${tool.icon}" style="color: var(--accent-cyan);"></i>
                    ${tool.name}
                </td>
                <td><span class="badge badge-freemium">${tool.category}</span></td>
                <td>${tool.useCase}</td>
                <td><span class="badge badge-${tool.level.toLowerCase()}">${tool.level}</span></td>
                <td><span class="badge badge-${tool.pricing.toLowerCase()}">${tool.pricing}</span></td>
                <td><span style="color: var(--accent-amber); font-weight: 600;">★ ${tool.rating}</span></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', rowHtml);
    });
}

/* --------------------------------------------------------------------------
   7. Learning Hub Module Engine
   -------------------------------------------------------------------------- */
function initLearningHub() {
    const hubGrid = document.getElementById('learning-grid');
    if (!hubGrid) return;

    const userProgress = JSON.parse(localStorage.getItem('ai_learning_progress') || '{}');

    hubGrid.innerHTML = '';
    LEARNING_PATHS_DATA.forEach(path => {
        const completedLessons = userProgress[path.id] || 0;
        const percent = Math.round((completedLessons / path.lessonsCount) * 100);

        const cardHtml = `
            <div class="learning-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                    <div class="tool-icon-wrapper">
                        <i class="fa-solid ${path.icon}"></i>
                    </div>
                    <span class="badge badge-${path.difficulty.toLowerCase()}">${path.difficulty}</span>
                </div>
                <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">${path.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem; flex-grow: 1;">${path.desc}</p>
                
                <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; gap: 1rem; margin-bottom: 0.5rem;">
                    <span><i class="fa-regular fa-clock"></i> ${path.time}</span>
                    <span><i class="fa-solid fa-book-open"></i> ${path.lessonsCount} Lessons</span>
                </div>

                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${percent}%;"></div>
                </div>
                <div class="progress-text">
                    <span>Progress</span>
                    <span>${percent}%</span>
                </div>

                <button class="btn btn-primary start-path-btn" data-id="${path.id}" style="margin-top: 1.25rem; width: 100%;">
                    ${percent > 0 ? (percent === 100 ? 'Review Module' : 'Continue Learning') : 'Start Learning'}
                </button>
            </div>
        `;
        hubGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

/* --------------------------------------------------------------------------
   8. Projects Module Engine
   -------------------------------------------------------------------------- */
function initProjectsModule() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    PROJECTS_DATA.forEach(project => {
        const cardHtml = `
            <div class="project-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 style="font-size: 1.4rem;">${project.title}</h3>
                    <span class="badge badge-${project.difficulty.toLowerCase()}">${project.difficulty}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.95rem;">${project.desc}</p>
                <div class="tech-stack">
                    ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                <button class="btn btn-secondary view-project-btn" data-id="${project.id}" style="margin-top: 0.5rem;">
                    Step-by-Step Guide <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        projectsGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

/* --------------------------------------------------------------------------
   9. Modal Dialog Viewer
   -------------------------------------------------------------------------- */
function initModalHandlers() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    if (!modalOverlay || !modalContent) return;

    function openModal(htmlContent) {
        modalContent.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Delegated Click Handlers
    document.addEventListener('click', (e) => {
        // Tool Details Modal
        const toolBtn = e.target.closest('.view-tool-btn');
        if (toolBtn) {
            const tool = AI_TOOLS_DATA.find(t => t.id === toolBtn.dataset.id);
            if (!tool) return;

            const html = `
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div class="tool-icon-wrapper" style="margin: 0 auto 1rem auto; width: 64px; height: 64px; font-size: 2rem;">
                        <i class="fa-solid ${tool.icon}"></i>
                    </div>
                    <h2>${tool.name}</h2>
                    <span class="tool-category">${tool.category}</span>
                </div>
                <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${tool.desc}</p>
                <h4 style="margin-bottom: 0.75rem;">Key Features</h4>
                <ul style="margin-bottom: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                    ${tool.features.map(f => `<li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> ${f}</li>`).join('')}
                </ul>
                <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                    <strong>Best Use Case:</strong> ${tool.useCase}
                </div>
                <a href="${tool.link}" target="_blank" class="btn btn-primary" style="width: 100%;">
                    Visit Official Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            `;
            openModal(html);
        }

        // Learning Path Lessons Modal
        const pathBtn = e.target.closest('.start-path-btn');
        if (pathBtn) {
            const path = LEARNING_PATHS_DATA.find(p => p.id === pathBtn.dataset.id);
            if (!path) return;

            const userProgress = JSON.parse(localStorage.getItem('ai_learning_progress') || '{}');
            const completedCount = userProgress[path.id] || 0;

            const html = `
                <h2>${path.title}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${path.desc}</p>
                <h4 style="margin-bottom: 1rem;">Curriculum Lessons (${completedCount}/${path.lessonsCount} Completed)</h4>
                <div class="lessons-list" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
                    ${path.lessons.map((lesson, idx) => `
                        <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-card); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                            <span><strong>Lesson ${idx + 1}:</strong> ${lesson}</span>
                            <button class="btn btn-outline complete-lesson-btn" data-path="${path.id}" data-idx="${idx}" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">
                                ${idx < completedCount ? '<i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i> Done' : 'Mark Complete'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
            openModal(html);
        }

        // Complete Lesson Handler inside Modal
        const lessonBtn = e.target.closest('.complete-lesson-btn');
        if (lessonBtn) {
            const pathId = lessonBtn.dataset.path;
            const userProgress = JSON.parse(localStorage.getItem('ai_learning_progress') || '{}');
            userProgress[pathId] = (userProgress[pathId] || 0) + 1;
            localStorage.setItem('ai_learning_progress', JSON.stringify(userProgress));
            showToast('Lesson progress updated!', 'success');
            closeModal();
            initLearningHub(); // Refresh UI
        }

        // Project Guide Modal
        const projectBtn = e.target.closest('.view-project-btn');
        if (projectBtn) {
            const project = PROJECTS_DATA.find(p => p.id === projectBtn.dataset.id);
            if (!project) return;

            const html = `
                <h2>${project.title}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${project.desc}</p>
                <h4 style="margin-bottom: 1rem;">Step-by-Step Execution Blueprint</h4>
                <ol style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; color: var(--text-secondary);">
                    ${project.steps.map(s => `<li style="background: rgba(255,255,255,0.03); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">${s}</li>`).join('')}
                </ol>
                <button class="btn btn-primary" onclick="showToast('Project starter blueprint copied!', 'success')" style="width: 100%;">
                    Copy Starter Template
                </button>
            `;
            openModal(html);
        }
    });
}

/* --------------------------------------------------------------------------
   10. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --------------------------------------------------------------------------
   11. Contact Form & Toast Notifications
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you! Your message has been sent successfully.', 'success');
        form.reset();
    });
}

function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}" style="color: var(--accent-cyan);"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
