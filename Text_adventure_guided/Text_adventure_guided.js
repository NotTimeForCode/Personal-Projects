const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');


let state = {}


function startGame() {
let state = {}
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text:'startupvoiceline',
        options: [
            {
                text: 'Take the goo',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

startGame()