

export const Users = ({items, isLoading}) => {
    return (
        <div>
            <ul>
                {
                    items.map((user) => {
                        return <li key={user.telegram_id}>
                            <p>Telegram_id: {user.telegram_id}</p>
                            <p>Username: {user.user_name}</p>
                            <p>Score:  {user.coins}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}