import { SkeletonLoading, Navbar } from '@/utils/componentsLoader';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Outlet/>
      ---
      <Navbar/>
    </div>
  )
}

export default App
