<template>
  <div class="menu" :class="{ active: openMenu }">
    <nav>
      <div class="container-base text-center">
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <header>
    <div class="container-base text-center flex flex-row justify-between">
      <div class="basis-1/6 md:basis-1/4 mt-8 mr-2">
        <div
          class="menu-btn"
          :class="{ active: openMenu }"
          @click="openMenu = !openMenu"
        >
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="basis-4/6 md:basis-1/2 mt-4">
        <div class="logo-block">
          <RouterLink to="/">
            <img
              src="../assets/logo.png"
              alt="logo"
              class="block dark:hidden"
            />
            <img
              src="../assets/logo-dark.png"
              alt="logo"
              class="hidden dark:block"
            />
          </RouterLink>
        </div>
      </div>
      <div class="basis-1/6 ml-0 mt-8 sm:basis-1/6 md:basis-1/4 md:ml-2">
        <span class="ml-0 md:ml-3 text-sm font-medium dark:text-gray-300">
          {{ darkMode ? "Dark" : "Light" }}
          <span class="hidden md:inline">mode</span>
        </span>

        <br />

        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            :checked="darkMode"
            @click="$emit('update:darkMode', !darkMode)"
            class="sr-only peer"
          />
          <span
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"
          ></span>
        </label>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

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

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #ffefba;
  transform: translateX(-100%);
  transition: transform 0.5s;
  z-index: 1;

  &.active {
    transform: translateX(0);
  }

  li {
    list-style-type: none;
  }
}

.menu-btn {
  @apply h-11 w-11 sm:w-14 sm:h-14 shadow-gray-100 dark:bg-gray-800 dark:shadow-white dark:border-gray-400;

  position: relative;
  z-index: 2;
  overflow: hidden;
  cursor: pointer;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  .dark & {
    border: 1px solid rgb(199 199 199);
    box-shadow: 2px 3px 0 rgb(129 129 129);
  }

  span {
    @apply dark:bg-gray-50;

    background-color: $black;
    width: 60%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;

    &:nth-of-type(2) {
      top: calc(50% - 7px);
    }

    &:nth-of-type(3) {
      top: calc(50% + 7px);
    }
  }

  &.active span:nth-of-type(1) {
    display: none;
  }

  &.active span:nth-of-type(2) {
    top: 50%;
    transform: translate(-50%, 0%) rotate(45deg);
  }

  &.active span:nth-of-type(3) {
    top: 50%;
    transform: translate(-50%, 0%) rotate(-45deg);
  }
}

.logo-block {
  img {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;

    @apply mt-2 pl-0 sm:mt-0 md:pl-3;
  }
}

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
