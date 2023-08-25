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

/*async function renderproductsThumbnails() {
    const productcontainer = document.getElementsByClassName(flowers_block);
    const products = await fetchdata();
    products.forEach((product) =>{
        const thumbnail = document.createElement("div");
        thumbnail.classList.add("product-thumbnail");

        const image = document.createElement("img");
        image.src = product.immageUrl;
        image.alt = product.name;

        const productName = document.createElement("p");
        productName.textContent = product.Name;

        thumbnail.appendChild(image);
        thumbnail.appendChild(productName);
        productcontainer.appendChild(thumbnail);
    });
}

window.onload = renderproductsThumbnails;*/

async function renderHTml() {
    const products = await fetchdata();
    const featuredProducts = products.filter(products => products.featured);
    //console.log({products})
    //console.log({html: flowers_block.innerHTML})
    flowers_block.innerHTML = ``;
    products.forEach(function (products, index) {
        flowers_block.innerHTML += `
        <a href="productdetails.html?id=${products.id}"><img src="${products.images[0].src}" alt="${products.name}"/></a>
        `
    })
}
        
renderHTml()

