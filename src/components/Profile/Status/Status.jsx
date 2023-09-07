import { connect } from "react-redux"
import { getUserStatus } from "../../../redux/profile-selectors"
import { useEffect, useState } from "react"
import { updateStatus } from "../../../redux/profileReducer.ts"


const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => { setStatus(props.status) }, [props.status]);

    const activeEditMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)

        if (e.keyCode === 13) {
            sendStatus();
        }
    }

    const sendStatus = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    return (
        <div>
            {!editMode &&
                <div >
                    <span onDoubleClick={activeEditMode}>{props.status || '----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} defaultValue={status} onKeyUp={onStatusChange} onBlur={sendStatus} />
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({ status: getUserStatus(state) })

export default connect(mapStateToProps, { updateStatus })(StatusWithHooks);

