
function validation() {
    let usr = document.getElementById('userName').value;
    let psw = document.getElementById('password').value;
    if (usr == "" || psw == "") {
        alert('Please Enter Your Username and Password');
    }else if (usr === "demousr" && psw === "demopsw") {
        location.href='http://127.0.0.1';
        alert("Hello" + " " + usr + " " + "Welcome to yor Dashboard!" )

    }
    else{
        alert("Please Enter a Valid Username or Password");
    }
}