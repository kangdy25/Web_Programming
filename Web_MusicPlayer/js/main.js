const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length - 1;
let i = 0;

for (let el of lists) {
    let pic = el.querySelector(".pic")
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++;
}