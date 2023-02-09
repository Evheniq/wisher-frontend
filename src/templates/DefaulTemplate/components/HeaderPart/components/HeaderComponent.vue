<template>
  <MenuSideSection :open-menu="openMenu" />
  <header>
    <div class="container-base text-center flex flex-row justify-between">
      <div class="basis-1/6 md:basis-1/4 mt-8 mr-2">
        <MenuButton v-model:open-menu="openMenu" />
      </div>
      <div class="basis-4/6 md:basis-1/2 mt-4">
        <LogoComponent />
      </div>
      <div class="basis-1/6 ml-0 mt-8 sm:basis-1/6 md:basis-1/4 md:ml-2">
        <!--  TODO: Is it good? (key: 1)    -->
        <ToggleDarkMode
          :dark-mode="props.darkMode"
          @toggleDarkMode="$emit('update:darkMode', !props.darkMode)"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MenuSideSection from "@/templates/DefaulTemplate/components/HeaderPart/components/MenuSideSection.vue";
import MenuButton from "@/templates/DefaulTemplate/components/HeaderPart/components/MenuButton.vue";
import LogoComponent from "@/templates/DefaulTemplate/components/HeaderPart/components/LogoComponent.vue";
import ToggleDarkMode from "@/templates/DefaulTemplate/components/HeaderPart/components/ToggleDarkMode.vue";

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: false,
  },
});

const openMenu = ref(false);
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

.auth-block {
  .auth-btn {
    color: #ffc75b;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #f1c986;
    }

    &:active {
      color: #d8a544;
    }
  }
}
</style>
