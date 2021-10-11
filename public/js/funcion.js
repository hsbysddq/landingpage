function selectMe(selector) {
    const isElementExist = document.querySelectorAll('.bg-selected')
    let isSame = false

    const versus = document.querySelector('#versus')
    let isDone = false
    
    isElementExist.forEach((element) => {
        const id = element.id
        const prefix = id.split('-')[0]
        const prefixSelector = selector.split('-')[0]
        if (prefixSelector === `#${prefix}`) {
            isSame = true
        }
    })
    
    if (isSame) {
        return
    }

    const element = document.querySelector(selector)
    element.className += "bg-selected"

    const isSelected = document.querySelectorAll('.bg-selected')

    const selectOne = isSelected[0].id
    const objOfOne = changeToObject(selectOne)

    const player = objOfOne['player']

    // alert(kalkulasiHasil(player.toUpperCase(), pilihLawan().toUpperCase()))
    versus.innerHTML = (kalkulasiHasil(player.toUpperCase(), pilihLawan().toUpperCase()))
    versus.className += "hasil-permainan"
}

const changeToObject = (strSelected) => {
    const arrOfSelected = strSelected.split('-')

    if (arrOfSelected[0] === 'player') {
        return {
            player: arrOfSelected[1]
        }
    } else {
        return {
            computer: arrOfSelected[1]
        }
    }
}

// fungsi untuk menentukan pemenang permainan
const kalkulasiHasil = (player, computer) => {
    if (player === computer) {
        return 'SERI'
    }else if (player === 'BATU') {
        return computer === 'GUNTING' ? 'Player Menang': 'Computer Menang'
    } else if (player === 'KERTAS') {
        return computer === 'BATU' ? 'Player Menang' : 'Computer Menang'
    } else if (player === 'GUNTING') {
        return computer === 'KERTAS' ? 'Player Menang' : 'Computer Menang'
    }
    return 'Pilihan Tidak Tersedia'
}

// Random Computer
function pilihLawan(){
    const pilihan = new Array("batu","gunting","kertas");

    const randomNum = Math.floor(Math.random() * pilihan.length);
    const result = pilihan[randomNum]

    document.querySelector(`#computer-${result}`).className += "bg-selected"

    return result
}


