

document.addEventListener("DOMContentLoaded" ,  () => {
    const loginCard = document.querySelector(".login-card");
    const registerCard = document.querySelector(".register-card");
    const card = document.querySelector(".card");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    setTimeout(() => {
        card.classList.add("card--show");
    }, 100);
   
     // Función para manejar la animación de salida y redirección
  function hideAndRedirect(card, destination) {
    card.classList.add("card--hide");
    setTimeout(() => {
      window.location.href = destination;
    }, 1800); 
  }
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      hideAndRedirect(registerCard, "login.html");
    });
  }
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      hideAndRedirect(loginCard, "../pages/register.html");
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      hideAndRedirect(registerCard, "../pages/login.html");
    });
  }
 
}
);
   