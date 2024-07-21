import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RepositoryDetails = () => {
    const { owner, repo } = useParams();
    const [repository, setRepository] = useState(null);
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepositoryDetails = async () => {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });
            const data = await response.json();
            setRepository(data);
        };

        fetchRepositoryDetails();
    }, [owner, repo]);

    if (!repository) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-gray-700 p-5 m-5 rounded-lg hover:bg-gray-800'>
            <div className='flex items-center gap-3 py-2'>
                <img src={repository.owner.avatar_url} className="h-10 w-10 rounded-full" />
                <p className='text-xl' onClick={() => {
                    
                }} >{repository.full_name}</p>
            </div>
            <div className='py-2 flex flex-col gap-4'>
                <p> <b>Description</b> : {repository.description}</p>
                <p><b>Stars</b> : {repository.stargazers_count}</p>
                <p><b>Forks</b> : {repository.forks_count}</p>
                <p>
                    {/* <b>Owner </b>: <a className='font-semibold text-blue-200 hover:text-blue-400' href={`/user/${repository.owner.login}`}>{repository.owner.login}</a> */}
                    <b>Owner </b>: <a className='font-semibold text-blue-200 hover:text-blue-400' href={repository.owner.html_url}>{repository.owner.login}</a>
                </p>
            </div>
        </div>
    );
};

export default RepositoryDetails;
