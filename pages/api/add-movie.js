// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
    if(req.method !== 'POST'){
        return 
    }
    const data = req.body;
    console.log(data)
    const client = await MongoClient.connect('mongodb+srv://admin_usha:MCCzLM.5bNtn62J@movies.hosim.mongodb.net/MovieDatabase?retryWrites=true&w=majority')
    const db = client.db()
    console.log(client)
    console.log(db)
    const movieCollection = db.collection('movies')
    const result = await movieCollection.insertOne(data)

    console.log(result)

    res.status(201).json({ message: 'Successfully added' })
  }
  