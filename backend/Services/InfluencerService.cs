using System.Threading.Tasks;

public class InfluencerService
{
    public async Task<Influencer> GetInstagramDataAsync(string name)
    {
        await Task.Delay(500);
        return new Influencer
        {
            Name = name,
            Platform = "Instagram",
            Followers = 1200000,
            TotalPosts = 500,
            TotalLikes = 25000000,
            TotalComments = 1000000
        };
    }

    public async Task<Influencer> GetYouTubeDataAsync(string name)
    {
        await Task.Delay(500);
        return new Influencer
        {
            Name = name,
            Platform = "YouTube",
            Followers = 1500000,
            TotalPosts = 300,
            TotalLikes = 50000000,
            TotalComments = 2000000
        };
    }
}
