const handleMongooseError = (error, data, next) => {
  error.status = 400;
  error.message = "Error creating contact";
  next();
};

export default handleMongooseError;
