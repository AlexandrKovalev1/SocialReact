
export type InitialCompanionItemType = {
    id: number
    name: string
    avatar: string
    status: string
}


export type FriendItemType = {
    id: string
    name: string
    avatar: string
    status: string
}

export type InitialMessageType = {
    id: number
    nameSender: string
    textMessage: string
    avatar: string
};

export type FormikFieldType = {
    name: string
    checked?: boolean
    onBlur: () => void
    onChange: (e: React.ChangeEvent<any>) => void
    value: string
}

export type FormValuesLoginPropsType = {
    email: string
    password: string
}

export type FormikSetStatusType = (status?: any) => void


