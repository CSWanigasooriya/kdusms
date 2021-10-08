<template>
  <div class="content">
    <Header />
    <SideNav />
    <main>
      <router-view></router-view>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SideNav from "../components/SideNav.vue";
// import Footer from "../components/Footer.vue";

export default {
  components: { Header, SideNav },
  name: "Dashboard",
};
</script>