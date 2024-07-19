let life = [20, 20];
let playerNames = ["", ""];

window.addEventListener("load", start);

function start() {
    playerNames[0] = localStorage.getItem("PlayerOneName") || "";
    playerNames[1] = localStorage.getItem("PlayerTwoName") || "";
    generateHtml();
}

function iniEvLi() {
    let buttonPlusOne = document.querySelector('#p1p');
    let buttonMinusOne = document.querySelector('#p1m');
    let buttonPlusTwo = document.querySelector('#p2p');
    let buttonMinusTwo = document.querySelector('#p2m');
    let buttonReset = document.querySelector('#reset');
    let iPlayerOne = document.querySelector('#iPlayerOne');
    let iPlayerTwo = document.querySelector('#iPlayerTwo');

    buttonPlusOne.addEventListener('click', () => addLife(0));
    buttonMinusOne.addEventListener('click', () => minusLife(0));
    buttonPlusTwo.addEventListener('click', () => addLife(1));
    buttonMinusTwo.addEventListener('click', () => minusLife(1));
    buttonReset.addEventListener('click', resetLife);
    iPlayerOne.addEventListener('input', () => changePlayerName(0, iPlayerOne.value));
    iPlayerTwo.addEventListener('input', () => changePlayerName(1, iPlayerTwo.value));
}

function changePlayerName(index, value) {
    playerNames[index] = value;
    localStorage.setItem(index === 0 ? "PlayerOneName" : "PlayerTwoName", value);
}

function resetLife() {
    life = [20, 20];
    generateHtml();
}

function addLife(i) {
    life[i] += 1;
    generateHtml();
}

function minusLife(i) {
    life[i] -= 1;
    generateHtml();
}

function generateHtml() {
    document.querySelector('body').innerHTML =
        `
            <h1>Multi Life Counter</h1>
        <div class="player reverse">
            <input type="text" id="iPlayerOne" value="${playerNames[0]}" placeholder="Player One Name">
            <div class="life">
                <button id="p1m" class="minus">-</button>
                <p>${life[0]}</p>
                <button id="p1p" class="plus">+</button>
            </div>
        </div>
        <button id="reset">Reset</button>
        <div class="player">
            <input type="text" id="iPlayerTwo" value="${playerNames[1]}" placeholder="Player Two Name">
            <div class="life">
                <button id="p2m" class="minus">-</button>
                <p>${life[1]}</p>
                <button id="p2p" class="plus">+</button>
            </div>
        </div>
        `;

    iniEvLi(); // Event-Listener nach der DOM-Aktualisierung erneut hinzufügen
}
