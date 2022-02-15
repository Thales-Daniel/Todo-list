const error = (err, _req, res, _next) => {
  console.error(err);
  res.status(err.code || 500).json({ message: err.message });
};

module.exports = error;
