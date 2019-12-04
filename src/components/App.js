import React, { useState } from 'react'
import List from './List'
import AddNewItem from './AddNewItem'

const items = [
    {
        itemName: 'Opel'
    },
    {
        itemName: 'Suzuki'
    }
]

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            items: items
        }
    }

    renderCreateItem = () => (
        <AddNewItem
            items={this.state.items}
            createItem={this.createItem.bind(this)} //átírni arrow func-ra
        />
    )

    createItem(itemName) {
        this.state.items.push({
            //ne az eredetit módosítsuk közvetlen, adjon vissza újat a módosítással együtt pl itt concat
            itemName
        })

        this.setState({
            items: this.state.items
        })
    }

    deleteItem(itemName) {
        this.state.items.splice(
            this.state.items.indexOf(
                this.state.items.filter(item => item.itemName === itemName)[0]
            ),
            1
        ) //itt is a fenti komm., ide a slice inkább
        this.setState({
            items: this.state.items
        })
    }

    render() {
        return (
            <div>
                <h1>React Product List App</h1>
                {this.renderCreateItem()}
                <List
                    items={this.state.items}
                    deleteItem={this.deleteItem.bind(this)}
                />
            </div>
        )
    }
}
