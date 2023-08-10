<script setup lang="ts">
import { vMaska } from "maska";
import { ref, reactive} from "vue";
import { Close } from "@element-plus/icons-vue";

const nome = ref("");
const cpf = ref("");
const email = ref("");

const pessoas = reactive([{nome:"",cpf:""}])
const numMaxPessoas = ref(4)

function addPessoa() {
  if (pessoas.length >= numMaxPessoas.value) {
    return
  } else {
    pessoas.push({ nome: "", cpf: "" })
  }
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
  <div class="page-container">
    <s-container>
      <s-card class="card-container">
        <div class="titles">
          <h2>Hackathon Sophia+byLayers</h2>
          <h4>Confirmação de presença</h4>
        </div>
        <div v-for="(pessoa,index) in pessoas" :key="index">
            <div>
            <div :style="{display:'flex',justifyContent:'space-between',alignItems:'center'}">
                <p>Pessoa {{ index+1 }}</p>
                <el-button v-if="endHourVisible.valueOf()" id="cancel" @click="closeHour">
                <el-icon>
                    <Close />
                </el-icon>
                </el-button>
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
        <div class="btn-users" v-if="pessoas.length < numMaxPessoas.value">
          <s-button label="cadastrar outros participantes" variant="info" @click="addPessoa()"/>
        </div>
        <h6>Enviaremos os acessos para o e-mail:</h6>
        <s-input v-model="email" />
      </s-card>
    </s-container>
    <div class="send-button">
      <s-button-menu
        label="Salvar e confirmar"
        variant="primary-green"
        @click="
          () => {
            console.log(form);
          }
        "
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
  text-align: initial;
}

#cancel {
  background-color: white;
  border: 1px solid #98a1a8;
  color: #98a1a8;
  width: 40px;
}
</style>
