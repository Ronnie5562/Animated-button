const btn = document.querySelector("[data-btn]");
btn.addEventListener('click', ()=>{
    btn.classList.add('animating')
})

let path = document.querySelector('path')
let strokeLength = path.getTotalLength()
console.log(strokeLength)