import { ApolloError } from 'apollo-server-errors';

const message = 'We are having some trouble.';

const errors: any = {
  'request to http://localhost:8083/ failed, reason: connect ECONNREFUSED ::1:8083':
    {
      code: 'USERSERVICEERROR',
      message: "Couldn't connect to users service.",
    },
  'request to http://localhost:8084/ failed, reason: connect ECONNREFUSED ::1:8087':
    {
      code: 'TWEETSERVICEERROR',
      message: "Couldn't connect to tweets service.",
    },
  'request to http://localhost:8081/ failed, reason: connect ECONNREFUSED ::1:8081':
    {
      code: 'COMMENTSERVICEERROR',
      message: "Couldn't connect to comments service.",
    },
};

const Formaterror = (error: ApolloError) => {
  if (errors[error.message] != null) {
    return new ApolloError(message, errors[error.message].code, {
      details: errors[error.message].message,
    });
  }

  return new ApolloError(message, 'OTHERERROR');
};

export default Formaterror;
