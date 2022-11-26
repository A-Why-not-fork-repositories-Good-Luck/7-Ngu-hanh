module.exports = {
  all: async () => {
    let Books = []
    await db.collection('Books')
      .find()
      .sort({ name: 1 })
      .forEach(Book => Books.push(Book))
    return Books
  },
  
}