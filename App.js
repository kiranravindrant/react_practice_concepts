import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import  Arrow from './components/Arrow';
import Name  from './components/Eg_props';
import Place from './components/Props_in_class';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Namelist from './components/Namelist';
import RefsInReact from './components/RefsInReact';
import UseContextinReact from './components/UseContextinReact.jsx';
import TestHOC from './components/TestHOC';
import Blank from './components/Blank';
import TestCustomHook from './TestCustomHook';

function App() {
  return (
    <div className="App">  
      {/* <Greet />
      <Welcome/>
      <Arrow/>
      <Name age='26' email='kiranravindrant@gmail.com'>
        <p>Demo of children props</p>
      </Name>
      <Place city='calicut'/>
      <Message/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/> */}
      {/* <Namelist/> */}
      {/* <RefsInReact/> */}
      {/* <Counter/> */}
      {/* <UseContextinReact/> */}
      <TestCustomHook/>
    </div>
  );
}

export default App;
