const hmimg = document.querySelector(".featured")

const WOO_API_KEY ='ck_6524121645e71d16b42553d87b9327fa150f0973'
const WOO_API_SECRET ='cs_7c36ea27b9e646b8b3da5553fbc748620066273d'
const BASE_URL = `https://localhost/flower-power/wp-json/wc/store/products?per_page=12consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`

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
    const featured = await fetchdata();
    featured.innerHTML = '';

    for(let count = 0; count <= featured.length; count++) {
        featured.innerHTML += `
        <img src ="${featured.image}"alt ="featured flower">
        
        `
    if (count ==0) break;    
    }
    
        
    }


renderHTml()

