import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Outlet } from 'react-router-dom';

const Version1 = () => {
  return (
    <div id="v1">
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};

export default Version1;
