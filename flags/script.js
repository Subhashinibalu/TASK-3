
const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
  const info = (JSON.parse(this.response));
  for(let ind =0; ind<info.length; ind++)
  {
      console.log(info[ind].flags.png);
  }
} ;