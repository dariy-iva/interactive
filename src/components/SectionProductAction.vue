<template>
  <section class="action">
    <div class="action__column action__column_left">
      <div class="action__main-info action__main-info_left">
        <h2 class="action__title">NIACINAMIDE I0</h2>
        <span class="action__description">Концентрированная сыворотка</span>
        <span class="action__main-text"
          ><strong>Против всех видов <br />пигментации</strong></span
        >
      </div>

      <div class="action__paragraphs">
        <p class="action__paragraph action__paragraph_left">
          Заметно уменьшает пигментные<br />пятна уже через 2 недели<br />применения*
        </p>
        <p class="action__paragraph action__paragraph_left">Выравнивает тон кожи</p>
      </div>
    </div>

    <div class="action__product">
      <card-image is-product class="action__product-card" />
    </div>

    <div class="action__column">
      <div class="action__main-info">
        <p class="action__main-text"><strong>Блокирует</strong><br />пигментацию</p>
        <p class="action__main-text"><strong>Выравнивает</strong><br />тон кожи</p>
      </div>

      <div class="action__paragraphs">
        <p class="action__paragraph">Действует даже на старые<br />пятна*</p>
        <p class="action__paragraph">Препятствует их повторному<br />появлению</p>
      </div>
    </div>

    <span class="action__addition">* Потребительский тест, 101 женщина, применение 2 раза в день.</span>
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
    opacity: 0;
    translate: 0 100%;
  }
  to {
    opacity: 1;
    translate: 0;
  }
}
@keyframes overflowCard {
  from {
    overflow: hidden;
  }
  to {
    overflow: visible;
  }
}

.action {
  position: relative;
  flex-grow: 1;
  color: $white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 29.48%;

  @include desktop {
    margin-top: -7rem;
  }

  @include mobile {
    flex-direction: column;
    gap: 3rem;
  }

  &__product {
    margin: auto;
    animation: overflowCard 0.4s 1;

    @include tablet-desktop {
      position: absolute;
      z-index: 2;
      width: 29.48%;
      aspect-ratio: 10 / 19.07;
      max-height: 134%;
    }

    @include tablet {
      top: 0;
      bottom: 0;
    }

    @include mobile {
      order: -1;
      width: 100%;
      max-width: 50rem;
      aspect-ratio: 10 / 10;
    }

    &:deep(.card-image__wrapper) {
      border-radius: 7.5rem;
    }

    &:deep(.card-image) {
      width: 100%;
      height: 100%;
      min-height: auto;
      aspect-ratio: initial;
      border-radius: 7.5rem;
      animation: translateCard 0.6s 1;
    }

    &:deep(.card-image__product) {
      width: 57%;

      @include desktop {
        top: 4rem;
      }
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include tablet-desktop {
      width: calc((100% - 29.48%) / 2);
      min-height: 100%;
      justify-content: space-between;
    }

    @include mobile {
      width: 100%;
    }

    @media (min-width: 1440px) {
      &_left {
        padding-right: 3.7rem;
      }

      &:not(&_left) {
        padding-left: 3.7rem;
      }
    }

    @media (max-width: 1439px) {
      &_left {
        padding-right: 1rem;
      }

      &:not(&_left) {
        padding-left: 1rem;
      }
    }
  }

  &__main-info {
    display: flex;
    flex-direction: column;

    &_left {
      text-align: right;
    }

    &:not(&_left) {
      gap: 3rem;
    }
  }

  &__title {
    position: relative;
    z-index: 2;
    min-width: calc(100% + 1rem);
    padding: 1rem 2rem 1rem 1rem;
    background-color: $blue;
    font-family: $fontDefaultBold;
    line-height: 100%;
    @include adaptive-font(4, 2.2);

    @media (min-width: 1800px) {
      font-size: 6rem;
    }
  }

  &__description {
    margin-top: 2rem;
    font-family: $fontDefault;
    line-height: 130%;
    @include adaptive-font(3, 1.8);

    @media (min-width: 1440px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 1439px) {
      margin-bottom: 2rem;
    }
  }

  &__main-text {
    font-family: $fontDefault;
    line-height: 130%;
    @include adaptive-font(4, 2);

    & > strong {
      font-family: $fontDefaultBold;
    }
  }

  &__paragraphs {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  &__paragraph {
    font-family: $fontDefault;
    line-height: 130%;
    @include adaptive-font(2.6, 1.6);

    &_left {
      padding-right: 2rem;
      border-right: 1rem solid $blue;
      text-align: right;
    }

    &:not(&_left) {
      padding-left: 2rem;
      border-left: 1rem solid $blue;
    }
  }

  &__addition {
    position: absolute;
    left: 0;
    color: $gray;
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: none;
    @include adaptive-font(2, 1.3);

    @include desktop {
      top: calc(100% + 18.7rem);
    }
    @include tablet {
      top: calc(100% + 14.7rem);
    }
    @include mobile {
      top: calc(100% + 10.7rem);
    }
  }
}
</style>
