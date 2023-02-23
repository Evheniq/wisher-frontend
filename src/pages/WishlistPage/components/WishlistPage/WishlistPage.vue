<template>
  <wish-list :enable-add-items="false" title="test" :wish-items="posts" />
</template>

<script setup>
import WishList from "@/components/Wishlist/components/WishList/WishlistComponent.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

let posts = ref([]);

async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: 1,
          _limit: 7,
        },
      }
    );

    posts.value = await Promise.all(
      response.data.map(async (post) => {
        return {
          id: post.id,
          name: post.title,
          completed: false,
        };
      })
    );
  } catch (e) {
    console.log(e);
  }

  console.log(posts);
}

onMounted(async () => {
  await fetchPosts();
});
</script>

<style lang="scss" scoped></style>
