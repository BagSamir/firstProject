const addForm = document.getElementById("addForm")
const roles = document.getElementById("rolesEdit")

addForm.addEventListener("submit", async (event) => {
    event.preventDefault()


    let role = "";
        if (roles.value === "ADMIN") {
            role = "ROLE_ADMIN"
        } else if (roles.value === "USER") {
            role = "ROLE_USER"
        }

    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        role: role
    }


    console.log(user)
    await sendDataForm(user)
})

async function sendDataForm(user) {
    await fetch("/api/admin", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
}