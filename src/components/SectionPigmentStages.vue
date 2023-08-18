<template>
  <section class="stages-section">
    <div v-if="stepNum === 4" class="stages-content">
      <button-default class="stages-card__info-button" text="ЧТО ЭТО?" @click="popupLentigoIsOpen = true" />
      <div class="stages-card">
        <div class="stages-card-preview stages-card-preview-1">
          <div class="stages-card-preview__text">
            <p>
              АКТИНИЧЕСКОЕ
              <br />
              ЛЕНТИГО
            </p>
          </div>
        </div>
        <div class="stages-card-description">
          <span class="stages-card-description__title">АКТИНИЧЕСКОЕ ЛЕНТИГО</span>
          <ul class="stages-card-description-list">
            <li class="stages-card-description__item">
              <img src="@/assets/icons/pigment-stages/arrows.svg" alt="arrows" />
              <span class="stages-card-description__text-main"
                >ЛОКАЛЬНАЯ АКТИВНОСТЬ <br />МЕЛАНОЦИТОВ И СКОПЛЕНИЕ<br />
                ПИГМЕНТА</span
              >
            </li>
            <li class="stages-card-description__item">
              <img src="@/assets/icons/pigment-stages/hand-waving.svg" alt="hand-waving" />
              <span class="stages-card-description__text-main">ОТКРЫТЫЕ УЧАСТКИ КОЖИ</span>
            </li>
            <li class="stages-card-description__item">
              <img src="@/assets/icons/pigment-stages/age.svg" alt="40+" />
              <span class="stages-card-description__text-main">ЛЮДИ СТАРШЕ 40 ЛЕТ</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="stepNum === 5" class="stages-content">
      <button-default class="stages-card__info-button" text="ЧТО ЭТО?" @click="popupMelasmaIsOpen = true" />
      <div class="stages-card">
        <div class="stages-card-preview stages-card-preview-2">
          <div class="stages-card-preview__text">
            <p>МЕЛАЗМА/ХЛОАЗМА</p>
          </div>
        </div>
        <div class="stages-card-description">
          <span class="stages-card-description__title">МЕЛАЗМА/ХЛОАЗМА</span>
          <ul class="stages-card-description-list stages-card-description-list--big-margin">
            <li class="stages-card-description__item stages-card-description__item_with-num">
              <div class="stages-card-description-icon">
                <span>30</span>
                <span class="small">%</span>
              </div>
              <span class="stages-card-description__text-main"
                >ЖЕНЩИН СКЛОННЫ<br />
                К ПОЯВЛЕНИЮ МЕЛАЗМЫ</span
              >
            </li>
            <li class="stages-card-description__item stages-card-description__item_with-num">
              <div class="stages-card-description-icon">
                <span class="small">X</span>
                <span>9</span>
              </div>
              <span class="stages-card-description__text-main"
                >риск у женщин<br />
                с фототипом III и выше</span
              >
            </li>
          </ul>
          <div class="stages-card-description-addition">
            <span>ПРИЧИНЫ</span>
            <p>
              УФ, генетика, беременность, гормональный дисбаланс,<br />
              препараты
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="stepNum === 6" class="stages-content">
      <button-default class="stages-card__info-button" text="ЧТО ЭТО?" @click="popupPigmentationIsOpen = true" />
      <div class="stages-card">
        <div class="stages-card-preview stages-card-preview-3">
          <div class="stages-card-preview__text">
            <p>
              ПОСТВОСПАЛИТЕЛЬНАЯ<br />
              ГИПЕРПИГМЕНТАЦИЯ
            </p>
          </div>
        </div>
        <div class="stages-card-description">
          <span class="stages-card-description__title"
            >ПОСТВОСПАЛИТЕЛЬНАЯ<br />
            ГИПЕРПИГМЕНТАЦИЯ</span
          >
          <ul class="stages-card-description-list">
            <li class="stages-card-description__item">
              <img src="@/assets/icons/pigment-stages/bandage.svg" alt="bandage" />
              <div class="stages-card-description__text-main stages-card-description__text-main-small">
                <p>НА МЕСТЕ <span>ТРАВМЫ КОЖИ</span></p>
                <p class="description">акне, инфекции, укусы насекомых, ожоги, процедуры, воспаление</p>
              </div>
            </li>
            <li class="stages-card-description__item">
              <img src="@/assets/icons/pigment-stages/hourglass.svg" alt="hourglass" />
              <span class="stages-card-description__text-main stages-card-description__text-main-small"
                >СТОЙКАЯ ПИГМЕНТАЦИЯ<br />
                СОХРАНЯЕТСЯ <br />
                <span>ДО НЕСКОЛЬКИХ ЛЕТ</span></span
              >
            </li>
            <li class="stages-card-description__item">
              <img src="@/assets/icons/pigment-stages/human.svg" alt="human" />
              <span class="stages-card-description__text-main stages-card-description__text-main-small"
                >ПОЯВЛЯЕТСЯ<br />
                <span>В ЛЮБОМ ВОЗРАСТЕ</span></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <popup-lentigo v-if="stepNum === 4" :is-open="popupLentigoIsOpen" @close="popupLentigoIsOpen = false" />
    <popup-melasma v-if="stepNum === 5" :is-open="popupMelasmaIsOpen" @close="popupMelasmaIsOpen = false" />
    <popup-hyperpigmentation
      v-if="stepNum === 6"
      :is-open="popupPigmentationIsOpen"
      @close="popupPigmentationIsOpen = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import PopupHyperpigmentation from '@/components/popups/PopupHyperpigmentation.vue'
import PopupLentigo from '@/components/popups/PopupLentigo.vue'
import PopupMelasma from '@/components/popups/PopupMelasma.vue'

defineProps({
  stepNum: {
    type: Number,
    default: 4
  }
})

const popupPigmentationIsOpen = ref(false)
const popupLentigoIsOpen = ref(false)
const popupMelasmaIsOpen = ref(false)
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;

.stages {
  &-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 6.5rem;

    @media (max-width: 1730px) {
      justify-content: center;
    }
  }

  &-content {
    position: relative;
    display: flex;
    justify-content: flex-end;

    @include mobile-tablet {
      flex-direction: column;
    }
  }

  &-card {
    position: relative;
    display: flex;
    width: 82.27%;
    max-width: calc(100% - 26rem);
    align-items: center;
    border-radius: 0 8rem 8rem 0;
    background-color: $white;

    @media (min-width: 1730px) {
      min-height: 69rem;
      padding: 6.9rem 6rem 6.5rem 54.3rem;
    }

    @media (max-width: 1729px) {
      padding: 5rem 4rem 5rem 52.3rem;
    }

    @include tablet {
      padding-left: 52%;
    }

    @include mobile {
      padding: 2rem;
      border-radius: 2rem;
    }

    @include mobile-tablet {
      width: 100%;
      max-width: 100%;
    }

    &__info-button {
      min-width: 40rem;
      height: fit-content;
      border: 0.4rem solid $white;
      padding: 1.1rem 2.8rem;
      text-align: start;

      @include desktop {
        position: absolute;
        left: 0;
        min-height: 8rem;
        font-size: 4rem;
      }

      @include mobile-tablet {
        width: max-content;
        min-width: auto;
        margin-bottom: 3rem;
      }

      &:hover {
        @include desktop {
          border: 0.2rem solid $white;
        }
      }
    }

    &-preview {
      position: absolute;
      top: 50%;
      left: -2rem;
      display: flex;
      width: 100%;
      max-width: 48.3rem;
      max-height: calc(100% + 4rem);
      aspect-ratio: 10 / 15.45;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      border-radius: 5rem;
      background-size: cover;
      box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
      transform: translateY(-50%);

      @media (min-width: 1440px) {
        padding-bottom: 8.5rem;
      }

      @media (max-width: 1439px) {
        padding-bottom: 6rem;
      }

      @include tablet {
        width: 50%;
      }

      @include mobile {
        display: none;
      }

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 92%;
        height: 94.5%;
        border: 0.4rem solid $white;
        border-radius: 3.5rem;
        content: '';
        transform: translate(-50%, -50%);
      }

      &-1 {
        background-image: url('@/assets/images/pigmentation-stages/background-card-1.jpg');
      }

      &-2 {
        background-image: url('@/assets/images/pigmentation-stages/background-card-2.jpg');
      }

      &-3 {
        background-image: url('@/assets/images/pigmentation-stages/background-card-3.jpg');
      }

      &__text {
        z-index: 3;
        display: flex;
        width: 100%;
        height: 9rem;
        align-items: center;
        justify-content: center;
        background-color: $blue;
        color: $white;
        font-family: GillSans;
        @include adaptive-font(3, 1.9);
        line-height: 100%;
        text-align: center;
        text-transform: uppercase;
      }
    }

    &-description {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;

      &__title {
        color: $blue;
        font-family: 'GillSans Bold';
        //@include adaptive-font(5, 3.1);
        font-size: 5rem;
        line-height: 130%;
        text-transform: uppercase;

        @media (max-width: 1720px) {
          font-size: 4rem;
        }

        @media (max-width: 1440px) {
          font-size: 2.6rem;
        }

        @include mobile-tablet {
          font-size: 3rem;
        }
      }

      &-list {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 1440px) {
          margin-top: 2.6rem;
          row-gap: 3rem;
        }

        @media (max-width: 1439px) {
          margin-top: 2rem;
          row-gap: 2rem;
        }

        &--big-margin {
          @media (min-width: 1440px) {
            margin-top: 4.6rem;
          }
        }
      }

      &__item {
        display: flex;
        align-items: center;
        column-gap: 2.6rem;

        img {
          height: 10rem;
          object-fit: cover;

          @include mobile-tablet {
            height: 5rem;
            width: 5rem;
          }
        }

        &_with-num {
          @media (max-width: 1550px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }
      }

      &__text {
        &-main {
          font-family: GillSans;
          @include adaptive-font(4, 1.9);
          line-height: 130%;
          text-transform: uppercase;

          @media (max-width: 1720px) {
            font-size: 2.6rem;
          }

          @include mobile-tablet {
            font-size: 1.6rem;
          }

          &-small {
            @include adaptive-font(3, 1.9);
            line-height: 120%;

            @media (max-width: 1440px) {
              font-size: 2.5rem;
            }
          }

          span {
            font-family: 'GillSans Bold';
          }

          p.description {
            line-height: 100%;
            text-transform: lowercase;
          }
        }
      }

      &-icon {
        display: flex;
        align-items: center;
        padding: 0.5rem 3rem;
        border-radius: 200rem;
        background-color: $blue;
        color: $white;
        column-gap: 0.6rem;
        font-family: GillSans;
        @include adaptive-font(9, 3.6);
        line-height: 100%;

        @media (max-width: 1550px) {
          font-size: 5rem;
        }

        span.small {
          font-family: 'GillSans Bold';
          @include adaptive-font(4, 2.5);
          line-height: 130%;
        }
      }

      &-addition {
        display: flex;
        flex-direction: column;
        margin-top: 5.5rem;
        font-family: GillSans;
        @include adaptive-font(3, 1.9);
        line-height: 130%;

        span {
          font-family: 'GillSans Bold';
          @include adaptive-font(4, 2.5);
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
