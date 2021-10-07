<template>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 valign-wrapper">
          <div class="card">
            <div class="card-content">
              <span class="card-title center"
                ><b> Welcome to KDU Student Space!</b>
              </span>
              <p style="font-size: 12px">Additional Text</p>
              <br />
              <form>
                <div class="row">
                  <div class="col s12">
                    <vs-input
                      v-model="value1"
                      label="Registration Number"
                      placeholder="e.g.: D/BSE/19/0001"
                    >
                    </vs-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12">
                    <vs-input
                      type="password"
                      label="Password"
                      icon-after
                      v-model="value2"
                      placeholder="Type your password here"
                    >
                    </vs-input>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-action center">
              <button class="btn">Log in</button>
            </div>
          </div>
        </div>
        <div class="col s12 m6 valign-wrapper">
          <img src="@/assets/login.png" class="responsive-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.background {
  background-color: #835acf52;
}

.card {
  border-radius: 1em;
  min-height: 75vh;
}

.card-content {
  height: 60vh;
}

.valign-wrapper {
  height: 100vh;
}

.card-title {
  color: #5e5acf;
}

button {
  background-color: #5e5acf !important;
  border-radius: 2em;
}

.vs-input {
  width: 100%;
}
</style>