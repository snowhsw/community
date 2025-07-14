import { MongoClient } from 'mongodb'

// 특정 DB에 저장하고 싶으면 URL 수정
const url = 'mongodb+srv://admin:1234@cluster0.vlpfy1s.mongodb.net/'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }