import React from 'react'


export default function FormulaireVillage() {

    return (
        <form>
        <label>
          Nom :
          <input type="text"/>
        </label>
        <label>
          PostCode :
          <input type="text"/>
        </label>
        <input type="submit" value="Envoyer" />
        </form>
    )

}
