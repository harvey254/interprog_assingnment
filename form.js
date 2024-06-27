function displayMessage() {
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var message = "";

    if (age < 18) {
        alert(message = "Hi " + username + ", you are a minor!")
    } else if (age >= 18 && age <= 65) {
        alert(message = "Hello " + username + ", you are an adult!")
    } else if (age > 65) {
        alert(message = "Greetings " + username + ", you are a senior!")
    } else {
        alert(message = "Please enter a valid age.")
    }
}