

export const Users = ({items, isLoading}) => {
    return (
        <div>
            <ul>
                {
                    items.map((user) => {
                        return <li>
                            <p>{user.user_name}</p>
                            <p>{user.coins}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}