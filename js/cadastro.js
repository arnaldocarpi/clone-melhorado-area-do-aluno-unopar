
const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('name')
    const nameValue = name.value;

    const birthDate = document.getElementById('birthDate')
    const birthDateValue = birthDate.value;
    
    const email = document.getElementById('email')
    const emailValue = email.value;
    
    const user = document.getElementById('user')
    const userValue = user.value;
    
    const password = document.getElementById('password')
    const passwordValue = password.value;
    
    const confirmPassword = document.getElementById('confirmPassword')
    const confirmPasswordValue = confirmPassword.value;

    const checkBox = document.getElementById('checkbox')

    let person = {
        name: "",
        birthDate: "",
        email: "",
        user: "",
        password: "",
    };

    let checkoutName = false
    let checkoutBirthDate = false
    let checkoutEmail = false
    let checkoutUser = false
    let checkoutPassword = false
    let checkoutConfirmPassword = false
    let checkoutCheckBox = false

    // Name *Verificar formato de nome e sobrenome*****

    function validatorName(name) {
        const regExpName = /^[A-z]+\ [A-z]+\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?$/
        return regExpName.test(name)
    }

    if(validatorName(nameValue) === false && nameValue !== "") {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.add("error")
        
        const erroName = document.getElementById('erroName')
        erroName.textContent = 'Insira nome e sobrenome'

    } else if(nameValue === "") {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.add("error")

        const erroName= document.getElementById('erroName')
        erroName.textContent = 'Preencha o campo'
    } else {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.remove("error")

        checkoutName = true
    }

    // BirthDate *Verificar formato de data*****

    if(birthDateValue.length < 10 && birthDateValue !== "") {
        const birthDateDIV = document.getElementById('birthDateDIV')
        birthDateDIV.classList.add("error")
        
        const erroBirthDate = document.getElementById('erroBirthDate')
        erroBirthDate.textContent = 'Insira uma data valida'

    } else if(birthDateValue === "") {
        const birthDateDIV = document.getElementById('birthDateDIV')
        birthDateDIV.classList.add("error")

        const erroBirthDate= document.getElementById('erroBirthDate')
        erroBirthDate.textContent = 'Preencha o campo'
    } else {
        const birthDateDIV = document.getElementById('birthDateDIV')
        birthDateDIV.classList.remove("error")

        checkoutBirthDate = true
    }

    // Email *Verificar formato de Email / Verificar campo vazio*****

    if(emailValue === "" || emailValue.length < 6 || emailValue.search("@") == -1 || emailValue.indexOf(".") < 1 || emailValue.indexOf(" ") > 0) {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("error")
        
        const erroEmail = document.getElementById('erroEmail')
        erroEmail.textContent = 'Email invalido'

    } else {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.remove("error")

        checkoutEmail = true
    }

    // User

    if(userValue.length < 4 && userValue !== "") {
        const userDIV = document.getElementById('userDIV')
        userDIV.classList.add("error")
        
        const userName = document.getElementById('erroUser')
        userName.textContent = 'Insira mais de 4 caracteres'

    } else if(userValue === "") {
        const userDIV = document.getElementById('userDIV')
        userDIV.classList.add("error")

        const erroUser = document.getElementById('erroUser')
        erroUser.textContent = 'Preencha o campo'
    } else {
        const userDIV = document.getElementById('userDIV')
        userDIV.classList.remove("error")

        checkoutUser = true
    }

    // Password

    if(passwordValue.length < 8 && passwordValue !== "") {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.add("error")

        const erroPassword = document.getElementById('erroPassword')
        erroPassword.textContent = 'Insira mais de 7 caracteres'

    } else if(passwordValue === "") {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.add("error")

        const erroPassword = document.getElementById('erroPassword')
        erroPassword.textContent = 'Preencha o campo'
    } else {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.remove("error")

        checkoutPassword = true
    }

    // Confirm Pasword

    if(confirmPasswordValue !== passwordValue && confirmPasswordValue !== "") {
        const confirmPasswordDIV = document.getElementById('confirmPasswordDIV')
        confirmPasswordDIV.classList.add("error")

        const erroConfirmPassword = document.getElementById('erroConfirmPassword')
        erroConfirmPassword.textContent = 'As senhas não correspondem'

    } else if(confirmPasswordValue === "") {
        const confirmPasswordDIV = document.getElementById('confirmPasswordDIV')
        confirmPasswordDIV.classList.add("error")

        const erroConfirmPassword = document.getElementById('erroConfirmPassword')
        erroConfirmPassword.textContent = 'Preencha o campo'
    } else {
        const confirmPasswordDIV = document.getElementById('confirmPasswordDIV')
        confirmPasswordDIV.classList.remove("error")

        checkoutConfirmPassword = true
    }

    // CheckBox

    if(checkBox.checked) {
        checkoutCheckBox = true
    } else {
        const checkDIV = document.getElementById('checkDIV')
        checkDIV.classList.add("error")

        const erroCheck = document.getElementById('erroCheck')
        erroCheck.textContent = 'É necessario concordar com os termos de uso'
    }

    // Data sending

    if(checkoutName && checkoutBirthDate && checkoutEmail && checkoutUser && checkoutPassword && checkoutConfirmPassword && checkoutCheckBox) {
        
        person = {
            name: nameValue,
            birthDate: birthDateValue,
            email: emailValue,
            user: userValue,
            password: confirmPasswordValue,
        };
        
        localStorage.setItem('Registration', JSON.stringify(person))

        window.location.href = "../index.html"
    }

})
    