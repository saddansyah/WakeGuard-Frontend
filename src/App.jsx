import { BottomNavbar } from '@/utils/componentsLoader';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="container p-6 mx-auto">
        <Outlet />
      </div>
      <BottomNavbar />
    </div>
  )
}

export default App
