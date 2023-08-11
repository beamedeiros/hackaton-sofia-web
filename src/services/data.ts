import { ofetch } from "ofetch";

type OpenAICall = {
  titulo: string;
  dataInicio: string;
  horario: string,
  local: string;
}

export type Event = {
  id: string;
  titulo: string;
  descricao: string;
  local: string;
  dataInicio: Date;
  horaInicio: Date;
  dataFim: null | string;
  horaFim: null | string;
  tipoEvento: number;
  limiteConvidados: number;
  preco: number;
};

// aqui o event ja vem com o dado do backend
export const eventsData = await ofetch<Event>(
  "https://eventoswebapp.azurewebsites.net/api/eventos/listar",
);

export const createEvent = async (formBody: Event) => {
  try {
    const createEvent = await ofetch<Event>(
      "https://eventoswebapp.azurewebsites.net/api/eventos/cadastrar",
      {
        method: "POST",
        body: formBody,
      }
    );
    return createEvent;
  } catch (error) {
    console.error("[ERROR] error creating event", {
      reason: error
    });
  }
};

export const generateDescriptionWithAI = async ({ titulo, dataInicio, horario, local }: OpenAICall) => {
  try {
    const description = await ofetch<string>('https://eventoswebapp.azurewebsites.net/api/IA/GerarDescricao', {
      method: 'POST',
      body: { titulo, HoraInicio:horario , Local: local, dataInicio  }
    })
    return description;
  } catch(error) {
    console.error('[ERROR]', error)
  }
}

// export const confirmEvent = async ()