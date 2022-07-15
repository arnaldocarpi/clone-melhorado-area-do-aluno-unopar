

    const form = document.getElementById('form')
        form.addEventListener('submit', (e) => {

        e.preventDefault()

        const persons = [
            {
                name: "Gutemberg de Oliveira",
                genre: "masculine",
                username: "gutemberg.oliveira",
            },
            {
                name: "Arnaldo Carpi",
                genre: "masculine",
                username: "arnaldo.carpi",
            },
            {
                name: "Carlos Alberto",
                genre: "masculine",
                username: "carlos.alberto",
            }
        ]

        const username = document.getElementById('username');
        const value = username.value;
            
            let cpfValit = {
                name: "",
                genre: "",
                username: ""
            }

            persons.forEach((item) =>{
                if(value === item.username) {
                    cpfValit = {
                        name: item.name,
                        genre: item.genre,
                        username: item.username
                    }
                }
        })
        
        if(value === cpfValit.username && value !== "") {
            const error = document.getElementById('MensagemError')
            window.location.href = "./html/select.html"
            error.textContent = " "
        } 
        
        if (value !== cpfValit.username) {
            const error = document.getElementById('MensagemError')
            error.textContent = "Usuario invalido"
            error.className ='erroCPF'
        }   
        
        if (value === "") {
            const error = document.getElementById('MensagemError')
            error.textContent = "Insira seu usuario"
            error.className ='erroCPF'
        }   
            
            localStorage.setItem('Person', JSON.stringify(cpfValit))
        })