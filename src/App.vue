<template>
  <div class="nav">
<Header/>
<router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "nav",
  components: {
    Header

  }
};
</script>
