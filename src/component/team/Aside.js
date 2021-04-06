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

    // const [isOpen, setIsOpen ] = useState(true);
    const [isActive, setIsActive ] = useState(false);
    const [togglerIsActive, setTogglerIsActive ] = useState(true);

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }

    const addClass = () => {
        setIsActive(!isActive)
    }

    const setToggler = () => {
        setTogglerIsActive(!togglerIsActive)
    }


    const bars = <FontAwesomeIcon className="toggler" onClick={setToggler} icon={faBars}/>
    const plus = <FontAwesomeIcon className="plus" onClick={addClass} icon={faPlusCircle}/>

    //todo: garder le aside open quand on est sur une page supérieure à 768px
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
            {/*<NavbarToggler className="toggler" onClick={toggle}>{bars}</NavbarToggler>*/}
            {/*<Collapse isOpen={isOpen} navbar>*/}
            {/*    <UserContainer/>*/}
            {/*    <div className="mySecondDropdown">*/}
            {/*        {plus}*/}
            {/*        <div className={isActive? "mySecondDropdownChild visible" : "mySecondDropdownChild"}>*/}
            {/*            <ModalNewCategory/>*/}
            {/*            <ModalNewBookmark/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <CategoriesContainer teamId={teamId}/>*/}
            {/*</Collapse>*/}
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