import React from 'react'

import Modal from './Modal'
function DeleteBadgeModal(props ) {
    return (
        <Modal 
        isOpen={props.isOpen}
        isClose={props.isClose}>
            <div className="DeleteBadgeModal">
                <h1>Are you sure</h1>
                <p>You are about to delete ete badge</p>
                <div    >
                    <div onClick={props.onDeleteBadge}className="btn btn-danger mr-4">borrar</div>
                    <div onClick={props.isClose} className="btn btn-primary"> cancelar</div>
                </div>

            </div>


        </Modal>
    )
}


export default DeleteBadgeModal
