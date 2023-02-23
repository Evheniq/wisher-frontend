<template>
  <div class="logo-block">
    <RouterLink to="/">
      <img
        src="../../../../../../public/logo.png"
        alt="logo"
        class="block dark:hidden"
      />
      <img
        src="../../../../../../public/logo-dark.png"
        alt="logo"
        class="hidden dark:block"
      />
    </RouterLink>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo-block {
  img {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;

    @apply mt-2 pl-0 sm:mt-0 md:pl-3;
  }
}
</style>
