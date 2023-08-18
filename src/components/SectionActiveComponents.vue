<template>
  <section class="components-section">
    <img
      src="@/assets/images/active-components/serum.png"
      srcset="@/assets/images/active-components/serum.png"
      class="components-picture-product"
      alt="Фотография продукта LA ROCHE-POSAY Pure Niacinamide 10"
    />
    <div class="components-content">
      <div class="components-column">
        <p class="components-column__title">УМЕНЬШЕНИЕ ПИГМЕНТАЦИИ</p>
        <div class="components-ingredients">
          <article class="components-ingredient components-ingredient-left" @click="$emit('toggleStep', stepNum + 1)">
            <div class="components-ingredient-text">
              <span class="components-ingredient-text__title">НИАЦИНАМИД 10%</span>
              <p class="components-ingredient-text__text">
                <span>Регулирует транспортировку <br />меланина к поверхности кожи</span>
                <span>Уменьшает размер и выраженность пигментных пятен</span>
                <span>Препятствует их повторному появлению</span>
              </p>
            </div>
            <div class="components-ingredient-picture components-ingredient-picture-1">
              <div class="components-ingredient-picture__number components-ingredient-picture__number-right">
                <span>I</span>
              </div>
            </div>
          </article>
          <article class="components-ingredient components-ingredient-left" @click="$emit('toggleStep', stepNum + 2)">
            <div class="components-ingredient-text">
              <span class="components-ingredient-text__title">ФЕ-РЕЗОРЦИНОЛ <br />0,5%</span>
              <p class="components-ingredient-text__text">Регулирует выработку меланина</p>
            </div>
            <div class="components-ingredient-picture components-ingredient-picture-2">
              <div class="components-ingredient-picture__number components-ingredient-picture__number-right">
                <span>2</span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="components-column">
        <p class="components-column__title">ВЫРАВНИВАНИЕ РЕЛЬЕФА</p>
        <div class="components-ingredients">
          <article class="components-ingredient components-ingredient-right" @click="$emit('toggleStep', stepNum + 3)">
            <div class="components-ingredient-text">
              <span class="components-ingredient-text__title">5% ХЕПЕС</span>
              <p class="components-ingredient-text__text">
                <span>Запускает процессы обновления кожи</span>
                <span>Выравнивает рельеф кожи</span>
              </p>
            </div>
            <div class="components-ingredient-picture components-ingredient-picture-3">
              <div class="components-ingredient-picture__number components-ingredient-picture__number-left">
                <span>3</span>
              </div>
            </div>
          </article>
          <article class="components-ingredient components-ingredient-right" @click="$emit('toggleStep', stepNum + 4)">
            <div class="components-ingredient-text">
              <span class="components-ingredient-text__title"
                >ГИАЛУРОНОВАЯ<br />
                КИСЛОТА</span
              >
              <p class="components-ingredient-text__text">
                Поддерживает кожный барьер, <br />повышает упругость и эластичность <br />кожи
              </p>
            </div>
            <div class="components-ingredient-picture components-ingredient-picture-4">
              <div class="components-ingredient-picture__number components-ingredient-picture__number-left">
                <span>4</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <block-pagination class="components-navigation" @toggle-step="toggleStep">
      <div class="components-navigation__list">
        <span class="components-navigation__line"></span>
        <button type="button" class="components-navigation__button" @click="toggleStep(13)">I</button>
        <span class="components-navigation__line"></span>
        <button type="button" class="components-navigation__button" @click="toggleStep(14)">2</button>
        <span class="components-navigation__line"></span>
        <button type="button" class="components-navigation__button" @click="toggleStep(15)">3</button>
        <span class="components-navigation__line"></span>
        <button type="button" class="components-navigation__button" @click="toggleStep(16)">4</button>
        <span class="components-navigation__line"></span>
      </div>
    </block-pagination>
  </section>
</template>

<script setup>
import BlockPagination from '@/components/BlockPagination.vue'

defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['toggleStep'])

function toggleStep(step) {
  emits('toggleStep', step)
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.button {
  &-navigation {
    border: none;
    border-radius: 3rem;
    background-color: $blue;
    color: $white;
    cursor: pointer;
    font-family: GillSans;
    @include adaptive-font(5.2, 3.25);
    line-height: 100%;
    text-transform: uppercase;
    transition: all 0.2s ease;

    @media (min-width: 1440px) {
      padding: 1.9rem 3.2rem;
    }

    @media (max-width: 1439px) {
      padding: 1.5rem 2.5rem;
    }

    &:hover {
      @include desktop {
        background: rgba(0, 159, 227, 50%);
      }
    }
  }

  &-next {
    @media (min-width: 1440px) {
      right: 10rem;
    }

    @media (max-width: 1439px) {
      right: 6rem;
    }
  }

  &-back {
    @media (min-width: 1440px) {
      left: 10rem;
    }

    @media (max-width: 1439px) {
      left: 6rem;
    }
  }
}

.components {
  &-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @include desktop {
      gap: 8.7rem;
    }

    @include mobile-tablet {
      gap: 3rem;
    }
  }

  &-picture-product {
    @media (min-width: 1440px) {
      bottom: 0;
      width: 28.4rem;
    }

    @media (max-width: 1439px) {
      top: auto;
      width: 20rem;
      transform: translate(-50%, -50%);
    }

    @include tablet-desktop {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    @include mobile {
      width: 100%;
      max-height: 30rem;
      object-fit: contain;
      transform: none;
    }
  }

  &-content {
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    margin-top: 13rem;

    @media (min-width: 1440px) {
      column-gap: 27rem;
    }

    @media (max-width: 1439px) {
      column-gap: 10rem;
    }

    @include mobile {
      margin-top: 0;
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }

  &-column {
    display: flex;
    flex-direction: column;
    max-width: 65.2rem;

    @include desktop {
      &:last-of-type {
        justify-self: end;
      }
    }

    &__title {
      color: $white;
      font-family: 'GillSans Bold';
      @include adaptive-font(3, 1.4);
      line-height: 100%;

      @include mobile {
        text-align: center;
      }
    }
  }

  &-ingredients {
    display: flex;
    flex-direction: column;
    margin-top: 4.7rem;
    row-gap: 6.4rem;

    @include mobile {
      row-gap: 3rem;
    }
  }

  &-ingredient {
    position: relative;
    z-index: 2;
    display: flex;
    overflow: hidden;
    width: 100%;
    justify-content: space-between;
    border-radius: 3.2rem;
    background-color: $white;
    box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
    cursor: pointer;

    @media (min-width: 1440px) {
      max-width: 65.2rem;
      min-height: 27rem;
    }

    @media (max-width: 1439px) {
      max-width: 52.2rem;
      min-height: 27rem;
    }

    &::before {
      position: absolute;
      z-index: 4;
      top: -57rem;
      width: 120rem;
      height: 120rem;
      border-radius: 50%;
      background: radial-gradient(50% 50% at 50% 50%, #009fe3 0%, rgba(0, 159, 227, 0%) 100%);
      content: '';
      object-fit: cover;
      opacity: 0;
      transform: scale(0);
      transition: all 0.3s ease;
    }

    @include desktop {
      &:hover {
        &::before {
          opacity: 1;
          transform: scale(1);
        }
      }
    }

    &-left {
      &::before {
        right: -57rem;
      }
    }

    &-right {
      flex-direction: row-reverse;
      justify-content: start;

      &::before {
        left: -57rem;
      }
    }

    &-text {
      padding: 3rem 2rem 0 3rem;

      &__title {
        color: $blue;
        font-family: 'GillSans Bold';
        @include adaptive-font(3, 1.4);
        line-height: 100%;
        text-transform: uppercase;
      }

      &__text {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        color: $black;
        font-family: GillSans;
        @include adaptive-font(2, 1.25);
        line-height: 100%;
        row-gap: 1rem;
      }
    }

    &-picture {
      position: relative;
      display: flex;
      background-size: cover;
      object-fit: cover;

      @media (min-width: 1440px) {
        min-width: 26.6rem;
      }

      @media (max-width: 1439px) {
        min-width: 22.6rem;
      }

      @include mobile-tablet {
        min-width: 12rem;
      }

      &-1 {
        background-image: url('@/assets/images/active-components/niacinamide.jpg');
      }

      &-2 {
        background-image: url('@/assets/images/active-components/fe-resorcinol.jpg');
      }

      &-3 {
        background-image: url('@/assets/images/active-components/hepes.jpg');
      }

      &-4 {
        background-image: url('@/assets/images/active-components/hyaluronic-acid.jpg');
      }

      &__number {
        position: absolute;
        z-index: 5;
        top: 1rem;
        display: flex;
        width: 5.8rem;
        height: 5.8rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: $white;
        color: $blue;
        font-family: GillSans;
        @include adaptive-font(5, 3);
        line-height: 100%;

        &-right {
          right: 1rem;
        }

        &-left {
          left: 1rem;
        }
      }
    }
  }

  &-navigation {
    //position: absolute;
    //left: 50%;
    //display: flex;
    //width: 100%;
    //align-items: center;
    //justify-content: space-between;
    z-index: 1;
    gap: 3rem;
    //transform: translateX(-50%);

    //@media (min-width: 1440px) {
    //  bottom: 10rem;
    //  padding: 0 10rem;
    //}
    //@media (max-width: 1439px) {
    //  bottom: 6rem;
    //  padding: 0 6rem;
    //}

    &__list {
      flex-grow: 1;
      display: flex;
      gap: 3rem;
      align-items: center;
      justify-content: space-between;

      @include tablet {
        gap: normal;
      }
      @include mobile {
        display: none;
      }
    }

    &__line {
      display: inline-block;
      width: 100%;
      height: 0.4rem;
      background-color: $white;

      @media (min-width: 1440px) {
        max-width: 12.1rem;
      }
      @media (max-width: 1439px) {
        max-width: 5rem;
      }
      @include mobile-tablet {
        display: none;
      }
    }

    &__button {
      display: flex;
      width: 9rem;
      height: 9rem;
      padding: 1.5rem 3.2rem;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 3rem;
      background: none;
      color: $white;
      font-family: GillSans;
      @include adaptive-font(5.2, 3.2);
      line-height: 100%;
      text-transform: uppercase;
      transition: all 0.2s ease;
      cursor: pointer;

      @include desktop {
        margin-bottom: -1rem;
      }

      &:hover {
        @include desktop {
          background: rgba(0, 159, 227, 50%);
        }
      }
    }
  }
}
</style>
