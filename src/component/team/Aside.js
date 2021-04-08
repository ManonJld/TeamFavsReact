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
    const [togglerIsActive, setTogglerIsActive ] = useState(true);


    const addClass = () => {
        setIsActive(!isActive)
    }

    const setToggler = () => {
        setTogglerIsActive(!togglerIsActive)
    }


    const bars = <FontAwesomeIcon className="bars" onClick={setToggler} icon={faBars}/>
    const plus = <FontAwesomeIcon className="plus" onClick={addClass} icon={faPlusCircle}/>

    return (
        <React.Fragment>
            <div className="myDropdown">
                {bars}
                <div className={togglerIsActive? "myDropdownChild visible" :  "myDropdownChild"}>
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