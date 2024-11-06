import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Reg from "./pages/Reg"
import DataProvider from "./context/Context"
import CreateContact from "./pages/CreateContact"
import EditContact from "./pages/EditContact"

function App() {

  return (
    <>
    <DataProvider>

      <Routes>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path="/login" element={<Login/>}/>

        
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateContact/>}/>
          <Route path="/:id" element={<EditContact/>}/>
        
      </Routes>
    </DataProvider>
      
    </>
  )
}

export default App
