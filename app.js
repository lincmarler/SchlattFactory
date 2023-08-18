const clickUpgrades = [
    {
        name: 'blicky',
        price: 1000,
        quantity: 0,
        multiplier: 1,
        value: 100
    },
    {
        name: 'juice',
        price: 5000,
        quantity: 0,
        multiplier: 0,
        value: 500
    }]

const autoUpgrades = [
    {
        name: 'spin',
        price: 10000,
        quantity: 0,
        value: 1000,
        multiplier: 10,
        multiplierStart: 0,
        displayPrice: 10
    },
    {
        name: 'pushin',
        price: 50000,
        quantity: 0,
        value: 40000,
        multiplier: 40,
        multiplierStart: 0,
        displayPrice: 50
    }
]

let money = 1000000
let clickMoney = 100
let blicky = clickUpgrades[0]
let juice = clickUpgrades[1]
let spin = autoUpgrades[0]
let pushin = autoUpgrades[1]

function totalClickNumber() {
    let totalBlick = blicky.value * blicky.quantity
    let totalJuice = juice.value * juice.quantity
    let finalClick = totalBlick += totalJuice += 100
    let clickAutoElem = document.getElementById('clickValue')
    clickAutoElem.innerText = `+$${finalClick}/click`
}

function totalAutoNumber() {
    let totalSpin = spin.quantity * spin.value
    let totalPush = pushin.quantity * pushin.value
    let finalAuto = totalSpin += totalPush
    let totalAutoElem = document.getElementById('autoValue')
    totalAutoElem.innerText = `$${finalAuto}/10s`
}



function addAutoSpinPrice() {
    if (money >= spin.price) {
        spin.price += 5000
        spin.displayPrice += 5
    }
    draw()
    console.log(spin)
}

function addAutoPushPrice() {
    if (money >= pushin.price) {
        pushin.price += 10000
        pushin.displayPrice += 10
    }
    console.log(pushin)
    draw()
}

function collectAuto() {
    let totalSpin = spin.quantity * spin.value
    let totalPush = pushin.quantity * pushin.value
    let finalAuto = totalSpin += totalPush
    money += finalAuto
    draw()
}
setInterval(collectAuto, 10000)

function getMoney() {
    money += clickMoney
    draw()
}

function buyBlicky() {
    if (money >= blicky.price) {
        money -= blicky.price
        blicky.quantity++
        blicky.multiplier++
        blicky.price += 100
        clickMoney += 100
    }
    console.log(blicky)
    totalClickNumber()
    draw()
}

function buyJuice() {
    if (money >= juice.price) {
        money -= juice.price
        juice.quantity++
        juice.multiplier += 5
        juice.price += 250
        clickMoney += 500
    }
    console.log(juice)
    totalClickNumber()
    draw()
}

function buyAuto(upgradeName) {
    let purchasedUpgrade = autoUpgrades.find(upgrade => upgrade.name == upgradeName)
    if (money >= purchasedUpgrade.price) {
        money -= purchasedUpgrade.price
        purchasedUpgrade.quantity++
        purchasedUpgrade.multiplierStart += purchasedUpgrade.multiplier
    }
    totalAutoNumber()
    draw()
}



function draw() {
    let totalElem = document.getElementById('totalMoney')
    totalElem.innerText = `$${money}`

    let blickyTotalElem = document.getElementById('blickyCount')
    blickyTotalElem.innerText = `${blicky.quantity}`

    let blickyTotalValue = document.getElementById('blickyValue')
    blickyTotalValue.innerText = `${blicky.multiplier}`

    let juiceTotalElem = document.getElementById('juiceCount')
    juiceTotalElem.innerText = `${juice.quantity}`

    let juiceTotalValue = document.getElementById('juiceValue')
    juiceTotalValue.innerText = `${juice.multiplier}`

    let spinTotalElem = document.getElementById('blockCount')
    spinTotalElem.innerText = `${spin.quantity}`

    let spinTotalValue = document.getElementById('blockValue')
    spinTotalValue.innerText = `${spin.multiplierStart}`

    let pushTotalElem = document.getElementById('pushCount')
    pushTotalElem.innerText = `${pushin.quantity}`

    let pushTotalValue = document.getElementById('pushValue')
    pushTotalValue.innerText = `${pushin.multiplierStart}`

    let blickyCostElem = document.getElementById('blickyCost')
    blickyCostElem.innerText = `${blicky.price}`

    let juiceCostElem = document.getElementById('juiceCost')
    juiceCostElem.innerText = `${juice.price}`

    let spinCostElem = document.getElementById('spinCost')
    spinCostElem.innerText = `${spin.displayPrice}`

    let pushCostElem = document.getElementById('pushCost')
    pushCostElem.innerText = `${pushin.displayPrice}`
}



