import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createMedia } from '@artsy/fresnel';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import PlayVideo from './components/PlayVideo';
import Dashboard from './components/Dashboard';
import AccountSettings from './components/AccountSettings';

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
            <Route path='/dashboard'  element={<Dashboard />} />
            <Route path='/accountsettings'  element={<AccountSettings />} />
          </Routes>
        </BrowserRouter>
      </Media>
      <Media greaterThan='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/register'  element={<Register />} />
            <Route path='/signin'  element={<SignIn />} />
            <Route path='/play'  element={<PlayVideo />} />
            <Route path='/dashboard'  element={<Dashboard />} />
            <Route path='/accountsettings'  element={<AccountSettings />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  );
}

export default App;
