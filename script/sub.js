const article = document.querySelectorAll("article");
const article_arr = Array.from(article);
const lis = document.querySelectorAll(".information>nav>ul>li");
const main = document.querySelector(".content");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");
const address = document.querySelector(".address");
// console.log(lis);
let posArr = [];

setInterval(() => {
    main.classList.add("atvie");
    article[0].classList.add("first");
    article[1].classList.add("first");

}, 300);


setPos()
function setPos(){
    for(let el of article_arr){
        posArr.push(el.offsetTop);
    }
}

window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    article_arr.map((el,index)=>{
        if(scroll >= posArr[index]-190){
            for(let i = 0; i<3;i++){
                lis[i].classList.remove("on");
                // article_arr[i].classList.remove("on");

            }
            lis[index].classList.add("on");
            // console.log(scroll);
            article_arr[index].classList.add("first");
        }
        if(scroll >= 600){
            article_arr[2].classList.add("first");
        }
    });
});

for(let el of article){
    el.addEventListener("click",(e)=>{
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let img = e.currentTarget.querySelector("img").getAttribute("src");
        console.log(img);
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("img").setAttribute("src", img);
        // aside.querySelector("img")
        aside.classList.add("on");
    });
}

close.addEventListener("click", () => {
    aside.classList.remove("on");
})

address.addEventListener("click",()=>{
    
});


