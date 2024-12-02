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
      @click="cardModal = true"
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
        <UIButton
          :checked="card.status === ECARD_STATUS.RESERVED"
          :loading="isLoading"
          @click="handleClick(card)"
        >
          {{ card.status === ECARD_STATUS.RESERVED ? "В корзине" : "Купить" }}
        </UIButton>
      </div>
      <div class="text3" :class="$style[`${className}-price--sold`]" v-else>
        Продана на аукционе
      </div>
    </div>
    <UIModal v-if="cardModal" @close="cardModal = false">
      <div :class="$style[`${className}-slider`]">
        <div :class="$style[`${className}-slider--title`]" class="text1">
          {{ card.title }}
        </div>
        <div class="text3">Описание: {{ card.description }}</div>
        <div class="text3">
          Цена: {{ card.price.toLocaleString("ru-RU") }} &dollar;
        </div>
        <div
          :class="$style[`${className}-slider--container`]"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            :class="$style[`${className}-slider--item`]"
            v-for="(image, index) in card.additional_images"
            :key="index"
          >
            <img :src="image" :alt="'Slide ' + (index + 1)" />
          </div>
        </div>
        <div :class="$style[`${className}-slider--actions`]">
          <UIButton
            @click="
              prevSlide();
              stopAutoSlide();
            "
            >❮</UIButton
          >
          <UIButton
            @click="
              nextSlide();
              stopAutoSlide();
            "
            >❯</UIButton
          >
        </div>
      </div>
    </UIModal>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { ECARD_STATUS, IGalleryCard } from "@/views/main/interfaces";
import UIButton from "@/components/ui/button/UIButton.vue";
import UIModal from "@/components/ui/modal/UIModal.vue";
export default defineComponent({
  name: "GalleryCard",
  props: {
    card: {
      type: Object as PropType<IGalleryCard>,
      required: true,
    },
  },
  components: {
    UIButton,
    UIModal,
  },
  data() {
    const componentName = "GalleryCard";
    const className = "gallery-card";
    return {
      componentName,
      className,
      ECARD_STATUS,
      cardModal: false,
      currentIndex: 0,
      interval: null as null | number,
      isLoading: false,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex =
        (this.currentIndex + 1) % this.card.additional_images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.card.additional_images.length) %
        this.card.additional_images.length;
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    async handleClick(card: IGalleryCard) {
      this.isLoading = true;
      await new Promise((res) => {
        setTimeout(() => {
          res({});
          console.log("fake promise");
        }, 2000);
      });
      this.$emit(
        "set-status",
        card.status === ECARD_STATUS.ACTIVE
          ? ECARD_STATUS.RESERVED
          : ECARD_STATUS.ACTIVE
      );

      this.isLoading = false;
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
});
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

  &-image {
    cursor: pointer;
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

  &-slider {
    position: relative;
    width: 600px;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 100%;
    }

    &--title {
      margin-bottom: 16px;
    }

    &--container {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    &--item {
      min-width: 100%;
      box-sizing: border-box;
    }

    &--item img {
      width: 100%;
      display: block;
    }

    &--actions {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
    }
  }
}
</style>
