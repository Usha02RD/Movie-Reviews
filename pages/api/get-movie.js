import {MongoClient, ObjectId} from 'mongodb'

export default async function handler(req, res) {
    if(req.method !== 'POST'){
        return 
    }
    const id =  ObjectId(req.body.id)
    const client = await MongoClient.connect('mongodb+srv://admin_usha:MCCzLM.5bNtn62J@movies.hosim.mongodb.net/MovieDatabase?retryWrites=true&w=majority')
    const db = client.db()
    const movieCollection = db.collection('movies')
    const result = await movieCollection.findOne({_id: id})

    res.status(200).json({ movie: result })
  }