<template>
  <section class="stages-section">
    <div v-if="currentCard" class="stages-content">
      <button-default class="stages-card__info-button" text="ЧТО ЭТО?" @click="togglePopup" />
      <div class="stages-card">
        <div class="stages-card-preview" :class="`${currentCard.previewClass}`">
          <div class="stages-card-preview__text" v-html="currentCard.cardTitle" />
        </div>
        <div class="stages-card-description">
          <span class="stages-card-description__title" v-html="currentCard.title" />

          <ul class="stages-card-description-list" :class="`${currentCard.listClass}`">
            <li
              v-for="(item, index) in currentCard.items"
              :key="`${currentCard.title}-${index}`"
              class="stages-card-description__item"
              :class="`${currentCard.itemClass}`"
            >
              <div v-if="item.iconName" :class="`stages-card-icon stages-card-icon_${item.iconName}`" />
              <div v-if="item.numText" class="stages-card-description-icon" v-html="item.numText" />
              <div v-if="item.mainText" v-html="item.mainText" class="stages-card-description__text-main" :class="`${item.class}`" />
            </li>
          </ul>

          <div v-if="currentCard.description" class="stages-card-description-addition" v-html="currentCard.description" />
        </div>
      </div>
    </div>

    <popup-lentigo v-if="stepNum === 4" :is-open="popupLentigoIsOpen" @close="togglePopup" />
    <popup-melasma v-if="stepNum === 5" :is-open="popupMelasmaIsOpen" @close="togglePopup" />
    <popup-hyperpigmentation
      v-if="stepNum === 6"
      :is-open="popupPigmentationIsOpen"
      @close="togglePopup"
    />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import ButtonDefault from '@/components/UI/ButtonDefault.vue'
import PopupHyperpigmentation from '@/components/popups/PopupHyperpigmentation.vue'
import PopupLentigo from '@/components/popups/PopupLentigo.vue'
import PopupMelasma from '@/components/popups/PopupMelasma.vue'

const props = defineProps({
  stepNum: {
    type: Number,
    default: 4
  }
})

const popupPigmentationIsOpen = ref(false)
const popupLentigoIsOpen = ref(false)
const popupMelasmaIsOpen = ref(false)

function togglePopup() {
  switch (+props.stepNum) {
    case 4: popupLentigoIsOpen.value = !popupLentigoIsOpen.value
      break
    case 5: popupMelasmaIsOpen.value = !popupMelasmaIsOpen.value
      break
    case 6: popupPigmentationIsOpen.value = !popupPigmentationIsOpen.value
  }
}

const cards = ref([
  {
    step: 4,
    cardTitle: '<p>АКТИНИЧЕСКОЕ<br />ЛЕНТИГО</p>',
    title: 'АКТИНИЧЕСКОЕ ЛЕНТИГО',
    listClass: '',
    itemClass: '',
    previewClass: 'stages-card-preview-1',
    items: [
      {
        iconName: 'arrows',
        class: '',
        mainText: 'ЛОКАЛЬНАЯ АКТИВНОСТЬ <br />МЕЛАНОЦИТОВ И СКОПЛЕНИЕ<br />ПИГМЕНТА',
      },
      {
        iconName: 'hand-waving',
        class: '',
        mainText: 'ОТКРЫТЫЕ УЧАСТКИ КОЖИ',
      },
      {
        iconName: 'age',
        class: '',
        mainText: 'ЛЮДИ СТАРШЕ 40 ЛЕТ',
      }
    ]
  },
  {
    step: 5,
    cardTitle: '<p>МЕЛАЗМА/ХЛОАЗМА</p>',
    title: 'МЕЛАЗМА/ХЛОАЗМА',
    previewClass: 'stages-card-preview-2',
    listClass: 'stages-card-description-list--big-margin',
    itemClass: 'stages-card-description__item_with-num',
    description: '<span>ПРИЧИНЫ</span><p>УФ, генетика, беременность, гормональный дисбаланс, препараты</p>',
    items: [
      {
        iconName: '',
        class: '',
        numText: '<span>30</span><span class="small">%</span>',
        mainText: 'ЖЕНЩИН СКЛОННЫ<br />К ПОЯВЛЕНИЮ МЕЛАЗМЫ',
      },
      {
        iconName: '',
        class: '',
        numText: '<span class="small">X</span><span>9</span>',
        mainText: 'риск у женщин<br />с фототипом III и выше',
      }
    ]
  },
  {
    step: 6,
    cardTitle: '<p>ПОСТВОСПАЛИТЕЛЬНАЯ<br />ГИПЕРПИГМЕНТАЦИЯ</p>',
    title: 'ПОСТВОСПАЛИТЕЛЬНАЯ<br />ГИПЕРПИГМЕНТАЦИЯ',
    previewClass: 'stages-card-preview-3',
    items: [
      {
        iconName: 'bandage',
        class: 'stages-card-description__text-main-small',
        mainText: '<p>НА МЕСТЕ <span>ТРАВМЫ КОЖИ</span></p><p class="description">акне, инфекции, укусы насекомых, ожоги, процедуры, воспаление</p>',
      },
      {
        iconName: 'hourglass',
        class: 'stages-card-description__text-main-small',
        mainText: 'СТОЙКАЯ ПИГМЕНТАЦИЯ<br />СОХРАНЯЕТСЯ <br /><span>ДО НЕСКОЛЬКИХ ЛЕТ</span>',
      },
      {
        iconName: 'human',
        class: 'stages-card-description__text-main-small',
        mainText: 'ПОЯВЛЯЕТСЯ<br /><span>В ЛЮБОМ ВОЗРАСТЕ</span>',
      }
    ]
  }
])

const currentCard = computed(() => cards.value.find((card) => +card.step === +props.stepNum) || null)
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;

@keyframes translate {
  from {
    scale: 0.2;
    translate: -39vw 32rem;
  }
  to {
    scale: 1;
    translate: 0;
  }
}

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
    animation: translate 0.5s 1;

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
      max-width: 48.3rem;
      max-height: calc(100% + 4rem);
      min-height: calc(100% + 4rem);
      aspect-ratio: 10 / 15.45;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      border-radius: 5rem;
      background-size: cover;
      box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
      transform: translateY(-50%);
      transition: 0.3s ease;

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

    &-icon {
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      @media (min-width: 1440px) {
        width: 10rem;
        min-width: 10rem;
        height: 10rem;
      }

      @media (max-width: 1439px) {
        width: 8rem;
        min-width: 8rem;
        height: 8rem;
      }

      &_arrows {
        background-image: url('@/assets/icons/pigment-stages/arrows.svg');
      }
      &_hand-waving {
        background-image: url('@/assets/icons/pigment-stages/hand-waving.svg');
      }
      &_age {
        background-image: url('@/assets/icons/pigment-stages/age.svg');
      }
      &_bandage {
        background-image: url('@/assets/icons/pigment-stages/bandage.svg');
      }
      &_hourglass {
        background-image: url('@/assets/icons/pigment-stages/hourglass.svg');
      }
      &_human {
        background-image: url('@/assets/icons/pigment-stages/human.svg');
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

          :deep(span) {
            font-family: 'GillSans Bold';
          }

          :deep(p.description) {
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

        :deep(span.small) {
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

        :deep(span) {
          font-family: 'GillSans Bold';
          @include adaptive-font(4, 2.5);
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
