<template>
  <section class="main-cards">
    <card-image class="main-cards__card" text="пигмент<br /><span>и кожа</span>" @click="$emit('toggleStep', 3)">
      <div class="main-cards__circle"><span>I</span></div>
    </card-image>

    <card-image
      :text="cardNum < 2 ? '' : 'экспертиза<br /><span>La Roche-Posay</span>'"
      class="main-cards__card"
      :class="{ 'main-cards__card_closed': cardNum < 2 }"
      @click="$emit('toggleStep', 9)"
    >
      <span v-if="cardNum < 2" class="main-cards__number">II</span>
      <div v-else class="main-cards__circle"><span>II</span></div>
    </card-image>

    <card-image
      :text="cardNum < 3 ? '' : 'инновация<br /><span>NIACINAMIDE 10</span>'"
      class="main-cards__card"
      :class="{ 'main-cards__card_closed': cardNum < 3 }"
      :is-product="cardNum === 3"
      @click="$emit('toggleStep', 12)"
    >
      <span v-if="cardNum < 3" class="main-cards__number">III</span>
      <div v-else class="main-cards__circle"><span>III</span></div>
    </card-image>
  </section>
</template>

<script setup>
import CardImage from '@/components/UI/CardImage.vue'

defineProps({
  cardNum: {
    type: Number,
    default: 1
  }
})

defineEmits(['toggleStep'])
</script>

<style lang="scss" scoped>
$white: $WHITE;
$violet: $VIOLET;
$blue: $BLUE;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;

.main {
  &-cards {
    display: grid;
    flex-grow: 1;
    min-width: 100%;
    min-height: 100%;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    @media (min-width: 1550px) {
      gap: 10rem;
    }

    @media (min-width: 768px) and (max-width: 1549px) {
      gap: 5rem;
    }

    @include mobile {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 2rem;
    }

    &__card {
      width: 100%;
      max-width: 50.7rem;
      max-height: 100rem;
      border-radius: 7rem;

      &_closed {
        background:
          url('@/assets/icons/logo.svg') bottom 8.9rem center / 57.4% auto no-repeat,
          url('@/assets/images/main-stages/stage_closed.webp') center / cover no-repeat;
        pointer-events: none;

        &:deep(.card-image__wrapper) {
          border: none;
        }
      }

      &:deep(.card-image__wrapper) {
        flex-direction: column;
        border-radius: 7rem;
      }

      &:not(&_closed) {
        cursor: pointer;

        &:first-child {
          background: url('@/assets/images/main-stages/stage_1.webp') center / cover no-repeat;
        }

        &:nth-child(2) {
          background: url('@/assets/images/main-stages/stage_2.webp') center / cover no-repeat;
        }

        &:last-child:deep(.card-image__product) {
          @include desktop {
            width: 57.5%;
          }
        }
      }
    }

    &__number {
      margin-bottom: 4.8rem;
      color: $white;
      font-family: $fontDefaultLight;
      font-size: 20rem;
      line-height: 90%;
      text-transform: uppercase;
    }

    &__circle {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.4rem solid $white;
      border-radius: 50%;
      background-color: $blue;

      @media (min-width: 1440px) {
        top: 1.5rem;
        left: 1.5rem;
        width: 14rem;
        height: 14rem;
      }

      @media (min-width: 1024px) and (max-width: 1439px) {
        top: 1.2rem;
        left: 1.2rem;
        width: 12rem;
        height: 12rem;
      }

      @include mobile-tablet {
        top: 2.5rem;
        left: 2.5rem;
        width: 7rem;
        height: 7rem;
      }

      span {
        color: $white;
        font-family: $fontDefaultLight;
        font-size: 7.2rem;
        letter-spacing: 0.144rem;
        line-height: 90%;
        text-transform: uppercase;
        @include adaptive-font(7.2, 4);
      }
    }
  }
}
</style>
