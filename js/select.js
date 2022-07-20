let person = JSON.parse (localStorage.getItem('Registration'))
    
let link = document.getElementById('linkCPF')
link.innerHTML = `<a href="./users/${person.username}.html"><button class="btn btn-primary medio" type="submit"><h4>Minha Carteirinha</h4></button></a>`


let boasVindas = document.getElementById('boasVindas')
boasVindas.textContent = `Seja bem-vindo(a) ${person.name}`