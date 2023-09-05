const download = document.querySelector(".download");
const section = document.querySelectorAll("section");

const section_arr = Array.from(section);
let posArr = [];

setTimeout(() => {
    download.classList.add("active");
}, 300);

setPos()
function setPos(){
    for(let el of section_arr){
        posArr.push(el.offsetTop);
    }
}

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    console.log(scroll);
    section_arr.map((el,index)=>{
        if(scroll >= posArr[index]-200){
            section_arr[index].classList.add("active");
        }
        if(scroll >= 1270){
            section_arr[2].classList.add("active");
        }
    });
});

for(let el of section){
    el.addEventListener("click",()=>{
        aside.classList.add("on");
    });
}