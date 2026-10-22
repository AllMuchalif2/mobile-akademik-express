/**
 * 404 Not Found middleware.
 * Must be placed after all valid routes.
 */
const notFound = (req, res) => {
  res.status(404).json({
    status: 404,
    error: `Route ${req.method} ${req.originalUrl} not found`,
  });
};

export default notFound;
