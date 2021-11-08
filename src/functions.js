function addToCart(quantity,productName="Süt") {
    console.log(productName + " ürünü " + quantity + " adet olarak sepete eklendi.")
}
addToCart(5)
addToCart(12,"Yumurta")
addToCart(2,"Ekmek")
addToCart(500,"Peynir")

let sayHello = () =>{
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World2!")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
        
}
addToCart2("Elma",10,12)
addToCart2("Armut",4,6)

let product1 = {productName:"Ekmek",unitPrice:8,quantity:6}
function addToCart3(product) {
    console.log("Ürün: " + product.productName + " alınan adet: "
    + product.quantity + " toplam fiyatı: " + product.unitPrice)
}
addToCart3(product1)

function addToCart4(x) { //gelen products içerde tanımlı olmadığından
    console.log(products)//global ilk products ı alır.
}
let products=[
 {productName:"Ekmek",unitPrice:8,quantity:6},
 {productName:"Yumurta",unitPrice:27,quantity:15},
 {productName:"Peynir",unitPrice:45,quantity:1}
]

addToCart4(products)

function add(bisey,...numbers) {//rest kullanımı
    let total =0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
        
    }
    console.log(total)
    console.log(bisey)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)

console.log("")
let numbers = [78,65,33,42,78,64,9,12,1,44]
console.log(Math.max(...numbers))//spread

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,   //destruction
                                  marmaraS,karadenizS]] =[
        {name1:"İç Anadolu",population:"25M"},
        {name1:"Marmara",population:"35M"},
        {name1:"Karadeniz",population:"15M"},
        [
            ["Ankara","Eskişehir"],
            ["İstanbul","Çanakkale","Bursa"],
            ["Sinop","Artvin","Giresun","Bartın"]
        ]
    ]

    console.log("İç anadolu şehirleri: ")
    console.log(...icAnadoluSehirleri)
    console.log("Marmara şehirleri: ")
    console.log(...marmaraS)
    console.log("Karadeniz şehirleri: ")
    console.log(...karadenizS)