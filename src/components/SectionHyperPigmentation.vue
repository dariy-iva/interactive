<template>
  <section class="pigmentation-section">
    <div class="pigmentation-container">
      <div class="pigmentation-info">
        <p class="pigmentation-info__text">
          ВСЕ МЫ ВЫГЛЯДИМ ПО-РАЗНОМУ, <br />НО РАЗЛИЧАЕМСЯ ТОЛЬКО КОЛИЧЕСТВОМ <br /><span>МЕЛАНИНА</span>
        </p>
        <div class="pigmentation-info-statistics">
          <p>РАСПРОСТРАНЕННАЯ ПРОБЛЕМА <span>СРЕДИ РОССИЙСКИХ ЖЕНЩИН</span></p>
          <div class="pigmentation-info-statistics-search">
            <span>248 323</span>
            <img src="@/assets/icons/hyperpigmentation/search.svg" alt="" />
          </div>
          <p class="big">поисковых запроса в месяц</p>
        </div>
      </div>
      <div class="pigmentation-content">
        <div class="pigmentation-main">
          <div class="pigmentation-main-top">
            <span class="pigmentation-main-top__title"><span>ГИПЕР</span>ПИГМЕНТАЦИЯ</span>
            <button-default text="ЧТО ВНУТРИ?" @click="$emit('toggleStep', 7)" />
          </div>
          <div class="pigmentation-main-cards">
            <article class="pigmentation-main-card pigmentation-main-card-1" @click="$emit('toggleStep', 4)">
              <div class="pigmentation-main-card__text">
                <p>
                  АКТИНИЧЕСКОЕ
                  <br />
                  ЛЕНТИГО
                </p>
              </div>
            </article>
            <article class="pigmentation-main-card pigmentation-main-card-2" @click="$emit('toggleStep', 5)">
              <div class="pigmentation-main-card__text">
                <p>МЕЛАЗМА/ХЛОАЗМА</p>
              </div>
            </article>
            <article class="pigmentation-main-card pigmentation-main-card-3" @click="$emit('toggleStep', 6)">
              <div class="pigmentation-main-card__text">
                <p>
                  ПОСТВОСПАЛИТЕЛЬНАЯ<br />
                  ГИПЕРПИГМЕНТАЦИЯ
                </p>
              </div>
            </article>
          </div>
        </div>
        <div class="pigmentation-addition">
          <div class="pigmentation-addition-circle"><span class="small">№</span><span>3</span></div>
          <p class="pigmentation-addition__text">
            ПРИЧИНА <br />ПСИХОЛОГИЧЕСКОГО<br />
            ДИСКОМФОРТА <br />ЖЕНЩИН <br />ВО ВСЁМ МИРЕ
          </p>
        </div>
      </div>
    </div>
    <button-default text="Далее" class="button-next" @click="$emit('toggleStep')" />
  </section>
</template>

<script setup>
import ButtonDefault from '@/components/UI/ButtonDefault.vue'

defineEmits(['toggleStep'])
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;

.button {
  &-next {
    position: absolute;
    @media (min-width: 1440px) {
      right: 10rem;
      bottom: 10rem;
    }

    @media (max-width: 1439px) {
      right: 10rem;
      bottom: 10rem;
    }

    @include tablet {
      right: 5rem;
      bottom: 7rem;
    }

    @include mobile {
      position: initial;
      margin-top: 3rem;
    }
  }
}

.pigmentation {
  &-section {
    flex-grow: 1;
  }

  &-container {
    display: flex;
    flex-direction: column;
    color: $white;
    font-family: GillSans;
    row-gap: 11rem;
    text-transform: uppercase;

    @media (min-width: 1440px) {
      row-gap: 9.3rem;
    }

    @media (max-width: 1439px) {
      row-gap: 5rem;
    }
  }

  &-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    &__text {
      @include adaptive-font(3, 1.87);
      line-height: 110%;

      span {
        font-family: 'GillSans ExtraBold';
        @include adaptive-font(6.8, 4.38);
        line-height: 100%;
      }
    }

    &-statistics {
      display: flex;
      flex-direction: column;
      row-gap: 1.8rem;

      @media (min-width: 1440px) {
        padding-right: 6rem;
      }

      @media (max-width: 1439px) {
        padding-left: 2rem;
      }

      @include mobile {
        padding: 0;
      }

      p {
        @include adaptive-font(2, 1.25);
        line-height: 130%;

        span {
          font-family: 'GillSans Bold';
        }

        &.big {
          @include adaptive-font(3, 1.9);
        }
      }

      &-search {
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 81rem;
        background-color: $blue;

        @media (min-width: 1520px) {
          padding: 4.1rem 17.1rem 2rem 6.4rem;
          border-radius: 8rem;
        }

        @media (max-width: 1519px) {
          padding: 1.5rem 10.1rem 1.5rem 3.4rem;
          border-radius: 6rem;
        }

        span {
          display: block;
          margin-bottom: -2.3rem;
          @include adaptive-font(17.5, 4);
          line-height: 82%;

          @include mobile-tablet {
            margin-bottom: -1rem;
          }
        }

        img {
          position: absolute;
          right: -0.77rem;
          object-fit: cover;

          @media (min-width: 1520px) {
            top: 2.4rem;
            width: 16.77rem;
          }

          @media (max-width: 1519px) {
            top: 3rem;
            width: 10.77rem;
          }

          @include mobile-tablet {
            display: none;
          }
        }
      }
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    padding-right: 2.6rem;
    column-gap: 6rem;

    @include mobile {
      flex-direction: column-reverse;
      padding: 0;
      gap: 2rem;
    }
  }

  &-main {
    width: 100%;
    max-width: 126.5rem;

    &-top {
      display: flex;
      align-items: center;

      @media (min-width: 1440px) {
        column-gap: 7.5rem;
      }

      @media (max-width: 1439px) {
        column-gap: 4rem;
      }

      @include mobile {
        flex-direction: column;
        gap: 2rem;
      }

      &__title {
        @include adaptive-font(7, 2.4);
        line-height: 100%;

        span {
          font-family: 'GillSans ExtraBold';
        }
      }

      &__link {
        display: inline-block;
        border-radius: 3rem;
        background-color: $blue;
        color: $white;
        font-family: GillSans;
        @include adaptive-font(5.2, 2.3);
        line-height: 100%;
        text-transform: uppercase;
        transition: 0.2s;

        @media (min-width: 1440px) {
          padding: 1.9rem 3.2rem;
        }

        @media (max-width: 1439px) {
          padding: 1.9rem 2.2rem;
        }

        @include desktop {
          &:hover {
            background: rgba(0, 159, 227, 50%);
          }
        }
      }
    }

    &-cards {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 5.3rem;
      column-gap: 2rem;

      @include mobile {
        flex-direction: column;
        gap: 1.2rem;
      }
    }

    &-card {
      position: relative;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      border-radius: 5rem;
      background-size: cover;
      box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
      cursor: pointer;

      @media (min-width: 1440px) {
        max-width: 35.5rem;
        height: 45rem;
        padding-bottom: 5rem;
      }

      @media (max-width: 1439px) {
        max-width: 25.5rem;
        height: 33rem;
        padding-bottom: 3rem;
      }

      @include mobile {
        max-width: 100%;
      }

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 89%;
        height: 91.3%;
        border: 0.4rem solid $white;
        border-radius: 3.5rem;
        content: '';
        transform: translate(-50%, -50%);
      }

      &-1 {
        background-image: url('@/assets/images/hyperpigmentation/background-card-1.jpg');
      }

      &-2 {
        background-image: url('@/assets/images/hyperpigmentation/background-card-2.jpg');
      }

      &-3 {
        background-image: url('@/assets/images/hyperpigmentation/background-card-3.jpg');
      }

      &__text {
        z-index: 3;
        display: flex;
        width: 100%;
        height: 5.7rem;
        align-items: center;
        justify-content: center;
        background-color: $blue;
        color: $white;
        font-family: GillSans;
        @include adaptive-font(2, 1.25);
        line-height: 100%;
        text-align: center;
        text-transform: uppercase;

        span {
          font-family: 'GillSans Bold';
        }
      }
    }
  }

  &-addition {
    display: flex;
    flex-direction: column;
    padding-top: 2.1rem;
    row-gap: 1.6rem;

    @include mobile {
      flex-direction: row;
      align-items: center;
      padding: 0;
      gap: 2.5rem;
    }

    &-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: $blue;

      @media (min-width: 1440px) {
        width: 23.6rem;
        height: 23.6rem;
      }

      @media (max-width: 1439px) {
        width: 19.6rem;
        height: 19.6rem;
      }

      @include mobile-tablet {
        width: 12rem;
        min-width: 12rem;
        height: 12rem;
        gap: 2rem;
      }

      span {
        @include adaptive-font(20, 6.5);
        line-height: 100%;
        text-transform: lowercase;

        &.small {
          margin-right: -2.4rem;
          font-family: 'GillSans Bold';
          @include adaptive-font(4, 2.5);
        }

        &:not(.small) {
          margin-bottom: -4.5rem;
          @include mobile-tablet {
            margin-bottom: -1.7rem;
          }
        }
      }
    }

    &__text {
      @include adaptive-font(3, 1.5);
      line-height: 130%;
    }
  }
}
</style>
