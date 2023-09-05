import { useFormik } from 'formik';
import { useState } from 'react';
import classes from './EditProfileForm.module.css'
import { connect } from 'react-redux';
import { editProfile } from '../../../../redux/profileReducer';

const EditProfileForm = ({ userInfo,setEditProfile,editProfile, ...props }) => {

    let formik = useFormik({
        initialValues: {
            aboutMe: userInfo.aboutMe,
            contacts: {
                facebook: userInfo.contacts.facebook,
                github: userInfo.contacts.github,
                instagram: userInfo.contacts.instagram,
                mainLink: userInfo.contacts.mainLink,
                twitter: userInfo.contacts.twitter,
                vk: userInfo.contacts.vk,
                website: userInfo.contacts.website,
                youtube: userInfo.contacts.youtube,
            },
            fullName: userInfo.fullName,
            lookingForAJob: userInfo.lookingForAJob,
            lookingForAJobDescription: userInfo.lookingForAJobDescription,
        },
        onSubmit:(values) => {
            setEditProfile(false);
            editProfile(values);
        }
    })



    let editItems = Object.keys(userInfo).map(title => {
        if (title !== 'contacts'&& title !== 'userId'&& title !=='photos') {

            return (
                <UserInfoItem
                    itemTitle={title}
                    name={title}
                    value={formik.values[title]}
                    handleChange={formik.handleChange}
                    key = {title}
                />
            )
        } else if (title === 'contacts') {

            return (
                Object.keys(userInfo[title]).map(contactTitle => <UserInfoItem
                    itemTitle={contactTitle}
                    value={formik.values.contacts[contactTitle]}
                    name={`${title}.${contactTitle}`}
                    handleChange={formik.handleChange}
                    key = {contactTitle}
                />)
            )
        } else {
            return null;
        }
    })


    return (
        <div className={classes.wrapper}>
            <form onSubmit={formik.handleSubmit}>
                {editItems}
                <button type='submit'>Изменить</button>
            </form>
        </div>
    )

}


const UserInfoItem = ({ itemTitle, itemValue, value, handleChange, name, ...props }) => {
    const [isEdit, setEdit] = useState(false);


    let inputType = itemTitle === 'lookingForAJob' ? 'checkbox' : 'text';

    return (
        <div>
            <span className={classes.heading__itemAbout}>
                <b>{itemTitle}</b>
            </span>
            {isEdit
                ? <span>
                    <input type={inputType}
                        value={value}
                        name={name}
                        onChange={handleChange}
                        autoFocus
                        checked={value}
                        onBlur={() => setEdit(false)} />
                </span>
                : <span
                    onClick={() => setEdit(true)}
                >
                    <b style={{ color: 'red' }}>
                        {value}
                    </b>
                    Редактировать</span>
            }
        </div>
    )

}


export default connect(null,{editProfile})(EditProfileForm);

