const main = document.querySelector("main");
const btns = main.querySelectorAll("li");
const boxes = main.querySelectorAll("section");

const delay = convertSpeed(boxes[0]);
// 밀리세컨드 단위로 변경해야합니다 0.5 -> 500

// console.log(getComputedStyle(boxes[0])["transition-duration"])

btns.forEach((el, index)=>{
    el.addEventListener("click",()=>{
        !el.classList.contains("on") && active(index);
    })
})

function active(index){
    // 버튼에 대한 클래스 조정
    for(let el of btns) el.classList.remove("on");
    btns[index].classList.add("on");
    // section의 클래스 조정

    // upper클래스를 추적해서 upper클래스를 lower로 변경
    const prevSection = document.querySelector(".upper");
    prevSection.classList.remove("upper");
    prevSection.classList.add("lower");

    boxes[index].classList.add("upper");

    setTimeout(()=>{
        document.querySelector(".lower").classList.remove("lower");
    }, delay)

}

function convertSpeed(el){
    return parseFloat (getComputedStyle(el)["transitionDuration"]) * 1000;
    // 1000을 곱하는 이유는 밀리세컨드 단위로 변경을 해줘야 하기 때문이다
}