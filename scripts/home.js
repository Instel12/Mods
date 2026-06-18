const messages = [
    "Wsp?",
    "Modding is cool.",
    "Cheating is mean.",
    "My cat is a dog.",
    "You're genuinly valued.",
]

document.getElementsByClassName("shortdescription")[0].textContent = messages[Math.floor(Math.random() * messages.length)];