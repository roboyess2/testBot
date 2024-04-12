

export const User = ({ item, isLoading }) => {
    return (
        <div>
            {
                item.map((user) => {
                    return <div>
                        <p>Username: {user.user_name}</p>
                        <p>Score: {user.coins}</p>
                    </div>
                })
            }
        </div>
    )
}