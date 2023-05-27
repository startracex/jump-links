import { Component } from 'solid-js';
import { useRoutes } from '@solidjs/router';
import { routes } from './routes';
import "./global.css"
import Nav from './components/nav';
const App: Component = () => {
  const Route = useRoutes(routes);
  return (
    <>
      <Nav></Nav>
      <main>
        <Route />
      </main>
    </>
  );
};
export default App;
