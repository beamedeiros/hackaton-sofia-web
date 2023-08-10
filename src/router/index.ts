import {createRouter,createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateEventView from '../views/Event/CreateView.vue'
import EventsView from '../views/Event/EventsView.vue'
import NoteView from '../views/Note/NoteView.vue'
import ListNoteView from '../views/Note/ListNoteView.vue'
import DetailsView from '../views/Note/DetailsView.vue'
import FormUserView from '../views/Note/FormUserView.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/event',
            name: 'createEvent',
            component: CreateEventView,
        },
        {
            path: '/event/all',
            name: 'listEvents',
            component: EventsView,
        },
        {
            path: '/note',
            name: 'notesView',
            component: NoteView,
        },
        {
            path: '/note/teste',
            name: 'detailsView',
            component: DetailsView,
        },
        {
            path: '/note/all',
            name: 'listNotesView',
            component: ListNoteView,
        },
        {
            path: '/note/formUser',
            name: 'formUserView',
            component: FormUserView,
        },

    ]
})