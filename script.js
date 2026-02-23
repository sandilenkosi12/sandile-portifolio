// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar .container')) {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        
        if (email) {
            alert(`Thank you for subscribing! Updates will be sent to ${email}`);
            newsletterForm.reset();
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-level');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target;
            skillLevel.style.width = skillLevel.style.width;
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

// Random floating elements movement
const floatingElements = document.querySelectorAll('.floating-element');

function randomFloat() {
    floatingElements.forEach(element => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

// Update floating elements position every 5 seconds
setInterval(randomFloat, 5000);
function downloadResume() {
    // Try multiple possible paths
    const possiblePaths = [
        'assets/Sandile_Nkosi_Resume.pdf',
        './assets/Sandile_Nkosi_Resume.pdf',
        '/assets/Sandile_Nkosi_Resume.pdf',
        'Sandile_Nkosi_Resume.pdf'
    ];
    
    let downloaded = false;
    
    for (let path of possiblePaths) {
        try {
            const link = document.createElement('a');
            link.href = path;
            link.download = 'Sandile_Nkosi_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            downloaded = true;
            break;
        } catch (e) {
            continue;
        }
    }
    
    if (!downloaded) {
        alert('Please make sure your resume file is in the assets folder as "Sandile_Nkosi_Resume.pdf"');
    }
    
    return false;
}
