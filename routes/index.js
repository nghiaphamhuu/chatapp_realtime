const newsRouter = require('./room')

function route(app) {
    app.use('/', newsRouter);
}

module.exports = route;