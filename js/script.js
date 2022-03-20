window.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { img: "./img/IMAGE-1.png", title: "woods", type: "photography" },
        {
            img: "./img/IMAGE-2.png",
            title: "woods",
            type: ["website", "photo"],
        },
        { img: "./img/IMAGE-3.png", title: "woods", type: "photography" },
        { img: "./img/IMAGE-4.png", title: "woods", type: "photography" },
        { img: "./img/IMAGE-5.png", title: "woods", type: "photography" },
        { img: "./img/IMAGE-6.png", title: "woods", type: "photography" },
        { img: "./img/IMAGE-7.png", title: "woods", type: "photography" },
        { img: "./img/IMAGE-8.png", title: "woods", type: "photography" },
        { img: "./img/IMAGE-9.png", title: "woods", type: "photography" },
    ];
    function getProjects() {
        setTimeout(() => {
            return new Promise();
        }, 1000);
    }

    const projectCardTemplate = document.querySelector(
        "[data-project-template]"
    );
    console.log(getProjects());
});
