<script setup lang="ts">
import celular from '../../../assets/on-board/app-escolas/celular_evento.png'

const itens = ["Gerar um evento", "Criar um comunicado ", "Enviar para os responsáveis"]
</script>

<template>
  <div class="on-board-slide-c">
    <header>
      <div class="texto-imagem-container">
        <div class="imagem-seta-container">
          <h2>Tudo em um clique</h2>
        </div>

        <div class="h7">
          Em “Criar Evento” é possível:
        </div>
        <OnBoardItem
          v-for="(item, index) in itens"
          :key="index"
          :texto="item"
        />
      </div>
      <div class="imagem-celular-container">
        <img
          :src="celular"
          class="imagem-celular"
        >
      </div>
    </header>
  </div>
</template>

<style scoped>
.on-board-slide-c {
  display: grid;
  gap: 48px;
  margin-bottom: 60px;
}

header {
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 110px;
}

.texto-imagem-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  gap: 8px;
  margin-left: 48px;
}

.imagem-seta-container {
  position: relative;
}

.imagem-seta {
  width: 45px;
  position: absolute;
  top: -40px;
  right: 0px;
}

.imagem-celular-container {
  display: flex;
  justify-content: end;
}

.imagem-celular {
  width: 100%;
}

h2 {
  margin-bottom: 8px;
  margin-top: 0;
}

@media (max-width: 576px) {
  .imagem-celular-container {
    width: 180%;
  }
}
</style>