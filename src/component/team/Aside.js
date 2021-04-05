import React, {useState} from 'react';
import UserContainer from "./UserContainer";
import ModalNewCategory from "../modals/ModalNewCategory";
import ModalNewBookmark from "../modals/ModalNewBookmark";
import CategoriesContainer from "./CategoriesContainer";
import {connect} from "react-redux";
import {Collapse, Navbar, NavbarToggler} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'

function Aside(props){
    const {
        teamId
    } = props;

    const [isOpen, setIsOpen ] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const clock = <FontAwesomeIcon icon={faClock}/>
    //todo: garder le aside open quand on est sur une page supérieure à 768px
    return (
        <React.Fragment>
            <NavbarToggler className="toggler" onClick={toggle}>{clock}</NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <UserContainer/>
                <ModalNewCategory/>
                <ModalNewBookmark/>
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