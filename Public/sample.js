document.getElementById('LoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById('LoginForm').username.value;
    let password = document.getElementById('LoginForm').password.value;
    document.getElementById('form-username').innerHTML = `Username : ${username}`;
    document.getElementById('form-password').innerHTML = `Password : ${password}`;
})