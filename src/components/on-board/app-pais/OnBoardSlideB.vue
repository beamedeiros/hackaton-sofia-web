<script setup lang="ts">
import celular from '../../../assets/on-board/celular.png'
</script>

<template>
  <div class="on-board-slide-b">
    <div class="on-board-container">
      <h2>Fácil acesso à eventos</h2>
      <h6>Você conseguirá visualizar na sua agenda os seus principais eventos! </h6>
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
  height: 80vh;
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
    position: fixed;
    bottom: 0;
}

</style>
