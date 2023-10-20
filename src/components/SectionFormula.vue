<template>
  <section class="formula-section">
    <h3 class="formula__subtitle">НЕЖНЫЙ <span>АРОМАТ</span></h3>
    <div class="formula-content">
      <div class="formula-ingredients">
        <div class="formula-cards">
          <div class="formula-card formula-card-1">
            <div class="formula-card-text">
              <span class="formula-card__title">Зелень и фрезия</span>
              <span class="formula-card__text">Верхняя нота</span>
            </div>
          </div>
          <div class="formula-card formula-card-2">
            <div class="formula-card-text">
              <span class="formula-card__title">Слива</span>
              <span class="formula-card__text">Нота сердца</span>
            </div>
          </div>
          <div class="formula-card formula-card-3">
            <div class="formula-card-text">
              <span class="formula-card__title">Гелиотроп</span>
              <span class="formula-card__text">Нижняя нота</span>
            </div>
          </div>
        </div>
        <p class="formula__addition">
          ЦВЕТОЧНО-ФРУКТОВЫЙ<br />
          С ЗЕЛЕНЫМИ НОТАМИ
        </p>
      </div>
      <div class="formula-description" :class="{ 'formula-description_visible': descriptionIsOpen }">
        <div class="formula-description-percent">
          <span class="formula-description-percent__number">78</span
          ><span class="formula-description-percent__symbol">%</span>
        </div>
        <p class="bold">БИОРАЗЛАГАЕМАЯ <br />ФОРМУЛА</p>
        <p>
          БЕРЕЖНОЕ ОТНОШЕНИЕ<br />
          К КОЖЕ И ПРИРОДЕ
        </p>
      </div>
    </div>

    <block-pagination class="formula-pagination" @toggle-step="toggleStep" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
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
  &-section {
    position: relative;
    flex-grow: 1;
  }

  &-pagination {
    width: 100%;

    @include tablet-desktop {
      position: absolute;
      bottom: 0;
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    margin-top: 2.6rem;
    column-gap: 3rem;
    overflow-x: hidden;
  }

  &-ingredients {
    flex-grow: 1;
    max-width: 118rem;
  }

  &__subtitle {
    margin-top: 10.4rem;
    color: $white;
    font-family: $fontDefaultLight;
    @include adaptive-font(8, 4);
    line-height: 100%;
    text-transform: uppercase;

    @include mobile-tablet {
      margin-top: 0;
    }

    span {
      font-family: $fontDefaultSemiBold;
    }
  }

  &__addition {
    margin-top: 4rem;
    color: $white;
    font-family: $fontDefault;
    @include adaptive-font(4, 2);
    line-height: 130%;
    text-align: right;
    text-transform: uppercase;
    padding-right: 1rem;
  }

  &-cards {
    display: flex;
    flex-grow: 1;

    @media (min-width: 1440px) {
      gap: 5.8rem;
    }

    @media (max-width: 1439px) {
      gap: 3rem;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &-card {
    display: flex;
    overflow: hidden;
    align-items: end;
    background-size: cover;
    aspect-ratio: 10 / 17.16;

    @media (min-width: 1440px) {
      width: calc((100% - 5.8rem - 5.8rem) / 3);
      border-radius: 5rem;
    }

    @media (max-width: 1439px) {
      width: calc((100% - 6rem) / 3);
      border-radius: 3rem;
    }

    @include mobile {
      width: 100%;
      aspect-ratio: 10 / 7;
    }

    &-1 {
      background-image: url('@/assets/images/formula/card-1.jpg');
    }

    &-2 {
      background-image: url('@/assets/images/formula/card-2.jpg');
    }

    &-3 {
      background-image: url('@/assets/images/formula/card-3.jpg');
    }

    &-text {
      display: flex;
      width: 100%;
      height: 17.1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: $white;
      @include adaptive-font(3, 1.9);
      line-height: 100%;
      object-fit: cover;
      row-gap: 2rem;
      text-align: center;

      @include mobile {
        height: 9rem;
      }
    }

    &__title {
      font-family: $fontDefaultBold;
      text-transform: uppercase;
    }

    &__text {
      font-family: $fontDefault;
    }
  }

  &-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: max-content;
    max-height: 63rem;
    gap: 1.5rem;
    color: $white;
    transform: translateX(calc(100% + 10rem));
    visibility: hidden;
    opacity: 0;
    transition: 0.4s ease;

    &_visible {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }

    @include mobile-tablet {
      gap: 3rem;
    }

    @include mobile {
      margin: auto;
    }

    &-percent {
      position: relative;
      margin-top: 4.3rem;

      @include mobile-tablet {
        padding-left: 4rem;
      }

      &::before {
        position: absolute;
        top: 0;
        left: 2rem;
        content: 'на';
        font-family: $fontDefaultBold;
        @include adaptive-font(5, 3.1);
        line-height: 130%;

        @include mobile-tablet {
          left: 0;
        }
      }

      &__number {
        font-family: $fontDefault;
        @include adaptive-font(37, 10);
        line-height: 70%;
      }

      &__symbol {
        font-family: $fontDefaultBold;
        @include adaptive-font(5, 3.1);
        line-height: 130%;
      }
    }

    p {
      font-family: $fontDefault;
      @include adaptive-font(4, 1.5);
      line-height: 130%;
      text-transform: uppercase;

      &.bold {
        margin-top: -3rem;
        font-family: $fontDefaultBold;
      }
    }
  }
}
</style>
