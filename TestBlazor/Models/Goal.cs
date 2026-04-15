namespace TestBlazor.Models
{
    public class Goal
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public DateTime? TargetDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}
