import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SearchResults = () => {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [repositories, setRepositories] = useState([]);
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await fetch(`https://api.github.com/search/repositories?q=${keyword}`, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });
            const data = await response.json();
            setRepositories(data.items);
        };

        fetchRepositories();
    }, [keyword]);

    return (
        <div className='m-5'>
            <h4 className="text-xl font-bold mb-4">Search Results for {keyword}</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {repositories.map((repo) => (
                    <li key={repo.id} className="p-2 hover:cursor-pointer hover:bg-gray-700 bg-gray-600 rounded-lg overflow-hidden">
                        <div onClick={() => {
                            navigate(`/repository/${repo.owner.login}/${repo.name}`)
                        }}> 
                            <div className="p-3">
                                <div className="flex items-center mb-2">
                                    <img src={repo.owner.avatar_url} alt={repo.owner.login} className="h-10 w-10 rounded-full" />
                                    <h2 className="ml-2 text-lg font-semibold">{repo.owner.login}</h2>
                                </div>
                                <div className="text-blue-300 text-sm font-semibold">
                                    {repo.full_name}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
