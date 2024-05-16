let btn=document.querySelector("button");
let para=document.querySelector("p");

btn.addEventListener("click", async ()=>{

    let info = await quote();
    para.innerHTML=info;
    
});

async function quote(){
    try {
        const  {data}  = await axios.request("https://api.kanye.rest/");
        
        return data.quote;
      } catch (error) {
        console.error(error);
        return "no quote" ;
      }

}



