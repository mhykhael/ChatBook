document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const chatMessages = document.querySelector(".chat__messages");
  const input = document.querySelector(".sendMessage");

  form.addEventListener("submit", sendMessage);

  function sendMessage(e) {
    e.preventDefault();

    if (input.value !== "") {
      const messageDiv = document.createElement("div");
      messageDiv.className = "message";

      const avatar = document.createElement("img");
      avatar.src = "assets/user4.jpg";

      const messageInfo = document.createElement("div");
      messageInfo.className = "message__info";

      const userInfo = document.createElement("h4");
      userInfo.innerHTML = "Gamer";

      const messageTimestamp = document.createElement("span");
      messageTimestamp.className = "message__timestamp";

      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      messageTimestamp.innerHTML = day + "/" + month + "/" + year;

      const message = document.createElement("p");
      message.innerHTML = input.value;
      input.value = "";

      userInfo.appendChild(messageTimestamp);
      messageInfo.appendChild(userInfo);
      messageInfo.appendChild(message);

      messageDiv.appendChild(avatar);
      messageDiv.appendChild(messageInfo);

      chatMessages.appendChild(messageDiv);
      chatMessages.scrollBy(0, 10000);
    }
  }
});
