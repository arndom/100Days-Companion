import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRouteType, appRoutes } from './routes/app';
import NotFound from './pages/NotFound/NotFound';

function renderRoute(route: AppRouteType, index: number): JSX.Element {
  return <Route key={index} path={route.to} element={<route.element />} />;
}

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          {appRoutes.map((route, index) => renderRoute(route, index))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
