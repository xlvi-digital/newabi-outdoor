// document.addEventListener("alpine:init", () => {
//   Alpine.data("product", () => ({
//     searchQuery: "",
//     product: null, // Data produk yang akan ditampilkan
//     tenda: [
//       { id: 1, name: "Big Dome 6 Pro", img: "img/product/tenda/2.jpg", price: 75000 },
//       { id: 2, name: "Easy Dome 2 ", img: "img/product/tenda/3.jpg", price: 20000 },
//       { id: 3, name: "Bespot", img: "img/product/tenda/4.jpg", price: 35000 },
//       { id: 4, name: "Borneo 3", img: "img/product/tenda/5.jpg", price: 40000 },
//       { id: 5, name: "Borneo 4", img: "img/product/tenda/1.jpg", price: 50000 },
//     ],
//     carrier: [
//       { id: 6, name: "Daypack", img: "img/product/carrier/2.jpg", price: 10000 },
//       { id: 7, name: "Sunature Futura Pro", img: "img/product/carrier/3.jpg", price: 20000 },
//       { id: 8, name: "Deuter Futura 32", img: "img/product/carrier/4.jpg", price: 35000 },
//       { id: 9, name: "Osprey Kestrey 48", img: "img/product/carrier/1.jpg", price: 40000 },
//     ],
//     masak: [
//       { id: 10, name: "Kompor Kotak", img: "masak1.jpg", price: 12000 },
//       { id: 11, name: "Kompor Mawar", img: "masak2.jpg", price: 15000 },
//       { id: 12, name: "Kompor Koper", img: "masak3.jpg", price: 20000 },
//       { id: 13, name: "Cooking Seet 200", img: "masak4.jpg", price: 12000 },
//       { id: 14, name: "Cooking Seet 308", img: "masak5.jpg", price: 15000 },
//       { id: 15, name: "Gas Portable Refil", img: "masak6.jpg", price: 8000 },
//     ],
//     penerangan: [
//       { id: 16, name: "HeadLamp", img: "penerangan1.jpg", price: 8000 },
//       { id: 17, name: "Headlamp Electric", img: "penerangan2.jpg", price: 10000 },
//       { id: 18, name: "Lampu Tenda", img: "penerangan3.jpg", price: 8000 },
//     ],
//     pribadi: [
//       { id: 18, name: "Sleping Bag", img: "pribadi1.jpg", price: 8000 },
//       { id: 19, name: "Tracking Pole", img: "pribadi2.jpg", price: 10000 },
//       { id: 20, name: "Sarung Tangan", img: "pribadi3.jpg", price: 10000 },
//       { id: 21, name: "Sepatu Tracking", img: "pribadi4.jpg", price: 25000 },
//     ],
//     tambahan: [
//       { id: 22, name: "Matras Spons", img: "tambahan1.jpg", price: 5000 },
//       { id: 23, name: "Matras Lipat Spons", img: "tambahan2.jpg", price: 10000 },
//       { id: 24, name: "Flysheet", img: "tambahan3.jpg", price: 15000 },
//       { id: 25, name: "Meja & Kursi Lipat", img: "tambahan4.jpg", price: 15000 },
//     ],
//     get featuredProducts() {
//       return [this.tenda[0], this.carrier[0], this.masak[0], this.penerangan[0], this.pribadi[0], this.tambahan[0]];
//     },
//     cart: JSON.parse(localStorage.getItem("cart")) || [],
//     init() {
//       const productId = getProductId();
//       this.product = this.items.find((item) => item.id == productId);

//       this.cart = JSON.parse(localStorage.getItem("cart")) || [];
//       console.log("Cart synchronized:", this.cart);
//     },

//     get cartCount() {
//       return this.cart.reduce((total, item) => total + item.quantity, 0);
//     },

//     addToCart(product) {
//       const existingProduct = this.cart.find((item) => item.id === product.id);

//       if (existingProduct) {
//         existingProduct.quantity++;
//       } else {
//         this.cart.push({ ...product, quantity: 1 });
//       }

//       // Trigger reactivity update untuk Alpine.js
//       this.cart = [...this.cart];

//       // Simpan perubahan ke localStorage
//       localStorage.setItem("cart", JSON.stringify(this.cart));

//       // SweetAlert untuk notifikasi
//       const Toast = Swal.mixin({
//         toast: true,
//         position: "center",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//         },
//       });
//       Toast.fire({
//         icon: "success",
//         title: `${product.name} Dimasukan Ke Keranjang`,
//         customClass: {
//           icon: "swal2-icon-center",
//         },
//       });
//     },

//     get filteredItems() {
//       return this.searchQuery.trim() ? this.items.filter((item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase())) : this.items; // Jika input kosong, tampilkan semua produk
//     },
//   }));

//   Alpine.data("cartPage", () => ({
//     cart: JSON.parse(localStorage.getItem("cart")) || [],
//     quantity: JSON.parse(localStorage.getItem("quantity")) || 0,
//     init() {
//       // Sinkronisasi cart dengan localStorage
//       this.cart = JSON.parse(localStorage.getItem("cart")) || [];
//       console.log("Cart synchronized:", this.cart);
//     },

//     get cartCount() {
//       return this.cart.reduce((total, item) => total + item.quantity, 0);
//     },
//     addToCart(product, quantity = 1) {
//       const existingProduct = this.cart.find((item) => item.id === product.id);

//       if (existingProduct) {
//         existingProduct.quantity++;
//       } else {
//         this.cart.push({ ...product, quantity: quantity });
//       }

//       // Trigger reactivity update untuk Alpine.js
//       this.cart = [...this.cart];

//       // Simpan perubahan ke localStorage
//       localStorage.setItem("cart", JSON.stringify(this.cart));

//       // SweetAlert untuk notifikasi
//       const Toast = Swal.mixin({
//         toast: true,
//         position: "center",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//         },
//       });
//       Toast.fire({
//         icon: "success",
//         title: `${product.name} Telah Dicancel`,
//         customClass: {
//           icon: "swal2-icon-center",
//         },
//       });
//     },

//     removeFromCart(productId) {
//       // Filter untuk menghapus item berdasarkan ID
//       this.cart = this.cart.filter((item) => item.id !== productId);

//       // Update localStorage setelah perubahan
//       localStorage.setItem("cart", JSON.stringify(this.cart));

//       const Toast = Swal.mixin({
//         toast: true,
//         position: "center",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//         },
//       });
//       Toast.fire({
//         icon: "success",
//         title: `Product Telah Dicancel`,
//         customClass: {
//           icon: "swal2-icon-center",
//         },
//       });
//     },

//     calculateSubTotal() {
//       return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
//     },
//     calculateTax() {
//       return this.calculateSubTotal() * 0.1; // Pajak 10%
//     },
//     calculateTotal() {
//       return this.calculateSubTotal() + this.calculateTax();
//     },
//     get cartCount() {
//       return this.cart.reduce((total, item) => total + item.quantity, 0);
//     },

//     checkout() {
//       if (this.cart.length === 0) {
//         alert("Keranjang belanja Anda kosong!");
//         return;
//       }

//       let message = "Halo, saya ingin memesan:\n\n";

//       this.cart.forEach((item, index) => {
//         message += `${index + 1}. ${item.name} - Qty: ${item.quantity}\n`;
//       });

//       const total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//       message += `\nTotal: Rp${total.toLocaleString("id-ID")}\n\n`;
//       message += "Terima kasih!";

//       const encodedMessage = encodeURIComponent(message);
//       const phoneNumber = "6287721561947"; // Ganti dengan nomor WhatsApp Anda
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//       window.open(whatsappUrl, "_blank");
//     },
//   }));

//   function getProductId() {
//     const params = new URLSearchParams(window.location.search);
//     return params.get("id");
//   }
// });

// // Konversi Rupiah

// const rupiah = (number) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 0,
//   }).format(number);
// };
document.addEventListener("alpine:init", () => {
  Alpine.store("cart", {
    items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    count: 0,
    add(product) {
      const exist = this.items.find((p) => p.id === product.id);
      if (exist) {
        exist.quantity += product.quantity || 1;
      } else {
        this.items.push({ ...product, quantity: product.quantity || 1 });
      }
      this.updateCount();
      this.save();
    },
    remove(id) {
      this.items = this.items.filter((p) => p.id !== id);
      this.updateCount();
      this.save();
    },
    updateCount() {
      this.count = this.items.reduce((acc, p) => acc + p.quantity, 0);
    },
    save() {
      localStorage.setItem("cartItems", JSON.stringify(this.items));
    },
    clear() {
      this.items = [];
      this.count = 0;
      this.save();
    },
  });
  Alpine.store("cart").updateCount();

  Alpine.data("product", () => ({
    items: [
      { id: 1, name: "Tenda Dome", price: 50000, img: "img/product/tenda/1.jpg" },
      { id: 2, name: "Carrier 60L", price: 35000, img: "img/product/carrier/1.jpg" },
      { id: 3, name: "Kompor Portable", price: 20000, img: "img/product/masak/1.jpg" },
      { id: 4, name: "Matras Camping", price: 15000, img: "img/product/pribadi/1.jpg" },
      { id: 5, name: "Sleeping Bag", price: 25000, img: "img/product/pribadi/3.jpg" },
      { id: 6, name: "Lampu Tenda", price: 10000, img: "img/product/penerangan/1.jpg" },
      { id: 7, name: "Sepatu Gunung", price: 70000, img: "img/product/pribadi/1.jpg" },
      { id: 8, name: "Jas Hujan", price: 12000, img: "img/product/pribadi/2.jpg" },
      { id: 9, name: "Cooking Set", price: 30000, img: "img/product/masak/2.jpg" },
      { id: 10, name: "Tracking Pole", price: 25000, img: "img/product/tambahan/2.jpg" },
      { id: 11, name: "Headlamp", price: 15000, img: "img/product/penerangan/2.jpg" },
      { id: 12, name: "Kursi Lipat", price: 25000, img: "img/product/tambahan/1.jpg" },
    ],
    get featuredProducts() {
      return this.items.slice(0, 4);
    },
    get latestProducts() {
      return this.items.slice(4, 12);
    },
  }));
});

// Format harga ke Rupiah
function rupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}
