export type ButtonPropsType = {
    onClick: () => void
    title: string
    type: 'positive' | 'negative'
}

export type ControlButtonPropsType = {
    onClick: (e: any) => void
    title: string
    isActive: boolean
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

export type ContentItemStateType = {
    title: string,
    isActive: boolean
}[]

export type TestSuiteCardItemPropsType = {
    value?: string | number,
    onClick?: (e: any) => void
}
