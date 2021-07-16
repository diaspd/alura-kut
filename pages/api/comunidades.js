import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
   
    if(request.method === 'POST') {
           
    const TOKEN = '05fe06dc102e603493f405adfbab24';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
        itemType: "972285",
        ...request.body,
        // title: "Comunidade teste",
        // imageUrl: "https://github.com/diaspd.png",
        // creatorSlug: "diaspd",
    })
 
    response.json({
         dados: 'algun dado qualquer',
         registroCriado: registroCriado,
     })
     return;
    }

    response.status(404).json({
        message: 'ainda não temos nada no GET, mas no POST sim!'
    })
}