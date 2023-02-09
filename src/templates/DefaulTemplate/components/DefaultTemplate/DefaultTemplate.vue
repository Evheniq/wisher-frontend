<template>
  <div class="base" :class="{ dark: darkMode }">
    <div class="top-wrapper">
      <HeaderComponent v-model:dark-mode="darkMode" />
      <RouterView></RouterView>
    </div>

    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import { ref, onMounted, watch } from "vue";
import HeaderComponent from "@/templates/DefaulTemplate/components/HeaderPart/components/HeaderComponent.vue";
import FooterComponent from "@/templates/DefaulTemplate/components/FooterComponent/components/FooterComponent.vue";

const darkMode = ref(false);

onMounted(() => {
  const darkModeSaved = localStorage.getItem("darkMode");

  // If not saved darkMode - we check OS setting
  if (!darkModeSaved) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkMode.value = true;
      console.log("Dark mode from OS setting is: ", darkMode.value);
    }

    return;
  }

  // Change darkMode model if state not same by default. We need this for fewer renders.
  const parsedDarkMode = !!JSON.parse(darkModeSaved);
  if (darkMode.value !== parsedDarkMode) {
    darkMode.value = parsedDarkMode;
    console.log("darkMode from local storage: ", darkMode.value);
    return;
  }

  console.log("Same darkMode: ", darkMode.value);
});

watch(darkMode, () => {
  localStorage.setItem("darkMode", darkMode.value.toString());
  console.log("darkMode saved to localStorage with value: ", darkMode.value);
});
</script>

<style lang="scss">
.top-wrapper {
  min-height: calc(100vh - 44px);
}
</style>
