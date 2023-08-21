<template>
  <section class="pigmentation-section">
    <div class="pigmentation-card">
      <div class="pigmentation-card-picture-product">
        <card-image is-product />
      </div>

      <div class="pigmentation-card-info">
        <p class="pigmentation-card__text">
          <span>ПИГМЕНТАЦИЯ</span> — ОДНА ИЗ <span>САМЫХ <br />РАСПРОСТРАНЕННЫХ</span> ДЕРМАТОЛОГИЧЕСКИХ ПРОБЛЕМ
        </p>
        <ul class="pigmentation-card-list">
          <li class="pigmentation-card__item"><span>Тусклый тон</span> — неровный тон кожи</li>
          <li class="pigmentation-card__item"><span>Мелазма</span> — прием таблеток</li>
          <li class="pigmentation-card__item"><span>Возрастное лентиго</span></li>
          <li class="pigmentation-card__item"><span>Поствоспалительная пигментация</span> — акне</li>
          <li class="pigmentation-card__item"><span>Актиническое лентиго</span></li>
          <li class="pigmentation-card__item"><span>ПВГ</span> — после процедуры</li>
          <li class="pigmentation-card__item"><span>Мелазма</span> — беременность</li>
        </ul>
        <p class="pigmentation-card__text-blue">
          ВЫСОКОКОНЦЕНТРИРОВАННУЮ СЫВОРОТКУ<br /><span>NIACINAMIDE 10</span><br /><span class="small"
            >Можно использовать при любом виде пигментации</span
          >
        </p>
      </div>
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
    scale: 0.9;
  }
  to {
    scale: 1;
  }
}

.pigmentation {
  &-section {
    position: relative;
    display: flex;
    justify-content: end;

    @media (min-width: 1840px) {
      margin-top: 13.5rem;
      margin-bottom: -1.1rem;
    }

    @media (min-width: 1024px) and (max-width: 1839px) {
      margin-top: 25rem;
      margin-bottom: 7rem;
    }

    @include tablet {
      margin-top: 12rem;
      margin-bottom: 12rem;
    }
  }

  &-card {
    position: relative;
    width: 100%;

    @media (min-width: 1440px) {
      max-width: 143rem;
    }

    &-info {
      width: 100%;
      border-radius: 5rem;
      background-color: $white;

      @media (min-width: 1440px) {
        padding: 6rem 4.5rem 9.5rem 50rem;
      }

      @media (max-width: 1439px) {
        padding: 3rem 3.5rem 4rem 43rem;
      }

      @media (max-width: 850px) {
        padding: 5rem 5rem;
      }
    }

    &-picture-product {
      aspect-ratio: 10 / 19.08;
      animation: translateCard 0.4s 1;

      @media (min-width: 1840px) {
        top: 57%;
      }

      @media (min-width: 1440px) {
        top: 57%;
        width: 45.9rem;
      }

      @media (max-width: 1439px) {
        width: 37.7rem;
      }

      @media (min-width: 851px) and (max-width: 1839px) {
        top: 50%;
      }

      @media (min-width: 851px) {
        position: absolute;
        z-index: 5;
        left: -0.5rem;
        transform: translateY(-50%);
        //margin-top: 1rem;
      }

      @media (max-width: 850px) {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto 3rem;
      }

      :deep(.card-image) {
        width: 100%;
        height: 100%;
        border-radius: 7.5rem;
      }

      &:deep(.card-image__wrapper) {
        border-radius: 7.5rem;
      }

      &:deep(.card-image__product) {
        width: 57.5%;
        top: 4.5%;
      }
    }

    &__text {
      font-family: GillSans;
      @include adaptive-font(3, 1.3);
      line-height: 130%;
      text-transform: uppercase;

      span {
        font-family: 'GillSans Bold';
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      margin-top: 3.3rem;
      row-gap: 1rem;
    }

    &__item {
      font-family: GillSans;
      @include adaptive-font(3, 1.3);
      line-height: 104%;

      span {
        font-family: 'GillSans Bold';
      }
    }

    &__text-blue {
      margin-top: 4.2rem;
      color: $blue;
      font-family: 'GillSans Bold';
      @include adaptive-font(2.44, 1.5);
      line-height: 100%;
      text-transform: uppercase;

      span {
        @include adaptive-font(7, 4);
        line-height: 100%;

        &.small {
          display: block;
          margin-top: -1rem;
          @include adaptive-font(1.85, 1.2);
        }
      }
    }
  }
}
</style>
