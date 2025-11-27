// Skills Data
const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'Java', icon: 'fab fa-java' }
        ]
    },
    {
        category: 'Frameworks & Libraries',
        skills: [
            { name: 'React', icon: 'fab fa-react' },
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'Sass', icon: 'fab fa-sass' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
            { name: 'Express', icon: 'fas fa-server' }
        ]
    },
    {
        category: 'Salesforce',
        skills: [
            { name: 'Salesforce', icon: 'fab fa-salesforce' },
            { name: 'Apex', icon: 'fas fa-code' },
            { name: 'Lightning', icon: 'fas fa-bolt' },
            { name: 'Visualforce', icon: 'fas fa-eye' },
            { name: 'SOQL', icon: 'fas fa-database' }
        ]
    },
    {
        category: 'Tools & Technologies',
        skills: [
            { name: 'Git', icon: 'fab fa-git-alt' },
            { name: 'GitHub', icon: 'fab fa-github' },
            { name: 'Docker', icon: 'fab fa-docker' },
            { name: 'AWS', icon: 'fab fa-aws' },
            { name: 'Firebase', icon: 'fas fa-fire' }
        ]
    }
];

// Current category index
let currentCategory = 0;

// Get DOM elements
const carouselTrack = document.getElementById('carouselTrack');
const categoryTitle = document.getElementById('categoryTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Display skills for a specific category
function displaySkills(categoryIndex) {
    const category = skillsData[categoryIndex];
    categoryTitle.textContent = category.category;
    
    carouselTrack.innerHTML = category.skills.map(skill => `
        <div class="skill-item">
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');
}

// Previous button event listener
prevBtn.addEventListener('click', () => {
    currentCategory = (currentCategory - 1 + skillsData.length) % skillsData.length;
    displaySkills(currentCategory);
});

// Next button event listener
nextBtn.addEventListener('click', () => {
    currentCategory = (currentCategory + 1) % skillsData.length;
    displaySkills(currentCategory);
});

// Initialize skills carousel
displaySkills(currentCategory);

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

// Theme toggle click event
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
});

// Update theme icon
function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});