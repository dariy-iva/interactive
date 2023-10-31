<template>
  <section class="components">
    <img
      src="@/assets/images/product/product_with-shadow.webp"
      class="components__product"
      alt="Фотография продукта LA ROCHE-POSAY Pure Niacinamide 10"
    />

    <div class="components__content">
      <div class="components__column">
        <h2 class="components__column-title">Уменьшение пигментации</h2>

        <div class="components__cards">
          <block-ingredient
            title="Ниацинамид 10%"
            :paragraphs="[
              'Регулирует транспортировку <br />меланина к поверхности кожи',
              'Уменьшает размер и выраженность пигментных пятен',
              'Препятствует их повторному появлению'
            ]"
            number="I"
            type="niacinamide"
            @click="$emit('toggleStep', stepNum + 1)"
          />

          <block-ingredient
            title="Фе-резорцинол <br />0,5%"
            :paragraphs="['Регулирует выработку меланина']"
            number="2"
            type="resorcinol"
            @click="$emit('toggleStep', stepNum + 2)"
          />
        </div>
      </div>

      <div class="components__column">
        <h2 class="components__column-title">Выравнивание рельефа</h2>

        <div class="components__cards">
          <block-ingredient
            title="5% Хепес"
            :paragraphs="['Запускает процессы обновления кожи', 'Выравнивает рельеф кожи']"
            number="3"
            type="hepes"
            align="right"
            @click="$emit('toggleStep', stepNum + 3)"
          />

          <block-ingredient
            title="Гиалуроновая кислота"
            :paragraphs="['Поддерживает кожный барьер, повышает упругость и эластичность кожи']"
            number="4"
            type="hyaluronic"
            align="right"
            @click="$emit('toggleStep', stepNum + 4)"
          />
        </div>
      </div>
    </div>

    <block-pagination class="components__navigation" @toggle-step="toggleStep">
      <div class="components__navigation-buttons">
        <span class="components__navigation-line"></span>
        <button type="button" class="components__navigation-button" @click="toggleStep(13)">I</button>
        <span class="components__navigation-line"></span>
        <button type="button" class="components__navigation-button" @click="toggleStep(14)">2</button>
        <span class="components__navigation-line"></span>
        <button type="button" class="components__navigation-button" @click="toggleStep(15)">3</button>
        <span class="components__navigation-line"></span>
        <button type="button" class="components__navigation-button" @click="toggleStep(16)">4</button>
        <span class="components__navigation-line"></span>
      </div>
    </block-pagination>
  </section>
</template>

<script setup>
import BlockIngredient from '@/components/blocks/ingredient/BlockIngredient.vue'
import BlockPagination from '@/components/UI/BlockPagination.vue'

defineProps({
  stepNum: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['toggleStep'])

function toggleStep(step) {
  emits('toggleStep', step)
}
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;
$fontDefault: $FONT_DEFAULT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

.components {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include desktop {
    margin-top: -13rem;
    gap: 8.7rem;
  }

  @include mobile-tablet {
    gap: 3rem;
  }

  &__product {
    max-height: 75%;
    object-position: center;
    object-fit: contain;

    @media (min-width: 1440px) {
      width: 28.4rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 20rem;
    }

    @include tablet-desktop {
      position: absolute;
    }

    @include mobile {
      width: 100%;
      max-height: 30rem;
    }
  }

  &__content {
    flex-grow: 1;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    justify-content: space-between;
    gap: 5rem;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    max-width: 65.2rem;
    gap: 4.7rem;

    @include desktop {
      &:last-of-type {
        justify-self: end;
      }
    }

    @include mobile {
      margin: 0 auto;
    }
  }

  &__column-title {
    color: $white;
    font-family: $fontDefaultBold;
    line-height: 100%;
    text-transform: uppercase;
    @include adaptive-font(3, 1.4);

    @include mobile {
      text-align: center;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;

    @include tablet-desktop {
      gap: 6.4rem;
    }

    @include mobile {
      gap: 3rem;
    }
  }

  &__navigation {
    z-index: 1;
    width: 100%;
    gap: 3rem;
  }

  &__navigation-buttons {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include desktop {
      gap: 3rem;
    }

    @include mobile {
      display: none;
    }
  }

  &__navigation-line {
    display: inline-block;
    width: 100%;
    height: 0.4rem;
    background-color: $white;

    @media (min-width: 1440px) {
      max-width: 12.1rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      max-width: 5rem;
    }

    @include mobile-tablet {
      display: none;
    }
  }

  &__navigation-button {
    display: flex;
    padding: 1.5rem 3.2rem;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3rem;
    background: none;
    color: $white;
    font-family: $fontDefault;
    line-height: 100%;
    text-transform: uppercase;
    transition: all 0.2s ease;
    cursor: pointer;
    @include adaptive-font(5.2, 3.2);

    @include desktop {
      margin-bottom: -1rem;
    }

    &:hover {
      @include desktop {
        background: rgba(0, 159, 227, 50%);
      }
    }
  }
}
</style>
