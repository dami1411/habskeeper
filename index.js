const registerServiceWorker = async () => {
  if("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js",{scope:"/my_app/"});
      if(registration.installing) {
        console.log("Service worker installing");
      }
      else if(registration.waiting) {
        console.log("Service worker installed");
        
      }
      else if(registration.active) {
        console.log("Service worker active");
      }
    }
    catch (error) {
      console.log(`Registration failed with error",${error}`);
    }
  }
}
function showNotification(){
  let title = document.getElementById("title");
  let when = document.getElementById("when");
  console.log("title valore: ",title.value);
  console.log("when valore: ",typeof(when.value));
  console.log("when data: ",typeof(Date.parse(when.value)));
  Notification.requestPermission().then((res) => {
    if(res === 'granted') {
      if(navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
         title: title.value,
         timestamp: Date.parse(when.value)
        })
      }
      navigator.serviceWorker.ready.then((registration) => {
        registration.sync.register('mySyncTag')  
      
    })

  }
  })
}

registerServiceWorker();