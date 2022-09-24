import HelloWorld from "./components/HelloWorld";
function App() {
  let saludo = 'My Friend'
  return (
    <>
    <HelloWorld></HelloWorld>
    <HelloWorld saludar={saludo}></HelloWorld>
    </>
  );
}

export default App;
