<script setup lang="ts">
import OnBoardSlideA from "./on-board/app-escolas/OnBoardSlideA.vue";
import OnBoardSlideB from "./on-board/app-escolas/OnBoardSlideB.vue";
import OnBoardSlideC from "./on-board/app-escolas/OnBoardSlideC.vue";
import OnBoardSlideD from "./on-board/app-escolas/OnBoardSlideD.vue";
import OnBoardSlideE from "./on-board/app-escolas/OnBoardSlideE.vue";
defineProps<{
  fecharOnBoard?: () => void;
}>();

const slides = [
  OnBoardSlideA,
  OnBoardSlideB,
  OnBoardSlideC,
  OnBoardSlideD,
  OnBoardSlideE,
];
</script>
;

<template>
  <SSwiperOnBoard :fechar-on-board="fecharOnBoard" :slides="slides" />
</template>
