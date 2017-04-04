module.exports = {
  isAuth: function (req, res) {
    if (req.isAuthenticated()) {
      next();
    } else {
      var err = new Error('Unauthorized');
      err.status = 401;
      next(err);
    }
  }
};
