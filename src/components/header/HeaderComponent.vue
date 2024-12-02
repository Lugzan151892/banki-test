<template>
  <div :class="$style[className]">
    <MenuComponent />
    <div :class="$style[`${className}-search`]">
      <UIInput
        placeholder="Поиск по названию картины"
        :class="$style[`${className}-search--input`]"
        @input="search = $event"
      />
      <UIButton @click="$emit('search', search)"> Найти </UIButton>
    </div>
  </div>
</template>

<script lang="ts">
import { menuItems } from "@/utils";
import UIInput from "@/components/ui/input/UIInput.vue";
import UIButton from "@/components/ui/button/UIButton.vue";
import MenuComponent from "@/components/menu/MenuComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
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
      search: "",
    };
  },
});
</script>

<style lang="scss" module>
$component: "header-component";
.#{$component} {
  width: 100%;
  height: 97px;
  border-bottom: 1px solid var(--main-gray);

  display: flex;
  align-items: center;
  padding-left: 23vw;

  @media (min-width: 1921px) {
    padding-left: 26vw;
  }

  @media (max-width: 1600px) {
    padding-left: 13vw;
  }

  @media (max-width: 1366px) {
    padding-left: 24px;
    padding-right: 24px;
    justify-content: space-between;
  }

  &-search {
    margin-left: 162px;
    display: flex;

    @media (max-width: 1366px) {
      margin-left: 24px;
    }

    &--input {
      max-width: 294px;
      width: 100%;
    }
  }
}
</style>
