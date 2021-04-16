import React, {useState} from "react";
import {connect} from "react-redux";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ModalEditBookmark from "./ModalEditBookmark";
import {setEditBookmark} from "../../action/appActions";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ModalDetailsBookmark(props){

    const {
        bookmark,
        setEditBookmark,
        user
    } = props;


    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setEditBookmark(bookmark)
    }



    return(
        <div>
            <FontAwesomeIcon className="detailBookmark" onClick={toggle} icon={faInfoCircle}/>

            <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
                <ModalHeader toggle={toggle}>{bookmark.name}</ModalHeader>

                    <ModalBody>
                        <div>
                            {bookmark.description}
                            <p>Crée par {bookmark.user.shortName}</p>
                        </div>
                        {bookmark.user.id === user.id ? <ModalEditBookmark/> : null}

                    </ModalBody>



                <ModalFooter>
                    <a rel="noreferrer" target="_blank" href={bookmark.url}>{bookmark.url}</a>
                </ModalFooter>

            </Modal>
        </div>
    )

}


const mapStateToProps = state => ({
    user: state.authReducer.user
})

const mapDispatchToProps = dispatch => ({
    setEditBookmark: (value) => ( dispatch(setEditBookmark(value)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalDetailsBookmark);