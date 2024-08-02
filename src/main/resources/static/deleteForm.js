const modalDelete = document.getElementById("deleteForm")


modalDelete.addEventListener("submit",  (event) => {
    event.preventDefault();

    console.log(document.getElementById("idDel"))
    console.log(event.target)
})


// async function deleteModel(userid) {
//     await fetch(`/api/admin/${userid}`, {
//         method: "DELETE"
//     })
// }


