// import { useStore } from '../redux/store';
// import { Provider } from 'react-redux';
import { AppProvider } from 'context/AppContext';
import "react-multi-carousel/lib/styles.css";
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    // <Provider store={store}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    // </Provider>
  )
}

export default MyApp
