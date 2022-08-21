function validar(){
    //capturo valores de los campos
      const email = document.getElementById("email").value
      const contra = document.getElementById("pass").value
         
    //validacion campos no vacios
      if(email.length == 0 || /^\s+$/.test(email)){
          alert("Debe ingresar un Email");
      }      
      //                           no espacios         Solo numeros
      if(contra.length == 0 || /^\s+$/.test(contra) || isNaN(contra)){
          alert("Debe ingresar una contraseña");
      }
      // ir a la portada cuando ingresa si y solo si los datos corresponden a la validación
      document.getElementById("ok").addEventListener("click", function(){

    // aqui refiere a si email y contraseña tienen datos correctos se redirija al index.html, de lo contrario que se reinicie el login
        if (email && contra ){
            window.location = "index.html"
        }else{
            window.location = "login.html"
        }
    })
    
  }
