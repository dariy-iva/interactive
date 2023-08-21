<template>
  <section class="test-section">
    <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="test__logo" />
    <div class="test-wrapper">
      <h1 class="test-top">
        <span class="test__title">Тест</span>
        <span class="test__page">{{ +stepNum === 26 ? 'I' : 2 }}\2</span>
      </h1>

      <div class="test-content">
        <div v-for="(block, key) in activeBlocks" :key="key" class="test-content-column">
          <div v-for="question in block" class="test-question">
            <p class="test-question__text" v-text="question.label" />

            <div class="test-answers">
              <label v-for="answer in question.answers" :key="answer" class="test-answer" :class="{ 'test-answer_disabled': question.selectedAnswer }">
                  <input
                    type="radio"
                    v-model="question.selectedAnswer"
                    :name="question.name"
                    :value="answer"
                    :disabled="question.selectedAnswer !== ''"
                    class="test-answer-input"
                    :class="{ 'test-answer-input_error': question.selectedAnswer === answer && question.selectedAnswer !== question.rightAnswer }"
                  />
                <span class="test-answer__text" v-text="answer" />

                <span
                  class="test-answer__result"
                  :class="{
                    'test-answer__result_visible': question.selectedAnswer && (question.rightAnswer === answer || question.selectedAnswer === answer),
                    'test-answer__result--blue': question.rightAnswer === answer,
                    'test-answer__result--red': question.rightAnswer !== answer
                  }"
                >
                {{  question.rightAnswer === answer ? '(правильно!)' : '(неверно!)' }}
              </span>
              </label>
            </div>
          </div>
        </div>

        <div v-if="+stepNum === 27" class="test-content-column">
          <div class="test-question">
            <p class="test-question__text" v-text="questions.fourBlock.title" />

            <div class="test-answers test-answers_small">
              <div v-for="(item, index) in questions.fourBlock.items" :key="index" class="test-answer test-answer--full">
                <span class="test-answer__text test-answer__text-main" v-text="item.label" />
                <div class="test-answer-radio-group">
                  <label v-for="answer in item.answers" :key="answer" class="test-answer-radio" :class="{ 'test-answer_disabled': item.selectedAnswer }">
                    <input
                      class="test-answer-input"
                      :class="{ 'test-answer-input_error': item.selectedAnswer === answer && item.selectedAnswer !== item.rightAnswer }"
                      type="radio"
                      :name="answer.name"
                      :value="answer"
                      :disabled="item.selectedAnswer !== ''"
                      v-model="item.selectedAnswer"
                    />
                    <span class="test-answer__text" v-text="answer" />

                    <span
                      class="test-answer__result test-answer__result_bottom"
                      :class="{
                    'test-answer__result_visible': item.selectedAnswer && (item.rightAnswer === answer || item.selectedAnswer === answer),
                    'test-answer__result--blue': item.rightAnswer === answer,
                    'test-answer__result--red': item.rightAnswer !== answer
                  }"
                    >
                {{  item.rightAnswer === answer ? '(правильно!)' : '(неверно!)' }}
              </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <block-pagination :step-num="stepNum" @toggle-step="toggleStep" />
  </section>
</template>

<script setup>
import BlockPagination from '@/components/UI/BlockPagination.vue';
import { computed, ref } from 'vue';

const props = defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['toggleStep'])

const questions = ref({
  firstBlock: [
    {
      name: 'searchNumbers',
      label: '1. Сколько поисковых запросов в месяц среди российских женщин посвящено пигментации?',
      selectedAnswer: '',
      rightAnswer: '248 323',
      answers: ['248 323', '130 000', '381 260']
    },
    {
      name: 'pigmentationAge',
      label: '2. Может ли поствоспалительная гиперпигментация появляться в разном возрасте?',
      selectedAnswer: '',
      rightAnswer: 'Да',
      answers: ['Да', 'Нет']
    },
    {
      name: 'niacinamidQuantity',
      label: '3. Сколько ниацинамила содержится в сыворотке?',
      selectedAnswer: '',
      rightAnswer: '10%',
      answers: ['15%', '10%', '8%']
    }
  ],
  secondBlock: [
    {
      name: 'niacinamidActions',
      label: '4. Какой действие у ниацинамида?',
      selectedAnswer: '',
      rightAnswer: 'Все ответы верны',
      answers: ['Блокирует перенос меланина', 'Ингибирует медиаторы воспаления', 'Укрепляет кожный барьер', 'Все ответы верны']
    },
    {
      name: 'biodegradable',
      label: '5. Верно ли, что формула сыворотки на 78% биоразлагаемая?',
      selectedAnswer: '',
      rightAnswer: 'Да',
      answers: ['Да', 'Нет']
    },
    {
      name: 'resorcinol',
      label: '6. В каком природном источнике содержится фе-резорцинол?',
      selectedAnswer: '',
      rightAnswer: 'В коре сосны',
      answers: ['В мяте', 'В коре сосны', 'В водорослях']
    }
  ],
  thirdBlock: [
    {
      name: 'hepes',
      label: '7. Расшифруйте аббревиатуру HEPES:',
      selectedAnswer: '',
      rightAnswer: 'Гидрокси этил пиперазин этансульфоновая кислота',
      answers: ['Гидрокси этил пиперазин этансульфоновая кислота', 'Гидро эпоксид провитамин еврамидовая кислота', 'Гидрокси эумулгин пактат натрия этансульфоновая кислота']
    },
    {
      name: 'usage',
      label: '8. Как правильно использовать сыворотку?',
      selectedAnswer: '',
      rightAnswer: 'Все ответы верны',
      answers: ['Утром и/или вечером на чистую кожу, избегая область вокруг глаз', 'Дополнительно используйте SPF', 'Самостоятельно и/или с основных уходом', 'Все ответы верны']
    },
    {
      name: 'components',
      label: '9. Основные компоненты в сыворотке:',
      selectedAnswer: '',
      rightAnswer: 'Ниацинамид, Хепес, Фе-резорцинол, Гиалуроновая кислота',
      answers: ['Ниацинамид, Хепес, Фе-резорцинол, Гиалуроновая кислота', 'Ниацинамид, Коллаген, Кислоты', 'Ниацинамид, витамин С, Фе-резорцинол, Гиалуроновая кислота']
    }
  ],
  fourBlock: {
    title: '10. Выберите правильное соотношение компонентов с их количеством в составе:',
    items: [{
      name: 'niacinamidPercent',
      label: 'Ниацинамид',
      selectedAnswer: '',
      rightAnswer: '10%',
      answers: ['10%', '5%', '0.5%'],
    },
    {
      name: 'hepesQuantity',
      label: 'Хепес',
      selectedAnswer: '',
      rightAnswer: '5%',
      answers: ['10%', '5%', '0.5%'],
    },
    {
      name: 'resocirnolQuantity',
      label: 'Фе-резорцинол ',
      selectedAnswer: '',
      rightAnswer: '0.5%',
      answers: ['10%', '5%', '0.5%'],
    }]
  }
})

const activeBlocks = computed(() => {
  return +props.stepNum === 26
    ? { firstBlock: questions.value.firstBlock, secondBlock: questions.value.secondBlock }
    : { thirdBlock: questions.value.thirdBlock }
})

function toggleStep(value = null) {
  if (value === '-1') {
    emits('toggleStep', value)
    return;
  }

  if (props.stepNum === 26) {
    const hasNotAnswered = [...questions.value.firstBlock, ...questions.value.secondBlock].some(item => !item.selectedAnswer)
    if (!hasNotAnswered) {
      emits('toggleStep')
    }
    return
  }

  if (props.stepNum === 27) {
    const hasNotAnswered = [...questions.value.firstBlock, ...questions.value.fourBlock.items].some(item => !item.selectedAnswer)
    if (!hasNotAnswered) {
      emits('toggleStep', 1)
    }
    return
  }
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.test {
  &-section {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include tablet-desktop{
      margin-top: 1rem;
    }
  }

  &__logo {
    position: absolute;
    width: 29.1rem;

    @media (min-width: 1440px) {
      right: 33.2rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      right: 20rem;
    }

    @include tablet-desktop {
      top: -14rem;
    }

    @include mobile-tablet {
      right: 10rem;
      width: 19rem;
    }

    @include mobile {
      top: -10rem;
    }
  }

  &-wrapper {
    min-height: 84rem;
    padding: 4.5rem 8rem 6.7rem;
    border-radius: 8rem;
    background-color: $white;

    @include mobile {
      padding: 4rem;
    }
  }

  &-top {
    display: flex;
    align-items: start;
    justify-content: space-between;

    @include desktop {
      margin-top: 0.8rem;
    }
  }

  &__title {
    color: $blue;
    font-family: 'GillSans Bold';
    @include adaptive-font(7, 4.4);
    line-height: 100%;

    @include desktop {
      letter-spacing: 0.21rem;
    }
  }

  &__page {
    font-family: GillSans;
    @include adaptive-font(4, 2.5);
    line-height: 100%;
    letter-spacing: 0.59rem;
  }

  &-content {
    display: flex;
    margin-top: 2.9rem;
    gap: 8rem;

    @include mobile-tablet {
      flex-wrap: wrap;
    }

    @include mobile {
      flex-direction: column;
      gap: 4.6rem;
    }

    &-column {
      display: flex;
      width: 100%;
      max-width: 70rem;
      flex-direction: column;
      gap: 4.6rem;

      //&-right {
      //  row-gap: 5.1rem;
      //}
    }
  }

  &-question {
    &__text {
      font-family: 'GillSans Bold';
      @include adaptive-font(2.1, 1.3);
      line-height: 130%;
    }
  }

  &-answers {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    &:not(&_small) {
      gap: 2.1rem;
    }

    &_small {
      gap: 1em;
    }
  }

  &-answer {
    position: relative;
    display: flex;
    //max-width: max-content;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
    font-family: GillSans;

    &:not(&--full),
    &-radio {
      @include desktop {
        width: max-content;
      }
    }

    &:not(&--full, &_disabled),
    &-radio:not(&_disabled) {
      cursor: pointer;
    }

    &-radio {
      position: relative;
      display: flex;
    }

    &-input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked:not(&_error) + span::before {
        background-color: $blue;
      }

      &_error + span::before {
        background-color: #ee6868;
        border-color: #ee6868;
      }

      &:not(:disabled, :checked) + span:hover::before {
        border: 0.35rem solid $blue;
      }
    }

    &__text {
      display: inline-flex;
      align-items: center;
      column-gap: 1rem;
      @include adaptive-font(2, 1.3);
      line-height: 100%;

      &::before {
        display: inline-block;
        width: 2.4rem;
        height: 2.4rem;
        box-sizing: border-box;
        border: 0.15rem solid $blue;
        border-radius: 50%;
        background-color: $white;
        content: '';
        transition: all 0.2s ease;
      }

      &-main {
        display: inline-block;
        width: 100%;
        max-width: 20rem;

        @media (min-width: 1440px) {
          margin-right: 11.4rem;
        }

        &::before {
          display: none;
        }
      }
    }

    &__result {
      position: absolute;
      font-size: 1.6rem;
      line-height: 130%;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;



      &:not(&_bottom) {
        @include tablet-desktop {
          left: calc(100% + 0.5rem);
        }
        @include mobile {
          top: 100%;
        }
      }

      &_bottom {
        top: 90%;
        left: 0;
      }

      &_visible {
        opacity: 1;
        visibility: visible;
      }

      &--blue {
        color: $blue;
      }

      &--red {
        color: #ee6868;
      }
    }

    &-radio-group {
      display: flex;
      column-gap: 5rem;

      @include mobile-tablet {
        gap: 1.5rem;
      }
    }
  }
}

@include mobile {
  :deep(.navigation) {
    flex-wrap: wrap;
  }
  :deep(.default-button) {
    width: 100%;
  }
}
</style>

