import AddToDo from "./components/AddToDo"
import './App.css'
import Todosdisplay from "./components/Todosdisplay"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <main>
          <h1>
            TODO APP
          </h1>
          <Navbar/>
<AddToDo/>
<Todosdisplay/>
    </main>
  )
}

export default App