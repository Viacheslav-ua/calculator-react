// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import App from './App'
// import { setupStore } from './store/store'


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// )

// const store = setupStore()

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

// import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"

import App from './App'
import { setupStore } from "./store/store"

const store = setupStore()
const container: any = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </Provider>
)


