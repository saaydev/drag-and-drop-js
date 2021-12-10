
const item = document.querySelector(".item")
const sectionHeight = document.querySelector("section").clientHeight;

document.querySelector("html").addEventListener("mouseleave", (event) => {
    console.log(event)
})

document.querySelector("section").addEventListener("mousemove", (event) => {
    item.style.position = "absolute"

    let a  = sectionHeight - event.pageY
    a = a / sectionHeight * 100
    a = a.toFixed(2)
    a = parseFloat(a)
    // a = 100.0 - a
    // console.log(a)
    // a *= 100
    // a = 100 - a
    // console.log(a)
    // a = a.toFixed(2)
    // console.log(a)
    // console.log(a + "%")
    // console.log(a / sectionHeight * 100)
    // Math.floor()
    console.log(a)
    if(sectionHeight >= event.pageY - sectionHeight && a > 0){
        item.style.top = a + "%"
    }
})

document.querySelectorAll(".item").forEach(e => {
    e.addEventListener("mousedown", (event) => {
        let element = event.target
    })
})