/* =========================================================
   MUHAMMAD ABBAS PORTFOLIO
   Interactive JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       PAGE LOADING
    ========================= */

    document.body.classList.add("page-loaded");



    /* =========================
       MOBILE MENU
    ========================= */

    const mobileMenuButton =
        document.querySelector(".mobile-menu-button");

    const navMenu =
        document.querySelector(".nav-menu");


    if (mobileMenuButton && navMenu) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("open");

            }
        );

    }


    /* Close mobile menu after clicking a link */

    const navLinks =
        document.querySelectorAll(".nav-menu a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("open");

            }
        );

    });



    /* =========================
       SMOOTH SCROLL
    ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

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

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });



    /* =========================
       REVEAL ANIMATIONS
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(element);

        }
    );



    /* =========================
       THEA BOOKS MENU
    ========================= */

    const theaMenuItems =
        document.querySelectorAll(
            ".thea-menu-item"
        );


    const theaTopbarTitle =
        document.querySelector(
            ".thea-topbar h4"
        );


    theaMenuItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {


                    /* Remove active */

                    theaMenuItems.forEach(
                        function (menuItem) {

                            menuItem.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Add active */

                    this.classList.add(
                        "active"
                    );


                    /* Change dashboard title */

                    if (theaTopbarTitle) {

                        theaTopbarTitle.textContent =
                            this.dataset.page ||
                            "Dashboard";

                    }


                    /* Small animation */

                    const dashboard =
                        document.querySelector(
                            ".thea-dashboard"
                        );


                    if (dashboard) {

                        dashboard.classList.remove(
                            "thea-page-change"
                        );


                        void dashboard.offsetWidth;


                        dashboard.classList.add(
                            "thea-page-change"
                        );

                    }

                }
            );

        }
    );



    /* =========================
       THEA WORKFLOW
    ========================= */

    const workflowSteps =
        document.querySelectorAll(
            ".workflow-step"
        );


    const workflowTitle =
        document.getElementById(
            "workflowTitle"
        );


    const workflowDescription =
        document.getElementById(
            "workflowDescription"
        );


    const workflowIcon =
        document.querySelector(
            ".workflow-icon"
        );


    const workflowData = {


        setup: {

            title: "Company Setup",

            description:
                "Start by defining the business profile, owner information, contact details and currency used by the system.",

            icon: "◈"

        },


        customers: {

            title: "Customers",

            description:
                "Store customer information and keep track of customer-related sales and outstanding balances.",

            icon: "◎"

        },


        products: {

            title: "Products & Inventory",

            description:
                "Maintain product records, pricing and stock information so the business can monitor inventory.",

            icon: "▤"

        },


        sales: {

            title: "Sales & Invoices",

            description:
                "Create sales invoices, record transactions and organize customer sales information.",

            icon: "↗"

        },


        purchases: {

            title: "Purchases",

            description:
                "Record purchases from vendors and connect purchasing activity with inventory and payable records.",

            icon: "↙"

        },


        expenses: {

            title: "Expenses",

            description:
                "Record business expenses such as rent, utilities, salaries, transport and other operating costs.",

            icon: "₨"

        },


        accounting: {

            title: "Accounting",

            description:
                "Bring sales, purchases and expenses together to organize financial records and business performance.",

            icon: "◫"

        },


        reports: {

            title: "Reports",

            description:
                "Convert business records into summaries and visual reports that can support management decisions.",

            icon: "◩"

        }

    };


    workflowSteps.forEach(
        function (step) {

            step.addEventListener(
                "click",
                function () {


                    /* Remove active */

                    workflowSteps.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Add active */

                    this.classList.add(
                        "active"
                    );


                    const key =
                        this.dataset.workflow;


                    const data =
                        workflowData[key];


                    if (!data) {
                        return;
                    }


                    if (workflowTitle) {

                        workflowTitle.textContent =
                            data.title;

                    }


                    if (workflowDescription) {

                        workflowDescription.textContent =
                            data.description;

                    }


                    if (workflowIcon) {

                        workflowIcon.textContent =
                            data.icon;

                    }


                    /* Detail animation */

                    const detail =
                        document.querySelector(
                            ".workflow-detail"
                        );


                    if (detail) {

                        detail.classList.remove(
                            "workflow-update"
                        );


                        void detail.offsetWidth;


                        detail.classList.add(
                            "workflow-update"
                        );

                    }

                }
            );

        }
    );



    /* =========================
       THEA DASHBOARD CHART
    ========================= */

    const chartBars =
        document.querySelectorAll(
            ".thea-bars div"
        );


    function animateChart() {

        chartBars.forEach(
            function (bar, index) {

                const height =
                    bar.dataset.height ||
                    50;


                setTimeout(
                    function () {

                        bar.style.height =
                            height + "%";

                    },
                    index * 120
                );

            }
        );

    }


    const chart =
        document.querySelector(
            ".thea-chart"
        );


    if (chart) {

        const chartObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                animateChart();

                                chartObserver.unobserve(
                                    chart
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.35
                }
            );


        chartObserver.observe(chart);

    }



    /* =========================
       HERO VISUAL PARALLAX
    ========================= */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        heroVisual &&
        window.matchMedia(
            "(min-width: 801px)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const moveX =
                    (x - centerX) /
                    30;


                const moveY =
                    (y - centerY) /
                    30;


                const circle =
                    heroVisual.querySelector(
                        ".hero-circle"
                    );


                if (circle) {

                    circle.style.transform =
                        `translate(${moveX}px, ${moveY}px)`;

                }

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            function () {

                const circle =
                    heroVisual.querySelector(
                        ".hero-circle"
                    );


                if (circle) {

                    circle.style.transform =
                        "";

                }

            }
        );

    }



    /* =========================
       SKILL CARD TILT
    ========================= */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    if (
                        window.innerWidth < 801
                    ) {
                        return;
                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        (x - rect.width / 2) /
                        30;


                    const rotateX =
                        -(y - rect.height / 2) /
                        30;


                    card.style.transform =
                        `perspective(700px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-7px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform =
                        "";

                }
            );

        }
    );



    /* =========================
       PROJECT CARD EFFECT
    ========================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    this.classList.add(
                        "project-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    this.classList.remove(
                        "project-hover"
                    );

                }
            );

        }
    );



    /* =========================
       CONTACT FORM
       Opens user's email application
    ========================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formStatus =
        document.getElementById(
            "formStatus"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "contactName"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "contactEmail"
                    ).value.trim();


                const subject =
                    document.getElementById(
                        "contactSubject"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "contactMessage"
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Please complete all fields.";

                    }

                    return;

                }


                const emailBody =
                    `Hello Muhammad Abbas,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from Muhammad Abbas Portfolio.`;


                const mailtoURL =
                    "mailto:abbasnazeer098@gmail.com" +
                    "?subject=" +
                    encodeURIComponent(
                        subject
                    ) +
                    "&body=" +
                    encodeURIComponent(
                        emailBody
                    );


                if (formStatus) {

                    formStatus.textContent =
                        "Opening your email application...";

                }


                window.location.href =
                    mailtoURL;

            }
        );

    }



    /* =========================
       BUTTON CLICK EFFECT
    ========================= */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    this.classList.add(
                        "button-clicked"
                    );


                    setTimeout(
                        () => {

                            this.classList.remove(
                                "button-clicked"
                            );

                        },
                        250
                    );

                }
            );

        }
    );



    /* =========================
       FOOTER YEAR
    ========================= */

    const footerYear =
        document.getElementById(
            "footerYear"
        );


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }



    /* =========================
       SCROLL ACTIVE NAV
    ========================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    function updateActiveNav() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "nav-active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "nav-active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();



    /* =========================
       SCROLL PROGRESS
    ========================= */

    const progressBar =
        document.createElement(
            "div"
        );


    progressBar.className =
        "scroll-progress";


    document.body.appendChild(
        progressBar
    );


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) *
                  100
                : 0;


        progressBar.style.width =
            percentage + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );


    updateScrollProgress();



    /* =========================
       RESIZE
    ========================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 800 &&
                navMenu
            ) {

                navMenu.classList.remove(
                    "open"
                );

            }

        }
    );


});
