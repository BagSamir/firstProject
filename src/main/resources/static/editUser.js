const editModal = document.getElementById('ModalEdit')
editModal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget

    const userId = button.getAttribute('data-bs-userId')
    const fistName = button.getAttribute('data-bs-userFirstName')
    const lastName = button.getAttribute('data-bs-userLastName')
    const age = button.getAttribute('data-bs-userAge')
    const userEmail = button.getAttribute('data-bs-userEmail')

    const modalUserId = editModal.querySelector('#userId')
    const modalUserFirstName = editModal.querySelector('#first_mame')
    const modalUserLastName = editModal.querySelector('#last_name')
    const modalUserAge = editModal.querySelector('#user_age')
    const modalUserEmail = editModal.querySelector('#userEmail')


    modalUserId.value = userId
    modalUserFirstName.value = fistName
    modalUserLastName.value = lastName
    modalUserAge.value = age
    modalUserEmail.value = userEmail
})

const formEdit = document.getElementById("formEdit");
formEdit.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formEdit);
    const object = {
        role: ""
    };

    formData.forEach((value, key) => {
            if (key === "rolesId"){

                const roleId = value.split(" ")[0];
                const roleName = value.split(" ")[1];
                // const role = {
                //     id : roleId,
                //     role : roleName
                // };
                object.role = roleName
                // object.role.push(role);
            } else {
                object[key] = value;
            }
        });
    console.log(object)

        fetch("api/admin", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(object)
        })
            .then(() => getUsers());
        $("#ModalEdit").modal("hide");

        formEdit.reset();
})