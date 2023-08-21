<template>
  <section class="application-section">
    <card-image class="application-picture-product" is-product />

    <div class="application-card">
      <span class="application-card__title">ДЛЯ КОГО?</span>
      <ul class="application-card-list">
        <li class="application-card-item">
          <img src="@/assets/icons/application/male-female.svg" alt="male-female" class="application-card__icon" />
          <p class="application-card__text">МУЖЧИНЫ <br />И ЖЕНЩИНЫ</p>
        </li>
        <li class="application-card-item">
          <img src="@/assets/icons/application/circles.svg" alt="circles" class="application-card__icon" />
          <p class="application-card__text">
            ПИГМЕНТНЫЕ ПЯТНА <br /><span
              >ЛЮБОЙ ЭТИОЛОГИИ <br />
              И ЛОКАЛИЗАЦИИ</span
            ><br />
            <span>Неравномерный тон кожи</span>
          </p>
        </li>
        <li class="application-card-item">
          <img src="@/assets/icons/application/tulip.svg" alt="tulip" class="application-card__icon" />
          <p class="application-card__text">
            <span>КЛИЕНТЫ</span><br />
            С ЧУВСТВИТЕЛЬНОЙ<br />
            КОЖЕЙ
          </p>
        </li>
      </ul>
    </div>
    <div class="application-card">
      <span class="application-card__title">ПРИМЕНЕНИЕ</span>
      <ul class="application-card-list">
        <li class="application-card-item">
          <img src="@/assets/icons/application/sun-horizon.svg" alt="sun-horizon" class="application-card__icon" />
          <p class="application-card__text">
            УТРОМ<br />
            И/ИЛИ ВЕЧЕРОМ<br />
            <span>на очищенную кожу<br />лица и шеи, избегая<br />области вокруг глаз</span>
          </p>
        </li>
        <li class="application-card-item">
          <img src="@/assets/icons/application/cloud-sun.svg" alt="cloud-sun" class="application-card__icon" />
          <p class="application-card__text">
            <span>ДНЕМ ИСПОЛЬЗОВАТЬ</span><br />
            КРЕМ С SP 50
          </p>
        </li>
        <li class="application-card-item">
          <img src="@/assets/icons/application/eyedropper.svg" alt="eyedropper" class="application-card__icon" />
          <p class="application-card__text">
            САМОСТОЯТЕЛЬНО<br />
            <span>И/ИЛИ С ОСНОВНЫМ <br />УХОДОМ</span>
          </p>
        </li>
      </ul>
    </div>
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

@keyframes translateCard {
  from {
    transform: translateX(30%) scaleY(1.2);
  }
  to {
    transform: translateX(0) scaleY(1);
  }
}

.application {
  &-section {
    flex-grow: 1;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include desktop {
      margin-top: 10rem;
      margin-bottom: -1rem;
      grid-template-columns: repeat(3, 1fr);
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    @media (min-width: 1440px) {
      gap: 10rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      gap: 4rem;
    }
  }

  &-picture-product {
    z-index: 2;
    width: 100%;
    aspect-ratio: 10 / 14.34;
    border-radius: 7.5rem;
    animation: translateCard 0.4s 1;

    @include tablet {
      margin: auto;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    @include mobile {
      margin: auto;
    }

    &:deep(.card-image__wrapper) {
      border-radius: 7.5rem;
    }

    &:deep(.card-image__product) {
      width: 37.6%;
    }
  }

  &-card {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: $white;

    @include desktop {
      max-width: 50.6rem;
    }

    @media (min-width: 1440px) {
      min-height: 72.7rem;
      padding: 5.5rem 1.5rem 6rem 6rem;
      border-radius: 8rem;
    }

    @media (max-width: 1439px) {
      min-height: 60rem;
      padding: 3.5rem 3rem 3rem;
      border-radius: 6rem;
    }

    &__title {
      font-family: 'GillSans ExtraBold';
      @include adaptive-font(4, 2.5);
      line-height: 100%;
    }

    &-list {
      position: relative;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 7.6rem;

      &::before {
        position: absolute;
        top: 50%;
        width: 0.4rem;
        height: 90%;
        background-color: $blue;
        content: '';
        transform: translateY(-50%);

        @media (min-width: 1440px) {
          left: 5.1rem;
        }

        @media (max-width: 1439px) {
          left: 4.1rem;
        }
      }
    }

    &-item {
      z-index: 5;
      display: flex;
      align-items: center;
      column-gap: 2rem;
    }

    &__icon {
      object-fit: cover;

      @media (min-width: 1440px) {
        width: 10.7rem;
        height: 10.7rem;
      }

      @media (max-width: 1439px) {
        width: 8.5rem;
        height: 8.5rem;
      }
    }

    &__text {
      font-family: 'GillSans ExtraBold';
      @include adaptive-font(2, 1.25);
      line-height: 130%;

      span {
        font-family: GillSans;
      }
    }
  }
}
</style>
