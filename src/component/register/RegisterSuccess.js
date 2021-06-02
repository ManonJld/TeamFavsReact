/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import {connect} from "react-redux";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const RegisterSuccess = () => {

    const [modal, setModal] = useState(true);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
                <ModalHeader toggle={toggle}>Félicitations ! </ModalHeader>
                    <ModalBody>
                        <p>Votre compte a bien été crée, <a href={"/login"}>Connectez-vous</a> ! </p>
                    </ModalBody>
            </Modal>
        </>
    );
}



export default connect(
    null, null
)(RegisterSuccess);
