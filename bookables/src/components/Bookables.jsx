import { useState } from "react";
import { bookables } from "../db.json";
export function Bookables() {
    const [bookableIndex, setBookableIndex] = useState(0);
    const [group, setGroup] = useState("Rooms");
    const [hasDetails, setHasDetails] = useState(false);

    // const group = 'Rooms';
    const bookablesInGroup = bookables.filter(
        (bookable) => bookable.group == group
    );
    const bookable = bookablesInGroup[bookableIndex];
    const groups = [...new Set(bookables.map((b) => b.group))];
    // let bookableIndex = 0;

    // function changeBookable(selectedIndex) {
    //     setBookableIndex(selectedIndex);
    // }

    function nextBookable() {
        setBookableIndex((prev) => (prev + 1) % bookablesInGroup.length);
    }

    function changeGroup({ target: { value } }) {
        setGroup(value);
        setBookableIndex(0);
        setHasDetails(false);
    }

    function toogleDetails() {
        setHasDetails((prev) => !prev);
    }

    return (
        <>
            <div>
                <select value={group} onChange={changeGroup}>
                    {groups.map((g) => (
                        <option key={g} value={g}>
                            {g}
                        </option>
                    ))}
                </select>
                <ul className="bookables">
                    {bookablesInGroup.map((bookable, index) => (
                        <li
                            key={index}
                            className={bookableIndex === index ? "selected" : ""}
                            // onClick={() => changeBookable(index)}
                            onClick={() => setBookableIndex(index)}
                        >
                            {bookable.title}
                        </li>
                    ))}
                </ul>
                <p>
                    <button autoFocus onClick={nextBookable}>
                        next
                    </button>
                </p>
            </div>
            <div className="bookable-details">
                {bookable && (
                    <>
                        <p>
                            <label htmlFor="details">show details</label>
                            <input
                                type="checkbox"
                                id="details"
                                checked={hasDetails}
                                onChange={toogleDetails}
                            ></input>
                        </p>
                        {hasDetails && (
                            <div>
                                <h2>{bookable.title}</h2>
                                <p>{bookable.notes}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
