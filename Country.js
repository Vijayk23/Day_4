async function AsyncFjsonunction(){
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
        <td>${values.region}</td>
        <td>${values.subregion}</td>
        <td>${values.population}</td>
      </tr>`
    });
     document.getElementById("table_body").innerHTML=display;
    
   }
  
   AsyncFjsonunction();






