<template>
  <section class="component-section">
    <div v-if="currentCard" class="component-card">
      <div class="component-card-preview" :class="`${currentCard.previewClass}`" />
      <div class="component-card-description">
        <span class="component-card-description__title">{{ currentCard.title }}</span>

        <ul class="component-card-description-list">
          <li
            v-for="(item, index) in currentCard.items"
            :key="`${currentCard.title}-${index}`"
            class="component-card-description__item"
          >
            <div :class="`component-card-icon component-card-icon_${item.iconName}`" />
            <div class="component-card-description-text">
              <span v-if="item.mainText" v-html="item.mainText" class="component-card-description__text-main" />
              <span v-if="item.description" v-html="item.description" class="component-card-description__addition" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <block-pagination class="pagination-block" @toggle-step="(value) => $emit('toggleStep', value)">
      <div class="pagination-block__list">
        <span class="component-navigation__line"></span>
        <span
          class="component-navigation__button"
          :class="{
            'component-navigation__button--active': stepNum === 13,
            'component-navigation__button--last': stepNum > 13
          }"
          @click="$emit('toggleStep', 13)"
        >
          I
        </span>
        <span class="component-navigation__line"></span>
        <span
          class="component-navigation__button"
          :class="{
            'component-navigation__button--active': stepNum === 14,
            'component-navigation__button--last': stepNum > 14
          }"
          @click="$emit('toggleStep', 14)"
        >
          2
        </span>
        <span class="component-navigation__line"></span>
        <span
          class="component-navigation__button"
          :class="{
            'component-navigation__button--active': stepNum === 15,
            'component-navigation__button--last': stepNum > 15
          }"
          @click="$emit('toggleStep', 15)"
        >
          3
        </span>
        <span class="component-navigation__line"></span>
        <span
          class="component-navigation__button"
          :class="{
            'component-navigation__button--active': stepNum === 16,
            'component-navigation__button--last': stepNum > 16
          }"
          @click="$emit('toggleStep', 16)"
        >
          4
        </span>
        <span class="component-navigation__line"></span>
      </div>
    </block-pagination>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import BlockPagination from '@/components/BlockPagination.vue'

const props = defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

defineEmits(['toggleStep'])

const cards = ref([
  {
    step: 13,
    title: 'НИАЦИНАМИД 10%',
    previewClass: 'component-card-preview-1',
    items: [
      {
        iconName: 'arrows',
        mainText: 'БЛОКИРУЕТ ПЕРЕНОС МЕЛАНИНА',
        description: 'КОРРЕКЦИЯ ПИГМЕНТАЦИИ'
      },
      {
        iconName: 'gauge',
        mainText: 'ИНГИБИРУЕТ МЕДИАТОРЫ <br />ВОСПАЛЕНИЯ',
        description: 'СНИЖЕНИЕ ВОСПАЛЕНИЯ'
      },
      {
        iconName: 'shield',
        mainText: 'УКРЕПЛЯЕТ КОЖНЫЙ БАРЬЕР',
        description: 'ЗАЩИТА ОТ РАЗДРАЖЕНИЯ'
      }
    ]
  },
  {
    step: 14,
    title: 'ФЕ-РЕЗОРЦИНОЛ 0,5%',
    previewClass: 'component-card-preview-2',
    items: [
      {
        iconName: 'pine',
        mainText:
          'ПРОИЗВОДНОЕ <span>ПИНОСИЛЬВИНА <br />СОДЕРЖИТСЯ</span> В ДРЕВЕСИНЕ\n' +
          '                <span>СОСНЫ <br />ОБЫКНОВЕННОЙ</span>',
        description: ''
      },
      {
        iconName: 'gauge',
        mainText: 'ИНГИБИРУЕТ СЕКРЕЦИЮ МЕЛАНИНА',
        description: 'ПРОФИЛАКТИКА ПИГМЕНТАЦИИ'
      },
      {
        iconName: 'roller',
        mainText: 'ДЕПИГМЕНТИРУЮЩИЙ ЭФФЕКТ',
        description: 'КОРРЕКЦИЯ ПИГМЕНТАЦИИ'
      }
    ]
  },
  {
    step: 15,
    title: '5% ХЕПЕС',
    previewClass: 'component-card-preview-3',
    items: [
      {
        iconName: 'circle',
        mainText: 'УДАЛЯЕТ КЕРАТИНОЦИТЫ, <br />НАПОЛНЕННЫЕ МЕЛАНИНОМ',
        description: 'КОРРЕКЦИЯ ПИГМЕНТАЦИИ'
      },
      {
        iconName: 'feather',
        mainText: 'МЯГКОЕ ОТШЕЛУШИВАНИЕ',
        description: 'ВЫРАВНИВАНИЕ ТОНА КОЖИ'
      },
      {
        iconName: 'pipette',
        mainText: 'УВЛАЖНЯЮЩИЙ <span>ЭФФЕКТ</span>',
        description: ''
      }
    ]
  },
  {
    step: 16,
    title: 'ГИАЛУРОНОВАЯ КИСЛОТА',
    previewClass: 'component-card-preview-4',
    items: [
      {
        iconName: 'shield',
        mainText: 'ПОДДЕРЖИВАЕТ <span>КОЖНЫЙ БАРЬЕР</span>',
        description: ''
      },
      {
        iconName: 'leaf',
        mainText: '<span>ПОВЫШАЕТ</span> УПРУГОСТЬ<br/>\n' + '                И ЭЛАСТИЧНОСТЬ КОЖИ',
        description: ''
      }
    ]
  }
])

const currentCard = computed(() => cards.value.find((card) => +card.step === +props.stepNum) || null)

const cardTitle = computed(() => {
  switch (+props.stepNum) {
    case 13:
      return 'НИАЦИНАМИД 10%'
    case 14:
      return 'ФЕ-РЕЗОРЦИНОЛ 0,5%'
    case 15:
      return '5% ХЕПЕС'
    case 16:
      return 'ГИАЛУРОНОВАЯ КИСЛОТА'
  }
})
</script>

<style scoped lang="scss">
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.button {
  &-navigation {
    border: none;
    border-radius: 3rem;
    background-color: $blue;
    color: $white;
    cursor: pointer;
    font-family: GillSans;
    @include adaptive-font(5.2, 3.25);
    line-height: 100%;
    text-transform: uppercase;
    transition: all 0.2s ease;

    @media (min-width: 1440px) {
      padding: 1.9rem 3.2rem;
    }

    @media (max-width: 1439px) {
      padding: 1.5rem 2.5rem;
    }

    &:hover {
      @include desktop {
        background: rgba(0, 159, 227, 50%);
      }
    }
  }

  &-next {
    @media (min-width: 1440px) {
      right: 10rem;
    }

    @media (max-width: 1439px) {
      right: 6rem;
    }
  }

  &-back {
    @media (min-width: 1440px) {
      left: 10rem;
    }

    @media (max-width: 1439px) {
      left: 6rem;
    }
  }
}

.pagination-block {
  max-width: 114.6rem;
  margin-left: auto;

  @include desktop {
    margin-top: initial;
    gap: 3rem;
  }

  @include mobile-tablet {
    width: 100%;
  }

  &__list {
    display: flex;
    align-items: center;

    @include desktop {
      gap: 3rem;
    }
    @include tablet {
      gap: 1.5rem;
    }

    @include mobile {
      display: none;
    }
  }
}

.component {
  &-section {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (min-width: 1801px) {
      gap: 9.3rem;
    }

    @media (max-width: 1800px) {
      gap: 20rem;
    }
  }

  &-navigation {
    position: absolute;
    right: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 3rem;

    @media (min-width: 1440px) {
      bottom: 10rem;
    }

    @media (max-width: 1439px) {
      bottom: 3rem;
    }

    &__line {
      display: inline-block;
      width: 0.64rem;
      height: 0.4rem;
      background-color: $white;

      @include tablet {
        display: none;
      }
    }

    &__button {
      display: flex;
      width: 9rem;
      height: 9rem;
      align-items: center;
      justify-content: center;
      border-radius: 3rem;
      color: $white;
      font-family: GillSans;
      @include adaptive-font(5.2, 3.3);
      line-height: 100%;
      text-transform: uppercase;
      transition: all 0.3s ease;
      cursor: pointer;

      &--last {
        background-color: $blue;
        color: $white;
      }

      &--active {
        background-color: $white;
        color: $blue;
      }

      &:hover {
        @include desktop {
          background: rgba(0, 159, 227, 50%);
        }
      }
    }
  }

  &-card {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    border-radius: 0 5rem 5rem 0;
    background-color: $white;
    box-shadow: -0.5rem 2rem 5rem 0 rgba(0, 0, 0, 15%);

    @media (min-width: 1440px) {
      min-height: 60.8rem;
      padding: 3rem 3rem 3rem 57.7rem;
      margin-top: calc((96.6rem - 60.8rem) / 2);
    }

    @media (max-width: 1439px) {
      min-height: 47rem;
      padding: 4rem 3rem 4rem 43.7rem;
      margin-top: calc((75.6rem - 47rem) / 2);
    }

    @include mobile {
      padding: 4rem 3rem;
      margin-top: 0;
      border-radius: 5rem;
    }

    &-preview {
      position: absolute;
      top: 50%;
      display: flex;
      width: 100%;
      background-size: cover;
      box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
      transform: translateY(-50%);
      transition: 0.3s ease;

      &-1 {
        background-image: url('@/assets/images/active-components/niacinamide-card.jpg');
      }

      &-2 {
        background-image: url('@/assets/images/active-components/fe-resorcinol-card.jpg');
      }

      &-3 {
        background-image: url('@/assets/images/active-components/hepes-card.jpg');
      }

      &-4 {
        background-image: url('@/assets/images/active-components/hyaluronic-acid-card.jpg');
      }

      @media (min-width: 1440px) {
        left: 0;
        max-width: 50.6rem;
        height: 96.6rem;
        border-radius: 8rem;
      }

      @media (max-width: 1439px) {
        left: -1rem;
        max-width: 40.6rem;
        height: 75.6rem;
        border-radius: 6rem;
      }

      @include mobile {
        display: none;
      }

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 93%;
        height: 96%;
        border: 0.3rem solid $white;
        border-radius: 7rem;
        content: '';
        transform: translate(-50%, -50%);
      }

      &::after {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.4rem solid $white;
        border-radius: 50%;
        background-color: $blue;
        color: $white;
        content: 'I';
        font-family: GillSans;
        @include adaptive-font(7.2, 4.5);
        line-height: 100%;
        text-transform: uppercase;

        @media (min-width: 1440px) {
          width: 14rem;
          height: 14rem;
        }

        @media (max-width: 1439px) {
          width: 11rem;
          height: 11rem;
        }
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
        width: 10.7rem;
        height: 10.7rem;
      }

      @media (max-width: 1439px) {
        width: 9rem;
        height: 9rem;
      }

      &_arrows {
        background-image: url('@/assets/icons/active-components/arrows.svg');
      }
      &_gauge {
        background-image: url('@/assets/icons/active-components/gauge.svg');
      }
      &_shield {
        background-image: url('@/assets/icons/active-components/shield.svg');
      }
      &_pine {
        background-image: url('@/assets/icons/active-components/pine.svg');
      }
      &_roller {
        background-image: url('@/assets/icons/active-components/roller.svg');
      }
      &_circle {
        background-image: url('@/assets/icons/active-components/circle.svg');
      }
      &_feather {
        background-image: url('@/assets/icons/active-components/feather.svg');
      }
      &_pipette {
        background-image: url('@/assets/icons/active-components/pipette.svg');
      }
      &_leaf {
        background-image: url('@/assets/icons/active-components/leaf.svg');
      }
    }

    &-description {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;

      &__title {
        color: $blue;
        font-family: 'GillSans SemiBold';
        @include adaptive-font(6, 3.7);
        line-height: 100%;
        text-transform: uppercase;
      }

      &-list {
        display: flex;
        height: 100%;
        flex-direction: column;
        margin-top: 2rem;
        row-gap: 2.5rem;
      }

      &__item {
        display: flex;
        align-items: center;
        column-gap: 3rem;
      }

      &-text {
        display: flex;
        flex-direction: column;
        letter-spacing: 0.08rem;
      }

      &__text {
        &-main {
          font-family: 'GillSans Bold';
          @include adaptive-font(4, 2.5);
          line-height: 130%;
          text-transform: uppercase;

          &:deep(span) {
            font-family: GillSans;
          }
        }
      }

      &__addition {
        font-family: GillSans;
        @include adaptive-font(3, 1.9);
        line-height: 130%;
        text-transform: uppercase;
      }

      &-addition {
        display: flex;
        flex-direction: column;
        margin-top: 4.6rem;
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
