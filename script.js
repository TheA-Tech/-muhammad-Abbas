/* =========================================================
   MUHAMMAD ABBAS PORTFOLIO
   JAVASCRIPT
   Animations + Navigation + THEA Books Interaction
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PAGE LOAD
    ===================================================== */

    setTimeout(function () {
        document.body.classList.add("page-loaded");
    }, 100);


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileButton = document.querySelector(".mobile-menu-button");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileButton && navMenu) {

        mobileButton.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            mobileButton.classList.toggle("active");

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (mobileButton) {
                mobileButton.classList.remove("active");
            }

        });

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const progressBar = document.querySelector(".scroll-progress");

    function updateScrollProgress() {

        if (!progressBar) {
            return;
        }

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) {

            progressBar.style.width = "0%";

            return;
        }

        const progress =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width =
            Math.min(progress, 100) + "%";

    }

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(
            '.nav-menu a[href^="#"]'
        );


    function updateActiveNavigation() {

        if (!sections.length) {
            return;
        }

        const currentPosition =
            window.scrollY + 180;

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                currentPosition >= sectionTop &&
                currentPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            const linkTarget =
                link.getAttribute("href");

            link.classList.remove("active");

            if (
                currentSection &&
                linkTarget === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
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


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       VISUAL CARD 3D EFFECT
    ===================================================== */

    const visualCard =
        document.querySelector(".visual-card");


    if (
        visualCard &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        visualCard.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    visualCard.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    ((x - centerX) / centerX) * 5;

                const rotateX =
                    ((centerY - y) / centerY) * 5;


                visualCard.style.transform =
                    "perspective(1000px) " +
                    "rotateY(" + (-8 + rotateY) + "deg) " +
                    "rotateX(" + (3 + rotateX) + "deg)";

            }
        );


        visualCard.addEventListener(
            "mouseleave",
            function () {

                visualCard.style.transform =
                    "perspective(1000px) " +
                    "rotateY(-8deg) " +
                    "rotateX(3deg)";

            }
        );

    }


    /* =====================================================
       THEA BOOKS DASHBOARD MENU
    ===================================================== */

    const theaMenuItems =
        document.querySelectorAll(
            ".thea-menu-item"
        );


    const theaDashboardTitle =
        document.querySelector(
            ".thea-topbar h4"
        );


    const theaPageLabel =
        document.querySelector(
            ".thea-page-label"
        );


    theaMenuItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                theaMenuItems.forEach(
                    function (menuItem) {

                        menuItem.classList.remove(
                            "active"
                        );

                    }
                );


                item.classList.add("active");


                const menuName =
                    item.getAttribute("data-page");


                if (
                    menuName &&
                    theaDashboardTitle
                ) {

                    theaDashboardTitle.textContent =
                        menuName;

                }


                if (
                    menuName &&
                    theaPageLabel
                ) {

                    theaPageLabel.textContent =
                        "THEA BOOKS / " +
                        menuName.toUpperCase();

                }

            }
        );

    });


    /* =====================================================
       THEA BOOKS WORKFLOW
    ===================================================== */

    const workflowSteps =
        document.querySelectorAll(
            ".thea-workflow-step"
        );


    const workflowTitle =
        document.querySelector(
            ".thea-workflow-detail h3"
        );


    const workflowText =
        document.querySelector(
            ".thea-workflow-detail p"
        );


    const workflowLabel =
        document.querySelector(
            ".thea-detail-label"
        );


    const workflowData = {

        setup: {
            label: "01 / COMPANY SETUP",
            title: "Company Setup",
            text:
                "Create a company profile with business name, owner information, contact details, address and currency. This becomes the foundation of the accounting system."
        },

        customers: {
            label: "02 / CUSTOMERS & VENDORS",
            title: "Customers & Vendors",
            text:
                "Store customer and vendor information in one place so sales, purchases, receivables and payables can be organized efficiently."
        },

        products: {
            label: "03 / PRODUCTS & INVENTORY",
            title: "Products & Inventory",
            text:
                "Add products, manage prices and track inventory information so the business can maintain a clear view of available stock."
        },

        sales: {
            label: "04 / SALES",
            title: "Sales & Invoices",
            text:
                "Create sales invoices, record customer transactions and track paid and unpaid sales. Invoice numbers can be generated automatically."
        },

        purchases: {
            label: "05 / PURCHASES",
            title: "Purchases",
            text:
                "Record purchases from vendors and maintain purchase information that contributes to inventory, expenses and payable tracking."
        },

        expenses: {
            label: "06 / EXPENSES",
            title: "Expenses",
            text:
                "Record business expenses and use the information to understand operating costs and calculate business performance."
        },

        accounting: {
            label: "07 / ACCOUNTING",
            title: "Accounting",
            text:
                "Bring financial transactions together so sales, purchases, expenses, receivables and payables can be reviewed from an accounting perspective."
        },

        reports: {
            label: "08 / REPORTS",
            title: "Reports",
            text:
                "Use organized financial and business information to review sales, expenses, purchases, inventory and overall business performance."
        }

    };


    workflowSteps.forEach(function (step) {

        step.addEventListener(
            "click",
            function () {

                workflowSteps.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                step.classList.add("active");


                const workflowKey =
                    step.getAttribute(
                        "data-workflow"
                    );


                const data =
                    workflowData[workflowKey];


                if (!data) {
                    return;
                }


                if (workflowLabel) {

                    workflowLabel.textContent =
                        data.label;

                }


                if (workflowTitle) {

                    workflowTitle.textContent =
                        data.title;

                }


                if (workflowText) {

                    workflowText.textContent =
                        data.text;

                }

            }
        );

    });


    /* =====================================================
       THEA BOOKS MODULE TABS
       Supports future interactive THEA section
    ===================================================== */

    const theaTabs =
        document.querySelectorAll(
            "[data-thea-tab]"
        );


    const theaPanels =
        document.querySelectorAll(
            "[data-thea-panel]"
        );


    function activateTheaTab(tabName) {

        theaTabs.forEach(function (tab) {

            tab.classList.toggle(
                "active",
                tab.getAttribute(
                    "data-thea-tab"
                ) === tabName
            );

        });


        theaPanels.forEach(function (panel) {

            panel.classList.toggle(
                "active",
                panel.getAttribute(
                    "data-thea-panel"
                ) === tabName
            );

        });

    }


    theaTabs.forEach(function (tab) {

        tab.addEventListener(
            "click",
            function () {

                const tabName =
                    tab.getAttribute(
                        "data-thea-tab"
                    );

                activateTheaTab(tabName);

            }
        );

    });


    /* =====================================================
       THEA DASHBOARD BAR ANIMATION
    ===================================================== */

    const chartBars =
        document.querySelectorAll(
            ".thea-bars div"
        );


    if (
        chartBars.length &&
        "IntersectionObserver" in window
    ) {

        const chartObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            const bars =
                                entry.target.querySelectorAll(
                                    ".thea-bars div"
                                );


                            bars.forEach(
                                function (bar, index) {

                                    const height =
                                        bar.getAttribute(
                                            "data-height"
                                        );


                                    if (height) {

                                        setTimeout(
                                            function () {

                                                bar.style.height =
                                                    height + "%";

                                            },
                                            index * 80
                                        );

                                    }

                                }
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.2
                }
            );


        const chart =
            document.querySelector(".thea-chart");


        if (chart) {

            chartObserver.observe(chart);

        }

    }


    /* =====================================================
       PROJECT CARD HOVER
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.classList.add("project-hover");

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });


    /* =====================================================
       BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".primary-button, .secondary-button, .nav-button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                button.classList.add(
                    "button-clicked"
                );


                setTimeout(function () {

                    button.classList.remove(
                        "button-clicked"
                    );

                }, 300);

            }
        );

    });


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const footerYear =
        document.getElementById(
            "footerYear"
        );


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       RESIZE HANDLER
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            updateScrollProgress();
            updateActiveNavigation();

        }
    );


});
