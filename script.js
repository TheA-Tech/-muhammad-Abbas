/* =========================================================
   MUHAMMAD ABBAS — PORTFOLIO
   Interactive Portfolio JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =====================================================
       2. NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    /* =====================================================
       3. SCROLL PROGRESS BAR
       ===================================================== */

    const progressBar = document.querySelector(".scroll-progress");

    function updateScrollProgress() {

        if (!progressBar) return;

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        progressBar.style.width = `${progress}%`;
    }

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();


    /* =====================================================
       4. ACTIVE NAVIGATION
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();


    /* =====================================================
       5. SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (
                !targetID ||
                targetID === "#" ||
                targetID.length < 2
            ) {
                return;
            }

            const target =
                document.querySelector(targetID);

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 80;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       6. SCROLL REVEAL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -60px 0px"
                }
            );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("show");
        });

    }


    /* =====================================================
       7. STAGGER CARD ANIMATIONS
       ===================================================== */

    const cardGroups = document.querySelectorAll(
        ".skills-grid, .projects-grid, .services-grid, .stats-grid, .process-grid"
    );

    cardGroups.forEach(group => {

        const cards = group.children;

        Array.from(cards).forEach((card, index) => {

            card.style.setProperty(
                "--delay",
                `${index * 100}ms`
            );

        });

    });


    /* =====================================================
       8. TYPING TEXT
       ===================================================== */

    const typingElement =
        document.querySelector(".typing-text");

    if (typingElement) {

        const words = [
            "Finance & Accounts",
            "Business Operations",
            "Excel & Reporting",
            "ERP & Business Systems",
            "Data & Digital Solutions"
        ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord =
                words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                if (
                    characterIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1600
                    );

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;

                if (characterIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;
                }
            }

            const speed =
                deleting ? 45 : 75;

            setTimeout(
                typeEffect,
                speed
            );
        }

        typeEffect();
    }


    /* =====================================================
       9. HERO PARALLAX
       ===================================================== */

    const hero = document.querySelector(".hero");

    const heroVisual =
        document.querySelector(".hero-visual");

    const floatingCards =
        document.querySelectorAll(
            ".floating-card"
        );

    if (
        hero &&
        heroVisual &&
        window.innerWidth > 768
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    (event.clientX -
                        rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY -
                        rect.top) /
                    rect.height -
                    0.5;

                heroVisual.style.transform =
                    `translate3d(${x * 15}px, ${y * 15}px, 0)`;

                floatingCards.forEach(
                    (card, index) => {

                        const amount =
                            index % 2 === 0
                                ? 10
                                : -10;

                        card.style.transform =
                            `translate(${x * amount}px, ${y * amount}px)`;
                    }
                );

            }
        );

        hero.addEventListener(
            "mouseleave",
            () => {

                heroVisual.style.transform =
                    "translate3d(0,0,0)";

                floatingCards.forEach(card => {
                    card.style.transform =
                        "translate(0,0)";
                });

            }
        );
    }


    /* =====================================================
       10. PROFILE IMAGE TILT
       ===================================================== */

    const profileImage =
        document.querySelector(".profile-image");

    if (
        profileImage &&
        window.innerWidth > 768
    ) {

        profileImage.addEventListener(
            "mousemove",
            event => {

                const rect =
                    profileImage.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 10;

                const rotateX =
                    ((y / rect.height) - 0.5) * -10;

                profileImage.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     scale(1.03)`;

            }
        );

        profileImage.addEventListener(
            "mouseleave",
            () => {

                profileImage.style.transform =
                    "perspective(700px) rotateX(0) rotateY(0) scale(1)";

            }
        );
    }


    /* =====================================================
       11. ANIMATED COUNTERS
       ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );

    function animateCounter(element) {

        const target =
            parseInt(
                element.dataset.counter,
                10
            );

        if (isNaN(target)) return;

        const duration = 1400;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) /
                    duration,
                    1
                );

            const eased =
                1 - Math.pow(1 - progress, 3);

            const value =
                Math.floor(
                    eased * target
                );

            element.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(
                    updateCounter
                );
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(
            updateCounter
        );
    }


    if (counters.length) {

        if ("IntersectionObserver" in window) {

            const counterObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting &&
                                !entry.target.dataset.animated
                            ) {

                                entry.target.dataset.animated =
                                    "true";

                                animateCounter(
                                    entry.target
                                );
                            }

                        });

                    },
                    {
                        threshold: 0.7
                    }
                );

            counters.forEach(counter => {
                counterObserver.observe(counter);
            });

        }
    }


    /* =====================================================
       12. SKILL BAR ANIMATION
       ===================================================== */

    const skillBars =
        document.querySelectorAll(
            ".skill-progress"
        );

    if (skillBars.length) {

        const skillObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const bar =
                                entry.target;

                            const width =
                                bar.dataset.width ||
                                bar.getAttribute(
                                    "data-width"
                                );

                            if (width) {
                                bar.style.width =
                                    width;
                            }

                            skillObserver.unobserve(
                                bar
                            );
                        }

                    });

                },
                {
                    threshold: 0.4
                }
            );

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }


    /* =====================================================
       13. HORIZONTAL SCROLL VISUALS
       ===================================================== */

    const horizontalItems =
        document.querySelectorAll(
            ".horizontal-item"
        );

    if (horizontalItems.length) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.innerWidth < 768) {
                    return;
                }

                horizontalItems.forEach(
                    (item, index) => {

                        const rect =
                            item.getBoundingClientRect();

                        const center =
                            window.innerHeight / 2;

                        const distance =
                            (rect.top +
                                rect.height / 2) -
                            center;

                        const movement =
                            Math.max(
                                -30,
                                Math.min(
                                    30,
                                    distance * 0.08
                                )
                            );

                        item.style.transform =
                            `translateX(${movement}px)`;

                    }
                );

            },
            {
                passive: true
            }
        );
    }


    /* =====================================================
       14. PROCESS / WORKFLOW ANIMATION
       ===================================================== */

    const workflowSteps =
        document.querySelectorAll(
            ".workflow-step"
        );

    if (workflowSteps.length) {

        workflowSteps.forEach(
            (step, index) => {

                step.addEventListener(
                    "mouseenter",
                    () => {

                        workflowSteps.forEach(
                            item => {
                                item.classList.remove(
                                    "active"
                                );
                            }
                        );

                        step.classList.add(
                            "active"
                        );

                    }
                );

            }
        );
    }


    /* =====================================================
       15. THEA BOOKS INTERACTIVE TABS
       ===================================================== */

    const theaTabs =
        document.querySelectorAll(
            "[data-thea-tab]"
        );

    const theaPanels =
        document.querySelectorAll(
            "[data-thea-panel]"
        );

    if (
        theaTabs.length &&
        theaPanels.length
    ) {

        theaTabs.forEach(tab => {

            tab.addEventListener(
                "click",
                () => {

                    const target =
                        tab.dataset.theaTab;

                    theaTabs.forEach(item => {
                        item.classList.remove(
                            "active"
                        );
                    });

                    theaPanels.forEach(panel => {
                        panel.classList.remove(
                            "active"
                        );
                    });

                    tab.classList.add(
                        "active"
                    );

                    const panel =
                        document.querySelector(
                            `[data-thea-panel="${target}"]`
                        );

                    if (panel) {
                        panel.classList.add(
                            "active"
                        );
                    }

                }
            );

        });
    }


    /* =====================================================
       16. PROJECT CARD MOUSE MOVEMENT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );

    if (
        projectCards.length &&
        window.innerWidth > 900
    ) {

        projectCards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 5;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -5;

                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });
    }


    /* =====================================================
       17. SERVICE CARDS
       ===================================================== */

    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );

    serviceCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                serviceCards.forEach(
                    item => {
                        item.classList.remove(
                            "selected"
                        );
                    }
                );

                card.classList.add(
                    "selected"
                );

            }
        );

    });


    /* =====================================================
       18. CONTACT FORM
       ===================================================== */

    const contactForm =
        document.querySelector(
            "#contactForm"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    document.querySelector(
                        "#name"
                    )?.value.trim();

                const email =
                    document.querySelector(
                        "#email"
                    )?.value.trim();

                const message =
                    document.querySelector(
                        "#message"
                    )?.value.trim();

                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    showFormMessage(
                        "Please fill in all fields.",
                        "error"
                    );

                    return;
                }

                const subject =
                    encodeURIComponent(
                        `Portfolio Contact — ${name}`
                    );

                const body =
                    encodeURIComponent(
                        `Name: ${name}\n` +
                        `Email: ${email}\n\n` +
                        `Message:\n${message}`
                    );

                window.location.href =
                    `mailto:abbasnazeer098@gmail.com?subject=${subject}&body=${body}`;

                showFormMessage(
                    "Opening your email application...",
                    "success"
                );

            }
        );
    }


    function showFormMessage(
        message,
        type
    ) {

        let messageBox =
            document.querySelector(
                ".form-message"
            );

        if (!messageBox) {

            messageBox =
                document.createElement(
                    "div"
                );

            messageBox.className =
                "form-message";

            if (contactForm) {
                contactForm.appendChild(
                    messageBox
                );
            }
        }

        messageBox.textContent =
            message;

        messageBox.className =
            `form-message ${type}`;

    }


    /* =====================================================
       19. COPY PHONE / EMAIL
       ===================================================== */

    const copyButtons =
        document.querySelectorAll(
            "[data-copy]"
        );

    copyButtons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                const value =
                    button.dataset.copy;

                if (!value) return;

                try {

                    await navigator.clipboard.writeText(
                        value
                    );

                    const oldText =
                        button.textContent;

                    button.textContent =
                        "Copied!";

                    setTimeout(
                        () => {
                            button.textContent =
                                oldText;
                        },
                        1500
                    );

                } catch (error) {

                    console.log(
                        "Copy failed:",
                        error
                    );

                }

            }
        );

    });


    /* =====================================================
       20. SCROLL-BASED PARALLAX
       ===================================================== */

    const parallaxElements =
        document.querySelectorAll(
            "[data-parallax]"
        );

    if (parallaxElements.length) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.innerWidth < 768) {
                    return;
                }

                parallaxElements.forEach(
                    element => {

                        const speed =
                            parseFloat(
                                element.dataset.parallax
                            ) || 0.15;

                        const rect =
                            element.getBoundingClientRect();

                        const offset =
                            (rect.top -
                                window.innerHeight / 2) *
                            speed;

                        element.style.transform =
                            `translateY(${offset}px)`;

                    }
                );

            },
            {
                passive: true
            }
        );
    }


    /* =====================================================
       21. FLOATING PARTICLES
       ===================================================== */

    const particleContainer =
        document.querySelector(
            ".hero-particles"
        );

    if (particleContainer) {

        const particleCount =
            window.innerWidth < 600
                ? 12
                : 25;

        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );

            particle.className =
                "particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.top =
                `${Math.random() * 100}%`;

            particle.style.animationDelay =
                `${Math.random() * 5}s`;

            particle.style.animationDuration =
                `${4 + Math.random() * 5}s`;

            particleContainer.appendChild(
                particle
            );
        }
    }


    /* =====================================================
       22. CURSOR GLOW — DESKTOP ONLY
       ===================================================== */

    if (window.innerWidth > 1000) {

        const cursorGlow =
            document.createElement(
                "div"
            );

        cursorGlow.className =
            "cursor-glow";

        document.body.appendChild(
            cursorGlow
        );

        document.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       23. BUTTON RIPPLE EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                const rect =
                    this.getBoundingClientRect();

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.className =
                    "button-ripple";

                ripple.style.left =
                    `${event.clientX - rect.left}px`;

                ripple.style.top =
                    `${event.clientY - rect.top}px`;

                this.appendChild(
                    ripple
                );

                setTimeout(
                    () => {
                        ripple.remove();
                    },
                    600
                );

            }
        );

    });


    /* =====================================================
       24. IMAGE FALLBACK
       ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );

    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

                if (
                    image.alt &&
                    image.parentElement
                ) {

                    image.parentElement.classList.add(
                        "image-missing"
                    );

                }

            }
        );

    });


    /* =====================================================
       25. REDUCED MOTION ACCESSIBILITY
       ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (reducedMotion.matches) {

        document.documentElement.style.scrollBehavior =
            "auto";

        document
            .querySelectorAll(
                ".reveal, .reveal-left, .reveal-right, .reveal-scale"
            )
            .forEach(element => {

                element.classList.add(
                    "show"
                );

            });

    }


    /* =====================================================
       26. INITIAL PAGE LOAD
       ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    /* =====================================================
       27. YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );

    yearElements.forEach(
        element => {
            element.textContent =
                new Date().getFullYear();
        }
    );


    /* =====================================================
       28. CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%c Muhammad Abbas — Portfolio ",
        "font-size:16px;font-weight:bold;"
    );

    console.log(
        "Finance • Accounts • Operations • Digital Solutions"
    );

});
