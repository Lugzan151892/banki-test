<template>
  <div
    :class="{
      [$style[className]]: true,
      [$style[`${className}--inactive`]]: card.status === ECARD_STATUS.SOLD,
    }"
  >
    <img
      :class="$style[`${className}-image`]"
      :src="card.image"
      :alt="card.title"
    />
    <div :class="$style[`${className}-wrapper`]">
      <h2 class="text2">{{ card.title }}</h2>
      <h2 class="text2">{{ card.author }}</h2>
      <div
        v-if="card.status !== ECARD_STATUS.SOLD"
        :class="$style[`${className}-price`]"
      >
        <div :class="$style[`${className}-price--wrapper`]">
          <span
            class="text6"
            :class="$style[`${className}-price--old`]"
            v-if="card.old_price"
          >
            {{ card.old_price.toLocaleString("ru-RU") }} &dollar;
          </span>
          <span class="text4"
            >{{ card.price.toLocaleString("ru-RU") }} &dollar;</span
          >
        </div>
        <UIButton> Купить </UIButton>
      </div>
      <div class="text3" :class="$style[`${className}-price--sold`]" v-else>
        Продана на аукционе
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ECARD_STATUS, IGalleryCard } from "@/views/main/interfaces";
import UIButton from "@/components/ui/button/UIButton.vue";
export default {
  name: "GalleryCard",
  props: {
    card: {
      type: Object as PropType<IGalleryCard>,
      required: true,
    },
  },
  components: {
    UIButton,
  },
  data() {
    const componentName = "GalleryCard";
    const className = "gallery-card";
    return {
      componentName,
      className,
      ECARD_STATUS,
    };
  },
};
</script>

<style lang="scss" module>
$component: "gallery-card";
.#{$component} {
  max-width: 280px;
  display: flex;
  flex-direction: column;

  &--inactive {
    opacity: 0.5;
  }

  &-wrapper {
    padding: 24px;
    border: 1px solid var(--main-gray);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &-price {
    display: flex;
    gap: 21px;
    align-items: center;
    margin-top: 22px;
    justify-content: space-between;

    &--wrapper {
      display: flex;
      flex-direction: column;
    }

    &--old {
      text-decoration: line-through;
      color: var(--text-secondary);
    }

    &--sold {
      margin-top: 34px;
      text-align: left;
      flex-grow: 1;
    }
  }
}
</style>
