<template>
  <section class="inflammation-section">
    <h2 class="title">ВОСПАЛЕНИЕ И ПИГМЕНТАЦИЯ</h2>
    <div class="inflammation-content">
      <div class="inflammation-picture">
        <div class="inflammation-picture-steps">
          <div class="inflammation-picture-step inflammation-picture-step-1">
            <span class="inflammation-picture-step__title">Этап 1</span>
            <span class="inflammation-picture-step__text">ОКИСЛЕНИЕ</span>
          </div>
          <div class="inflammation-picture-step inflammation-picture-step-4">
            <span class="inflammation-picture-step__title">Этап 4</span>
            <span class="inflammation-picture-step__text">ПИГМЕНТАЦИЯ</span>
          </div>
          <div class="inflammation-picture-step inflammation-picture-step-3">
            <span class="inflammation-picture-step__title">Этап 3</span>
            <span class="inflammation-picture-step__text">ПЕРЕНОС МЕЛАНИНА</span>
          </div>
          <div class="inflammation-picture-step inflammation-picture-step-2">
            <span class="inflammation-picture-step__title">Этап 2</span>
            <span class="inflammation-picture-step__text">ВОСПАЛЕНИЕ</span>
          </div>
        </div>
      </div>
      <ul class="inflammation-info">
        <li class="inflammation-info-item">
          <div class="inflammation-info-item__number"><span>I</span></div>
          <p class="inflammation-info-item__text">
            ЧРЕЗМЕРНАЯ ВЫРАБОТКА<br />
            СВОБОДНЫХ РАДИКАЛОВ
          </p>
        </li>
        <li class="inflammation-info-item">
          <div class="inflammation-info-item__number"><span>2</span></div>
          <p class="inflammation-info-item__text">
            СИНТЕЗ ХЕМОКИНОВ<br />
            ИЛИ МЕДИАТОРОВ ВОСПАЛЕНИЯ
          </p>
        </li>
        <li class="inflammation-info-item">
          <div class="inflammation-info-item__number"><span>3</span></div>
          <p class="inflammation-info-item__text">
            <span>ОКИСЛИТЕЛЬНЫЙ <br />СТРЕСС</span><span class="plus">+</span
            ><span>ПРОЦЕСС <br />ХРОНИЧЕСКОГО <br />ВОСПАЛЕНИЯ</span>
          </p>
        </li>
        <li class="inflammation-info-item">
          <div class="inflammation-info-item__number"><span>4</span></div>
          <p class="inflammation-info-item__text">
            СИНТЕЗ МЕЛАНИНА,<br />
            ПРИОБРЕТЕННАЯ ПИГМЕНТАЦИЯ
          </p>
        </li>
      </ul>
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

.title {
  color: $white;
  font-family: 'GillSans ExtraBold';
  @include adaptive-font(7, 4);
  line-height: 100%;
  text-transform: uppercase;
}

.inflammation {
  &-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      justify-content: end;
      gap: 5.2rem;
    }

    @media (max-width: 1439px) {
      gap: 3rem;
    }
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    @include desktop {
      margin-top: 4rem;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &-picture {
    display: flex;
    width: 100%;
    max-width: 81rem;
    height: 60.8rem;
    justify-content: end;
    padding: 3.2rem 7.7rem 2.9rem 0;
    border-radius: 5rem;
    background-image: url('@/assets/images/inflammation/picture-background.jpg');
    background-size: cover;

    &-steps {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }

    &-step {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      border-radius: 2rem;
      background-color: $white;
      color: $blue;
      font-family: GillSans;
      @include adaptive-font(3, 1.9);
      text-align: center;
      text-transform: uppercase;

      &-2,
      &-3 {
        &::before {
          position: absolute;
          top: -5.5rem;
          left: 10.8rem;
          width: 2.3rem;
          height: 5.5rem;
          background-image: url('@/assets/icons/inflammation/arrow.svg');
          background-size: contain;
          content: '';
        }
      }

      &-1 {
        &::before {
          position: absolute;
          top: 4.6rem;
          right: -17.3rem;
          width: 17.1rem;
          height: 46.7rem;
          background-image: url('@/assets/icons/inflammation/arrow-long.svg');
          background-size: contain;
          content: '';
        }
      }

      &__title {
        font-family: 'GillSans Bold';
      }
    }
  }

  &-info {
    z-index: 1;
    display: flex;
    flex-direction: column;
    row-gap: 2.6rem;

    @media (min-width: 1440px) {
      padding-right: 5rem;
    }

    &-item {
      display: flex;
      align-items: center;
      column-gap: 2.5rem;

      &__number {
        display: flex;
        width: 10rem;
        min-width: 10rem;
        height: 10rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: $white;
        color: $blue;
        font-family: GillSans;
        @include adaptive-font(8, 3);
        line-height: 100%;

        @media (max-width: 1440px) {
          width: 7rem;
          min-width: 7rem;
          height: 7rem;
          font-size: 5rem;
        }

        span {
          display: block;
          @include desktop {
            margin-bottom: -1.9rem;
          }
        }
      }

      &__text {
        display: flex;
        color: $white;
        column-gap: 3rem;
        font-family: GillSans;
        @include adaptive-font(3, 1.9);
        line-height: 130%;
        text-transform: uppercase;

        @include mobile {
          flex-direction: column;
        }

        span.plus {
          @include adaptive-font(10, 6.3);
          line-height: 70%;
        }
      }
    }
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
