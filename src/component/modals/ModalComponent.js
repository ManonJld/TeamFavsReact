/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const ModalComponent = (props) => {
    const {
        buttonLabel,
        title,
        classname,
        footer
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div>
            {buttonLabel? <Button className={classname} onClick={toggle}>{buttonLabel}</Button> : <FontAwesomeIcon className="details" onClick={toggle} icon={faPlusCircle}/>}

            <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter>
                    {footer}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalComponent;
