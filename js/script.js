const { createApp } = Vue

const app = createApp({
  data () {
    return {        
      usersList: [
        {
        name: 'Michele',
        avatar: '_1',
        visible: true,
          messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received'
        }],
        },
        {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received'
        }],
        },
        {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received'
        }],
        },
        {
        name: 'Luigi',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }],
        },
        {
          name: 'Mario',
          avatar: '_5',
          visible: true,
            messages: [{
            date: '10/01/2020 15:30:55',
            message: 'Com\'è andata questo dine settimana?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ti sei divertito',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto bene!',
            status: 'received'
          }],
          },
          {
          name: 'Silvia',
          avatar: '_6',
          visible: true,
          messages: [{
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie!',
            status: 'received'
          },
          {
            date: '20/03/2020 16:30:58',
            message: 'Stasera usciamo?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'certo.',
            status: 'received'
          }],
          },
          {
          name: 'Luca',
          avatar: '_7',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            message: 'ciao che fai? non ti fai sentire mai',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'si scusa hai ragione',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'l\'importante è che stai bene',
            status: 'received'
          }],
          },
          {
          name: 'Massimiliano',
          avatar: '_8',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova agenzia?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Complimenti! di questo passo diventerai il primo in Italia.',
            status: 'received'
          }],
          },          
      ],

      userName: null,
      newMessage: "",
      search: "",

    }
  },

  searchUser: [],

  methods : {

    // qui viene preso un nuovo messaggio digitato
  
    newMessageEnter () {
      // ne leggo il valore usando il this.newMessage
      // prendo il valore dell'utente dato da v-for="(user, i) in usersList" :key="i + user.name" @click="userName = user"
      // pusho nell'array del contatto selezionato il nuovo array con il messaggio.
      this.userName.messages.push ({
        date: '10/01/2020 15:50:00',
        message: this.newMessage,
        status: 'sent'
      })

      setTimeout(this.timeOfResponse, 1000)

    },

    timeOfResponse() {
      this.userName.messages.push ({
        date: '10/01/2020 15:50:00',
        message: 'ok',
        status: 'received'
      })        
    },

    searchUserResults () {
      if (!usersList.name === "")  {
          return this.usersList.filter (user => {
          return user.name.includes(this.search)
        })
        
      } 
    }

    
  },

  beforeMount () {
    this.userName = this.usersList[0]
  }

}).mount("#app")