import { Component } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {

    state = {
        editFormOpen: false
    };

    handleFormClose = () => this.closeForm();

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };

    handleEditClick = () => this.openForm();

    handleTrashClick = () => this.props.onTrashClick(this.props.id);

    openForm = () => this.setState({ editFormOpen: true });

    closeForm = () => this.setState({ editFormOpen: false });

    render() {
        const { id, title, project, elapsed, runningSince } = this.props;
        const { editFormOpen } = this.state;

        if (editFormOpen) {
            return (
                <TimerForm
                    id={id}
                    title={title}
                    project={project}
                    onFormClose={this.handleFormClose}
                    onFormSubmit={this.handleFormSubmit}
                />
            );
        }

        return (
            <Timer 
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                runningSince={runningSince}
                onEditClick={this.handleEditClick}
                onTrashClick={this.handleTrashClick}
                onStopClick={this.props.onStopClick}
                onStartClick={this.props.onStartClick}
            />
        );
    }
}