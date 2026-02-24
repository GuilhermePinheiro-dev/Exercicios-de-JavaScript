const toggle = document.getElementById("theme-toggle")
const body = document.body
const saveTheme = localStorage.getItem('theme')

if(saveTheme){
    body.classList.add(saveTheme)
    toggle.checked = true
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        body.classList.remove("dark")
        localStorage.removeItem('theme')
    }
})