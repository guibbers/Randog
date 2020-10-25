function carregarImagens(){

   let xmlHttpRequest = new XMLHttpRequest();
   let url = "https://dog.ceo/api/breeds/image/random"
   
   xmlHttpRequest.open("GET", url, true); //true == async
   
   xmlHttpRequest.onreadystatechange = function() {

   if (xmlHttpRequest.readyState == 4) {
   
      const jsonResponse = JSON.parse(xmlHttpRequest.responseText);
      
      const imgDog = document.getElementById("img_dog");
      imgDog.classList.remove("hidden");
      imgDog.src = jsonResponse.message;
      }
      };
      
      xmlHttpRequest.send(null);
      
   }