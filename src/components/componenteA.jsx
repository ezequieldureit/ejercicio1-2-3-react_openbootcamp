import React from "react"
import {ComponenteB} from "./componenteB"

export class Contacto extends React.Component{
  render() {
    return (
      <div>
        <ComponenteB nombre='Ezequiel' apellido='Dure' email= 'edure@gmail.com' conectado={true} />

      </div>
    )
  }
}
