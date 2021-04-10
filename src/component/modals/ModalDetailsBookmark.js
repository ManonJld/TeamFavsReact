import React, {useState} from "react";
import {connect} from "react-redux";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ModalEditBookmark from "./ModalEditBookmark";
import {setEditBookmark} from "../../action/appActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ModalDetailsBookmark(props){

    const {
        bookmark,
        setEditBookmark
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
                        <ModalEditBookmark/>
                    </ModalBody>



                <ModalFooter>
                    <a target="_blank" href={bookmark.url}>{bookmark.url}</a>
                </ModalFooter>

            </Modal>
        </div>
    )

    // return(
    //     <ModalComponent
    //         iconAwesome={faInfoCircle}
    //         classnameIcon={"detailBookmark"}
    //         title={bookmark.name}
    //         classname="nav-link btn-myBlue my-2"
    //         footer={footer}
    //     >
    //         <div>
    //             {bookmark.description}
    //             <p>Crée par {bookmark.user.shortName}</p>
    //         </div>
    //         <ModalEditBookmark/>
    //
    //     </ModalComponent>
    // )
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    setEditBookmark: (value) => ( dispatch(setEditBookmark(value)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalDetailsBookmark);