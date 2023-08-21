<template>
  <section class="start-section">
    <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="start__logo" />
    <div class="start-container">
      <card-image class="start-card" is-product />

      <div class="start-content">
        <span class="start__title"> академия <br />красоты </span>
        <p class="start-text"><span>представляет</span><span>игру</span></p>
        <button-default text="Начать" class="start-button" @click="$emit('next')" />
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

.start {
  &-section {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: max-content;
    padding: 10rem 0;
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;

    @include tablet-desktop {
      background-image: url('@/assets/images/start/background.jpg');
    }
    @include mobile {
      background-image: url('@/assets/images/background-purple.jpg');
    }
  }

  &-container {
    display: grid;
    width: 100%;
    max-width: 72.86%;
    grid-template-columns: max-content max-content;
    margin: auto;
    justify-content: space-between;
    grid-gap: 6rem;

    @include desktop {
      padding-left: 3.5rem;
    }

    @media (min-width: 1650px) {
      flex-grow: 1;
    }

    @media (max-width: 950px) {
      min-width: 100%;
      max-width: 100%;
      padding: 0 1.5rem;
    }

    @include mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &-card {
    @media (min-width: 1650px) {
      min-height: 100%;
    }

    @include mobile {
      width: 100%;
      max-width: 40rem;
    }

    &:deep(.card-image__product) {
      width: 44.12%;
      height: 96.1%;
    }
  }

  &__logo {
    position: absolute;
    top: 0;

    background-size: contain;

    @media (min-width: 1440px) {
      right: 24rem;
      width: 53.2rem;
    }

    @media (max-width: 1439px) {
      right: 24rem;
      width: 43rem;
    }

    @include mobile {
      left: 5rem;
      width: 20rem;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: calc(280px * 100vh / 1200px);

    @media (min-width: 1650px) {
      padding-left: 28rem;
    }
    @media (max-width: 1650px) {
      justify-content: end;
    }
    @include mobile {
      padding-top: 0;
    }
  }

  &__title {
    flex-grow: 0;
    color: $white;
    font-family: 'GillSans Light';
    line-height: 90%;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(9.45, 5);
  }

  &-text {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    align-items: center;
    padding-bottom: 4rem;
    margin-top: 3rem;
    color: $violet;
    font-family: GillSans;
    @include adaptive-font(7, 4.3);
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;

    span {
      display: inline-block;
      padding: 1.4rem 3rem;
      background-color: $white;

      &:nth-child(2) {
        margin-top: -2rem;
      }
    }
  }

  &-button {
    margin-top: auto;
  }
}
</style>
