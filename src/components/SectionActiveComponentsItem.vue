<template>
  <section class="component">
    <article v-if="currentCard" class="component__card">
      <card-image :class="`component__preview component__preview_type_${currentCard.type}`">
        <span class="component__number" v-text="currentCard.number" />
      </card-image>

      <div class="component__info">
        <span class="component__title" v-text="currentCard.title" />

        <ul class="component__paragraphs">
          <li
            v-for="(item, index) in currentCard.items"
            :key="`${currentCard.title}-${index}`"
            class="component__paragraph"
          >
            <div :class="`component__paragraph-icon component__paragraph-icon_${item.iconName}`" />

            <div class="component__text">
              <span v-if="item.mainText" v-html="item.mainText" />
              <span v-if="item.description" v-html="item.description" class="component__text_small" />
            </div>
          </li>
        </ul>
      </div>
    </article>

    <block-pagination class="pagination" @toggle-step="(value) => $emit('toggleStep', value)">
      <div class="pagination__buttons">
        <span class="pagination__line"></span>
        <button
          type="button"
          class="pagination__button"
          :class="{ pagination__button_active: stepNum === 13, pagination__button_last: stepNum > 13 }"
          @click="$emit('toggleStep', 13)"
        >
          I
        </button>
        <span class="pagination__line"></span>
        <button
          type="button"
          class="pagination__button"
          :class="{ pagination__button_active: stepNum === 14, pagination__button_last: stepNum > 14 }"
          @click="$emit('toggleStep', 14)"
        >
          2
        </button>
        <span class="pagination__line"></span>
        <button
          type="button"
          class="pagination__button"
          :class="{ pagination__button_active: stepNum === 15, pagination__button_last: stepNum > 15 }"
          @click="$emit('toggleStep', 15)"
        >
          3
        </button>
        <span class="pagination__line"></span>
        <button
          type="button"
          class="pagination__button"
          :class="{ pagination__button_active: stepNum === 16, pagination__button_last: stepNum > 16 }"
          @click="$emit('toggleStep', 16)"
        >
          4
        </button>
        <span class="pagination__line"></span>
      </div>
    </block-pagination>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import BlockPagination from '@/components/UI/BlockPagination.vue'
import CardImage from '@/components/UI/CardImage.vue'

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
    title: 'Ниацинамид 10%',
    type: 'niacinamide',
    number: 'I',
    items: [
      {
        iconName: 'arrows',
        mainText: '<strong>Блокирует перенос меланина</strong>',
        description: 'Коррекция пигментации'
      },
      {
        iconName: 'gauge',
        mainText: '<strong>Ингибирует медиаторы<br />воспаления</strong>',
        description: 'Снижение воспаления'
      },
      {
        iconName: 'shield',
        mainText: '<strong>Укрепляет кожный барьер</strong>',
        description: 'Защита от раздражения'
      }
    ]
  },
  {
    step: 14,
    title: 'ФЕ-РЕЗОРЦИНОЛ 0,5%',
    type: 'resorcinol',
    number: '2',
    items: [
      {
        iconName: 'pine',
        mainText:
          '<strong>Производное</strong> пиносильвина<br />содержится <strong>в древесине</strong>\n' +
          'сосны <br />обыкновенной',
        description: ''
      },
      {
        iconName: 'gauge',
        mainText: '<strong>Ингибирует секрецию меланина</strong>',
        description: 'Профилактика пигментации'
      },
      {
        iconName: 'roller',
        mainText: '<strong>Депигментирующий эффект</strong>',
        description: 'Коррекция пигментации'
      }
    ]
  },
  {
    step: 15,
    title: '5% ХЕПЕС',
    type: 'hepes',
    number: '3',
    items: [
      {
        iconName: 'circle',
        mainText: '<strong>Удаляет кератиноциты,<br />наполненные меланином</strong>',
        description: 'Коррекция пигментации'
      },
      {
        iconName: 'feather',
        mainText: '<strong>Мягкое отшелушивание</strong>',
        description: 'Выравнивание тона кожи'
      },
      {
        iconName: 'pipette',
        mainText: '<strong>Увлажняющий </strong>эффект',
        description: ''
      }
    ]
  },
  {
    step: 16,
    title: 'Гиалуроновая кислота',
    type: 'hyaluronic',
    number: '4',
    items: [
      {
        iconName: 'shield',
        mainText: '<strong>Поддерживает</strong> кожный барьер',
        description: ''
      },
      {
        iconName: 'leaf',
        mainText: 'Повышает <strong>упругость<br/>и эластичность кожи</strong>',
        description: ''
      }
    ]
  }
])

const currentCard = computed(() => cards.value.find((card) => +card.step === +props.stepNum) || null)
</script>

<style scoped lang="scss">
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;
$fontDefault: $FONT_DEFAULT;
$fontDefaultSemiBold: $FONT_DEFAULT_SEMI_BOLD;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

@keyframes translateCard {
  from {
    translate: -100%;
    opacity: 0;
  }
  to {
    translate: 0;
    opacity: 1;
  }
}

.component {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1801px) {
    gap: 9.3rem;
  }

  @media (max-width: 1800px) {
    gap: 20rem;
  }

  &__card {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    margin: auto;
    border-radius: 5rem;
    background-color: $white;
    box-shadow: -0.5rem 2rem 5rem 0 rgba(0, 0, 0, 15%);
    animation: translateCard 0.6s 1;

    @media (min-width: 1440px) {
      min-height: 60.8rem;
    }

    @media (max-width: 1439px) {
      min-height: 47rem;
    }

    @include desktop {
      padding: 3rem;
    }

    @include mobile-tablet {
      padding: 2rem;
    }

    @include mobile {
      border-radius: 5rem;
    }
  }

  &__preview {
    position: absolute;
    left: 0;
    width: 29.4%;
    min-width: 30rem;
    max-width: 50.6rem;
    max-height: 96.6rem;
    min-height: calc(100% + 5rem);
    aspect-ratio: 10 / 19.1;
    border-radius: 7rem;

    @include mobile {
      display: none;
    }

    &_type_niacinamide {
      background-image: url('@/assets/images/ingredients/niacinamide.webp');
    }

    &_type_resorcinol {
      background-image: url('@/assets/images/ingredients/resorcinol.webp');
    }

    &_type_hepes {
      background-image: url('@/assets/images/ingredients/hepes.webp');
    }

    &_type_hyaluronic {
      background-image: url('@/assets/images/ingredients/hyaluronic.webp');
    }

    &:deep(.card-image__wrapper) {
      border-radius: 7rem;
    }
  }

  &__number {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -0.4rem auto auto -0.4rem;
    border-radius: 50%;
    border: 0.4rem solid $white;
    background-color: $blue;
    color: $white;
    font-family: $fontDefault;
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(7, 5);

    @include desktop {
      width: 14rem;
      height: 14rem;
    }

    @include tablet {
      width: 10rem;
      height: 10rem;
    }
  }

  &__info {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    @include tablet-desktop {
      margin-left: auto;
    }

    @include desktop {
      width: 64.6%;
    }

    @include tablet {
      width: calc(100% - 30rem);
    }
  }

  &__title {
    color: $blue;
    font-family: $fontDefaultSemiBold;
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(6, 2.7);
  }

  &__paragraphs {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 3rem;
  }

  &__paragraph {
    display: flex;
    align-items: center;

    @include tablet-desktop {
      gap: 3rem;
    }

    @include mobile {
      gap: 2rem;
    }
  }

  &__paragraph-icon {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.3s ease;

    @media (min-width: 1440px) {
      width: 10.7rem;
      min-width: 10.7rem;
      height: 10.7rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      width: 9rem;
      min-width: 9rem;
      height: 9rem;
    }

    @include tablet {
      width: 5rem;
      min-width: 5rem;
      height: 5rem;
    }

    @include mobile {
      width: 4rem;
      min-width: 4rem;
      height: 4rem;
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

  &__text {
    display: flex;
    flex-direction: column;
    font-family: $fontDefault;
    line-height: 130%;
    text-transform: uppercase;
    word-break: break-word;

    &:not(&_small) {
      @include adaptive-font(4, 1.8);
    }

    &_small {
      @include adaptive-font(3, 1.5);
    }

    &:deep(strong) {
      font-family: $fontDefaultBold;
    }
  }
}

.pagination {
  max-width: 114.6rem;
  margin-left: auto;

  @include desktop {
    gap: 3rem;
  }

  @include mobile-tablet {
    width: 100%;
  }

  &__buttons {
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

    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    border: none;
    background: none;
    color: $white;
    font-family: $fontDefault;
    line-height: 100%;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: pointer;
    @include adaptive-font(5.2, 3.3);

    @include desktop {
      width: 9rem;
      height: 9rem;
    }

    @include tablet {
      width: 7rem;
      height: 7rem;
    }

    &_last {
      background-color: $blue;
      color: $white;
    }

    &_active {
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
</style>
