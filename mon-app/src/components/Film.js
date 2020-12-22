import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'

const data=[{TITLE:"academy dinosaur",DESCRIPTION:"	A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies" ,RELEASE_YEAR:2006,LENGTH:86},
{TITLE:"ace goldfinger",DESCRIPTION:"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China" ,RELEASE_YEAR:2006,LENGTH:48},
{TITLE:"ADAPTATION HOLES",DESCRIPTION:"	A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory" ,RELEASE_YEAR:2006,LENGTH:50}]

export default function Film() {
    return (
        <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
}
