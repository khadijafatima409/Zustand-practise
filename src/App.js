import "./App.css";
import ItemList from "./components/apiPractice/ItemList";
import CourseForm from "./components/CourseForm";

function App() {
  return (
    <div>
      <div className="main-container">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          My Course List
        </h1>
        <CourseForm />
      </div>

      <div>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
