let rise = document.querySelector('.rise')
function openh() {
    if (rise.style.display === 'block') {

        rise.style.display = 'none'
        return 
    } 

    rise.style.display = "block"
}

 


const cb = document.querySelector('.checkbox')
const lp = document.querySelector(".loginpage")
const remember=document.querySelector("forgot")
cb.addEventListener('change',() => { 
    lp.style.backgroundColor=cb.checked==true ?'white':'white'
    
})

const USERNAME = 'krishna'
const PASSWORD = 'krishna'
function login(){
    console.log('fjsdlkfjskl')
    let username=document.querySelector('.username')
    let password=document.querySelector('.password')

    if (! username.value || ! password.value) {
        alert("Username or password missing")
        return
    }

    if (username.value === USERNAME && password.value === PASSWORD) {
        window.location.href = "/dashboard"
    }


    
}

function signup () {

}

document.querySelector('.lbtn').addEventListener('click', login)

document.querySelector('.btn').addEventListener('click', openh)