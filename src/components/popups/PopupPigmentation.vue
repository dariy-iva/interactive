<template>
  <base-popup :is-open="isOpen" @close="$emit('close')">
    <p v-for="(text, index) in paragraphs" :key="`paragraph-${index}`" v-html="text" class="popup-text" />
  </base-popup>
</template>

<script setup>
import BasePopup from '@/components/UI/BasePopup.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  paragraphs: {
    type: Array,
    default: []
  }
})

defineEmits(['close'])
</script>

<style scoped lang="scss">
$white: $WHITE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultExtraBold: $FONT_DEFAULT_EXTRA_BOLD;

.popup-text {
  color: $white;
  font-family: $fontDefault;
  line-height: 125%;
  @include adaptive-font(2.6, 1.9);

  &:deep(strong) {
    font-family: $fontDefaultExtraBold;
  }

  &:deep(ul) {
    list-style-type: disc;
    list-style-position: inside;
    padding-left: 1rem;
  }
}
</style>
