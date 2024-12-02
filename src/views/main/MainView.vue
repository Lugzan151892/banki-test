<template>
  <main :class="$style[className]">
    <HeaderComponent @search="search = $event" />
    <section :class="$style[`${className}-section`]">
      <h1 class="text1">Картины эпохи Возрождения</h1>
      <div :class="$style[`${className}-wrapper`]">
        <GalleryCard
          v-for="card in filteredCards"
          :card="card"
          :key="card.id"
          @set-status="setStatus($event, card.id)"
        />
      </div>
    </section>
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import { cards, LOCAL_CARDS_VAR } from "@/views/main/utils";
import GalleryCard from "@/views/main/components/GalleryCard.vue";
import { ECARD_STATUS, IGalleryCard } from "@/views/main/interfaces";
import { defineComponent } from "vue";

export default defineComponent({
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
      search: "",
    };
  },
  computed: {
    filteredCards(): IGalleryCard[] {
      return this.cards.filter((card) => card.title.includes(this.search));
    },
  },

  methods: {
    setStatus(status: ECARD_STATUS, cardId: number) {
      this.cards = this.cards.map((card) =>
        cardId === card.id
          ? {
              ...card,
              status: status,
            }
          : card
      );

      localStorage.setItem(LOCAL_CARDS_VAR, JSON.stringify(this.cards));
    },
  },

  mounted() {
    const localCards = localStorage.getItem(LOCAL_CARDS_VAR);

    if (localCards) {
      this.cards = JSON.parse(localCards);
    }
  },
});
</script>

<style lang="scss" module>
$component: "main-view";
.#{$component} {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &-section {
    margin: 0 auto;
    padding-top: 45px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-width: 1250px;

    @media (max-width: 1366px) {
      margin: 0 24px 24px;
      min-width: auto;
    }
  }

  &-wrapper {
    margin-top: 39px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
}
</style>
