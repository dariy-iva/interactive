<template>
  <section class="action-section">
    <div class="action-left">
      <div class="action-main-info-left">
        <span class="action-main-info__title">NIACINAMIDE 10</span>
        <span class="action-main-info__description">КОНЦЕНТРИРОВАННАЯ сыворотка</span>
        <p class="action-main-info__content">Против всех видов <br />пигментации</p>
      </div>
      <div class="action-list-left">
        <div class="action-list__item">
          <p>ЗАМЕТНО УМЕНЬШАЕТ ПИГМЕНТНЫЕ <br />ПЯТНА УЖЕ ЧЕРЕЗ 2 НЕДЕЛИ <br />ПРИМЕНЕНИЯ*</p>
        </div>
        <div class="action-list__item">
          <p>ВЫРАВНИВАЕТ ТОН КОЖИ</p>
        </div>
      </div>
    </div>
    <div class="action-product">
      <card-image is-product class="action-product" />
    </div>
    <div class="action-right">
      <div class="action-main-info-right">
        <p class="action-main-info__content">
          БЛОКИРУЕТ<br />
          <span>ПИГМЕНТАЦИЮ</span>
        </p>
        <p class="action-main-info__content">ВЫРАВНИВАЕТ <br /><span>ТОН КОЖИ</span></p>
      </div>
      <div class="action-list-right">
        <div class="action-list__item">
          <p>
            ДЕЙСТВУЕТ ДАЖЕ НА СТАРЫЕ<br />
            ПЯТНА*
          </p>
        </div>
        <div class="action-list__item">
          <p>ПРЕПЯТСТВУЕТ ИХ ПОВТОРНОМУ <br />ПОЯВЛЕНИЮ</p>
        </div>
      </div>
    </div>
    <p class="action-addition">* Потребительский тест, 101 женщина, применение 2 раза в день.</p>
  </section>
</template>

<script setup>
import CardImage from '@/components/CardImage.vue'
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.action {
  &-section {
    position: relative;
    flex-grow: 1;
    color: $white;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 29.48%;

    @include desktop {
      margin-top: 11rem;
    }
    @include mobile {
      flex-direction: column;
      gap: 3rem;
    }
  }

  &-product {
    margin: auto;

    @media (min-width: 1800px) {
      bottom: -7.8rem;
    }

    @include tablet-desktop {
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      width: 29.48%;
      aspect-ratio: 10 / 19.07;
    }

    @include tablet {
      top: 0;
      bottom: 0;
    }

    @include mobile {
      order: -1;
      width: 100%;
      aspect-ratio: 10 / 10;
    }

    &:deep(.card-image__wrapper) {
      border-radius: 7.5rem;
    }

    &:deep(.card-image) {
      width: 100%;
      height: 100%;
      aspect-ratio: initial;
      border-radius: 7.5rem;
    }

    &:deep(.card-image__product) {
      width: 57%;

      @include desktop {
        top: 4rem;
      }
    }
  }

  &-left,
  &-right {
    width: calc((100% - 29.48%) / 2);
    @include mobile {
      width: 100%;
    }
  }

  &-left {
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      padding-right: 3.7rem;
      row-gap: 18.5rem;
    }

    @media (max-width: 1439px) {
      padding-right: 1rem;
      row-gap: 7rem;
    }
  }

  &-right {
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      padding-left: 3.7rem;
      row-gap: 21.5rem;
    }

    @media (max-width: 1439px) {
      padding-left: 1rem;
      row-gap: 11rem;
    }
  }

  &-picture-product {
    position: relative;
    z-index: 5;
    box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);

    @media (min-width: 1440px) {
      width: 50.7rem;
      border-radius: 8.3rem;
      margin-top: -13rem;
    }

    @media (max-width: 1439px) {
      width: 37.7rem;
      border-radius: 6.3rem;
      margin-top: -7rem;
    }
  }

  &-main-info {
    &-left {
      display: flex;
      flex-direction: column;
      text-align: right;
    }

    &-right {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      row-gap: 3.4rem;
    }

    &__title {
      position: relative;
      z-index: 2;
      display: inline-block;
      padding-top: 1rem;
      font-family: 'GillSans Bold';
      line-height: 130%;
      letter-spacing: 0.21rem;
      min-width: max-content;
      @include adaptive-font(4, 2.7);
      @media (min-width: 1800px) {
        font-size: 6rem;
      }

      &::before {
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 0;
        width: 61.8rem;
        height: 8.1rem;
        background-color: $blue;
        content: '';
        transform: translateY(-50%);

        @include tablet {
          width: 120%;
          height: 6.1rem;
        }

        @include mobile {
          width: calc(100% + 2rem);
          left: -1rem;
        }
      }
    }

    &__description {
      display: inline-block;
      margin-top: 2rem;
      font-family: GillSans;
      @include adaptive-font(3, 1.9);
      line-height: 130%;

      @media (min-width: 1440px) {
        margin-bottom: 4rem;
      }

      @media (max-width: 1439px) {
        margin-bottom: 2rem;
      }
    }

    &__content {
      font-family: 'GillSans Bold';
      @include adaptive-font(4, 2.5);
      line-height: 130%;

      span {
        font-family: GillSans;
      }
    }
  }

  &-list {
    &-left {
      display: flex;
      flex-direction: column;
      align-items: end;
      row-gap: 3.5rem;
      text-align: right;

      & p {
        padding-right: 2rem;
        border-right: 1rem solid $blue;
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      row-gap: 3.5rem;

      & p {
        padding-left: 2rem;
        border-left: 1rem solid $blue;
      }
    }

    &__item {
      position: relative;
      display: flex;
      align-items: center;
      column-gap: 2rem;
      font-family: GillSans;
      @include adaptive-font(3, 1.9);
      line-height: 130%;
    }
  }

  &-addition {
    position: absolute;
    color: $gray;
    font-family: GillSans;
    @include adaptive-font(2, 1.3);
    line-height: 130%;
    text-transform: none;

    @include desktop {
      top: calc(100% + 18.7rem);
    }
    @include tablet {
      top: calc(100% + 14.7rem);
    }
    @include mobile {
      top: calc(100% + 10.7rem);
      left: 0;
    }
  }
}
</style>
