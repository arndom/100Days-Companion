import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRouteType, appRoutes } from './routes/app';
import NotFound from './pages/NotFound/NotFound';
import AppWrapper from './context/AuthContext';
import Navabar from './components/Navabar/Navabar';
import Footer from './components/Footer/Footer';

function renderRoute(route: AppRouteType, index: number): JSX.Element {
  return (
    <Route key={index} path={route.to} element={<route.element />}>
      {route.subRoutes &&
        route.subRoutes.map((subRoute, subIndex) => (
          <Route key={subIndex} path={subRoute.to} element={<subRoute.element />} />
        ))}
    </Route>
  );
}

// localStorage.clear();

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppWrapper>
          <CssBaseline />
          <Navabar />
          <Routes>
            {appRoutes.map((route, index) => renderRoute(route, index))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
