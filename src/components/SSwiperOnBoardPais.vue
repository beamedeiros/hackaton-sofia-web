<script setup lang="ts">
import OnBoardSlideA from "./on-board/app-pais/OnBoardSlideA.vue";
import OnBoardSlideB from "./on-board/app-pais/OnBoardSlideB.vue";
import OnBoardSlideC from "./on-board/app-pais/OnBoardSlideC.vue";
import OnBoardSlideD from "./on-board/app-pais/OnBoardSlideD.vue";
import OnBoardSlideE from "./on-board/app-pais/OnBoardSlideE.vue";
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
