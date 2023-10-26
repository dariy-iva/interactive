<template>
  <section class="pigmentation-stage">
    <div v-if="currentCard" class="pigmentation-stage__content">
      <button-default class="pigmentation-stage__info-button" text="ЧТО ЭТО?" @click="togglePopup" />

      <div class="pigmentation-stage__card">
        <card-image
          :text="currentCard.cardTitle"
          class="pigmentation-stage__image"
          :class="`pigmentation-stage__image_type_${currentCard.type}`"
        />

        <div class="pigmentation-stage__card-content">
          <h1 class="pigmentation-stage__card-title" v-html="currentCard.title" />

          <ul class="pigmentation-stage__descriptions">
            <li
              v-for="(item, index) in currentCard.items"
              :key="`${currentCard.title}-${index}`"
              class="pigmentation-stage__descriptions-item"
              :class="{ 'pigmentation-stage__descriptions-item_with-num': currentCard.hasNum }"
            >
              <div v-if="item.iconName" :class="`pigmentation-stage__icon pigmentation-stage__icon_type_${item.iconName}`" />
              <div v-if="item.numText" class="pigmentation-stage__icon-text" v-html="item.numText" />
              <div
                v-if="item.mainText"
                v-html="item.mainText"
                class="pigmentation-stage__descriptions-text"
                :class="`${item.class}`"
              />
            </li>
          </ul>

          <div
            v-if="currentCard.description"
            class="pigmentation-stage__text"
            v-html="currentCard.description"
          />
        </div>
      </div>
    </div>

    <popup-lentigo v-if="stepNum === 4" :is-open="popupLentigoIsOpen" @close="togglePopup" />
    <popup-melasma v-if="stepNum === 5" :is-open="popupMelasmaIsOpen" @close="togglePopup" />
    <popup-hyperpigmentation v-if="stepNum === 6" :is-open="popupPigmentationIsOpen" @close="togglePopup" />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import CardImage from '@/components/UI/CardImage.vue'
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
    case 4:
      popupLentigoIsOpen.value = !popupLentigoIsOpen.value
      break
    case 5:
      popupMelasmaIsOpen.value = !popupMelasmaIsOpen.value
      break
    case 6:
      popupPigmentationIsOpen.value = !popupPigmentationIsOpen.value
  }
}

const cards = ref([
  {
    step: 4,
    cardTitle: '<p>актиническое<br />лентиго</p>',
    type: 'lentigo',
    title: 'актиническое лентиго',
    hasNum: false,
    items: [
      {
        iconName: 'arrows',
        class: '',
        mainText: 'локальная активность<br />меланоцитов и скопление<br />пигмента'
      },
      {
        iconName: 'hand-waving',
        class: '',
        mainText: 'ОТКРЫТЫЕ УЧАСТКИ КОЖИ'
      },
      {
        iconName: 'age',
        class: '',
        mainText: 'ЛЮДИ СТАРШЕ 40 ЛЕТ'
      }
    ]
  },
  {
    step: 5,
    cardTitle: '<p>мелазма/хлоазма</p>',
    type: 'melasma',
    title: 'мелазма/хлоазма',
    hasNum: true,
    description: '<span>причины</span><p>УФ, генетика, беременность, гормональный дисбаланс, препараты</p>',
    items: [
      {
        iconName: '',
        class: '',
        numText: '<span>30</span><span class="small">%</span>',
        mainText: 'женщин склонны<br />к появлению мелазмы'
      },
      {
        iconName: '',
        class: '',
        numText: '<span class="small">X</span><span>9</span>',
        mainText: 'риск у женщин<br />с фототипом III и выше'
      }
    ]
  },
  {
    step: 6,
    cardTitle: '<p>поствоспалительная<br />гиперпигментация</p>',
    type: 'postacne',
    title: 'поствоспалительная<br />гиперпигментация',
    hasNum: false,
    items: [
      {
        iconName: 'bandage',
        class: 'pigmentation-stage__descriptions-text_small',
        mainText:
          '<p>на месте <span>травмы кожи</span></p><p class="description">акне, инфекции, укусы насекомых, ожоги, процедуры, воспаление</p>'
      },
      {
        iconName: 'hourglass',
        class: 'pigmentation-stage__descriptions-text_small',
        mainText: 'стойкая пигментация<br />сохраняется<br /><span>до нескольких лет</span>'
      },
      {
        iconName: 'human',
        class: 'pigmentation-stage__descriptions-text_small',
        mainText: 'появляется<br /><span>в любом возрасте</span>'
      }
    ]
  }
])

const currentCard = computed(() => cards.value.find((card) => +card.step === +props.stepNum) || null)
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

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

.pigmentation-stage {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__content {
    position: relative;
    display: flex;
    justify-content: flex-end;

    @include mobile-tablet {
      flex-direction: column;
    }
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

  &__card {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 0 8rem 8rem 0;
    background-color: $white;
    animation: translate 0.5s 1;

    @media (min-width: 1730px) {
      min-height: 69rem;
      padding: 8rem 6rem 8rem 0;
    }

    @media (max-width: 1729px) {
      padding: 5rem 4rem 5rem 0;
    }

    @include mobile {
      padding: 2rem;
      border-radius: 2rem;
    }

    @include desktop {
      width: 82.27%;
      max-width: calc(100% - 26rem);
    }

    @include mobile-tablet {
      width: 100%;
      max-width: 100%;
    }
  }

  &__card-content {
      display: flex;
      flex-direction: column;
      min-height: 100%;

      @include desktop {
        width: 59.8%;
        margin-left: auto;
        gap: 5rem;
      }

      @include tablet {
        width: 43.8%;
        margin-left: auto;
        gap: 3rem;
      }

    @include mobile {
      gap: 2rem;
    }
  }

  &__card-title {
    color: $blue;
    font-family: $fontDefaultBold;
    line-height: 100%;
    text-transform: uppercase;

    @media (min-width: 1441px) {
      font-size: 4rem;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
      font-size: 2.6rem;
    }

    @include mobile-tablet {
      font-size: 2rem;
    }

    @media (max-width: 360px) {
      font-size: 1.8rem;
    }
  }

  &__descriptions {
    flex-grow: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1440px) {
      gap: 3rem;
    }

    @media (max-width: 1439px) {
      gap: 2rem;
    }
  }

  &__descriptions-item {
    display: flex;
    align-items: center;
    column-gap: 2.6rem;

    &_with-num {
      @media (max-width: 1550px) {
        align-items: flex-start;
        gap: 1.5rem;
      }
    }
  }

  &__icon-text {
    display: flex;
    align-items: center;
    padding: 0.5rem 3rem;
    border-radius: 200rem;
    background-color: $blue;
    color: $white;
    column-gap: 0.6rem;
    font-family: $fontDefault;
    line-height: 100%;
    @include adaptive-font(7, 2.5);

    &:deep(span.small) {
      font-family: $fontDefaultBold;
      line-height: 130%;
      @include adaptive-font(4, 2);
    }
  }

  &__icon {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 1440px) {
      width: 10rem;
      min-width: 10rem;
      height: 10rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 7rem;
      min-width: 7rem;
      height: 7rem;
    }

    @include mobile {
      width: 4rem;
      min-width: 4rem;
      height: 4rem;
    }

    &_type_arrows {
      background-image: url('@/assets/icons/pigment-stages/arrows.svg');
    }
    &_type_hand-waving {
      background-image: url('@/assets/icons/pigment-stages/hand-waving.svg');
    }
    &_type_age {
      background-image: url('@/assets/icons/pigment-stages/age.svg');
    }
    &_type_bandage {
      background-image: url('@/assets/icons/pigment-stages/bandage.svg');
    }
    &_type_hourglass {
      background-image: url('@/assets/icons/pigment-stages/hourglass.svg');
    }
    &_type_human {
      background-image: url('@/assets/icons/pigment-stages/human.svg');
    }
  }

  &__descriptions-text {
      font-family: $fontDefault;
      line-height: 120%;
      text-transform: uppercase;

      @media (min-width: 1720px) {
        font-size: 3.6rem;
      }

      @media (min-width: 1024px) and (max-width: 1719px) {
        font-size: 2.2rem;
      }

      @include mobile-tablet {
        font-size: 1.6rem;
      }

      &_small {
        @include adaptive-font(3, 1.9);
        line-height: 120%;

        @media (max-width: 1440px) {
          font-size: 1.5rem;
        }
      }

      &:deep(span) {
        font-family: $fontDefaultBold;
      }

      &:deep(p.description) {
        line-height: 100%;
        text-transform: lowercase;
      }
  }

  &__text {
    display: flex;
    flex-direction: column;
    font-family: $fontDefault;
    line-height: 130%;
    @include adaptive-font(2.5, 1.5);

    &:deep(span) {
      font-family: $fontDefaultBold;
      text-transform: uppercase;
      @include adaptive-font(3, 2);
    }
  }

  &__image {
    position: absolute;
    left: -2rem;
    min-height: calc(100% + 4rem);
    max-height: calc(100% + 4rem);
    aspect-ratio: 10 / 15.15;

    @include tablet {
      max-width: 50%;
    }

    @include mobile {
      display: none;
    }

    &_type_lentigo {
      background-image: url('@/assets/images/hyperpigmentation/lentigo.webp');
    }

    &_type_melasma {
      background-image: url('@/assets/images/hyperpigmentation/melasma.webp');
    }

    &_type_postacne {
      background-image: url('@/assets/images/hyperpigmentation/postacne.webp');
    }

    &:deep(.card-image__text) {
      padding: 1rem 0;
      font-size: 2.3rem;
    }
  }
}
</style>
