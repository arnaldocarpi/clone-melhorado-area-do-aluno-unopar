let registration = JSON.parse (localStorage.getItem('Registration'))

    const form = document.getElementById('form')
        form.addEventListener('submit', (e) => {
        e.preventDefault()

        const username = document.getElementById('username');
        const usernameValue = username.value;

        const password = document.getElementById('password')
        const passwordValue = password.value;

        let checkoutUser = false
        let checkoutPassword = false
        
        // Input User
        if(usernameValue === registration.user && usernameValue !== "") {
            const userDIV = document.getElementById('userDIV')
            userDIV.classList.remove("error")

            checkoutUser = true
        } else if(usernameValue === "") {
            const userDIV = document.getElementById('userDIV')
            userDIV.classList.add("error")
            
            const userError = document.getElementById('userError')
            userError.textContent = 'Preencha o campo'
        } else {
            const userDIV = document.getElementById('userDIV')
            userDIV.classList.add("error")
            
            const userError = document.getElementById('userError')
            userError.textContent = 'Usuario invalido'
        }
    
        // Input Password
        if(passwordValue === registration.password && passwordValue !== "") {
            const passwordDIV = document.getElementById('passwordDIV')
            passwordDIV.classList.remove("error")

            checkoutPassword = true
        } else if(passwordValue === "") {
            const passwordDIV = document.getElementById('passwordDIV')
            passwordDIV.classList.add("error")
            
            const passwordError = document.getElementById('passwordError')
            passwordError.textContent = 'Preencha o campo'
        } else {
            const passwordDIV = document.getElementById('passwordDIV')
            passwordDIV.classList.add("error")
            
            const passwordError = document.getElementById('passwordError')
            passwordError.textContent = 'Senha invalida'
        } 

        // Authentication

        if(checkoutUser && checkoutPassword) {
            window.location.href = "../html/select.html"
        }
            
})