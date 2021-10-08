<template>
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li>
      <div class="user-view">
        <a href="#user"
          ><img class="circle" src="https://picsum.photos/200"
        /></a>
        <a href="#name"><span class="white-text name">KDU SMS</span></a>
        <a href="#email"
          ><span class="white-text email">jdandturk@gmail.com</span></a
        >
      </div>
    </li>
    <li>
      <router-link to="/home" active-class="active" tag="a" custom>
        <i class="material-icons">home</i>
        <span>Home</span>
      </router-link>
    </li>
    <li>
      <router-link to="/course" active-class="active" tag="a" custom>
        <i class="material-icons">book</i>
        <span>Courses</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
#slide-out {
  background: #5e5acf;
  margin: 1em !important;
  max-height: 95vh;
  border-radius: 1em;
  padding-left: 1em;
  padding-top: 40px;
}

#slide-out li a {
  color: white !important;
}

#slide-out li a:hover {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

#slide-out li a i {
  color: white !important;
}

.active {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgb(255, 255, 255);
  font-weight: bold;
}

.active span {
  filter: invert(75%) sepia(32%) saturate(7%) hue-rotate(335deg) brightness(98%)
    contrast(95%);
}
.active i {
  filter: invert(75%) sepia(32%) saturate(7%) hue-rotate(335deg) brightness(98%)
    contrast(95%);
}
</style>