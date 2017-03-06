import React, { Component } from 'react';

import Modal from 'react-modal';

class SubscribeModal extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} contentLabel="Subscribe Modal">
                    <h1 className="tc">Subscribe Modal</h1>
                    Are you sure you want to subscribe to {this.props.item['Name']} for ${parseFloat(this.props.item['ConsumerPrice']).toFixed(2)} / mo?
                    <button onClick={this.props.onSubscribe}>Subscribe</button>
                    <button onClick={this.props.closeModal}>Go Back</button>
                </Modal>
            </div>
        );
    }
}

export default SubscribeModal;