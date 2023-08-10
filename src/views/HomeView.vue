<script setup lang="ts">
import { ref, onMounted } from "vue";
import imagemVazio from '../assets/vazioTudoCerto.svg'
import { eventsData } from '../services/data'
const events = ref({});
// TODO: enteder aqui, como fazer essa identificação
// vindo da api
const nextEvents = ref([1, 2]);
var onBoard = ref(false)

function editEvent(event: any) {
  console.log(event);
}

const futureEvents = [];

onMounted(() => {
  const today = new Date();
  if(today.getDay !== events.dataInicio) {
    console.log('evento nao é hoje')
    futureEvents.push(events)
  }
  
})

onMounted(()=>{
  if(getPrimeiroAcesso() == null){
    onBoard.value = true
    setPrimeiroAcesso()
  }else{
    onBoard.value = false
  }
})

function fecharOnBoard() {
  onBoard.value = false
}

function setPrimeiroAcesso() {
  try {
    window.localStorage.setItem('app_gestao_eventos', 'true')
  } catch {
    return false
  }
}

function getPrimeiroAcesso() {
  try {
    return localStorage.getItem('app_gestao_eventos')
  } catch {
    return false
  }
}
</script>
<template>
  <div>
    <s-nav-bar v-if="!onBoard" titulo="Gestão de eventos" />

    <div v-if="onBoard">
      <SSwiperOnBoard :fechar-on-board="fecharOnBoard" />
    </div>

    <s-container v-if="!onBoard" class="s-home-container">
      <h4>Eventos</h4>

      <!-- Página Vazia -->
      <s-card v-if="events.length === 0 && nextEvents.length === 0">
        <s-vazio
          :imagem="imagemVazio"
          :titulo="'Parece que você não tem mais nenhum evento confirmado na agenda'"
          class="s-home-vazio-container"
        />
      </s-card>

      <s-card
        v-if="events.length > 0 || nextEvents.length > 0"
        class="turmas-lista-status"
      >
        <div v-if="events.length > 0">
          <div class="h7-link">Em andamento</div>
          <div class="turmas-container">
            <SCardTurma
              :key="events.id"
              :turma="events.titulo"
              :disciplina="'Rua Euclides Miragaia, Centro - São José dos Campos'"
              :hora-inicial="events.horaInicio"
              :hora-final="'17:30'"
              @click="editEvent(event)"
            />
          </div>
        </div>

        <div v-if="nextEvents.length > 0">
          <div class="h7">Próximas</div>

          <div class="turmas-container">
            <div class="h7">14/08/2023</div>
            <SCardTurma
              :key="1"
              :turma="'Evento dia dos pais'"
              :disciplina="'Escola Liceu'"
              :hora-inicial="'10:30'"
              :hora-final="''"
              variant="secondary"
              @click="editEvent(event)"
            />
          </div>
        </div>
      </s-card>
      <s-button-menu label="Todos os eventos" @click="$router.push('/event/all')"/>
      <s-button-menu label="Criar evento" variant="primary-green" @click="$router.push('/event')"/>
    </s-container>
  </div>
</template>
<style scoped>
.s-home-container {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  row-gap: 8px;
}

.s-home-container h4 {
  margin-bottom: 0;
}

h5 {
  text-align: center;
}
</style>
