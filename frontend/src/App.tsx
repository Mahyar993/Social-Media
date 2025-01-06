import React, { useState } from 'react';
import InfluencerSearch from './components/InfluencerSearch';
import InfluencerTable from './components/InfluencerTable';
import { Influencer } from './types/Influencer';

const App: React.FC = () => {
    const [instagramData, setInstagramData] = useState<Influencer | null>(null);
    const [youtubeData, setYouTubeData] = useState<Influencer | null>(null);

    const handleSearch = (instagram: any, youtube: any) => {
        setInstagramData(instagram);
        setYouTubeData(youtube);
    };

    return (
        <div>
            <h1>Influencer Info</h1>
            <InfluencerSearch onSearch={handleSearch} />
            <InfluencerTable instagramData={instagramData} youtubeData={youtubeData} />
        </div>
    );
};

export default App;
