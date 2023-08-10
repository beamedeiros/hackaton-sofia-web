<script setup lang="ts">
import celular from '@/assets/onBoard/slideC/celulares.svg'
</script>

<template>
  <div class="on-board-slide-c">
    <div class="on-board-container">
      <h2>Você também pode acompanhar as movimentações diretamente pelo app</h2>
      <h6>
        Em Controle de acesso, basta selecionar um aluno clicando em “Consultar” para verificar os
        detalhes da movimentação. Navegue pelo calendário para consultar outras datas.
      </h6>
      <div class="celular-image">
        <img :src="celular" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.on-board-slide-c {
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
  padding: 0 32px;
  text-align: justify;
}

.celular-image {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
}

.celular-image img {
  height: 40vh;
}

@media (max-width: 576px) {
  h2 {
    font-size: 18px;
  }
}

@media (max-width: 300px) {
  .celular-image img {
    width: 80vw;
  }

  h2 {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  h6 {
    padding: 0 160px;
    text-align: center;
  }

  .celular-image img {
    height: 60vh;
  }
}
</style>
