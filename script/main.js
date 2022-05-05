document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector('#signup-submit').onclick = function(){
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
        ajax('core/signup.php', 'post', login, data);
        function login(result){
            console.log(result);
        }
        if(result == 2){
            alert("Заповінсть поля");
        }
        else if(result == 1){
            alert("you are registered!)")
        }
        else{
            alert("ERROR 404");
        }
    }   
});