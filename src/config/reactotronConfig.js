import reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = reactotron
    .configure({ host: '192.168.0.5' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
