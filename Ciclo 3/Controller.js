const express = require('express');
const cors = require('cors');

const models=require('./models');

const app=express();
app.use(cors());

let cliente=models.Cliente;
let itempedido=models.ItemPedido;
let pedido=models.Pedido;
let servico=models.Servico;

app.get('/', function(req,res){
    res.send('Olá Mundo!')
});

app.post('/servicos',async(req,res)=>{
    await servico.create({
        nome:"Delphi",
        descricao:"Manutenção e suporte a sistemas legados em Delphi",
        
    });
    res.send('Serviço criado com sucesso!')

});

app.get('/clientes', async(req, res)=>{
    await cliente.create({
        nome:"Henrique Lossolli",
        endereco: "Av Dr Jose Soares de azevedo",
        cidade:"Astorga",
        uf:"PR",
        nascimento: '10/02/1988',
        clienteDesde: '11/10/2001',
        
    });
    res.send('Cliente criado com sucesso');

    });

        app.get('/pedidos', async(req,res)=>{
            await pedido.create({
                ClienteId: 1,
                data: '11/10/2001'
            });
            res.send('Pedido criado com sucesso!');
        
            });

            app.get('/itempedido', async(req,res)=>{
                await itempedido.create({
                    PedidoId:1,
                    ClienteId: 1,
                    quantidade: 5,
                    valor: 100.0
                });
                res.send('Item criado com sucesso!');
            
                });
    
let port=process.env.PORT || 3001;

app.listen(port,(req,res)=> {
    console.log('Servidor ativo:http://localhost:3001/');
})