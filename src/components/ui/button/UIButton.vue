<template>
  <button
    :disabled="disabled || loading"
    :class="{
      [$style[className]]: true,
      [$style[`${className}--disabled`]]: disabled,
      [$style[`${className}--checked`]]: checked,
    }"
    @click="$emit('click')"
  >
    <img
      v-if="loading"
      :src="loadingGif"
      alt="loading"
      :class="$style[`${className}--loading`]"
    />
    <template v-else>
      <img v-if="checked" :src="check" alt="checked" />
      <slot />
    </template>
  </button>
</template>

<script lang="ts">
import check from "@/assets/images/check.svg";
import { defineComponent } from "vue";
import loadingGif from "@/assets/images/loading.gif";

export default defineComponent({
  name: "UIButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const componentName = "UIButton";
    const className = "ui-button";
    return {
      componentName,
      className,
      check,
      loadingGif,
    };
  },
});
</script>

<style lang="scss" module>
$component: "ui-button";
.#{$component} {
  background-color: var(--main-black);
  color: var(--main-white);
  padding: 14px 28px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 115px;
  min-height: 52px;
  position: relative;

  &:hover {
    background-color: var(--button-hover);
    cursor: pointer;
  }

  &--disabled {
    opacity: 0.4;
    background-color: var(--button-disabled);
    pointer-events: none;
  }

  &--checked {
    background-color: var(--button-checked);
    padding: 14px 8px;
  }

  &--loading {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
