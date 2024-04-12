

export const User = ({ item, isLoading }) => {
    return (
        <div>

            {
                item.map((user) => {
                    return <div>
                        <p>{user.user_name}</p>
                        <p>{user.coins}</p>
                    </div>
                })
            }
        </div>
    )
}