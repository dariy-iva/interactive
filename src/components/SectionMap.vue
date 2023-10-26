<template>
  <section class="map-section">
    <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="map-section__logo" />

    <h1 class="map-section__title">Карта пигментации</h1>

    <block-map @on-step="onStepClick" />
  </section>
</template>

<script setup>
import BlockMap from '@/components/blocks/map/BlockMap.vue'

const props = defineProps(['lastStep'])

const emits = defineEmits(['toggleStep'])

function onStepClick(step) {
  if (+step > props.lastStep + 1) return

  emits('toggleStep', step)
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;

.map-section {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 700px;
  min-height: 100vh;
  position: relative;
  padding-top: 22.4rem;
  padding-bottom: 18rem;
  overflow-x: hidden;

  &__logo {
    position: absolute;
    top: 0;
    left: 44.6rem;
    width: 29.1rem;
    background-size: contain;

    @media (max-width: 1550px) {
      left: 10rem;
      max-width: 215px;
    }
  }

  &__title {
    position: absolute;
    top: 6.5rem;
    right: 8.6rem;
    color: $white;
    font-family: $fontDefaultLight;
    font-size: 7rem;
    line-height: 100%;
    text-transform: uppercase;

    @include tablet {
      top: 7.5rem;
      right: 5rem;
      font-size: 4rem;
    }

    @include mobile {
      top: 8.5rem;
      right: 2rem;
      font-size: 2.5rem;
    }
  }
}
</style>
