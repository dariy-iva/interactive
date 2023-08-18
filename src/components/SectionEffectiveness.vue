<template>
  <section class="effect-section">
    <div class="effect-card">
      <div class="effect-card-picture-product">
        <card-image is-product />
      </div>

      <div class="effect-card-info">
        <div class="effect-card-statistics">
          <div class="effect-card-statistics-item">
            <div class="effect-card-statistics-quantity">
              <div class="effect-card-statistics-quantity__number">
                <span class="small">—</span><span>2I</span> <span class="small">%</span>
              </div>
            </div>
            <p class="effect-card-statistics__text"><span>ИНТЕНСИВНОСТЬ</span> ТЕМНЫХ ПЯТЕН<sup>1</sup></p>
          </div>
          <div class="effect-card-statistics-item">
            <div class="effect-card-statistics-quantity">
              <div class="effect-card-statistics-quantity__number">
                <span class="small">—</span><span>23</span> <span class="small">%</span>
              </div>
            </div>
            <p class="effect-card-statistics__text"><span>ПОСТВОСПАЛИТЕЛЬНОЙ</span> ПИГМЕНТАЦИИ</p>
          </div>
        </div>
        <div class="effect-card-text">
          <span class="effect-card-text__text"
            ><span>СОХРАНЕНИЕ ЭФФЕКТА</span><br />
            ПОСЛЕ ОКОНЧАНИЯ<br />
            ПРИМЕНЕНИЯ<sup>2</sup></span
          >
          <span class="effect-card-text__number">3</span>
          <span class="effect-card-text__text">недели</span>
        </div>
      </div>
    </div>

    <p class="effect-addition">
      <sup>1</sup> Клиническое исследование, 102 участника, 2 месяца, применение 2 раза в день.<br /><sup>2</sup>
      Клиническое исследование, 68 участников, 2 месяца, применение 2 раза в день.<br /><sup>3</sup> Клиническое
      исследование по интенсивности темных пятен и ровному тону, 3 недели спустя месяца, применение 2 раза в день.
    </p>
  </section>
</template>

<script setup>
import CardImage from '@/components/CardImage.vue'
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.effect {
  &-section {
    flex-grow: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 1440px) {
      padding-left: 29rem;
      margin-top: 22rem;
      margin-bottom: -2rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      padding-left: 10rem;
      margin-top: 20rem;
    }

    @media (min-width: 850px) and (max-width: 1023px) {
      margin-top: 10rem;
    }
  }

  &-card {
    position: relative;

    @media (min-width: 1440px) {
      max-width: 142rem;
    }

    @media (max-width: 1439px) {
      max-width: 103rem;
    }

    @media (max-width: 850px) {
      width: 100%;
      max-width: 100%;
    }

    &-info {
      width: 100%;
      border-radius: 5rem;
      background-color: $white;

      @media (min-width: 1440px) {
        padding: 7rem 6.9rem 6.5rem 49.5rem;
      }

      @media (max-width: 1439px) {
        padding: 5rem 6.9rem 5rem 39.5rem;
      }

      @media (max-width: 850px) {
        padding: 5rem 7rem;
      }
    }

    &-picture-product {
      aspect-ratio: 10 / 19.08;

      @media (min-width: 1440px) {
        width: 45.9rem;
      }

      @media (max-width: 1439px) {
        width: 37.7rem;
      }

      @media (min-width: 851px) {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: -0.9rem;
        transform: translateY(-50%);
        margin-top: 1rem;
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

    &-statistics {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      &-item {
        display: flex;
        align-items: center;
        gap: 2rem;

        @include mobile {
          flex-direction: column;
          gap: 1.5rem;
        }
      }

      &-quantity {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__number {
          display: flex;
          align-items: center;
          color: $blue;
          font-family: 'GillSans Bold';
          @include adaptive-font(15, 7.4);

          span {
            line-height: 100%;
          }

          span.small {
            @include adaptive-font(4, 2.5);
          }
        }
      }

      &__text {
        padding-top: 1rem;
        font-family: GillSans;
        @include adaptive-font(3, 1.9);
        line-height: 130%;

        span {
          font-family: 'GillSans Bold';
        }

        sup {
          font-size: 60%;
        }
      }
    }

    &-text {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      margin-top: 1rem;
      column-gap: 2rem;
      text-align: right;

      @include mobile {
        display: flex;
        margin-top: 2rem;
        flex-wrap: wrap;
        padding-left: 0;
        text-align: center;
        justify-content: center;
      }

      &__text {
        font-family: GillSans;
        @include adaptive-font(3, 1.9);
        line-height: 130%;
        text-transform: uppercase;

        span {
          font-family: 'GillSans Bold';
        }

        sup {
          top: -1rem;
          font-size: 50%;
        }
      }

      &__number {
        color: $blue;
        font-family: 'GillSans Bold';
        @include adaptive-font(15, 7.4);
        line-height: 100%;
      }
    }
  }

  &-addition {
    position: absolute;
    color: $gray;
    font-family: GillSans;
    @include adaptive-font(2, 1.25);
    line-height: 110%;
    text-transform: none;
    bottom: 1.6rem;

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
