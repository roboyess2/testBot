

export const Users = ({items, isLoading}) => {
    return (
        <div>
            <ul>
                {
                    items.map((users) => {
                        return <li>
                            <p>{users.user_name}</p>
                            <p>{users.coins}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}