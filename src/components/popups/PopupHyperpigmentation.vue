<template>
  <base-popup :is-open="isOpen" @close="$emit('close')">
    <p class="popup-text">
      Она особенно часто встречается у людей с высоким фототипом и вызвана повреждением дермо-эпидермального соединения.
    </p>
    <p class="popup-text">
      Сообщается, что ПВГ является вторым по значимости дерматологическим диагнозом среди представителей
      афроамериканского населения — до 20% диагнозов (Alexis, Sergay, & Taylor, 2007).
    </p>
    <p class="popup-text">
      Распространенность ПВГ также высока среди латиноамериканского населения и составляет от 6 до 7,5% (Sanchez, 2003).
    </p>
  </base-popup>
</template>

<script setup>
import BasePopup from '@/components/BasePopup.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
$white: $WHITE;

.popup-text {
  color: $white;
  font-family: GillSans;
  @include adaptive-font(3, 1.9);
  line-height: 130%;

  span {
    font-family: 'GillSans ExtraBold';

    &.big {
      text-transform: uppercase;
    }
  }
}
</style>
