export function BookablesList({ group, changeGroup, groups, bookablesInGroup, bookableIndex, changeBookable, nextBookable }) {
    return (
        <div>
            <select value={group} onChange={changeGroup}>
                {groups?.map(group => (
                    <option key={group} value={group}>
                        {group}
                    </option>
                ))}
            </select>

            <ul className="bookables">
                {bookablesInGroup?.map((bookable, index) => (
                    <li
                        key={index}
                        className={index === bookableIndex ? 'selected' : ''}
                        onClick={() => changeBookable(index)}
                    >
                        {bookable.title}
                    </li>
                ))}
            </ul>

            <p>
                <button autoFocus onClick={nextBookable}>next</button>
            </p>
        </div>
    )
}