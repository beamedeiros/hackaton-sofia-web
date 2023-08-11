<script setup lang="ts">
import { ref } from "vue";
import { Calendar, Clock, Location, Document } from "@element-plus/icons-vue";
import maybeImg from "../../assets/maybe.svg";

const maybeRes = ref(false);

function maybe() {
  maybeRes.value = true;
}
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

  <div v-if="maybeRes" style="padding: 32px">
    <s-vazio
      :imagem="maybeImg"
      :titulo="'Em dúvida?'"
      class="s-home-vazio-container"
    />
    <p>
      Sua resposta foi enviada, mas caso <span>mude de ideia</span>, o evento
      <span>ficará disponível</span> na sua <span>agenda</span>!
    </p>
    <s-button-menu
      label="Voltar para a tela inicial"
      :border-radius="4"
      :padding="8"
      variant="primary-green"
      class="next-button"
      @click="() => {
        $router.push('/note')
      }"
    />
  </div>
  <s-container v-if="!maybeRes">
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
          brilhantes em Rua Euclides Miragaia, 433 - Centro e concorra a prêmios incríveis. Inscreva-se até
          31/07/2023.
        </h5>
      </div>
      <div class="confirm-container">
        <div class="detail-container">
        </div>
        <div class="options">
          <s-button
            label="Editar"
            size="default"
          />
          <s-button label="Excluir" variant="danger" size="default" />
        </div>
      </div>
    </s-card>
  </s-container>
</template>
<style scoped>
#h2-img {
  color: #405261;
}
.confirm-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.maybe-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}
.maybe-img img {
  width: 20vw;
}

span {
  font-weight: 700;
}

p {
  font-weight: 200;
  text-align: center;
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
