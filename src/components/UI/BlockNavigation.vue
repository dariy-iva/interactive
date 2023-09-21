<template>
  <div class="navigation">
    <h2
      ref="titleRef"
      class="other-page-title"
      :class="{ 'other-page-title_large': stepNum > 12 && stepNum < 17 }"
      v-html="currentStep.title"
    />

    <div class="navigation__buttons">
      <span
        v-show="currentStep.prevBlockNum"
        class="other-page other-page--last"
        @click="$emit('toggleStep', currentStep.prevBlockNum)"
      >
        <img src="@/assets/icons/other-page-arrow.svg" alt="arrow" class="other-page__arrow other-page__arrow_prev" />
        <p ref="prevRef" class="other-page__text" v-html="currentStep.prevBlockText" />
      </span>

      <span
        v-show="currentStep.nextBlockNum"
        class="other-page other-page--next"
        @click="$emit('toggleStep', currentStep.nextBlockNum || 1)"
      >
        <p ref="nextRef" class="other-page__text" v-html="currentStep.nextBlockText" />
        <img src="@/assets/icons/other-page-arrow.svg" alt="arrow" class="other-page__arrow other-page__arrow_next" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

defineEmits(['toggleStep'])

const steps = ref([
  {
    title: 'АКТИВНЫЕ КОМПОНЕНТЫ',
    steps: [12, 13, 14, 15, 16],
    nextBlockNum: 17,
    nextBlockText: 'Роскошная<br /> формула',
    prevBlockNum: null,
    prevBlockText: ''
  },
  {
    title: 'РОСКОШНАЯ ФОРМУЛА',
    steps: [17],
    nextBlockNum: 18,
    nextBlockText: 'действие продукта',
    prevBlockNum: 12,
    prevBlockText: 'АКТИВНЫЕ<br /> КОМПОНЕНТЫ'
  },
  {
    title: 'действие продукта',
    steps: [18],
    nextBlockNum: 19,
    nextBlockText: 'РЕЗУЛЬТАТЫ,<br />ПОДТВЕРЖДЕННЫЕ ПОТРЕБИТЕЛЯМИ',
    prevBlockNum: 17,
    prevBlockText: 'РОСКОШНАЯ<br /> ФОРМУЛА'
  },
  {
    title: '<span class="top">РЕЗУЛЬТАТЫ, <span class="small">ПОДТВЕРЖДЕННЫЕ<br /> ПОТРЕБИТЕЛЯМИ</span></span>',
    steps: [19],
    nextBlockNum: 20,
    nextBlockText: 'КЛИНИЧЕСКИ ДОКАЗАННАЯ<br /> ЭФФЕКТИВНОСТЬ',
    prevBlockNum: 18,
    prevBlockText: 'ПРОТИВ ВСЕХ ВИДОВ<br /> ПИГМЕНТАЦИИ'
  },
  {
    title: '<span class="top">клинически <span class="small">доказанная<br /> эффективность</span></span>',
    steps: [20],
    nextBlockNum: 21,
    nextBlockText: 'Для кого<br /> и применение',
    prevBlockNum: 19,
    prevBlockText: 'РЕЗУЛЬТАТЫ, ПОДТВЕРЖДЕННЫЕ<br /> ПОТРЕБИТЕЛЯМИ'
  },
  {
    title: 'Для кого и применение',
    steps: [21],
    nextBlockNum: 22,
    nextBlockText: 'КОМПЛЕКСНАЯ<br /> РЕКОМЕНДАЦИЯ',
    prevBlockNum: 20,
    prevBlockText: 'КЛИНИЧЕСКИ ДОКАЗАННАЯ<br /> ЭФФЕКТИВНОСТЬ'
  },
  {
    title: 'КОМПЛЕКСНАЯ РЕКОМЕНДАЦИЯ',
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
    nextBlockText: 'ПРОТИВ ВСЕХ ВИДОВ ПИГМЕНТАЦИИ',
    prevBlockNum: 22,
    prevBlockText: 'КОМПЛЕКСНАЯ<br /> РЕКОМЕНДАЦИЯ'
  },
  {
    title: 'ПРОТИВ ВСЕХ ВИДОВ ПИГМЕНТАЦИИ',
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

watch(() => props.stepNum, (newValue, oldValue) => {
  console.log(prevRef.value);
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
})
</script>

<style scoped lang="scss">
$gray: $GRAY;
$white: $WHITE;

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

@keyframes translateReversePrev{
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

@keyframes translateReverseNext{
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
  overflow-y: hidden;

  @include desktop {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 6.8rem 4.6rem 5rem;
    gap: 4.2rem;
  }
  @include mobile-tablet {
    gap: 2.5rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}

.other-page {
  position: relative;
  display: flex;
  width: max-content;
  height: 4.6rem;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  gap: 3.9rem;

  &--last {
    margin-right: auto;

    .other-page__text {
      text-align: start;
    }
  }

  &--next {
    margin-left: auto;

    .other-page__text {
      text-align: end;
    }
  }

  &:hover {
    @include desktop {
      &::before {
        opacity: 1;
      }

      .other-page__arrow_next {
        transform: translateX(1rem);
        opacity: 1;
      }

      .other-page__arrow_prev {
        transform: translateX(1rem);
        opacity: 1;
      }
    }
  }

  @include tablet-desktop {
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

    &--last::before {
      left: -4.5rem;
      transform: translateY(-50%);
    }

    &--next::before {
      right: -4.5rem;
      transform: translateY(-50%) rotate(180deg);
    }
  }

  &__text {
    color: $gray;
    font-family: 'GillSans Bold';
    @include adaptive-font(2, 1.25);
    line-height: 100%;
    opacity: 0.7;
    text-align: right;
    text-transform: uppercase;
    margin-bottom: -0.5rem;
  }

  &__arrow {
    width: 1.7rem;
    height: 3rem;
    opacity: 0.7;
    transition: all 0.2s ease;

    &_prev {
      rotate: 180deg;
    }
  }

  &-title {
    width: max-content;
    margin-left: auto;
    color: $white;
    font-family: 'GillSans SemiBold';
    @include adaptive-font(4, 2.5);
    line-height: 100%;
    text-align: right;
    text-transform: uppercase;

    @media (min-width: 1023px) and (max-width: 1440px) {
      width: min-content;
    }

    @include desktop {
      padding-right: 12.4rem;
      letter-spacing: 0.31rem;
    }

    @include mobile-tablet {
      padding-right: 5rem;
    }

    @include mobile {
      width: min-content;
    }

    &:deep(.top) {
      display: block;
      margin-top: -4.8rem;
    }

    &:deep(.small) {
      font-family: 'GillSans Light';
    }

    &_large {
      @media (min-width: 1800px) {
        margin-top: -3.2rem;
        margin-bottom: 1rem;
        font-size: 6rem;
      }
    }
  }
}
</style>
