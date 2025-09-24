const navBtn = document.querySelector(".nav__btn");
const menuOpen = document.querySelector(".menu__open");
const menuClose = document.querySelector(".menu__close");
const navCon = document.querySelector(".nav__con")



const navItem = document.querySelectorAll(".nav__item");
let crewCon = document.querySelector(".crew__main__con")
let destCon = document.querySelector(".dest__main__con")
let techCon = document.querySelector(".tech__main__con")


navBtn.addEventListener("click", ()=>{
    if (navCon.classList.contains("nav__con--open")) {
        menuOpen.classList.remove("hide");
        menuClose.classList.add("hide");
        navCon.classList.remove("nav__con--open")
    } else {
        menuOpen.classList.add("hide")
        menuClose.classList.remove("hide")
        navCon.classList.add("nav__con--open")
    }
})

const loadJSON = async () => {

const response = await fetch('data.json');
if (!response.ok) throw new Error('Fetch failed');
return await response.json();

}

if (window.location.pathname === "/destination.html" || window.location.pathname === "/destination") {

async function initDisp() {
    
const data = await loadJSON();

let destIndex = 0;


const bindNavEvents = () => {

const destNav = document.querySelectorAll(".dest__nav__item");

    destNav.forEach((e, index)=>{
        e.addEventListener("click", ()=>{
            destIndex = index;
            showDest()
        })
    })
}

const showDest = () => {

let destination =  `

    <p class="intro__text"><span class="index">01</span>Pick your destination</p>
    <section class="dest__details">
    <div class="dest__img__con">
        <picture class="dest__image">
        <source srcset="${data.destinations[destIndex].images.webp}" type="image/webp">
        <img src="${data.destinations[destIndex].images.png}" alt="Image of ${data.destinations[destIndex].name}">
        </picture>      
    </div>
    <section class="dest__info">     
    <article class="dest__desc">
        <nav class="dest__nav">
        <ul class="dest__nav__con">
        ${data.destinations.map((item, index) => `<li class="dest__nav__item  ${index === destIndex ? 'dest__nav__item--active' : ''}">${item.name}</li>`).join(" ")   
        }
        </ul>
        </nav>
        <article class="dest__loc">
        <h1 class="loc__header">${data.destinations[destIndex].name}</h1>
        <p class="loc__desc">${data.destinations[destIndex].description}</p>
        </article>
        <article class="dest__specs">
        <div class="spec">
            <p class="spec__text">Avg. distance</p>
            <h2 class="spec__val">${data.destinations[destIndex].distance}</h2>
            </div>
            <div class="spec">
            <p class="spec__text">Est. travel time</p>
            <h2 class="spec__val">${data.destinations[destIndex].travel}</h2>
        </div>
        </article>
        </section>
    </article>
    </section>
`;

    destCon.innerHTML = destination ;
    bindNavEvents();
}

showDest()

}

initDisp();

}


if (window.location.pathname === "/crew.html" || window.location.pathname === "/crew") {

async function initDisp() {
    
const data = await loadJSON();

let crewIndex = 0;


const bindNavEvents = () => {

const crewNav = document.querySelectorAll(".crew__nav__item");

    crewNav.forEach((e, index)=>{
        e.addEventListener("click", ()=>{
            crewIndex = index;
            showCrew()
        })
    })
}

const showCrew = () => {

let crewNavList = []

for (let i = 0; i < 4; i++) {
    crewNavList.push(`<div class="crew__nav__item ${ i === crewIndex ? 'crew__nav__item--active' : ''} "></div>`)

}

let crew =  `
<section class="crew__dets__con">
    <p class="intro__text"><span class="index">02</span>Meet your crew</p>
    <section class="crew__dets">
    <article class="crew__detail">
        <div class="crew__det">
        <h2 class="crew__position">${data.crew[crewIndex].role}</h2>
        <h1 class="crew__name">${data.crew[crewIndex].name}</h1>
        <p class="crew__bio">${data.crew[crewIndex].bio}</p>
    </div>
        <nav class="crew__nav__con">
        ${crewNavList.join(" ")}
        </nav>
    </article>
    <article class="crew__img__con">
        <picture class="crew__img">
        <source srcset="${data.crew[crewIndex].images.webp}" type="image/webp">
        <img src="${data.crew[crewIndex].images.png}" alt="Image of ${data.crew[crewIndex].name}">
        </picture>
    </article>
    </section>
</section>
`;

    crewCon.innerHTML = crew ;
    bindNavEvents();
}

showCrew()

}

initDisp();

}



if (window.location.pathname === "/technology.html" || window.location.pathname === "/technology") {

async function initDisp() {

const data = await loadJSON();

let techIndex = 0;

const bindNavEvents = () => {

const techNav = document.querySelectorAll(".tech__nav__item");

    techNav.forEach((e, index)=>{
        e.addEventListener("click", ()=>{
            techIndex = index;
            showTech()
        })
    })
}

const showTech = () => {

let techNavList = []

for (let i = 0; i < 3; i++) {
    techNavList.push(`<div class="tech__nav__item ${ i === techIndex ? 'tech__nav__item--active' : ''} ">${i+1}</div>`)

}

let tech =  `
<section class="tech__con">
    <p class="intro__text tech__intro__text"><span class="index">03</span>Space launch 101</p>

    <section class="tech__dets__con">
        <div class="tech__img__con">
        <img src="${data.technology[techIndex].images.landscape.mobile}" class="mobile__img" alt="Image of a ${data.technology[techIndex].name}">
        <img src="${data.technology[techIndex].images.landscape.tablet}" class="tablet__img" alt="Image of a ${data.technology[techIndex].name}">
        <img src="${data.technology[techIndex].images.portrait}" class="desktop__img" alt="Image of a ${data.technology[techIndex].name}">
        </div>
        <section class="tech__dets">
        <nav class="tech__nav__con">
            ${techNavList.join(" ")}
            
        </nav>

        <section class="tech__details">
            <h2 class="tech__cat">The terminology...</h2>
            <h1 class="tech__name">${data.technology[techIndex].name}</h1>
            <p class="tech__desc">${data.technology[techIndex].description}</p>
        </section>
        </section>
    </section>
    </section>
`;

    techCon.innerHTML = tech ;
    bindNavEvents();
}

showTech()

}

initDisp();

}






