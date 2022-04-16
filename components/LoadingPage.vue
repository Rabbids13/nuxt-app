<template>
  <transition>
    <div class="LoadingPage">

    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show:{
      type: Boolean,
      required: true,
      default: false
    }
  },



}
</script>

