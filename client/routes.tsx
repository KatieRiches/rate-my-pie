import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Map from './components/Map'
import ShopRate from './components/ShopRate'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Map />}>
    <Route index element={<App />} />
    <Route path="/map" element={<ShopRate shop={[]} />} />
  </Route>
)

export const router = createBrowserRouter(routes)
