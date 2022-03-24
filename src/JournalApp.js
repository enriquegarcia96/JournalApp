import { Provider } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./routes/AppRouter";


/**
 * Configuro mi redux en mi aplicacion
 */
export const JournalApp = () => {
  return (
    <Provider store={store} >
      <AppRouter />;
    </Provider>
  );
};
