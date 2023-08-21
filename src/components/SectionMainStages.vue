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
      <template v-if="cardNum < 2">
        <span class="main-cards__number">II</span>
        <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="main-cards__logo" />
      </template>

      <template v-else>
        <div class="main-cards__circle"><span>II</span></div>
      </template>
    </card-image>

    <card-image
      :text="cardNum < 3 ? '' : 'ИННОВАЦИЯ<br /><span>NIACINAMIDE 10</span>'"
      class="main-cards__card"
      :class="{ 'main-cards__card_closed': cardNum < 3 }"
      :is-product="cardNum === 3"
      @click="$emit('toggleStep', 12)"
    >
      <template v-if="cardNum < 3">
        <span class="main-cards__number">III</span>
        <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="main-cards__logo" />
      </template>

      <template v-else>
        <div class="main-cards__circle"><span>III</span></div>
      </template>
    </card-image>
  </section>
</template>

<script setup>
import ButtonMap from '@/components/UI/ButtonMap.vue'
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

.main {
  &-cards {
    display: grid;
    flex-grow: 1;
    min-width: 100%;
    min-height: 100%;
    grid-template-columns: repeat(3, 1fr);

    @media (min-width: 1550px) {
      gap: 10rem;
    }

    @media (max-width: 1549px) {
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
      aspect-ratio: auto;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      &_closed {
        background-image: url('@/assets/images/main-stages/card-background.jpg');
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
          background-image: url('@/assets/images/main-stages/background-card-1.jpg');
        }

        &:nth-child(2) {
          background-image: url('@/assets/images/main-stages/background-card-2.jpg');
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
      font-family: 'GillSans Light';
      font-size: 20rem;
      line-height: 90%;
      text-transform: uppercase;
    }

    &__logo {
      position: absolute;
      bottom: 8.9rem;
      width: 100%;
      max-width: 29.1rem;
      aspect-ratio: 10 / 2.58;
      object-fit: cover;
      margin: 0 1.5rem;
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

      @media (max-width: 1439px) {
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
        font-family: 'GillSans Light';
        font-size: 7.2rem;
        letter-spacing: 0.144rem;
        line-height: 90%;
        text-transform: uppercase;

        @include mobile-tablet {
          font-size: 4rem;
        }
      }
    }
  }
}
</style>
