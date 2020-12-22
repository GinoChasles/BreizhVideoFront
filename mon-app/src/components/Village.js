import React, {useState,useEffect} from 'react'


export default function Village({data, headerInFooter,apiUrl}) {
    const keys = []

    for(let k in data[0]){
        keys.push(k)
    }


    const header = keys.map((key, index) => <th key={index}>{key}</th>)



    return (
        <>
        <table>
            <thead>
              <tr>{header}<th>&nbsp;</th></tr>
            </thead>
                 <tbody>
                {
                data.map((row, i) => (
                    <tr key={i} data-index={i} >
                       {
                            keys.map((key, index) => <th key={index}
                            >{row[key]}</th>)
                        }
                        <th><a href={apiUrl + `/${i}/update`}>update</a>

                        <a href={apiUrl + `/${i}/delete`}>delete</a>
                        </th>
                    </tr>
                ))
                }
            </tbody>
            <tfoot>
                {headerInFooter ? <tr>{header}</tr> : null}
            </tfoot>
        </table>
        </>
    )
}
