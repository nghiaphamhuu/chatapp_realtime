const user  = require('../model/user');


class RoomController {
    index(req, res, next) {

        user.find({})
            .then(user => res.render("home"))
            .catch(next);

        
    }
}


module.exports = new RoomController;