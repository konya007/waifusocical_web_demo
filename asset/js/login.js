const rootLogin = document.querySelector(":root")
const trans = document.getElementById("scroll-box")
const forgetAccBtn = document.getElementById("createAcc")
const backLogin = document.getElementById("backLogin")

const logUname = document.getElementById("login-un")
const logPass = document.getElementById("login-pw")

const conformBtn = document.getElementsByClassName("Btn")
const creName = document.getElementById("login-cre-name")
const creUname = document.getElementById("login-cre-un")
const crePw = document.getElementById("cre-pw")
const crePw2 = document.getElementById("cre-pw2")
const noice = document.getElementsByClassName("noice")
const bg = document.getElementById("bg-login").getElementsByTagName("img")

const imgBg = ["/asset/img/bg-login/1.png", "/asset/img/bg-login/2.png", "/asset/img/bg-login/3.png", "/asset/img/bg-login/4.png", "/asset/img/bg-login/5.png"]



//backgrond
var posImg = Math.floor(Math.random() * imgBg.length)
var pic2 = true
var secordTime = 0
bg[0].src = imgBg[posImg]
posImg++
if (posImg >= imgBg.length) {
    posImg = 0;
}
bg[1].src = imgBg[posImg]
var secord = setInterval(() => {
        secordTime++;
        if (secordTime >= 6) {
            secordTime = 0
            if (pic2 == true) {
                bg[1].style.opacity = 0
                setTimeout(() => {
                    posImg++;
                    if (posImg >= imgBg.length) {
                        posImg = 0;
                    }

                    bg[1].src = imgBg[posImg]
                    pic2 = false
                }, 600)
            } else {
                bg[1].style.opacity = 1
                setTimeout(() => {
                    posImg++;
                    if (posImg + 1 >= imgBg.length) {
                        posImg = 0;
                    }
                    bg[0].src = imgBg[posImg]
                    pic2 = true
                }, 600)
            }
        }

    }, 1000)
    //login
forgetAccBtn.onclick = () => {
    trans.style.translate = "-370px 0"
    rootLogin.style.setProperty("--heightLoginBox", "310px")
}
backLogin.onclick = () => {
    trans.style.translate = "none"
    rootLogin.style.setProperty("--heightLoginBox", "240px")

}

//TAO TAI KHOAN
var waitCre = false
conformBtn[1].onclick = async() => {
        if (waitCre == false) {
            var aouth = true
            var myJson = await getAPILogin(1)
            if (creName.value.trim() == "" || creUname.value.trim() == "" || crePw.value.trim() == "" || crePw2.value.trim() == "") {
                noice[1].innerText = "Vui lòng ghi đủ thông tin!"
                aouth = false
            }
            if (aouth == true) {
                if (creUname.value.trim().length < 6) {
                    noice[1].innerText = "Username ít nhất 6 ký tự!"
                    aouth = false
                }
            }
            if (aouth == true) {
                if (crePw.value.trim().length < 8) {
                    noice[1].innerText = "Mật khẩu nên ít nhất 8 ký tự!"
                    aouth = false
                }
            }
            if (aouth == true) {
                if (crePw.value.trim() != crePw2.value.trim()) {
                    noice[1].innerText = "2 mật khẩu không khớp!"
                    aouth = false
                }
            }
            if (aouth == true && myJson.length > 0) {
                for (let i = 0; i < myJson.length; i++) {
                    if (myJson[i]["username"] == creUname.value.trim()) {
                        noice[1].innerText = "Username đã dùng, vui lòng đổi username khác!"
                        aouth = false
                        break
                    }
                }
            }
            if (aouth == true) {
                noice[1].style.color = "#00ff8c"
                noice[1].innerText = "Tạo tài khoản thành công!"
                var postJson = {
                    "name": creName.value.trim(),
                    "username": creUname.value.trim(),
                    "pass": crePw.value.trim(),
                }
                getAPILogin(2, postJson)
                console.log("OK")
                waitCre = true

                setTimeout(() => {
                    backLogin.onclick()
                    logUname.value = creUname.value.trim()
                }, 3000)
            }
        } else {
            noice[1].innerText = "Đã tạo tài khoản, vui lòng quay lại đăng nhập!"
        }
    }
    //Đăng nhập
var waitLog = false

conformBtn[0].onclick = async() => {
    if (waitLog == false) {
        if (logUname.value == "" || logPass.value == "") {
            noice[0].innerText = "Vui lòng nhập đủ thông tin!"
        } else {
            var myJson = await getAPILogin(1)
            if (myJson.length <= 0) {
                noice[0].innerText = "Chưa có tài khoản nào được tạo!"
            } else {
                for (let i = 0; i < myJson.length; i++) {
                    if (myJson[i]["username"] == logUname.value.trim() && myJson[i]["pass"] == logPass.value.trim()) {
                        var localJson = {
                            "name": myJson[i]["name"],
                            "username": myJson[i]["username"]
                        }
                        localJson = JSON.stringify(localJson)
                        localStorage.setItem("info", localJson)
                        waitLog = true
                        setTimeout(() => {
                            noice[0].style.color = "#00ff8c"
                            noice[0].innerText = "Đăng nhập thành công!"
                            window.location("/feed.html")
                        }, 1000)
                    }
                }
            }
        }
    }
}

// Tạo token
//function makeToken()

async function getAPILogin(type, x) {
    var value
    if (type == 1) {
        await fetch("https://643266e9d0127730d2d1bce8.mockapi.io/a1/", {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        }).then(res => res.json()).then(data => {
            value = data
        })
    }
    if (type == 2) {
        await fetch("https://643266e9d0127730d2d1bce8.mockapi.io/a1/", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(x)
        }).then(res => res.json()).then(data => {
            value = data
        })
    }
    if (type == 3) {
        await fetch(`https://643266e9d0127730d2d1bce8.mockapi.io/a1/${x}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            value = data
        })
    }
    return value

}