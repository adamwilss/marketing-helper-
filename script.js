// Data Configuration for Events
// This allows easy updating of bands and dates without touching HTML
const eventsData = [
    {
        id: 1,
        date: "2026-04-10T19:30:00",
        displayDate: "April 10th",
        month: "April",
        day: "10",
        year: "2026",
        time: "7:30 PM",
        bandName: "The Midnight Howl",
        description: "An explosive night of classic rock covers and high-energy anthems from returning favorites.",
        ticketLink: "https://www.skiddle.com",
        soldOut: false
    },
    {
        id: 2,
        date: "2026-05-15T19:30:00",
        displayDate: "May 15th",
        month: "May",
        day: "15",
        year: "2026",
        time: "7:30 PM",
        bandName: "Velvet Thunder",
        description: "Bringing the best of 80s and 90s rock stadium hits straight to The Bowdon Rooms.",
        ticketLink: "https://www.skiddle.com",
        soldOut: false
    },
    {
        id: 3,
        date: "2026-06-20T19:30:00",
        displayDate: "June 20th",
        month: "June",
        day: "20",
        year: "2026",
        time: "7:30 PM",
        bandName: "Electric Rebels",
        description: "A tribute to the legends of indie rock. Expect a night of pure nostalgia and world-class drinks.",
        ticketLink: "https://www.skiddle.com",
        soldOut: true
    }
];

// Initialize DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    renderEvents();
    initCountdown();
    initParticles();
});

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Scroll Reveal Animations
function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
}

// Render Events to DOM
function renderEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;

    container.innerHTML = '';

    eventsData.forEach((event, index) => {
        const delay = (index + 1) * 0.2; // Staggered animation

        const buttonHtml = event.soldOut
            ? `<button class="btn btn-outline-gold" disabled style="opacity:0.5; cursor:not-allowed;">SOLD OUT</button>`
            : `<a href="${event.ticketLink}" target="_blank" class="btn btn-gold">Get Tickets</a>`;

        const html = `
            <div class="event-row scroll-reveal" style="transition-delay: ${delay}s">
                <div class="event-date-col">
                    <span class="event-month">${event.month}</span>
                    <span class="event-day">${event.day}</span>
                    <span class="event-time">${event.time}</span>
                </div>
                <div class="event-info-col">
                    <h3>${event.bandName}</h3>
                    <p>${event.description}</p>
                </div>
                <div class="event-action-col">
                    ${buttonHtml}
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', html);
    });
}

// Countdown Timer Logic
function initCountdown() {
    // Find next upcoming non-sold-out event
    let targetEvent = eventsData.find(e => !e.soldOut && new Date(e.date).getTime() > new Date().getTime());

    // Fallback if none found
    if (!targetEvent) targetEvent = eventsData[0];

    const countDownDate = new Date(targetEvent.date).getTime();

    // Update labels in Hero
    const heroDate = document.getElementById('next-event-date');
    const heroTime = document.getElementById('next-event-time');

    if (heroDate) heroDate.textContent = `${targetEvent.month.toUpperCase()} ${targetEvent.day}TH • ${targetEvent.year}`;
    if (heroTime) heroTime.textContent = targetEvent.time;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minsEl.textContent = "00";
            secsEl.textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minsEl.textContent = minutes.toString().padStart(2, '0');
        secsEl.textContent = seconds.toString().padStart(2, '0');
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Hero Particles Background
function initParticles() {
    const particleContainer = document.getElementById('hero-particles');
    if (!particleContainer) return;

    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 3px and 12px
        const size = Math.random() * 9 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random start position
        particle.style.left = `${Math.random() * 100}%`;

        // Random animation duration and delay for organic feel
        particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        particleContainer.appendChild(particle);
    }
}
