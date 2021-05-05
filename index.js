var user = ["ravi","sravan","anvesh","monica"];
var pass = ["ravi","sravan","anvesh","monica"];
var temp;
document.getElementById("myBtn").addEventListener("click", function(e) {
    const usern = document.getElementById("mail").value;
    localStorage.setItem("username",usern);
    const passw = document.getElementById("pass").value;
    for (var index = 0; index < user.length; index++) {
        if (usern == user[index] && passw == pass[index]) {
            temp = "table.html";
            break;
        }
        else{
            temp = "error.html";
        }
    }
    let logTime =  new Date();
    let timeStamp = logTime.getTime();
    localStorage.setItem("logTime",timeStamp);
    window.location.href = temp;
    e.preventDefault();
});
