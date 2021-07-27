const socket =io()

let name;
let textarea= document.querySelector('#textarea')
let messageArea =document.querySelector('.message_area')



// jub tk user name provide na kre tb tk name input me lete re na hai
do{
    name =prompt('Pleass Enter the Name: ')
}
while(!name)

textarea.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)

    }
})
function sendMessage(message){
    let msg={
        user: name,
        message: message.trim()
    }
//append
appendMessage(msg,'outgoing')
textarea.value=''
scrollToBottom()

//send message to server
socket.emit('message',msg)

}


function appendMessage(msg ,type){
    let mainDiv =document.createElement('div')
    let className =type
    mainDiv.classList.add(className,'message')

    let markup = `

    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `

    mainDiv.innerHTML= markup
    messageArea.appendChild(mainDiv)
}






//recive message
socket.on('message',(msg)=>{
    appendMessage(msg ,'incomming')
    scrollToBottom()
})



/// funtion scroll to bottm
 function scrollToBottom(){
     messageArea.scrollTop=messageArea.scrollHeight
 }



/* The prompt() method displays a dialog box that prompts the visitor for input.

*/