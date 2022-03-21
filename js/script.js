window.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { img: "/js/img/IMAGE-1.png", title: "woods", type: "photography" },
        {
            img: "/js/img/IMAGE-2.png",
            title: "woods",
            type: ["website", "photo"],
        },
        { img: "/js/img/IMAGE-3.png", title: "woods", type: "photography" },
        { img: "/js/img/IMAGE-4.png", title: "woods", type: "photography" },
        { img: "/js/img/IMAGE-5.png", title: "woods", type: "photography" },
        { img: "/js/img/IMAGE-6.png", title: "woods", type: "photography" },
        { img: "/js/img/IMAGE-7.png", title: "woods", type: "photography" },
        { img: "/js/img/IMAGE-8.png", title: "woods", type: "photography" },
        { img: "/js/img/IMAGE.png", title: "woods", type: "photography" },
    ];

    const getProjects = new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(projects);
        }, 1200);
    });

    const projectCardTemplate = document.querySelector(
        "[data-project-template]"
    );
    const projectCardContainer = document.querySelector(
        "[data-projects-container]"
    );
    getProjects.then((data) => {
        data.forEach((proj) => {
            const card =
                projectCardTemplate.content.cloneNode(true).children[0];
            const img = card.querySelector("[data-project-image]");
            const name = card.querySelector("[data-project-name]");
            const type = card.querySelector("[data-project-type]");
            img.src = proj.img;
            name.textContent = proj.title;
            if (proj.type instanceof Array) {
                type.textContent = proj.type.join(" • ");
            } else {
                type.textContent = proj.type;
            }
            projectCardContainer.append(card);
        });

        const cardItems = document.querySelectorAll(".projects__item");
        document.addEventListener("scroll", () => {
            if (window.pageYOffset >= 800) {
                cardItems.forEach((item) => {
                    item.style.animationName = "project-appear";
                    item.style.animationFillMode = "forwards";
                });
            }
        });
        const projectsArr = document.querySelectorAll(".projects__item");
        for (let i = 0; i < 9; i++) {
            if (i >= 3) projectsArr[i].style.display = "none";
        }
        const loadProjectsButton = document.querySelector(".load__projects");
        loadProjectsButton.addEventListener("click", () => {
            projectsArr.forEach((proj) => {
                if (proj.style.display === "none") {
                    proj.style.display = "block";
                    loadProjectsButton.style.opacity = 0;
                    loadProjectsButton.style.cursor = "unset";
                }
            });
        });
    });
});
