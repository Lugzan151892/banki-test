<template>
  <div :class="$style[className]">
    <MenuComponent />
    <div :class="$style[`${className}-info`]">
      <a :class="$style[`${className}-info--item`]">
        <img :src="phone" />
        <div>+7 (812) 555-55-55</div>
      </a>
      <a :class="$style[`${className}-info--item`]">
        <img :src="place" />
        <div>г. Санкт-Петербург, ул. Ефимова, 3</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import MenuComponent from "../menu/MenuComponent.vue";
import phone from "@/assets/images/phone.svg";
import place from "@/assets/images/place.svg";

export default {
  name: "FooterComponent",
  components: {
    MenuComponent,
  },
  data() {
    const componentName = "FooterComponent";
    const className = "footer-component";

    return {
      className,
      componentName,
      phone,
      place,
    };
  },
};
</script>

<style lang="scss" module>
$component: "footer-component";
.#{$component} {
  width: 100%;
  height: 96px;
  background-color: var(--main-footer);
  display: flex;
  align-items: center;
  justify-content: center;

  &-info {
    display: flex;
    gap: 51px;
    margin-left: 126px;
    &--item {
      display: flex;
      gap: 8px;
    }
  }
}
</style>
