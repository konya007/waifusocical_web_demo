const tme = document.getElementsByClassName("dark-light")
var n = true
tme[0].onclick = function() {
    this.classList.toggle('dark-white-w')
    console.log("ok")
    if (n == true) {
        light()
        n = false
    } else {
        dark()
        n = true
    }
}

var vRoot = document.documentElement

function light() {

    vRoot.style.setProperty('--bg', '#ddd')
    vRoot.style.setProperty('--bg-dock', '#eeeeee')
    vRoot.style.setProperty('--actice-dock', '#d5d5d5')
    vRoot.style.setProperty('--dock-hvr', '#e3e3e3')
    vRoot.style.setProperty('--bg-lr', '#fafafa')
    vRoot.style.setProperty('--border', '#eeeeee')
    vRoot.style.setProperty('--menu-hvr', '#e1e1e1')
    vRoot.style.setProperty('--box', '#eee')
    vRoot.style.setProperty('--box-hvr', '#ccc')
    vRoot.style.setProperty('--bg-box', '#efefef')
    vRoot.style.setProperty('--bg-box2', '#fff')
    vRoot.style.setProperty('--text', '#0a0a0a')
}

function dark() {

    vRoot.style.setProperty('--bg', '#2e2e2e')
    vRoot.style.setProperty('--bg-dock', '#313131')
    vRoot.style.setProperty('--actice-dock', '#3c3c3c')
    vRoot.style.setProperty('--dock-hvr', '#525252')
    vRoot.style.setProperty('--bg-lr', '#353535')
    vRoot.style.setProperty('--border', '#404040')
    vRoot.style.setProperty('--menu-hvr', '#525252')
    vRoot.style.setProperty('--box', '#4f4f4f')
    vRoot.style.setProperty('--box-hvr', '#2d2d2d')
    vRoot.style.setProperty('--bg-box', '#3f3f3f')
    vRoot.style.setProperty('--bg-box2', '#3d3d3d')
    vRoot.style.setProperty('--text', '#fff')
}