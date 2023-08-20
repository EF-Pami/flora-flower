const mainElement = document.querySelector(".flowerdetails")
const querystring = document.location.search;
console.log({querystring});
const params = new URLSearchParams(querystring);
const id = params.get('id');

const BASE_URL = 'https://localhost/flower-power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}';
const Product_detail = BASE_URL + id;


async function fetchdata() {
    const response = await fetch(Product_detail);
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
        <h1> ${data.name}</h1>
        <p> ${data.description}</p>
        <p> ${data.Price}</p>   
    </div>
    <div>
        <img src ="${product.image[0]?.src}" alt="${product.name??'product Image'}">
    </div>    
    `
    document.title = 'product_details';

}

renderHTml()