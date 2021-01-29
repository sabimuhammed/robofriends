import React, { Component } from 'react'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import ErrorBoundery from '../Components/ErrorBoundery';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfeild: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });

    }
    onSearchChange = (event) => {
        this.setState({ searchfeild: event.target.value })


    };
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        const filteredEmails = this.state.robots.filter(robot => {
            return robot.email.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 style={{ textAlign: 'center', paddingTop: '25%' }}>Loading....</h1>
        } else {




            return (
                <div className='tc'>
                    <div>
                        <h1 className='f2'>Robo Freinds</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <Scroll >
                        <ErrorBoundery>
                            <CardList robots={filteredRobots} />
                            <CardList robots={filteredEmails} />
                        </ErrorBoundery>
                    </Scroll>
                </div>
            );
        }

    }
}

export default App;