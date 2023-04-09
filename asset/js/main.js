const dock = document.getElementsByClassName("dock-bar")
const itemDock = dock[0].getElementsByClassName("box-dock")

//Alert
const alertFilter = document.getElementById("filterAlert")
const alertY = document.getElementById("alertYes")
const alertN = document.getElementById("alertNo")
const spaceMain = document.getElementById("feed-space")


const DOMfeed = document.getElementById("feedSence")
const DOMself = document.getElementById("selfSence")

DOMself.style.display = "none"

const DOMselfname = document.getElementById("infoMyselfName")
const DOMselfuname = document.getElementById("infoMyselfUname")

if (!localStorage.getItem("theme")) {
    localStorage.getItem("theme", "0")
}

DOMselfname.innerText = clientName
DOMselfuname.innerText = "@" + clientUname