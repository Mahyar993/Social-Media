import React from 'react';
import { Influencer } from '../types/Influencer';

interface Props {
    instagramData: Influencer | null;
    youtubeData: Influencer | null;
}

const InfluencerTable: React.FC<Props> = ({ instagramData, youtubeData }) => {
    if (!instagramData && !youtubeData) return <div>No data available</div>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Platform</th>
                    <th>Name</th>
                    <th>Followers</th>
                    <th>Total Posts</th>
                    <th>Total Likes</th>
                    <th>Total Comments</th>
                </tr>
            </thead>
            <tbody>
                {instagramData && (
                    <tr>
                        <td>Instagram</td>
                        <td>{instagramData.name}</td>
                        <td>{instagramData.followers}</td>
                        <td>{instagramData.totalPosts}</td>
                        <td>{instagramData.totalLikes}</td>
                        <td>{instagramData.totalComments}</td>
                    </tr>
                )}
                {youtubeData && (
                    <tr>
                        <td>YouTube</td>
                        <td>{youtubeData.name}</td>
                        <td>{youtubeData.followers}</td>
                        <td>{youtubeData.totalPosts}</td>
                        <td>{youtubeData.totalLikes}</td>
                        <td>{youtubeData.totalComments}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default InfluencerTable;
