<template>
  <section class="inside-section">
    <h2 class="title">Что <span>внутри?</span></h2>
    <div class="inside-content">
      <div class="inside-cards">
        <div class="inside-card inside-card-1">
          <span class="inside-card__title">МЕЛАНОЦИТ</span>
          <p class="inside-card__text">пигментная клетка <br />кожи функция: <br />защита</p>
        </div>
        <div class="inside-card inside-card-2">
          <span class="inside-card__title">МЕЛАНОСОМА</span>
          <p class="inside-card__text">гранула <br />с меланином <br />мигрирует <br />в кератиноцит</p>
        </div>
        <div class="inside-card inside-card-3">
          <span class="inside-card__title">ОКРАШЕННЫЙ <br />КЕРАТИНОЦИТ</span>
          <p class="inside-card__text">защищен <br />от агрессии <br />продвигается <br />к поверхности кожи</p>
        </div>
      </div>
      <div class="inside-info">
        <div class="inside-info-paragraph">
          <p>
            КОЛИЧЕСТВО<br />
            МЕЛАНОЦИТОВ<br />
            У ВСЕХ ЛЮДЕЙ<br />
            <span>ОДИНАКОВОЕ</span>
          </p>
        </div>
        <div class="inside-info-paragraph">
          <span>ПИГМЕНТАЦИЯ <br />ФИЗИОЛОГИЧЕСКАЯ</span>
          <ul class="inside-info-paragraph-list">
            <li>фототип</li>
            <li>эфелиды</li>
          </ul>
        </div>
        <div class="inside-info-paragraph">
          <span>ПАТОЛОГИЧЕСКАЯ</span>
          <ul class="inside-info-paragraph-list">
            <li>лентиго</li>
            <li>мелазма</li>
            <li>после воспаления</li>
          </ul>
        </div>
      </div>
    </div>

    <button-default text="Далее" class="button-next" @click="$emit('toggleStep')" />
  </section>
</template>

<script setup>
import ButtonDefault from '@/components/ButtonDefault.vue'

defineEmits(['toggleStep'])
</script>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;

.button {
  &-next {
    position: absolute;
    @media (min-width: 1440px) {
      right: 10rem;
      bottom: 10rem;
    }

    @media (max-width: 1439px) {
      right: 10rem;
      bottom: 10rem;
    }

    @include tablet {
      right: 5rem;
      bottom: 7rem;
    }

    @include mobile {
      position: initial;
      margin-top: 3rem;
    }
  }
}

.title {
  color: $white;
  font-family: 'GillSans Light';
  @include adaptive-font(8, 5);
  line-height: 100%;
  text-transform: uppercase;

  span {
    font-family: 'GillSans ExtraBold';
  }
}

.inside {
  &-section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      justify-content: end;
    }
  }

  &-content {
    display: flex;
    justify-content: space-between;
    margin-top: 6.7rem;
    gap: 4rem;

    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  &-cards {
    flex-grow: 1;
    display: flex;
    max-width: 126.5rem;
    justify-content: space-between;
    gap: 3rem;

    @include mobile {
      flex-wrap: wrap;
    }
  }

  &-card {
    width: 100%;
    max-width: 35.5rem;
    aspect-ratio: 10 / 21.1;
    background-size: cover;

    @media (min-width: 1440px) {
      padding: 5rem 0 0 5rem;
      border-radius: 3.1rem;
    }

    @media (max-width: 1439px) {
      padding: 3rem 0 0 3rem;
      border-radius: 2.5rem;
    }

    &-1 {
      background-image: url('@/assets/images/inside/card-background-1.jpg');
    }

    &-2 {
      background-image: url('@/assets/images/inside/card-background-2.jpg');
    }

    &-3 {
      background-image: url('@/assets/images/inside/card-background-3.jpg');
    }

    &__title {
      color: $white;
      font-family: 'GillSans Bold';
      @include adaptive-font(3, 1.9);
      line-height: 100%;
      text-transform: uppercase;
    }

    &__text {
      //height: 100%;
      margin-top: 3rem;
      color: $white;
      font-family: GillSans;
      @include adaptive-font(3, 1.9);
      line-height: 100%;
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover &__text {
      opacity: 1;
    }
  }

  &-info {
    display: flex;
    width: 20.64%;
    flex-direction: column;
    row-gap: 8rem;

    @media (max-width: 850px) {
      display: grid;
      min-width: 100%;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    &-paragraph {
      color: $white;
      font-family: GillSans;
      @include adaptive-font(3, 1.9);
      line-height: 110%;

      @include mobile {
        font-size: 1.4rem;
      }

      p {
        text-transform: uppercase;
      }

      span {
        font-family: 'GillSans Bold';
      }

      &-list {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
