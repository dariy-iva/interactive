<template>
  <section class="effect">
    <div class="effect__card">
      <div class="effect__product">
        <card-image is-product />
      </div>

      <div class="effect__info">
        <div class="effect__statistics">
          <div class="effect__quantity">
            <p class="effect__quantity-number">—<span class="effect__quantity-number_large">2I</span>%</p>
          </div>

          <p class="effect__statistics-text"><strong>Интенсивность</strong> темных пятен<sup>I</sup></p>
        </div>

        <div class="effect__statistics">
          <div class="effect__quantity">
            <p class="effect__quantity-number">—<span class="effect__quantity-number_large">23</span>%</p>
          </div>

          <p class="effect__statistics-text"><strong>Поствоспалительной</strong> пигментации</p>
        </div>

        <div class="effect__main-info">
          <span class="effect__main-text">
            <strong>Сохранение эффекта</strong> после окончания применения<sup>2</sup>
          </span>
          <span class="effect__quantity-number effect__quantity-number_large">3</span>
          <span class="effect__main-text">недели</span>
        </div>
      </div>
    </div>

    <p class="effect-addition">
      <sup>1</sup> Клиническое исследование, 102 участника, 2 месяца, применение 2 раза в день.<br />
      <sup>2</sup> Клиническое исследование, 68 участников, 2 месяца, применение 2 раза в день.<br />
      <sup>3</sup> Клиническое исследование по интенсивности темных пятен и ровному тону, 3 недели спустя месяца,
      применение 2 раза в день.
    </p>
  </section>
</template>

<script setup>
import CardImage from '@/components/UI/CardImage.vue'
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

@keyframes translateCard {
  from {
    translate: 212%;
  }
  to {
    translate: 0;
  }
}

.effect {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include desktop {
    margin-top: 4rem;
  }

  @media (min-width: 1200px) {
    padding-left: 27rem;
  }

  &__card {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__product {
    position: absolute;
    z-index: 5;
    left: -1rem;
    width: 32%;
    min-width: 30rem;
    min-height: 110%;
    aspect-ratio: 10 / 19.08;
    animation: translateCard 0.4s 1;

    @include tablet {
      max-height: 110%;
    }

    @include mobile {
      display: none;
    }

    &:deep(.card-image) {
      width: 100%;
      height: 100%;
      min-height: 100%;
      border-radius: 7.5rem;
    }

    &:deep(.card-image__wrapper) {
      border-radius: 7.5rem;
    }

    &:deep(.card-image__product) {
      width: 57.5%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-radius: 5rem;
    background-color: $white;

    @include desktop {
      min-height: 60.8rem;
      padding: 6rem 6rem 6rem 35%;
    }

    @include tablet-desktop {
      gap: 6rem;
    }

    @include tablet {
      min-height: 46rem;
      padding: 6rem 6rem 6rem 31rem;
    }

    @include mobile {
      padding: 3rem;
      gap: 3rem;
    }
  }

  &__statistics {
    display: flex;
    align-items: center;

    @include desktop {
      gap: 2rem;
    }

    @include mobile-tablet {
      gap: 1.5rem;
    }

    @include mobile {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__statistics-text {
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: uppercase;
    @include adaptive-font(3, 1.4);

    & > strong {
      font-family: $fontDefaultBold;
    }
  }

  &__quantity {
    display: flex;
    align-items: center;
  }

  &__quantity-number {
    display: flex;
    align-items: center;
    color: $blue;
    font-family: $fontDefaultBold;

    &_large {
      line-height: 68%;
      @include adaptive-font(15, 6);
    }

    &:not(&_large) {
      line-height: 100%;
      @include adaptive-font(4, 2.5);
    }
  }

  &__main-info {
    display: flex;
    align-items: center;
    column-gap: 2rem;

    @include tablet-desktop {
      text-align: right;
    }

    @include mobile {
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
    }
  }

  &__main-text {
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: uppercase;
    @include adaptive-font(3, 1.9);

    @include tablet-desktop {
      max-width: 40rem;
    }

    @include mobile {
      &:first-of-type {
        min-width: 100%;
      }
    }

    & > strong {
      font-family: $fontDefaultBold;
    }
  }

  &-addition {
    position: absolute;
    color: $gray;
    font-family: $fontDefault;
    line-height: 110%;
    text-transform: none;
    bottom: 1.6rem;
    @include adaptive-font(2, 1.25);

    @include desktop {
      left: 10rem;
    }

    @include tablet {
      left: 5rem;
    }

    @include mobile {
      position: static;
      margin-top: 1rem;
    }

    sup {
      font-size: 65%;
    }
  }
}
</style>
