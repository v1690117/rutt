export type ButtonPropsType = {
    onClick: () => void
    title: string
    type: 'positive' | 'negative' 
}

export type FlexPropsType = {
    direction?: string, 
    align?: string,
    justify?: string,
    margin?: string 
}

export type AvatarPropsType = {
    onClick?: () => void
    user?: {
        name: string,
        lastName: string
    } 
}

export type FormFieldPropsType = {
    onChange: (e: any) => void
    value: string     
}

export type ContentItemStateType = {title: string, isActive: boolean}[]