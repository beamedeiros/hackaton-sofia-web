<script setup lang="ts">
import celular from '../../../assets/on-board/app-pais/celular.png'

const itens = ["Visualizar os detalhes do evento", "Confirmar presença"]
</script>

<template>
  <div class="on-board-slide-c">
    <header>
      <div class="texto-imagem-container">
          <h2>Se programe para eventos</h2>

        <div class="h7">
          Em “Comunicados” é possível:
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