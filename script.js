const button = document.querySelector("button");
const messageDiv = document.getElementById("message");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";

    messageDiv.textContent = "버튼이 클릭되었습니다!";
});