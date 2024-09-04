import { Outlet } from 'react-router-dom';
import Nav from './components/nav'
import './App.css';

function App() {
  return (
    <>
      <Nav/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
