/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        const mobileMenuButton =
            document.getElementById(
                "mobileMenuButton"
            );

        const navMenu =
            document.getElementById(
                "navMenu"
            );


        if (
            mobileMenuButton &&
            navMenu
        ) {

            mobileMenuButton.addEventListener(
                "click",
                function () {

                    navMenu.classList.toggle(
                        "open"
                    );

                }
            );


            const navLinks =
                navMenu.querySelectorAll(
                    "a"
                );


            navLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navMenu.classList.remove(
                                "open"
                            );

                        }
                    );

                }
            );

        }



        /* =====================================================
           CLOSE MENU WHEN CLICKING OUTSIDE
        ===================================================== */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navMenu ||
                    !mobileMenuButton
                ) {
                    return;
                }


                const clickedInsideMenu =
                    navMenu.contains(
                        event.target
                    );


                const clickedButton =
                    mobileMenuButton.contains(
                        event.target
                    );


                if (
                    !clickedInsideMenu &&
                    !clickedButton
                ) {

                    navMenu.classList.remove(
                        "open"
                    );

                }

            }
        );



        /* =====================================================
           SMOOTH SCROLL
        ===================================================== */

        const anchorLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        anchorLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            this.getAttribute(
                                "href"
                            );


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


                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }
                );

            }
        );



        /* =====================================================
           REVEAL ANIMATION
        ===================================================== */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const revealObserver =
                new IntersectionObserver(
                    function (
                        entries,
                        observer
                    ) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "visible"
                                    );

                                    observer.unobserve(
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

                    revealObserver.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }



        /* =====================================================
           THEA BOOKS SIDEBAR
        ===================================================== */

        const theaMenuItems =
            document.querySelectorAll(
                ".thea-menu-item"
            );


        const theaTitle =
            document.querySelector(
                ".thea-topbar h4"
            );


        theaMenuItems.forEach(
            function (item) {

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


                        this.classList.add(
                            "active"
                        );


                        if (theaTitle) {

                            theaTitle.textContent =
                                this.dataset.page;

                        }

                    }
                );

            }
        );



        /* =====================================================
           THEA WORKFLOW
        ===================================================== */

        const workflowData = {

            setup: {
                number: "01",
                title: "Company Setup",
                description:
                    "Create a company profile and organize the basic business information required for the system."
            },

            customers: {
                number: "02",
                title: "Customers",
                description:
                    "Manage customer information, balances, transactions and sales relationships."
            },

            products: {
                number: "03",
                title: "Products",
                description:
                    "Organize products, pricing, stock information and inventory-related data."
            },

            sales: {
                number: "04",
                title: "Sales",
                description:
                    "Create invoices, record sales and monitor customer receivables and payments."
            },

            purchases: {
                number: "05",
                title: "Purchases",
                description:
                    "Record purchases and supplier-related transactions while tracking business costs."
            },

            expenses: {
                number: "06",
                title: "Expenses",
                description:
                    "Track business expenses and organize outgoing transactions for reporting."
            },

            accounting: {
                number: "07",
                title: "Accounting",
                description:
                    "Bring business transactions together to support financial understanding and records."
            },

            reports: {
                number: "08",
                title: "Reports",
                description:
                    "Turn business data into useful summaries, dashboards and management reports."
            }

        };


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


        workflowSteps.forEach(
            function (step) {

                step.addEventListener(
                    "click",
                    function () {

                        workflowSteps.forEach(
                            function (otherStep) {

                                otherStep.classList.remove(
                                    "active"
                                );

                            }
                        );


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
                                data.number;

                        }

                    }
                );

            }
        );



        /* =====================================================
           THEA CHART ANIMATION
        ===================================================== */

        const chartBars =
            document.querySelectorAll(
                ".thea-chart div"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const chartObserver =
                new IntersectionObserver(
                    function (
                        entries,
                        observer
                    ) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    chartBars.forEach(
                                        function (bar) {

                                            const height =
                                                bar.dataset.height;

                                            bar.style.height =
                                                height + "%";

                                        }
                                    );


                                    observer.disconnect();

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.25
                    }
                );


            const chart =
                document.querySelector(
                    ".thea-chart"
                );


            if (chart) {

                chartObserver.observe(
                    chart
                );

            }

        } else {

            chartBars.forEach(
                function (bar) {

                    bar.style.height =
                        bar.dataset.height + "%";

                }
            );

        }



        /* =====================================================
           CONTACT FORM
        ===================================================== */

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
                            "name"
                        ).value.trim();


                    const email =
                        document.getElementById(
                            "email"
                        ).value.trim();


                    const subject =
                        document.getElementById(
                            "subject"
                        ).value.trim();


                    const message =
                        document.getElementById(
                            "message"
                        ).value.trim();


                    if (
                        !name ||
                        !email ||
                        !subject ||
                        !message
                    ) {

                        if (formStatus) {

                            formStatus.textContent =
                                "Please fill in all fields.";

                        }

                        return;

                    }


                    const emailBody =
                        "Name: " +
                        name +
                        "\n\n" +

                        "Email: " +
                        email +
                        "\n\n" +

                        "Message:\n" +
                        message;


                    const mailto =
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
                        mailto;

                }
            );

        }



        /* =====================================================
           BUTTON CLICK EFFECT
        ===================================================== */

        const buttons =
            document.querySelectorAll(
                ".btn"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        this.style.transform =
                            "scale(0.98)";


                        setTimeout(
                            () => {

                                this.style.transform =
                                    "";

                            },
                            120
                        );

                    }
                );

            }
        );



        /* =====================================================
           FOOTER YEAR
        ===================================================== */

        const currentYear =
            document.getElementById(
                "currentYear"
            );


        if (currentYear) {

            currentYear.textContent =
                new Date().getFullYear();

        }



        /* =====================================================
           ACTIVE NAVIGATION
        ===================================================== */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const navigationLinks =
            document.querySelectorAll(
                '.nav-menu a[href^="#"]'
            );


        function updateActiveNavigation() {

            let currentSection = "";


            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop - 140;


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


                    const target =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        target ===
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
            updateActiveNavigation
        );


        updateActiveNavigation();



        /* =====================================================
           SCROLL PROGRESS
        ===================================================== */

        const progressBar =
            document.createElement(
                "div"
            );


        progressBar.style.position =
            "fixed";

        progressBar.style.top =
            "0";

        progressBar.style.left =
            "0";

        progressBar.style.height =
            "2px";

        progressBar.style.width =
            "0%";

        progressBar.style.zIndex =
            "2000";

        progressBar.style.background =
            "linear-gradient(90deg, #2f81ff, #00e5ff)";

        progressBar.style.pointerEvents =
            "none";


        document.body.appendChild(
            progressBar
        );


        function updateProgress() {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;


            if (
                documentHeight <= 0
            ) {

                progressBar.style.width =
                    "0%";

                return;

            }


            const percentage =
                (
                    scrollTop /
                    documentHeight
                ) *
                100;


            progressBar.style.width =
                Math.min(
                    percentage,
                    100
                ) + "%";

        }


        window.addEventListener(
            "scroll",
            updateProgress
        );


        updateProgress();



        /* =====================================================
           ESCAPE KEY CLOSES MOBILE MENU
        ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    navMenu
                ) {

                    navMenu.classList.remove(
                        "open"
                    );

                }

            }
        );


    }
);
