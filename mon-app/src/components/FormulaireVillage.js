import React from 'react'
import Form from 'react-bootstrap/Form'

export default function FormulaireVillage() {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Nom de Village</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Post Code</Form.Label>
                <Form.Control type="text" placeholder="PostCode" />
            </Form.Group>
        </Form>
    )

}
