<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script/ajax.js"></script>
    <script src="./script/logout.js"></script>
    <script src="./script/get_user_data.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h2>User Page</h2>
    <button id="logout">Log Out form</button>
    <form>
        <div>Username: <input type="text" name="name" id="signup-name"></div>
        <div>password: <input type="text" name="pass" id="signup-pass"></div>
        <div>email: <input type="text" name="email" id="signup-email"></div>
        <div>birthday: <input type="text" name="birthday" id="signup-bd"></div>
        <div>sex:
            <div> <input type="radio" value="male" name="sex">male</div>
            <div><input type="radio" value="female" name="sex">female</div>
            <div><input type="radio" value="other" name="sex">other</div>
        </div>
        <input type="submit" value="send" id="signup-submit">
    </form>
</body>
</html>