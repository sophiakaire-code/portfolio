// ===== ANIMATION AU SCROLL =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, {
    threshold: 0.1
});

sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===== ANIMATION PHOTO AU CLIC =====
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    profileImg.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        this.style.borderColor = '#f472b6';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.borderColor = 'rgba(255,255,255,0.2)';
        }, 400);
    });
}

// ===== NAVIGATION FLUIDE =====
document.querySelectorAll('nav a, .footer-section a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== EFFET SUR LES COMPÉTENCES =====
const skills = document.querySelectorAll('.skill');
skills.forEach((skill) => {
    skill.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(167, 139, 250, 0.5)';
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    skill.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(167, 139, 250, 0.2)';
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== MESSAGE CONSOLE =====
console.log('🚀 Portfolio de Sophiatou Kaire - Développeuse Full Stack');
console.log('🔗 Sénégal Tech : https://sophiakaire-code.github.io/senegal-tech/');
// ===== GESTION DU FORMULAIRE DE CONTACT =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !message) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '⚠️ Veuillez remplir tous les champs obligatoires.';
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '⚠️ Veuillez entrer une adresse email valide.';
            return;
        }
        
        // Simulation d'envoi (à remplacer par un vrai envoi)
        formMessage.className = 'form-message';
        formMessage.textContent = '⏳ Envoi en cours...';
        formMessage.style.display = 'block';
        formMessage.style.color = '#c4b5fd';
        formMessage.style.background = 'rgba(167, 139, 250, 0.1)';
        formMessage.style.border = '1px solid rgba(167, 139, 250, 0.2)';
        
        // Simuler un délai d'envoi
        setTimeout(() => {
            formMessage.className = 'form-message success';
            formMessage.textContent = '✅ Merci ! Votre message a été envoyé avec succès. Je vous répondrai rapidement.';
            contactForm.reset();
            
            // Réinitialiser le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    });
}