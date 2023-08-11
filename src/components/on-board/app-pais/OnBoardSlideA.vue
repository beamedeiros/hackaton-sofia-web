<script setup lang="ts">
import icone from '../../../assets/icone.svg'
</script>

<template>
  <div class="on-board-slide-a">
    <div class="on-board-logo">
      <img :src="icone" alt=""/>
      <h3>Bem-vindo ao aplicativo Gestão de Eventos!</h3>
    </div>
  </div>
</template>

<style scoped>
.on-board-slide-a {
  margin-top: 120px;
  display: grid;
  min-height: 650px;
}

h3 {
  margin: 48px 60px;
  text-align: center;
}

.on-board-logo {
  margin: 72px auto;
}
</style>