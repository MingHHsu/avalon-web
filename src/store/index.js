import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import rootReducer from './slices/reducers';
import rootEpic from './epics';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

export default (preloadedState) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const store = configureStore({
    reducer: rootReducer(history),
    middleware: (getDefaultMiddleware) => [
      isEnvDevelopment && createLogger({
        collapsed: true,
      }),
      routerMiddleware(history),
      epicMiddleware,
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }),
    ].filter(Boolean),
    preloadedState,
  });
  epicMiddleware.run(rootEpic);
  return store;
};
