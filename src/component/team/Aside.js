import React, {useState} from 'react';
import UserContainer from "./UserContainer";
import ModalNewCategory from "../modals/ModalNewCategory";
import ModalNewBookmark from "../modals/ModalNewBookmark";
import CategoriesContainer from "./CategoriesContainer";
import {connect} from "react-redux";
import {Collapse, Navbar, NavbarToggler} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Aside(props){
    const {
        teamId
    } = props;

    const [isOpen, setIsOpen ] = useState(true);
    const [isActive, setIsActive ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const addClass = () => {
        setIsActive(!isActive)
    }
    const bars = <FontAwesomeIcon icon={faBars}/>
    const plus = <FontAwesomeIcon className="plus" onClick={addClass} icon={faPlusCircle}/>

    //todo: garder le aside open quand on est sur une page supérieure à 768px
    return (
        <React.Fragment>
            <NavbarToggler className="toggler" onClick={toggle}>{bars}</NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <UserContainer/>
                <div className="myDropdown">
                    {plus}
                    <div className={isActive? "myDropdownChild visible" : "myDropdownChild"}>
                        <ModalNewCategory/>
                        <ModalNewBookmark/>
                    </div>
                </div>
                <CategoriesContainer teamId={teamId}/>
            </Collapse>
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