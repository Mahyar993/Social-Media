import React, { useState } from 'react';
import { fetchInstagramData, fetchYouTubeData } from '../services/api';

interface Props {
    onSearch: (instagramData: any, youtubeData: any) => void;
}

const InfluencerSearch: React.FC<Props> = ({ onSearch }) => {
    const [name, setName] = useState('');

    const handleSearch = async () => {
        const instagramData = await fetchInstagramData(name);
        const youtubeData = await fetchYouTubeData(name);
        onSearch(instagramData, youtubeData);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter influencer handle (e.g., cristiano)"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSearch}>Fetch Data</button>
        </div>
    );
};

export default InfluencerSearch;
