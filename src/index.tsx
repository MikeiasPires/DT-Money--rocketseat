import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';


createServer({
  models:{
    transaction: Model,
  },

seeds(server){
server.db.loadData({
  transactions:[
    {
      id: 1,
      title: 'Freelancer de website',
      type:'withdraw',
      category:'Dev',
      amount: 6000,
      createdAt: new Date('2021-02-12 10:50:00'),
    },
    {
      id: 2,
      title: 'Posto Ipiranga',
      type:'withdrawn',
      category:'Combustivel',
      amount: 200,
      createdAt: new Date('2021-09-10 12:00:00'),
    }
  ]
})

},

routes(){
  this.namespace = 'api';

  this.get('/transactions', () => {
   return this.schema.all('transaction')
  })
  this.post('/transactions', (schema,request) => {
    const data = JSON.parse(request.requestBody)
    return schema.create('transaction', data);
  })
}
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


