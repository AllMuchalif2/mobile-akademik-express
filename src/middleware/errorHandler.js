/**
 * Generic error handler middleware.
 * Catches errors passed via next(err) and returns a JSON response.
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);
  const status = err.status || 500;
  res.status(status).json({
    status,
    error: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
