import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await fetch(`https://api.github.com/users/${username}`, {
                headers: {
                    'Authorization': `token YOUR_PERSONAL_ACCESS_TOKEN`
                }
            });
            const data = await response.json();
            setUser(data);
        };

        fetchUserProfile();
    }, [username]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
            <p>{user.bio}</p>
            <p>Repositories: {user.public_repos}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </div>
    );
};

export default UserProfile;
