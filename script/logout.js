document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelector('#logout').addEventListener( () => function(){
        var cook = document.cook;
        const d = new Date();
        d.setTime(d.getTime() - (70 * 60 * 1000));
        let expires = d.toUTCString();
        document.cook = `${cook}; expires=${expires}; path=/`;
        location.reload();
    });
});