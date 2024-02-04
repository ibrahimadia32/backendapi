import { connect } from 'mongoose';

// export default connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/test`);
export default connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/test`);
