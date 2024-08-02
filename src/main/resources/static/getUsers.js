const usersTable = document.getElementById("usersTable");

function getUsers() {
    const response = fetch("/api/admin")
        .then(data => data.json())
        .then(res => replaceTable(res))
}

function replaceTable(users) {
    usersTable.innerHTML = ""
    users.forEach((users) => {
        let userRole = "";
        users.roles.forEach((role) => {
            userRole = role.name
        })
        const element = document.createElement("tr");

        let userRoles;
        element.innerHTML = `
            <th scope="row">${users.id}</th>
            <td>${users.firstName}</td>
            <td>${users.lastName}</td>
            <td>${users.age}</td>
            <td>${users.email}</td>
            <td>${userRole}</td>
            <td>
                <button type="button" class="btn btn-info text-white" 
                    data-bs-userId=${users.id}
                    data-bs-userFirstName=${users.firstName} 
                    data-bs-userLastName=${users.lastName} 
                    data-bs-userAge=${users.age} 
                    data-bs-userEmail=${users.email} 
                    data-bs-toggle="modal"
                    data-bs-target="#ModalEdit">Edit</button>
            </td>
            <td>
                <button type="button" class="btn btn-danger" 
                   data-bs-userId=${users.id}
                    data-bs-userFirstName=${users.firstName} 
                    data-bs-userLastName=${users.lastName} 
                    data-bs-userAge=${users.age} 
                    data-bs-userEmail=${users.email} 
                    data-bs-toggle="modal"
                    data-bs-target="#ModalDelete">Delete</button>
            </td>            
            `
        usersTable.append(element)
    })
}