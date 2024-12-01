<template>
  <div :class="$style[className]">
    <nav :class="$style[`${className}--desktop`]">
      <ul :key="item.id" v-for="item in menuItems">
        <li>
          <a href="#">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>
    <div :class="$style[`${className}--mobile`]">
      <img
        :class="$style[`${className}-icon`]"
        :src="burgerMenu"
        alt="menu"
        @click="showMenu = !showMenu"
      />
      <nav
        :class="{
          [$style[`${className}-menu`]]: true,
          [$style[`${className}-menu-top`]]: directionTop,
          [$style[`${className}-menu--opened`]]: showMenu,
        }"
      >
        <ul :key="item.id" v-for="item in menuItems">
          <li>
            <a href="#">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { menuItems } from "@/utils";
import burgerMenu from "@/assets/images/burger-menu.svg";

export default {
  name: "MenuComponent",
  props: {
    directionTop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const componentName = "MenuComponent";
    const className = "menu-component";

    return {
      className,
      componentName,
      menuItems,
      burgerMenu,
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" module>
$component: "menu-component";
.#{$component} {
  &--desktop {
    display: flex;
    gap: 48px;

    @media (max-width: 1366px) {
      display: none;
    }
  }

  &--mobile {
    position: relative;
    @media (min-width: 1365px) {
      display: none;
    }
  }

  &-icon {
    width: 40px;
    height: 40px;
  }

  &-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 69px;
    left: 50%;
    margin-left: 10px;
    transform: translate(-50%);
    padding: 0 30px;
    background-color: var(--main-footer);
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s ease;

    &-top {
      bottom: 69px;
      top: auto;
    }

    &--opened {
      padding: 10px 30px;
      max-height: 230px;
    }
  }
}
</style>
