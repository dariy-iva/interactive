<template>
  <div class="popup" :class="{ popup_opened: isOpen }">
    <button type="button" class="close" @click="$emit('close')">
      <img src="@/assets/icons/popups/cross.svg" alt="cross" />
    </button>
    <div class="popup-content">
      <slot />
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

.close {
  width: 4.3rem;
  height: 4.3rem;
  margin-left: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  @include mobile {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    @include desktop {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
  }
}

.popup {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 95.4rem;
  height: 100%;
  max-height: 100%;
  padding: 10rem;
  backdrop-filter: blur(50px);
  background: linear-gradient(90deg, rgba(39, 8, 63, 90%) 0%, rgba(5, 15, 52, 70%) 100%);
  gap: 4rem;
  transition: 0.4s ease;
  overflow-y: auto;

  &:not(&_opened) {
    width: 0;
    opacity: 0;
    visibility: hidden;
  }

  &_opened {
    min-width: 55rem;

    @include tablet-desktop {
      width: 49.69%;
    }
    @include mobile {
      width: 100%;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
  }
}
</style>
