const modalDelete = document.getElementById("ModalDelete")

modalDelete.addEventListener("show.bs.modal", event => {

    const button = event.relatedTarget

    const userId = button.getAttribute('data-bs-userId')
    const fistName = button.getAttribute('data-bs-userFirstName')
    const lastName = button.getAttribute('data-bs-userLastName')
    const age = button.getAttribute('data-bs-userAge')
    const userEmail = button.getAttribute('data-bs-userEmail')

    const modalUserId = modalDelete.querySelector('#userIdDelete')
    const modalUserFirstName = modalDelete.querySelector('#first_mameDelete')
    const modalUserLastName = modalDelete.querySelector('#last_nameDelete')
    const modalUserAge = modalDelete.querySelector('#user_ageDelete')
    const modalUserEmail = modalDelete.querySelector('#userEmailDelete')

    modalUserId.value = userId
    modalUserFirstName.value = fistName
    modalUserLastName.value = lastName
    modalUserAge.value = age
    modalUserEmail.value = userEmail
})

const formDelete = document.getElementById('formDelete')
formDelete.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(formDelete);
    fetch("api/admin/"+formData.get("id"), {
        method: "DELETE"
    })
        .then(() => getUsers());
    $("#ModalDelete").modal("hide");
    formDelete.reset();
})


