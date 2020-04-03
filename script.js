function fn(){
   let myInput=document.querySelector('input');
   let myDiv=document.createElement('div');
   myDiv.setAttribute("class","div_elem");
   document.body.append(myDiv);
   //button1
   let B1=document.createElement("button");
   B1.setAttribute("class","B1_elem")
   B1.innerHTML="complete";
   //button2
   let B2=document.createElement("button");
   B2.setAttribute("class","B2_elem")
   B2.innerHTML="delete";
   //span
   let span=document.createElement("span");
   span.innerHTML=myInput.value;
 

   myDiv.appendChild(B1);
   myDiv.appendChild(B2);
   myDiv.appendChild(span);
   
   //complete
   let Button1=document.getElementsByClassName("B1_elem");
   let Span1=document.getElementsByTagName("span")
   for (let i=0;i<Button1.length;i++){
       Button1[i].addEventListener('click',function undo(){
           Button1[i].innerHTML="undo";
           Span1[i].style.textDecorationLine="line-through";
   
       })
   }
   let Button2=document.getElementsByClassName("B2_elem");
let DivParent=document.getElementsByClassName("div_elem");

for (let i=0;i<Button2.length;i++){
    Button2[i].addEventListener('click',function delet(){
        DivParent[i].style.display="none"

    })
}


}

