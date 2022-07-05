document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector('#logout').onclick = function(){
        var c = document.cookie;
        var d = new Date();
        d.setTime(d.getTime() - (60 * 1000));
        var expires = d.toUTCString();
        document.cookie = `${c}; expires=${expires}; path=/`;
        location.reload();
    }
});