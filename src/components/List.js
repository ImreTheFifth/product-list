import React from 'react'
import CreateListItem from './Create-list-item'
import { Table } from 'react-bootstrap'

export default class List extends React.Component {
    renderItems() {
        return this.props.items.map((item, index) => (
            <CreateListItem key={index} {...item} {...this.props} />
        )) //arrow itt is
    }

    render() {
        return (
            <div>
                <Table striped hover>
                    <tbody>{this.renderItems()}</tbody>
                </Table>
            </div>
        )
    }
}
