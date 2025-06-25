const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.error('Error:', err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    const messageAr = 'المورد غير موجود';
    error = { message, messageAr, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    let field = Object.keys(err.keyValue)[0];
    let message = `${field} already exists`;
    let messageAr = '';
    
    switch (field) {
      case 'email':
        message = 'Email already registered';
        messageAr = 'البريد الإلكتروني مسجل مسبقاً';
        break;
      case 'phone':
        message = 'Phone number already registered';
        messageAr = 'رقم الهاتف مسجل مسبقاً';
        break;
      default:
        messageAr = 'هذا المورد موجود مسبقاً';
    }
    
    error = { message, messageAr, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    const message = messages.join(', ');
    const messageAr = 'خطأ في التحقق من البيانات';
    error = { message, messageAr, statusCode: 400 };
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    const messageAr = 'رمز غير صالح';
    error = { message, messageAr, statusCode: 401 };
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    const messageAr = 'انتهت صلاحية الرمز';
    error = { message, messageAr, statusCode: 401 };
  }

  // File upload errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    const message = 'File size too large';
    const messageAr = 'حجم الملف كبير جداً';
    error = { message, messageAr, statusCode: 400 };
  }

  if (err.code === 'LIMIT_FILE_COUNT') {
    const message = 'Too many files';
    const messageAr = 'عدد الملفات كثير جداً';
    error = { message, messageAr, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    messageAr: error.messageAr || 'خطأ في الخادم',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
