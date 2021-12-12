function addToCart(quantity,productName="Elma") {
  console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity);
}

addToCart(10);

let sayHello = ()=>{
    console.log("Hello world!")
}

sayHello()

let sayHello2 = function() {
  console.log("Hello world 2")
}

sayHello2()

function addToCart2(productName, quantity,unitPrice){

}

addToCart2("Elma",5,10)
addToCart2("Armut",2,10)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}


function addToCart3(product) {
  console.log("Ürün : "+product.productName)
  console.log("Adet : "+product.quantity)
  console.log("Fiyat : "+product.unitPrice)
}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3  // Referans tip - Heap - adresi eşitlenir ve bu iki değer bir adrese yöneldiği için değişiklikler birbirini etkiler.
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2   // Değer tip - stack - değerler değişir ve biter.
sayi2 = 100
console.log(sayi1)

function addToCart4(x) { // scope mantığı olduğu için blok içindeki functions bir değere sahip olmayınca bir yukarıdaki gelen objeyi yazdırıyor.
  console.log(products)
}

let products = [
  {productName:"Elma", unitPrice:10, quantity:5},
  {productName:"Armut", unitPrice:10, quantity:5},
  {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(...numbers) { //rest - ayrıca rest operatöründen sonra bir şey yazılmaz öncesine yazılır.
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
  }
  console.log(total)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers)) //spread ayrıştırır rest toparlar.

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]= [
  {name:"İç Anadolu", population:"20M"},
  {name:"Marmara", population:"30M"},
  {name:"Karadeniz", population:"10M"},
  [
    ["Ankara","konya"],
    ["istanbul","sakarya"],
    ["trabzon","sinop"]
  ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)