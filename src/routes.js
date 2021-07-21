import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Clients from './pages/clients';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;