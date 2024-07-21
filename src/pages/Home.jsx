import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        }
    };
    return (
        <div className='m-5'>
            <div className='p-5'>
                <p className='text-3xl'>Github Explorer</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 p-5'>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search for repositories"
                    className='p-5 w-full text-center rounded-full'
                />
                <button className='p-5 lg:w-1/2 bg-blue-900 rounded-full ' onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Home