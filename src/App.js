import "./App.css";
import Todo from "./Components/Todo";
import BottomNav from "./Layout/Footer";
function App() {
  return (
    <>
      <div className="container">
        <Todo />
      </div>
      <BottomNav />
    </>
  );
}

export default App;
