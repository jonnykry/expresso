import React, { Component } from 'react';

class FileSelector extends Component {
    constructor(props) {
        super(props);

        this.fileSelectedBind = this.fileSelected.bind(this);
    }

    selectFile() {
        document.getElementById('upload-file').click();
    }

    fileSelected() {
        var inputElement = document.getElementById('upload-file');
        this.props.fileSelected(inputElement.value);
    }

    render() {
        const buttonText = this.props.buttonText;
        const width = this.props.width;

        return (
            <div>
                <button onClick={this.selectFile} className={"f4 link pointer dim br1 ba bw1 pv3 mb2 white bg-green " + width}>{buttonText}</button>
                <div style={{height:0,width:0,overflow:'hidden'}}>
                    <input id="upload-file" type="file" onChange={this.fileSelectedBind} />
                </div>
            </div>
        );
    }
}

export default FileSelector;