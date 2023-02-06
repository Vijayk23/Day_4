async function Flag(){
    let url = 'https://restcountries.com/v3.1/all';
    let jsondata;
        await fetch(url)
    .then(res => res.json())
    .then(out =>
        jsondata = out)
    console.log(jsondata);
    let display="";
    jsondata.map((values)=>{        
        display+= `<tr>
        <th>${values.name.common}</th>
        <th><img src="${values.flags.png}"></th>        
          </tr>`
    });
     document.getElementById("table_body").innerHTML=display;
    
   }
  
   Flag();






