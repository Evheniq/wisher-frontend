<template>
  <footer>
    <span>Powered from independent </span>

    <a href="https://war.ukraine.ua/">
      <img
        class="w-4 inline-block"
        src="../../../../../assets/flag-ukraine.png"
        alt="flag-ukraine"
      />
    </a>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

footer {
  @apply dark:bg-gray-800 text-center text-sm py-3 font-medium;
  background-color: $white;
  box-shadow: 0px -1px 0px 0 rgba(0, 0, 0, 0.05);
}
</style>
