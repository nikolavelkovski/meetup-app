
import { useEffect, useState } from 'react';
import { MeetupList } from '../components/meetups/MeetupList';
import { MeetupItemProps } from '../types/types';

export interface AllMeatUpsProps {
}

export function AllMeatUps(props: AllMeatUpsProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loadedMeetups, setLoadedMeetups] = useState<MeetupItemProps[]>([])


    useEffect(() => {
        setIsLoading(true)
        fetch('https://meetups-app-88a3c-default-rtdb.firebaseio.com/meetups.json').then(response => {
            return response.json()
        }).then(data => {
            const meetups: MeetupItemProps[] = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
            setLoadedMeetups(meetups)
            setIsLoading(false)
        })

    }, [])
    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return (

        <section>
            <h1>All Meatups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>

    );
}
