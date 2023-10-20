<template>
  <main
    class="main"
    :class="{
      'main-wrapper': step !== 1,
      'main-wrapper_large': step === 0 || step === 2 || step === 8 || step === 11,
      'bcg-start': step === 0,
      'bcg-active-components': step === 12,
      'bcg-niacinamid': step === 13,
      'bcg-resorcinol': step === 14,
      'bcg-hepes': step === 15,
      'bcg-hyaluronic': step === 16,
      'bcg-product-action': step === 18,
      'bcg-purple': step === 19 || step === 20 || step === 24,
      'bcg-application': step === 21,
      'bcg-complex': step === 22,
      'bcg-uv': step === 23,
      'bcg-finish': step === 25
    }"
  >
    <button-back v-if="backText" :text="backText" @click="toggleStep(prevBlockStep)" />
    <button-map v-if="step !== 0 && step !== 1 && step <=27" @click="toggleStep(1)" />

    <block-navigation v-if="step >= 12 && step <= 24" :step-num="step" key="navigation" @toggle-step="toggleStep" />

    <section-start v-if="step === 0" key="step-0" @next="toggleStep" />
    <section-map v-if="step === 1" :last-step="lastStep" key="step-1" @toggle-step="toggleStep" />
    <section-main-stages
      v-if="step === 2 || step === 8 || step === 11"
      key="step-2-8-11"
      :card-num="step === 2 ? 1 : step === 8 ? 2 : 3"
      @toggleStep="toggleStep"
    />
    <section-hyper-pigmentation v-if="step === 3" key="step-3" @toggleStep="toggleStep" />
    <section-pigment-stages v-if="step >= 4 && step <= 6" key="step-4-6" :step-num="step" @toggleStep="toggleStep" />
    <section-inside v-if="step === 7" key="step-7" @toggleStep="toggleStep" />
    <section-inflammation v-if="step === 9" key="step-9" @toggleStep="toggleStep" />
    <section-protection v-if="step === 10" key="step-10" />
    <section-active-components v-if="step === 12" :step-num="step" key="step-12" @toggleStep="toggleStep" />
    <section-active-components-item
      v-if="step > 12 && step < 17"
      :step-num="step"
      key="step-13-16"
      @toggleStep="toggleStep"
    />
    <section-formula v-if="step === 17" key="step-17" @toggleStep="toggleStep" />
    <section-product-action v-if="step === 18" key="step-18" />
    <section-results v-if="step === 19" key="step-19" />
    <section-effectiveness v-if="step === 20" key="step-20" />
    <section-application v-if="step === 21" key="step-21" />
    <section-complex v-if="step === 22" key="step-22" />
    <section-uv-rays v-if="step === 23" key="step-23" />
    <section-pigmentation v-if="step === 24" key="step-24" />
    <section-finish v-if="step === 25" />
    <section-test v-if="step === 26 || step === 27" :step-num="step" @toggleStep="toggleStep" />

    <block-pagination
      v-if="(step >= 4 && step <= 6) || step === 10 || (step >= 18 && step <= 25)"
      :step-num="step"
      key="pagination"
      @toggle-step="toggleStep"
    />
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import ButtonMap from '@/components/UI/ButtonMap.vue'
import ButtonBack from '@/components/UI/ButtonBack.vue'
import BlockNavigation from '@/components/UI/BlockNavigation.vue'
import BlockPagination from '@/components/UI/BlockPagination.vue'
import SectionStart from '@/components/SectionStart.vue'
import SectionMap from '@/components/SectionMap.vue'
import SectionMainStages from '@/components/SectionMainStages.vue'
import SectionHyperPigmentation from '@/components/SectionHyperPigmentation.vue'
import SectionPigmentStages from '@/components/SectionPigmentStages.vue'
import SectionInside from '@/components/SectionInside.vue'
import SectionInflammation from '@/components/SectionInflammation.vue'
import SectionProtection from '@/components/SectionProtection.vue'
import SectionActiveComponents from '@/components/SectionActiveComponents.vue'
import SectionActiveComponentsItem from '@/components/SectionActiveComponentsItem.vue'
import SectionFormula from '@/components/SectionFormula.vue'
import SectionProductAction from '@/components/SectionProductAction.vue'
import SectionResults from '@/components/SectionResults.vue'
import SectionEffectiveness from '@/components/SectionEffectiveness.vue'
import SectionApplication from '@/components/SectionApplication.vue'
import SectionComplex from '@/components/SectionComplex.vue'
import SectionUvRays from '@/components/SectionUvRays.vue'
import SectionPigmentation from '@/components/SectionPigmentation.vue'
import SectionFinish from '@/components/SectionFinish.vue'
import SectionTest from '@/components/SectionTest.vue';

const step = ref(0)
const lastStep = ref(0)

const backText = computed(() => {
  const stepValue = +step.value

  if (stepValue === 3 || stepValue === 9 || stepValue === 10 || stepValue === 12 || (stepValue >= 17 && stepValue <= 27)) {
    return 'Назад <span>к разделам</span>'
  }

  if (stepValue >= 4 && stepValue <= 7) {
    return 'Пигмент <span>и кожа</span>'
  }

  if (stepValue >= 13 && stepValue <= 16) {
    return 'ИННОВАЦИЯ NIACINAMIDE I0'
  }

  return ''
})

const prevBlockStep = computed(() => {
  const stepValue = +step.value

  if (stepValue >= 4 && stepValue <= 7) {
    return 3
  }

  if (stepValue === 9 || stepValue === 10) {
    return 8
  }

  if (stepValue >= 13 && stepValue <= 16) {
    return 12
  }

  if (stepValue >= 17 && stepValue <= 27) {
    return 11
  }

  return '-1'
})

function toggleStep(stepNum = null) {
  step.value = +stepNum === -1 ? step.value - 1 : stepNum || stepNum === 0 ? stepNum : step.value + 1
  window.localStorage.setItem('currentStepPigmentation', step.value.toString())

  if (step.value > lastStep.value) {
    lastStep.value = step.value
    window.localStorage.setItem('lastStepPigmentation', lastStep.value.toString())
  }
}

function clearState() {
  step.value = 0
  lastStep.value = 0
  window.localStorage.setItem('currentStepPigmentation', '0')
  window.localStorage.setItem('lastStepPigmentation', '0')
}

// onMounted(() => {
//   const currentStepInStorage = window.localStorage.getItem('currentStepPigmentation')
//   const lastStepInStorage = window.localStorage.getItem('lastStepPigmentation')
//
//   if (!currentStepInStorage) {
//     window.localStorage.setItem('currentStepPigmentation', '0')
//     window.localStorage.setItem('lastStepPigmentation', '0')
//   }
//
//   step.value = +currentStepInStorage || 0
//   lastStep.value = +lastStepInStorage || 0
// })
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';

.main {
  min-height: 100vh;
  min-width: 100%;
  background: url('@/assets/images/background-01.jpg') center / cover no-repeat;
  transition: 0.4s ease;

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @include tablet-desktop {
      gap: 6.5rem;
    }

    @include mobile {
      gap: 3rem;
    }

    &:not(&_large) {
      @include desktop {
        padding: 13rem 10rem 10rem;
      }

      @include tablet {
        padding: 13rem 5rem 7rem;
      }

      @include mobile {
        padding: 10rem 2rem 5rem;
      }
    }

    &_large {
      @include tablet-desktop {
        padding: 10rem;
      }

      @include mobile {
        padding: 7rem 5rem;
      }
    }
  }

  &.bcg-start {
    @include tablet-desktop {
      background: url('@/assets/images/backgrounds/women_start.webp') left center / auto 100% no-repeat,
      url('@/assets/images/backgrounds/filter_blue.webp') center bottom / 100% 52.5% no-repeat,
      url('@/assets/images/backgrounds/purple.webp') center / cover no-repeat;
    }
    @include mobile {
      background: url('@/assets/images/backgrounds/purple.webp') center / cover no-repeat;
    }
  }

  &.bcg-active-components {
    background: url('@/assets/images/active-components/background.jpg') center / cover no-repeat;
  }

  &.bcg-niacinamid {
    background: url('@/assets/images/active-components/niacinamide-background.jpg') center / cover no-repeat;
  }

  &.bcg-resorcinol {
    background: url('@/assets/images/active-components/fe-resorcinol-background.jpg') center / cover no-repeat;
  }

  &.bcg-hepes {
    background: url('@/assets/images/active-components/hepes-background.jpg') center / cover no-repeat;
  }

  &.bcg-hyaluronic {
    background: url('@/assets/images/active-components/hyaluronic-acid-background.jpg') center / cover no-repeat;
  }

  &.bcg-product-action {
    background: url('@/assets/images/product-action/background.jpg') center / cover no-repeat;
  }

  &.bcg-purple {
    background: url('@/assets/images/background-purple.jpg') center / cover no-repeat;
  }

  &.bcg-application {
    background: url('@/assets/images/application/background.jpg') center / cover no-repeat;
  }

  &.bcg-complex {
    background: url('@/assets/images/complex/background.jpg') center / cover no-repeat;
  }

  &.bcg-uv {
    background: url('@/assets/images/uv-rays/background.jpg') center / cover no-repeat;
  }

  &.bcg-finish {
    background: url('@/assets/images/finish/background.jpg') center / cover no-repeat;
  }
}
</style>
