

import { useRef } from 'react';
import Card from '../../ui/Card';
import classes from './NewMeetupForm.module.css'
export interface NewMeetupFormProps {
    onAddMeetUp: Function
}

export function NewMeetupForm(props: NewMeetupFormProps) {
    const titleInputRef = useRef<HTMLInputElement | null>(null)
    const imageInputRef = useRef<HTMLInputElement | null>(null)
    const addressInputRef = useRef<HTMLInputElement | null>(null)
    const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null)
   
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const meetupData = {
            title: titleInputRef?.current?.value,
            image: imageInputRef?.current?.value,
            address: addressInputRef?.current?.value,
            description: descriptionInputRef?.current?.value,
        }
        props.onAddMeetUp(meetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="title">Address</label>
                    <input type="text" required id="title" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows={5} ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>

            </form>
        </Card>
    );
}
