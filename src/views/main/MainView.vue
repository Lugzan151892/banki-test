<template>
  <main :class="$style[className]">
    <HeaderComponent />
    <section :class="$style[`${className}-section`]">
      <h1>Картины эпохи Возрождения</h1>
      <div :class="$style[`${className}-wrapper`]">
        <GalleryCard v-for="card in cards" :card="card" :key="card.id" />
      </div>
    </section>
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import { cards } from "@/views/main/utils";
import GalleryCard from "@/views/main/components/GalleryCard.vue";

export default {
  name: "MainView",
  components: {
    HeaderComponent,
    GalleryCard,
    FooterComponent,
  },
  data() {
    const className = "main-view";
    const componentName = "MainView";

    return {
      className,
      componentName,
      cards,
    };
  },
};
</script>

<style lang="scss" module>
$component: "main-view";
.#{$component} {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-section {
    margin: 0 auto;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    padding-top: 45px;
    flex-grow: 1;
  }

  &-wrapper {
    margin-top: 39px;
    display: flex;
    gap: 32px;
  }
}
</style>
