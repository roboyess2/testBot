

export const Users = ({items, isLoading}) => {
    return (
        <div>
            <ul>
                {
                    items.map((users) => {
                        return <li>
                            <p>Username: {users.user_name}</p>
                            <p>Score:  {users.coins}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}