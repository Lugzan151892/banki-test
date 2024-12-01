<template>
  <button
    :disabled="disabled"
    :class="{
      [$style[className]]: true,
      [$style[`${className}--disabled`]]: disabled,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "UIButton",
  props: {
    disabled: {
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
    };
  },
};
</script>

<style lang="scss" module>
$component: "ui-button";
.#{$component} {
  background-color: var(--main-black);
  color: var(--main-white);
  padding: 12px 36px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  &:hover {
    background-color: var(--button-hover);
    cursor: pointer;
  }

  &--disabled {
    background-color: var(--button-disabled);
    pointer-events: none;
  }
}
</style>
