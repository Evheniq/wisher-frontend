<template>
  <button type="button" class="default-button" :disabled="props.disabled">
    {{ props.text }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
@import "@/assets/variable.scss";

.default-button {
  @apply w-full
  block
  text-white
  mx-auto
  font-medium
  text-sm
  px-5
  py-2.5

  focus:outline-none
  focus:ring-1
  focus:ring-yellow-400

  dark:focus:ring-1
  dark:focus:ring-yellow-900;

  @include default-shadow;
  @include primary-background-color;

  border-radius: $default-border-radius;

  &:hover {
    @apply bg-yellow-500;
  }

  &:disabled {
    background-color: $disabled-color;
  }
}
</style>
