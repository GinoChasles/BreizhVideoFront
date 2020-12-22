import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'

const data=[{id:1, TITLE:"academy dinosaur",DESCRIPTION:"	A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies" ,RELEASE_YEAR:2006,LENGTH:86},
{id: 2,TITLE:"ace goldfinger",DESCRIPTION:"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China" ,RELEASE_YEAR:2006,LENGTH:48},
{id: 3,TITLE:"ADAPTATION HOLES",DESCRIPTION:"	A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory" ,RELEASE_YEAR:2006,LENGTH:50}]

export default function Film() {
    return (
        <Accordion>
            {data.map((data,i)=>
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={data.i}>
                    {data.TITLE}
                </Accordion.Toggle>
            </Card.Header>
        <Accordion.Collapse eventKey={data.i}>
            <Card.Body>
                <p>année de sortie:{data.RELEASE_YEAR}</p>
                <p>durée : {data.length}</p>
                <p>description: {data.DESCRIPTION}</p>
            </Card.Body>
        </Accordion.Collapse>
        </Card>)}
</Accordion>
    )
}
