<template>
  <section class="start">
    <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="start__logo" />
    <div class="start__container">
      <card-image class="start__card" is-product />

      <div class="start__content">
        <span class="start__title">академия<br />красоты</span>
        <p class="start__text"><span>представляет</span><span>игру</span></p>
        <button-default text="Начать" class="start__button" @click="$emit('next')" />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardImage from '@/components/UI/CardImage.vue'
import ButtonDefault from '@/components/UI/ButtonDefault.vue'

defineEmits(['next'])
</script>

<style lang="scss" scoped>
$white: $WHITE;
$violet: $VIOLET;
$blue: $BLUE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;
$fontDefaultSemiBold: $FONT_DEFAULT_SEMI_BOLD;

.start {
  display: flex;
  flex-direction: column;

  @include desktop {
    margin: auto 11.8rem auto auto;
  }

  @include tablet {
    padding-top: 10rem;
    margin: auto 0 auto auto;
  }

  @include mobile {
    margin: auto;
  }

  @media (min-width: 1440px) {
    margin: auto 11.8rem auto 20rem;
  }

  &__container {
    display: grid;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    gap: 6rem;

    @include desktop {
      grid-template-columns: max-content max-content;
    }

    @include mobile-tablet {
      grid-template-columns: 1fr;
    }

    @include mobile {
      justify-items: center;
    }
  }

  &__card {
    @media (min-width: 1650px) {
      min-height: 100rem;
    }

    @include mobile {
      width: 100%;
      max-width: 40rem;
      min-height: 37rem;
    }

    &:deep(.card-image__product) {
      width: 44.12%;
      height: 92.1%;
    }
  }

  &__logo {
    position: absolute;
    top: 0;
    background-size: contain;

    @include tablet-desktop {
      right: 12.5vw;
    }

    @media (min-width: 1440px) {
      width: 53.2rem;
    }

    @media (max-width: 1439px) {
      width: 43rem;
    }

    @include mobile {
      left: 5rem;
      width: 20rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1650px) {
      justify-content: end;
    }

    @include desktop {
      padding-top: calc(280px * 100vh / 1200px);
    }

    @include mobile {
      padding-top: 0;
    }
  }

  &__title {
    flex-grow: 0;
    color: $white;
    font-family: $fontDefaultLight;
    line-height: 105%;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(8.5, 3);
  }

  &__text {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
    padding-bottom: 4rem;
    margin-top: 3rem;
    color: $violet;
    font-family: $fontDefaultSemiBold;
    @include adaptive-font(6.5, 2.5);
    line-height: 109%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -0.2rem;

    span {
      display: inline-block;
      background-color: $white;

      &:first-child {
        z-index: 1;
      }

      &:nth-child(2) {
        @include desktop {
          margin-top: -2rem;
        }

        @include tablet {
          margin-top: -1rem;
        }
      }

      @include tablet-desktop {
        padding: 1.4rem 3rem;
      }

      @include mobile {
        padding: 1rem;
      }
    }
  }

  &__button {
    margin-top: auto;
  }
}
</style>
