import { useEffect, useReducer, useState } from 'react';
import { initialState, reducer } from '../reducer';
import { BookablesList } from './BookablesList';
import { BookableDetails } from './BookableDetails';
import { useFetch } from '../hooks/useFetch';

export function Bookables() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { group, bookableIndex, hasDetails } = state;

    const { data: bookables, isLoading, error } = useFetch('http://localhost:3001/bookables');

    const [bookablesInGroup, setBookablesInGroup] = useState([]);
    const [groups, setGroups] = useState([]);
    const [bookable, setBookable] = useState();

    useEffect(() => {
        if (bookables) {
            setBookablesInGroup(bookables.filter(bookable => bookable.group === group));
            setGroups([...new Set(bookables.map(b => b.group))]);
        }
    }, [bookables, group]);

    useEffect(() => {
        if (bookablesInGroup) {
            setBookable(bookablesInGroup[bookableIndex]);
        }
    }, [bookablesInGroup, bookableIndex]);

    function nextBookable() {
        dispatch({
            type: 'SET_BOOKABLE',
            payload: (bookableIndex + 1) % bookablesInGroup.length
        })
    }

    function changeGroup({ target: { value }}) {
        dispatch({ type: 'SET_GROUP', payload: value });
    }

    function changeBookable(index) {
        dispatch({ type: 'SET_BOOKABLE', payload: index });
    }

    function toggleDetails() {
        dispatch({ type: 'TOGGLE_HAS_DETAILS'});
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
            <BookablesList 
                group={group}
                changeGroup={changeGroup}
                groups={groups}
                bookablesInGroup={bookablesInGroup}
                bookableIndex={bookableIndex}
                changeBookable={changeBookable}
                nextBookable={nextBookable}
            />

            <BookableDetails 
                hasDetails={hasDetails}
                toggleDetails={toggleDetails}
                bookable={bookable}
            />
        </>
    )
}