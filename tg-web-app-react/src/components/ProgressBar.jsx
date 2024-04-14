

export const ProgressBar = () => {

    return (
        <section className="main__rating">
            <h2>Rating</h2>
            <h3>League</h3>
            <p id="leagueName"></p>
            <input id="ratingProgress" type="range" min="0" />
        </section>
    )
}