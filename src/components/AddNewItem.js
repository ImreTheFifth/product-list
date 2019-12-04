import React from 'react'
import ReactDOM from 'react-dom'
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'

export default class AddNewItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newValue: ''
        }
    }

    handleChange = event => {
        let itemName = event.target.value

        this.setState({
            newValue: itemName
        })
    }

    handleCreate(event) {
        event.preventDefault()

        const createInput = ReactDOM.findDOMNode(this.refs.createInput)
        const item = createInput.value

        this.setState({
            newValue: ''
        })

        this.props.createItem(item)
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            value={this.state.newValue}
                            placeholder='What do I need to add to the list?'
                            ref='createInput'
                            onChange={this.handleChange}
                        />
                        <Button type='submit' disabled={!this.state.newValue}>
                            Create
                        </Button>
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}
