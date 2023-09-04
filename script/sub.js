const article = document.querySelectorAll("article");
const article_arr = Array.from(article);
const lis = document.querySelectorAll(".first>nav>ul>li");
const main = document.querySelector(".content");
console.log(lis);
let posArr = [];

setInterval(() => {
    main.classList.add("atvie");
    article[0].classList.add("on_1");
    article[1].classList.add("on_1");

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
            article_arr[index].classList.add("on_1");
        }
    });
});

