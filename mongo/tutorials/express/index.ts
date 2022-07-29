import { app, port } from './src/application';
import { connect } from './src/connection';

connect(app, port);
