// slider(article)
const slider = document.querySelector("#slider");
// title(h1,h2)
const title = document.querySelector("#title");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let enableClick = true;

const icons = document.querySelectorAll(".icons>a");
const icons_arr = Array.from(icons);
const icon_p = document.querySelectorAll(".icons>p");


init();

next.addEventListener("click", (e) => {
    e.preventDefault();

    if (enableClick) {
        nextSlide();
        nextSlide_title();
        enableClick = false;
    }
    
});

prev.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (enableClick) {
        prevSlide();
        prevSlide_title();
        enableClick = false
    }
});
icons_arr.map((el,index)=>{
    icons[index].addEventListener("click",(e)=>{
        e.preventDefault();
        const site = icon_p[index].innerHTML;
        if(confirm(`${site}`)){
            const link = icons_arr[index].getAttribute("href");
            location.href=link;
        }
    });
});

function init() {
    slider.style.left = "-100%";
    slider.prepend(slider.lastElementChild);

    title.style.left = "-100%";
    title.prepend(title.lastElementChild);
}

function nextSlide() {
    new Anim(slider, {
        prop: "left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            slider.style.left = "-100%";
            slider.append(slider.firstElementChild);
            enableClick = true;
        }
    });
}

function nextSlide_title() {
    new Anim(title, {
        prop: "left",
        value: "-200%",
        duration: 1000,
        callback: () => {
            title.style.left = "-100%";
            title.append(title.firstElementChild);
            enableClick = true;
        }
    });
}

function prevSlide() {
    new Anim(slider, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            slider.style.left = "-100%";
            slider.prepend(slider.lastElementChild);
            enableClick = true;
        }
    }); 
}

function prevSlide_title() {
    new Anim(title, {
        prop: "left",
        value: "0%",
        duration: 1000,
        callback: () => {
            title.style.left = "-100%";
            title.prepend(title.lastElementChild);
            enableClick = true;
        }
    }); 
}


const articles = document.querySelectorAll("first>.inner>article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");


for (const el of articles) {

    el.addEventListener("click", (e) => {
        
        //클릭한 article(e.cureentTarget)의 내용(h2,p,video)을 변수에 담는다
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vid = e.currentTarget.querySelector("video").getAttribute("src");
        console.log(vid);

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vid);
        //setAttribute(무엇을,무엇으로) 속성값을 교체하는 메소드
        

        aside.classList.add("on");
        //classList라는 객체는 class에 관련된 모든 메소드들이 담긴 객체이다
        aside.querySelector("video").play();
    })
}

close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();

})




