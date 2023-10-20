<template>
  <section class="complex-section">
    <div class="complex-card complex-card-1">
      <div class="complex-card-icons">
        <img src="@/assets/icons/complex/sun.svg" alt="sun" class="complex-card__icon" />
        <img src="@/assets/icons/complex/moon.svg" alt="moon" class="complex-card__icon" />
      </div>
      <p class="complex-card-text">PURE VITAMIN C</p>
    </div>
    <div class="complex-card complex-card-2">
      <div class="complex-card-icons">
        <img src="@/assets/icons/complex/moon.svg" alt="moon" class="complex-card__icon" />
      </div>
      <p class="complex-card-text">
        REDERMIC<br />
        RETINOL
      </p>
    </div>
    <div class="complex-card complex-card-3">
      <div class="complex-card-icons">
        <img src="@/assets/icons/complex/sun.svg" alt="sun" class="complex-card__icon" />
        <img src="@/assets/icons/complex/moon.svg" alt="moon" class="complex-card__icon" />
      </div>
      <p class="complex-card-text">HYALU B5</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

.complex {
  &-section {
    display: grid;

    @include desktop {
      margin-top: 10.3rem;
      margin-bottom: -1.3rem;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    @media (min-width: 1440px) {
      gap: 10rem;
    }
  }

  &-card {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    align-items: end;
    background-size: cover;
    border-radius: 8rem;
    aspect-ratio: 10 / 14.34;
    box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);

    &-1 {
      background-image: url('@/assets/images/complex/card-1.jpg');
    }

    &-2 {
      background-image: url('@/assets/images/complex/card-2.jpg');
    }

    &-3 {
      background-image: url('@/assets/images/complex/card-3.jpg');
    }

    &-icons {
      position: absolute;
      display: flex;
      flex-direction: column;

      @media (min-width: 1440px) {
        top: 5rem;
        right: 5rem;
        row-gap: 3rem;
      }

      @media (max-width: 1439px) {
        top: 4rem;
        right: 4rem;
        row-gap: 2.5rem;
      }
    }

    &__icon {
      object-fit: contain;

      @media (min-width: 1440px) {
        width: 8.3rem;
        height: 8.3rem;
      }

      @media (max-width: 1439px) {
        width: 7.5rem;
        height: 7.5rem;
      }
    }

    &-text {
      width: 100%;
      background-color: $white;
      font-family: $fontDefaultBold;
      @include adaptive-font(3.5, 2.1);
      line-height: 100%;
      object-fit: cover;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 1440px) {
        height: 11.9rem;
        padding-top: 3rem;
      }

      @media (max-width: 1439px) {
        height: 10rem;
        padding-top: 2rem;
      }
    }
  }
}
</style>
