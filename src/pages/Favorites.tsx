import { useContext } from "react";
import { MeetupList } from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";


export interface FavoritesProps {
}

export function Favorites(props: FavoritesProps) {
    const favoritesCtx = useContext(FavoritesContext)

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet.Start adding some!</p>
    }
    return (
        <section>
            <h1>My favoites</h1>
            <MeetupList meetups={favoritesCtx.favorites} />
            {content}
        </section>
    );
}
