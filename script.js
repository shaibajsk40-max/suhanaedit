/* =========================================
   SUHANA EDITOR
   PROFESSIONAL WEBSITE JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       NAVBAR SCROLL
    ===================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(8,6,11,.92)";
            navbar.style.boxShadow = "0 15px 50px rgba(0,0,0,.25)";
        } else {
            navbar.style.background = "rgba(10,8,13,.72)";
            navbar.style.boxShadow = "none";
        }

    });


    /* =====================================
       SMOOTH NAVIGATION
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-grid, .portfolio-card, .price-card, .process-card, .contact-box, .instagram-section"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    });


    /* =====================================
       VIDEO SMART PLAY / PAUSE
    ===================================== */

    const videos = document.querySelectorAll("video");

    const videoObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                const video = entry.target;

                if (!entry.isIntersecting) {

                    if (!video.paused) {
                        video.pause();
                    }

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    videos.forEach(video => {

        videoObserver.observe(video);

        /*
         * IMPORTANT:
         * No muted attribute is added.
         *
         * Therefore the visitor can hear
         * the original video audio using
         * the browser's volume button.
         */

        video.addEventListener("play", () => {

            videos.forEach(otherVideo => {

                if (
                    otherVideo !== video &&
                    !otherVideo.paused
                ) {
                    otherVideo.pause();
                }

            });

        });

    });


    /* =====================================
       TOP BUTTON
    ===================================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================
       CARD HOVER EFFECT
    ===================================== */

    const cards = document.querySelectorAll(
        ".portfolio-card, .price-card, .process-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - .5) * -4;

            const rotateY =
                ((x / rect.width) - .5) * 4;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* =====================================
       MAGNETIC BUTTON
    ===================================== */

    const buttons = document.querySelectorAll(
        ".main-btn, .outline-btn, .nav-btn, .instagram-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX - rect.left - rect.width / 2;

            const y =
                e.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * .08}px, ${y * .08}px)`;

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0,0)";

        });

    });


    /* =====================================
       DYNAMIC DROPS
    ===================================== */

    const background =
        document.querySelector(".bg-effects");

    setInterval(() => {

        const drop =
            document.createElement("span");

        drop.className = "drop";

        drop.style.left =
            Math.random() * 100 + "%";

        drop.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        background.appendChild(drop);

        setTimeout(() => {

            drop.remove();

        }, 10000);

    }, 900);


    /* =====================================
       VIDEO QUALITY / AUDIO CONTROL
    ===================================== */

    videos.forEach(video => {

        /*
         * Keep original audio.
         */
        video.muted = true;

        /*
         * Browser native controls provide:
         *
         * ▶ Play
         * 🔊 Volume
         * 🔇 Mute
         * Timeline
         * Fullscreen
         *
         * No custom control is forced,
         * keeping the player professional.
         */

        video.setAttribute("controls", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("preload", "metadata");

    });


    console.log(
        "✨ Suhana Editor — Professional Video Editing Website"
    );

});