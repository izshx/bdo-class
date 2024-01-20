let sectionBdoContainer = document.querySelector(".bdo-container");

const bdoClasses = [
    {
        name: "Warrior",
        img: "./img/warrior.png"
    },
    {
        name: "Ranger",
        img: "./img/ranger.png"
    },
    {
        name: "Berserker",
        img: "./img/berserker.png"
    },
    {
        name: "Sorceress",
        img: "./img/sorceress.png"
    }
];


bdoClasses.forEach(bdoClass => {

    sectionBdoContainer.innerHTML += `
        <div>
            <img src="${bdoClass.img}" alt="${bdoClass.name}">
            <h2> ${bdoClass.name} </h2>
        </div>
    `;

});

