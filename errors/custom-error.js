class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const CustomError = (msg, statusCode) => {
  return new CustomApiError(msg, statusCode);
};

module.exports = { CustomError, CustomApiError };
