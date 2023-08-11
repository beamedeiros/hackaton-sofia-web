<script setup lang="ts">
import { vMaska } from "maska";
import { ref, reactive } from "vue";
import { Close } from "@element-plus/icons-vue";
import succesImg from "../../assets/success.svg"

const email = ref("");
const closeVisible = ref(false);
const successRes = ref(false);

const pessoas = reactive([{ nome: "", cpf: "" }]);
const numMaxPessoas = ref(4);

function success() {
  successRes.value = true;
}

function addPessoa() {
  if (pessoas.length >= numMaxPessoas.value) {
    return;
  } else {
    pessoas.push({ nome: "", cpf: "" });
    closeVisible.value = true;
  }
}

function close() {
  closeVisible.value = false;
}
</script>
<template>
  <s-nav-bar
    titulo="Comunicado"
    :voltar="
      () => {
        $router.back();
      }
    "
  />
  <div v-if="successRes" style="padding: 32px">
    <s-vazio
      :imagem="succesImg"
      :titulo="'Sucesso!'"
      class="s-home-vazio-container"
    />
    <p>
      Sua presença no evento <span>Hackathon Sophia+byLayers </span> foi confirmada!
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
  <div class="page-container" v-if="!successRes">
    <s-container>
      <s-card class="card-container">
        <div class="titles">
          <h2>Hackathon Sophia+byLayers</h2>
          <h4>Confirmação de presença</h4>
        </div>
        <div v-for="(pessoa, index) in pessoas" :key="index">
          <div>
            <div
              :style="{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }"
            >
              <p>Pessoa {{ index + 1 }}</p>
              <el-button
                v-if="closeVisible.valueOf()"
                id="cancel"
                @click="close"
                ><el-icon><Close /></el-icon
              ></el-button>
            </div>
            <div>
              <h6>Nome</h6>
              <s-input placeholder="Escreva aqui :)" v-model="pessoa.nome" />
              <h6>CPF</h6>
              <s-input
                placeholder="000.000.000-00"
                v-maska
                data-maska="###.###.###-##"
                type="number"
                v-model="pessoa.cpf"
              />
            </div>
          </div>
        </div>
        <div class="btn-users" v-if="pessoas.length < numMaxPessoas.valueOf()">
          <s-button
            label="cadastrar outros participantes"
            @click="addPessoa()"
          />
        </div>
        <h6>Enviaremos os acessos para o e-mail:</h6>
        <s-input v-model="email" />
      </s-card>
    </s-container>
    <div class="send-button">
      <s-button-menu
        label="Salvar e confirmar"
        variant="primary-green"
        @click="success"
      />
    </div>
  </div>
</template>
<style scoped>
.send-button {
  position: sticky;
  bottom: 0;
  padding: 16px;
  background-color: white;
}

.page-container {
  height: 100vh;
}

.btn-users {
  display: flex;
  margin-bottom: 16px;
}

h2 {
  color: #00b8ad;
  margin-bottom: 24px;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  text-align: center;
}

span {
  color: #00b8ad;
  font-weight: 700;
}

#cancel {
  background-color: white;
  border: 1px solid #98a1a8;
  color: #98a1a8;
  width: 40px;
}
</style>
