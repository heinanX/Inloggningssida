function init() {
    if (localStorage.getItem("Active", JSON.stringify(userLoggedin))) {
        loginSuccess()
    }
}

let userLoggedin = "true"
init()

let users = [
    {
        username: "fredrik",
        password: "12345"
    },
    {
        username: "Linda",
        password: "hej"
    },
    {
        username: "joe",
        password: "Doeman1"
    }
]

/*  --------local storage stuffs */

localStorage.setItem("user", JSON.stringify(users))


/* this gets the value from inside my input fields */
function login() {
    let username = document.getElementById("uName").value
    let password = document.getElementById("uPassword").value

    for(i = 0; i < users.length; i++) {
        if(username == users[i].username && users[i].password == password) {
        /* console.log(username + " you're logged in") */
        loginSuccess()
        return
        }
    }
    alert("wrong login")
}

function loginSuccess() {
    document.getElementById("login--box").style.display = "none"
    document.getElementById("loggedIn").style.display = "block"
    document.getElementById("login-link").style.display = "none"
    document.getElementById("logOut-link").style.display = "block"

    localStorage.setItem("Active", JSON.stringify(userLoggedin))

}

/* ---------------> show greeting */
init()

/* ----------------- toggle between create account & Login form*/

function loginForm() {
    document.getElementById("login--box").style.display = "block"
    document.getElementById("new--user--box").style.display = "none"
}

function newUserForm() {
    document.getElementById("login--box").style.display = "none"
    document.getElementById("new--user--box").style.display = "block"
}


/* ------------------  Create new user */
function newAccountBtn() {
    let newUserName = document.getElementById("newUName").value
    let newPassword = document.getElementById("newUPassword").value

    let createUser = {
        username: newUserName,
        password: newPassword
    }

/*     for(i = 0; i < users.length; i++) {
        if(NewUserName == users[i].username) {
            alert("that name is taken")
            return
        }
    } */
    users.push(createUser)
    localStorage.setItem("NewUser", JSON.stringify(createUser))
}

/* ---------------- log out */
function logOut() {
    loginForm()
    document.getElementById("loggedIn").style.display = "none"
    document.getElementById("login-link").style.display = "block"
    document.getElementById("logOut-link").style.display = "none"

    localStorage.removeItem("Active", JSON.stringify(userLoggedin))
}