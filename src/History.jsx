const Tickets = (props) => {

    return (
        <div id = "theticket">
            <div id = "theinside">
                <p id = "namet">Name = {props.name}</p>
                <p id = "sourcet">Source = {props.source}</p>
                <p id = "destt">Destination = {props.destination}</p>
            </div>
        </div>
    )
}

export default Tickets