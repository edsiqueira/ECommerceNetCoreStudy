using Domain.Entity;
using Domain.Interface;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(EFCoreContext EFCoreContext) : base(EFCoreContext)
        {
        }

        public User Login(User pUser)
        {
            return EFCoreContext.User.FirstOrDefault(x => x.Email == pUser.Email && x.Password == pUser.Password);
        }

        public User VerifyUser(User pUser)
        {
            return EFCoreContext.User.FirstOrDefault(x => x.Email == pUser.Email);
        }
    }
}
