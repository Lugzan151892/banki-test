<template>
  <input
    :value="value"
    :class="$style[className]"
    :placeholder="placeholder"
    @input="$emit('input', $event.target?.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIInput",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Введите",
    },
  },
  data() {
    const componentName = "UIInput";
    const className = "ui-input";
    return {
      componentName,
      className,
    };
  },
});
</script>

<style lang="scss" module>
$component: "ui-input";
.#{$component} {
  border: 1px solid var(--main-gray);
  background: none;
  outline: none;
  padding: 13px 16px;
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  &:active,
  &:focus {
    border: 1px solid var(--secondary-gray);
  }
}
</style>
