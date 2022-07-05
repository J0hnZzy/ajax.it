document.addEventListener('DOMContentLoaded', (e) => {
    let userEmail = getCookie("email");
    ajax("core/get_user_data.php", 'POST', getUserDate, {"email": userEmail}); 
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    function getUserDate(result)
    {
        result = JSON.parse(result);
        console.log(result);
        document.querySelector("#signup-name").value = result.name;
        document.querySelector("#signup-bd").value = result.birthday;
        document.querySelector("#signup-pass").value = result.password; 
    }
});