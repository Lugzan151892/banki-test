<template>
  <div :class="$style[className]" @click.self="closeModal">
    <div :class="$style[`${className}-modal`]">
      <div :class="$style[`${className}-modal--content`]">
        <slot />
      </div>
      <div :class="$style[`${className}-modal--actions`]">
        <UIButton @click="closeModal">Закрыть</UIButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UIButton from "@/components/ui/button/UIButton.vue";

export default {
  name: "UIModal",
  components: {
    UIButton,
  },
  data() {
    const className = "ui-modal";

    return {
      className,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" module>
$component: "ui-modal";
.#{$component} {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  display: grid;
  justify-content: center;
  align-items: center;

  &-modal {
    background-color: var(--main-gray);
    padding: 16px;
    border-radius: 8px;
    margin: 0 24px;

    &--actions {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
