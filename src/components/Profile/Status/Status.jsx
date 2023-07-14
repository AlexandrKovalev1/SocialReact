import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer";




class Status extends React.Component {

    state = {
        statusValue: this.props.status,
        editMode: false,
    }

    editStatusToggle = () => {
        this.setState({
            editMode: !this.state.editMode,
            statusValue: this.props.status,
        })
    }

    setStatusText = (event) => {
        this.setState({ statusValue: event.target.value })

        if (event.keyCode === 13) {
            this.editStatusToggle()
            this.props.updateStatus(this.state.statusValue)
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.editStatusToggle}>
                        <span>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div
                        onKeyUp={this.setStatusText}
                        onBlur={this.editStatusToggle}
                    >
                        <input autoFocus={true} defaultValue={this.state.statusValue} />
                    </div>
                }
            </div>
        )
    }
}


let mapStateToProps = (state) => ({ status: state.profilePage.userInfo.userStatus })

export default connect(mapStateToProps, { updateStatus })(Status);