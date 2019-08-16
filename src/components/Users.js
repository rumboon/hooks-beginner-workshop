import React from 'react';
import styled from 'styled-components';
import User from './User';
import { getUsers, searchFilter } from '../utils/Users';

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    margin: 0;
    padding: 0;
    background-color: ${props => props.isOdd ? 'AntiqueWhite' : 'CornSilk'};
`;

const Users = ({ searchValue }) => {
    const [users, setUsers] = React.useState([]);
    const [filteredUsers, setFilteredUsers] = React.useState();

    React.useEffect(() => {
        getUsers().then(users => setUsers(users));
    }, []);

    React.useEffect(() => {
        if (!searchValue) {
            setFilteredUsers(undefined);
            return;
        }

        setFilteredUsers(searchFilter(users, searchValue));
    }, [searchValue, users]);

    return (
        <List>
            {(filteredUsers || users).map((user, i) => (
                <ListItem key={user.id} isOdd={Boolean(i % 2)}>
                    <User {...user} />
                </ListItem>
            ))}
        </List>
    );
}

export default Users;