import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome="Matheus" idade={25} />
    </>
  );
}

export default App;