let life = [20, 20];
window.addEventListener("load", start)

function start() {
    generateHtml();
}

function iniEvLi() {
    let buttonPlusOne = document.querySelector('#p1p');
    let buttonMinusOne = document.querySelector('#p1m');
    let buttonPlusTwo = document.querySelector('#p2p');
    let buttonMinusTwo = document.querySelector('#p2m');
    let buttonReset = document.querySelector('#reset');

    buttonPlusOne.addEventListener('click', () => addLife(0));
    buttonMinusOne.addEventListener('click', () => minusLife(0));
    buttonPlusTwo.addEventListener('click', () => addLife(1));
    buttonMinusTwo.addEventListener('click', () => minusLife(1));
    buttonReset.addEventListener('click', resetLife);
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
            <h2>Player</h2>
            <div class="life">
                <button id="p1m" class="minus">-</button>
                <p>${life[0]}</p>
                <button id="p1p" class="plus">+</button>
            </div>
        </div>
        <button id="reset">Reset</button>
        <div class="player">
            <h2>Player</h2>
            <div class="life">
                <button id="p2m" class="minus">-</button>
                <p>${life[1]}</p>
                <button id="p2p" class="plus">+</button>
            </div>
        </div>
        `

    iniEvLi(); // Event-Listener nach der DOM-Aktualisierung erneut hinzufügen
}

