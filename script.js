// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// =========================
// CARD ANIMATIONS
// =========================

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show-card');
            }

        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    card.classList.add('hidden-card');
    observer.observe(card);
});

// =========================
// DONATE BUTTON DEMO
// =========================

const donateButton = document.querySelector('.donate-btn');

if (donateButton) {
    donateButton.addEventListener('click', () => {
        alert(
            "Thank you for supporting our ministry. Donation functionality will be added soon."
        );
    });
}