<template>
  <div class="container">
    <button type="button" class="button-map" @click.prevent="$emit('click')">
      <span class="button-map__icon" />
    </button>
  </div>
</template>

<script setup>
defineEmits(['click'])
</script>

<style scoped lang="scss">
$white: $WHITE;

@keyframes translate {
  from {
    translate: 100%;
  }
  to {
    translate: 0;
  }
}

.container {
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  display: flex;
  overflow: hidden;
}

.button-map {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0 0 0 3rem;
  border-top: none;
  border-right: none;
  border-left: 0.2rem solid $white;
  border-bottom: 0.2rem solid $white;
  background: none;
  cursor: pointer;
  animation: translate 0.5s 1;
  transition: all 0.5s ease;

  @media (min-width: 1921px) {
    border-bottom-right-radius: 3rem;
    border-right: 0.2rem solid $white;
  }

  @include desktop {
    width: 10rem;
    height: 10rem;
  }

  @include tablet {
    width: 8rem;
    height: 8rem;
  }

  @include mobile {
    width: 7rem;
    height: 7rem;
    border-radius: 0 0 0 2rem;
  }

  &::before {
    position: absolute;
    z-index: -1;
    top: -6.25rem;
    left: -2.9rem;
    width: 16.2rem;
    height: 23rem;
    background: url('@/assets/icons/map/map_hovered.svg') center / cover no-repeat;
    content: '';
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s ease;
  }

  &:hover {
    @include desktop {
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &__icon {
    display: block;
    width: 5rem;
    height: 5rem;
    background: url('@/assets/icons/map/map.svg') center / contain no-repeat;
  }
}
</style>
