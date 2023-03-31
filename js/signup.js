let wrong = document.querySelector(".wrong");
let success = document.querySelector(".success");


let signUp = document.getElementById("btn-signUp");

// empty array
let array = [];

if (localStorage.getItem("array")) {
    array = JSON.parse(localStorage.getItem("array"));
}

signUp.addEventListener("click", function(){

    let userName = document.getElementById("user-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (userName !== '' && email !== '' && password !== '' && confirmPassword !== '') {


        if (password === confirmPassword) {
            // object data
            const person = {
                "name": userName,
                "email": email,
                "password": password,
                "confirmPassword": confirmPassword
            };

            array.push(person);
            // add data to local storage
            addDataToLocalStorage(array)

            

            // is success
            success.style.transform = "translateX(0)";
            setTimeout(function () {
                success.style.transform = "translateX(-1000px)";
            }, 3000)

        } else {
            wrong.style.transform = "translateX(0)";
            setTimeout(function () {
                wrong.style.transform = "translateX(-1000px)";
            }, 3000)
        }
    }else {
        wrong.style.transform = "translateX(0)";
        setTimeout(function () {
            wrong.style.transform = "translateX(-1000px)";
        }, 3000)

        
    }
    // remove the input value  ??????????????????????????????????
    userName = '';
    email = '';
    password = '';
    confirmPassword = '';
})

// add data to local storage
function addDataToLocalStorage(array) {
    localStorage.setItem("array", JSON.stringify(array))
}