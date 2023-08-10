<script setup lang="ts">
import onBoardSlideA from './on-board/app-escolas/OnBoardSlideA.vue'

defineProps<{
  fecharOnBoard?: () => void
}>()

const slides = [onBoardSlideA]
</script>

<template>
  <SSwiperOnBoard :fechar-on-board="fecharOnBoard" :slides="slides" />
</template>
