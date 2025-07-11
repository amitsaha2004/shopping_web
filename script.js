let string ="";

let buttons=document.querySelectorAll(".container button");

Array.from(buttons).forEach(function(button){
    button.addEventListener("click",function(e){
        if(button.innerHTML=="="){
            string=eval(string);
            document.querySelector("input").value=string;

        }
        else if(button.innerHTML=="AC"){
            string="";
            document.querySelector("input").value=string;

        }
        else if(button.innerHTML=="DE"){
            let len=string.length-1;
            string=string.slice(0,len)+string.slice(len+1);
            document.querySelector("input").value=string;

        }
        else{
            string=string+button.innerHTML;
            console.log(string);
            document.querySelector("input").value=string;
        }
    })
})