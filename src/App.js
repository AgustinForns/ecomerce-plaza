import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import ItemListContainer from './components/ItemListContainer';
import { border } from '@mui/system';
import ItemCount from './components/ItemCount';


function App() {
  const saludo = () =>{
    return <div style={{color:"blue", backgroundColor: "gray", border: 1, borderRadius: 50}}>A tu alcance lo que más necesitas!</ div>
  }
  const onAdd = (contador) =>{
    console.log(contador)
    alert(`Vas a comprar ${contador} productos`)
  }
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer saludo={saludo}/> 
      <ItemCount stock={10} initial={1} onAdd={onAdd} />

    </div>
   
  );
}

export default App;
