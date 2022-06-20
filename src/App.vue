<template>
  <NavbarComponent />
  <LoaderComponent v-if="getLoadingState" />
  <div v-else></div>
  <AlertComponent :type="getMsgType" :msg="getAlertMsg" v-if="getAlertMsg" />
  <RouterView />
</template>

<script>
import LoaderComponent from "./components/LoaderComponent.vue";
import AlertComponent from "./components/AlertComponent.vue";
import NavbarComponent from "./components/Navbar.component.vue";

export default {
  name: "App",
  components: { LoaderComponent, AlertComponent, NavbarComponent },
  computed: {
    getLoadingState() {
      return this.$store.getters.getLoadingState;
    },
    getAlertMsg() {
      return this.$store.getters.getAlertMsg;
    },
    getMsgType() {
      return this.$store.getters.getMsgType;
    },
  },
};
</script>

<style>
@import "@/assets/base.css";
</style>
