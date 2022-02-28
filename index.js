function resolveAfter10Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(alert("Marvelously Loved By God"));
      }, 10000);
    });
  }
  
  async function asyncCall() {
    console.log("WAIT FOR IT")
    const result = await resolveAfter10Seconds();
    console.log(result);
  }
  
  asyncCall();
