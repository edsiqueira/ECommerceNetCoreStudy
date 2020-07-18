using Domain.Entity;
using Domain.Interface;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("api/[Controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;

        public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _productRepository = productRepository;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Json(_productRepository.GetAll());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            try
            {

                product.Validate();
                if (!product.IsValid)
                {
                    return BadRequest(product.GetValidatationMessage());
                }
                if (product.ID > 0)
                    _productRepository.Update(product);
                else    
                    _productRepository.Add(product);

                return Created("api/product", product);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("sendFile")]
        public IActionResult SendFile()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["sendFile"];
                var fileName = formFile.FileName;
                var extension = fileName.Split('.').Last();
                var nameArrayCompact = Path.GetFileNameWithoutExtension(fileName).Take(12).ToArray();
                var newFileName = new string(nameArrayCompact).Replace(' ', '-');
                newFileName = string.Format(newFileName + "_{0}.{1}", DateTime.Now.ToString("yyyyMMdd_HHMMss"), extension);

                var fileFolder = _hostingEnvironment.WebRootPath + "\\files\\";
                var completeName = fileFolder + newFileName;

                using (var stream = new FileStream(completeName, FileMode.Create))
                {
                    formFile.CopyTo(stream);
                }


                return Json(newFileName);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Delete")]
        public IActionResult Delete([FromBody] Product product)
        {
            try
            {
                _productRepository.Delete(product);
                return Json(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
