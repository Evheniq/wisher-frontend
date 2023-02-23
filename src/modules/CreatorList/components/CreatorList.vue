<template>
  <!--  {{ env }}-->
  <main>
    <div class="container-base">
      <div class="title-input">
        <input
          type="text"
          placeholder="Write title here"
          v-model="titleInput"
        />
      </div>
    </div>

    <Wishlist
      v-model:wish-items="wishItems"
      :enable-editing-wishes="true"
      :isLoadingItems="isLoadingItems"
    />

    <div class="wish-container">
      <ButtonCustom
        text="Share"
        :disabled="!wishItems.length"
        @click="submitWishList"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Wishlist, { IWishItem, IWishlist } from "@/components/Wishlist";
import { getHints, publishWishlist } from "../api/api";
import ButtonCustom from "@/UI/ButtonCustom/ButtonCustom.vue";

const titleInput = ref<String>("");

const isLoadingItems = ref<Boolean>(true);
const wishItems = ref<IWishItem[]>([]);

const env = import.meta.env;

async function loadHints(): Promise<void> {
  isLoadingItems.value = true;
  wishItems.value = await getHints();
  isLoadingItems.value = false;
}

async function submitWishList() {
  const data = {
    // title: titleInput.value.toString(),
    //
    // // TODO: Is it ok?
    // items: wishItems.value.map((item) => {
    //   return { id: item.id, name: item.name, completed: item.completed };
    // }),

    data: {
      Title: titleInput.value,
      creator_wishlist: "string or id",
      wishitems: wishItems.value.map((item) => {
        return {
          name: item.name,
          completed: item.completed,
        };
      }),
    },
  };
  console.log(await publishWishlist(data));
}

onMounted(async () => {
  await loadHints();
});
</script>

<style lang="scss">
.wish {
  &-container {
    max-width: 350px;
    margin: 0 auto;
  }
}

main {
  min-height: calc(100vh - 40px);
}

.title-input {
  @apply mt-20 text-center;

  input {
    @apply text-center mx-auto;
    width: 95%;
    max-width: 300px;
  }
}
</style>
