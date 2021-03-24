var btnSubScribePush=document.querySelector('#subScribePush');

// Проверка того, что наш браузер поддерживает Service Worker API.
if ('serviceWorker' in navigator) {
    // Весь код регистрации у нас асинхронный.
    navigator.serviceWorker.register('./sw.js')
      .then(() => navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register('syncdata');
        SubScribeNotification()
      }))
      .catch((err) => console.log(err));
}
 

btnSubScribePush.click=function(){
    SubScribeNotification();
}

function SubScribeNotification(){
     Notification.requestPermission().then(function(permission){
                                            if(permission=='granted'){
                                                btnSubScribePush.setAttribute("style","display:none");    
                                            }else{
                                                btnSubScribePush.setAttribute("style","display:block");
                                            }
                                        })
}
