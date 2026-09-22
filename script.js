/* =========================================================
   THE A TECH — PROFESSIONAL PORTFOLIO
   Final JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. PAGE LOADER — NEVER GET STUCK
       ===================================================== */

    const pageLoader = document.getElementById("pageLoader");

    function finishLoader() {
        if (!pageLoader) return;

        pageLoader.classList.add("is-hidden");

        setTimeout(() => {
            if (pageLoader && pageLoader.parentNode) {
                pageLoader.remove();
            }
        }, 900);
    }

    window.addEventListener("load", finishLoader);

    /* Safety fallback */
    setTimeout(finishLoader, 2500);


    /* =====================================================
       2. MOBILE MENU
       ===================================================== */

    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");
            mobileMenuBtn.classList.toggle("active");

            const expanded =
                mobileMenuBtn.getAttribute("aria-expanded") === "true";

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                String(!expanded)
            );
        });

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");
                mobileMenuBtn.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    /* =====================================================
       3. NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       4. SCROLL PROGRESS
       ===================================================== */

    const progressBar =
        document.getElementById("scrollProgress");

    function updateScrollProgress() {

        if (!progressBar) return;

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) return;

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            `${Math.min(progress, 100)}%`;
    }

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();


    /* =====================================================
       5. ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".nav-link[href^='#']"
        );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();


    /* =====================================================
       6. SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       7. SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale"
        );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
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
       8. CARD STAGGER ANIMATION
       ===================================================== */

    const staggerGroups = [
        ".skills-layout",
        ".projects-grid",
        ".approach-grid",
        ".about-stats",
        ".experience-timeline"
    ];

    staggerGroups.forEach(selector => {

        document.querySelectorAll(selector)
            .forEach(group => {

                const cards =
                    group.children;

                Array.from(cards).forEach(
                    (card, index) => {

                        card.style.setProperty(
                            "--delay",
                            `${index * 100}ms`
                        );

                        card.classList.add(
                            "stagger-item"
                        );
                    }
                );

            });

    });


    /* =====================================================
       9. TYPING / ROLE ROTATION
       ===================================================== */

    const typingText =
        document.getElementById("typingText");

    if (typingText) {

        const roles = [
            "Finance & Accounts",
            "Business Operations",
            "Excel & Reporting",
            "ERP & Business Systems",
            "Data & Digital Solutions"
        ];

        let roleIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeRole() {

            const currentRole =
                roles[roleIndex];

            if (!deleting) {

                characterIndex++;

                typingText.textContent =
                    currentRole.substring(
                        0,
                        characterIndex
                    );

                if (
                    characterIndex >=
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeRole,
                        1600
                    );

                    return;
                }

            } else {

                characterIndex--;

                typingText.textContent =
                    currentRole.substring(
                        0,
                        characterIndex
                    );

                if (characterIndex <= 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) %
                        roles.length;
                }
            }

            setTimeout(
                typeRole,
                deleting ? 45 : 80
            );
        }

        typeRole();
    }


    /* =====================================================
       10. HERO PARALLAX
       ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (
        heroVisual &&
        window.matchMedia("(min-width: 901px)").matches
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;

                if (scroll > 900) return;

                const movement =
                    scroll * 0.08;

                heroVisual.style.transform =
                    `translateY(${movement}px)`;

            },
            { passive: true }
        );
    }


    /* =====================================================
       11. PROFILE IMAGE TILT
       ===================================================== */

    const profileImage =
        document.querySelector(".profile-image");

    if (
        profileImage &&
        window.matchMedia("(min-width: 901px)").matches
    ) {

        profileImage.addEventListener(
            "mousemove",
            event => {

                const rect =
                    profileImage.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 12;

                const rotateX =
                    ((y / rect.height) - 0.5) * -12;

                profileImage.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(10px)`;
            }
        );

        profileImage.addEventListener(
            "mouseleave",
            () => {

                profileImage.style.transform =
                    "";
            }
        );
    }


    /* =====================================================
       12. ANIMATED COUNTERS
       Supports:
       .counter[data-target]
       [data-counter]
       ===================================================== */

    const counters =
        document.querySelectorAll(
            ".counter[data-target], [data-counter]"
        );

    function animateCounter(element) {

        if (element.dataset.animated === "true") {
            return;
        }

        element.dataset.animated = "true";

        const targetValue =
            parseFloat(
                element.dataset.target ||
                element.dataset.counter ||
                "0"
            );

        if (Number.isNaN(targetValue)) return;

        const duration = 1400;

        const startTime =
            performance.now();

        function updateCounter(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );

            const value =
                Math.round(
                    targetValue * eased
                );

            element.textContent =
                value.toLocaleString();

            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                element.textContent =
                    targetValue.toLocaleString();
            }
        }

        requestAnimationFrame(
            updateCounter
        );
    }

    if ("IntersectionObserver" in window) {

        const counterObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            animateCounter(
                                entry.target
                            );

                            counterObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });

    } else {

        counters.forEach(
            animateCounter
        );
    }


    /* =====================================================
       13. WORKFLOW ANIMATION
       Supports:
       .workflow-item
       .workflow-step
       ===================================================== */

    const workflowItems =
        document.querySelectorAll(
            ".workflow-item, .workflow-step"
        );

    if ("IntersectionObserver" in window) {

        const workflowObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active-workflow"
                            );

                            workflowObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.35
                }
            );

        workflowItems.forEach(item => {
            workflowObserver.observe(item);
        });
    }


    /* =====================================================
       14. FINANCE / ERP FLOW ANIMATION
       ===================================================== */

    const flowNodes =
        document.querySelectorAll(
            ".finance-visual .workflow-item, " +
            ".erp-flow .workflow-item, " +
            ".case-node"
        );

    flowNodes.forEach((node, index) => {

        node.style.setProperty(
            "--flow-delay",
            `${index * 180}ms`
        );

    });


    /* =====================================================
       15. THEA BOOKS DASHBOARD ANIMATION
       ===================================================== */

    const chartBars =
        document.querySelectorAll(
            ".chart-bar"
        );

    if ("IntersectionObserver" in window) {

        const chartObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "chart-visible"
                            );

                            chartObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.25
                }
            );

        chartBars.forEach(bar => {
            chartObserver.observe(bar);
        });
    }


    /* =====================================================
       16. PROJECT CARD MOUSE EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );

    if (
        window.matchMedia("(min-width: 901px)").matches
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

                    const rotateX =
                        ((y / rect.height) - 0.5) * -5;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 5;

                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";
                }
            );
        });
    }


    /* =====================================================
       17. SERVICE / SKILL CARD INTERACTION
       ===================================================== */

    const serviceCards =
        document.querySelectorAll(
            ".skill-card"
        );

    serviceCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                serviceCards.forEach(
                    item =>
                        item.classList.remove(
                            "selected"
                        )
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
            ".contact-form"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    document.getElementById(
                        "name"
                    )?.value.trim();

                const email =
                    document.getElementById(
                        "email"
                    )?.value.trim();

                const subject =
                    document.getElementById(
                        "subject"
                    )?.value.trim();

                const message =
                    document.getElementById(
                        "message"
                    )?.value.trim();

                const receiver =
                    "abbasnazeer098@gmail.com";

                const mailSubject =
                    subject ||
                    `Portfolio Contact from ${name || "Visitor"}`;

                const body =
                    `Name: ${name || ""}\n` +
                    `Email: ${email || ""}\n\n` +
                    `${message || ""}`;

                const mailto =
                    `mailto:${receiver}` +
                    `?subject=${encodeURIComponent(mailSubject)}` +
                    `&body=${encodeURIComponent(body)}`;

                window.location.href =
                    mailto;
            }
        );
    }


    /* =====================================================
       19. COPY TO CLIPBOARD
       ===================================================== */

    document.querySelectorAll(
        "[data-copy]"
    ).forEach(button => {

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

                    const original =
                        button.textContent;

                    button.textContent =
                        "Copied!";

                    setTimeout(() => {
                        button.textContent =
                            original;
                    }, 1400);

                } catch (error) {

                    console.warn(
                        "Clipboard unavailable."
                    );
                }
            }
        );
    });


    /* =====================================================
       20. PARALLAX ELEMENTS
       ===================================================== */

    const parallaxElements =
        document.querySelectorAll(
            "[data-parallax]"
        );

    if (
        parallaxElements.length &&
        window.matchMedia("(min-width: 901px)").matches
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;

                parallaxElements.forEach(
                    element => {

                        const speed =
                            parseFloat(
                                element.dataset.parallax
                            ) || 0.05;

                        element.style.transform =
                            `translateY(${scroll * speed}px)`;
                    }
                );

            },
            { passive: true }
        );
    }


    /* =====================================================
       21. FLOATING PARTICLES
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    if (hero) {

        const particleContainer =
            document.createElement("div");

        particleContainer.className =
            "hero-particles";

        for (let i = 0; i < 22; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "hero-particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.top =
                `${Math.random() * 100}%`;

            particle.style.animationDelay =
                `${Math.random() * 5}s`;

            particle.style.animationDuration =
                `${5 + Math.random() * 7}s`;

            particleContainer.appendChild(
                particle
            );
        }

        hero.appendChild(
            particleContainer
        );
    }


    /* =====================================================
       22. DESKTOP CURSOR GLOW
       ===================================================== */

    if (
        window.matchMedia(
            "(pointer: fine) and (min-width: 901px)"
        ).matches
    ) {

        const cursorGlow =
            document.createElement("div");

        cursorGlow.className =
            "cursor-glow";

        document.body.appendChild(
            cursorGlow
        );

        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        document.addEventListener(
            "mousemove",
            event => {

                mouseX = event.clientX;
                mouseY = event.clientY;
            }
        );

        function animateCursor() {

            glowX +=
                (mouseX - glowX) * 0.12;

            glowY +=
                (mouseY - glowY) * 0.12;

            cursorGlow.style.transform =
                `translate3d(${glowX}px, ${glowY}px, 0)`;

            requestAnimationFrame(
                animateCursor
            );
        }

        animateCursor();
    }


    /* =====================================================
       23. BUTTON RIPPLE
       ===================================================== */

    document.querySelectorAll(
        ".btn-primary, .btn-outline, .form-submit, .nav-cta"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const rect =
                    button.getBoundingClientRect();

                const ripple =
                    document.createElement("span");

                ripple.className =
                    "ripple";

                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );

                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;

                button.appendChild(
                    ripple
                );

                setTimeout(() => {
                    ripple.remove();
                }, 650);
            }
        );
    });


    /* =====================================================
       24. PROFILE IMAGE FALLBACK
       ===================================================== */

    const profileImg =
        document.querySelector(
            ".profile-image img"
        );

    if (profileImg) {

        profileImg.addEventListener(
            "error",
            () => {

                profileImg.style.display =
                    "none";

                profileImg.parentElement.classList.add(
                    "image-missing"
                );
            }
        );
    }


    /* =====================================================
       25. CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "#currentYear, .current-year"
        );

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();
    });


    /* =====================================================
       26. REDUCED MOTION
       ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (reducedMotion.matches) {

        document.documentElement.classList.add(
            "reduced-motion"
        );

        revealElements.forEach(element => {
            element.classList.add("show");
        });
    }


    /* =====================================================
       27. RESIZE SAFETY
       ===================================================== */

    let resizeTimer;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);

            resizeTimer =
                setTimeout(() => {

                    updateNavbar();
                    updateScrollProgress();
                    updateActiveNav();

                }, 150);
        }
    );


    /* =====================================================
       28. PAGE READY
       ===================================================== */

    document.body.classList.add(
        "portfolio-ready"
    );

    console.log(
        "THE A TECH Portfolio loaded successfully."
    );

});
