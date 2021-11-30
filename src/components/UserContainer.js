import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer() {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (
        <>
        {userData.loading ?
            <h2>Loading</h2> : userData.error ?
            <h2>{userData.error}</h2> :
            <div>
                <h2>Users</h2>
                {
                    userData && userData.users && userData.users.map((user) => <p key={user.id}>{user.name}</p>)
                }
            </div>
        }
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         userData: state.user
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsersData: () => dispatch(fetchUsers())
//     }
// }

export default UserContainer
