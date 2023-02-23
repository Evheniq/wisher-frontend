<template>
  <div @click.stop="selectWishItemInput(null)">
    <div class="container-base">
      <div class="wishlist">
        <h1 class="text-center">{{ props.title }}</h1>

        <div class="wish-block wish-container">
          <div class="wish-items-list">
            <div
              v-if="isLoadingItems && wishItemsExist"
              class="left-position-wish-item wish-item text-center"
            >
              <font-awesome-icon icon="fas fa-spinner" class="fa-spin" />
              <div class="separator"></div>
            </div>
            <div
              v-if="!isLoadingItems && wishItemsExist"
              class="left-position-wish-item wish-item text-center"
            >
              No wishes yet
              <div class="separator"></div>
            </div>
            <template v-else>
              <div
                v-for="wishItem in props.wishItems"
                :key="wishItem.id"
                class="wish-item"
                :class="{ 'selected-item': wishItem.id == selectedWish }"
                @click.stop="selectWishItemInput(wishItem.id)"
              >
                <input type="checkbox" v-model="wishItem.completed" />
                <span
                  class="checkmark"
                  @click.stop="wishItem.completed = !wishItem.completed"
                ></span>

                <div class="text">
                  <span v-if="wishItem.id == selectedWish">
                    <input type="text" v-model="wishItem.name" ref="itemRefs" />
                  </span>
                  <span
                    v-else
                    class="name"
                    :class="{ 'line-through': wishItem.completed }"
                  >
                    {{ wishItem.name }}
                  </span>
                </div>

                <span
                  class="delete"
                  @click="deleteWishItem(wishItem.id)"
                  v-if="props.enableEditingWishes"
                >
                  <font-awesome-icon icon="fa-solid fa-xmark" class="icon" />
                </span>

                <div class="separator"></div>
              </div>
            </template>
            <div class="separator" v-if="props.enableEditingWishes"></div>
          </div>

          <template v-if="props.enableEditingWishes">
            <input
              class="w-10/12"
              type="text"
              placeholder="Write what you want..."
              v-model="wishesName"
              @keyup.enter="addItem"
            />
            <span
              class="wish-item-add-btn text-amber-50 text-center"
              @click="addItem"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { PropType } from "vue";
import type { IWishItem } from "@/components/Wishlist";

const emit = defineEmits(["update:wishItems"]);

const props = defineProps({
  enableEditingWishes: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    require: true,
  },
  wishItems: {
    type: Array as PropType<Array<IWishItem>>,
    required: true,
  },
  isLoadingItems: {
    type: Boolean,
    default: false,
  },
});

const wishesName = ref("");
const selectedWish = ref<number | null>(null);
const itemRefs = ref<HTMLElement[] | null>(null);

function addItem() {
  if (wishesName.value.length < 3) {
    return;
  }

  emit("update:wishItems", [
    ...props.wishItems,
    {
      id: Date.now(),
      name: wishesName.value,
      completed: false,
    },
  ]);

  wishesName.value = "";
}

function deleteWishItem(idItem: number) {
  const clearedWishItems = props.wishItems?.filter(
    (item) => item.id !== idItem
  );

  emit("update:wishItems", clearedWishItems);
}

function selectWishItemInput(idItem: number | null) {
  if (props.enableEditingWishes) {
    selectedWish.value = idItem;
  }
}

const wishItemsExist = computed<Boolean>(() => !props.wishItems.length);

watch(selectedWish, () => {
  itemRefs.value?.forEach((el) => {
    el.focus();
  });
});

// TODO: fix plroblem with double click on wishitem text
// onMounted(() => console.log(itemRefs.value));
// watch(wishList, (newValue) => console.log(newValue), { immediate: true });
// watch(selectedWish, (newValue) => console.log("selectedWish", itemRefs.value.filter(item => item)));
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
@import "@/assets/mixins.scss";

.wishlist {
  //padding: 5% 0;

  h1 {
    @apply text-2xl font-medium;
  }

  .wish-item-add-btn {
    @include primary-background-color;

    display: inline-block;
    cursor: pointer;
    width: 37px;
    height: 37px;
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
    @include default-shadow;

    background: $white;
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
    font-size: 20px;
    cursor: text;

    &:hover {
      .delete {
        display: block;
      }
    }

    &.left-position-wish-item {
      @apply pl-0;
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

    .name {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input[type="text"] {
      @apply dark:bg-gray-700 border-amber-200 w-10/12 p-2 dark:border-orange-50 border outline-0;
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
      top: 2px;
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

    &:last-child {
      .separator {
        display: none;
      }
    }
  }
}

.selected-item .checkmark {
  top: 13px;
}

.selected-item .delete {
  top: 9px;
}
</style>
