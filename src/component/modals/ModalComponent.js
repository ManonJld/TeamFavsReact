/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ModalComponent = (props) => {
    const {
        buttonLabel,
        title,
        classname,
        footer,
        iconAwesome,
        classnameIcon
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div>
            {buttonLabel? <Button className={classname} onClick={toggle}>{buttonLabel}</Button> : <FontAwesomeIcon className={classnameIcon} onClick={toggle} icon={iconAwesome}/>}

            <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                {props.children ? (
                    <ModalBody>
                        {props.children}
                    </ModalBody>
                ) : null}

                {footer ? (
                    <ModalFooter>
                        {footer}
                    </ModalFooter>
                ) : null}
            </Modal>
        </div>
    );
}

export default ModalComponent;
