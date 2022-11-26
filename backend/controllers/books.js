module.exports = {
  post:  async (book) => {
    await db.collection('Books').insertOne(book)
  },
  delete: () => {
    if (ObjectId.isValid(req.params.id)) {
      db.collection('Books')
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err => {
          res.status(500).json({ err: 'Could not delete book' })
        })
    }
    else {
      res.status(500).json({ errror: 'Not invalid book_id' })
    }
  },
}