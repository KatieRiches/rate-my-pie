import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Map from './components/Map'
import Form from './components/RatingForm'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Map />} />
    <Route path="/rating" element={<Form />} />
  </Route>
)

export const router = createBrowserRouter(routes)
