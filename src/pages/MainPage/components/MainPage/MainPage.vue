<template>
  <!--  <WishList-->
  <!--    title="Create Wishlist"-->
  <!--    :enable-add-items="true"-->
  <!--    v-model:wish-items="items"-->
  <!--  />-->

  <creator-list :enable-add-items="true" />
  <!--  <PlaygroundComponent />-->
</template>

<script setup lang="ts">
import CreatorList from "@/modules/CreatorList/components/CreatorList.vue";
</script>

<style lang="scss" scoped></style>
