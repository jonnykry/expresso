import React, {Component, PropTypes} from 'react';

class TriggerInput extends Component {
    constructor(props) {
        super(props);

        this.params = {};
        this.handleSubmitBind = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let values = {};
        this.props.content.parameters.map(param => {
            if (this.params[param].value === '') {
                return null;
            }

            values[param] = this.params[param].value;
            return null;
        });

        const data = {
            contentId: this.props.content.id,
            tkey: this.key.value,
            values: values
        };
        this.props.create(data);
    }

    refresh() {
        if (!this.key) {
            return;
        }

        this.key.value = '';
        this.props.content.parameters.map(param => {
            this.params[param].value = '';
            return null;
        });
    }

    _param(param) {
        return (i => {
            this.params[param] = i;
        });
    }

    _key() {
        return (i => {
            this.key = i;
        });
    }

    render() {
        const labelClass = 'f5 b dib mb2 w-20';
        const inputClass = 'input-reset ba b--black-20 pa2 mb2 dib w-80';

        if (!this.props.fetching && this.props.success) {
            this.refresh();
        }

        return (
            <div>
                <form onSubmit={this.handleSubmitBind} className="pa1 black-80">
                    <div className="measure center">
                        <label className="f10 b db mv2 bb">Add a trigger for this content</label>
                        <label className={labelClass}>key</label>
                        <input id="subject" ref={this._key()} className={inputClass} type="text"/>
                        <label className="f6 b db mt2 mb2 bb">Default Values</label>
                        {
                            this.props.content.parameters.map(param =>
                                (
                                    <div key={param}>
                                        <label className={labelClass}>{param}</label>
                                        <input id="subject" placeholder="(optional)" ref={this._param(param)}className={inputClass} type="text"/>
                                    </div>
                                )
                            )
                        }
                        <div className="pa3 pa3-ns">
                            <input className="self-center b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

TriggerInput.propTypes = {
    content: PropTypes.object.isRequired,
    fetching: PropTypes.bool,
    success: PropTypes.bool,
    create: PropTypes.func.isRequired
};

export default TriggerInput;
