<template>
  <main @click.stop="selectWishItemInput">
    <div class="container-base">
      <div class="wishlist">
        <h1 class="text-center">Create Wishlist</h1>
        <div class="title-input">
          <input
            type="text"
            placeholder="Write title here"
            v-model="titleInput"
          />
        </div>

        <div class="wish-block wish-container">
          <div class="wish-items-list" @click.stop>
            <div v-if="wishItemsExist" class="wish-item text-center pl-0">
              No wishes yet
              <div class="separator"></div>
            </div>
            <template v-else>
              <div
                v-for="wishItem in wishList"
                :key="wishItem.id"
                class="wish-item"
                @click.stop="selectWishItemInput(wishItem.id)"
                ref="itemRefs"
              >
                <input type="checkbox" v-model="wishItem.completed" />
                <span
                  class="checkmark"
                  @click.stop="wishItem.completed = !wishItem.completed"
                ></span>
                <div class="text">
                  <span
                    v-if="wishItem.id !== selectedWish"
                    style="display: inline-block"
                    :class="{ 'line-through': wishItem.completed }"
                  >
                    {{ wishItem.name }}
                  </span>
                  <span v-else>
                    <input type="text" v-model="wishItem.name" :autofocus="wishItem.id == selectedWish" />
                  </span>
                </div>
                <span class="delete" @click="deleteWishItem(wishItem.id)">
                  <font-awesome-icon icon="fa-solid fa-xmark" class="icon" />
                </span>
                <div class="separator"></div>
              </div>
            </template>
          </div>
          <input
            class="w-10/12"
            type="text"
            placeholder="Write what you want..."
            v-model="wishesName"
          />
          <span
            class="wish-item-add-btn text-amber-50 text-center"
            @click="addItem"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </span>
        </div>
        <div class="wish-container">
          <ButtonComponent text="Share" :disabled="!wishList.length" />
        </div>
      </div>
    </div>
  </main>

<!--  <PlaygroundComponent />-->
</template>

<script setup lang="ts">
import PlaygroundComponent from "@/components/PlaygroundComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

interface WishItem {
  id: number;
  name: string;
  completed: boolean;
}

import {computed, reactive, ref, onMounted, watch} from "vue";

const titleInput = ref("");
const wishesName = ref("");
const selectedWish = ref<number | null>();
const itemRefs = ref([]);
let wishList = ref([{ id: 1, name: "car", completed: false }]);

function addItem() {
  if (wishesName.value.length < 3) {
    return;
  }

  wishList.value.push({
    id: Date.now(),
    name: wishesName.value,
    completed: false,
  });

  wishesName.value = "";
}

function deleteWishItem(idItem: number) {
  wishList.value = wishList.value.filter((wishItem: WishItem) => {
    return wishItem.id !== idItem;
  });
}

function selectWishItemInput(idItem: number | null) {
  selectedWish.value = idItem;
}

const wishItemsExist = computed<Boolean>(() => !wishList.value.length);

// TODO: fix plroblem with double click on wishitem text
// onMounted(() => console.log(itemRefs.value));
// watch(wishList, (newValue) => console.log(newValue), { immediate: true });
// watch(selectedWish, (newValue) => console.log("selectedWish", itemRefs.value.filter(item => item)));

</script>

<style lang="scss">
@import "@/assets/variable.scss";

.wishlist {
  padding: 5% 0;

  h1 {
    @apply text-2xl font-medium;
  }

  .title-input {
    @apply mt-3 text-center;
    input {
      @apply text-center mx-auto w-full;
      max-width: 300px;
    }
  }

  .wish-item-add-btn {
    display: inline-block;
    cursor: pointer;
    width: 37px;
    height: 37px;
    background: $primary-color;
    border-radius: 50px;
    line-height: 35px;
    margin-top: 10px;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
      width: 35px;
      height: 35px;
      line-height: 35px;
      margin-left: 7px;
    }

    &:hover {
      @apply bg-yellow-500;
    }

    &:active {
      background: #f2b13f;
    }
  }
}

.wish {
  &-container {
    max-width: 350px;
    margin: 0 auto;
  }

  &-block {
    @apply my-6 dark:bg-gray-800;

    background: $white;
    box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 20px 24px;

    @media screen and (max-width: 400px) {
      padding: 20px 20px;
    }
  }

  &-item {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    //user-select: none;
    cursor: text;

    &:hover {
      .delete {
        display: block;
      }
    }

    .delete {
      display: none;
      position: absolute;
      right: -10px;
      top: 3px;
      color: #cccccc;
      font-size: 16px;

      :hover {
        color: #e60404;
        cursor: pointer;
      }

      .icon {
        padding: 7px 10px;
        border-radius: 5px;
        background-color: #f0f0f0;
      }
    }

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input[type="text"] {
      @apply dark:bg-gray-800 border-0 w-5/6 p-0;
      font-size: 22px;
    }

    .checkmark:hover {
      background-color: #ccc;
    }

    input:checked ~ .checkmark {
      background-color: #f3a321;
    }

    .checkmark:after {
      left: 10px;
      top: 7px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    input:checked ~ .checkmark:after {
      display: block;
    }

    .checkmark {
      border-radius: 30px;
      position: absolute;
      top: 5px;
      left: 0;
      height: 27px;
      width: 27px;
      background-color: #eee;
      cursor: pointer;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .separator {
      @apply border-b border-gray-300 dark:border-white;

      width: 90%;
      margin: 0 auto;
      padding-bottom: 15px;
    }
  }
}
</style>
