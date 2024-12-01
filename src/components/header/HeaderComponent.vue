<template>
  <div :class="$style[className]">
    <MenuComponent />
    <div :class="$style[`${className}-search`]">
      <UIInput
        placeholder="Поиск по названию картины"
        :class="$style[`${className}-search--input`]"
      />
      <UIButton> Найти </UIButton>
    </div>
  </div>
</template>

<script lang="ts">
import { menuItems } from "@/utils";
import UIInput from "../ui/input/UIInput.vue";
import UIButton from "../ui/button/UIButton.vue";
import MenuComponent from "../menu/MenuComponent.vue";

export default {
  name: "HeaderComponent",
  components: {
    UIInput,
    UIButton,
    MenuComponent,
  },
  data() {
    const componentName = "HeaderComponent";
    const className = "header-component";
    return {
      componentName,
      className,
      menuItems,
    };
  },
};
</script>

<style lang="scss" module>
$component: "header-component";
.#{$component} {
  width: 100%;
  height: 97px;
  border-bottom: 1px solid var(--main-gray);

  display: flex;
  align-items: center;
  justify-content: center;

  &-search {
    margin-left: 162px;

    &--input {
      width: 294px;
    }
  }
}
</style>
