import { menu } from "./db.js";
import { calculatePrice } from "./helpers.js";

//html de arayuzu gonderecegimix yer
const outlet = document.getElementById("outlet");
/* URL deki parametreleri yonetebilmek icin 
URLSearchParam class,indan bir ornek olusturduk
ornegi olustururken kendi url,inizdeki paramtreleri gonderdik*/

const searchParams = new URLSearchParams(window.location.search);

//get methodu araciligiyla urldeki id parametresine eristik
const paramid = searchParams.get("id");

//! menu icerisinden id sini bildigimiz elemana erisme
const product = menu.find((item) => item.id === Number(paramid));

//buldugumuz urune gore arayuzu ekrana basma

outlet.innerHTML = `
<div class="d-flex justify-content-between align-items-center">
<a href="/"> <img src="images/icons8-home-50.png"></a>
<div>
anasayfa / ${product.category} / ${product.title.toLowerCase()}
</div>
</div>
        <h1 class="text-center my-3 shadow p-2 text-dark">${product.title}</h1>
      <div class="d-flex align-item-center justify-content-center">
      <img
        class="img-fluid rounded shadow-lg"
        src="${product.img}"
        style="max-width: 500px;"
      />
    </div>
    <div>
    <h3 class="my-5">Urunun kategorisi: <span class="text-success"> ${
      product.category
    } </span></h3>
      <h3 class="my-5">Urunun Fiyati: <span class="text-success">${calculatePrice(
        product.price
      )} &#8378 </span></h3>
      </div>
      <p class="lead fs-3">
        ${product.desc}
      </p>
`;
