document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector('#signup-submit').addEventListener = function(){
        event.preventDefault();
        console.log('work');
        let name = document.querySelector('#signup-name').value;
        let pass = document.querySelector('#signup-pass').value;
        let mail = document.querySelector('#signup-mail').value;
        let birthday = document.querySelector('#signup-bd').value;
        let sex = document.getElementsByName('sex');
        for(let i=0; i<sex.length; i++){
            if(sex[i].checked){
                sex = sex[i].value;
                break;
            }
        }
        let data = {
            "name" : name,
            "pass" : pass,
            "email" : mail,
            "birthday" : birthday,
            "sex" : sex,
        }
        ajax('core/signup.php', 'post', signup, data);
        function signup(result){
            console.log(result);
        }
        if(result == 2){
            alert("enter values...");
        }
        else if(result == 1){
            alert("you are registered!)")
        }
        else{
            alert("ERROR 404");
        }
    }   


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<LOGIN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\\


    document.querySelector('#login-submit').onclick = function(){
        event.preventDefault();
        console.log('work');
        let pass = document.querySelector('#login-pass').value;
        let mail = document.querySelector('#login-mail').value;
        
        let data = {
            "pass" : pass,
            "email" : mail
        }
        
        ajax('core/login.php', 'post', login, data);

        function login(result){
            console.log(result);
        if(result == 2){
            alert("enter values...");
        }
        else if(result == 0){
            alert("No such a person!)")
        }
        else{
            console.log(result);
        }
        }
    }   
});