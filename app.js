import { menu, buttonsData } from "./db.js";
import { calculatePrice } from "./helpers.js";

const menuArea = document.getElementById("menu-area");
const buttonsArea = document.getElementById("buttons-area");
// sayfanin yukenme olayını izleme

document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");
  renderMenuItems(menu);
});

// butonlar kisminda tiklanma olaylarini izler
buttonsArea.addEventListener("click", searchCategory);

//ekrana menu elemanlarini basar

function renderMenuItems(menuItems) {
  console.log(menuItems);

  //dizideki her bir obje icin bir html elemani olustur
  //bu html diziye aktar
  //stringe cevir

  let menuHTML = menuItems.map((item) => {
    //.'dan sonra iki basamak alma

    //? newPrice = newPrice.toFixed(2);

    return `
  <a href="/productDetail.html?id=${item.id}"
  id="card"
  class="d-flex flex-md-row flex-column text-decoration-none text-dark gap-3"
  
>
  <img
    class="rounded-shadow"
    src=${item.img}
  />
  <div>
    <div class="d-flex justify-content-between">
      <h5 class="text-success">${item.title}</h5>
      <p class="text-success">&#8378; ${calculatePrice(item.price)}</p>
    </div>
    <p class="lead">${item.desc}</p>
  </div>
</a>
`;
  });
  //diziyi stringe cevirir
  menuHTML = menuHTML.join(" ");

  //olusturdugumuz htmli ekrana bas
  menuArea.innerHTML = menuHTML;
}

//urunleri listeler
function searchCategory(e) {
  const category = e.target.dataset.category;
  //tum dizi elemanlarindan yalnizca kategori degeri
  //butonun kategori degeriyle eslesen gelir
  const filteredMenu = menu.filter((item) => item.category === category);

  //hepsi secilirse o zaman butun menuyu ekrana bas
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    //filtrenmis diziyi ekrana bas
    renderMenuItems(filteredMenu);
  }

  //butonlari guncelle
  renderButtons(category);
  //filtered diziyi ekrana basma

  //?renderMenuItems(filteredMenu);
}

//ekrana butonlari basacak fonksiyon

function renderButtons(active) {
  // eski butonlari kaldirma
  buttonsArea.innerHTML = " ";

  //yeni butonlar olusturma
  buttonsData.forEach((btn) => {
    //html butonu olustur
    const buttonEle = document.createElement("button");

    //gerekli classlari verme
    buttonEle.className = "btn btn-outline-dark filter-btn";

    //icerisindeki yaziyi degistirme
    buttonEle.innerText = btn.text;

    //hangi kategori oldugu bigisini buton elementine ekleme
    buttonEle.dataset.category = btn.value;

    // eger ki aktif kategoriyle buton eslesirse ona farkli class ver
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }

    //html'e gonderme
    buttonsArea.appendChild(buttonEle);
  });
}
