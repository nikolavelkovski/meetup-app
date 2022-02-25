import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewMeetupForm } from '../components/meetups/NewMeetupForm';
import { MeetupItemProps } from '../types/types';

export interface NewMeetupProps {
}

export function NewMeetup(props: NewMeetupProps) {
    const navigate = useNavigate()
    const addMeetUpHandler = (meetupData: MeetupItemProps) => {
        fetch('https://meetups-app-88a3c-default-rtdb.firebaseio.com/meetups.json',
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                navigate("/");
            })
    }
    return (
        <div>
            <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
        </div>
    );
}
