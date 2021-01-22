import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';

const App = () => {
    return <>
        <NavBar style={{ width: '100%', height: '20%' }} />
        <Main />
    </>
}

export default App;
