const flora = document.querySelector(".flora")
const featured = document.querySelector(".featured")

const WOO_API_KEY ='ck_3652f8cb73dec06049c63fd04a29fbb32e837c8b'
const WOO_API_SECRET ='cs_aaa7268a9a0546bf8bb5e89935e011ee68643b9b'
const BASE_URL = `https://localhost/flower-power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`

async function fetchdata() {
    try {
        console.log (BASE_URL)
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;

    }   catch (error) {
        //console.error(error);
    }
    
}



async function renderHTml() {
    const featuredproduct = await fetchdata();
    featured.innerHTML = '';

    for(let count = 0; count <= featuredproduct.length; count++) {
        featured.innerHTML += `
        <p>Welcome to Flower Power your excellent flower shop where you will find all what you need for your beautiful occasions and celebrations. At flower power, we help you put a big smile on your love ones faces by providing you with the best pretty flowers needed.</p>
        <img src=${featuredproduct[count].images[0].src} alt=""/>
        
        `
    if (count ==0) break;    
    }
    
        
    }


renderHTml()

