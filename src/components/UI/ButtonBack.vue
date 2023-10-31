<template>
  <button class="back">
    <span class="back-arrow">
      <img src="@/assets/icons/arrow.svg" alt="arrow" />
    </span>
    <p class="text" v-html="text" />
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Назад'
  }
})
</script>

<style scoped lang="scss">
$white: $WHITE;
$blue: $BLUE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

.back {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 10rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 2.6rem 4rem 2.6rem 12.4rem;
  border-radius: 0 0 3rem 3rem;
  border-right: 0.2rem solid $white;
  border-bottom: 0.2rem solid $white;
  border-left: 0.2rem solid $white;
  border-top: none;
  background: transparent;
  column-gap: 2.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  @include tablet-desktop {
    min-height: 10rem;
  }

  @include mobile-tablet {
    left: 0;
    border-radius: 0 0 2rem 0;
    border-left: none;
    border-top: none;
    border-width: 0.3rem;
  }

  @include mobile {
    width: 7rem;
    height: 7rem;
    padding: 1rem;
  }

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: -100%;
    width: 60rem;
    height: 10rem;
    background: transparent;
    content: '';
    object-fit: cover;
    opacity: 0;
    transition: all 0.3s ease;

    @include mobile {
      display: none;
    }
  }

  @include desktop {
    &:hover {
      &::before {
        left: 0;
        background: linear-gradient(90deg, $blue 0%, rgba(0, 159, 227, 0%) 100%);
        opacity: 1;
      }

      .back-arrow {
        left: 3rem;
      }
    }
  }

  &-arrow {
    position: absolute;
    left: 4rem;
    width: 5.9rem;
    height: 7rem;
    object-fit: cover;
    transition: left 0.3s ease;

    @media (min-width: 1440px) {
      left: 4rem;
      width: 5.9rem;
      height: 7rem;
    }

    @include mobile {
      position: initial;
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    padding-top: 0.5rem;
    color: $white;
    font-family: $fontDefault;
    @include adaptive-font(4, 2.5);
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(4, 2.5);

    @include mobile {
      display: none;
    }

    &:deep(span) {
      font-family: $fontDefaultBold;
    }
  }
}
</style>
