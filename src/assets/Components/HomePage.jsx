

export const HomePage = (props) => {
    return (
        <>
            {
                props.database.map(data => (
                    <button>{data.name}</button>
                ))
            }
        </>
    )
}