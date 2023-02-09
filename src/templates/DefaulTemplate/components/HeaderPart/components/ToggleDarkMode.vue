<template>
  <span class="ml-0 md:ml-3 text-sm font-medium dark:text-gray-300">
    {{ props.darkMode ? "Dark" : "Light" }}
    <span class="hidden md:inline">mode</span>
  </span>

  <br />

  <label class="relative inline-flex items-center cursor-pointer">
    <!--  TODO: Is it good? (key: 1)    -->
    <input
      type="checkbox"
      :checked="props.darkMode"
      @click="$emit('toggleDarkMode')"
      class="sr-only peer"
    />
    <span
      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"
    ></span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
