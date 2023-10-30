<template>
  <section class="inflammation">
    <div class="inflammation__container">
      <h1 class="inflammation__title">воспаление и пигментация</h1>

      <div class="inflammation__content">
        <div class="inflammation__scheme">
          <div class="inflammation__steps">
            <div class="inflammation__step inflammation__step-1">
              <span class="inflammation__step-title">Этап I</span>
              <span class="inflammation__step-text">окисление</span>
            </div>
            <div class="inflammation__step inflammation__step-4">
              <span class="inflammation__step-title">Этап 4</span>
              <span class="inflammation__step-text">пигментация</span>
            </div>
            <div class="inflammation__step inflammation__step-3">
              <span class="inflammation__step-title">Этап 3</span>
              <span class="inflammation__step-text">перенос меланина</span>
            </div>
            <div class="inflammation__step inflammation__step-2">
              <span class="inflammation__step-title">Этап 2</span>
              <span class="inflammation__step-text">воспаление</span>
            </div>
          </div>
        </div>

        <ul class="inflammation__info-list">
          <li class="inflammation__info-item">
            <p class="inflammation__number">I</p>
            <p class="inflammation__text">чрезмерная выработка<br />свободных радикалов</p>
          </li>

          <li class="inflammation__info-item">
            <p class="inflammation__number">2</p>
            <p class="inflammation__text">синтез хемокинов<br />или медиаторов воспаления</p>
          </li>

          <li class="inflammation__info-item">
            <p class="inflammation__number">3</p>
            <p class="inflammation__text">
              <span>окислительный <br />стресс</span>
              <span class="inflammation__plus">+</span>
              <span>процесс <br />хронического <br />воспаления</span>
            </p>
          </li>

          <li class="inflammation__info-item">
            <p class="inflammation__number">4</p>
            <p class="inflammation__text">синтез меланина,<br />приобретенная пигментация</p>
          </li>
        </ul>
      </div>
    </div>

    <button-default text="Что нужно для защиты?" class="inflammation__button" @click="$emit('toggleStep')" />
  </section>
</template>

<script setup>
import ButtonDefault from '@/components/UI/ButtonDefault.vue'

defineEmits(['toggleStep'])
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;
$fontDefaultExtraBold: $FONT_DEFAULT_EXTRA_BOLD;

.inflammation {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    gap: 5.2rem;
  }

  @media (max-width: 1439px) {
    gap: 3rem;
  }

  &__container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }

  &__title {
    color: $white;
    font-family: $fontDefaultExtraBold;
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(7, 3);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    @include mobile-tablet {
      flex-direction: column;
    }
  }

  &__scheme {
    flex-grow: 1;
    display: flex;
    justify-content: end;
    max-width: 81rem;
    padding: 3.2rem 7.7rem 2.9rem 0;
    border-radius: 5rem;
    background: url('@/assets/images/inflammation/scheme-background.webp') center / cover no-repeat;

    @include desktop {
      min-height: 60.8rem;
    }

    @include tablet {
      padding-right: 10rem;
    }

    @include mobile-tablet {
      min-width: 100%;
    }
  }

  &__steps {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    @include desktop {
      gap: 5.8rem;
    }

    @include mobile-tablet {
      gap: 4.8rem;
    }
  }

  &__step {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    border-radius: 2rem;
    background-color: $white;
    color: $blue;
    font-family: $fontDefault;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(3, 1.7);

    &-2::before,
    &-3::before {
      position: absolute;
      bottom: 100%;
      rotate: 90deg;
      background: url('@/assets/icons/arrow.svg') center / contain no-repeat;
      content: '';

      @include desktop {
        left: 10.8rem;
        width: 5.5rem;
        height: 5.5rem;
      }

      @include mobile-tablet {
        left: 5.8rem;
        width: 3.5rem;
        height: 4.5rem;
      }
    }

    &-1::before {
      position: absolute;

      width: 17.1rem;
      background: url('@/assets/icons/arrow_long.svg') center / contain no-repeat;
      content: '';

      @include desktop {
        top: 4.6rem;
        left: calc(100% + 0.5rem);
        height: 46.7rem;
      }

      @include mobile-tablet {
        top: 3rem;
        left: calc(100% - 1.5rem);
        height: 34.5rem;
      }
    }
  }

  &__step-title {
    font-family: $fontDefaultBold;
  }

  &__info-list {
    display: flex;
    flex-direction: column;
    row-gap: 2.6rem;
  }

  &__info-item {
    display: flex;
    align-items: center;
    column-gap: 2.5rem;
  }

  &__number {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $white;
    color: $blue;
    font-family: $fontDefault;
    line-height: 100%;
    @include adaptive-font(8, 3);

    @media (min-width: 1441px) {
      width: 10rem;
      min-width: 10rem;
      height: 10rem;
    }

    @media (max-width: 1441px) {
      width: 7rem;
      min-width: 7rem;
      height: 7rem;
    }
  }

  &__text {
    display: flex;
    flex-wrap: wrap;
    color: $white;
    column-gap: 3rem;
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: uppercase;
    @include adaptive-font(3, 1.7);

    @include mobile {
      flex-direction: column;
    }
  }

  &__plus {
    line-height: 70%;
    @include adaptive-font(10, 6.3);
  }

  &__button {
    width: max-content;
    margin-left: auto;

    @include mobile {
      width: fit-content;
    }
  }
}
</style>
