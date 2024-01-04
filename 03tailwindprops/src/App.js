import Card from './components/Card';
import './App.css';

function App() {
  return (
    <>
    <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
    <Card username="chaiAurCode" btnText = "clickMe"/>
    <Card username = "Marry"/>

  </>
  );
}

export default App;
