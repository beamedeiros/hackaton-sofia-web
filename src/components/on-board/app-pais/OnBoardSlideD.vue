<script setup lang="ts">
import email from "../../../assets/on-board/app-pais/email.svg";
import celularForm from "../../../assets/on-board/app-pais/celular_form.png";
</script>

<template>
  <div class="on-board-slide-d">
    <div class="on-board-container">
      <div class="on-board-title">
        <img :src="email" class="tempo-image" />
        <h2>Cadastre convidados para o evento!</h2>
      </div>
      <div class="on-board-content">
        <div class="itens-container">
          <h4>
            Receba um e-mail com os ingressos de todos os participantes
            confirmados!
          </h4>
        </div>
        <div class="celular-image">
          <img :src="celularForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.on-board-slide-d {
  margin-top: 110px;
  display: grid;
  /* margin-bottom: auto; */
}

.on-board-container {
  display: grid;
  padding: 0 25px;
}

.on-board-title {
  display: flex;
  justify-content: center;
}

.tempo-image {
  position: absolute;
  left: 0;
  top: 56px;
}

h2 {
  text-align: left;
  padding: 0 16px;
}

h4{
  text-align: left;
  padding-left: 56px;
}

.on-board-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-right: -25px;
}

.itens-container {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  margin-top: 30%;
  gap: 16px;
}

.celular-image {
  display: flex;
  margin-top: auto;
}

@media (min-width: 1200px) {
  h4 {
    padding-left: 329px;
  }
}
</style>
