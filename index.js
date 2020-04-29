import React from 'react'
import { AppRegistry } from 'react-native';
import App from './Components/App/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/reduxStore';
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = () => {
    return (
        <Provider store={store} >
            <PersistGate
                loading={null}
                persistor={persistor} >
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
