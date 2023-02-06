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
  @apply w-full focus:outline-none block text-white mx-auto focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 dark:focus:ring-yellow-900;
  @include default-shadow;

  background-color: $primary-color;
  border-radius: $default-border-radius;

  .dark & {
    background-color: $primary-dark-color;
  }

  &:hover {
    @apply bg-yellow-500;
  }

  &:disabled {
    background-color: $disabled-color;
  }
}
</style>
