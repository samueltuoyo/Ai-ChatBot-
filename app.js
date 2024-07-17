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
       case 'hello how are you doing?', 'hello', 'good morning': 
       aiResponse.innerText = 'in doing great and you?';
       break;
       case 'who created you?', 'who made you', 'who built you', 'where you created': 
       aiResponse.innerText = 'I was Created by Samuel Tuoyo on July 17th 2024, i was a mini project he decided to out hands into';
       break;
       case 'fuck you', 'you are very useless', 'fuck you', 'mumu' : 
       aiResponse.innerHTML = "please no abusive words here 😡";
       break;
       case "whos birthday is today in <TechWithLevi/>":
       aiResponse.innerHTML = 'it <strong>Kingsley Esisi</strong> 😀, i hope you guys wish him well';
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

