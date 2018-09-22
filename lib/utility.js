module.exports = {
    checkUser: function(req, res, next) {
        if (!exports.isLoggedIn(req, res)) {
            res.send('User has no session data');
        } else {
            next();
        }
    },

    isLoggedIn: function(req, res) {
        return req.session? !!req.session.user : false; 
    },

    createSession: function(req, res, newUser) {
        return req.session.regenerate(function() {
            req.session.user = newUser;
            res.redirect('/')
        })
    }
};