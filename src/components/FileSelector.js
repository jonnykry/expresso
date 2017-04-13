import React, {Component, PropTypes} from 'react';

class FileSelector extends Component {
    constructor(props) {
        super(props);

        this.handleFileSelectedBind = this.handleFileSelected.bind(this);
    }

    handleSelectFile() {
        document.getElementById('upload-file').click();
    }

    handleFileSelected(e) {
        this.props.fileSelected(e.target.files[0]);
    }

    render() {
        const buttonText = this.props.buttonText;
        const buttonClass = 'f4 w-100 link pointer dim br1 ba bw1 pv3 mb2 white bg-green';
        return (
            <div>
                <button type="button" onClick={this.handleSelectFile} className={buttonClass}>{buttonText}</button>
                <div style={{height: 0, width: 0, overflow: 'hidden'}}>
                    <input id="upload-file" type="file" onChange={this.handleFileSelectedBind}/>
                </div>
            </div>
        );
    }
}

FileSelector.propTypes = {
    buttonText: PropTypes.string,
    fileSelected: PropTypes.func.isRequired
};

export default FileSelector;
