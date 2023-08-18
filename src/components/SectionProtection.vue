<template>
  <section class="protection-section">
    <div class="protection-content">
      <ul class="protection-list">
        <li class="protection__item">
          <img src="@/assets/icons/protection/stars.svg" alt="bandage" />
          <p class="protection__text">
            для <span>коррекции</span> ПИГМЕНТАЦИИ НЕОБХОДИМО ВОЗДЕЙСТВОВАТЬ <br />НЕ ТОЛЬКО НА
            <span>ПЕРЕНОС МЕЛАНИНА И ОКАЗАТЬ ОТШЕЛУШИВАЮЩИЙ ЭФФЕКТ</span>
          </p>
        </li>
        <li class="protection__item">
          <img src="@/assets/icons/protection/umbrella.svg" alt="hourglass" />
          <p class="protection__text">
            <span>для предотвращения пигментации</span> недостаточно только<br />
            <span>фотозащиты</span>
          </p>
        </li>
        <li class="protection__item">
          <img src="@/assets/icons/protection/fire.svg" alt="human" />
          <p class="protection__text">
            ЧТОБЫ <span>РАЗОРВАТЬ ЗАМКНУТЫЙ ЦИКЛ,</span> СЛЕДУЕТ ВОЗДЕЙСТВОВАТЬ <br />НА ВОСПАЛЕНИЕ
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;

.protection {
  &-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      justify-content: end;
    }
  }

  &-content {
    border-radius: 8rem;
    background-color: $white;

    @media (min-width: 1440px) {
      padding: 7rem 0 7rem 6rem;
    }

    @media (max-width: 1439px) {
      padding: 6rem 0 6rem 4rem;
    }

    @include mobile {
      padding: 3rem 2rem;
    }
  }

  &-list {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1440px) {
      row-gap: 4.7rem;
    }

    @media (max-width: 1439px) {
      row-gap: 2rem;
    }
  }

  &__item {
    display: flex;
    align-items: center;

    @media (min-width: 1440px) {
      column-gap: 5.2rem;
    }

    @media (max-width: 1439px) {
      column-gap: 3.2rem;
    }

    img {
      object-fit: cover;

      @media (min-width: 1440px) {
        width: 17rem;
        height: 17rem;
      }

      @media (max-width: 1439px) {
        width: 12rem;
        height: 12rem;
      }

      @include mobile {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  &__text {
    font-family: GillSans;
    @include adaptive-font(3, 1.9);
    line-height: 130%;
    text-transform: uppercase;

    span {
      font-family: 'GillSans ExtraBold';
    }
  }
}
</style>
