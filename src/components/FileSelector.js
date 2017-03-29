import React, { Component } from 'react';

class FileSelector extends Component {
    constructor(props) {
        super(props);

        this.fileSelectedBind = this.fileSelected.bind(this);
    }

    selectFile() {
        document.getElementById('upload-file').click();
    }

    fileSelected(e) {
        this.props.fileSelected(e.target.files[0]);
    }

    render() {
        const buttonText = this.props.buttonText;
        return (
            <div>
                <button type="button" onClick={this.selectFile} className="f4 w-100 link pointer dim br1 ba bw1 pv3 mb2 white bg-green">{buttonText}</button>
                <div style={{height:0,width:0,overflow:'hidden'}}>
                    <input id="upload-file" type="file" onChange={this.fileSelectedBind} />
                </div>
            </div>
        );
    }
}

export default FileSelector;