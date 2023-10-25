<template>
  <div class="map">
    <div class="map__line">
      <button type="button" class="map__step map__step_size_large map__step_num_1" @click="onStepClick(2)">
        старт
        <span class="map__step-hover" />
      </button>

      <button type="button" class="map__step map__step_size_normal map__step_num_2" @click="onStepClick(2)">
        <span class="map__step-num">I</span>
        <span class="map__step-hover" />
        <span class="map__step-text"><span>пигмент</span> и кожа</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_3"
        @click="onStepClick(3)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">гипер<span>пигментация</span></span>
      </button>

      <button type="button" class="map__step map__step_size_small map__step_num_4" @click="onStepClick(4)">
        <span class="map__step-hover" />
        <span class="map__step-text map__step-text_align_right">актиническое <br />лентиго</span>
      </button>
    </div>

    <div class="map__line">
      <button type="button" class="map__step map__step_size_normal map__step_num_8" @click="onStepClick(8)">
        <span class="map__step-num">II</span>
        <span class="map__step-hover" />
        <span class="map__step-text">экспертиза<br />la&nbsp;roche&#8209;posay</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_7"
        @click="onStepClick(7)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">что внутри?</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_6"
        @click="onStepClick(6)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">поствоспалительная <br />гиперпигментация</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_5"
        @click="onStepClick(5)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">мелазма/ <br /><span>хлоазма</span></span>
      </button>
    </div>

    <div class="map__line">
      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_9"
        @click="onStepClick(9)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">воспаление<br />и&nbsp;гиперпигментация</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_10"
        @click="onStepClick(10)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">лечение</span>
      </button>

      <button type="button" class="map__step map__step_size_normal map__step_num_11" @click="onStepClick(11)">
        <span class="map__step-num">III</span>
        <span class="map__step-hover" />
        <span class="map__step-text map__step-text_align_right">инновация<br />NIACINAMIDE&nbsp;10</span>
      </button>
    </div>
    <div class="map__line">
      <button type="button" class="map__step map__step_size_small map__step_num_18" @click="onStepClick(18)">
        <span class="map__step-hover"></span>
        <span class="map__step-text map__step-text_align_left">действие<br /><span>продукта</span></span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_17"
        @click="onStepClick(17)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text map__step-text_align_top">формула <br />продукта</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_16"
        @click="onStepClick(16)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">гиалуроновая<br />кислота</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_15"
        @click="onStepClick(15)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">HEPES</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_14"
        @click="onStepClick(14)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">ФЕ-РЕЗОРЦИНОЛ</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_13"
        @click="onStepClick(13)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">ниациамид</span>
      </button>

      <button type="button" class="map__step map__step_size_small map__step_num_12" @click="onStepClick(12)">
        <span class="map__step-hover" />
        <span class="map__step-text map__step-text_align_right">активные<br />компоненты</span>
      </button>
    </div>
    <div class="map__line">
      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_19"
        @click="onStepClick(19)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">
          результаты,<br />
          <span>подтвержденные<br />потребителями</span>
        </span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_20"
        @click="onStepClick(20)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">
          результаты,<br />
          <span>доказанная <br />эффективность</span>
        </span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_21"
        @click="onStepClick(21)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">для<br />кого?</span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_22"
        @click="onStepClick(22)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">комплексная <br /><span>рекомендация</span></span>
      </button>

      <button
        type="button"
        class="map__step map__step_centered map__step_size_small map__step_num_23"
        @click="onStepClick(23)"
      >
        <span class="map__step-hover" />
        <span class="map__step-text">об УФ&#8209;лучах</span>
      </button>

      <button class="map__step map__step_centered map__step_size_small map__step_num_24" @click="onStepClick(24)">
        <span class="map__step-hover" />
        <span class="map__step-text">против <br />всех видов <br />пигментации</span>
      </button>

      <button type="button" class="map__step map__step_size_large map__step_num_25" @click="onStepClick(25)">
        финиш
        <span class="map__step-hover" />
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['onStep'])

function onStepClick(step) {
  emits('onStep', step)
}
</script>

<style scoped lang="scss">
$white: $WHITE;
$blue: $BLUE;
$fontDefault: $FONT_DEFAULT;
$fontDefaultLight: $FONT_DEFAULT_LIGHT;
$fontDefaultBold: $FONT_DEFAULT_BOLD;

.map {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 10 / 4.15;
  flex-direction: column;
  background: url('@/assets/images/map/way.png') center / cover no-repeat;

  @media (min-width: 1920px) {
    height: 79.6rem;
  }

  @media (min-width: 1550px) {
    padding-left: 13.4rem;
    padding-right: 6.1rem;
  }

  @media (max-width: 1549px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  &__line {
    position: relative;

    &:not(:first-of-type) {
      @media (min-width: 1920px) {
        padding-top: 9.6rem;
      }
      @media (min-width: 701px) and (max-width: 1919px) {
        padding-top: 5vw;
      }
      @media (max-width: 700px) {
        padding-top: 35px;
      }
    }

    &:not(:last-of-type) {
      @media (min-width: 1920px) {
        padding-bottom: 9.6rem;
      }
      @media (min-width: 701px) and (max-width: 1919px) {
        padding-bottom: 5vw;
      }
      @media (max-width: 700px) {
        padding-bottom: 35px;
      }
    }
  }

  &__step {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.3s;

    &_centered {
      @media (min-width: 1920px){
        top: -3rem;
      }
      @media (max-width: 1919px){
        top: -1.5vw;
      }
    }

    &_size_large {
      z-index: 2;
      border: none;
      background: url('@/assets/icons/map/cloud-inverted.svg') center / contain no-repeat;
      color: $white;
      font-family: $fontDefault;
      line-height: 6rem;

      @media (min-width: 1550px) {
        font-size: 4.3rem;
      }

      @media (min-width: 1024px) and (max-width: 1549px) {
        font-size: 3.5rem;
      }

      @include tablet {
        font-size: 2.2rem;
      }

      @include mobile {
        font-size: 1.8rem;
      }
    }

    &_size_normal {
      border: none;
      min-width: 82px;
      aspect-ratio: 10 / 6.18;
      background: url('@/assets/icons/map/cloud.svg') transparent center / cover no-repeat;
      color: $white;
      font-family: $fontDefaultLight;
      line-height: 100%;

      @media (min-width: 1920px) {
        width: 225px;
      }

      @media (max-width: 1920px) {
        width: 11.72vw;
      }

      @media (min-width: 1551px) {
        font-size: 7.2rem;
      }

      @media (max-width: 1550px) {
        font-size: 4rem;
      }

      @include tablet {
        font-size: 3rem;
      }

      @include mobile {
        font-size: 2rem;
      }
    }

    &_size_small {
      min-width: 21px;
      aspect-ratio: 1 / 1;
      border: none;
      background: none;

      @media (min-width: 1920px) {
        width: 5.8rem;
      }

      @media (max-width: 1920px) {
        width: 3.02vw;
      }
    }

    &_num {
      &_1 {
        left: 0;
        min-width: 128px;
        aspect-ratio: 10 / 6.03;

        @media (min-width: 1920px) {
          top: -10rem;
          width: 33rem;
        }

        @media (max-width: 1920px) {
          width: 17.19vw;
        }

        @media (min-width: 701px) and (max-width: 1919px){
          top: -5.2vw;
        }

        @media (max-width: 700px) {
          top: -36px;
        }

        &::after {
          position: absolute;
          min-width: 3rem;
          aspect-ratio: 10 / 13.25;
          background-image: url('@/assets/images/map/crystal.png');
          background-repeat: no-repeat;
          background-size: cover;
          content: '';

          @media (min-width: 1920px) {
            top: -30px;
            left: 110px;
            width: 7.7rem;
          }

          @media (max-width: 1919px) {
            width: 4vw;
          }

          @media (min-width: 701px) and (max-width: 1919px) {
            top: -1.8vw;
            left: 5.73vw;
          }

          @media (max-width: 700px) {
            top: -12px;
            left: 43px;
          }
        }
      }

      &_2 {
        @media (min-width: 1920px) {
          top: -8rem;
          left: 53rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          left: 27.66vw;
        }
        @media (max-width: 1549px) {
          left: 29.03vw;
        }
        @media (min-width: 701px) and (max-width: 1919px) {
          top: -3.59vw;
        }
        @media (max-width: 700px) {
          top: -26px;
          left: 203px;
        }
      }

      &_3 {
        @media (min-width: 1920px) {
          left: 95rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          left: 48.91vw;
        }
        @media (max-width: 1549px) {
          left: 53.28vw;
        }
        @media (max-width: 700px) {
          left: 373px;
        }
      }

      &_4 {
        @media (min-width: 1920px) {
          left: 122rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          left: 62.4vw;
        }
        @media (min-width: 1024px) and (max-width: 1549px) {
          left: 66.77vw;
        }
        @media (min-width: 701px) and (max-width: 1023px) {
          left: 64vw;
        }
        @media (min-width: 701px) {
          top: -0.73vw;
        }
        @media (max-width: 700px) {
          top: -5px;
          left: 448px;
        }
      }

      &_5 {
        @media (min-width: 1920px) {
          top: 6rem;
          left: 120rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 3.5vw;
          left: 62.4vw;
        }
        @media (min-width: 1024px) and (max-width: 1549px) {
          top: 3.5vw;
          left: 66.77vw;
        }
        @media (min-width: 701px) and (max-width: 1023px) {
          top: 2.3vw;
          left: 65vw;
        }
        @media (max-width: 700px) {
          top: 15px;
          left: 456px;
        }
      }

      &_6 {
        @media (min-width: 1920px) {
          top: 6.3rem;
          left: 88rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 3.5vw;
          left: 45.73vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 3.5vw;
          left: 50.1vw;
        }
        @media (max-width: 700px) {
          top: 25px;
          left: 351px;
        }
      }

      &_7 {
        @media (min-width: 1920px) {
          top: 6.3rem;
          left: 55rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          left: 29.01vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          left: 33.39vw;
        }
        @media (min-width: 701px) and (max-width: 1919px) {
          top: 3.5vw;
        }
        @media (max-width: 700px) {
          top: 25px;
          left: 233px;
        }
      }

      &_8 {
        @media (min-width: 1920px) {
          top: 13rem;
          left: 23rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 7vw;
          left: 11.86vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 7vw;
          left: 16.25vw;
        }
        @media (max-width: 700px) {
          top: 48px;
          left: 113px;
        }
      }

      &_9 {
        @media (min-width: 1920px) {
          top: 8.5rem;
          left: 61rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 31.88vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 36.25vw;
        }
        @media (max-width: 700px) {
          top: 32px;
          left: 254px;
        }
      }

      &_10 {
        @media (min-width: 1920px) {
          top: 8.5rem;
          left: 90rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 46.77vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 51.15vw;
        }
        @media (max-width: 700px) {
          top: 32px;
          left: 359px;
        }
      }

      &_11 {
        @media (min-width: 1920px) {
          top: 4rem;
          left: 106rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 2vw;
          left: 54.9vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 2vw;
          left: 59.27vw;
        }
        @media (max-width: 700px) {
          top: 14px;
          left: 416px;
        }
      }

      &_12 {
        @media (min-width: 1920px) {
          top: 3.2rem;
          left: 125rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 1.6vw;
          left: 64.55vw;
        }
        @media (min-width: 1024px) and (max-width: 1549px) {
          top: 1.6vw;
          left: 68.42vw;
        }
        @media (min-width: 851px) and (max-width: 1023px) {
          top: 1.6vw;
          left: 66.5vw;
        }
        @media (min-width: 701px) and (max-width: 850px) {
          top: 1vw;
          left: 65.5vw;
        }
        @media (max-width: 700px) {
          top: 8px;
          left: 463px;
        }
      }

      &_13 {
        @media (min-width: 1920px) {
          top: 9rem;
          left: 112rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 58.54vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 62.92vw;
        }
        @media (max-width: 700px) {
          top: 31px;
          left: 429px;
        }
      }

      &_14 {
        @media (min-width: 1920px) {
          top: 9rem;
          left: 84rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 43.75vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 48.13vw;
        }
        @media (max-width: 700px) {
          top: 31px;
          left: 337px;
        }
      }

      &_15 {
        @media (min-width: 1920px) {
          top: 9rem;
          left: 61rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 31.86vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 36.25vw;
        }
        @media (max-width: 700px) {
          top: 31px;
          left: 254px;
        }
      }

      &_16 {
        @media (min-width: 1920px) {
          top: 9rem;
          left: 39rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 20.68vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 25.05vw;
        }
        @media (max-width: 700px) {
          top: 31px;
          left: 173px;
        }
      }

      &_17 {
        @media (min-width: 1920px) {
          top: 9rem;
          left: 18rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.5vw;
          left: 9.27vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.5vw;
          left: 13.65vw;
        }
        @media (max-width: 700px) {
          top: 31px;
          left: 95px;
        }
      }

      &_18 {
        @media (min-width: 1920px) {
          top: 18.5rem;
          left: 6rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 9.5vw;
          left: 3.08vw;
        }
        @media (min-width: 1024px) and (max-width: 1549px) {
          top: 9.5vw;
          left: 6.86vw;
        }
        @media (min-width: 851px) and (max-width: 1023px) {
          top: 9.5vw;
          left: 5.06vw;
        }
        @media (min-width: 701px) and (max-width: 850px) {
          top: 9.5vw;
          left: 4vw;
        }
        @media (max-width: 700px) {
          top: 66px;
          left: 30px;
        }
      }

      &_19 {
        @media (min-width: 1920px) {
          top: 9.5rem;
          left: 19rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.8vw;
          left: 9.64vw;
        }
        @media (min-width: 1024px) and (max-width: 1549px) {
          top: 4.8vw;
          left: 14.01vw;
        }
        @media (min-width: 701px) and (max-width: 1023px) {
          top: 4.8vw;
          left: 11.11vw;
        }
        @media (max-width: 700px) {
          top: 34px;
          left: 77px;
        }
      }

      &_20 {
        @media (min-width: 1920px) {
          top: 9.5rem;
          left: 44rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.8vw;
          left: 22.76vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.8vw;
          left: 27.14vw;
        }
        @media (max-width: 700px) {
          top: 34px;
          left: 190px;
        }
      }

      &_21 {
        @media (min-width: 1920px) {
          top: 9.5rem;
          left: 64rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.8vw;
          left: 33.44vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.8vw;
          left: 37.81vw;
        }
        @media (max-width: 700px) {
          top: 34px;
          left: 264px;
        }
      }

      &_22 {
        @media (min-width: 1920px) {
          top: 9.5rem;
          left: 84rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.8vw;
          left: 44.22vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.8vw;
          left: 48.59vw;
        }
        @media (max-width: 700px) {
          top: 34px;
          left: 340px;
        }
      }

      &_23 {
        @media (min-width: 1920px) {
          top: 9.5rem;
          left: 109rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.8vw;
          left: 56.82vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.8vw;
          left: 61.2vw;
        }
        @media (max-width: 700px) {
          top: 34px;
          left: 424px;
        }
      }

      &_24 {
        @media (min-width: 1920px) {
          top: 9.5rem;
          left: 131rem;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          top: 4.8vw;
          left: 68.23vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          top: 4.8vw;
          left: 72.6vw;
        }
        @media (max-width: 700px) {
          top: 34px;
          left: 508px;
        }
      }

      &_25 {
        min-width: 95px;
        aspect-ratio: 10 / 6.24;

        @media (min-width: 1920px) {
          top: 5rem;
          left: 143rem;
          width: 28.2rem;
        }
        @media (max-width: 1919px) {
          width: 14.69vw;
        }
        @media (min-width: 1550px) and (max-width: 1919px) {
          left: 74.9vw;
        }
        @media (min-width: 701px) and (max-width: 1549px) {
          left: 77.27vw;
        }
        @media (min-width: 701px) and (max-width: 1919px) {
          top: 2.5vw;
        }
        @media (max-width: 700px) {
          top: 17px;
          right: -40px;
          left: auto;
        }
      }
    }
  }

  &__step-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s;
  }

  &__step_size_large > &__step-hover {
    display: block;
    background: url('@/assets/icons/map/cloud-inverted_hovered.png') top 32% left -8% / 112% no-repeat;
    rotate: -3deg;
    content: '';
    opacity: 0;
  }

  &__step_size_large:hover > &__step-hover,
  &__step_size_normal:hover > &__step-hover {
    @include desktop {
      opacity: 1;
    }
  }

  &__step_size_normal > &__step-hover {
    top: 0;
    left: 0;
    background: url('@/assets/icons/map/cloud-hover.svg') top 30% left 43% / 135% no-repeat;
    opacity: 0;
  }

  &__step_size_small > &__step-hover {
    content: '';
    border-radius: 50%;
    background-color: $blue;

    @include tablet-desktop {
      border: 0.4rem solid $white;
    }

    @include mobile {
      border: 0.2rem solid $white;
    }
  }

  &__step_size_small:hover {
    @include desktop {
      & > .map__step-hover {
        border: 1.6rem solid $white;
      }

      & > .map__step-text {
        opacity: 1;
      }
    }
  }

  &__step-num {
    z-index: 1;
  }

  &__step-text {
    position: absolute;
    color: $white;
    font-family: $fontDefaultBold;
    text-align: center;
    text-transform: uppercase;
    pointer-events: none;
    cursor: default;

    @media (min-width: 1551px) {
      width: max-content;
    }

    &_align_top {
      @include desktop {
        bottom: calc(100% + 2rem);
      }

      @include mobile-tablet {
        bottom: calc(100% + 0.8rem);
      }
    }

    &_align_right {
      left: calc(100% + 2rem);
      text-align: start;
    }

    &_align_left {
      @media (min-width: 1551px) {
        right: calc(100% + 2rem);
        text-align: end;
      }

      @media (min-width: 1024px) and (max-width: 1550px) {
        top: calc(100% + 2rem);
        text-align: center;
      }

      @include mobile-tablet {
        top: calc(100% + 0.8rem);
      }
    }

    & > span {
      font-family: $fontDefault;
    }
  }

  &__step_centered > &__step-text:not(&__step-text_align_top) {
    @include desktop {
      top: calc(100% + 2rem);
    }

    @include mobile-tablet {
      top: calc(100% + 0.8rem);
    }
  }

  &__step_size_normal > &__step-text {
    &:not(.map__step-text_align_right) {
      top: calc(100% + 0.8rem);
    }

    @media (min-width: 1551px) {
      font-size: 2.8rem;
      line-height: 3.7rem;
    }

    @media (max-width: 1550px) {
      line-height: 100%;
    }

    @media (min-width: 1024px) and (max-width: 1550px) {
      font-size: 2.2rem;
    }

    @include mobile-tablet {
      font-size: 1.3rem;
    }
  }

  &__step_size_small > &__step-text {
    line-height: 100%;
    opacity: 0.7;
    transition: 0.3s;

    @media (min-width: 1551px) {
      font-size: 2.3rem;
    }

    @media (min-width: 1024px) and (max-width: 1550px) {
      font-size: 1.8rem;
    }

    @include mobile-tablet {
      font-size: 1.1rem;
    }
  }
}
</style>
