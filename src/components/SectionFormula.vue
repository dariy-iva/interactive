<template>
  <section class="formula">
    <h2 class="formula__title">Нежный <strong>аромат</strong></h2>

    <div class="formula__content">
      <div class="formula__ingredients">
        <div class="formula__cards">
          <card-image class="formula__card formula__card_nota_top">
            <p class="formula__card-text"><strong>Зелень и фрезия</strong>Верхняя нота</p>
          </card-image>

          <card-image class="formula__card formula__card_nota_middle">
            <p class="formula__card-text"><strong>Слива</strong>Нота сердца</p>
          </card-image>

          <card-image class="formula__card formula__card_nota_bottom">
            <p class="formula__card-text"><strong>Гелиотроп</strong>Нижняя нота</p>
          </card-image>
        </div>

        <p class="formula__addition">Цветочно-фруктовый<br />с зелеными нотами</p>
      </div>

      <div class="formula__description-container">
        <div class="formula__description" :class="{ formula__description_visible: descriptionIsOpen }">
          <div class="formula__percent">
            <span class="formula__prefix">на</span>
            <span class="formula__number">78</span>
            <span class="formula__symbol">%</span>
          </div>

          <p class="formula__text">
            <strong>Биоразлагаемая<br />формула</strong>
          </p>
          <p class="formula__text">Бережное отношение<br />к коже и природе</p>
        </div>
      </div>
    </div>
  </section>

  <block-pagination class="formula-pagination" @toggle-step="toggleStep" />
</template>

<script setup>
import { ref } from 'vue'
import CardImage from '@/components/UI/CardImage.vue'
import BlockPagination from '@/components/UI/BlockPagination.vue'

const emits = defineEmits(['toggleStep'])
const descriptionIsOpen = ref(false)

function toggleStep(step = null) {
  if (step !== '-1' && !descriptionIsOpen.value) {
    descriptionIsOpen.value = true
  } else {
    emits('toggleStep', step)
  }
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;
$fontDefault: $FONT_DEFAULT;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;
$fontDefaultSemiBold: $FONT_DEFAULT_SEMI_BOLD;

.formula {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.5rem;

  @include desktop {
    margin-top: -7rem;
  }

  &__title {
    color: $white;
    font-family: $fontDefaultLight;
    line-height: 75%;
    text-transform: uppercase;
    @include adaptive-font(8, 4);

    & > strong {
      font-family: $fontDefaultSemiBold;
    }
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @include mobile-tablet {
      flex-direction: column;
    }
  }

  &__ingredients {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-width: 117.7rem;
  }

  &__cards {
    display: grid;
    justify-content: space-between;
    gap: 2rem;

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      justify-content: center;
    }
  }

  &__card {
    width: 100%;
    aspect-ratio: 10 / 17.13;

    @include tablet-desktop {
      max-width: 35.5rem;
    }

    &_nota_top {
      background-image: url('@/assets/images/formula/top.webp');
    }

    &_nota_middle {
      background-image: url('@/assets/images/formula/middle.webp');
    }

    &_nota_bottom {
      background-image: url('@/assets/images/formula/bottom.webp');
    }

    &:deep(.card-image__wrapper) {
      border-color: #ffffff60;
      border-width: 0.3rem;
    }
  }

  &__card-text {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: $white;
    font-family: $fontDefault;
    line-height: 100%;
    text-align: center;
    @include adaptive-font(3, 1.9);

    @include tablet-desktop {
      height: 17.1rem;
    }

    @include mobile {
      height: 9rem;
    }

    & > strong {
      font-family: $fontDefaultBold;
      text-transform: uppercase;
    }
  }

  &__addition {
    color: $white;
    font-family: $fontDefault;
    line-height: 100%;
    text-transform: uppercase;

    @include adaptive-font(4, 2);

    @include desktop {
      position: absolute;
      right: 0;
      top: calc(100% + 5rem);
      padding-right: 1rem;
      text-align: right;
    }

    @include mobile-tablet {
      order: -1;
      margin-bottom: 2rem;
    }
  }

  &__description-container {
    overflow: hidden;

    @include desktop {
      max-width: 46.8rem;
    }

    @include tablet {
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 50%;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    height: max-content;
    max-height: 63rem;
    min-height: 100%;
    gap: 1.5rem;
    color: $white;
    transform: translateX(calc(100% + 10rem));
    visibility: hidden;
    opacity: 0;
    transition: 0.4s ease;

    @include desktop {
      justify-content: space-between;
    }

    @include mobile-tablet {
      gap: 3rem;
      justify-content: flex-end;
    }

    @include mobile {
      align-items: center;
      text-align: center;
      height: 0;
    }

    &_visible {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;

      @include mobile {
        align-items: center;
        text-align: center;
        height: 36rem;
      }
    }
  }

  &__percent {
    position: relative;
    font-family: $fontDefaultBold;
  }

  &__prefix {
    position: absolute;
    line-height: 100%;
    @include adaptive-font(3.7, 3.1);

    @include desktop {
      left: 0.6rem;
      top: 7rem;
    }

    @include mobile-tablet {
      top: 6rem;
    }
  }

  &__number {
    font-family: $fontDefaultSemiBold;
    line-height: 70%;
    letter-spacing: -1rem;
    @include adaptive-font(24, 20);
  }

  &__symbol {
    line-height: 130%;
    @include adaptive-font(4.1, 3.1);
  }

  &__text {
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: uppercase;
    @include adaptive-font(3.1, 2.3);

    & > strong {
      font-family: $fontDefaultBold;
    }
  }
}
</style>
