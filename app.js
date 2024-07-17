const chatInput = document.querySelector('.chat-input');
const chatBtn = document.querySelector('.chat-btn');
const chatMessages = document.querySelector('#container');
const spinner= document.querySelector('.spinner');


// generate ai response 
function generate(){
      let userMessage = document.createElement('div');
      userMessage.className = 'user-chat-message';
      userMessage.innerText = chatInput.value;
      chatMessages.appendChild(userMessage);
      let loading = document.createElement('img')
      loading.src = 'img/loading.gif';
      loading.className = 'loading'
      chatMessages.appendChild(loading)
       setTimeout(() => {
       let aiResponse = document.createElement('div');
       aiResponse.className = 'chat-bot-response';
      
   switch (chatInput.value.trim(' ')) {
       case 'Hello':
       aiResponse.innerText = 'Am doing great and you?';
       break;
       case 'Who created you?': 
       aiResponse.innerText = 'I was Created by Samuel Tuoyo on July 17th 2024, i was a mini project he decided to out hands into';
       break;
       case 'Fuck you': 
       aiResponse.innerHTML = 'please no abusive words here 😡';
       break;
       case 'Please tell me how to get One Million Naira in a minute 😂':
       aiResponse.innerText = 'go ask your father 🤣 abeg off your phone make you go sleep 🤣';
       break;
       default:
       aiResponse.innerText = 'sorry i didnt get that';
       break;
   }
       
       loading.style.display = 'none';
      //aiResponse.innerText = chatInput.value;
      chatMessages.appendChild(aiResponse);
      chatInput.value = '';
  }, 3000);
}

chatBtn.addEventListener('click', generate);

