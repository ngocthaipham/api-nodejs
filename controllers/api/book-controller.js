const book = require(appModels + '/book')

const listBooks = [
    new book(1, 'Đánh thức con người phi thường trong bạn'),
    new book(2, 'Suy nghĩ vẩn vơ của kẻ nhàn rỗi'),
    new book(3, 'Bắt trẻ đồng xanh')
]

module.exports = (() => {
    const router = {}
    router.listBook = (req, res) => {
        res.status(200).json(listBooks)
    }

    router.getBookId = (req, res) => {
        let object = listBooks.find((book) => {
            return book.id === parseInt(req.params.id)
        })

        if(object) {
            res.status(200).json(object)
        } else {
            res.status(404).json({
                message: 'This book does not exist.'
            })
        }

    }
    return router

})()