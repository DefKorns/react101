export function BookableDetails({ hasDetails, toggleDetails, bookable }) {

    if (!bookable) {
        return <></>;
    }

    return (
        <div className="bookable-details">
            <p>
                <label htmlFor="details">Show Details</label>
                <input type="checkbox" id="details" checked={hasDetails} onChange={toggleDetails} />
            </p>

            {hasDetails && (
                <div>
                    <h2>{bookable.title}</h2>
                    <p>{bookable.notes}</p>
                </div>
            )}
        </div>
    )
}