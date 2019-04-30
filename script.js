const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
    let content = messageIn.value;

    /** If input box empty, throws an alert box, otherwise display the message */
    if(content === ''){
        alert('Enter a value')
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}