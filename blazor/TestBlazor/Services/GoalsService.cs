using System.Text.Json;
using Microsoft.JSInterop;
using TestBlazor.Models;

namespace TestBlazor.Services;

public class GoalsService
{
    private const string StorageKey = "goals";
    private readonly IJSRuntime _jsRuntime;
    private List<Goal> _goals = new List<Goal>();

    public GoalsService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task<List<Goal>> GetAllGoalsAsync()
    {
        if (_goals.Count == 0)
        {
            await LoadGoalsFromStorageAsync();
        }
        return _goals;
    }

    public async Task<Goal> AddGoalAsync(string title, DateTime? targetDate)
    {
        var goal = new Goal
        {
            Id = Guid.NewGuid(),
            Title = title,
            TargetDate = targetDate,
            IsCompleted = false
        };

        _goals.Add(goal);
        await SaveGoalsToStorageAsync();
        return goal;
    }

    public async Task ToggleGoalAsync(Guid id)
    {
        var goal = _goals.FirstOrDefault(g => g.Id == id);
        if (goal != null)
        {
            goal.IsCompleted = !goal.IsCompleted;
            await SaveGoalsToStorageAsync();
        }
    }

    public async Task DeleteGoalAsync(Guid id)
    {
        var goal = _goals.FirstOrDefault(g => g.Id == id);
        if (goal != null)
        {
            _goals.Remove(goal);
            await SaveGoalsToStorageAsync();
        }
    }

    private async Task LoadGoalsFromStorageAsync()
    {
        try
        {
            var json = await _jsRuntime.InvokeAsync<string>("localStorage.getItem", StorageKey);
            if (!string.IsNullOrEmpty(json))
            {
                _goals = JsonSerializer.Deserialize<List<Goal>>(json) ?? new List<Goal>();
            }
        }
        catch
        {
            // If there's an error loading from storage, start with an empty list
            _goals = new List<Goal>();
        }
    }

    private async Task SaveGoalsToStorageAsync()
    {
        try
        {
            var json = JsonSerializer.Serialize(_goals);
            await _jsRuntime.InvokeVoidAsync("localStorage.setItem", StorageKey, json);
        }
        catch
        {
            // Silently fail if localStorage is not available
        }
    }
}
