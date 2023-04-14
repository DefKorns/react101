import { Component } from "react";

export default class TimerForm extends Component {

    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    }

    handleTitleChange = ({ target: { value } }) => this.setState({ title: value });

    handleProjectChange = ({ target: { value } }) => this.setState({ project: value });

    handleSubmit = (event) => {
        event.preventDefault();
        const timer = {
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
        };

        this.props.onFormSubmit(timer);
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';

        return (
            <div className="ui centered card">
                <div className="content">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={this.state.title} onChange={this.handleTitleChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="project">Project</label>
                            <input type="text" id="project" value={this.state.project} onChange={this.handleProjectChange} />
                        </div>

                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" type="submit">
                                {submitText}
                            </button>
                            <button className="ui basic red button" onClick={this.props.onFormClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}