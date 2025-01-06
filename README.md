# Social-Media
**Documentation: Project Summary (with Local Data Explanation)**

**Integrated Social Platforms**

**Instagram:** Integrated Instagram API for retrieving influencer data.

**YouTube:** Integrated YouTube API for fetching influencer information.

-------------------------------------------------------------

**Retrieved Data**

**Instagram:**

1- Number of followers.
2- Total number of posts.
3- Total number of likes.
4- Total number of comments.

**YouTube:**

1- Number of subscribers.
2- Total number of videos.
3- Total number of views.
4- Total number of likes.

-----------------------------------------------------------

**Notes on Data**

The current implementation relies on **local mock data** provided by the backend.

The system can be enhanced in the future to work with **real data** from Instagram and YouTube APIs.


**Example of Local Mock Data:**

return new Influencer

{

    Name = name,

    Platform = "Instagram",
    
    Followers = 1000000,
    
    TotalPosts = 500,
    
    TotalLikes = 20000000,
    
    TotalComments = 100000
    
};

-----------------------------------------

**How to Transition to Real Data:**

Use libraries like **HttpClient** to fetch real API data.

**Example for real API integration:**

using System.Net.Http;

using System.Text.Json;

public async Task<Influencer> GetInstagramDataAsync(string username)

{

    var httpClient = new HttpClient();
    
    var response = await httpClient.GetStringAsync($"https://api.instagram.com/v1/users/{username}?access_token=YOUR_ACCESS_TOKEN");
    
    var data = JsonSerializer.Deserialize<Influencer>(response);
    
    return data;
    
}

------------------------------------------------------

**Potential Costs**

**Instagram API:**

Requires a business subscription for advanced data access.

Costs depend on the number of queries, ranging from $50 to several hundred dollars per month for larger companies.

**YouTube API:**

Google provides a free daily limit of 10,000 units.

Cost for exceeding the free limit: approximately $0.01 per 1,000 extra units.

Example: A single query for channel data consumes around 5 units.

**Estimated Costs**

If the app serves around 100 users daily with queries for both platforms:

**YouTube API:** Approximately 500 units per day → Free within the daily limit.

**Instagram API:** If required, cost could be around $50–$100 per month, depending on subscription.

-----------------------------------------------------------------

**Additional Notes**

The system can be optimized to use cached data, reducing the number of API calls and associated costs.

The platform supports future scalability to include additional social media platforms.

