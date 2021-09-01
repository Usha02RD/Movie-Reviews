import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return 
    }
    const client = await MongoClient.connect('mongodb+srv://admin_usha:MCCzLM.5bNtn62J@movies.hosim.mongodb.net/MovieDatabase?retryWrites=true&w=majority')
    const db = client.db()
    const movieCollection = db.collection('movies')
    const result = await movieCollection.find().toArray()


    res.status(200).json({ movies: result })
  }