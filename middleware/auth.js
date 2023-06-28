
const isAuthorized = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(403).send('You are not authorized to view this page');
    }
  }

  module.exports = isAuthorized;