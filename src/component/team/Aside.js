import React, {useState} from 'react';
import UserContainer from "./UserContainer";
import ModalNewCategory from "../modals/ModalNewCategory";
import ModalNewBookmark from "../modals/ModalNewBookmark";
import CategoriesContainer from "./CategoriesContainer";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Aside(props){
    const {
        teamId
    } = props;

    const [isActive, setIsActive ] = useState(false);
    const [barsIsActive, setBarsIsActive ] = useState(true);


    const addClass = () => {
        setIsActive(!isActive)
    }

    const setBars = () => {
        setBarsIsActive(!barsIsActive)
    }

    console.log(barsIsActive)

    const bars = <FontAwesomeIcon className="bars" onClick={setBars} icon={faBars}/>
    const plus = <FontAwesomeIcon className="plus" onClick={addClass} icon={faPlusCircle}/>

    return (
        <React.Fragment>
            {bars}
            <div className="myDropdown">
                <div className={barsIsActive? "myDropdownChild visible" :  "myDropdownChild"}>
                    <UserContainer/>
                    <div className="mySecondDropdown">
                        {plus}
                        <div className={isActive? "mySecondDropdownChild visible" : "mySecondDropdownChild"}>
                            <ModalNewCategory/>
                            <ModalNewBookmark/>
                        </div>
                    </div>
                    <CategoriesContainer teamId={teamId}/>
                </div>
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    teamId: state.appReducer.teamId
})



export default connect(
    mapStateToProps,
    null
)(Aside);