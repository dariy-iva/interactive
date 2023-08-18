<template>
  <section class="uv-rays-section">
    <picture>
      <source type="image/webp" srcset="@/assets/images/uv-rays/uv-card.webp" />
      <source type="image/jpg" srcset="@/assets/images/uv-rays/uv-card.jpg" />
      <img
        src="@/assets/images/uv-rays/uv-card.jpg"
        srcset="@/assets/images/uv-rays/uv-card.jpg"
        class="uv-rays-picture-product"
        alt="Фотография продукта LA ROCHE-POSAY Pure Niacinamide 10"
      />
    </picture>
    <div class="uv-rays-text">
      <span class="uv-rays-text__title">УФ-ЛУЧИ</span>
      <p class="uv-rays-text__info">
        <span>ОДНА ИЗ ГЛАВНЫХ <br />ПРИЧИН</span> ПОЯВЛЕНИЯ <br />ПИГМЕНТНЫХ ПЯТЕН
      </p>
      <p class="uv-rays-text__description">
        Использование
        <span>средств <br />с SPF из гаммы Anthelios <br />c фактором 50+ является <br />обязательным<br /></span> для
        профилактики<br />
        гиперпигментации
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.uv-rays {
  &-section {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 3.2rem;

    @include desktop {
      padding-right: 2rem;
      margin-top: 10.2rem;
      margin-bottom: -1.8rem;
    }

    @include mobile-tablet {
      flex-direction: column;
      align-items: center;
      margin-bottom: 4rem;
    }
  }

  &-picture-product {
    width: 100%;
    max-width: 50.7rem;
    height: 72.7rem;
    border-radius: 8rem;
    box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);

    @include mobile-tablet {
      aspect-ratio: 10 / 14.34;
      height: auto;
    }
  }

  &-text {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 63.9rem;
    flex-direction: column;
    margin-top: 3.1rem;
    color: $white;
    font-family: GillSans;
    text-align: center;
    text-transform: uppercase;

    @include mobile-tablet {
      aspect-ratio: 10 / 10.1;
    }

    &::before {
      position: absolute;
      bottom: 0rem;
      left: -2rem;
      width: calc(100% + 4rem);
      height: calc(100% + 4rem);
      max-height: 64.5rem;
      background-image: url('@/assets/images/uv-rays/border.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      content: '';

      @include mobile-tablet {
        bottom: -4rem;
      }
    }

    &__title {
      @include adaptive-font(10, 6.3);
      line-height: 100%;
      text-shadow:
        0 0 1.8rem rgba(235, 113, 255, 70%),
        0 0 0.36rem #eb71ff;
    }

    &__info {
      margin-top: 6.5rem;
      @include adaptive-font(4.6, 2.6);
      line-height: 130%;
      text-shadow:
        0 0 1.8rem rgba(235, 113, 255, 70%),
        0 0 0.36rem #eb71ff;

      @include tablet {
        margin-top: 2.5rem;
      }

      span {
        font-family: 'GillSans Bold';
      }
    }

    &__description {
      margin-top: 5rem;
      @include adaptive-font(3, 1.9);
      line-height: 130%;

      span {
        font-family: 'GillSans Bold';
      }
    }
  }
}
</style>
