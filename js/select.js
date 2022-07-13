let person = JSON.parse (localStorage.getItem('Person'))
    
let link = document.getElementById('linkCPF')
link.innerHTML = `<a href="./html/${person.CPF}.html"><button class="btn btn-primary medio" type="submit"><h4>Minha Carteirinha</h4></button></a>`

