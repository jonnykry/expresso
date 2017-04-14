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
        const buttonClass = 'w-100 f6 tc link dim ph3 pv2 mb2 dib white bg-mid-gray pointer';
        return (
            <div className="w-50 center">
                <a onClick={this.handleSelectFile} className={buttonClass}>{buttonText}</a>
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
