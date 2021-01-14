function sendEmail() {
    let inputFields = document.getElementsByClassName("control")
    let arrayOfInfo = {
        "firstName": inputFields[0].children[0].value,
        "lastName": inputFields[1].children[0].value,
        "email": inputFields[2].children[0].value,
        "message": inputFields[3].children[0].value
    }
    let {firstName, lastName, email, message} = arrayOfInfo

    let body = message + "\n Sent from " + email
    console.log(body)
    window.open(`mailto:clinscott@oxy.edu?subject=${"Message from " + firstName + " " + lastName}&body=${body}`);
}

