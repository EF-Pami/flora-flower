const mainElement = document.querySelector(".flowerdetails")
const querystring = document.location.search;
console.log({querystring});
const params = new URLSearchParams(querystring);
const id = params.get('id');

const WOO_API_KEY ='ck_3652f8cb73dec06049c63fd04a29fbb32e837c8b'
const WOO_API_SECRET ='cs_aaa7268a9a0546bf8bb5e89935e011ee68643b9b'
const BASE_URL = `https://localhost/flower-power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`
const product_detail = BASE_URL + id;

async function fetchdata() {
    const response = await fetch(product_detail);
    const data = await response.json();
    //console.log(data)
    return data;
}
fetchdata();

async function renderHTml() {
    const data = await fetchdata();
    const mainElement = document.querySelector(".flowerdetails");
    mainElement.innerHTML = `
    <div class="details">    
        <h3> ${data.name}</h3>
        <p> ${data.description}</p>
        <p> ${data.Price}</p>
        <p> ${data.regular_price}</p>   
    </div>
    <div>
        <img src ="${data.permalink?.src}" alt="">
    </div>    
    `
    document.title = 'product_details';

}

renderHTml()