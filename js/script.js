/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      randomEmail: [],
      emailApi: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },
  methods: {
    getData() {
      this.randomEmail = [];
      for (let index = 0; index < 10; index++) {
        axios
          .get(this.emailApi)
          .then((response) => {
            this.randomEmail.push(response.data.response);
          })
          //Uso la funzione catch per gestire eventuali errori che possono verificarsi durante la richiesta HTTP
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  mounted() {
    this.getData();
  },
}).mount("#app");
