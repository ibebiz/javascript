using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JavaScript.Controllers
{
    public class JavaScriptController : Controller
    {
        //
        // GET: /JavaScript/
        public ActionResult CachKhaiBaoBien()
        {

            var userList = new List<User>();
            var user = new User();
            user.Name = "ABC";
            user.Phone = "0945345";
            userList.Add(user);
            var user1 = new User();
            user1.Name = "EDF";
            user1.Phone = "0945345";

            userList.Add(user1);
            return Json(userList, JsonRequestBehavior.AllowGet);
        }
        
        public ActionResult AngularJSAjax()
        {
            return View();
        }

        //get
        public ActionResult GetDataResponse()
        {
            return View();
        }

        //post
        public ActionResult PostDataResponse()
        {

            return View();
        }

        public ActionResult Slomotion()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddUser(User user)
        {

            return Json(user);
        }

        [HttpPost]
        public ActionResult AddDL(dl user)
        {

            return Json(user);
        }
	}

    public class User
    {
        public string Name { get; set; }
        public string Phone { get; set; }
    }
    public class dl
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public int PackageTypePriceId { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public int TotalValue { get; set; }
        public bool IsActive { get; set; }
    }
}