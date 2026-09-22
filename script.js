/* =========================================================
   MUHAMMAD ABBAS — PROFESSIONAL PORTFOLIO
   FINAL INTEGRATED JAVASCRIPT
   Compatible with current index.html + style.css
   ========================================================= */

(() => {
    "use strict";

    /* =====================================================
       1. LOADER — FAIL-SAFE
       ===================================================== */

    const pageLoader = document.getElementById("pageLoader");

    let loaderFinished = false;

    function finishLoader() {

        if (loaderFinished || !pageLoader) return;

        loaderFinished = true;

        pageLoader.classList.add("hidden");
        pageLoader.setAttribute("aria-hidden", "true");

        setTimeout(() => {

            if (pageLoader && pageLoader.parentNode) {
                pageLoader.style.display = "none";
            }

        }, 800);
    }

    /* Start loader protection immediately */
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(finishLoader, 350);
    });

    window.addEventListener("load", () => {
        setTimeout(finishLoader, 150);
    });

    /* Absolute safety fallback */
    setTimeout(finishLoader, 2500);


    /* =====================================================
       2. DOM READY
       ===================================================== */

    document.addEventListener("DOMContentLoaded", () => {


        /* =================================================
           3. ELEMENT REFERENCES
           ================================================= */

        const body = document.body;

        const navbar =
            document.getElementById("navbar");

        const scrollProgress =
            document.getElementById("scrollProgress");

        const mobileMenuBtn =
            document.querySelector(".mobile-menu-btn");

        const mobileMenu =
            document.querySelector(".mobile-menu");

        const sections =
            document.querySelectorAll("section[id]");

        const navLinks =
            document.querySelectorAll(
                ".nav-link[href^='#']"
            );


        /* =================================================
           4. MOBILE MENU
           ================================================= */

        if (mobileMenuBtn && mobileMenu) {

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuBtn.addEventListener(
                "click",
                () => {

                    const isOpen =
                        mobileMenu.classList.toggle("open");

                    mobileMenuBtn.classList.toggle(
                        "open",
                        isOpen
                    );

                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );
                }
            );

            mobileMenu
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            mobileMenu.classList.remove(
                                "open"
                            );

                            mobileMenuBtn.classList.remove(
                                "open"
                            );

                            mobileMenuBtn.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }
                    );

                });
        }


        /* =================================================
           5. NAVBAR SCROLL
           ================================================= */

        function updateNavbar() {

            if (!navbar) return;

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );
        }


        /* =================================================
           6. SCROLL PROGRESS
           ================================================= */

        function updateScrollProgress() {

            if (!scrollProgress) return;

            const scrollTop =
                window.scrollY;

            const pageHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (pageHeight <= 0) {

                scrollProgress.style.width = "0%";
                return;
            }

            const progress =
                (scrollTop / pageHeight) * 100;

            scrollProgress.style.width =
                `${Math.min(100, Math.max(0, progress))}%`;
        }


        /* =================================================
           7. ACTIVE NAVIGATION
           ================================================= */

        function updateActiveNavigation() {

            if (!sections.length || !navLinks.length) {
                return;
            }

            let currentSection = "";

            const scrollPosition =
                window.scrollY + 180;

            sections.forEach(section => {

                if (
                    scrollPosition >=
                    section.offsetTop
                ) {

                    currentSection =
                        section.id;
                }

            });

            navLinks.forEach(link => {

                const href =
                    link.getAttribute("href");

                link.classList.toggle(
                    "active",
                    href === `#${currentSection}`
                );
            });
        }


        /* =================================================
           8. COMBINED SCROLL HANDLER
           ================================================= */

        let ticking = false;

        function handleScroll() {

            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {

                updateNavbar();
                updateScrollProgress();
                updateActiveNavigation();

                ticking = false;
            });
        }

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        updateNavbar();
        updateScrollProgress();
        updateActiveNavigation();


        /* =================================================
           9. SMOOTH SCROLL
           ================================================= */

        document
            .querySelectorAll('a[href^="#"]')
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link.getAttribute("href");

                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }

                        const target =
                            document.querySelector(
                                targetId
                            );

                        if (!target) return;

                        event.preventDefault();

                        const navbarHeight =
                            navbar
                                ? navbar.offsetHeight
                                : 0;

                        const targetPosition =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            navbarHeight;

                        window.scrollTo({
                            top: Math.max(
                                0,
                                targetPosition
                            ),
                            behavior: "smooth"
                        });
                    }
                );
            });


        /* =================================================
           10. SCROLL REVEAL
           ================================================= */

        const revealElements =
            document.querySelectorAll(
                ".reveal, .reveal-left, .reveal-right, .reveal-scale"
            );

        function revealImmediately() {

            revealElements.forEach(element => {
                element.classList.add("show");
            });
        }

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (
            reducedMotion ||
            !("IntersectionObserver" in window)
        ) {

            revealImmediately();

        } else {

            const revealObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );
                            }

                        });

                    },
                    {
                        threshold: 0.10,
                        rootMargin:
                            "0px 0px -60px 0px"
                    }
                );

            revealElements.forEach(element => {
                revealObserver.observe(element);
            });
        }


        /* =================================================
           11. STAGGER ANIMATIONS
           ================================================= */

        const staggerGroups = [
            ".skills-layout",
            ".projects-grid",
            ".approach-grid",
            ".about-stats",
            ".experience-timeline",
            ".services-grid"
        ];

        staggerGroups.forEach(selector => {

            document
                .querySelectorAll(selector)
                .forEach(group => {

                    Array.from(group.children)
                        .forEach((item, index) => {

                            item.style.setProperty(
                                "--delay",
                                `${index * 90}ms`
                            );

                            item.classList.add(
                                "stagger-item"
                            );
                        });
                });
        });


        /* =================================================
           12. HERO TYPING EFFECT
           ================================================= */

        const typingText =
            document.getElementById("typingText");

        if (
            typingText &&
            !reducedMotion
        ) {

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

                const role =
                    roles[roleIndex];

                if (!deleting) {

                    characterIndex++;

                    typingText.textContent =
                        role.substring(
                            0,
                            characterIndex
                        );

                    if (
                        characterIndex >=
                        role.length
                    ) {

                        deleting = true;

                        setTimeout(
                            typeRole,
                            1700
                        );

                        return;
                    }

                } else {

                    characterIndex--;

                    typingText.textContent =
                        role.substring(
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
                    deleting ? 42 : 75
                );
            }

            typeRole();
        }


        /* =================================================
           13. HERO PARALLAX
           ================================================= */

        const heroVisual =
            document.querySelector(".hero-visual");

        const desktopScreen =
            window.matchMedia(
                "(min-width: 901px)"
            );

        if (
            heroVisual &&
            desktopScreen.matches &&
            !reducedMotion
        ) {

            function updateHeroParallax() {

                if (window.scrollY > 850) return;

                const movement =
                    window.scrollY * 0.045;

                heroVisual.style.transform =
                    `translate3d(0, ${movement}px, 0)`;
            }

            window.addEventListener(
                "scroll",
                updateHeroParallax,
                { passive: true }
            );
        }


        /* =================================================
           14. PROFILE IMAGE TILT
           ================================================= */

        const profileImage =
            document.querySelector(".profile-image");

        if (
            profileImage &&
            desktopScreen.matches &&
            !reducedMotion
        ) {

            profileImage.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        profileImage.getBoundingClientRect();

                    if (
                        !rect.width ||
                        !rect.height
                    ) {
                        return;
                    }

                    const x =
                        (event.clientX -
                            rect.left) /
                        rect.width;

                    const y =
                        (event.clientY -
                            rect.top) /
                        rect.height;

                    const rotateY =
                        (x - 0.5) * 10;

                    const rotateX =
                        (y - 0.5) * -10;

                    profileImage.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateZ(8px)`;
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


        /* =================================================
           15. ANIMATED COUNTERS
           ================================================= */

        const counters =
            document.querySelectorAll(
                ".counter[data-target], [data-counter]"
            );

        function animateCounter(element) {

            if (
                element.dataset.animated ===
                "true"
            ) {
                return;
            }

            element.dataset.animated =
                "true";

            const target =
                parseFloat(
                    element.dataset.target ||
                    element.dataset.counter ||
                    "0"
                );

            if (Number.isNaN(target)) {
                return;
            }

            if (reducedMotion) {

                element.textContent =
                    target.toLocaleString();

                return;
            }

            const duration = 1300;
            const start =
                performance.now();

            function updateCounter(now) {

                const elapsed =
                    now - start;

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
                        target * eased
                    );

                element.textContent =
                    value.toLocaleString();

                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    element.textContent =
                        target.toLocaleString();
                }
            }

            requestAnimationFrame(
                updateCounter
            );
        }

        if (
            counters.length &&
            "IntersectionObserver" in window
        ) {

            const counterObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

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
                        threshold: 0.45
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


        /* =================================================
           16. WORKFLOW ANIMATION
           ================================================= */

        const workflowItems =
            document.querySelectorAll(
                ".workflow-item, .workflow-step"
            );

        if (
            workflowItems.length &&
            !reducedMotion &&
            "IntersectionObserver" in window
        ) {

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
                        threshold: 0.25
                    }
                );

            workflowItems.forEach(item => {
                workflowObserver.observe(item);
            });
        }


        /* =================================================
           17. FLOW DELAYS
           ================================================= */

        const flowNodes =
            document.querySelectorAll(
                ".finance-visual .workflow-item, " +
                ".erp-flow .workflow-item, " +
                ".case-node"
            );

        flowNodes.forEach((node, index) => {

            node.style.setProperty(
                "--flow-delay",
                `${index * 150}ms`
            );
        });


        /* =================================================
           18. THEA BOOKS CHART ANIMATION
           ================================================= */

        const chartBars =
            document.querySelectorAll(
                ".chart-bar"
            );

        if (
            chartBars.length &&
            !reducedMotion &&
            "IntersectionObserver" in window
        ) {

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
                        threshold: 0.15
                    }
                );

            chartBars.forEach(bar => {
                chartObserver.observe(bar);
            });
        } else {

            chartBars.forEach(bar => {
                bar.classList.add(
                    "chart-visible"
                );
            });
        }


        /* =================================================
           19. PROJECT CARD TILT
           ================================================= */

        const projectCards =
            document.querySelectorAll(
                ".project-card"
            );

        if (
            projectCards.length &&
            desktopScreen.matches &&
            !reducedMotion
        ) {

            projectCards.forEach(card => {

                card.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            card.getBoundingClientRect();

                        if (
                            !rect.width ||
                            !rect.height
                        ) {
                            return;
                        }

                        const x =
                            (event.clientX -
                                rect.left) /
                            rect.width;

                        const y =
                            (event.clientY -
                                rect.top) /
                            rect.height;

                        const rotateX =
                            (y - 0.5) * -4;

                        const rotateY =
                            (x - 0.5) * 4;

                        card.style.transform =
                            `perspective(1000px)
                             rotateX(${rotateX}deg)
                             rotateY(${rotateY}deg)
                             translateY(-4px)`;
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


        /* =================================================
           20. SKILL CARD INTERACTION
           ================================================= */

        const skillCards =
            document.querySelectorAll(
                ".skill-card"
            );

        skillCards.forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    skillCards.forEach(item => {

                        if (item !== card) {
                            item.classList.remove(
                                "selected"
                            );
                        }
                    });

                    card.classList.toggle(
                        "selected"
                    );
                }
            );
        });


        /* =================================================
           21. SERVICE CARD HOVER
           ================================================= */

        const serviceCards =
            document.querySelectorAll(
                ".service-card"
            );

        serviceCards.forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "service-active"
                    );
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "service-active"
                    );
                }
            );
        });


        /* =================================================
           22. CONTACT FORM
           ================================================= */

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
                        )?.value.trim() || "";

                    const email =
                        document.getElementById(
                            "email"
                        )?.value.trim() || "";

                    const subject =
                        document.getElementById(
                            "subject"
                        )?.value.trim() || "";

                    const message =
                        document.getElementById(
                            "message"
                        )?.value.trim() || "";

                    const receiver =
                        "abbasnazeer098@gmail.com";

                    const mailSubject =
                        subject ||
                        `Portfolio Contact from ${name || "Visitor"}`;

                    const body =
                        `Name: ${name}\n` +
                        `Email: ${email}\n\n` +
                        `Message:\n${message}`;

                    const mailto =
                        `mailto:${receiver}` +
                        `?subject=${encodeURIComponent(
                            mailSubject
                        )}` +
                        `&body=${encodeURIComponent(
                            body
                        )}`;

                    window.location.href =
                        mailto;
                }
            );
        }


        /* =================================================
           23. COPY TO CLIPBOARD
           ================================================= */

        document
            .querySelectorAll("[data-copy]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    async () => {

                        const value =
                            button.dataset.copy;

                        if (!value) return;

                        try {

                            await navigator
                                .clipboard
                                .writeText(value);

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


        /* =================================================
           24. DATA PARALLAX
           ================================================= */

        const parallaxElements =
            document.querySelectorAll(
                "[data-parallax]"
            );

        if (
            parallaxElements.length &&
            desktopScreen.matches &&
            !reducedMotion
        ) {

            let parallaxTicking = false;

            function updateParallax() {

                if (parallaxTicking) return;

                parallaxTicking = true;

                requestAnimationFrame(() => {

                    const scroll =
                        window.scrollY;

                    parallaxElements.forEach(
                        element => {

                            const speed =
                                parseFloat(
                                    element.dataset.parallax
                                ) || 0.05;

                            element.style.transform =
                                `translate3d(
                                    0,
                                    ${scroll * speed}px,
                                    0
                                )`;
                        }
                    );

                    parallaxTicking = false;
                });
            }

            window.addEventListener(
                "scroll",
                updateParallax,
                { passive: true }
            );
        }


        /* =================================================
           25. HERO PARTICLES
           ================================================= */

        const hero =
            document.querySelector(".hero");

        if (
            hero &&
            !reducedMotion &&
            !hero.querySelector(".hero-particles")
        ) {

            const particleContainer =
                document.createElement("div");

            particleContainer.className =
                "hero-particles";

            particleContainer.setAttribute(
                "aria-hidden",
                "true"
            );

            const fragment =
                document.createDocumentFragment();

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

                fragment.appendChild(
                    particle
                );
            }

            particleContainer.appendChild(
                fragment
            );

            hero.appendChild(
                particleContainer
            );
        }


        /* =================================================
           26. DESKTOP CURSOR GLOW
           ================================================= */

        const finePointer =
            window.matchMedia(
                "(pointer: fine) and (min-width: 901px)"
            );

        if (
            finePointer.matches &&
            !reducedMotion
        ) {

            const cursorGlow =
                document.getElementById(
                    "cursorGlow"
                ) ||
                document.createElement("div");

            if (!cursorGlow.id) {

                cursorGlow.id =
                    "cursorGlow";

                cursorGlow.className =
                    "cursor-glow";

                document.body.appendChild(
                    cursorGlow
                );
            }

            cursorGlow.setAttribute(
                "aria-hidden",
                "true"
            );

            let mouseX = 0;
            let mouseY = 0;

            let glowX = 0;
            let glowY = 0;

            document.addEventListener(
                "mousemove",
                event => {

                    mouseX =
                        event.clientX;

                    mouseY =
                        event.clientY;
                },
                { passive: true }
            );

            function animateCursor() {

                glowX +=
                    (mouseX - glowX) *
                    0.12;

                glowY +=
                    (mouseY - glowY) *
                    0.12;

                cursorGlow.style.transform =
                    `translate3d(
                        ${glowX}px,
                        ${glowY}px,
                        0
                    )`;

                requestAnimationFrame(
                    animateCursor
                );
            }

            animateCursor();
        }


        /* =================================================
           27. BUTTON RIPPLE
           ================================================= */

        document
            .querySelectorAll(
                ".btn-primary, " +
                ".btn-outline, " +
                ".form-submit, " +
                ".nav-cta"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    event => {

                        if (reducedMotion) {
                            return;
                        }

                        const rect =
                            button.getBoundingClientRect();

                        const ripple =
                            document.createElement(
                                "span"
                            );

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
                            `${event.clientX -
                                rect.left -
                                size / 2}px`;

                        ripple.style.top =
                            `${event.clientY -
                                rect.top -
                                size / 2}px`;

                        button.appendChild(
                            ripple
                        );

                        setTimeout(() => {

                            if (
                                ripple &&
                                ripple.parentNode
                            ) {
                                ripple.remove();
                            }

                        }, 700);
                    }
                );
            });


        /* =================================================
           28. PROFILE IMAGE FALLBACK
           ================================================= */

        const profileImg =
            document.querySelector(
                ".profile-image img"
            );

        if (profileImg) {

            profileImg.addEventListener(
                "error",
                () => {

                    console.warn(
                        "profile.jpg could not be loaded."
                    );

                    profileImg.style.display =
                        "none";

                    if (
                        profileImg.parentElement
                    ) {

                        profileImg.parentElement
                            .classList.add(
                                "image-missing"
                            );
                    }
                }
            );
        }


        /* =================================================
           29. CURRENT YEAR
           ================================================= */

        document
            .querySelectorAll(
                "#currentYear, .current-year"
            )
            .forEach(element => {

                element.textContent =
                    new Date()
                        .getFullYear();
            });


        /* =================================================
           30. REDUCED MOTION
           ================================================= */

        if (reducedMotion) {

            document.documentElement.classList.add(
                "reduced-motion"
            );

            revealImmediately();

            chartBars.forEach(bar => {
                bar.classList.add(
                    "chart-visible"
                );
            });
        }


        /* =================================================
           31. RESIZE SAFETY
           ================================================= */

        let resizeTimer = null;

        window.addEventListener(
            "resize",
            () => {

                clearTimeout(
                    resizeTimer
                );

                resizeTimer =
                    setTimeout(() => {

                        updateNavbar();
                        updateScrollProgress();
                        updateActiveNavigation();

                    }, 150);
            },
            { passive: true }
        );


        /* =================================================
           32. PAGE READY
           ================================================= */

        body.classList.add(
            "portfolio-ready"
        );

        console.log(
            "Muhammad Abbas Portfolio loaded successfully."
        );

    });

})();
