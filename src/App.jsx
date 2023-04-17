import { BottomNavbar } from '@/utils/componentsLoader';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Outlet/>
      <BottomNavbar/>
    </div>
  )
}

export default App
