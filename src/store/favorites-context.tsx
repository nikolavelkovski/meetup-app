import { createContext, useState } from "react";
import { MeetupItemProps } from "../types/types";




const FavoritesContext = createContext<{
    favorites: MeetupItemProps[],
    totalFavorites: number,
    addFavorite: Function,
    removeFavorite: Function,
    itemIsFavorite: Function,

}>({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup: MeetupItemProps) => { },
    removeFavorite: (meetUpId: string) => { },
    itemIsFavorite: (meetUpId: string) => { }
});



export const FavoritesContextProvider: React.FC = (props) => {
    const [userFavorites, setUserFavorites] = useState<MeetupItemProps[]>([])

    const addFavoriteHandler = (favoriteMeetup: MeetupItemProps) => {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(favoriteMeetup))
    }

    const removeFavoriteHandler = (meetUpId: string) => {
        setUserFavorites((prevUserFavorites) => prevUserFavorites.filter((meetup) => meetup.id !== meetUpId))
    }

    const itemIsFavoriteHandler = (meetupId: string) => {
        return userFavorites.some(meetup => meetup.id === meetupId)

    }

    const contextValue = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }


    return <FavoritesContext.Provider value={contextValue}>
        {props.children}
    </FavoritesContext.Provider>

}

export default FavoritesContext