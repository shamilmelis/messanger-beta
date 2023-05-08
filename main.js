const messageArea = document.getElementById('text__input');


const objectArray = [];
const arrayContainer = [];

const userName = "User";

const sendButton = document.getElementById('send__button');
   sendButton.addEventListener('click', function() {
   let messageTime = new Date();
   let messageHours = messageTime.getHours();
   let messageMinutes = messageTime.getMinutes();

   const objObject = {

   };

   const objContainer = {

   };

   objObject.time = `${messageHours}:${messageMinutes}`;
   objObject.text = messageArea.value;
   objObject.user = userName;
   objectArray.push(objObject);
   console.log(objectArray)

   messageArea.value = '';


   let boxMessage = document.createElement('div');
   boxMessage.classList.add('container_messages__blocks');
   boxMessage.innerHTML = `
   <div class="container_messages__blocks">
       <div><p class="message__user">${objObject.user}</p></div> 
       <div><p class="message__value">${objObject.text}</p></div>
       <div><p class="message__date">${objObject.time}</p></div>
   </div>`

  
   objContainer.elem = boxMessage;
   arrayContainer.push(objContainer);
   console.log(arrayContainer)

   const containerGet = document.getElementById('container_messages');
   containerGet.append(boxMessage);
});


function check() {
    if (messageArea.value) {
        sendButton.disabled = false;
        sendButton.classList.remove('turnOff')
    } else if (messageArea.value == '') {
        sendButton.disabled = true;
        sendButton.classList.add('turnOff')
    }
}


setInterval(check, 100);