<template>
  <section class="inside">
    <h1 class="inside__title">Что <strong>внутри?</strong></h1>
    <div class="inside__content">
      <div class="inside__cards">
        <card-image class="inside__card inside__card_type_melanocit">
          <span class="inside__card-title">меланоцит</span>
          <p class="inside__card-text">
            <span>пигментная клетка <br />кожи функция: <br />защита</span>
          </p>
        </card-image>

        <card-image class="inside__card inside__card_type_melanosoma">
          <span class="inside__card-title">меланосома</span>
          <p class="inside__card-text">
            <span>гранула <br />с меланином <br />мигрирует <br />в кератиноцит</span>
          </p>
        </card-image>

        <card-image class="inside__card inside__card_type_keratinocit">
          <span class="inside__card-title">окрашенный <br />кератиноцит</span>
          <p class="inside__card-text">
            <span>защищен <br />от агрессии <br />продвигается <br />к поверхности кожи</span>
          </p>
        </card-image>
      </div>

      <div class="inside__info">
        <div class="inside__paragraph inside__paragraph_large">
          количество<br />
          меланоцитов<br />
          у всех людей<br />
          <span>одинаковое</span>
        </div>
        <div class="inside__paragraph">
          <span class="inside__paragraph_large">пигментация <br />физиологическая</span>
          <ul class="inside__list">
            <li>фототип</li>
            <li>эфелиды</li>
          </ul>
        </div>
        <div class="inside__paragraph">
          <span class="inside__paragraph_large">патологическая</span>
          <ul class="inside__list">
            <li>лентиго</li>
            <li>мелазма</li>
            <li>после воспаления</li>
          </ul>
        </div>
      </div>
    </div>

    <button-default text="Далее" class="button-next" @click="$emit('toggleStep')" />
  </section>
</template>

<script setup>
import ButtonDefault from '@/components/UI/ButtonDefault.vue'
import CardImage from '@/components/UI/CardImage.vue'

defineEmits(['toggleStep'])
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$violet: $VIOLET;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;
$fontDefaultExtraBold: $FONT_DEFAULT_EXTRA_BOLD;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;

@keyframes translateCard {
  from {
    max-height: 50%;
  }
  to {
    max-height: 100%;
  }
}

@keyframes translateText {
  from {
    opacity: 0;
    translate: -100%;
  }
  to {
    opacity: 1;
    translate: 0;
  }
}

.inside {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__title {
    color: $white;
    font-family: $fontDefaultLight;
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(8, 5);

    & > strong {
      font-family: $fontDefaultExtraBold;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-top: 6.7rem;
    gap: 4rem;

    @include mobile-tablet {
      flex-direction: column;
    }
  }

  &__cards {
    flex-grow: 1;
    display: grid;
    justify-content: space-between;
    max-width: 126.5rem;

    @media (min-width: 1550px) {
      gap: 10rem;
    }

    @media (max-width: 1549px) {
      gap: 3rem;
    }

    @include tablet-desktop {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 470px) and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 469px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    max-width: 35.5rem;
    height: initial;
    max-height: initial;
    min-height: initial;
    aspect-ratio: 10 / 21.1;
    padding: 1.2rem;
    border-radius: 2.5rem;
    animation: translateCard 0.5s 1;

    &_type_melanocit {
      background-image: url('@/assets/images/inside/melanocit.webp');
    }

    &_type_keratinocit {
      background-image: url('@/assets/images/inside/keratinocit.webp');
    }

    &_type_melanosoma {
      background-image: url('@/assets/images/inside/melanosoma.webp');
    }

    &:deep(.card-image__wrapper) {
      align-items: start;
      justify-content: start;
      flex-direction: column;
      border-radius: 2.5rem;
      border: 0.3rem solid #ffffff20;

      @include desktop {
        padding: 2.5rem;
      }

      @include mobile-tablet {
        padding: 1.5rem;
      }
    }
  }

  &__card-title {
    color: $white;
    font-family: $fontDefaultBold;
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(3, 1.9);
  }

  &__card-text {
    position: relative;
    display: flex;
    margin-top: 3rem;
    color: $white;
    font-family: $fontDefault;
    line-height: 100%;
    transition: all 0.3s ease;
    @include adaptive-font(3, 1.9);

    @include desktop {
      opacity: 0;
    }

    & > span {
      z-index: 1;
    }

    &::after {
      position: absolute;
      top: -5%;
      left: -5%;
      content: '';
      width: 110%;
      height: 110%;
      filter: blur(6rem);
      background: $violet;
    }
  }

  &__card:hover &__card-text {
    opacity: 1;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    animation: translateText 0.5s 1;

    @media (min-width: 768px) and (max-width: 850px) {
      display: grid;
      min-width: 100%;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    @include desktop {
      width: 20.64%;
      padding-bottom: 9rem;
    }

    @include tablet {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    @include mobile {
      gap: 2rem;
    }
  }

  &__paragraph {
    color: $white;
    font-family: $fontDefault;
    line-height: 110%;
    @include adaptive-font(3, 1.4);

    &_large {
      text-transform: uppercase;
    }

    span {
      font-family: $fontDefaultBold;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
  }
}

.button-next {
  @media (min-width: 1440px) {
    right: 10rem;
    bottom: 10rem;
  }

  @media (max-width: 1439px) {
    right: 10rem;
    bottom: 10rem;
  }

  @include desktop {
    position: absolute;
    right: 10rem;
    bottom: 10rem;
  }

  @include mobile-tablet {
    position: initial;
    margin-top: 3rem;
  }
}
</style>
