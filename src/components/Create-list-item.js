import React from 'react'
import { Button } from 'react-bootstrap'

export default class CreateListItem extends React.Component {
    renderItemName() {
        return this.props.itemName
    }

    render() {
        return (
            <tr>
                <td>{this.renderItemName()}</td>
                <td>
                    <Button
                        onClick={this.props.deleteItem.bind(
                            this,
                            this.props.itemName
                        )}
                    >
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
}
