<template>
  <h1>Client Storage</h1>
</template>
<script>
//Create
document.cookie = "name=victoria";
//Read
console.log( document.cookie );
//Update
document.cookie = "name=victoria lo";
//Delete - Menetapkan tanggal kadaluwarsa yang telah berlalu
document.cookie = "name=victoria lo ; expires = Thu, 01 Jan 2010 00:00:00 GMT"



// // let openRequest = indexedDB.open('users', 1);
// // user adalah nama database dan 1 adalah versinya
// openRequest.onupgradeneeded = function() {
// // dijalankan bila client tidak memiliki database
// // ...menjalankan inisialisasi...
// };
// openRequest.onerror = function() {
//   console.error("Error", openRequest.error);
// };
// openRequest.onsuccess = function() {
//   let db = openRequest.result;
// // melanjutkan untuk bekerja dengan database menggunakan db object
// };
//
//
//
//
// // Create
// const user = { first: 'Victoria', last: 'AAA' }
// // seperti menyimpan stringified JSON
// // sessionStorage.setItem('user', JSON.stringify(user));
// // Read
// // console.log(JSON.parse(localStorage.getItem('user')))
// //output akan menjadi JSON: {first: "Victoria", last: "lo"}
// // Update
// const update = { first: 'Victoria', last: 'Lo' }
// // sessionStorage.setItem('user', JSON.stringify(update));
// // Delete
// // sessionStorage.removeItem('user');
</script>
