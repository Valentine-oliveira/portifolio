window.addEventListener('scroll', function(){
    let header= document.querySelector('#header')
    header.classList.toggle('role',window.scrollY > 40)
})