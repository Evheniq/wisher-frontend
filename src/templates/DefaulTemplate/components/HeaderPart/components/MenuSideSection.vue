<template>
  <div class="menu" :class="{ active: props.openMenu }">
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
</template>

<script lang="ts" setup>
const props = defineProps({
  openMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
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
</style>
