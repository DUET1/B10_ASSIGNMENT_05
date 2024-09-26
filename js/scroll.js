
        window.onscroll = function() {
            const navbar = document.getElementById("navbar");
            if (window.scrollY > 0) {
                navbar.classList.add("bg-opacity-80", "backdrop-blur-lg");
            } else {
                navbar.classList.remove("bg-opacity-80", "backdrop-blur-lg");
            }
        };
    