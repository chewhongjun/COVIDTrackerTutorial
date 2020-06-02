import React, { Component } from 'react'

import { Cards, Chart, CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './api';

export class App extends Component {

    async componentDidMount(){
        const data = await fetchData();

        console.log(data)
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;

