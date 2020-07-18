using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Interface
{
    public interface IUserRepository : IBaseRepository<User>
    {

        User Login(User pUser);
        User VerifyUser(User pUser);
        
    }
}
