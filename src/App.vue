<template>
  <div class="container">
    APP
    {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'ls' })">
      修改用户信息
    </button>
  </div>
</template>

<script>
// import { useStore } from "vuex";
export default {
  name: "App",
  // setup() {
  //   const store = useStore();
  // },
};
</script>

<style>
</style>