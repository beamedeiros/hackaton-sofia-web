<script setup lang="ts">
import { reactive } from "vue";
import { Location, Link, Notification } from "@element-plus/icons-vue";
import { ElNotification } from 'element-plus'
import { createEvent as createEventService, type Event, generateDescriptionWithAI } from '../../services/data'
import CalendarForm from "../../components/CalendarForm.vue";
import HorarioForm from "../../components/HorarioForm.vue";
import PriceForm from "../../components/PriceForm.vue";
import LimitForm from "../../components/LimitForm.vue";
const form = reactive<Event>({});


function createSuccessEvent(event: Event) {
  ElNotification({
    title: 'Evento Criado com Sucesso!',
    type: 'success',
  })

  createEventService(event);
}

</script>

<template>
  <s-nav-bar
    titulo="Criar evento"
    :voltar="
      () => {
        $router.push('/');
      }
    "
  />
  <div class="page-container">
    <s-container>
      <s-card :style="{ marginBottom: '16px' }">
        <div>
          <label class="formLabel">Título</label>
          <s-input
            v-model="form.titulo"
            size="large"
            placeholder="Escreva aqui :)"
          ></s-input>
        </div>
        <CalendarForm
          @newInit="
            (value) => {
              form.dataInicio = value;
            }
          "
          @newEnd="
            (value) => {
              form.dataFim = value;
            }
          "
        />
        <HorarioForm
          @newInit="
            (value) => {
              form.horaInicio = value;
            }
          "
          @newEnd="
            (value) => {
              form.horaFim = value;
            }
          "
        />
        <PriceForm
          @newInit="
            (value) => {
              form.preco = value;
            }
          "
          style="margin-bottom: 4px"
        />
        <LimitForm
          @newInit="
            (value) => {
              form.limiteConvidados = value;
            }
          "
        />
        <div style="margin-top: 8px">
          <label class="formLabel">Local</label>
          <s-input
            v-model="form.local"
            placeholder="Digite o endereço"
            :prefix-icon="Location"
          />
        </div>
        <div
          :style="{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }"
        >
          <label class="formLabel">Gerar comunicado com IA</label>
          <!-- esse aqui vai ser foda -->
          <s-switch v-model="form.descricao" @click="async () => {
            const { titulo, local, dataInicio, horaInicio } =  form;
            const dirtyDescription = await generateDescriptionWithAI({ titulo, local, dataInicio, horario: horaInicio })
            form.descricao = dirtyDescription?.trim()
          }"/>

        </div>
        <el-input
          v-model="form.descricao"
          :rows="3" 
          :style="{ marginBottom: '22px' }"
          type="textarea"
          placeholder="Texto do comunicado"
        />
        <div>
          <label class="formLabel">Enviar para</label>
          <s-input v-model="form.destino" size="large" placeholder=""></s-input>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          >
            <span>
              <el-icon><Link /></el-icon>
              Adicionar anexo
            </span>
            <template #tip>
              <div class="el-upload__tip">max file size: 1MB</div>
            </template>
          </el-upload>
        </div>
      </s-card>
    </s-container>
    <div class="send-button">
      
      <s-button-menu
        label="Enviar"
        variant="primary-green"
        @click="() => createSuccessEvent(form)"
      />
    </div>
  </div>
</template>
<style scoped>
.formLabel {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px !important;
}
.send-button {
  position: sticky;
  bottom: 0;
  padding: 16px;
  background-color: white;
}

.page-container {
  height: 100vh;
}
</style>
