<template>
  <div class="popup-overlay" :class="{ opened: isOpen }" @click.self="$emit('close')">
    <div class="popup">
      <button class="close-button" @click="$emit('close')" />

      <div class="popup__content">
        <p v-text="text" class="popup__text" />
        <button-default :text="buttonText" class="popup__submit" @click="$emit('close')" />
      </div>
    </div>
  </div>
</template>

<script  setup>
import { watch } from 'vue';
import ButtonDefault from '@/components/UI/ButtonDefault.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['close'])

watch(() => props.isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
},
  { immediate: true }
)
</script>

<style scoped lang="scss">
$blue: $BLUE;
$white: $WHITE;

.popup-overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-y: scroll;
  backdrop-filter: blur(5px);
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;

  &::-webkit-scrollbar {
    display: none;
  }

  &.opened {
    visibility: visible;
    opacity: 1;
  }

  @include mobile-tablet {
    padding: 0 2rem;
  }
}

.popup {
  position: relative;
  display: flex;
  padding: 1.9rem 1.6rem;
  flex-direction: column;
  border-radius: 4rem;
  margin: auto;
  background-color: $white;
  border: 0.2rem solid $blue;
  transition: 0.3s;

  @include desktop {
    width: 78rem;

    &:hover {
      background-color: $blue;

      .close-button {
        top: 4.8rem;
        background-color: $white;
        opacity: 0.7;
      }

      .popup__text {
        color: $white;
      }

      & .popup__submit {
        color: $blue;
        background-color: $white;
      }
    }
  }

  @include mobile-tablet {
    width: 100%;
    max-width: 78rem;
  }

  .close-button {
    position: absolute;
    border: none;
    cursor: pointer;
    mask: url("@/assets/icons/popups/cross.svg") center / cover no-repeat;
    -webkit-mask: url("@/assets/icons/popups/cross.svg") center / cover no-repeat;
    background-color: black;
    opacity: 0.5;
    transition: all 0.3s ease;

    @include tablet-desktop {
      top: 4rem;
      right: 4.8rem;
      width: 4rem;
      height: 4rem;
    }

    @include mobile {
      top: 3rem;
      right: 1.6rem;
      width: 2rem;
      height: 2rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 21.9rem 0 3rem;
    border-radius: 4rem;
    border: 0.4rem solid $white;
    gap: 11.9rem;
  }

  &__text {
    color: $blue;
    font-family: GillSans;
    font-weight: 700;
    line-height: 100%;
    transition: 0.3s;
    text-align: center;
    @include adaptive-font(7, 4.5);
  }

  & &__submit {
    padding: 1.2rem 2.5rem;
    @include adaptive-font(4, 2.5);
  }
}
</style>
