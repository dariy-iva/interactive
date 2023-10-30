<template>
  <article class="ingredient" :class="{ ingredient_right: align === 'right' }">
    <div class="ingredient__info">
      <h3 class="ingredient__title" v-html="title" />

      <ul class="ingredient__text">
        <li v-for="(item, index) in paragraphs" :key="`paragraph-${index}`" v-html="item" />
      </ul>
    </div>

    <div :class="`ingredient__picture ingredient__picture_type_${type}`">
      <div class="ingredient__number" :class="{ ingredient__number_right: align === 'left' }">
        <span v-text="number" />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  paragraphs: {
    type: Array,
    default: []
  },
  align: {
    type: String,
    validator: (value) => ['left', 'right'].includes(value),
    default: 'left'
  },
  type: {
    type: String,
    validator: (value) => ['niacinamide', 'resorcinol', 'hepes', 'hyaluronic'].includes(value),
    default: ''
  }
})
</script>

<style scoped lang="scss">
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

.ingredient {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
  border-radius: 3.2rem;
  background-color: $white;
  box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
  cursor: pointer;

  @media (min-width: 1440px) {
    max-width: 65.2rem;
    min-height: 27rem;
  }

  @media (max-width: 1439px) {
    max-width: 52.2rem;
    min-height: 25rem;
  }

  &::before {
    position: absolute;
    z-index: 4;
    top: -57rem;
    width: 120rem;
    height: 120rem;
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, #009fe3 0%, rgba(0, 159, 227, 0%) 100%);
    content: '';
    object-fit: cover;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
  }

  @include desktop {
    &:hover {
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &:not(&_right) {
    &::before {
      right: -57rem;
    }
  }

  &_right {
    flex-direction: row-reverse;
    justify-content: start;

    &::before {
      left: -57rem;
    }
  }

  &__info {
    padding: 3rem 2rem 0 3rem;
  }

  &__title {
    color: $blue;
    font-family: $fontDefaultBold;
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(2.7, 1.4);
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    color: $black;
    font-family: $fontDefault;
    line-height: 100%;
    gap: 1rem;
    @include adaptive-font(1.7, 1.25);
  }

  &__picture {
    position: relative;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 1440px) {
      min-width: 26.6rem;
    }

    @media (max-width: 1439px) {
      min-width: 22.6rem;
    }

    @include mobile-tablet {
      min-width: 10rem;
    }

    &_type_niacinamide {
      background-image: url('@/assets/images/ingredients/niacinamide.webp');
    }

    &_type_resorcinol {
      background-image: url('@/assets/images/ingredients/resorcinol.webp');
    }

    &_type_hepes {
      background-image: url('@/assets/images/ingredients/hepes.webp');
    }

    &_type_hyaluronic {
      background-image: url('@/assets/images/ingredients/hyaluronic.webp');
    }
  }

  &__number {
    position: absolute;
    z-index: 5;
    top: 1rem;
    display: flex;
    width: 5.8rem;
    height: 5.8rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $white;
    color: $blue;
    font-family: $fontDefault;
    line-height: 100%;
    @include adaptive-font(5, 3);

    &:not(&_right) {
      left: 1rem;
    }

    &_right {
      right: 1rem;
    }
  }
}
</style>
