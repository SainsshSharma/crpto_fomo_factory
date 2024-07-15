import ButtonComponent from "./components/Button"
import Table from "./components/Table"

function App() {

  return (
    <div className="w-screen h-screen gap-2 flex-col justify-center items-center">
        <div className="text-5xl text-center p-5">Crptocurrency Tables</div>
        <ButtonComponent/>
        <div className="divider"></div>
        <Table/>
    </div>
  )
}

export default App
