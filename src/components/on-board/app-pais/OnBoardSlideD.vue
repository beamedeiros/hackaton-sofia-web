<script setup lang="ts">
import comunicado from "../../../assets/on-board/app-escolas/comunicado.svg";
</script>

<template>
  <div class="on-board-slide-d">
    <div class="on-board-container">
      <h2>
        Gere os comunicados utilizando <br /><span>Inteligência Artificial</span
        >!
      </h2>
      <div class="on-board-content">
        <img :src="comunicado" alt="" class="comunicado" />
        
      </div>
      <h6>Proporcionando mais tempo para priorizar outras atividades</h6>
    </div>
  </div>
</template>

<style scoped>
.on-board-slide-d {
  margin-top: 110px;
  display: grid;
  margin-bottom: auto;
}

h2 {
  font-weight: 100;
}

span {
  font-weight: 700;
}
.on-board-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

.comunicado {
  width: 100vw;
  height: 40vh;
  padding-left: 36px;
}

.tempo {
  width: 40vw;
  position: absolute;
}

h6 {
  color: var(--grey-70);
  text-align: left;
  padding: 0 36px;
}
</style>
