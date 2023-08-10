<script setup lang="ts">
import celular from '@/assets/onBoard/slideB/celular.svg'
</script>

<template>
  <div class="on-board-slide-b">
    <div class="on-board-container">
      <h2>Tranquilidade para pais e responsáveis</h2>
      <h6>Receba notificações, em tempo real, saiba quando o aluno entrou e saiu da escola.</h6>
      <div class="celular-image">
        <img :src="celular" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.on-board-slide-b {
  margin-top: 110px;
  display: grid;
  margin-bottom: auto;
}

.on-board-container {
  display: flex;
  flex-direction: column;
}

h2 {
  padding: 0 16px;
}

h6 {
  color: var(--grey-70);
  padding: 0 16px;
}

.celular-image {
    margin-top: 32px;
    position: relative;
    bottom: 0;
}

.celular-image img {
    height: 40vh;
  }

@media (max-width: 300px) {
  .celular-image img {
    width: 80vw;
  }
}

@media (min-width: 1200px) {
  .celular-image img {
    height: 60vh;
  }
}
</style>
