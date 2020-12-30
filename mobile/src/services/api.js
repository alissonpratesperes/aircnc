import axios from 'axios';

    const api = axios.create ({

        baseURL: 'http://192.168.0.101:3333', //Esse endereço é pego de dentro da Seção "Connection" do Expo, precisa ser alterado manualmente para que funcione de acordo.

    });

        export default api;