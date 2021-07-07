let icons = document.querySelectorAll('.nav ul li a i')
let home = document.title
try {
    let btn = document.querySelector("button[type=submit]")
    if (btn) {
        icons[2].innerHTML = '.'
    }
} catch (err) {

}

if (home == 'Home') {
    icons[0].innerHTML = '.'
}

console.log(btn)