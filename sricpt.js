// Menangkap elemen-elemen yang dibutuhkan
var popup = document.getElementById("popup");
var popupImage = document.getElementById("popup-image");
var popupTitle = document.getElementById("popup-title");
var popupDescription = document.getElementById("popup-description");
var products = document.getElementsByClassName("product");

// Menambahkan event listener pada setiap produk
for (var i = 0; i < products.length; i++) {
    products[i].addEventListener("click", function() {
        var imageSrc = this.getElementsByTagName("img")[0].src;
        var title = this.getElementsByTagName("h3")[0].innerHTML;
        var description = this.getElementsByTagName("p")[0].innerHTML;

        // Mengisi konten pop-up dengan data produk yang dipilih
        popupImage.src = imageSrc;
        popupTitle.innerHTML = title;
        popupDescription.innerHTML = description;

        // Memunculkan pop-up
        popup.classList.remove("hidden");
    });
}

// Menutup pop-up saat diklik di area di luar konten pop-up
popup.addEventListener("click", function(event) {
    if (event.target == popup) {
        popup.classList.add("hidden");
    }
});
