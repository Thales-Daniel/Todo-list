const status = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const messages = {
  EXP_IVALID_TOKEN: 'Expired or invalid token',
  NOT_FOUND: 'Not found',
  TASK_CREATED: 'Task created successfully',
  NOT_CREATED: 'Task not created',
};

module.exports = { status, messages };
