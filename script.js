document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PAGE LOADED
    ===================================================== */

    document.body.classList.add("page-loaded");



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileButton =
        document.querySelector(".mobile-menu-button");

    const navMenu =
        document.querySelector(".nav-menu");


    if (mobileButton && navMenu) {

        mobileButton.addEventListener("click", () => {

            navMenu.classList.toggle("open");

        });


        document
            .querySelectorAll(".nav-menu a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navMenu.classList.remove("open");

                });

            });

    }



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            });

        });



    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const progress =
        document.getElementById("scrollProgress");


    function updateProgress() {

        if (!progress) return;


        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight
            - window.innerHeight;


        const percentage =
            pageHeight > 0
                ? (scrollTop / pageHeight) * 100
                : 0;


        progress.style.width =
            percentage + "%";

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );


    updateProgress();



    /* =====================================================
       ACTIVE NAV
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNav() {

        let current = "";


        sections.forEach(section => {

            const top =
                section.offsetTop - 150;

            if (window.scrollY >= top) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href")
                === "#" + current
            ) {

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
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

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


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       THEA BOOKS SIDEBAR
    ===================================================== */

    const theaMenuItems =
        document.querySelectorAll(
            ".thea-menu-item"
        );


    const theaPageTitle =
        document.querySelector(
            ".thea-topbar h4"
        );


    theaMenuItems.forEach(item => {

        item.addEventListener("click", () => {

            theaMenuItems.forEach(button => {

                button.classList.remove("active");

            });


            item.classList.add("active");


            if (theaPageTitle) {

                theaPageTitle.textContent =
                    item.dataset.page;

            }

        });

    });



    /* =====================================================
       THEA BOOKS WORKFLOW
    ===================================================== */

    const workflowButtons =
        document.querySelectorAll(
            ".workflow-step"
        );


    const workflowPanels =
        document.querySelectorAll(
            ".workflow-panel"
        );


    workflowButtons.forEach(button => {

        button.addEventListener("click", () => {

            const workflow =
                button.dataset.workflow;


            workflowButtons.forEach(item => {

                item.classList.remove("active");

            });


            workflowPanels.forEach(panel => {

                panel.classList.remove("active");

            });


            button.classList.add("active");


            const target =
                document.querySelector(
                    `[data-workflow-panel="${workflow}"]`
                );


            if (target) {

                target.classList.add("active");

            }

        });

    });



    /* =====================================================
       CONTACT FORM
       Opens user's default email application
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    const formMessage =
        document.getElementById("formMessage");


    /*
        IMPORTANT:

        Replace this with your actual email.

        Example:

        const businessEmail =
            "abbasnazeer098@gmail.com";
    */

    const businessEmail =
        "abbasnazeer098@gmail.com";


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const senderEmail =
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
                    !senderEmail ||
                    !subject ||
                    !message
                ) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please complete all fields.";

                    }

                    return;

                }


                const emailSubject =
                    encodeURIComponent(
                        subject
                    );


                const emailBody =
                    encodeURIComponent(

                        `Hello Muhammad,

Name: ${name}
Email: ${senderEmail}

Message:

${message}

Sent from the Muhammad Abbas portfolio website.`

                    );


                const mailto =
                    `mailto:${businessEmail}?subject=${emailSubject}&body=${emailBody}`;


                window.location.href =
                    mailto;


                if (formMessage) {

                    formMessage.textContent =
                        "Opening your email application...";

                }

            }
        );

    }



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
       PROJECT BUTTON FEEDBACK
    ===================================================== */

    document
        .querySelectorAll(".btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    button.classList.add(
                        "clicked"
                    );


                    setTimeout(() => {

                        button.classList.remove(
                            "clicked"
                        );

                    }, 250);

                }
            );

        });

});
