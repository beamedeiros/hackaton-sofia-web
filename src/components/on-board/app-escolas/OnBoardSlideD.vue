<script setup lang="ts">
import icone from '@/assets/onBoard/slideD/icone.svg'
import trava from '@/assets/onBoard/slideD/trava.svg'

defineProps<{
  fecharOnBoard?: () => void
}>()
</script>

<template>
  <div class="on-board-slide-d">
    <div class="on-board-container">
      <img :src="trava" alt="">
      <h2>Uma notificação imediata, que garante a <span>sua tranquilidade e a segurança do aluno</span>.</h2>
      <div class="on-board-content">
        <h4>
          Sempre que quiser rever essa mensagem, clique em 
          <span><img :src="icone" alt=""></span> no topo da sua tela.
        </h4>
        <s-button-menu
          label="Ir para o aplicativo"
          :border-radius="4"
          :padding="8"
          variant="primary-green"
          class="next-button"
          @click="fecharOnBoard"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.on-board-slide-d {
  margin-top: 110px;
  display: grid;
  margin-bottom: auto;
}

span {
  color: var(--aqua);
}
.on-board-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20%;
  gap: 24px;
}

.on-board-content {
  gap: 8px;
  display: flex;
  flex-direction: column;
}

h4 {
  color: var(--grey-70);
  display: block;
}

@media (max-width: 576px) {
  h2 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }
}

@media (max-width: 300px) {
  h2 {
    font-size: 16px;
  }
}
</style>