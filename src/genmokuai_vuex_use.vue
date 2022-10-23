<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 -->
  <div>
    APP
    <!-- 1使用根模块state的数据 -->
    {{ $store.state.username }}
    <!-- 2使用根模块getters的数据 -->
    <p>{{ $store.getters["newName"] }}</p>
    <button @click="mutationsFn">修改名字</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    // 使用vuex仓库
    const store = useStore();
    // 使用根模块state的数据
    console.log(store.state.username);
    // 使用根模块getters的数据
    console.log(store.getters["newName"]);
    // 提交根模块mutations函数
    const mutationsFn = () => {
      // store.commit("updateName");
      // 调用根模块actions函数
      store.dispatch("updateNameLs");
    };
    return { mutationsFn };
  },
};
</script>

<style>
</style>