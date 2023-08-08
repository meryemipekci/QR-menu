//fiyat hesaplama fonksiyonu
export function calculatePrice(price) {
  //fiyatin 15katini alma

  let newPrice = price * 15;

  //.'dan iki basamak ile sinirlama
  newPrice = newPrice.toFixed(2);

  return newPrice;
}
