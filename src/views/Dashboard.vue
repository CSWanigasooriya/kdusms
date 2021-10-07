<template>
  <div class="content">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  name: "Dashboard",
};
</script>