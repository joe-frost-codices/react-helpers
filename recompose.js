import React from "react"
import {withState, withHandlers, compose} from "recompose"
import "./card.css"

const Card = ({handleClick, open, setOpen, title, picture, description}) => (
  <div className={ open ? "card open" : "card closed }>
    <div className="header" onClick={handleClick}>
      {title}
    </div>
    <div className="body">
      <img src={picture} alt={title} />
      <p>{description}</p>
    </div>  
  </div>
)

export default compose(
  withState("open","setOpen",true),
  withHandlers({
    handleClick: props => event => props.setOpen(!props.open)
  }),
  
)(Card)
