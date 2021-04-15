/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {emptyErrors} from "../../action/appActions";


const ModalComponent = (props) => {
    const {
        buttonLabel,
        title,
        classname,
        footer,
        iconAwesome,
        classnameIcon,
        emptyErrors
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        emptyErrors()
    }


    return (
        <>
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
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    emptyErrors: () => dispatch(emptyErrors())
})


export default connect(
    null,
    mapDispatchToProps
)(ModalComponent);
