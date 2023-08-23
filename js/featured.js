const featuredflowers = document.querySelector(".featuredflowers")
const featured = document.querySelector(".featured")

const featuredurl = 'https://cors.noroff.dev/pami.no/wp-json/wc/store/products?featured=true'

//const BASE_URL = 'https://cors.noroff.dev/pami.no/wp-json/wc/store/products?'
async function fetchdata() {
    try {
        //console.log (BASE_URL)
        const response = await fetch(featuredurl);
        const featured = await response.json();
        return featured;

    }   catch (error) {
        //console.error(error);
    }
    
}

async function renderHTml() {
    const products = await fetchdata();
    //const featuredProducts = products.filter(products => products.featured);
    //console.log({products})
    //console.log({html: flowers_block.innerHTML})
    featured.innerHTML = ``;
    products.forEach(function (products, index) {
        featured.innerHTML += `
        <img src="${products.images[0].src}" alt="${products.name}"/>
        
        `
    })
}

renderHTml()

