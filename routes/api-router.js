module.exports = (app) => {
    const baseURL = '/api/v1'

    const bookController = require(appControllers + '/api/book-controller')
    app.route(baseURL + '/book').get(bookController.listBook)
    app.route(baseURL + '/book/:id').get(bookController.getBookId)
}