function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    return show("Լրացրու բոլոր դաշտերը");
  }

  if (localStorage.getItem("user_" + username)) {
    return show("Այս անունով օգտատեր արդեն կա 😕");
  }

  const user = {
    password: password,
    coins: 0,
    level: 1,
    power: 1
  };

  localStorage.setItem("user_" + username, JSON.stringify(user));
  localStorage.setItem("loggedInUser", username);
  window.location.href = "game.html";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const saved = localStorage.getItem("user_" + username);
  if (!saved) return show("Օգտատերը գոյություն չունի");

  const user = JSON.parse(saved);
  if (user.password !== password) return show("Սխալ գաղտնաբառ");

  localStorage.setItem("loggedInUser", username);
  window.location.href = "game.html";
}

function show(msg) {
  document.getElementById("message").textContent = msg;
}
let lastTouch = 0;
document.addEventListener('touchstart', function (e) {
  const now = new Date().getTime();
  if (now - lastTouch <= 300) {
    e.preventDefault();
  }
  lastTouch = now;
}, { passive: false });
