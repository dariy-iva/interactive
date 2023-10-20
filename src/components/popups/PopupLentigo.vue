<template>
  <base-popup :is-open="isOpen" @close="$emit('close')">
    <p class="popup-text"><span class="big">Солнечное лентиго</span> — это плоское, четко очерченное пятно.</p>
    <p class="popup-text">
      Оно может быть круглой, овальной или неправильной формы, а цвет может варьироваться от тона кожи, загара до
      темно-коричневого или черного. Размер — от нескольких миллиметров до нескольких сантиметров в диаметре. Пятна
      могут слегка шелушиться.
    </p>
    <p class="popup-text">
      Наиболее эффективной профилактикой является
      <span>ограничение солнечного воздействия и использование солнцезащитных средств.</span>
    </p>
    <p class="popup-text">
      В качестве лечения можно использовать <span>криотерапию, лазер или третиноиновый крем.</span>
    </p>
  </base-popup>
</template>

<script setup>
import BasePopup from '@/components/UI/BasePopup.vue'

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
$fontDefault: $FONT_DEFAULT;
$fontDefaultExtraBold: $FONT_DEFAULT_EXTRA_BOLD;

.popup-text {
  color: $white;
  font-family: $fontDefault;
  @include adaptive-font(3, 1.9);
  line-height: 130%;

  span {
    font-family: $fontDefaultExtraBold;

    &.big {
      text-transform: uppercase;
    }
  }
}
</style>
