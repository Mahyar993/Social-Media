using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("influencer")]
public class InfluencerController : ControllerBase
{
    private readonly InfluencerService _service = new InfluencerService();

    [HttpGet("instagram/{name}")]
    public async Task<IActionResult> GetInstagramData(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            return BadRequest(new { error = "Username is required" });
        }

        var data = await _service.GetInstagramDataAsync(name);
        return Ok(data);
    }

    [HttpGet("youtube/{name}")]
    public async Task<IActionResult> GetYouTubeData(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            return BadRequest(new { error = "Username is required" });
        }

        var data = await _service.GetYouTubeDataAsync(name);
        return Ok(data);
    }

    [HttpGet("health")]
    public IActionResult HealthCheck()
    {
        return Ok(new { status = "API is running!" });
    }
}
