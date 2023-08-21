<template>
  <section class="map-section">
    <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="map__logo" />
    <h1 class="map__title">Карта пигментации</h1>
    <div class="map-wrapper">
      <div class="map-line">
        <button type="button" class="step-1 step-main step-main-start step-button" @click="onStepClick(2)">
          старт
          <span class="step-main_hover" />
        </button>

        <button type="button" class="step-2 step-big step-button" @click="onStepClick(2)">
          <span class="step-big__num">I</span>
          <span class="step-big_hover" />
          <span class="step-big__text"><span>пигмент</span> и кожа</span>
        </button>

        <button type="button" class="step-3 step-normal step-normal_centered step-button" @click="onStepClick(3)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">гипер<span>пигментация</span></span>
        </button>

        <button type="button" class="step-4 step-normal step-button" @click="onStepClick(4)">
          <span class="step-normal__hover" />
          <span class="step-normal__text text-right">актиническое <br />лентиго</span>
        </button>
      </div>

      <div class="map-line">
        <button type="button" class="step-8 step-big step-button" @click="onStepClick(8)">
          <span class="step-big__num">II</span>
          <span class="step-big_hover" />
          <span class="step-big__text step-big__text--right">ЭКСПЕРТИЗА<br />LA&nbsp;ROCHE&#8209;POSAY</span>
        </button>

        <button type="button" class="step-7 step-normal step-normal_centered step-button" @click="onStepClick(7)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">что внутри?</span>
        </button>

        <button type="button" class="step-6 step-normal step-normal_centered step-button" @click="onStepClick(6)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">ПОСТВОСПАЛИТЕЛЬНАЯ <br />ГИПЕРПИГМЕНТАЦИЯ</span>
        </button>

        <button type="button" class="step-5 step-normal step-normal_centered step-button" @click="onStepClick(5)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">мелазма/ <br /><span>хлоазма</span></span>
        </button>
      </div>

      <div class="map-line">
        <button type="button" class="step-9 step-normal step-normal_centered step-button" @click="onStepClick(9)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">воспаление<br />и&nbsp;гиперпигментация</span>
        </button>

        <button type="button" class="step-10 step-normal step-normal_centered step-button" @click="onStepClick(10)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">лечение</span>
        </button>

        <button type="button" class="step-11 step-big step-button" @click="onStepClick(11)">
          <span class="step-big__num">III</span>
          <span class="step-big_hover" />
          <span class="step-big__text text-right">ИННОВАЦИЯ<br />NIACINAMIDE&nbsp;10</span>
        </button>
      </div>
      <div class="map-line">
        <button type="button" class="step-18 step-normal step-button" @click="onStepClick(18)">
          <span class="step-normal__hover"></span>
          <span class="step-normal__text text-left">действие<br /><span>продукта</span></span>
        </button>

        <button type="button" class="step-17 step-normal step-normal_centered step-button" @click="onStepClick(17)">
          <span class="step-normal__hover" />
          <span class="step-normal__text text-top">формула <br />продукта</span>
        </button>

        <button type="button" class="step-16 step-normal step-normal_centered step-button" @click="onStepClick(16)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">ГИАЛУРОНОВАЯ<br />КИСЛОТА</span>
        </button>

        <button type="button" class="step-15 step-normal step-normal_centered step-button" @click="onStepClick(15)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">HEPES</span>
        </button>

        <button type="button" class="step-14 step-normal step-normal_centered step-button" @click="onStepClick(14)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">ФЕ-РЕЗОРЦИНОЛ</span>
        </button>

        <button type="button" class="step-13 step-normal step-normal_centered step-button" @click="onStepClick(13)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">ниациамид</span>
        </button>

        <button type="button" class="step-12 step-normal step-button" @click="onStepClick(12)">
          <span class="step-normal__hover" />
          <span class="step-normal__text text-right">АКТИВНЫЕ<br />КОМПОНЕНТЫ</span>
        </button>
      </div>
      <div class="map-line">
        <button type="button" class="step-19 step-normal step-normal_centered step-button" @click="onStepClick(19)">
          <span class="step-normal__hover" />
          <span class="step-normal__text"
            >РЕЗУЛЬТАТЫ,<br />
            <span class="small">ПОДТВЕРЖДЕННЫЕ<br />ПОТРЕБИТЕЛЯМИ</span>
          </span>
        </button>

        <button type="button" class="step-20 step-normal step-normal_centered step-button" @click="onStepClick(20)">
          <span class="step-normal__hover" />
          <span class="step-normal__text"
            >РЕЗУЛЬТАТЫ,<br />
            <span class="small">доказанная <br />эффективность</span>
          </span>
        </button>

        <button type="button" class="step-21 step-normal step-normal_centered step-button" @click="onStepClick(21)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">для<br />кого?</span>
        </button>

        <button type="button" class="step-22 step-normal step-normal_centered step-button" @click="onStepClick(22)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">КОМПЛЕКСНАЯ <br /><span>РЕКОМЕНДАЦИЯ</span></span>
        </button>

        <button type="button" class="step-23 step-normal step-normal_centered step-button" @click="onStepClick(23)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">об УФ&#8209;ЛУЧАХ</span>
        </button>

        <button class="step-24 step-normal step-normal_centered step-button" @click="onStepClick(24)">
          <span class="step-normal__hover" />
          <span class="step-normal__text">против <br />всех видов <br />пигментации</span>
        </button>

        <button type="button" class="step-25 step-main step-button step-main-finish" @click="onStepClick(25)">
          финиш
          <span class="step-main_hover" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['lastStep'])

const emits = defineEmits(['toggleStep'])

function onStepClick(step) {
  if (+step > props.lastStep + 1) return

  emits('toggleStep', step)
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$violet: $VIOLET;
$blue: $BLUE;

.map {
  &-section {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 700px;
    min-height: 100vh;
    position: relative;
    padding-top: 22.4rem;
    padding-bottom: 18rem;
    background-image: url('@/assets/images/background-01.jpg');
    background-size: cover;
  }

  &__logo {
    position: absolute;
    top: 0;
    left: 44.6rem;
    width: 29.1rem;
    background-size: contain;

    @media (max-width: 1550px) {
      left: 10rem;
      max-width: 215px;
    }
  }

  &__title {
    position: absolute;
    top: 6.5rem;
    right: 8.6rem;
    color: $white;
    font-family: 'GillSans Light';
    font-size: 7rem;
    line-height: 100%;
    text-transform: uppercase;

    @include tablet {
      top: 7.5rem;
      right: 5rem;
      font-size: 4rem;
    }

    @include mobile {
      top: 8.5rem;
      right: 2rem;
      font-size: 2.5rem;
    }
  }

  &-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    aspect-ratio: 10 / 4.15;
    flex-direction: column;
    background: url('@/assets/images/map/way.png') center / cover no-repeat;

    @media (min-width: 1550px) {
      padding-left: 13.4rem;
      padding-right: 6.1rem;
    }

    @media (max-width: 1549px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

  &__way {
    position: absolute;
    top: 12rem;
    left: 0;
    width: 100%;
    height: 80.6rem;
  }

  &-line {
    position: relative;

    &:not(:first-of-type) {
      @media (min-width: 701px) {
        padding-top: 5vw;
      }
      @media (max-width: 700px) {
        padding-top: 35px;
      }
    }

    &:not(:last-of-type) {
      @media (min-width: 701px) {
        padding-bottom: 5vw;
      }
      @media (max-width: 700px) {
        padding-bottom: 35px;
      }
    }
  }
}

.step-button {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.step {
  &-main {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: url('@/assets/icons/map/cloud-inverted.svg') center / contain no-repeat;
    color: $white;
    font-family: GillSans;
    font-size: 5.2rem;
    line-height: 6rem;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 1550px) {
      font-size: 3.5rem;
    }

    @include tablet {
      font-size: 2.5rem;
    }

    @include mobile {
      font-size: 1.8rem;
    }

    &_hover {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('@/assets/icons/map/cloud-inverted_hovered.png') top 32% left -8% / 112% no-repeat;
      rotate: -3deg;
      content: '';
      opacity: 0;
      transition: 0.3s;
    }

    &:hover > &_hover {
      @include desktop {
        opacity: 1;
      }
    }

    &-start {
      width: 17.19vw;
      min-width: 128px;
      aspect-ratio: 10 / 6.03;

      &::after {
        position: absolute;
        top: -1.8vw;
        left: 5.73vw;
        width: 4vw;
        min-width: 3rem;
        aspect-ratio: 10 / 13.25;
        background-image: url('@/assets/images/map/crystal.png');
        background-repeat: no-repeat;
        background-size: cover;
        content: '';

        @media (max-width: 700px) {
          top: -12px;
          left: 43px;
        }
      }
    }

    &-finish {
      width: 14.69vw;
      min-width: 95px;
      aspect-ratio: 10 / 6.24;
    }
  }

  &-big {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    width: 11.72vw;
    min-width: 82px;
    aspect-ratio: 10 / 6.18;
    background: url('@/assets/icons/map/cloud.svg') transparent center / cover no-repeat;
    color: $white;
    font-family: 'GillSans Light';
    font-size: 7.2rem;
    line-height: 100%;
    text-transform: uppercase;
    transition: 0.3s;

    @media (max-width: 1550px) {
      font-size: 4rem;
    }

    @include tablet {
      font-size: 3rem;
    }

    @include mobile {
      font-size: 2rem;
    }

    &_hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('@/assets/icons/map/cloud-hover.svg') top 30% left 43% / 135% no-repeat;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover > &_hover {
      @include desktop {
        opacity: 1;
      }
    }

    &__num {
      z-index: 1;
    }

    &__text {
      position: absolute;
      color: $white;
      font-family: 'GillSans Bold';
      font-size: 3.2rem;
      line-height: 3.7rem;
      text-align: center;
      cursor: default;
      pointer-events: none;
      text-transform: uppercase;

      &:not(.text-right) {
        top: calc(100% + 0.8rem);
      }

      &--right {
        right: 3.28vw;
        text-align: right;
      }

      &--left {
        text-align: left;
      }

      span {
        font-family: GillSans;
      }

      @media (min-width: 1550px) {
        width: max-content;
      }

      @media (max-width: 1550px) {
        font-size: 2.2rem;
        line-height: 100%;
      }

      @include tablet {
        font-size: 1.8rem;
      }

      @include mobile {
        font-size: 1.4rem;
      }
    }
  }

  &-normal {
    display: flex;
    width: 3.02vw;
    min-width: 21px;
    aspect-ratio: 1 / 1;
    flex-direction: column;
    align-items: center;
    border: none;
    background: none;

    &_centered {
      top: -1.5vw;
    }

    &__hover {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      border: 0.4rem solid $white;
      border-radius: 50%;
      background-color: $blue;
      transition: 0.3s;
    }

    &:hover > &__hover {
      @include desktop {
        border: 1.6rem solid $white;
      }
    }

    &__text {
      position: absolute;
      color: $white;
      font-family: 'GillSans Bold';
      font-size: 2.5rem;
      line-height: 100%;
      opacity: 0.7;
      text-align: center;
      transition: 0.3s;
      cursor: default;
      pointer-events: none;
      text-transform: uppercase;

      @media (min-width: 1550px) {
        width: max-content;
      }

      @media (max-width: 1549px) {
        font-size: 1.8rem;
      }

      @include tablet {
        font-size: 1.4rem;
      }

      @include mobile {
        font-size: 1.2rem;
      }

      span {
        font-family: GillSans;
      }

      span.small {
        font-size: 1.8rem;

        @media (max-width: 1549px) {
          font-size: 1.3rem;
        }
      }
    }

    &_centered > &__text:not(.text-top) {
      top: calc(100% + 2rem);

      @include mobile-tablet {
        top: calc(100% + 0.8rem);
      }
    }

    @include desktop {
      &:hover &__text {
        opacity: 1;
      }
    }
  }

  &-line {
    display: flex;
    align-items: center;
    column-gap: 2rem;

    &:has(.step-normal__icon:hover) .step-normal__text {
      opacity: 1;
    }

    &--right {
      span {
        text-align: left;
      }
    }

    &--left {
      span {
        text-align: right;
      }
    }
  }

  &-1 {
    top: -5.2vw;
    left: 0;
    @media (max-width: 700px) {
      top: -36px;
    }
  }

  &-2 {
    top: -3.59vw;

    @media (min-width: 1550px) {
      left: 27.66vw;
    }
    @media (max-width: 1549px) {
      left: 29.03vw;
    }
    @media (max-width: 700px) {
      top: -26px;
      left: 203px;
    }
  }

  &-3 {
    @media (min-width: 1550px) {
      left: 48.91vw;
    }
    @media (max-width: 1549px) {
      left: 53.28vw;
    }
    @media (max-width: 700px) {
      left: 373px;
    }
  }

  &-4 {
    top: -0.73vw;

    @media (min-width: 1550px) {
      left: 62.4vw;
    }
    @media (max-width: 1549px) {
      left: 66.77vw;
    }
    @include mobile-tablet {
      left: 64vw;
    }
    @media (max-width: 700px) {
      top: -5px;
      left: 448px;
    }
  }

  &-5 {
    @media (min-width: 1550px) {
      top: 3.5vw;
      left: 62.4vw;
    }
    @media (max-width: 1549px) {
      top: 3.5vw;
      left: 66.77vw;
    }
    @include mobile-tablet {
      top: 2.3vw;
      left: 65vw;
    }
    @media (max-width: 700px) {
      top: 15px;
      left: 456px;
    }
  }

  &-6 {
    @media (min-width: 1550px) {
      top: 3.5vw;
      left: 45.73vw;
    }
    @media (max-width: 1549px) {
      top: 3.5vw;
      left: 50.1vw;
    }
    @media (max-width: 700px) {
      top: 25px;
      left: 351px;
    }
  }

  &-7 {
    top: 3.5vw;

    @media (min-width: 1550px) {
      left: 29.01vw;
    }
    @media (max-width: 1549px) {
      left: 33.39vw;
    }
    @media (max-width: 700px) {
      top: 25px;
      left: 233px;
    }
  }

  &-8 {
    @media (min-width: 1550px) {
      top: 7vw;
      left: 11.86vw;
    }
    @media (max-width: 1549px) {
      top: 7vw;
      left: 16.25vw;
    }
    @media (max-width: 700px) {
      top: 48px;
      left: 113px;
    }
  }

  &-9 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 31.88vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 36.25vw;
    }
    @media (max-width: 700px) {
      top: 32px;
      left: 254px;
    }
  }

  &-10 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 46.77vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 51.15vw;
    }
    @media (max-width: 700px) {
      top: 32px;
      left: 359px;
    }
  }

  &-11 {
    @media (min-width: 1550px) {
      top: 2vw;
      left: 54.9vw;
    }
    @media (max-width: 1549px) {
      top: 2vw;
      left: 59.27vw;
    }
    @media (max-width: 700px) {
      top: 14px;
      left: 416px;
    }
  }

  &-12 {
    @media (min-width: 1550px) {
      top: 1.6vw;
      left: 64.55vw;
    }
    @media (max-width: 1549px) {
      top: 1.6vw;
      left: 68.42vw;
    }
    @include mobile-tablet {
      top: 1.6vw;
      left: 66.72vw;
    }
    @media (max-width: 700px) {
      top: 8px;
      left: 463px;
    }
  }

  &-13 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 58.54vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 62.92vw;
    }
    @media (max-width: 700px) {
      top: 31px;
      left: 429px;
    }
  }

  &-14 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 43.75vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 48.13vw;
    }
    @media (max-width: 700px) {
      top: 31px;
      left: 337px;
    }
  }

  &-15 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 31.86vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 36.25vw;
    }
    @media (max-width: 700px) {
      top: 31px;
      left: 254px;
    }
  }

  &-16 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 20.68vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 25.05vw;
    }
    @media (max-width: 700px) {
      top: 31px;
      left: 173px;
    }
  }

  &-17 {
    @media (min-width: 1550px) {
      top: 4.5vw;
      left: 9.27vw;
    }
    @media (max-width: 1549px) {
      top: 4.5vw;
      left: 13.65vw;
    }
    @media (max-width: 700px) {
      top: 31px;
      left: 95px;
    }
  }

  &-18 {
    @media (min-width: 1550px) {
      top: 9.5vw;
      left: 3.08vw;
    }
    @media (max-width: 1549px) {
      top: 9.5vw;
      left: 6.86vw;
    }
    @include mobile-tablet {
      top: 9.5vw;
      left: 5.06vw;
    }
    @media (max-width: 700px) {
      top: 66px;
      left: 30px;
    }
  }

  &-19 {
    @media (min-width: 1550px) {
      top: 4.8vw;
      left: 9.64vw;
    }
    @media (max-width: 1549px) {
      top: 4.8vw;
      left: 14.01vw;
    }
    @include mobile-tablet {
      top: 4.8vw;
      left: 11.11vw;
    }
    @media (max-width: 700px) {
      top: 34px;
      left: 77px;
    }
  }

  &-20 {
    @media (min-width: 1550px) {
      top: 4.8vw;
      left: 22.76vw;
    }
    @media (max-width: 1549px) {
      top: 4.8vw;
      left: 27.14vw;
    }
    @media (max-width: 700px) {
      top: 34px;
      left: 190px;
    }
  }

  &-21 {
    @media (min-width: 1550px) {
      top: 4.8vw;
      left: 33.44vw;
    }
    @media (max-width: 1549px) {
      top: 4.8vw;
      left: 37.81vw;
    }
    @media (max-width: 700px) {
      top: 34px;
      left: 264px;
    }
  }

  &-22 {
    @media (min-width: 1550px) {
      top: 4.8vw;
      left: 44.22vw;
    }
    @media (max-width: 1549px) {
      top: 4.8vw;
      left: 48.59vw;
    }
    @media (max-width: 700px) {
      top: 34px;
      left: 340px;
    }
  }

  &-23 {
    @media (min-width: 1550px) {
      top: 4.8vw;
      left: 56.82vw;
    }
    @media (max-width: 1549px) {
      top: 4.8vw;
      left: 61.2vw;
    }
    @media (max-width: 700px) {
      top: 34px;
      left: 424px;
    }
  }

  &-24 {
    @media (min-width: 1550px) {
      top: 4.8vw;
      left: 68.23vw;
    }
    @media (max-width: 1549px) {
      top: 4.8vw;
      left: 72.6vw;
    }
    @media (max-width: 700px) {
      top: 34px;
      left: 508px;
    }
  }

  &-25 {
    top: 2.5vw;

    @media (min-width: 1550px) {
      left: 74.9vw;
    }
    @media (max-width: 1549px) {
      left: 79.27vw;
    }
    @media (max-width: 700px) {
      top: 17px;
      right: -40px;
      left: auto;
    }
  }
}

.text-right {
  left: calc(100% + 2rem);
  text-align: start;
}

.text-left {
  @media (min-width: 1550px) {
    right: calc(100% + 2rem);
    text-align: end;
  }

  @media (max-width: 1549px) {
    top: calc(100% + 2rem);
    text-align: center;
  }

  @include mobile-tablet {
    top: calc(100% + 0.8rem);
  }
}

.text-top {
  bottom: calc(100% + 2rem);

  @include mobile-tablet {
    bottom: calc(100% + 0.8rem);
  }
}
</style>
