
function enterCredentials() {
    document.getElementById('j_username').value = 'esavelson';
    document.getElementById('j_password').value = 'JjmKa1Rg4w^j#$19sR1&';
}

async function submitLogin() {
    await enterCredentials();
    // await login credentials
    //then submit
    document.getElementsByName("submitlogin")[0].click();

};


submitLogin();

return "Logged in"