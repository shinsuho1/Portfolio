const sections = document.querySelectorAll("section");
const section_arr = Array.from(sections);
const main_section = document.querySelector(".main");
const header = document.querySelector("header");

let posArr = [];

setTimeout(() => {
    main_section.classList.add("on");
}, 700);

setTimeout(()=>{
    header.classList.add("on");
},200);

setPos();

function setPos(){
    for(let el of section_arr){
        posArr.push(el.offsetTop)
    }
}

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    console.log(scroll);
    section_arr.map((el,index)=>{
        if(scroll >= posArr[index]-400){
            section_arr[index].classList.add("on");
        }
        // if(scroll)
    });
});