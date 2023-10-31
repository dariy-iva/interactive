<template>
  <section class="pigmentation">
    <div class="pigmentation__info">
      <p class="pigmentation__info-text">
        все мы выглядим по&#8209;разному,<br />но различаемся только количеством<br /><span>меланина</span>
      </p>

      <div class="pigmentation__statistics">
        <p class="pigmentation__statistics-text">распространенная проблема <span>среди&nbsp;российских женщин</span></p>
        <div class="pigmentation__statistics-search">248&nbsp;323</div>
        <p class="pigmentation__statistics-text pigmentation__statistics-text_large">поисковых запросов в месяц</p>
      </div>
    </div>

    <div class="pigmentation__content">
      <div class="pigmentation__main">
        <div class="pigmentation__main-top">
          <h1 class="pigmentation__main-title"><span>гипер</span>пигментация</h1>
          <button-default text="ЧТО ВНУТРИ?" @click="$emit('toggleStep', 7)" />
        </div>

        <div class="pigmentation__cards">
          <card-image
            text="актиническое<br />лентиго"
            class="pigmentation__card pigmentation__card_type_lentigo"
            @click="$emit('toggleStep', 4)"
          />

          <card-image
            text="мелазма/хлоазма"
            class="pigmentation__card pigmentation__card_type_melasma"
            @click="$emit('toggleStep', 5)"
          />

          <card-image
            text="поствоспалительная<br />гиперпигментация"
            class="pigmentation__card pigmentation__card_type_postacne"
            @click="$emit('toggleStep', 6)"
          />
        </div>
      </div>

      <div class="pigmentation__addition">
        <div class="pigmentation__circle">
          <span class="pigmentation__circle-symbol">№</span>
          <span class="pigmentation__circle-number">3</span>
        </div>
        <p class="pigmentation__addition-text">
          причина <br />психологического<br />
          дискомфорта <br />женщин <br />во всём мире
        </p>
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
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;
$fontDefaultSemiBold: $FONT_DEFAULT_SEMI_BOLD;
$fontDefaultExtraBold: $FONT_DEFAULT_EXTRA_BOLD;

.pigmentation {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  color: $white;
  text-transform: uppercase;

  @media (min-width: 1440px) {
    gap: 11rem;
  }

  @media (max-width: 1439px) {
    gap: 5rem;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @include tablet-desktop {
      align-items: center;
    }

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__info-text {
    font-family: $fontDefault;
    line-height: 110%;
    @include adaptive-font(3, 1.87);
    @include desktop {
      max-width: 36.34%;
    }

    & > span {
      font-family: $fontDefaultExtraBold;
      line-height: 100%;
      @include adaptive-font(6.8, 4.38);
    }
  }

  &__statistics {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1440px) {
      padding-right: 6rem;
    }
  }

  &__statistics-text {
    font-family: $fontDefault;
    line-height: 100%;

    &:not(&_large) {
      @include adaptive-font(2, 1.25);
    }

    &_large {
      @include adaptive-font(3, 1.9);
    }

    & > span {
      font-family: $fontDefaultBold;
    }
  }

  &__statistics-search {
    width: max-content;
    max-width: 81rem;
    background: url('@/assets/icons/search.svg') bottom right / 20.74% auto no-repeat $blue;
    font-family: $fontDefaultSemiBold;
    line-height: 96%;
    @include adaptive-font(14.6, 4);

    @media (min-width: 1440px) {
      padding: 2rem 17rem 2rem 6.4rem;
      border-radius: 8rem;
    }

    @media (max-width: 1439px) {
      padding: 1.5rem 23.8% 1.5rem 3.4rem;
      border-radius: 6rem;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @media (min-width: 1440px) {
      padding-right: 2.6rem;
    }

    @include desktop {
      gap: 6rem;
    }

    @include mobile-tablet {
      flex-direction: column-reverse;
      gap: 4rem;
    }
  }

  &__main {
    flex-grow: 1;
    max-width: 126.5rem;
  }

  &__main-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @include mobile {
      flex-direction: column;
    }
  }

  &__main-title {
    line-height: 100%;

    @media (min-width: 1550px) {
      font-size: 6.5rem;
    }

    @media (min-width: 768px) and (max-width: 1549px) {
      font-size: 4rem;
    }

    @include mobile {
      font-size: 2.5rem;
    }

    & > span {
      font-family: $fontDefaultExtraBold;
    }
  }

  &__cards {
    display: grid;
    place-items: center;
    margin-top: 5.3rem;

    @media (min-width: 1550px) {
      gap: 10rem;
    }

    @media (min-width: 768px) and (max-width: 1550px) {
      gap: 3rem;
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
  }

  &__card {
    width: 100%;
    aspect-ratio: 10 / 12.68;
    cursor: pointer;

    @include tablet-desktop {
      min-height: 45rem;
    }
    @include mobile {
      min-height: 33rem;
    }
    @include mobile-tablet {
      max-width: 35rem;
    }

    &_type_lentigo {
      background-image: url('@/assets/images/hyperpigmentation/lentigo.webp');
    }

    &_type_melasma {
      background-image: url('@/assets/images/hyperpigmentation/melasma.webp');
    }

    &_type_postacne {
      background-image: url('@/assets/images/hyperpigmentation/postacne.webp');
    }

    &:deep(.card-image__text) {
      bottom: 5rem;
      padding: 1rem 0;
      min-height: 5.7rem;
      display: grid;
      place-items: center;
      @include adaptive-font(1.7, 1.2);
    }
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $blue;

    @media (min-width: 1440px) {
      width: 23.6rem;
      height: 23.6rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      width: 19.6rem;
      height: 19.6rem;
    }

    @include mobile-tablet {
      width: 12rem;
      min-width: 12rem;
      height: 12rem;
      gap: 2rem;
    }
  }

  &__circle-symbol {
    font-family: $fontDefaultBold;
    @include adaptive-font(4, 2.5);
  }

  &__circle-number {
    line-height: 100%;
    text-transform: lowercase;
    @include adaptive-font(17.7, 6);
  }

  &__addition {
    display: flex;

    @include desktop {
      flex-direction: column;
      max-width: 33rem;
      padding-top: 2.1rem;
      gap: 1.6rem;
    }

    @include mobile-tablet {
      align-items: center;
      margin: 0 auto;
      gap: 2.5rem;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &__addition-text {
    line-height: 130%;
    @include adaptive-font(2.5, 2);

    @include mobile {
      text-align: center;
    }
  }
}

.button-next {
  position: absolute;

  @include tablet-desktop {
    right: 0;
    bottom: 0;
  }

  @include mobile {
    position: initial;
    margin-top: 3rem;
  }
}
</style>
