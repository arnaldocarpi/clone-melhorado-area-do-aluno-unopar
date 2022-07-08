const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('username');
    const value = username.value;

    if(value === "48151134836" || value === "481.511.348-36") {
        window.location.href = "/Selecionar.html"
    } else {
        const error = document.getElementById('MensagemError')
        error.className ='erroCPF'
    }

})

const name = document.getElementById('nameP')