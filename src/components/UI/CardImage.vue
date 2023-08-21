<template>
  <div class="card-image" :class="{ 'card-image_with-product': isProduct }">
    <div class="card-image__wrapper">
      <img
        v-if="isProduct"
        src="@/assets/images/product/product.png"
        srcset="@/assets/images/product/product.png"
        class="card-image__product"
        alt="Фотография продукта LA ROCHE-POSAY Pure Niacinamide 10"
      />

      <div v-if="text" class="card-image__text" v-html="text" />
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isProduct: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
$white: $WHITE;
$blue: $BLUE;

.card-image {
  position: relative;
  width: auto;
  max-width: 60.7rem;
  height: auto;
  max-height: 100%;
  min-height: 60rem;
  padding: 1.5rem;
  border-radius: 5rem;
  box-shadow: -0.5rem 2rem 3rem 0 rgba(0, 0, 0, 60%);
  aspect-ratio: 10 / 16.47;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  &_with-product {
    background-image: url('@/assets/images/product/product-bcg.png');
    background-position: bottom;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4.5rem;
    border: 0.4rem solid $white;
  }

  &__product {
    position: absolute;
    bottom: 0;
    width: 38.22%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;

    @include mobile-tablet {
      width: 70%;
    }
  }

  &__text {
    position: absolute;
    z-index: 3;
    bottom: 8.3rem;
    width: 100%;
    padding: 2.2rem 0;
    background-color: $blue;
    color: $white;
    font-family: GillSans;
    font-size: 3.2rem;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(3.2, 2);

    &:deep(span) {
      font-family: 'GillSans Bold';
    }
  }
}
</style>
