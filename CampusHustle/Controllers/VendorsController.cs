using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ;
using VendorService;

namespace CampusHustle.Controllers
{
    public class VendorsController : ApiController
    {
        public IEnumerable<Vendor> Get()
        {
            using (CampusHustleEntities context = new CampusHustleEntities())
            {
                return context.Vendors.ToList();
            }
        }

        public IEnumerable<Vendor> Get(long id)
        {
            using (CampusHustleEntities context = new CampusHustleEntities())
            {
                var vendor = context.Vendors.Find(id);

                yield return vendor;
            }
        }
 
    }
}
