var result1 , result2, score=0, x , y, answer;
    var arr=["+" , "-"];
    var arr2 =[ "*", "/"];
    var l2 =0;
    var r1=100 , r2=50 ,r3=10 , m1=1 , m2=1 , m3=1;
    var operator1 = arr[Math.floor(Math.random() * arr.length)];
    var operator2 = arr2[Math.floor(Math.random() * arr2.length)];
    var a = Math.floor(Math.random() * (r1-m1+1))+m1;
    var b = Math.floor(Math.random() * (r2-m2+1))+m2;
    var c = Math.floor(Math.random() * (r3-m3 +1))+m3;
    var res = a +"  "+ operator1 +"  "+ b + "  "+ operator2 +"  "+c;
    function onclick1(){
      
        switch(operator2){
            case "/":
            { 
              
            result1 = (b/c);
              
             
            break;
            }
            case "*":
                {
                    result1= b*c;
    
                    break;
                }
        }
        switch(operator1){
            case "+":
            { 
            result1 = result1+a;
            break;
            }
            case "-":
                {
                    result1= a-result1;
                    break;
                }
                
        }
        if((result1*10) % 10 !=0){
        result1 = result1.toFixed(1);
        }
        answer= (document.getElementById("ans")).value ;
        if(answer == ""){
            alert("please Enter your result");
        }
        
        else if(answer==result1){
            score +=15;
            if(score >=60){
                l2=60;
            }
            else if(score >= 120){
                l2 = 120;
            }
            if(l2==60){
                r1 =1000;
                r2=100;
                r3 = 20;
                m1 = 100, m2 = 50, m3 =10;
            }
            else if(l2 == 120){
                r1 =10000;
                r2=200;
                r3 = 50;
                m1 = 1000, m2 = 100, m3 =20;
            }
        document.getElementById("score").innerHTML=score;
        document.getElementById("ans").innerHTML="";
        operator1 = arr[Math.floor(Math.random() * arr.length)];
        operator2 = arr2[Math.floor(Math.random() * arr2.length)];
         a = Math.floor(Math.random() * (r1-m1)+m1);
        b = Math.floor(Math.random() * (r2-m2)+m2);
        c = Math.floor(Math.random() * (r3-m3)+m3);
        res = a +"  "+ operator1 +"  "+ b + "  "+ operator2 +"  "+c;
           myfun();
        }
        else  {
            
           
         score -=15;
         var cont =window.confirm("oops! \n the correct ansewer is : "+ result1 +"\n your score now = " +score +"\n\n do you want to continue ?");
        if(cont == true){
        document.getElementById("score").innerHTML=score;
        document.getElementById("ans").innerHTML="";
        operator1 = arr[Math.floor(Math.random() * arr.length)];
        operator2 = arr2[Math.floor(Math.random() * arr2.length)];
         a = Math.floor(Math.random() * (r1-m1)+m1);
         b = Math.floor(Math.random() * (r2-m2)+m2);
          c = Math.floor(Math.random() * (r3-m3)+m3);
        res = a +"  "+ operator1 +"  "+ b + "  "+ operator2 +"  "+c;
           myfun();
        }
          else{
              window.location.href="/Home";
          }
        }
        
    }
 

function myfun(){
     document.getElementById("equation").innerHTML= res;
     document.getElementById("bt").innerHTML = " <button id='btn1' onclick=onclick1() > <i class='fab fa-telegram-plane'></i> </button>" ;
     document.getElementById("in").innerHTML = " <input id=ans type='text'  placeholder='Enter your result...' required><span id='bar'></span> ";
     document.getElementById("score").innerHTML = score;
    x = document.getElementById("btn1");
    y = document.getElementById("ans");
    x.style.display = "inline-block";
    x.style.width= "80px";
    x.style.height= "60px";
    x.style.background= "#38873d";
    x.style.borderRadius="35%";
    x.style.boxshadow= "0 5px 10px -5px #00000";
    x.style.color= "fff";
    x.style.overflow= "hidden";
    x.style.position= "relative";
    x.style.outline="none";
    x.style.marginLeft="270px";
    x.style.marginTop="100px";
    
    y.style.position= "relative";
    y.style.padding ="0rem 0";
    y.style.border= "none";
    y.style.outline= "none";
    y.style.fontsize= "4rem";
    y.style.color= "#2E2E2E";
    y.style.fontweight= "bold";
    y.style.paddingbottom= "5px";
    y.style.marginLeft="230px";
    y.style.marginTop="50px"; 
   
   
    }

  
