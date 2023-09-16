using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESFE.FabLab.DAL.Repositories
{
    public interface IGenericRepository<T> where T:class
    {
        Task<bool> Create(T model);
        Task<bool> Update(T model);
        Task<bool> Delte(int id);
        Task<IQueryable<T>> GetAll();
    }
}
