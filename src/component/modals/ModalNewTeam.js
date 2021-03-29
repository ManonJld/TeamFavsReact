import React, {useState} from "react";
import ModalComponent from "./ModalComponent";


function ModalNewTeam(){

    const [team, setTeam] = useState()
    function changeInput(value)  {
        setTeam(value)
    }

    console.log(team)
    return(
        <ModalComponent
            buttonLabel="Créer une team"
            title="Créer une team">

            <div className="form-group">
                <label htmlFor="team">Adresse email</label>
                <input
                    onChange={event =>
                        changeInput(event.target.value)
                    }
                    value={team}
                    name="team"
                    id="team"
                    type="text"
                    className="form-control"
                    placeholder="Entrez un nom"
                />
            </div>
        </ModalComponent>
    )
}

export default ModalNewTeam;