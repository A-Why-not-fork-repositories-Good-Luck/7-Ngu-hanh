const { MongoClient } = require("mongodb")
const config = require("../config/properties")

const uri = config.DBDriver
const client = new MongoClient(uri)
client.connect()

function err(error) {
  console.log(error.message)
}

module.exports = {
  test: async () => {
    const test = client.db("test")
    const comments = test.collection("comments")
    var data = await comments.findOne({
      Username: "Khoa"
    })
    console.log(data)
    var new_comment = {
      _id: "1",
      Username: "tuyendeptrai",
      Message: "conca"
    } 
    comments.insertOne(new_comment).catch(err)
    var filter = {
      Username: "tuyendeptrai"
    }
    var modified_comment = {
      $set: {
        Username: "tuyendeptraivcl"
      }
    }
    comments.updateOne(filter, modified_comment).catch(err)
  },
  all: async () => {
    const test = client.db("test")
    const comments = test.collection("comments")
    var data = []
    await comments.find().forEach(comment => data.push(comment))
    return data
  }
}