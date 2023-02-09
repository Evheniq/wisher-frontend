<!-- TODO write styles -->
<template>
  <button @click="goBack">Go back</button>
  404 Page not found:
  <template v-for="path in $route.params.pathMatch"> {{ path }}/</template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  window.history.length > 1 ? router.go(-1) : router.push("/");
}
</script>
