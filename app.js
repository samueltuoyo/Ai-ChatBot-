const chatInput = document.querySelector('.chat-input');
const chatBtn = document.querySelector('.chat-btn');
const chatMessages = document.querySelector('#container')
const spinner= document.querySelector('.spinner')


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
       case 'Hello how are you doing?', 'hello', 'good morning', 'hi', 'hello', 'Hello', 'whats up?', 'Hi': 
       aiResponse.innerText = 'Am doing great and you?';
       break;
       case 'Who created you?', 'Who made you', 'Who built you', 'where you created': 
       aiResponse.innerText = 'I was Created by Samuel Tuoyo on July 17th 2024, i was a mini project he decided to out hands into';
       break;
       case 'Fuck you', 'Your are very useless', 'Fuck you ai', 'mumu', 'fool' : 
       aiResponse.innerHTML = "please no abusive words here 😡";
       break;
       case 'Please tell me how to get One Million Naira in a minute 😂', 'afar any update', 'can i hack you', 'Abeg i dey find money', 'abeg i dey find money':
       aiResponse.innerText = 'go find work na , abeg off your phone make you go sleep 🤣';
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

