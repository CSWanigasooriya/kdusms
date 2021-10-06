<template>
    <div>
        <vs-row vs-w="12">
            <vs-col><Header/></vs-col>
        </vs-row>
   
    <!-- <button @click="$router.push('/login')">Login</button> -->
    </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    components: {Header},
    name: 'Dashboard'
}
</script>