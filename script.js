/* =========================================================
   MUHAMMAD ABBAS PORTFOLIO
   INTERACTIONS & ANIMATIONS
========================================================= */


/* =========================================================
   01. PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initScrollReveal();

    initScrollProgress();

    initMobileMenu();

    initActiveNavigation();

    initSmoothLinks();

    initCardTilt();

});


/* =========================================================
   02. SCROLL REVEAL
========================================================= */

function initScrollReveal() {

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}


/* =========================================================
   03. SCROLL PROGRESS
========================================================= */

function initScrollProgress() {

    const progressBar =
        document.getElementById("scrollProgress");


    if (!progressBar) {
        return;
    }


    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight
            - window.innerHeight;


        if (documentHeight <= 0) {

            progressBar.style.width = "0%";

            return;

        }


        const progress =
            (scrollTop / documentHeight) * 100;


        progressBar.style.width =
            progress + "%";

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );


    updateProgress();

}


/* =========================================================
   04. MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuButton =
        document.getElementById(
            "mobileMenuButton"
        );


    const navMenu =
        document.getElementById(
            "navMenu"
        );


    if (!menuButton || !navMenu) {
        return;
    }


    menuButton.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("open");

        }
    );


    const navLinks =
        navMenu.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    });

}


/* =========================================================
   05. ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveLink() {

        const scrollPosition =
            window.scrollY + 180;


        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    sectionId;

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove(
                "active"
            );


            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink,
        { passive: true }
    );


    updateActiveLink();

}


/* =========================================================
   06. SMOOTH ANCHOR LINKS
========================================================= */

function initSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

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


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbarHeight =
                    document.querySelector(
                        ".navbar"
                    )?.offsetHeight || 0;


                const targetPosition =
                    target.offsetTop
                    - navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });

}


/* =========================================================
   07. CARD TILT EFFECT
========================================================= */

function initCardTilt() {

    const cards =
        document.querySelectorAll(
            ".main-card"
        );


    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        return;

    }


    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY)
                    / 25;


                const rotateY =
                    (centerX - x)
                    / 25;


                card.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     scale(1.02)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "rotate(3deg)";

            }
        );

    });

}


/* =========================================================
   08. PARALLAX HERO BACKGROUND
========================================================= */

window.addEventListener(
    "scroll",
    function () {

        const circles =
            document.querySelectorAll(
                ".hero-circle"
            );


        const scrollY =
            window.scrollY;


        circles.forEach(
            function (circle, index) {

                const speed =
                    index === 0
                        ? 0.08
                        : 0.14;


                circle.style.transform =
                    `translateY(${scrollY * speed}px)`;

            }
        );

    },
    { passive: true }
);


/* =========================================================
   09. PROJECT HOVER EFFECT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const projectCards =
            document.querySelectorAll(
                ".project-card"
            );


        projectCards.forEach(
            function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        card.style.transition =
                            "transform 0.4s ease";

                    }
                );

            }
        );

    }
);


/* =========================================================
   10. ESC KEY CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        const navMenu =
            document.getElementById(
                "navMenu"
            );


        if (navMenu) {

            navMenu.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================================
   11. CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(
        ".footer p"
    );


if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Muhammad Abbas`;

}


/* =========================================================
   12. PAGE READY
========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
