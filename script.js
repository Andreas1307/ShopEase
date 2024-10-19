const featuredItemsDiv = document.querySelector(".featured");
const babyItemsDiv = document.querySelector(".baby");
const furnitureItemsDiv = document.querySelector(".furniture");
const electronicsItemsDiv = document.querySelector(".electronics");
const bestSellerOpt = document.querySelectorAll(".opt");
const bestSellingDiv = document.querySelectorAll(".bestseller")
const laptopsDiv = document.querySelector(".laptops")
const phonesDiv = document.querySelector(".phones")
const tabletsDiv = document.querySelector(".tablets")
const tvsDiv = document.querySelector(".tvs")
const electricProOpt = document.querySelectorAll(".opt1");
const electricProDiv = document.querySelectorAll(".elecpro")
const sofasDiv = document.querySelector(".sofas");
const armChairsDiv = document.querySelector(".armchairs")
const tvStands = document.querySelector(".tvstands")
const furnitureDiv = document.querySelector(".furniture2");
const furnitureProOpt = document.querySelectorAll(".opt2")
const furnitureProDiv = document.querySelectorAll(".furpro");
const hairDiv = document.querySelector(".hair");
const skinCareDiv = document.querySelector(".skincare");
const makeUpDiv = document.querySelector(".makeup");
const masksDiv = document.querySelector(".mask");
const healthNdBeautyOpt = document.querySelectorAll(".opt3")
const healthNdBeautyDiv = document.querySelectorAll(".healthpro")
const shirtsDiv = document.querySelector(".shirts");
const jumpersDiv = document.querySelector(".jumpers");
const shoesDiv = document.querySelector(".shoes");
const newArrDiv = document.querySelector(".newArr");
const clothingProOpt = document.querySelectorAll(".opt4")
const clothingProDiv = document.querySelectorAll(".clothpro")
const body = document.querySelector("body")
const cart = document.querySelector(".cart")
const shoppingCart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#close-cart");
const openCart = document.querySelector(".info.cartDiv");
const total = document.querySelector(".total")
const cartAmount = document.querySelector(".cart-amount");
const browseCatBtn = document.querySelector(".browse-categories")
const categories = document.querySelector(".categories")
const contDivDevices = document.querySelector(".container-div.devices")
const contDivCouches = document.querySelector(".container-div.couches")
const contDivKitchens = document.querySelector(".container-div.kitchens")
const contDivCosmetics = document.querySelector(".container-div.cosmetics")
const homeCategories = document.querySelectorAll(".category-opt")
const containers = document.querySelectorAll(".container");
const account = document.querySelector(".account")
const closeAcc = document.querySelector("#close-account");
const openAcc = document.querySelector(".openAcc")
const collapBtns = document.querySelectorAll(".collap")
const sellOptions = document.querySelectorAll(".sell-options")
const collapSearch = document.querySelector(".collap-search");
const collapResult = document.querySelector(".collap-result")
const collapDiv = document.querySelector(".collap-search-div")
const closeCollap = document.querySelector(".closeCollap")
const collapBtn = document.querySelector(".collap-btn");


let isTrue = false;
let cartArr = []
let cartNumItems = 0

// all the products on the page
const items = [
    {
        name: "Toilet Paper Roll, Milde Relax purple, 32 rolls",
        price: 18.99,
        img: "img/toilet-paper-roll.png",
        category: ""
    },{
        name: "Electric nasal aspirator NOSIBOO Pro, green-white",
        price: 29.99,
        img: "img/nazal-aspirator.png",
        category: ""
    },{
        name: "Coletto Sportivo Car Seat 9-36 kg, Grey",
        price: 199.99,
        img: "img/child-seat.png",
        category: ""
    },{
        name: "GHOST Kato L MTB bike, 29 wheel, disc brake, red-black",
        price: 499.99,
        img: "img/bicycle.png",
        category: ""
    },{
        name: "MYRIA MY4024 bowl mixer, 5 speed steps, white-grey",
        price: 29.99,
        img: "img/mixer.png",
        category: ""
    },{
        name: "Chicken with eggs, Djeco",
        price: 20.00,
        img: "img/egg-toy.png",
        category: ""
    },{
        name: "Panty diapers PAMPERS Pants XXL Box no 5, Unisex, 12-17 kg, 152 pcs",
        price: 26.99,
        img: "img/baby1.png",
        category: ""
    },{
        name: "MAXI COSI Zelia3 Essential stroller 1210750110, dark gray-black",
        price: 369.99,
        img: "img/baby2.png",
        category: ""
    },{
        name: "Foldable bed with two levels of height and sliding Sleeper, Beige/Grey",
        price: 119.99,
        img: "img/baby3.png",
        category: ""
    },{
        name: "MYRIA MY5207 video monitor, black and white",
        price: 39.99,
        img: "img/baby4.png",
        category: ""
    },{
        name: "Baby formula 3 in 1 cereal + vegetable protein supplement BEBE M, 600g",
        price: 42.99,
        img: "img/baby5.png",
        category: ""
    },{
        name: "Interactive toy SPINMASTER Purse Pets Bag, 5 years+, multicolored",
        price: 14.99,
        img: "img/baby6.png",
        category: ""
    },{
        name: "Kitchen sideboard, solid wood, 126 x 45 x 200 cm, white",
        price: 999.99,
        img: "img/furniture1.png",
        category: "kitchen"
    },{
        name: "Lower kitchen unit, solid wood, 110 x 65 x 90 cm, white-brown",
        price: 649.99,
        img: "img/furniture2.png",
        category: "kitchen"
    },{
        name: "Kitchen sideboard, solid wood, 196 x 53 x 86 cm, white",
        price: 599.99,
        img: "img/furniture3.png",
        category: "kitchen"
    },{
        name: "Kitchen sideboard, solid wood, 120 x 45 x 90 cm, blue-brown ",
        price: 449.99,
        img: "img/furniture4.png",
        category: "kitchen"
    },{
        name: "Outdoor kitchen cabinet, solid pine wood, 106 x 55 x 92 cm",
        price: 179.99,
        img: "img/furniture5.png",
        category: "kitchen"
    },{
        name: "Kitchen sideboard, solid wood, 206 x 53 x 219 cm, light brown-white",
        price: 1799.99,
        img: "img/furniture6.png",
        category: "kitchen"
    },{
        name: "PHILIPS SPN5140YC/58 extension cord, 4 sockets, 5m, IP44, yellow-black",
        price: 19.99,
        img: "img/electronics1.png",
        category: ""
    },{
        name: "PROMATE Power charging station, 172800mAh, 600W, USB C, USB A, Fast charge",
        price: 459.99,
        img: "img/electronics2.png",
        category: ""
    },{
        name: "Basic DURACELL AA alkaline batteries, 6 pieces",
        price: 5.99,
        img: "img/electronics3.png",
        category: ""
    },{
        name: "Kemot Solar Inverter PROsolar-2500, Power 1800W / 2500VA, 24V",
        price: 379.99,
        img: "img/electronics4.png",
        category: ""
    },{
        name: "BACHMANN 921.017 socket adapter, 2 Schuko sockets, white",
        price: 4.99,
        img: "img/electronics5.png",
        category: ""
    },{
        name: "Double switch LIVOLO with touch made of glass New Series, Gray",
        price: 19.99,
        img: "img/electronics6.png",
        category: ""
    },{
        name: "Laptop ASUS Vivobook 15, AMD Ryzen 7 HD, 16GB, SSD 512GB, AMD Radeon Graphics, Free DOS, Cool Silver",
        price: 389.99,
        img: "img/laptop1.png",
        category: "device"
    },{
        name: "Laptop Gaming LENOVO LOQ, AMD Ryzen 5, FHD, 24GB, SSD 512GB, NVIDIA GeForce RTX 3050 6GB, Free DOS, Luna Gray",
        price: 549.99,
        img: "img/laptop2.png",
        category: "device"
    },{
        name: "Laptop Gaming MSI Thin GF63 12VE-067XRO, Intel Core i5, 16GB, SSD 512GB, NVIDIA GeForce RTX 4050 6GB",
        price: 799.99,
        img: "img/laptop3.png",
        category: "device"
    },{
        name: "Laptop ASUS Vivobook S 14 OLED, AMD Ryzen 5.16GB, SSD 512GB, AMD Radeon Graphics, Free DOS",
        price: 599.99,
        img: "img/laptop4.png",
        category: "device"
    },{
        name: "Phone SAMSUNG Galaxy A15, 128GB, 4GB RAM, Dual SIM, Blue Black",
        price: 114.99,
        img: "img/phone1.png",
        category: "device"
    },{
        name: "Phone SAMSUNG Galaxy S24 Ultra 5G, 1 TB, 12GB RAM, Dual SIM, Titanium Black",
        price: 1199.99,
        img: "img/phone2.png",
        category: "device"
    },{
        name: "APPLE phone iPhone 16 Pro Max 5G, 256GB, Natural Titanium",
        price: 1299.99,
        img: "img/phone3.png",
        category: "device"
    },{
        name: "Phone XIAOMI Redmi Note 13 Pro+ 5G, 512GB, 12GB RAM, Dual SIM, Purple",
        price: 479.99,
        img: "img/phone4.png",
        category: "device"
    },{
        name: "APPLE iPad Air 13 (M2) tablet, 256GB, Cellular, Space Gray",
        price: 999.99,
        img: "img/tablet1.png",
        category: "device"
    },{
        name: "Tablet SAMSUNG Galaxy Tab S9, 11, 256GB, 12GB RAM, Wi-Fi, Graphite",
        price: 779.99,
        img: "img/tablet2.png",
        category: "device"
    },{
        name: "APPLE iPad Air 11 (M2) tablet, 128GB, Wi-Fi, Space Gray",
        price: 549.99,
        img: "img/tablet3.png",
        category: "device"
    },{
        name: "Tablet SAMSUNG Galaxy Tab A9 Plus, 11, 64GB, 4GB RAM, Wi-Fi + 5G, Graphite",
        price: 179.99,
        img: "img/tablet4.png",
        category: "device"
    },{
        name: "Smart LED TV HISENSE 70A6K, UltraHD 4K, HDR, 178cm",
        price: 479.99,
        img: "img/tv1.png",
        category: "device"
    },{
        name: "Smart LED TV SAMSUNG 65DU8572, Ultra HD 4K, HDR, 163cm",
        price: 599.99,
        img: "img/tv2.png",
        category: "device"
    },{
        name: "QNED Smart TV LG 50QNED86T3A, Ultra HD 4K, HDR, 126cm",
        price: 519.99,
        img: "img/tv3.png",
        category: "device"
    },{
        name: "Smart OLED TV PHILIPS 42OLED818, Ultra HD 4K, HDR10+, 106cm",
        price: 889.99,
        img: "img/tv4.png",
        category: "device"
    },{
        name: "Candy extendable sofa, 3 seats, storage box, 190 x 100 x 95 cm, dark blue",
        price: 499.99,
        img: "img/couch1.png",
        category: "couch"
    },{
        name: "Extendable sofa Rafael 160, Iza, bed, Relaxa, chest, bedside tables, pillows, powder pink color, plus, 250x105x85",
        price: 789.99,
        img: "img/couch2.png",
        category: "couch"
    },{
        name: "Kombin extendable sofa, 2 seats, 140 x 70 x 60 cm, anthracite-cream gray",
        price: 199.99,
        img: "img/couch3.png",
        category: "couch"
    },{
        name: "Extendable U Corner With Lada Dax, Right, Adjustable Headrests, Grey, 365 Cm",
        price: 2499.99,
        img: "img/couch4.png",
        category: "couch"
    },{
        name: "Berlin armchair, natural leather, 115x100x95 cm, Black",
        price: 499.99,
        img: "img/achair1.png",
        category: "couch"
    },{
        name: "Armchair with Recliner KJC4423, Black, 100 x 106 x 107 cm",
        price: 399.99,
        img: "img/achair2.png",
        category: "couch"
    },{
        name: "Armchair, 85 x 85 x 104 cm, Grey",
        price: 389.99,
        img: "img/achair3.png",
        category: "couch"
    },{
        name: "Avatoon armchair, fabric, 75 x 110 x 72 cm, black-white",
        price: 409.99,
        img: "img/achair4.png",
        category: "couch"
    },{
        name: "TV wall mount HAMA 220867, mobile, 32-65, 40kg, black",
        price: 89.99,
        img: "img/tvstand1.png",
        category: ""
    },{
        name: "TV wall mount HAMA 108712, adjustable, 32-65, 25kg, black",
        price: 79.99,
        img: "img/tvstand2.png",
        category: ""
    },{
        name: "CINEMOUNT MF3220 TV wall mount, fixed, 40, 25kg, black",
        price: 49.99,
        img: "img/tvstand3.png",
        category: ""
    },{
        name: "TV wall support VOGELS TVM 3623, adjustable, 40-77, 35kg, black",
        price: 159.99,
        img: "img/tvstand4.png",
        category: ""
    },{
        name: "CHI Farouk Royal Treatment Pearl Complex hair treatment, 59ml",
        price: 19.99,
        img: "img/hair1.png",
        category: "cosmetical"
    },{
        name: "PANTENE Bamboo hair treatment, 100ml",
        price: 14.99,
        img: "img/hair2.png",
        category: "cosmetical"
    },{
        name: "Wella Professionals Oil Reflections Luminous Reboost hair mask, 500ml",
        price: 27.99,
        img: "img/hair3.png",
        category: "cosmetical"
    },{
        name: "Hair conditioner L'OREAL Professionnel Radiance System for Colored Hair, 200ml",
        price: 17.99,
        img: "img/hair4.png",
        category: "cosmetical"
    },{
        name: "Fleurance Nature organic satin dry body oil, 50ml",
        price: 17.99,
        img: "img/skincare1.png",
        category: "cosmetical"
    },{
        name: "ELMIPLANT after hair removal balm, 100ml",
        price: 2.99,
        img: "img/skincare2.png",
        category: "cosmetical"
    },{
        name: "Body lotion ELMIPLANT Beloved Vanilla, 400ml",
        price: 5.99,
        img: "img/skincare3.png",
        category: "cosmetical"
    },{
        name: "Anti-cellulite active draining oil, Gamarde, organic, 200 ml",
        price: 49.99,
        img: "img/skincare4.png",
        category: "cosmetical"
    },{
        name: "HOT CHOCOLATE Volumizing Semi-Matte Liquid Lipstick with Collagen, no. 3, LIPOJEN, 5 ml",
        price: 18.99,
        img: "img/makeup1.png",
        category: "cosmetical"
    },{
        name: "L`Oreal Paris Color Riche Matte moisturizing lipstick with mattifying effect, 7 ml",
        price: 11.99,
        img: "img/makeup2.png",
        category: "cosmetical"
    },{
        name: "Makeup Revolution Set: Retro Luxe Liquid Lipstick, Matte, Royal, 5.5 ml + Retro Luxe Lip Pencil, 1 g",
        price: 5.99,
        img: "img/makeup3.png",
        category: "cosmetical"
    },{
        name: "MAKEUP REVOLUTION Mascara The Mascara Revolution, 12ml",
        price: 6.99,
        img: "img/makeup4.png",
        category: "cosmetical"
    },{
        name: "CLINIQUE All About Eyes eye cream, 15ml",
        price: 21.99,
        img: "img/mask1.png",
        category: "cosmetical"
    },{
        name: "GEROVITAL H3 Evolution Hyaluronic Acid anti-wrinkle face cream, 50ml",
        price: 12.99,
        img: "img/mask2.png",
        category: "cosmetical"
    },{
        name: "NEUTROGENA Refreshingly Clear cleansing gel, skin with imperfections, 200ml",
        price: 8.99,
        img: "img/mask3.png",
        category: "cosmetical"
    },{
        name: "Micellar water BIODERMA Hydrabio H2O, 500ml",
        price: 6.99,
        img: "img/mask4.png",
        category: "cosmetical"
    },{
        name: "UNDER ARMOR UA Boxed Sportstyle SS men T-shirt, size L, blue",
        price: 16.99,
        img: "img/shirt1.png",
        category: ""
    },{
        name: "UNDER ARMOR Sportstyle LC SS men T-shirt, size S, white",
        price: 14.99,
        img: "img/shirt2.png",
        category: ""
    },{
        name: "Women T-shirt UNDER ARMOR UA W Sportstyle Logo SS, size L, pink",
        price: 18.99,
        img: "img/shirt3.png",
        category: ""
    },{
        name: "SIKS neoprene t-shirt for slimming, black, size XXL",
        price: 6.99,
        img: "img/shirt4.png",
        category: ""
    },{
        name: "Snowboard jacket for men, Fundango, Privet Jacket, Black, L",
        price: 219.99,
        img: "img/jacket1.png",
        category: ""
    },{
        name: "Ski jacket for men, Benger, Scott, Blue, XL",
        price: 199.99,
        img: "img/jacket2.png",
        category: ""
    },{
        name: "FISCHER Bansko men jacket, M, green",
        price: 209.99,
        img: "img/jacket3.png",
        category: ""
    },{
        name: "Ski jacket for men, ONeill, Originals Puffer, White, M",
        price: 169.99,
        img: "img/jacket4.png",
        category: ""
    },{
        name: "Men sport shoes UNDER ARMOR UA Hovr Phantom 3 Se, size 44, black",
        price: 59.99,
        img: "img/shoe1.png",
        category: ""
    },{
        name: "Men shoes Asics GEL-KAYANO 30, Light Green, 44",
        price: 149.99,
        img: "img/shoe2.png",
        category: ""
    },{
        name: "Nike React Pegasus Trail 4 Sports Shoes, Black, 44",
        price: 109.99,
        img: "img/shoe3.png",
        category: ""
    },{
        name: "New Balance EvoZ men shoes, Blue, 45",
        price: 119.99,
        img: "img/shoe4.png",
        category: ""
    },{
        name: "Columbia Expeditionist Shield Men Boots, Brown, 43",
        price: 219.99,
        img: "img/newarr1.png",
        category: ""
    },{
        name: "Men shorts UNDER ARMOR UA Vanish Woven 2In1 Sts, size XL, black",
        price: 49.99,
        img: "img/newarr2.png",
        category: ""
    },{
        name: "Unisex slippers SPEEDO Slides One Piece, size 40.5, blue",
        price: 29.99,
        img: "img/newarr4.png",
        category: ""
    },{
        name: "Men sweatpants UNDER ARMOR Unstoppable Joggers, size L, black",
        price: 58.99,
        img: "img/newarr3.png",
        category: ""
    }
]
// butons for cart
openAcc.addEventListener("click", () => {
    account.classList.add("active")
})
closeAcc.addEventListener("click", () => {
    account.classList.remove("active")
})  
openCart.addEventListener("click", () => {
    shoppingCart.classList.add("active")
})
closeCart.addEventListener("click", () => {
    shoppingCart.classList.remove("active")
})
browseCatBtn.addEventListener("click", () => {
    categories.classList.toggle("active")
})
categories.addEventListener("click", () => {
    categories.classList.remove("active")
})

// function for smaller screen size to change the tabs
collapBtn.addEventListener("click", () => {
    collapDiv.classList.add("active")
})
closeCollap.addEventListener("click", () => {
    collapDiv.classList.remove("active")
})
collapBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (sellOptions[index].classList.contains("active")) {
            sellOptions[index].classList.remove("active");
            button.classList.remove("active");
        } else {
            collapBtns.forEach(tab => tab.classList.remove("active"));
            sellOptions.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            sellOptions[index].classList.add("active");
        }
    });
});


// Search input
const searchResult = document.querySelector(".search-result")
const searchInput = document.querySelector(".search-bar")
const searchProducts = (input, div) => {
    const trimInput = input.value.trim().toLowerCase()

    div.innerHTML = "";

    if(trimInput) {
        div.classList.add("active")
        const matchedProducts = items.filter(pro => pro.name.toLowerCase().includes(trimInput))
        if(matchedProducts.length > 0) {
            matchedProducts.forEach((product) => {
                const { name, price, img } = product;
                const shortenedText = cutText(name, 50)
                div.innerHTML += `
                <div onclick="showProInfo('${shortenedText}', ${price}, '${img}')">
                <img src="${img}">
                <h2>${shortenedText}</h2>
                <p>$${price}</p>               
                </div>
                `
            })
        } else {
            div.innerHTML = "<h4>Sorry, no products found</h4>"
        }
    } else {
        div.classList.remove("active")
    }
}
searchInput.addEventListener("input", () => {
    searchProducts(searchInput, searchResult)
})
collapSearch.addEventListener("input", () => {
    searchProducts(collapSearch, collapResult)
})

// Get items in order and their category
const featuredItems = items.slice(0, 6);
const babyItems = items.slice(6, 12);
const furnitureItems = items.slice(12, 17);
const electronicsItems = items.slice(18, 23);
const laptopItems = items.slice(24, 28);
const phoneItems = items.slice(28, 32);
const tabletItems = items.slice(32, 36)
const televisionsItems = items.slice(36, 40)
const sofasItems = items.slice(40, 44)
const armChairsItems = items.slice(44, 48)
const tvStandsItems = items.slice(48, 52)
const furnitureSecItems = items.slice(12, 16)
const hairItems = items.slice(52, 56)
const skinCareItems = items.slice(56, 60)
const makeUpItems = items.slice(60, 64)
const masksItems = items.slice(64, 68)
const shirtsItems = items.slice(68, 72)
const jumpersItems = items.slice(72, 76)
const shoesItems = items.slice(76, 80)
const newArrItems = items.slice(80, 84)



// Function to shorten the text
const cutText = (text, amount) => {
    let textLenght = text.length
    if(textLenght > amount) {
        const newText = text.slice(0, amount - 1) + "...";
        return newText
    }
    return text
}
// function to show all the items on the page
const showItems = (arr, div) => {
    arr.forEach((item, index) => {
        let { name, price, img } = item;
        const shortenedText = cutText(name, 55)
        div.innerHTML += `
        <div class="item-box">
        <div class="item-img">
            <img draggable="false" onclick="showProInfo('${shortenedText}', ${price}, '${img}')" src="${img}" alt="">
            <button onclick="addToCartArr('${shortenedText}', ${price}, '${img}')">Add To Cart</button>
        </div>
        <div onclick="showProInfo('${shortenedText}', ${price}, '${img}')" class="item-desc">
            <h2 class="item-name">${shortenedText}</h2>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>(35) reviews</p>
            </div>
            <h1>$${price}<span>net</span></h1>
        </div>
    </div>
        `
    })
}
// Function to show more info on the product when clicked on
const showProInfo = (name, price, img) => {
    const item_page = document.createElement("div");
    item_page.classList.add("item-page")
    body.appendChild(item_page)

   item_page.innerHTML += `
      <div class="item-page">
        <i id="x-mark" class="fa-solid fa-xmark"></i>
        <div class="item-box">
            <h2>${name}</h2>
            <div class="item-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>(35) reviews</p>
            </div>
            <div class="item-desc">
                <div>
                    <img draggable="false" src="${img}" alt="">
                    <span class="heart"><i class="fa-regular fa-heart"></i></span>
                    <span id="protection-bar"><i class="fa-solid fa-bars"></i></span>
                </div>
                <div>
                    <h3>$${price}</h3>
                    <button class="addCartPro" onclick="addToCartArr('${name}', ${price}, '${img}')">Add To Cart</button>
                    <button><i class="fa-solid fa-location-dot"></i> FInd In Store</button>
                    <div class="protection">
                    <h2>Add Extra Guarantee</h2>
                    <div class="first-div">
                        <input type="checkbox">
                        <p>1 year - $100</p>
                    </div>
                    <div>
                        <input type="checkbox">
                        <p>2 years - $200</p>
                    </div>
                    <h2>Add Product Protect</h2>
                    <div>
                        <input type="checkbox">
                        <p>1 year - $115</p>
                    </div>
                    <div>
                        <input type="checkbox">
                        <p>2 years - $209</p>
                    </div>
                    <div>
                        <input type="checkbox">
                        <p>3 years - $289</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="desc">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam totam ullam ea placeat delectus, suscipit accusamus perspiciatis atque vero aspernatur omnis earum. Aliquid et ducimus earum excepturi ipsum fugit, nihil unde quaerat provident reiciendis temporibus consectetur laborum officiis? Laboriosam voluptate rem voluptatibus repellendus quasi, iste sunt corporis vero odit ab aut non cum numquam beatae cupiditate nobis magni? <span> Praesentium dolor ullam corporis rem doloremque vel nobis distinctio quam et. Ipsum nihil ex corporis perferendis similique distinctio pariatur fugiat nam aliquid eius molestias ea soluta animi quo voluptate, molestiae quia eos repudiandae maiores itaque. Fuga voluptatum eveniet deserunt aperiam quisquam</span>.</p>
            </div>
        </div>
    `

    const addCartPro = item_page.querySelector(".addCartPro");
    addCartPro.addEventListener("click", () => {
        addCartPro.style.border = "2px solid #0b2639"
    })
    const heart = item_page.querySelector(".heart")
    heart.addEventListener("click", () => {
        isTrue = !isTrue
        heart.innerHTML = isTrue ? `<i style="color: #b11b13" class="fa-solid fa-heart"></i>` : `<i class="fa-regular fa-heart"></i>`;
    })
    const xmark = item_page.querySelector("#x-mark");
    xmark.addEventListener("click", () => {
        item_page.remove()
    })

    const protectionBar = document.querySelector("#protection-bar");
      const protectionDiv = document.querySelector(".protection");


    protectionBar.addEventListener("click", () => {
    protectionDiv.classList.toggle("active")
})
}
// Add items to the cart
const addToCartArr = (name, price, img) => {
    cartArr.push({
        cartName: name,
        cartImg: img,
        cartPrice: price,
    });
    cartNumItems += 1
    cartAmount.textContent = cartNumItems
    showCartItems()
    updateTotal()
}
// Display the items in the cart
const showCartItems = () => {
    cart.innerHTML = "";
    cartArr.forEach((item, index) => {
        const { cartName, cartImg, cartPrice } = item;
        const cartItem = document.createElement("div")
        cartItem.classList.add("cart-item")
        cart.appendChild(cartItem)
        cartItem.innerHTML += `
                <img src="${cartImg}" alt="">
                <h2>${cartName}</h2>
                <p>$${cartPrice}</p>
                <span id="delete-item">
                    <i class="fa-solid fa-dumpster"></i>
                </span>
        `
        const deleteItem = cartItem.querySelector("#delete-item");
        deleteItem.addEventListener("click", () => {
            cartArr.splice(index, 1);
            showCartItems()
            updateTotal()
            saveData()
            cartNumItems -= 1
            cartAmount.textContent = cartNumItems
        })
        saveData()
    })
}


// to display divs as another page and on categories
const filterFunc = (name, div) => {
    div.innerHTML = "";
    const matchedItems = items.filter(pro => pro.category.toLowerCase().includes(name))
    showItems(matchedItems, div)
}
filterFunc("device", contDivDevices)
filterFunc("couch", contDivCouches)
filterFunc("kitchen", contDivKitchens)
filterFunc("cosmetic", contDivCosmetics)


// function to update and display the total price
const updateTotal = () => {
    const totalPrice = cartArr.reduce((acc, el) => {
        const price = parseFloat(el.cartPrice) || 0;
        return acc + price;
    }, 0);

    total.textContent = `$${totalPrice.toFixed(2)}`; 
} 

// function to change the tabs on the items in the page
const changeTabs = (buttons, divs) => {
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach(tab=>{tab.classList.remove("active")})
            button.classList.add("active");
            divs.forEach(content=>{content.classList.remove("active")})
            divs[index].classList.add("active")
        })
    })
}
changeTabs(bestSellerOpt, bestSellingDiv)
changeTabs(electricProOpt, electricProDiv)
changeTabs(furnitureProOpt, furnitureProDiv)
changeTabs(healthNdBeautyOpt, healthNdBeautyDiv)
changeTabs(clothingProOpt, clothingProDiv)
changeTabs(homeCategories, containers)
//Display all
showItems(featuredItems, featuredItemsDiv)
showItems(babyItems, babyItemsDiv)
showItems(furnitureItems, furnitureItemsDiv)
showItems(electronicsItems, electronicsItemsDiv)
showItems(laptopItems, laptopsDiv)
showItems(phoneItems, phonesDiv)
showItems(tabletItems, tabletsDiv)
showItems(televisionsItems, tvsDiv)
showItems(sofasItems, sofasDiv)
showItems(armChairsItems, armChairsDiv)
showItems(tvStandsItems, tvStands)
showItems(furnitureSecItems, furnitureDiv)
showItems(hairItems, hairDiv)
showItems(skinCareItems, skinCareDiv)
showItems(makeUpItems, makeUpDiv)
showItems(masksItems, masksDiv)
showItems(shirtsItems, shirtsDiv)
showItems(jumpersItems, jumpersDiv)
showItems(shoesItems, shoesDiv)
showItems(newArrItems, newArrDiv)