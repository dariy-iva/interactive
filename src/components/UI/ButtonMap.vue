<template>
  <div class="map-container">
    <button type="button" class="button-map" @click.prevent="$emit('click')">
      <img src="@/assets/icons/map.svg" alt="" class="button-map__image" />
      <img src="@/assets/icons/map-hover.svg" alt="" class="button-map__image-hover" />
    </button>
  </div>
</template>

<script setup>
defineEmits(['click'])
</script>

<style scoped lang="scss">
@keyframes translate {
  from {
    translate: 100%;
  }
  to {
    translate: 0;
  }
}

.map-container {
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  display: flex;
  overflow: hidden;
}

.button-map {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: none;
  background: none;
  transition: all 0.5s ease;
  cursor: pointer;
  animation: translate 0.5s 1;

  @include tablet-desktop {
    width: 10.1rem;
    height: 10rem;
    border-radius: 0 0 0 3rem;
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
    background-image: url('@/assets/icons/map-ellipse.svg');
    background-size: cover;
    content: '';
    object-fit: cover;
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

      .map__image {
        display: none;
      }

      .map__image-hover {
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-hover {
      display: none;
    }
  }
}
</style>
