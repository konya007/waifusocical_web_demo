const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.onclick = () => {
    alertFilter.style.display = "flex"
    alertY.onclick = () => {

        alertY.onclick = undefined;
        alertN.onclick = undefined;
        localStorage.removeItem("info")
        window.location = "/login.html"
    }
    alertN.onclick = () => {
        alertFilter.style.display = "none"
        alertY.onclick = undefined
        alertN.onclick = undefined
    }
}