<template>
  <section class="protection">
    <ul class="protection__list">
      <li class="protection__item">
        <span class="protection__icon protection__icon_type_stars" />
        <p class="protection__text">
          для <strong>коррекции </strong>пигментации необходимо воздействовать<br />
          не только на <strong>перенос меланина и оказать отшелушивающий эффект</strong>
        </p>
      </li>
      <li class="protection__item">
        <span class="protection__icon protection__icon_type_umbrella" />
        <p class="protection__text">
          <strong>для предотвращения пигментации </strong>недостаточно только<br /><strong>фотозащиты</strong>
        </p>
      </li>
      <li class="protection__item">
        <span class="protection__icon protection__icon_type_fire" />
        <p class="protection__text">
          чтобы <strong>разорвать замкнутый цикл, </strong>следует воздействовать<br />на воспаление
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultExtraBold: $FONT_DEFAULT_EXTRA_BOLD;

.protection {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8rem;
    background-color: $white;

    @media (min-width: 1440px) {
      padding: 7rem 6rem;
      gap: 4.7rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      padding: 6rem 4rem;
      gap: 2rem;
    }

    @include mobile {
      padding: 3rem 2rem;
      gap: 2rem;
    }
  }

  &__item {
    display: flex;
    align-items: center;

    @media (min-width: 1440px) {
      gap: 5.2rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      gap: 3.2rem;
    }

    @include mobile {
      gap: 2rem;
    }
  }

  &__icon {
    display: block;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: $blue;

    @media (min-width: 1440px) {
      width: 17rem;
      min-width: 17rem;
      height: 17rem;
      background-size: 9rem 9rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 12rem;
      min-width: 12rem;
      height: 12rem;
      background-size: 9rem 9rem;
    }

    @include mobile {
      width: 7rem;
      min-width: 7rem;
      height: 7rem;
      background-size: 3.5rem 3.5rem;
    }

    &_type_stars {
      background-image: url('@/assets/icons/protection/stars.svg');
    }

    &_type_umbrella {
      background-image: url('@/assets/icons/protection/umbrella.svg');
    }

    &_type_fire {
      background-image: url('@/assets/icons/protection/fire.svg');
    }
  }

  &__text {
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: uppercase;
    @include adaptive-font(3, 1.3);

    & > strong {
      font-family: $fontDefaultExtraBold;
    }
  }
}
</style>
