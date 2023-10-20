<template>
  <base-popup :is-open="isOpen" @close="$emit('close')">
    <p class="popup-text">
      <span class="big">МЕЛАЗМА ИЛИ ХЛОАЗМА</span> — это приобретенная светло- или темно-коричневая гиперпигментация,
      возникающая на участках, подвергающихся воздействию солнца, чаще всего на лице.
    </p>
    <div class="popup-text popup-list">
      <p>ПРИЧИНЫ:</p>
      <ul>
        <li class="popup__item"><span></span>солнечный свет (обострение при солнечном воздействии);</li>
        <li class="popup__item">
          <span></span>генетические факторы беременность (именно поэтому мелазму иногда называют «маской беременности»);
        </li>
        <li class="popup__item"><span></span>эстрогены и оральные контрацептивы;</li>
        <li class="popup__item"><span></span>дисфункция щитовидной железы;</li>
        <li class="popup__item"><span></span>препараты, повышающие фоточувствительность.</li>
      </ul>
    </div>
    <p class="popup-text">Более подвержены женщины темных фототипов (IV–VI).</p>
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
