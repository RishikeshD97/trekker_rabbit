let qaData = [];

fetch('qa.json')
  .then(response => response.json())
  .then(data => qaData = data.questions);

function sendMessage() {
  let inputField = document.getElementById("input");
  let message = inputField.value.toLowerCase();
  if (!message) return;

  addMessage(message, "user");
  inputField.value = "";

  let response = getBotResponse(message);
  setTimeout(() => addMessage(response, "bot"), 500);
}

function addMessage(text, sender) {
  let messages = document.getElementById("messages");
  let div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(message) {
  for (let item of qaData) {
    for (let keyword of item.keywords) {
      if (message.includes(keyword)) {
        return item.answer;
      }
    }
  }
  return "Sorry, I didn’t understand that. Please contact support.";
}