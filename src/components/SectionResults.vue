<template>
  <section class="results">
    <div class="results__card">
      <div class="results__product">
        <card-image is-product />
      </div>

      <div class="results__info">
        <div class="results__period">
          <span class="results__period-title">2 недели применения</span>
          <p class="results__period-text">
            Область пигментации <span class="results__upper">менее заметна</span><br />
            Кожа выглядит более <span class="results__upper">гладкой, свежей и сияющей</span>
          </p>
        </div>

        <div class="results__period">
          <span class="results__period-title">4 недели применения</span>
          <p class="results__period-text">
            Область пигментации <span class="results__upper">менее заметна</span><br />
            Кожа выглядит более <span class="results__upper">гладкой, свежей и сияющей</span>
          </p>
        </div>

        <div class="results__statistics">
          <div class="results__quantity">
            <p class="results__quantity-number">91<span class="results__quantity-number_small">%</span></p>
            опрошенных подтверждают
          </div>

          <p class="results__statistics-text">
            количество пигментных пятен <span class="results__upper">значительно уменьшилось</span>
          </p>
        </div>

        <div class="results__statistics">
          <div class="results__quantity">
            <p class="results__quantity-number">90<span class="results__quantity-number_small">%</span></p>
            опрошенных подтверждают
          </div>
          <p class="results__statistics-text">тон кожи <span class="results__upper">более ровный</span></p>
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include desktop {
    margin-top: 4rem;
  }

  @media (min-width: 1200px) {
    padding-right: 27rem;
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
    right: -1rem;
    width: 32%;
    min-width: 30rem;
    min-height: 110%;
    aspect-ratio: 10 / 19.08;
    animation: translateCard 0.5s 1;

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
      padding: 6rem 35% 6rem 6rem;
    }

    @include tablet-desktop {
      gap: 3rem;
    }

    @include tablet {
      min-height: 46rem;
      padding: 6rem 31rem 6rem 6rem;
    }

    @include mobile {
      padding: 3rem;
      gap: 2rem;
    }
  }

  &__period {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__period-title {
    font-family: $fontDefaultBold;
    line-height: 80%;
    text-transform: uppercase;
    @include adaptive-font(4, 2.5);
  }

  &__period-text {
    font-family: $fontDefault;
    line-height: 100%;
    @include adaptive-font(2, 1.25);
  }

  &__statistics {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  &__statistics-text {
    font-family: $fontDefault;
    line-height: 130%;
    @include adaptive-font(3, 1.6);
  }

  &__quantity {
    display: flex;
    flex-direction: column;
    width: min-content;
    font-family: $fontDefault;
    line-height: 100%;
    @include adaptive-font(1.7, 1);
  }

  &__quantity-number {
    color: $blue;
    font-family: $fontDefaultBold;
    line-height: 85%;

    &_small {
      @include adaptive-font(4, 2.5);
    }

    &:not(&_small) {
      @include adaptive-font(8, 5);
    }
  }

  &__upper {
    text-transform: uppercase;
  }
}
</style>
