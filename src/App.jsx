import { BottomNavbar } from '@/utils/componentsLoader';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App h-screen">
      <div className="p-6 mx-auto">
        <Outlet />
      </div>
      <div className='mx-auto'>
        <BottomNavbar />
      </div>
    </div>
  )
}

export default App
