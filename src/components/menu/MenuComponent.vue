<template>
  <nav :class="$style[className]">
    <ul :key="item.id" v-for="item in menuItems">
      <li>
        <a href="#">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { menuItems } from "@/utils";

export default {
  name: "MenuComponent",
  data() {
    const componentName = "MenuComponent";
    const className = "menu-component";

    return {
      className,
      componentName,
      menuItems,
    };
  },
};
</script>

<style lang="scss" module>
$component: "menu-component";
.#{$component} {
  display: flex;
  gap: 48px;
}
</style>
