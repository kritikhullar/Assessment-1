function checkreqd()
{
    var user= document.getElementById("usname").value;
    var pass = document.getElementById("npsw").value;
    var cpass= document.getElementById("cpsw").value;
    var nam=document.getElementById("name").value;
    var zipc=document.getElementById("zip").value;
    var mailid= document.getElementById("emailid").value;
    var dobt= document.getElementById("dob").value;
    var gen1=document.getElementById("female");
    var gen2=document.getElementById("male");
    var lan1=document.getElementById("English");
    var lan2=document.getElementById("NonEnglish");
    
    if (user.length == 0)
    {
        alert("Enter the username")
    }
    else if(user.length<5 || user.length>12)
    {
        alert("Enter the username of length 5-12")
    }
    else if(pass.length == 0)
    {
        alert("Enter password")
    }
    else if(pass.length<7 || pass.length>12 )
    {
       alert("Enter the password of length 7-12")
    }
    else if(cpass.length == 0)
    {
        alert("Enter the above password again to confirm it")
    }
    else if(nam.length == 0)
     {
         alert("Enter the name")
     }
    else if(zipc.length == 0)
    {
        alert("Enter the ZIP code")
    }
    else if(mailid.length == 0)
    {
        alert("Enter the mail id")
    }
    else if(dobt.length == 0)
    {
        alert("Enter the Date Of Birth")
    }
    else if(gen1.checked==false && gen2.checked==false)
    {
        alert("Select either of the options!")
    }
    else  if(lan1.checked==false && lan2.checked==false)
    {
        alert("Select either of the options!")
    }
    else
    {
        checklogin();
    } 
}

function checklogin() 
{
    var user= document.getElementById("usname").value;
    var pass = document.getElementById("npsw").value;
    var cpass= document.getElementById("cpsw").value;
    var nam=document.getElementById("name").value;
    var zipc=document.getElementById("zip").value;
    var mailid= document.getElementById("emailid").value;
    var userformat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/;
    var passw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,12}$/;
    var nameformat=/^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    var zipformat=/^(?=.*[0-9]).{6}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if( user.match(userformat) )
    {  
         if(pass.match(passw))
        {
            if(cpass.match(pass))
            {
                if(nam.match(nameformat))
                {
                    if(zipc.match(zipformat))
                    {
                        if(mailid.match(mailformat))
                        {
                            alert("Login Succesful!")
                            document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:green; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" >Login Successful!</button></div>')

                        }
                        else
                        {
                            alert("Invalid Mail!")
                            document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:red; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" >Invalid Mail!</button></div>')

                        } 
                    }
                    else
                    {
                        alert("Invalid ZIP!")
                        document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:violet; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" >Invalid ZIP!</button></div>')
 
                    }
                }
                else
                {
                    alert("Invalid Name!")
                    document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:blue; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" > Invalid Name!</button></div>')
                }   
                
            }
            else
            {
                alert("Incorrect password! Input the password same as above!")
                document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:yellow; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" >Input the Above Password!</button></div>')
            }
        }
        else
        {
            alert("Invalid password")
            document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:orange; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" >Invalid Password!</button></div>')
        }
    }    
    else
    {  
        alert("Invalid username")
        document.write('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="background-color:limegreen; margin-left:30%; font-size:70px; margin-top:10%; padding:20px;" >Invalid Username!</button> </div>')
    }
    
}

