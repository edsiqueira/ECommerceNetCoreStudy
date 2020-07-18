using Domain.Interface;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository.Repositories
{
    public class BaseRepository<TEtity> : IBaseRepository<TEtity> where TEtity : class
    {

        protected readonly EFCoreContext EFCoreContext;
        public BaseRepository(EFCoreContext _EFCoreContext)
        {
            this.EFCoreContext = _EFCoreContext;
        }

        public void Add(TEtity entity)
        {
            EFCoreContext.Set<TEtity>().Add(entity);
            EFCoreContext.SaveChanges();
        }

        public void Delete(TEtity entity)
        {
            EFCoreContext.Set<TEtity>().Remove(entity);
            EFCoreContext.SaveChanges();
        }

        public IEnumerable<TEtity> GetAll()
        {
            return EFCoreContext.Set<TEtity>().ToList();
        }

        public TEtity GetByID(int id)
        {
            return EFCoreContext.Set<TEtity>().Find(id);
        }

        public void Update(TEtity entity)
        {
            EFCoreContext.Set<TEtity>().Update(entity);
            EFCoreContext.SaveChanges();
        }

        public void Dispose()
        {
            EFCoreContext.Dispose();
        }
    }
}
