const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
        result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
        result.textContent = ''
	}
}



const convertF = () => {
    if (one.textContent === '°C') {
        fahrenheit = converter.value * 1.8 + 32
		result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
        converter.value = ''
	} else {
        celsiuse = (converter.value - 32) / 1.8
		result.textContent = `${converter.value}°F to ${celsiuse.toFixed(1)}°C`
        converter.value = ''
	}
}

const calculator = () => {
if (converter.value !== '') {
    convertF()
} else {
    result.textContent = 'Musisz podać jakąś wartość'
}
}

const resetCell = () => {
    converter.value = ''
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', calculator)
resetBtn.addEventListener('click', resetCell)
