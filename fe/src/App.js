import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}

export default App;
