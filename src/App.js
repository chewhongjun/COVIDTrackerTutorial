import React, { Component } from 'react'

import { Cards, Chart, CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './api';

export class App extends Component {

   state = {
       data: {},

   } 

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data:fetchedData})
    }
    render() {
        const {data} = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;

