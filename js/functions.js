const button = document.querySelector('button')
const paragraph = document.querySelector('p')
const table = document.querySelector('table')

button.addEventListener('click', () => {
    const newRow = document.createElement('tr')
    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td')
        const randomNumber = Math.floor(Math.random() * 10)
        newCell.textContent = randomNumber
        newRow.appendChild(newCell)
    }
    table.appendChild(newRow)

    paragraph.textContent = `Valmiita rivejä ${table.children.length}`
});