
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { MeetupItemProps } from '../../types/types';
import Card from '../../ui/Card';
import classes from './MeetupsItem.module.css'



export function MeetupItem(props: MeetupItemProps) {
    const favoritesCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
            return;
        }
        favoritesCtx.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
        })
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}
