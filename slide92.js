// Lấy được ảnh
// const mainCar = document.getElementById("main_car");

// console.log(mainCar);

//Lấy được button.
// const mainCar = document.getElementById("main_car");

// const redCar = document.querySelector('[car_color="product-2.png"]');

// console.log(redCar);

//Kiểm tra button có nhận click không.
// const mainCar = document.getElementById("main_car");

// const redCar = document.querySelector('[car_color="product-2.png"]');

// redCar.addEventListener("click", function(){

//     console.log("Đã click");

// });

//đổi ảnh.
let shCar = {
    colorSH: [
        {
            id: "red_car",
            name: "SH350i 2023 Red",
            price:  200000000,
            carColor: "./product-2.png",
            img: "./image/img_slide92/product-2.png",
        },
        {
            id: "black_car",
            name: "SH350i 2023 Black",
            price: 205000000 ,
            carColor: "./product-3.png",
            img: "./image/img_slide92/product-3.png",
        },
        {
            id: "white_car",
            name: "SH350i 2023 White",
            price: 208000000 ,
            carColor: "./product-1.png",
            img: "./image/img_slide92/product-1.png",
        },
        {
            id: "gray_car",
            name: "SH350i 2023 Gray",
            price:  210000000,
            carColor: "./product-5.png",
            img: "./image/img_slide92/product-5.png",
        },
        {
            id: "green_car",
            name: "SH350i 2023 Green",
            price:  22000000,
            carColor: "./product-5.png",
            img: "./image/img_slide92/product-5.png",
        },
    ],
    versionSH: [
        {
            id: "ver_100",
            
            carVersion: 100,
            versionPrice : 10000000
        },
        {
            id: "ver_120",
            
            carVersion: 120,
            versionPrice : 20000000
        },
        {
            id: "ver_150",
            
            carVersion: 150,
            versionPrice : 35000000
        },
        {
            id: "ver_200",
            
            carVersion: 200,
            versionPrice : 42000000
        },
        {
            id: "ver_300",
            
            carVersion: 300,
            versionPrice : 45000000
        },
    ],
};
//đổi màu xe
let mainCar = document.getElementById("main_car")
let containerColorListHtml = document.querySelector(".container_color_list");

console.log(containerColorListHtml)
function renderColorList() {
    for (let i = 0; i < shCar.colorSH.length; i++) {
        console.log(i);
        containerColorListHtml.innerHTML += `<button class="color_item" onclick ="button_color(${i},this)" type="button"><img  src="${shCar.colorSH[i].img}"  alt=""></button>`;
    }
}
renderColorList();

let containerRightVersionHtml = document.querySelector(
    ".container_right_version",
);
function renderVersion() {
    for (let i = 0; i < shCar.versionSH.length; i++) {
        console.log(i);
        containerRightVersionHtml.innerHTML += `<button class="version_item" onclick ="button_version(${i},this)" type="button">${shCar.versionSH[i].carVersion} CC</button>`;
    }
}
renderVersion();
const imgCar = document.querySelector("#main_car");
const nameCar = document.querySelector("#car_name");
const priceCar = document.querySelector("#price");
let colorIndex = 0 
function button_color(i, buttonClicked) {
    const colorItem = document.querySelectorAll(".color_item");
    
    for (let i = 0; i < colorItem.length; i++) {
        colorItem[i].classList.remove(`active`);
        
    }
    buttonClicked.classList.add(`active`);
    
    imgCar.src = shCar.colorSH[i].img;
    nameCar.textContent = shCar.colorSH[i].name;
    colorIndex = i;
    updatePrice();
    
}

// click chọn phiên bản
// tăng giá theo phiên bản
let versionIndex = 0
function button_version(i,buttonClicked){
    const versionItem = document.querySelectorAll(".version_item")
    for(let i = 0 ; i<versionItem.length ; i++){
        versionItem[i].classList.remove(`active`)
    }
    buttonClicked.classList.add(`active`)
   versionIndex = i
   updatePrice();
}

//tăng giảm số lượng
const quantity = document.getElementById("quantity")
console.log(quantity)
console.log(typeof quantity.value)


const minus = document.getElementById("minus")
minus.addEventListener('click' , function(){ 
    let numberValue = Number(quantity.value)
    if(numberValue > 1){
        numberValue -= 1
    }
    else{
        numberValue = numberValue
    }
    quantity.value = numberValue
    updatePrice()
})
console.log(minus)


const plus = document.getElementById("plus")
plus.addEventListener('click', function(){ 
    let numberValue = Number(quantity.value)
    numberValue = numberValue + 1
    quantity.value = numberValue
    updatePrice()
})
console.log(plus)
// lấy ảnh gốc ban đầu
function firstProduct() {
    const firstProductBtn = document.querySelector(".color_item")
    const firstVersionBtn = document.querySelector(".version_item")
    imgCar.src = shCar.colorSH[0].img
    nameCar.textContent = shCar.colorSH[0].name
    
    firstProductBtn.classList.add("active");
    firstVersionBtn.classList.add("active");

    updatePrice();
}
firstProduct()
//thêm vào giỏ hàng 
const buttonCart = document.querySelector("#add_cart")
const cartCount = document.querySelector("#shop_count")
console.log(buttonCart)
console.log(cartCount)

let totalCount = 0
buttonCart.addEventListener("click" , function(){
    console.log('da click vao gio hang')
    const count = Number(quantity.value)
        totalCount = count 
        cartCount.textContent = totalCount
        console.log(totalCount)
})
//cập nhật giá gốc + giá phiên bản ,tăng/giảm giá khi +/- số lượng
function updatePrice() {
    const total = shCar.colorSH[colorIndex].price + shCar.versionSH[versionIndex].versionPrice
    const amount = Number(quantity.value)
    const finalTotal = amount * total
    priceCar.textContent = finalTotal
}




