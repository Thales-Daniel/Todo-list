const status = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  BAD_REQUEST: 404,
  CONFLICT: 409,
};

const messages = {
  DELETE_USER: 'User has been deleted successfully',
  EXP_IVALID_TOKEN: 'Expired or invalid token',
  INCORRECT_USER_OR_PASS: 'Incorrect user or password',
  NOT_FOUND: 'Not found',
  ONLY_ADM: 'Only an administrator may to register a new user',
  TASK_CREATED: 'Task created successfully',
  USER_EXISTS: 'User is already registered',
  VOID_TOKEN: 'Token not found',
  VOID_USER: 'User not found',
  NOT_CREATED: 'Task not created',
};

module.exports = { status, messages };
