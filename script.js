let clicks = 0
let ac = 0
let cpc = 1
let maxcpc = 0
let maxac = 0

console.log("Game made by @yaml_u6")
console.log("Cheats: clicks = 1000000, cpc = 1000000, ac = 1000000 | execute in console below")

function clicked() {
    clicks = clicks + cpc
    document.querySelector(".disp").innerText = "Clicks: " + clicks
    document.querySelector(".btn").style = "background-color: white;"
    setTimeout(function() {
        document.querySelector(".btn").style = "background-color: beige;"
    }, 100)
}

function upg() {
    if (clicks < 10) {
        document.querySelector(".upg").style = "background-color: red;"
        setTimeout(function() {
            document.querySelector(".upg").style = "background-color: beige;"
        }, 500)
    }
    if (clicks > 9) {
        clicks = clicks - 10
        cpc = cpc + 1
        document.querySelector(".disp").innerText = "Clicks: " + clicks
        document.querySelector(".disp2").innerText = "Double Clicks: " + Number(cpc - 1)
        document.querySelector(".upg").style = "background-color: white;"
         setTimeout(function() {
            document.querySelector(".upg").style = "background-color: beige;"
        }, 100)
    }
}

function upg2() {
    if (clicks < 100) {
        document.querySelector(".upg2").style = "background-color: red;"
        setTimeout(function() {
            document.querySelector(".upg2").style = "background-color: beige;"
        }, 500)
    }
    if (clicks > 99) {
        clicks = clicks - 100
        ac = ac + 1
        cpc = cpc + 1
        document.querySelector(".disp").innerText = "Clicks: " + clicks
        document.querySelector(".disp3").innerText = "Auto Clickers: " + ac
        document.querySelector(".upg2").style = "background-color: white;"
         setTimeout(function() {
            document.querySelector(".upg2").style = "background-color: beige;"
        }, 100)
    }
}

setInterval(function() {
    clicks = clicks + ac
    document.querySelector(".disp").innerText = "Clicks: " + clicks
}, 1000)

function save() {
    localStorage.setItem("clicks", clicks)
    localStorage.setItem("csps", cpc)
    localStorage.setItem("acs", ac)
    document.querySelector(".save").innerText = "Saved"
    setTimeout(function() {
        document.querySelector(".save").innerText = "Save"
    }, 1000)
}

function load() {
    clicks = Number(localStorage.getItem("clicks"))
    ac = Number(localStorage.getItem("acs"))
    cpc = Number(localStorage.getItem("csps"))
    document.querySelector(".disp").innerText = "Clicks: " + clicks
    document.querySelector(".disp2").innerText = "Double Clicks: " + Number(cpc - 1)
    document.querySelector(".disp3").innerText = "Autoclickers: " + ac
    document.querySelector(".load").innerText = "Loaded"
    setTimeout(function() {
        document.querySelector(".load").innerText = "Load"
    }, 1000)
}

function spendall() {
    maxcpc = Math.floor(clicks / 10)
    cpc = cpc + maxcpc
    clicks = clicks - maxcpc * 10
    document.querySelector(".disp").innerText = "Clicks: " + clicks
    document.querySelector(".disp2").innerText = "Double Clicks: " + Number(cpc - 1)
}

function spendall2() {
    maxac = Math.floor(clicks / 100)
    ac = ac + maxac
    clicks = clicks - maxac * 100
    document.querySelector(".disp").innerText = "Clicks: " + clicks
    document.querySelector(".disp3").innerText = "Autoclickers: " + ac
}