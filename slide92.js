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
            carColor: "./product-2.png",
            img: "./image/img_slide92/product-2.png",
        },
        {
            id: "black_car",
            name: "SH350i 2023 Black",
            carColor: "./product-3.png",
            img: "./image/img_slide92/product-3.png",
        },
        {
            id: "white_car",
            name: "SH350i 2023 White",
            carColor: "./product-1.png",
            img: "./image/img_slide92/product-1.png",
        },
        {
            id: "gray_car",
            name: "SH350i 2023 Gray",
            carColor: "./product-5.png",
            img: "./image/img_slide92/product-5.png",
        },
        {
            id: "green_car",
            name: "SH350i 2023 Green",
            carColor: "./product-5.png",
            img: "./image/img_slide92/product-5.png",
        },
    ],
    versionSH: [
        {
            id: "ver_100",
            price: "Giá từ: 198.990.000 VNĐ",
            carVersion: 100,
        },
        {
            id: "ver_120",
            price: "Giá từ: 199.990.000 VNĐ",
            carVersion: 120,
        },
        {
            id: "ver_150",
            price: "Giá từ: 208.990.000 VNĐ",
            carVersion: 150,
        },
        {
            id: "ver_200",
            price: "Giá từ: 218.990.000 VNĐ",
            carVersion: 200,
        },
        {
            id: "ver_300",
            price: "Giá từ: 228.990.000 VNĐ",
            carVersion: 300,
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
function button_color(i, buttonClicked) {
    const colorItem = document.querySelectorAll(".color_item");
    
    for (let i = 0; i < colorItem.length; i++) {
        colorItem[i].classList.remove(`active`);
        
    }
    buttonClicked.classList.add(`active`);
    
    
    imgCar.src = shCar.colorSH[i].img;
    nameCar.textContent = shCar.colorSH[i].name;
    priceCar.textContent = shCar.versionSH[i].price;
}

function button_version(i,buttonClicked){
    const versionItem = document.querySelectorAll(".version_item");
    for(let i = 0 ; i<versionItem.length ; i++){
        versionItem[i].classList.remove(`active`)
    }
    buttonClicked.classList.add(`active`)
    
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
})
console.log(minus)


const plus = document.getElementById("plus")
plus.addEventListener('click', function(){ 
    let numberValue = Number(quantity.value)
    numberValue = numberValue + 1
    quantity.value = numberValue
})
console.log(plus)

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
