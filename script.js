
let canvas = document.getElementById('canvas'); 
let main = document.getElementById('main')
console.log(main)


let ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.lineWidth = 2.0;
ctx.beginPath(); 
ctx.moveTo(30, 10); 
ctx.lineTo(30, 460); 
ctx.lineTo(500, 460); 
ctx.stroke(); 


ctx.fillStyle = "black";
for(let i = 0; i < 6; i++) { 
    ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    ctx.beginPath(); 
    ctx.moveTo(25, i * 80 + 60); 
    ctx.lineTo(30, i * 80 + 60); 
    ctx.stroke(); 
}
 
let labels = ["graph1", "graph2", "graph3", "graph4"]; 
 
for(var i=0; i<4; i++) { 
    ctx.fillText(labels[i], 50+ i*100, 475); 
}
let data = [ 10, 53, 39, 54]; 
 
ctx.fillStyle = "blue"; 
for(var i=0; i<data.length; i++) { 
    var dp = data[i]; 
    ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5); 
}




const fff = function(){ //IIFE

  let arr = ["https://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Cocktail-Glass-PNG-Transparent-Image.png", "https://www.freepngimg.com/thumb/tea/35822-6-iced-tea-transparent.png", "https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-731.png", "https://nalivay-ka.ru/wp-content/uploads/2017/03/i-1-8-1024x768.jpg"]

function arrImg(eee){
  eee.map(function(element, index, array){
    console.log(element);

    return element;
}, 80);
}
arrImg(arr)



    fetch("https://fakerapi.it/api/v1/custom?_quantity=5namething=name&brandname=company_name&price1=buildingNumber&price2=buildingNumber&price3=buildingNumber&price4=buildingNumber&date1=date&date2=date&date3=date&date4=date")
    .then(res => res.json())
    .then(data => {
        data.data.forEach(el => {

console.log(el.brandname)
if(el.brandname) {

let arr2 = [el.price1, el.price2, el.price3, el.price4]
let arr3 = [el.date1, el.date2,el.date3, el.date4]

console.log(arr2)
console.log(arr3)


  let card = `
  <div class="card">
          <h4>Brand name: ${el.brandname}</h4>
          
          </div>
`;
console.log(card)
      main.innerHTML += card;

}


        });
    })
    
};
fff()

