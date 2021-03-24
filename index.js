// Проверка того, что наш браузер поддерживает Service Worker API.
if ('serviceWorker' in navigator) {
    // Весь код регистрации у нас асинхронный.
    navigator.serviceWorker.register('./sw.js')
      .then(() => navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register('syncdata');
        Notification.requestPermission();
        
      }))
      .catch((err) => console.log(err));
}
 
var btnSubScribePush=document.querySelector('subScribePush');
//btnSubScribePush.click=function(){
    //if (Notification.permission === "granted"){
    //Notification.requestPermission();
//}
