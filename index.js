

    const form = document.getElementById('form')
        form.addEventListener('submit', (e) => {

        e.preventDefault()

        const persons = [
            {
                name: "Gutemberg de Oliveira",
                genre: "masculine",
                CPF: "16740707723",
            },
            {
                name: "Arnaldo Carpi",
                genre: "masculine",
                CPF: "48151134836",
            },
            {
                name: "Carlos Alberto",
                genre: "masculine",
                CPF: "17625528766",
            }
        ]

        const username = document.getElementById('username');
        const value = username.value;
            
            let cpfValit = {
                name: "",
                genre: "",
                CPF: ""
            }
            
            persons.forEach((item) =>{
                if(value === item.CPF) {
                    cpfValit = {
                        name: item.name,
                        genre: item.genre,
                        CPF: item.CPF
                    }
                }
            })      
            
            if(value === cpfValit.CPF && value !== "") {
                window.location.href = "./Selecionar.html"
            } else {
                const error = document.getElementById('MensagemError')
                error.className ='erroCPF'
            }
    
        })