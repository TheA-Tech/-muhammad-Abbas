/* =========================================================
   MUHAMMAD ABBAS PORTFOLIO
   PREMIUM DARK NAVY + ELECTRIC BLUE DESIGN
========================================================= */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
    --bg: #050816;
    --bg-soft: #081126;
    --card: rgba(12, 24, 48, 0.72);
    --card-solid: #0d1930;

    --primary: #2f81ff;
    --primary-light: #42b8ff;
    --cyan: #00e5ff;

    --text: #f4f8ff;
    --text-soft: #aab7cc;
    --text-muted: #71809a;

    --border: rgba(73, 151, 255, 0.18);
    --border-hover: rgba(66, 184, 255, 0.5);

    --shadow:
        0 20px 60px rgba(0, 0, 0, 0.35);

    --glow:
        0 0 35px rgba(47, 129, 255, 0.18);

    --radius: 20px;
    --container: 1180px;
}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: "Inter", sans-serif;
    background:
        radial-gradient(
            circle at 15% 10%,
            rgba(47, 129, 255, 0.13),
            transparent 28%
        ),
        radial-gradient(
            circle at 85% 25%,
            rgba(0, 229, 255, 0.08),
            transparent 25%
        ),
        var(--bg);

    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;

    background-image:
        linear-gradient(
            rgba(66, 184, 255, 0.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(66, 184, 255, 0.025) 1px,
            transparent 1px
        );

    background-size: 55px 55px;

    pointer-events: none;
    z-index: -2;
}

body::after {
    content: "";
    position: fixed;
    width: 500px;
    height: 500px;

    right: -200px;
    bottom: -220px;

    background: rgba(47, 129, 255, 0.08);
    filter: blur(120px);

    border-radius: 50%;

    pointer-events: none;
    z-index: -1;
}


/* =========================================================
   GENERAL
========================================================= */

a {
    color: inherit;
    text-decoration: none;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

img {
    max-width: 100%;
    display: block;
}

section {
    position: relative;
}

.container {
    width: min(var(--container), calc(100% - 40px));
    margin: auto;
}

.section {
    padding: 110px 0;
}

.section-heading {
    max-width: 720px;
    margin-bottom: 55px;
}

.section-heading .eyebrow {
    display: inline-block;

    color: var(--cyan);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;

    margin-bottom: 12px;
}

.section-heading h2 {
    font-size: clamp(34px, 5vw, 58px);
    line-height: 1.05;
    letter-spacing: -2px;
}

.section-heading p {
    color: var(--text-soft);
    margin-top: 18px;
    max-width: 620px;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 1000;

    background: rgba(5, 8, 22, 0.72);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar .container {
    min-height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border-radius: 13px;

    font-size: 15px;
    font-weight: 800;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            var(--cyan)
        );

    color: white;

    box-shadow:
        0 0 25px rgba(47, 129, 255, 0.35);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-links a {
    color: var(--text-soft);

    font-size: 13px;
    font-weight: 600;

    transition:
        color 0.3s ease,
        transform 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
    color: white;
}

.nav-links a:hover {
    transform: translateY(-2px);
}

.nav-cta {
    padding: 11px 18px;

    border-radius: 10px;

    background: rgba(47, 129, 255, 0.12);

    border: 1px solid var(--border);

    color: white !important;
}

.nav-cta:hover {
    background: rgba(47, 129, 255, 0.22);
    border-color: var(--border-hover);
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: 100vh;

    padding-top: 150px;
    padding-bottom: 100px;

    display: flex;
    align-items: center;

    position: relative;
    overflow: hidden;
}

.hero::before {
    content: "";

    position: absolute;

    width: 650px;
    height: 650px;

    left: -300px;
    top: 80px;

    background:
        radial-gradient(
            circle,
            rgba(47, 129, 255, 0.2),
            transparent 65%
        );

    filter: blur(20px);

    pointer-events: none;
}

.hero::after {
    content: "";

    position: absolute;

    width: 550px;
    height: 550px;

    right: -250px;
    top: 100px;

    background:
        radial-gradient(
            circle,
            rgba(0, 229, 255, 0.12),
            transparent 65%
        );

    filter: blur(25px);

    pointer-events: none;
}

.hero .container {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 1.05fr 0.95fr;

    align-items: center;
    gap: 70px;
}

.hero-content {
    max-width: 700px;
}

.hero-content .eyebrow {
    color: var(--cyan);

    font-size: 13px;
    font-weight: 800;

    letter-spacing: 4px;

    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(54px, 8vw, 94px);

    line-height: 0.98;
    letter-spacing: -5px;

    margin-bottom: 22px;
}

.hero h1 span {
    display: block;

    background:
        linear-gradient(
            100deg,
            #ffffff 0%,
            var(--primary-light) 45%,
            var(--cyan) 100%
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.hero-subtitle {
    color: #d8e5fa;

    font-size: clamp(17px, 2vw, 22px);
    font-weight: 600;

    margin-bottom: 18px;
}

.hero-description {
    max-width: 650px;

    color: var(--text-soft);

    font-size: 16px;
}

.hero-buttons {
    display: flex;
    gap: 14px;

    margin-top: 34px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 50px;

    padding: 0 23px;

    border-radius: 12px;

    font-size: 13px;
    font-weight: 700;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease,
        background 0.3s ease;
}

.btn-primary {
    color: white;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            #1765d8
        );

    box-shadow:
        0 10px 35px rgba(47, 129, 255, 0.25);
}

.btn-primary:hover {
    transform: translateY(-3px);

    box-shadow:
        0 16px 45px rgba(47, 129, 255, 0.35);
}

.btn-secondary {
    color: #eaf3ff;

    background: rgba(255, 255, 255, 0.035);

    border: 1px solid var(--border);
}

.btn-secondary:hover {
    transform: translateY(-3px);

    border-color: var(--border-hover);

    background: rgba(47, 129, 255, 0.08);
}


/* =========================================================
   HERO VISUAL
========================================================= */

.hero-visual {
    position: relative;

    min-height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-circle {
    position: absolute;

    border-radius: 50%;

    pointer-events: none;
}

.hero-circle.circle-one {
    width: 380px;
    height: 380px;

    border: 1px solid rgba(47, 129, 255, 0.15);

    box-shadow:
        inset 0 0 70px rgba(47, 129, 255, 0.06),
        0 0 70px rgba(47, 129, 255, 0.08);

    animation: orbitOne 8s ease-in-out infinite;
}

.hero-circle.circle-two {
    width: 270px;
    height: 270px;

    border: 1px dashed rgba(0, 229, 255, 0.2);

    animation: orbitTwo 10s ease-in-out infinite;
}

@keyframes orbitOne {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-16px) rotate(6deg);
    }
}

@keyframes orbitTwo {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(18px) rotate(-8deg);
    }
}


/* =========================================================
   PROFILE CARD
========================================================= */

.main-card {
    position: relative;
    z-index: 5;

    width: min(420px, 90%);

    padding: 30px;

    border-radius: 26px;

    background:
        linear-gradient(
            145deg,
            rgba(20, 39, 74, 0.92),
            rgba(7, 16, 34, 0.88)
        );

    border: 1px solid rgba(86, 165, 255, 0.25);

    box-shadow:
        0 35px 90px rgba(0, 0, 0, 0.45),
        0 0 50px rgba(47, 129, 255, 0.12);

    backdrop-filter: blur(20px);

    animation: floatingCard 5s ease-in-out infinite;
}

@keyframes floatingCard {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.main-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 15%;

    width: 70%;
    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            var(--cyan),
            transparent
        );

    box-shadow:
        0 0 15px var(--cyan);
}

.profile-avatar {
    width: 100px;
    height: 100px;

    margin-bottom: 22px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            rgba(47, 129, 255, 0.25),
            rgba(0, 229, 255, 0.15)
        );

    border: 1px solid rgba(66, 184, 255, 0.35);

    font-size: 30px;
    font-weight: 800;

    box-shadow:
        0 0 35px rgba(47, 129, 255, 0.2);
}

.main-card h3 {
    font-size: 27px;
    margin-bottom: 5px;
}

.main-card > p {
    color: var(--cyan);
    font-size: 13px;
    font-weight: 600;
}

.card-stats {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10px;

    margin-top: 28px;
}

.card-stat {
    padding: 15px 10px;

    text-align: center;

    border-radius: 14px;

    background: rgba(255, 255, 255, 0.035);

    border: 1px solid rgba(255, 255, 255, 0.06);
}

.card-stat strong {
    display: block;

    font-size: 20px;

    color: white;
}

.card-stat span {
    color: var(--text-muted);

    font-size: 10px;
}

.floating-card {
    position: absolute;
    z-index: 10;

    padding: 13px 17px;

    border-radius: 12px;

    background: rgba(9, 20, 40, 0.85);

    border: 1px solid var(--border);

    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.3);

    backdrop-filter: blur(12px);

    font-size: 12px;
    font-weight: 700;
}

.floating-card.excel {
    top: 50px;
    right: 10px;

    color: #6ee7b7;

    animation: floatSmall 4s ease-in-out infinite;
}

.floating-card.erp {
    bottom: 60px;
    left: 5px;

    color: var(--cyan);

    animation: floatSmall 4.8s ease-in-out infinite;
}

@keyframes floatSmall {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-9px);
    }
}


/* =========================================================
   ABOUT
========================================================= */

.about-grid {
    display: grid;

    grid-template-columns:
        1.1fr 0.9fr;

    gap: 60px;

    align-items: center;
}

.about-content p {
    color: var(--text-soft);

    margin-bottom: 18px;

    font-size: 16px;
}

.about-content strong {
    color: white;
}

.stats-grid {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}

.stat-box {
    padding: 28px;

    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            rgba(20, 39, 74, 0.75),
            rgba(8, 17, 36, 0.7)
        );

    border: 1px solid var(--border);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.stat-box:hover {
    transform: translateY(-6px);

    border-color: var(--border-hover);

    box-shadow: var(--glow);
}

.stat-box strong {
    display: block;

    font-size: 36px;

    background:
        linear-gradient(
            135deg,
            white,
            var(--cyan)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.stat-box span {
    color: var(--text-muted);

    font-size: 12px;
}


/* =========================================================
   SKILLS
========================================================= */

.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 16px;
}

.skill-card {
    position: relative;

    padding: 27px 22px;

    min-height: 165px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: var(--radius);

    background:
        linear-gradient(
            145deg,
            rgba(16, 33, 64, 0.8),
            rgba(7, 16, 33, 0.75)
        );

    border: 1px solid var(--border);

    overflow: hidden;

    transition:
        transform 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease;
}

.skill-card::after {
    content: "";

    position: absolute;

    width: 100px;
    height: 100px;

    right: -40px;
    bottom: -45px;

    border-radius: 50%;

    background: rgba(0, 229, 255, 0.08);

    filter: blur(20px);
}

.skill-card:hover {
    transform: translateY(-8px);

    border-color: var(--border-hover);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.3),
        0 0 35px rgba(47, 129, 255, 0.08);
}

.skill-number {
    color: var(--primary-light);

    font-size: 11px;
    font-weight: 800;

    letter-spacing: 2px;
}

.skill-card h3 {
    font-size: 17px;
    line-height: 1.3;
}

.skill-card p {
    color: var(--text-muted);

    font-size: 12px;
}


/* =========================================================
   PROJECTS
========================================================= */

.projects-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 22px;
}

.project-card {
    position: relative;

    overflow: hidden;

    border-radius: 22px;

    background:
        linear-gradient(
            145deg,
            rgba(17, 35, 67, 0.85),
            rgba(7, 16, 33, 0.82)
        );

    border: 1px solid var(--border);

    transition:
        transform 0.4s ease,
        border-color 0.4s ease,
        box-shadow 0.4s ease;
}

.project-card:hover {
    transform: translateY(-9px);

    border-color: var(--border-hover);

    box-shadow:
        0 25px 65px rgba(0, 0, 0, 0.35),
        0 0 35px rgba(47, 129, 255, 0.1);
}

.project-visual {
    min-height: 190px;

    padding: 20px;

    position: relative;

    background:
        radial-gradient(
            circle at 30% 20%,
            rgba(47, 129, 255, 0.2),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #0b1934,
            #071021
        );

    border-bottom: 1px solid var(--border);
}

.project-visual::before {
    content: "";

    position: absolute;

    left: 25px;
    right: 25px;
    bottom: 28px;

    height: 55px;

    background:
        linear-gradient(
            135deg,
            transparent 0 8%,
            rgba(66, 184, 255, 0.18) 8% 10%,
            transparent 10% 20%,
            rgba(47, 129, 255, 0.25) 20% 22%,
            transparent 22% 32%,
            rgba(0, 229, 255, 0.18) 32% 34%,
            transparent 34%
        );

    opacity: 0.8;
}

.project-card-content {
    padding: 25px;
}

.project-card h3 {
    font-size: 21px;
    margin-bottom: 9px;
}

.project-card p {
    color: var(--text-soft);

    font-size: 13px;

    margin-bottom: 20px;
}

.project-link {
    color: var(--cyan);

    font-size: 12px;
    font-weight: 700;
}

.project-link:hover {
    color: white;
}


/* =========================================================
   EXPERIENCE
========================================================= */

.timeline {
    position: relative;

    max-width: 900px;

    margin: auto;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 10px;
    top: 0;
    bottom: 0;

    width: 1px;

    background:
        linear-gradient(
            var(--primary),
            rgba(47, 129, 255, 0.05)
        );
}

.timeline-item {
    position: relative;

    padding-left: 48px;

    margin-bottom: 45px;
}

.timeline-item::before {
    content: "";

    position: absolute;

    left: 4px;
    top: 8px;

    width: 13px;
    height: 13px;

    border-radius: 50%;

    background: var(--primary);

    border: 3px solid var(--bg);

    box-shadow:
        0 0 18px rgba(47, 129, 255, 0.65);
}

.timeline-item h3 {
    font-size: 20px;
}

.timeline-item .date {
    display: inline-block;

    margin: 5px 0 10px;

    color: var(--cyan);

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 1px;
}

.timeline-item p {
    color: var(--text-soft);

    font-size: 14px;
}


/* =========================================================
   APPROACH
========================================================= */

.approach-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.approach-card {
    padding: 35px 28px;

    border-radius: 20px;

    background:
        linear-gradient(
            145deg,
            rgba(17, 35, 67, 0.7),
            rgba(7, 16, 33, 0.75)
        );

    border: 1px solid var(--border);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease;
}

.approach-card:hover {
    transform: translateY(-7px);

    border-color: var(--border-hover);
}

.approach-card span {
    display: block;

    color: var(--primary-light);

    font-size: 12px;
    font-weight: 800;

    margin-bottom: 18px;
}

.approach-card h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

.approach-card p {
    color: var(--text-muted);

    font-size: 13px;
}


/* =========================================================
   CONTACT
========================================================= */

.contact-box {
    position: relative;

    overflow: hidden;

    padding: 65px;

    border-radius: 28px;

    text-align: center;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(47, 129, 255, 0.2),
            transparent 45%
        ),
        linear-gradient(
            145deg,
            rgba(16, 35, 69, 0.9),
            rgba(6, 14, 30, 0.92)
        );

    border: 1px solid var(--border);

    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.3);
}

.contact-box h2 {
    font-size: clamp(34px, 5vw, 58px);

    letter-spacing: -2px;

    margin-bottom: 15px;
}

.contact-box p {
    color: var(--text-soft);

    max-width: 600px;

    margin: 0 auto 30px;
}

.contact-links {
    display: flex;

    justify-content: center;

    gap: 12px;

    flex-wrap: wrap;
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    padding: 35px 0;

    border-top: 1px solid rgba(255, 255, 255, 0.06);

    color: var(--text-muted);

    font-size: 12px;

    text-align: center;
}

footer a {
    color: var(--text-soft);
}

footer a:hover {
    color: var(--cyan);
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

.reveal {
    opacity: 0;

    transform: translateY(35px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal.active {
    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

.scroll-progress {
    position: fixed;

    top: 0;
    left: 0;

    width: 0%;
    height: 2px;

    z-index: 2000;

    background:
        linear-gradient(
            90deg,
            var(--primary),
            var(--cyan)
        );

    box-shadow:
        0 0 12px rgba(0, 229, 255, 0.7);
}


/* =========================================================
   MOBILE MENU
========================================================= */

.menu-toggle {
    display: none;

    width: 42px;
    height: 42px;

    border-radius: 10px;

    border: 1px solid var(--border);

    background: rgba(255, 255, 255, 0.04);

    color: white;

    cursor: pointer;
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
    background: rgba(47, 129, 255, 0.35);
    color: white;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1000px) {

    .hero .container {
        grid-template-columns: 1fr;

        text-align: center;
    }

    .hero-content {
        margin: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-visual {
        min-height: 450px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .projects-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }
}


@media (max-width: 760px) {

    .container {
        width: min(
            var(--container),
            calc(100% - 28px)
        );
    }

    .section {
        padding: 80px 0;
    }

    .navbar .container {
        min-height: 70px;
    }

    .nav-links {
        position: fixed;

        top: 70px;
        left: 14px;
        right: 14px;

        display: none;

        flex-direction: column;

        align-items: stretch;

        gap: 5px;

        padding: 15px;

        border-radius: 18px;

        background:
            rgba(7, 16, 33, 0.96);

        border: 1px solid var(--border);

        box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.4);

        backdrop-filter: blur(20px);
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links a {
        padding: 13px 15px;
    }

    .menu-toggle {
        display: block;
    }

    .hero {
        padding-top: 125px;
    }

    .hero h1 {
        font-size: clamp(48px, 14vw, 72px);

        letter-spacing: -3px;
    }

    .hero-description {
        font-size: 14px;
    }

    .hero-buttons {
        flex-direction: column;

        align-items: stretch;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    .hero-visual {
        min-height: 400px;
    }

    .main-card {
        width: 92%;

        padding: 24px;
    }

    .floating-card.excel {
        right: 0;
    }

    .floating-card.erp {
        left: 0;
    }

    .skills-grid,
    .projects-grid,
    .approach-grid {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
    }

    .contact-box {
        padding: 40px 22px;
    }
}


@media (max-width: 480px) {

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .hero-circle.circle-one {
        width: 300px;
        height: 300px;
    }

    .hero-circle.circle-two {
        width: 220px;
        height: 220px;
    }

    .card-stats {
        gap: 7px;
    }

    .card-stat {
        padding: 12px 5px;
    }

    .card-stat strong {
        font-size: 17px;
    }
}
