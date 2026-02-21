function addMessage(text, sender) {
  let messages = document.getElementById("messages");
  let div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerHTML = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}