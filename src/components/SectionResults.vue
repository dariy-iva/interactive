<template>
  <section class="results-section">
    <div class="results-card">
      <div class="results-card-picture-product">
        <card-image is-product />
      </div>

      <div class="results-card-info">
        <div class="results-card-action">
          <div class="results-card-period">
            <span class="results-card-period__title">2 НЕДЕЛИ ПРИМЕНЕНИЯ</span>
            <p class="results-card-period__text">
              Область пигментации МЕНЕЕ ЗАМЕТНА <br />Кожа выглядит более ГЛАДКОЙ, СВЕЖЕЙ И СИЯЮЩЕЙ
            </p>
          </div>
          <div class="results-card-period">
            <span class="results-card-period__title">4 НЕДЕЛИ ПРИМЕНЕНИЯ</span>
            <p class="results-card-period__text">
              Область пигментации МЕНЕЕ ЗАМЕТНА <br />Кожа выглядит более ГЛАДКОЙ, СВЕЖЕЙ И СИЯЮЩЕЙ
            </p>
          </div>
        </div>
        <div class="results-card-statistics">
          <div class="results-card-statistics-item">
            <div class="results-card-statistics-quantity">
              <div class="results-card-statistics-quantity__number"><span>91</span><span class="small">%</span></div>
              <span class="results-card-statistics-quantity__text">опрошенных <br />подтверждают</span>
            </div>
            <p class="results-card-statistics__text">
              количество пигментных пятен<br />
              ЗНАЧИТЕЛЬНО УМЕНЬШИЛОСЬ
            </p>
          </div>
          <div class="results-card-statistics-item">
            <div class="results-card-statistics-quantity">
              <div class="results-card-statistics-quantity__number"><span>90</span><span class="small">%</span></div>
              <span class="results-card-statistics-quantity__text">опрошенных <br />подтверждают</span>
            </div>
            <p class="results-card-statistics__text">тон кожи БОЛЕЕ РОВНЫЙ</p>
          </div>
        </div>
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
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

@keyframes translateCard {
  from {
    translate: -70%;
  }
  to {
    translate: 0;
  }
}

.results {
  &-section {
    position: relative;
    flex-grow: 1;

    @media (min-width: 1440px) {
      padding-right: 28rem;
      margin-top: 22rem;
      margin-bottom: -2rem;
    }

    @media (max-width: 1439px) and (min-width: 1024px) {
      margin-top: 20rem;
    }

    @media (min-width: 850px) and (max-width: 1023px) {
      margin-top: 10rem;
    }
  }

  &-title {
    width: 100%;
    padding-right: 7rem;
    color: $white;

    @include adaptive-font(4, 1.5);
    line-height: 100%;
    text-align: right;
    text-transform: uppercase;

    span {
      font-family: $fontDefaultBold;
    }
  }

  &-card {
    position: relative;

    @media (min-width: 1440px) {
      max-width: 144rem;
    }

    @media (max-width: 1439px) {
      max-width: 103rem;
    }

    &-info {
      width: 100%;
      padding: 8rem 6rem;
      border-radius: 5rem;
      background-color: $white;
    }

    &-picture-product {
      aspect-ratio: 10 / 19.08;
      animation: translateCard 0.5s 1;

      @media (min-width: 1440px) {
        width: 46.6rem;
      }

      @media (max-width: 1439px) {
        width: 37.7rem;
      }

      @media (min-width: 851px) {
        position: absolute;
        z-index: 5;
        top: 50%;
        right: -0.9rem;
        transform: translateY(-50%);
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

    &-action {
      display: flex;
      flex-direction: column;
      row-gap: 1.5rem;
    }

    &-period {
      &__title {
        font-family: $fontDefaultBold;
        @include adaptive-font(4, 2.5);
        line-height: 115%;
      }

      &__text {
        font-family: $fontDefault;
        @include adaptive-font(2, 1.25);
        line-height: 130%;
      }
    }

    &-statistics {
      display: flex;
      flex-direction: column;
      margin-top: 0.5rem;
      row-gap: 1.5rem;

      &-item {
        display: flex;
        align-items: center;
        column-gap: 2rem;
      }

      &-quantity {
        display: flex;
        flex-direction: column;

        &__number {
          color: $blue;
          font-family: $fontDefaultBold;
          @include adaptive-font(8, 5);

          span {
            line-height: 100%;
          }

          span.small {
            @include adaptive-font(4, 2.5);
          }
        }

        &__text {
          margin-top: -1.5rem;
          font-family: $fontDefault;
          @include adaptive-font(1.7, 1);
          line-height: 100%;
        }
      }

      &__text {
        padding-top: 1rem;
        font-family: $fontDefault;
        @include adaptive-font(3, 1.9);
        line-height: 130%;
      }
    }
  }
}
</style>
