const btnEl = document.querySelector('.btn')


const getColorScheme = () => {
    let hexCodesHtml = '';
    let colorsHtml = '';
    fetch('https://www.thecolorapi.com/scheme?hex=24B1E0&mode=monochrome&count=6')
    .then(res => res.json())
    .then(data => {
        const colorsArr = data.colors

        for (let color of colorsArr) {
            colorsHtml += `
            <li class="color" style="background:${color.hex.value}"></li>
            `
        }

        for (let hexCode of colorsArr) {
            hexCodesHtml += `
            <li class="hex">${hexCode.hex.value}</li>
            `
        }

        document.querySelector('.hex-codes').innerHTML = hexCodesHtml;
        document.querySelector('.color-palette').innerHTML = colorsHtml;
        console.log(colorsHtml)
    })

}

btnEl.addEventListener('click', getColorScheme)