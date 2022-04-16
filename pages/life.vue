<template>
  <div>
    <p id="life">{{ msg }}</p>
    <button class="btn btn-success" @click="msg = 'text berubah'">
      update
    </button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:"text awal",
    };
  },
  berforeCreate(){
    console.log("before create");
    console.log(document.getElementById("life"));
  },
  created() {
    console.log("created");
    console.log(document.getElementById("life"));
  },
  beforeMount() {
    console.log("before mount");
    console.log(document.getElementById("life"));
  },
  mounted(){
    console.log("mounted");
    console.log(document.getElementById("life"));
  },
  beforeUpdate() {
    console.log("before update");
    console.log(document.getElementById("life").textContent);
  },
  updated() {
    console.log("updated");
    console.log(document.getElementById("life").textContent);
  },

}
</script>
