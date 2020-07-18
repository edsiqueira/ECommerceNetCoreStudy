using Domain.Entity;
using Domain.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost("Register")]
        public ActionResult Register([FromBody] User pUser)
        {
            try
            {
                var verifyUser = _userRepository.VerifyUser(pUser);
                if (verifyUser == null)
                {
                    _userRepository.Add(pUser);
                    return Ok();

                }
                return BadRequest("Choose another email, please!");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Login")]
        public ActionResult Login([FromBody] User pUser)
        {
            try
            {
                var verifyUser = _userRepository.Login(pUser);

                if (verifyUser != null)
                    return Ok(verifyUser);

                return BadRequest("User or password is invalid");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }
    }
}
