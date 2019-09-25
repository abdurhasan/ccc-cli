module.exports = (status, msg, data) => ({
    success: status,
    message: msg,
    ...data,
  });    
  