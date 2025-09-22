import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createMedia } from '@artsy/fresnel';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import PlayVideo from './components/PlayVideo';
import Dashboard from './components/Dashboard';
import AccountSettings from './components/AccountSettings';
import Action from './components/Action';
import Drama from './components/Drama';
import Comedy from './components/Comedy';
import AllCategories from './components/AllCategories';
import Horror from './components/Horror';
import Romance from './components/Romance';
import Scifi from './components/Scifi';
import Documentary from './components/Documentary';
import Thrillers from './components/Thrillers';

const { Media, MediaContextProvider } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  }
})

function App() {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home mobile />} />
            <Route path='/register'  element={<Register />} />
            <Route path='/signin'  element={<SignIn />} />
            <Route path='/play'  element={<PlayVideo />} />
            <Route path='/dashboard'  element={<Dashboard  mobile />} />
            <Route path='/accountsettings'  element={<AccountSettings />} />
            <Route path='/action'  element={<Action />} />
            <Route path='/drama'  element={<Drama />} />
            <Route path='/allcategories'  element={<AllCategories />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='register'  element={<Register />} />
            <Route path='signin'  element={<SignIn />} />
            <Route path='/play/:videoid'  element={<PlayVideo />} />
            <Route path='dashboard'  element={<Dashboard />} />
            <Route path='accountsettings'  element={<AccountSettings />} />
            <Route path='action'  element={<Action />} />
            <Route path='drama'  element={<Drama />} />
            <Route path='comedy'  element={<Comedy />} />
            <Route path='allcategories'  element={<AllCategories />} />
            <Route path='horror'  element={<Horror />} />
            <Route path='romance'  element={<Romance />} />
            <Route path='scifi'  element={<Scifi />} />
            <Route path='documentary'  element={<Documentary />} />
            <Route path='thrillers'  element={<Thrillers />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;
