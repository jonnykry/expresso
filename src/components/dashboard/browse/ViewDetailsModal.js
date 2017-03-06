import React, { Component } from 'react';

import Modal from 'react-modal';

class ViewDetailsModal extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} contentLabel="View Details Modal">
                    <h1 className="tc">View Details Modal</h1>
                    <button onClick={this.props.closeModal}>Close Modal</button>
                </Modal>
            </div>
        );
    }
}

export default ViewDetailsModal;