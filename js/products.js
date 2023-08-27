const flowers = document.querySelector(".flowers")
const flowers_block = document.querySelector(".flowers-block")
//const WOO_API_KEY ='ck_3652f8cb73dec06049c63fd04a29fbb32e837c8b'
//const WOO_API_SECRET ='cs_aaa7268a9a0546bf8bb5e89935e011ee68643b9b'
//const BASE_URL = `https://localhost/flower-power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`
const BASE_URL = 'https://cors.noroff.dev/pami.no/wp-json/wc/store/products?'
async function fetchdata() {
    try {
        //console.log (BASE_URL)
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;

        } catch (error) {
        //console.error(error);
    }
    
}



async function renderHTml() {
    const products = await fetchdata();
    
    console.log({products})
    //console.log({html: flowers_block.innerHTML})
    flowers_block.innerHTML = ``;
    
    products.forEach((products) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productsName = document.createElement("h4");
        productsName.textContent = products.name;

        const thumbnailimg = document.createElement("img");
        thumbnailimg.src =products.images[0].src || ""; 
        thumbnailimg.alt = products.name
        productDiv.appendChild(thumbnailimg);

        const productPrices = document.createElement("p");
        productPrices.textContent = "prices:" + products.prices.price;

        const Button = document.createElement("a");
        Button.textContent = "View More";
        Button.className = "cta-button";
        Button.href = `productdetails.html?id=${products.id}`;
        
        
        productDiv.appendChild(productsName);
        productDiv.appendChild(productPrices);
        productDiv.appendChild(Button);
        flowers_block.appendChild(productDiv);

    })
}
        
renderHTml()

