let icons = document.querySelectorAll('.nav ul li a i')
let home = document.title
try {
    let btn = document.querySelector("button[type=submit]")
    if (btn) {
        icons[2].innerHTML = '.'
    }
} catch (err) {

}
const getWeb = ()=>{
    if(window.innerWidth>600){
        window.location.replace('/web.html')
        return
    }
    
    console.log(window.location.href+'web.html')
    return
}

if (home == 'Home') {
    icons[0].innerHTML = '.'
}

