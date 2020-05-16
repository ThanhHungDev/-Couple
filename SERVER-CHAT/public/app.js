if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw-new.js?d=123', {
        scope: '/'
    })
    .then(reg => {
        console.log('Registered service worker');
    }).catch(err => {
        console.log('Register service worker failed', err);
    });
}


console.log("app js nè")
$(document).ready(function(){
    $(".login").click(function(){
        $.ajax({url: "https://localhost/fetch/login", success: function(result){
          $("#fetch-data").html(result);
        }});
    });
    $(".logout").click(function(){
        $.ajax({url: "https://localhost/fetch/logout", success: function(result){
          $("#fetch-data").html(result);
        }});
    });
})