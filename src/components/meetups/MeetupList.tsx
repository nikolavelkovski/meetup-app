import * as React from 'react';
import { MeetupListrops } from '../../types/types';
import classes from './MeetupList.module.css'
import { MeetupItem} from './MeetupsItem';

export function MeetupList(props: MeetupListrops) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description} />)}
        </ul>
    );
}
