self.addEventListener('message',(event) => {
  console.log("evento",event);
  if(event.data) {
    let curr = new Date();
    let diff = event.data.timestamp - curr;
    const options  = {
      title: event.data.title,
      timestamp: event.data.timestamp
      
    }
    event.waitUntil(
      
      setTimeout(
        () => {
          self.registration.showNotification("Messaggio",options).catch((err) => {
            console.log(err);
          })
        },diff)
      
    )
  }
  
})
self.addEventListener('sync',(event) => {
  if(event.tag === 'mySyncTag') {
    event.waitUntil(
      
    )
  }
})