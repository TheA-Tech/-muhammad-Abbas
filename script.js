/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* =========================================
   SCROLL PROGRESS
========================================= */

const scrollProgress =
    document.getElementById("scrollProgress");

function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    if (scrollProgress) {

        scrollProgress.style.width =
            percentage + "%";

    }

}

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

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


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   TYPING / SCROLLING TEXT ANIMATION
========================================= */

const typingElement =
    document.querySelector(".typing-text");

const titles = [
    "Finance & Accounts",
    "Business Operations",
    "Digital Systems",
    "Excel & Reporting",
    "ERP & Business Management",
    "Data & Digital Solutions"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeTitle() {

    if (!typingElement) {
        return;
    }


    const currentTitle =
        titles[titleIndex];


    if (!deleting) {

        characterIndex++;

        typingElement.textContent =
            currentTitle.substring(
                0,
                characterIndex
            );


        if (
            characterIndex >=
            currentTitle.length
        ) {

            deleting = true;

            setTimeout(
                typeTitle,
                1600
            );

            return;

        }


    } else {

        characterIndex--;

        typingElement.textContent =
            currentTitle.substring(
                0,
                characterIndex
            );


        if (characterIndex <= 0) {

            deleting = false;

            titleIndex =
                (titleIndex + 1) %
                titles.length;

        }

    }


    const speed =
        deleting ? 45 : 85;

    setTimeout(
        typeTitle,
        speed
    );

}


setTimeout(
    typeTitle,
    700
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-menu a[href^='#']"
    );


const navObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const id =
                        entry.target.getAttribute(
                            "id"
                        );


                    navLinks.forEach(link => {

                        link.classList.remove(
                            "current"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) === "#" + id
                        ) {

                            link.classList.add(
                                "current"
                            );

                        }

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
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


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                !name ||
                !email ||
                !message
            ) {

                return;

            }


            const subject =
                encodeURIComponent(
                    "Portfolio Contact - " +
                    name
                );


            const body =
                encodeURIComponent(
                    "Name: " +
                    name +
                    "\n\n" +
                    "Email: " +
                    email +
                    "\n\n" +
                    "Message:\n" +
                    message
                );


            window.location.href =
                "mailto:abbasnazeer098@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;

        }
    );

}


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (
    heroVisual &&
    window.matchMedia(
        "(min-width: 761px)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) /
                60;


            const y =
                (window.innerHeight / 2 -
                    event.clientY) /
                60;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            navMenu &&
            menuToggle &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove(
                "active"
            );

        }

    }
);
