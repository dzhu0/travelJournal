import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
    const cards = data.map( item => {
        return (
            <div>
                {item.id > 1 && <hr />}
                <Card
                    key={item.id}
                    item={item}
                />
            </div>
        )
    })

    return (
        <div className="App">
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}

export default App
