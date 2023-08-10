<script setup lang="ts">
import { ref } from "vue";
import { Calendar, Clock, Location, Document } from "@element-plus/icons-vue";

const events = ref([1]);
</script>

<template>
  
  <s-nav-bar
    titulo="Comunicado"
    :voltar="
      () => {
        $router.push('/note');
      }
    "
  />
  <s-container>
    <s-card>
      <h2>Hackathon Sophia+byLayers</h2>
      <div class="date-container">
        <div class="detail-container">
          <el-icon><Calendar /></el-icon>
          <h4>Data</h4>
        </div>
        <h5>11/08/2023</h5>
      </div>
      <div class="clock-container">
        <div class="detail-container">
          <el-icon><Clock /></el-icon>
          <h4>Horário</h4>
        </div>
        <h5>08:00 às 17:30</h5>
      </div>
      <div class="local-container">
        <div class="detail-container">
          <el-icon><Location /></el-icon>
          <h4>Local</h4>
        </div>
        <h5>Rua Euclides Miragaia, 433 - Centro</h5>
      </div>
      <div class="desc-container">
        <div class="detail-container">
          <el-icon><Document /></el-icon>
          <h4>Descrição</h4>
        </div>
        <h5>
          Participe do Hackathon Sophia+byLayers! Uma maratona criativa para
          desenvolver soluções tecnológicas inovadoras. Junte-se a mentes
          brilhantes em [local] e concorra a prêmios incríveis. Inscreva-se até
          [data].
        </h5>
      </div>
      <div class="confirm-container">
        <div class="detail-container">
          <h4>Confirmar presença?</h4>
        </div>
        <div class="options">
          <s-button
            label="Sim"
            variant="success"
            size="default"
            @click="
              () => {
                $router.push('/note/formUser');
              }
            "
          />
          <s-button label="Talvez" size="default" />
          <s-button label="Não" variant="danger" size="default" />
        </div>
      </div>
    </s-card>
  </s-container>
</template>
<style scoped>
.confirm-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.options {
  display: flex;
  gap: 16px;
}

h2 {
  color: #00b8ad;
  margin-bottom: 24px;
}

h4 {
  color: #405261;
}

h5 {
  margin-bottom: 24px;
  text-align: left;
}

.detail-container {
  display: flex;
  gap: 8px;
}

.detail-container .el-icon {
  color: #405261;
  font-size: 20px;
}
</style>
