

export interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

export interface MeetupItemProps {
    id?: string,
    title?: string,
    address?: string,
    description?: string,
    image?: string,
}

export interface MeetupListrops {
    meetups: MeetupItemProps[]
}


export interface CardProps {
    children: JSX.Element[] | JSX.Element
}