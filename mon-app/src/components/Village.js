import React from 'react'
import Button from 'react-bootstrap/Button'
export default function Village({data,apiUrl}) {
    //on récupère les keys de l'objet
    const keys = []
    for(let k in data[0]){
        keys.push(k)
    }
    //pour chaque key on fait une case header pour nos colonnes
    const header = keys.map((key, index) => <th key={index}>{key}</th>)
    return (
        <>
        <Button id="ajout" href="#" >Ajouter un village</Button>
        <table>
            <thead>
                {/* permet d'obtenir la case vide au dessus des liens update et delete tout en gardant le css */}
              <tr>{header}<th>&nbsp;</th></tr>
            </thead>
                 <tbody>
            {/*pour chaque objet dans notre data on vient créer une ligne affichant chacune de ses keys avec sa valeur associé ainsi que le lien de l'api pour udapte ou delete avec son id dans le lien*/}
                {
                data.map((row, i) => (
                    <tr key={i} data-index={i} >
                       {
                       keys.map((key, index) => <th key={index}>{row[key]}</th>)
                        }
                        <th><a href={apiUrl + `/${i}/update`}>update</a>

                        <a href={apiUrl + `/${i}/delete`}>delete</a>
                        </th>
                    </tr>
                ))
                }
            </tbody>

        </table>
        </>
    )
}
