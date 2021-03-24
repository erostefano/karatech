import './App.css';
import {useState} from 'react';
import {useTranslation} from "react-i18next";
import "./translations/i18n";
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Selection from './common/Selection'

function App() {
    const {t} = useTranslation();
    const levels = ['low', 'middle', 'upper'];
    const movements = ['front', 'halfRound'];
    const hits = ['punch', 'kick', 'knee'];

    const [tech, setTech] = useState({
        levels: undefined,
        movements: undefined,
        hits: undefined,
    });

    let setState = (name, selection) => {
        setTech(prevState => {
            return {
                ...prevState,
                [name]: selection
            }
        });
    }

    return (
        <Container>
            <Alert className={alert} variant={'primary'}>
                {`${Object.values(tech).map(value => t(value, {lng: 'jp'})).join(' ')}`}
            </Alert>
            <Selection name={'hits'} elements={hits} selectionCallback={setState}/>
            <Selection name={'levels'} elements={levels} selectionCallback={setState}/>
            <Selection name={'movements'} elements={movements} selectionCallback={setState}/>
        </Container>
    );
}

export default App;
