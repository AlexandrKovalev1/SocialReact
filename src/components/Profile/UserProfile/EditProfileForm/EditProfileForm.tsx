import * as React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import classes from './EditProfileForm.module.css'
import { connect } from 'react-redux'
import { ProfileDataType, ProfileThunkType, editProfile } from '../../../../redux/profileReducer.ts'
import { AppStateType } from '../../../../redux/reduxStore.ts'

type OwnPropsType = {
    userInfo: ProfileDataType | null
    setEditProfile: React.Dispatch<React.SetStateAction<boolean>>
}

type MapDispatchPropsType = {
    editProfile?: (profileData: ProfileDataType) => ProfileThunkType
}

type EditProfileFormPropsType = OwnPropsType & MapDispatchPropsType

const EditProfileForm: React.FC<EditProfileFormPropsType> =
    ({ userInfo, setEditProfile, editProfile, ...props }) => {

        let notUserInfo = {
            aboutMe: '',
            contacts: {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
            fullName: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
        }



        let formik = useFormik({
            initialValues: userInfo ? {
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
            } : notUserInfo,
            onSubmit: (values) => {
                setEditProfile(false);
                editProfile && editProfile(values);
            }
        })



        let editItems = userInfo && Object.keys(userInfo).map(title => {
            if (title !== 'contacts' && title !== 'userId' && title !== 'photos') {

                return (
                    <UserInfoItem
                        itemTitle={title}
                        name={title}
                        value={formik.values[title]}
                        handleChange={formik.handleChange}
                        key={title}
                    />
                )
            } else if (title === 'contacts') {

                return (
                    Object.keys(userInfo[title]).map(contactTitle => <UserInfoItem
                        itemTitle={contactTitle}
                        value={formik.values.contacts[contactTitle]}
                        name={`${title}.${contactTitle}`}
                        handleChange={formik.handleChange}
                        key={contactTitle}
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

type UserInfoItemPropsType = {
    itemTitle: string
    name: string
    value: any
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => any
}


const UserInfoItem: React.FC<UserInfoItemPropsType> = ({ itemTitle, value, handleChange, name, ...props }) => {
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


export default connect<null, MapDispatchPropsType, OwnPropsType, AppStateType>(null, { editProfile })(EditProfileForm);

