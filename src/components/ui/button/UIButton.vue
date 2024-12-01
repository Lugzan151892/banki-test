<template>
  <button
    :disabled="disabled"
    :class="{
      [$style[className]]: true,
      [$style[`${className}--disabled`]]: disabled,
      [$style[`${className}--checked`]]: checked,
    }"
    @click="$emit('click')"
  >
    <img v-if="checked" :src="check" alt="checked" />
    <slot />
  </button>
</template>

<script lang="ts">
import check from "@/assets/images/check.svg";

export default {
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
  },
  data() {
    const componentName = "UIButton";
    const className = "ui-button";
    return {
      componentName,
      className,
      check,
    };
  },
};
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

  &:hover {
    background-color: var(--button-hover);
    cursor: pointer;
  }

  &--disabled {
    background-color: var(--button-disabled);
    pointer-events: none;
  }

  &--checked {
    background-color: var(--button-checked);
    padding: 14px 8px;
  }
}
</style>
