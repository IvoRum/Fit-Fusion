using Fit_Fusion.Models;
using Microsoft.EntityFrameworkCore;

namespace Fit_Fusion.Data;

public class DataContex: DbContext
{
    public DataContex(DbContextOptions<DataContex> options): base(options)
    {
        
    }
    
    public DbSet<Client> Clients { get; set; }
}