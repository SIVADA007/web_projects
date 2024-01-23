const button=document.getElementById("button")
// using event listener

button.addEventListener("click",display);


function display(){
   
    const input=document.getElementById("input")

    const city=input.options[input.selectedIndex].value;
    
    let population=0; let literacyRate=0; let resultdiv=0;

     switch(city){

        case 'madurai':
          
             population=1871912 
             literacyRate=83.45
             break
        case 'chennai':
             population=6599000
             literacyRate=90.18
             break        
        case 'teni':
             population=575418
             literacyRate=77.26
             break
          
        case 'dindugul':
          population=2440000
          literacyRate=76.26
          break
        
        case 'kodaikanal':
          population=1156250
          literacyRate=79.59

          break  
          case 'namakkal':
               population=1030476
               literacyRate=74.63
     
               break  
        case 'ooty':
          population=575418
          literacyRate=77.26
          break
        
        case 'sivagangai':
          population=156000
          literacyRate=75.73
          break

          console.log(resultdiv);
     }
   
     let text= `${city} has population of ${population} & litracy rate of ${literacyRate}%`
     //element that only get created with js (still not yet connected with html)
      resultdiv=document.createElement('div')
     result.id='result'
     document.getElementById('orange').appendChild(result)
     document.getElementById('result').innerHTML=text
     
     console.log(text);

}

function changebackgroundImage(e){
     let target=document.body;
     target.style.backgroundImage="url("+e.value+")";
}