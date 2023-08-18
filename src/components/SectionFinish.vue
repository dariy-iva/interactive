<template>
  <section class="finish-section">
    <img src="@/assets/icons/logo.svg" alt="Логотип LA ROCHE POSAY" class="finish-logo" />
    <span class="finish-sticker">Отлично!</span>
    <p class="finish-text">
      ТЕПЕРЬ ВЫ ЗНАЕТЕ<br />
      О ПИГМЕНТАЦИИ БОЛЬШЕ, <br />А <span>NIACINAMIDE I0</span><br />
      ПОЗАБОТИТСЯ О ВАШЕЙ <br />КРАСОТЕ В ЛЮБОМ СЛУЧАЕ
    </p>
  </section>
</template>

<style lang="scss" scoped>
$white: $WHITE;
$blue: $BLUE;
$black: $BLACK;
$gray: $GRAY;

.finish {
  &-section {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5rem;
    color: $white;
    font-family: GillSans;
    text-transform: uppercase;

    @media (min-width: 1440px) {
      margin-top: 3.3rem;
    }

    @include desktop {
      justify-content: space-between;
    }
  }

  &-logo {
    object-fit: cover;

    @include desktop {
      margin-left: 6.2rem;
    }

    @media (min-width: 1440px) {
      width: 49rem;
      margin-bottom: 2.7rem;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 41rem;
    }

    @include mobile {
      width: 30rem;
    }
  }

  &-sticker {
    background-color: $blue;
    @include adaptive-font(11.7, 6.8);
    line-height: 100%;

    @media (min-width: 1440px) {
      padding: 4.2rem 10rem 1.7rem 11.8rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
      padding: 2rem 8.2rem 0 11.8rem;
    }

    @include desktop {
      margin-left: -10rem;
    }

    @include tablet {
      padding-top: 2rem;
      padding-left: 5rem;
      width: 80%;
      margin-left: -5rem;
    }

    @include mobile {
      padding-top: 2rem;
      width: 100%;
      margin-left: -2rem;
    }
  }

  &-text {
    letter-spacing: 0.096rem;
    line-height: 130%;
    @include adaptive-font(4.8, 3.1);

    margin-bottom: -1.7rem;

    @include desktop {
      padding-left: 1.4rem;
    }

    span {
      font-family: 'GillSans Bold';
      @include adaptive-font(6.4, 4);
      letter-spacing: 0.128rem;
      line-height: 120%;
      letter-spacing: 0.41rem;
    }
  }
}
</style>
