const btnEl = document.querySelector('.btn')

const getPalette = () => document.querySelector('.dropdown-list').value;

const getColorScheme = () => {
    const colorPickerEl = document.querySelector('.color-picker').value.slice(1)
    let hexCodesHtml = '';
    let colorsHtml = '';
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerEl}&mode=${getPalette()}&count=6`)
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
    })

}

btnEl.addEventListener('click', getColorScheme)