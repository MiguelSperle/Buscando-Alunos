import { createServer } from 'miragejs';

createServer({
    routes(){
        this.namespace = 'api' 

        this.get('/students', () => {
           return {
              students: [
                {
                   id: 1,
                   age: 16,
                   name: "Miguel Sperle",
                   matricula: 2021136
                },

                {
                  id: 2,
                  age: 10,
                  name: "Rodrigo Mello",
                  matricula: 2018037
                },

                {
                  id: 3,
                  age: 15,
                  name: "Luccas Sperle",
                  matricula: 2017025
                },

                {
                  id: 4,
                  age: 16,
                  name: "João Francisco",
                  matricula: 2021302
                },

                {
                  id: 5,
                  age: 17,
                  name: "Yan Cardozo",
                  matricula: 2021094
                },

                {
                  id: 6,
                  age: 16,
                  name: "Enzo Pereira",
                  matricula: 2021431
                },

                {
                  id: 7,
                  age: 16,
                  name: "João Vitor Bueno",
                  matricula: 2022662
                },

                {
                  id: 8,
                  age: 16,
                  name: "João Mendes",
                  matricula: 2022692
                }
                
              ]
           }
        })
    }
})