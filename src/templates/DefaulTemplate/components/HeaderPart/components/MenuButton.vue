<template>
  <div class="menu-btn" :class="{ active: props.openMenu }" @click="toggleMenu">
    <span></span><span></span><span></span>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:openMenu"]);

const props = defineProps({
  openMenu: {
    type: Boolean,
    required: true,
  },
});

function toggleMenu() {
  emit("update:openMenu", !props.openMenu);
}
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

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
</style>
