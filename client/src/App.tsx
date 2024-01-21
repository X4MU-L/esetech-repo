import { RouterProvider } from 'react-router-dom';
import { router } from './route/Route';
import { UserProvider } from './context';

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
