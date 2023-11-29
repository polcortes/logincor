document.addEventListener('deviceready', onDeviceReady, false);

let users = [
    { 
        username: 'Pol', 
        pass: '1234' 
    },
    {
        username: 'Erik',
        pass: '12345'
    },
    {
        username: 'Enric',
        pass: '123456'
    }
];

function onDeviceReady() {
    const loginButt = document.querySelector(".login button");
    loginButt.addEventListener('click', () => {
        const username = document.querySelector(".login input[type='text']").value;
        const pass = document.querySelector(".login input[type='password']").value;
        const infoLogin = document.getElementById("info-login");

        let isRegistered = users.filter((user) => user.username === username && user.pass === pass);

        if (isRegistered.length > 0) infoLogin.innerText = `¡Hola, ${username}!`;
        else infoLogin.innerText = `Dades incorrectes...`;
    });

    const registButt = document.querySelector(".register button");
    registButt.addEventListener('click', () => {
        const username = document.querySelector(".register input[type='text']").value;
        const pass1 = document.getElementById("pass1").value;
        const pass2 = document.getElementById("pass2").value;
        const infoRegist = document.getElementById("info-register");

        let isRegistered = users.filter((user) => user.username === username && user.pass === pass1);

        if (isRegistered.length > 0) infoRegist.innerText = `Aquest usuari ja existeix... Prova amb un d'altre.`;
        else if (pass1 === pass2) {
            infoRegist.innerText = `¡Benvingut, ${username}!`;
            users.push({username: username, pass: pass1});
        } else {
            infoRegist.innerText = `Les contrassenyes no coincideixen...`;
        }
    });
}