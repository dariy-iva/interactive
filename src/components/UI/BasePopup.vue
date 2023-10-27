<template>
  <div class="popup-overlay" :class="{ 'popup-overlay_opened': isOpen }" @click.self="$emit('close')">
    <div class="popup" :class="{ popup_opened: isOpen }">
      <button type="button" class="popup__close" @click="$emit('close')" />

      <div class="popup__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

watch(
  () => props.isOpen,
  (value) => {
    document.body.style.overflow = value ? 'hidden' : 'inherit'
  }
)
</script>

<style scoped lang="scss">
$white: $WHITE;

.popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  translate: -100%;
  transition: 0.4s;
  backdrop-filter: blur(5px);

  &_opened {
    translate: 0;
    visibility: visible;
    opacity: 1;
  }
}

.popup {
  display: grid;
  justify-content: center;
  max-width: 95.4rem;
  height: 100%;
  max-height: 100%;
  backdrop-filter: blur(50px);
  background: linear-gradient(90deg, rgba(39, 8, 63, 90%) 0%, rgba(5, 15, 52, 90%) 100%);
  gap: 4rem;
  overflow-y: auto;

  @include tablet-desktop {
    width: 49.69%;
    min-width: 55rem;
    padding: 10rem;
  }
  @include mobile {
    width: 100%;
    padding: 2rem;
  }

  &__close {
    margin-left: auto;
    margin-top: auto;
    border: none;
    background: url('@/assets/icons/cross.svg') center / cover no-repeat;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s ease;

    @include tablet-desktop {
      width: 4.3rem;
      height: 4.3rem;
    }

    @include mobile {
      width: 3rem;
      height: 3rem;
    }

    &:hover {
      @include desktop {
        opacity: 1;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
  }
}
</style>
