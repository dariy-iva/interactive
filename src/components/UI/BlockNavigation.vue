<template>
  <div class="navigation">
    <h2 ref="titleRef" class="navigation__title" v-html="currentStep.title" />

    <div class="navigation__buttons">
      <button
        v-show="currentStep.prevBlockNum"
        type="button"
        class="navigation__button navigation__button_type_prev"
        @click="$emit('toggleStep', currentStep.prevBlockNum)"
      >
        <span class="navigation__arrow navigation__arrow_prev" />
        <span ref="prevRef" class="navigation__text" v-html="currentStep.prevBlockText" />
      </button>

      <button
        v-show="currentStep.nextBlockNum"
        type="button"
        class="navigation__button navigation__button_type_next"
        @click="$emit('toggleStep', currentStep.nextBlockNum || 1)"
      >
        <span ref="nextRef" class="navigation__text" v-html="currentStep.nextBlockText" />
        <span class="navigation__arrow" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

defineEmits(['toggleStep'])

const steps = ref([
  {
    title: 'Активные компоненты',
    steps: [12, 13, 14, 15, 16],
    nextBlockNum: 17,
    nextBlockText: 'Роскошная<br /> формула',
    prevBlockNum: null,
    prevBlockText: ''
  },
  {
    title: 'Роскошная формула',
    steps: [17],
    nextBlockNum: 18,
    nextBlockText: 'Действие продукта',
    prevBlockNum: 12,
    prevBlockText: 'Активные<br /> компоненты'
  },
  {
    title: 'Действие продукта',
    steps: [18],
    nextBlockNum: 19,
    nextBlockText: 'Результаты,<br />подтвержденные потребителями',
    prevBlockNum: 17,
    prevBlockText: 'Роскошная<br /> формула'
  },
  {
    title: 'Результаты, <span class="small">подтвержденные потребителями</span>',
    steps: [19],
    nextBlockNum: 20,
    nextBlockText: 'Клинически<br />доказанная эффективность',
    prevBlockNum: 18,
    prevBlockText: 'Против всех видов<br />пигментации'
  },
  {
    title: 'Клинически <span class="small">доказанная эффективность</span>',
    steps: [20],
    nextBlockNum: 21,
    nextBlockText: 'Для кого<br /> и применение',
    prevBlockNum: 19,
    prevBlockText: 'Результаты, подтвержденные<br />потребителями'
  },
  {
    title: 'Для кого и применение',
    steps: [21],
    nextBlockNum: 22,
    nextBlockText: 'Комплексная<br />рекомендация',
    prevBlockNum: 20,
    prevBlockText: 'Клинически<br />доказанная эффективность'
  },
  {
    title: 'Комплексная рекомендация',
    steps: [22],
    nextBlockNum: 23,
    nextBlockText: 'уф-лучи',
    prevBlockNum: 21,
    prevBlockText: 'Для кого<br /> и применение'
  },
  {
    title: 'уф-лучи',
    steps: [23],
    nextBlockNum: 24,
    nextBlockText: 'Против всех видов пигментации',
    prevBlockNum: 22,
    prevBlockText: 'Комплексная<br />рекомендация'
  },
  {
    title: 'Против всех видов пигментации',
    steps: [24],
    nextBlockNum: null,
    nextBlockText: '',
    prevBlockNum: 23,
    prevBlockText: 'уф-лучи'
  }
])

const currentStep = ref(steps.value.find((step) => step.steps.includes(+props.stepNum)) || {})

const titleRef = ref(null)
const prevRef = ref(null)
const nextRef = ref(null)

watch(
  () => props.stepNum,
  (newValue, oldValue) => {
    if (newValue >= 12 && newValue <= 16 && oldValue !== 17) return

    const titleClass = newValue > oldValue ? 'title-translate' : 'title-translate-reverse'
    const prevClass = newValue > oldValue ? 'prev-translate' : 'prev-translate-reverse'
    const nextClass = newValue > oldValue ? 'next-translate' : 'next-translate-reverse'
    titleRef.value.classList.add(titleClass)
    prevRef.value?.classList?.add(prevClass)
    nextRef.value?.classList?.add(nextClass)

    setTimeout(() => {
      titleRef.value.classList.remove(titleClass)
      prevRef.value?.classList?.remove(prevClass)
      nextRef.value?.classList?.remove(nextClass)
      currentStep.value = steps.value.find((step) => step.steps.includes(+props.stepNum)) || {}
    }, 500)
  }
)
</script>

<style scoped lang="scss">
$gray: $GRAY;
$white: $WHITE;
$fontDefaultSemiBold: $FONT_DEFAULT_SEMI_BOLD;
$fontDefaultBold: $FONT_DEFAULT_BOLD;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;

@keyframes translateTitle {
  from {
    translate: 0;
    scale: 1;
    opacity: 1;
  }
  to {
    translate: -140% 250%;
    scale: 0.7;
    opacity: 0;
  }
}

@keyframes translateReverseTitle {
  from {
    translate: 0;
    scale: 1;
    opacity: 1;
  }
  to {
    translate: 54% 250%;
    scale: 0.7;
    opacity: 0;
  }
}

@keyframes translatePrev {
  from {
    translate: 0;
    scale: 1;
    opacity: 1;
  }
  to {
    translate: -200%;
    scale: 1.2;
    opacity: 0;
  }
}

@keyframes translateReversePrev {
  from {
    translate: 0;
    scale: 1;
    opacity: 1;
  }
  to {
    translate: 450% -200%;
    scale: 0.7;
    opacity: 0;
  }
}

@keyframes translateNext {
  from {
    translate: 0;
    scale: 1;
    opacity: 1;
  }
  to {
    translate: -50% -200%;
    scale: 1.2;
    opacity: 0;
  }
}

@keyframes translateReverseNext {
  from {
    translate: 0;
    scale: 1;
    opacity: 1;
  }
  to {
    translate: 200%;
    scale: 0.7;
    opacity: 0;
  }
}

.title-translate {
  animation: translateTitle 1s 1;
}

.title-translate-reverse {
  animation: translateReverseTitle 0.5s 1;
}

.prev-translate {
  animation: translatePrev 0.5s 1;
}

.prev-translate-reverse {
  animation: translateReversePrev 1s 1;
}

.next-translate {
  animation: translateNext 0.5s 1;
}

.next-translate-reverse {
  animation: translateReverseNext 0.5s 1;
}

.navigation {
  display: flex;
  flex-direction: column;

  @include desktop {
    padding: 5.8rem 0 5rem;
    gap: 4.2rem;
  }

  @media (min-width: 1441px) {
    margin-top: -13rem;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: -16rem;
  }

  @include tablet {
    margin-top: -8rem;
  }

  @include mobile-tablet {
    gap: 2.5rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &__title {
    margin-left: auto;
    color: $white;
    font-family: $fontDefaultSemiBold;
    line-height: 100%;
    text-align: right;
    text-transform: uppercase;
    @include adaptive-font(4, 2.5);

    @media (min-width: 1441px) {
      padding-right: 4.5rem;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
      width: min-content;
      padding-right: 2.5rem;
    }

    @include tablet {
      padding-right: 5rem;
    }

    &:deep(.small) {
      display: inline-block;
      font-family: $fontDefaultLight;
      @include adaptive-font(3, 1.8);

      @include desktop {
        width: max-content;
      }

      @include mobile-tablet {
        width: auto;
      }
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  &__button {
    position: relative;
    display: flex;
    width: max-content;
    align-items: center;
    justify-content: end;
    background: none;
    border: none;
    cursor: pointer;

    @include tablet-desktop {
      gap: 3.9rem;
    }

    @include mobile {
      gap: 1rem;
    }

    &_type_next {
      margin-left: auto;

      .other-page__text {
        text-align: end;
      }
    }

    &_type_prev {
      margin-right: auto;

      .other-page__text {
        text-align: start;
      }
    }

    @include desktop {
      &::before {
        position: absolute;
        top: 50%;
        width: 9rem;
        height: 7.83rem;
        background: linear-gradient(90deg, #009fe3 0%, rgba(0, 159, 227, 0%) 100%);
        content: '';
        filter: blur(1.87rem);
        opacity: 0;
        transition: all 0.2s ease;
      }

      &_type_prev::before {
        left: -4.5rem;
        transform: translateY(-50%);
      }

      &_type_next::before {
        right: -4.5rem;
        transform: translateY(-50%) rotate(180deg);
      }

      &:hover::before {
        opacity: 1;
      }
    }
  }

  &__arrow {
    display: block;
    opacity: 0.7;
    background: url('@/assets/icons/arrow_navigation.svg') center / cover no-repeat;
    transition: all 0.2s ease;

    &_prev {
      rotate: 180deg;
    }

    @include tablet-desktop {
      width: 1.7rem;
      height: 3rem;
    }

    @include mobile {
      width: 1.3rem;
      height: 2rem;
    }
  }

  &__button:hover > &__arrow {
    @include desktop {
      transform: translateX(1rem);
      opacity: 1;
    }
  }

  &__text {
    color: $gray;
    font-family: $fontDefaultBold;
    line-height: 100%;
    opacity: 0.7;
    text-transform: uppercase;
    @include adaptive-font(2, 1.25);
  }

  &__button_type_next > &__text {
    text-align: right;
  }

  &__button_type_prev > &__text {
    text-align: left;
  }
}
</style>
