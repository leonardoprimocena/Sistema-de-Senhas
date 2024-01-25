particlesJS.load("particles-container", "particlesjs-config.json");

const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const messageDiv = document.getElementById("message");
const togglePasswordVisibilityButton = document.getElementById("toggle-password-visibility");

function validatePassword(password, confirmPassword) {

  if ((password == "Eric_33315311" && confirmPassword == "Leonardo_33836850") || (password == "Leonardo_33836850" && confirmPassword == "Eric_33315311")) {
    return "Nome dos criadores OK! 👍";
  } else if (password !== confirmPassword) {
    return "As senhas não são iguais. ❌";
  } else if (password.length < 6) {
    return "A senha deve ter no mínimo 6 dígitos. ❌";
  } else if (!/[!@#$%^&*()?"{}~|_<>+-]/.test(password)) {
    return "A senha deve ter pelo menos um caractere especial. ❌";
  } else if (!/[A-Z]/.test(password)) {
    return "A senha deve ter pelo menos uma letra maiúscula. ❌";
  } else if (!/[a-z]/.test(password)) {
    return "A senha deve ter pelo menos uma letra minúscula. ❌";
  } else if (!/[0-9]/.test(password)) {
    return "A senha deve ter pelo menos um número. ❌";
  } else if (/([a-z;A-Z;0-9])\1\1/i.test(password)) {
    return "A senha não pode ter 3 caracteres repetidos. ❌";
  } else if (/123|234|345|456|567|678|789/.test(password)) {
    return "A senha não pode ter sequência de números (ex: 123, 234...). ❌";
  } else if (/987|876|765|654|543|432|321/.test(password)) {
    return "A senha não pode ter sequência decrescente de números (ex: 987, 876...). ❌";
  } else {
    return "Login realizado com sucesso! ✅";
  }
}

function togglePasswordVisibility(inputElement) {
  const type = inputElement.getAttribute("type") === "password" ? "text" : "password";
  inputElement.setAttribute("type", type);
}

togglePasswordVisibilityButton.addEventListener("click", () => {
  togglePasswordVisibility(passwordInput);togglePasswordVisibility(confirmPasswordInput);togglePasswordVisibilityButton.textContent = passwordInput.getAttribute("type") === "password" ? "MOSTRAR" : "OCULTAR";passwordForm.classList.toggle("ocultar-senha");
});

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const message = validatePassword(password, confirmPassword);messageDiv.textContent = message;

   if (message.includes("Nome dos criadores OK!") || message.includes("Login realizado com sucesso!")) {
     messageDiv.style.color = "green";
   } else {
     messageDiv.style.color = "";
   }
});