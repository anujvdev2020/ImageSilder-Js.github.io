let imgAr=['https://upload.wikimedia.org/wikipedia/commons/3/3a/Stone_wall%2C_Co_Cork.jpg','https://images-na.ssl-images-amazon.com/images/I/816gF7kxi7L._SX466_.jpg','https://5.imimg.com/data5/KZ/TF/QW/SELLER-38073523/natural-construction-stone-500x500.jpg'];
let img=document.getElementById('image');
img.src=imgAr[0]

var i=0;
function next(){
  // console.log("next");
  i++;
  if(i===imgAr.length){
   
    i=0;
    }
    img.src=imgAr[i];
      console.log(i);
  
}
function prev(){
  --i;
  if(i<0){
    i=imgAr.length-1;
  }
  image.src=imgAr[i]
// console.log("prev");
  
}