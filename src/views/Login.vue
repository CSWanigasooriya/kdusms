<template>
  <div>
    <form>
      <div>
        <vs-input label-placeholder="Registration no." v-model="value" />
        <vs-input label-placeholder="Password" v-model="value" />
      </div>
      <vs-button color="rgb(187, 138, 200)" type="relief">Submit</vs-button>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>