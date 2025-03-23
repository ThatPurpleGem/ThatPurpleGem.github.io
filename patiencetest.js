function patience() {
    console.log("Clicked! Waiting 2 seconds...");
    setTimeout(() => {
      console.log("Hello after 2 seconds!")
    patienceproof();
    }, 60000);
  }

  function patienceproof() {
    alert("you have patience");
  }
  