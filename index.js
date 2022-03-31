function clock(){
    let time= new Date();
    let hr=time.getHours();
    let mi=time.getMinutes();
    let se=time.getSeconds();
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("min").innerHTML = mi;
    document.getElementById("sec").innerHTML = se;
    document.getElementById("ap").innerText = "AM"
    if(hr>12){
        hr = hr -12;
     document.getElementById("hour").innerText = hr;
     document.getElementById("ap").innerText = "PM"
    }
    
    if(hr==0){
        hr=12;
     document.getElementById("hour").innerText = hr;
     document.getElementById("ap").innerText = "PM"
    }
    if(hr<10)
    document.getElementById("hour").innerText = "0"+hr;
    if(mi<10)
    document.getElementById("min").innerText = "0"+mi;
    if(se<10)
    document.getElementById("sec").innerText = "0"+se;
}
setInterval(clock,1)



    document.getElementById("clk").onclick = function(){
        var a=document.getElementById('Morning').value;
            var b = document.getElementById("Afternoon").value;
           var c = document.getElementById("Evening").value;
           var d = document.getElementById("Night").value;
           var hour = new Date().getHours();
           console.log(hour);
        if(a == hour){
            document.getElementById("leftbox2").innerText="Good Morning!!! Wake Up !! "
            document.getElementById("rightbox2").innerText="GRAB SOME HEALTHY BREAKFAST!!!"
            document.getElementById('rightbox3').style.backgroundImage='url("./Images/Component 30 – 1.svg")';
        }
        else if(b == hour){          
            document.getElementById('rightbox3').style.backgroundImage='url("./Images/Component 31 – 1.svg")';
            document.getElementById("rightbox2").innerText="Let's Have Some Lunch !!";
            document.getElementById("leftbox2").innerText="Good Afternoon !!";
        }
        else if(c == hour){
            document.getElementById('rightbox3').style.backgroundImage='url("lunch_image.png")';
            document.getElementById("rightbox2").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            document.getElementById("leftbox2").innerText="Good Evening!!";
        }
        else if(d == hour){
            document.getElementById('rightbox3').style.backgroundImage='url("./Images/Component 32 – 1.png")';
            document.getElementById("rightbox2").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
            document.getElementById("leftbox2").innerText="Good Night!!";
        } 
    }
   
// function settime(){

//     var x=document.getElementById('Morning').value;
//     console.log(x);
//     var y = document.getElementById("Afternoon").value;
//     var z = document.getElementById("Evening").value;
//     var hour = new Date().getHours();
//     console.log(hour);

//     if(x==hour){

//         document.getElementById('rightbox3').style.backgroundImage="url('lunch_image.png')"
//         document.getElementById("rightbox2").innerText='Wake Up !!';
//         document.getElementById("leftbox2").innerText="Good Morning !!";
//     }

//     if(y==hour){
//         document.getElementById("imgcontainer").style.backgroundImage="url(./images/lunch.PNG)"
//         document.getElementById("textcontainer").innerText="Let's Have Some Lunch !!";
//         document.getElementById("smallbox").innerText="Good Afternoon !!";
//     }

//     if(z==hour){
//         document.getElementById("imgcontainer").style.backgroundImage="url(./images/night.PNG)"
//         document.getElementById("textcontainer").innerText="Good Night !!";
//         document.getElementById("smallbox").innerText="Good Night !!";
//     }    
// }