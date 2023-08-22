const mainElement = document.querySelector(".flowerdetails")
const querystring = document.location.search;
console.log({querystring});
const params = new URLSearchParams(querystring);
const id = params.get('id');

const WOO_API_KEY ='ck_3652f8cb73dec06049c63fd04a29fbb32e837c8b'
const WOO_API_SECRET ='cs_aaa7268a9a0546bf8bb5e89935e011ee68643b9b'
const BASE_URL = `https://localhost/flower-power/wp-json/wc/v2/products/${id}?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`
//const product_detail = BASE_URL + id;

async function fetchdata() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    //console.log(data)
    return data;
}
fetchdata();

async function renderHTml() {
    const products = await fetchdata();
    const mainElement = document.querySelector(".flowerdetails");
    mainElement.innerHTML = `
    <div id="details">    
        <h3> ${products.name}</h3>
        <p> ${products.description}</p>
        <p> ${products.Price}</p>
        <p> ${products.regular_price}</p>   
    </div>
    <div>
        <img src ="${products.images[0].src}" alt="${products.name}"/>
    </div>    
    `
    document.title = 'product_details';
    //console.log(products);

}

renderHTml()