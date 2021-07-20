function myfun() {
	let h=document.getElementById('humb')
     if (h.style.display=='none') {
        h.style.display='flex';
        document.getElementById('hamburger').innerHTML='x';
    }
    else{
        h.style.display='none';
        document.getElementById('hamburger').innerHTML='&equiv;';
    }

}

function shirt1()
{
   document.getElementById("choiceimg").innerHTML='<img src=images/s1.jpg>';
}

function shirt2()
{
   document.getElementById("choiceimg").innerHTML='<img src=images/s2.jpg>';
}

function shirt3()
{
   document.getElementById("choiceimg").innerHTML='<img src=images/s3.jpg>';
}

function shirt4()
{
   document.getElementById("choiceimg").innerHTML='<img src=images/s4.jpg>';
}

function shirt5()
{
   document.getElementById("choiceimg").innerHTML='<img src=images/s5.jpg>';
}


function Showless1(){
    if(pa1.style.display=='block'){
        pa1.style.display='none';
        document.getElementById('Show1').innerText='Show More';
    }
    else {
        pa1.style.display='block';
        document.getElementById('Show1').innerText='Show Less';
    }
}

function Showless2(){
    if(pa2.style.display=='block'){
        pa2.style.display='none';
        document.getElementById('Show2').innerText='Show More';
    }
    else {
        pa2.style.display='block';
        document.getElementById('Show2').innerText='Show Less';
    }
}

function Showless3(){
    if(pa3.style.display=='block'){
        pa3.style.display='none';
        document.getElementById('Show3').innerText='Show More';
    }
    else {
        pa3.style.display='block';
        document.getElementById('Show3').innerText='Show Less';
    }
}
