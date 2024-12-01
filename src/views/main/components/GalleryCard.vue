<template>
  <div :class="$style[className]">
    <img
      :class="$style[`${className}-image`]"
      :src="card.image"
      :alt="card.title"
    />
    <div :class="$style[`${className}-wrapper`]">
      <h2>{{ card.title }}</h2>
      <div :class="$style[`${className}-price`]">
        <div :class="$style[`${className}-price--wrapper`]">
          <h6 :class="$style[`${className}-price--old`]" v-if="card.old_price">
            {{ card.old_price.toLocaleString("ru-RU") }} &dollar;
          </h6>
          <h4>{{ card.price.toLocaleString("ru-RU") }} &dollar;</h4>
        </div>
        <UIButton> Купить </UIButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IGalleryCard } from "@/views/main/interfaces";
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
  border: 1px solid var(--main-gray);

  &-wrapper {
    padding: 24px;
  }

  &-price {
    display: flex;
    gap: 21px;
    align-items: center;

    &--wrapper {
      display: flex;
      flex-direction: column;
    }

    &--old {
      text-decoration: line-through;
      color: var(--text-secondary);
    }
  }
}
</style>
