(function loop() {
    setTimeout(function () {
      if( document.getElementsByClassName("saleitembrowser_ShowContentsButton_3d9cK Focusable")[0] ) {
          document.getElementsByClassName("saleitembrowser_ShowContentsButton_3d9cK Focusable")[0].click();
      console.log('Sabar Lagi Nyarik...')
        }
      var a = document.getElementsByClassName("salepreviewwidgets_StoreOriginalPrice_1EKGZ");
      for (var x = 0; x < a.length; x++) {
          if(document.getElementsByClassName("salepreviewwidgets_StoreOriginalPrice_1EKGZ")[x].innerHTML === "CL.0R") {
              console.log(document.getElementsByClassName("salepreviewwidgets_StoreOriginalPrice_1EKGZ")[x]);
          console.log(document.getElementsByClassName("salepreviewwidgets_StoreOriginalPrice_1EKGZ")[x].parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('a')[0].click());
              console.log(" [!] Silahkan Kembali Ke Menu Event Dan Klik -Jump To Current Clue- Lagi!")
          return console.log(`KETEMU => ID : ${x} - CREATED BY MRHECKA TAMPAN`);
          }
      };
      loop()
    }, 1000);
  }());

  // PASTE IN CONSOLE FOR FINDING THE SECRET CARD >.<