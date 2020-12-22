import {React, useContext} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from 'react-bootstrap/Card'
import {Button, useAccordionToggle} from 'react-bootstrap'


//données simulées
const data=[{id:1, TITLE:"academy dinosaur",DESCRIPTION:"	A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies" ,RELEASE_YEAR:2006,LENGTH:86},
{id: 2,TITLE:"ace goldfinger",DESCRIPTION:"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China" ,RELEASE_YEAR:2006,LENGTH:48},
{id: 3,TITLE:"ADAPTATION HOLES",DESCRIPTION:"	A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory" ,RELEASE_YEAR:2006,LENGTH:50}]

export default function Film() {
    return (
        <Accordion>
            {/* on crée une card pour chaque objet de notre data (idéalement l'api...) avec le card header pour le nom du film et lorsqu'on clique dessus on fait apparaitre le card body qui contient le reste des informations du film*/}
            {data.map((data)=>
        <Card key={data.id}>
            <Card.Header>
                    {data.TITLE}
                <Perso eventKey={data.id} />
            </Card.Header>
        <Accordion.Collapse eventKey={data.id}>
            <Card.Body>
                <p>année de sortie : {data.RELEASE_YEAR}</p>
                <p>durée : {data.LENGTH} min</p>
                <p>{data.DESCRIPTION}</p>
            </Card.Body>
        </Accordion.Collapse>
        </Card>)}
</Accordion>
    )
}

//fonction permettant la personnalisation du bouton permettant d'afficher ou non le card body de notre card
function Perso({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }