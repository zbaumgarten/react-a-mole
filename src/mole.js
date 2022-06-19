import { useEffect } from 'react'

function Mole(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src="mole.png" onClick={props.handleClick} />
        </div>
    )
}

export default Mole