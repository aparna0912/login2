<html>
<body>
<script>  
function validateform(){  
var First Name=document.myform.name.value;  
var Last Name=document.myform.name.value;  
var password=document.myform.password.value; 
var Mobile=document.myform.mobile.value;
var emailAddr=document.myform.emailAddr.value;


if ( First Name==null || First Name==""){  
  alert("First Name can't be blank");  
  return false;  
}
else if ( Last Name==null || Last Name==""){  
  alert("Last Name can't be blank");  
  return false;  
}
else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }
  else if(mobile.length<10){  
  alert("mobile must be at least 10 number long.");  
  return false;  
}
else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}   
</script> 

<body>  
<form name="myform" method="post" action="C:\Users\Hp-pc\Desktop\assignment\validation" onsubmit="return validateform()" >  
Name: <input type="text" name=" First Name"><br/>  
Name: <input type="text" name="Last Name"><br/>
Password: <input type="password" name="password"><br/>  
mobile: <input type="mobile" name="mobile number"><br/>
email: <input type="emailAddr" name="emailAddr"><br/>

<input type="submit" value="register">  
</form>  
</body>
</html> 