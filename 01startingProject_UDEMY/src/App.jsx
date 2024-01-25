import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";



function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <main>
        <CoreConcepts />
       <Examples />
      </main>
    </>
  );
}

export default App;
