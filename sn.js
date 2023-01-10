function register() {
    alert("Working");
 var nameFromHtml = document.getElementById("name");
 if(nameFromHtml) {
    var name = nameFromHtml.value;
    console.log(name);
 }
  var emailFromhtml = document.getElementById("email");
    if(nameFromHtml) {
        var email = nameFromHtml.value;
        console.log(email);

    }
     
    var passwordFromhtml = document.getElementById("password");
     if(nameFromHtml)  {
       var password = nameFromHtml.value;
       console.log(password);
        
     }
     if(name && email && password) {
        //console.log("All fields are there")  JSON.parse()
    localStorage.setItem("userData", JSON.stringify ({name:name,email:email,password:password }))
    localStorage.setItem("isUserLoggedIn" ,"false");
    alert("Register done");
    window.location.href = "./login.html";

     } else {
       alert ("Error :-write all feilds.. ")
     }
    
    }

    function login () {
      alert("login")
        
       var emailFromHtml=document.getElementById("email");
       if(emailFromHtml) {
        var emailFromLogin= emailFromHtml.value;
        console.log(emailFromLogin)
       }
       var passwordFromHtml=document.getElementById("password");
       if (passwordFromHtml) {
        var passwordFromLogin= passwordFromHtml.value;
        console.log(passwordFromLogin)
       }
        if(emailFromLogin && passwordFromLogin)  {
          var dataFromlocal = localStorage.getItem("userdata");
          //console.log(dataFromLocal);
          var parsedData= JSON.parse(dataFromlocal);
          //console.log(parsedData.emailOfUser ,"parsedData.email.OfUser");
          if("emailFromLogin == parsedData.emailOfUser" && "passwordFromLogin==parsedData.passwordOfUser"){
    
                                                                 
            localStorage.setItem("isUserLoggedIn" ,"true");
            alert("Login successful")
            window.location.href="./home.html";
          }    else {
            alert ("wrong cred!")
          }                                                                    
          
        }else{
          alert("Error :- write all cred!")
        }
          
      }
                 
          
       
          
        
      

    


    










    
        
     









