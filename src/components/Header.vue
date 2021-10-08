<template>
  <div>
    <nav class="z-depth-0 transparent">
      <!-- Add Navbar Here -->
      <div class="nav-wrapper">
        <!-- <a class="brand-logo blue-text text-darken-2">Logo</a> -->
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/login" active-class="active" tag="a" custom
              ><i class="material-icons black-text">logout</i></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  padding-left: 332px;
}
</style>