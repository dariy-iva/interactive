<template>
  <main
    class="main"
    :class="{
      'main-wrapper': step !== 1,
      'main-wrapper_large': step === 0 || step === 2 || step === 8 || step === 11,
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
    <transition-group name="fade">
      <button-back v-if="backText" :text="backText" @click="toggleStep(-1)" />
      <button-map v-if="step !== 0 && step !== 1" @click="toggleStep(1)" />
      <block-navigation v-if="step > 11 && step < 25" :step-num="step" @toggle-step="toggleStep" />

      <section-start v-if="step === 0" key="step-0" @next="toggleStep" />
      <section-map v-if="step === 1" key="step-1" @toggle-step="toggleStep" />
      <section-main-stages
        v-if="step === 2 || step === 8 || step === 11"
        key="step-2-8-11"
        :card-num="step === 2 ? 1 : step === 8 ? 2 : 3"
        @toggleStep="toggleStep"
      />
      <section-hyper-pigmentation v-if="step === 3" key="step-3" @toggleStep="toggleStep" />
      <section-pigment-stages v-if="step > 3 && step < 7" key="step-4-6" :step-num="step" @toggleStep="toggleStep" />
      <section-inside v-if="step === 7" key="step-7" @toggleStep="toggleStep" />
      <section-inflammation v-if="step === 9" key="step-8" @toggleStep="toggleStep" />
      <section-protection v-if="step === 10" key="step-9" />
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

      <block-pagination
        v-if="(step > 3 && step < 7) || step === 10 || step > 17"
        :step-num="step"
        @toggle-step="toggleStep"
      />
    </transition-group>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import ButtonMap from '@/components/ButtonMap.vue'
import ButtonBack from '@/components/ButtonBack.vue'
import BlockNavigation from '@/components/BlockNavigation.vue'
import BlockPagination from '@/components/BlockPagination.vue'
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

const step = ref(0)

const backText = computed(() => {
  switch (+step.value) {
    case 3:
      return 'Назад <span>к разделам</span>'
    case 4:
      return 'Пигмент <span>и кожа</span>'
    case 5:
      return 'Пигмент <span>и кожа</span>'
    case 6:
      return 'Пигмент <span>и кожа</span>'
    case 7:
      return 'Пигмент <span>и кожа</span>'
    case 9:
      return 'Назад <span>к разделам</span>'
    case 10:
      return 'Назад <span>к разделам</span>'
    case 12:
      return 'Назад <span>к разделам</span>'
    case 13:
      return 'ИННОВАЦИЯ NIACINAMIDE 10'
    case 14:
      return 'ИННОВАЦИЯ NIACINAMIDE 10'
    case 15:
      return 'ИННОВАЦИЯ NIACINAMIDE 10'
    case 16:
      return 'ИННОВАЦИЯ NIACINAMIDE 10'
    case 17:
      return 'Назад <span>к разделам</span>'
    case 18:
      return 'Назад <span>к разделам</span>'
    case 19:
      return 'Назад <span>к разделам</span>'
    case 20:
      return 'Назад <span>к разделам</span>'
    case 21:
      return 'Назад <span>к разделам</span>'
    case 22:
      return 'Назад <span>к разделам</span>'
    case 23:
      return 'Назад <span>к разделам</span>'
    case 24:
      return 'Назад <span>к разделам</span>'
    case 25:
      return 'Назад <span>к разделам</span>'
    default:
      return ''
  }
})

function toggleStep(stepNum = null) {
  console.log(stepNum)
  step.value = +stepNum === -1 ? step.value - 1 : stepNum || step.value + 1
}
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
