using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
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
        public HttpResponseMessage Post(Vendor vendor)
        {
            using (CampusHustleEntities context = new CampusHustleEntities())
            {
                context.Vendors.Add(vendor);
                context.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, vendor);
            }
        }

        public HttpResponseMessage Put(long id, Vendor vendor)
        {
            using (CampusHustleEntities context = new CampusHustleEntities())
            {
                Vendor existingVendor = context.Vendors.Find(id);

                if (existingVendor != null)
                {
                    existingVendor.FirstName = vendor.FirstName;
                    existingVendor.LastName = vendor.LastName;
                    existingVendor.PhoneNumber = vendor.PhoneNumber;
                    existingVendor.Email = vendor.Email;
                    existingVendor.Campus = vendor.Campus;
                    existingVendor.Service = vendor.Service;
                    existingVendor.Address = vendor.Address;

                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, vendor);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, vendor);
                }
                

                
            }
        }

        public HttpResponseMessage Delete(long id)
        {
            using (CampusHustleEntities context = new CampusHustleEntities())
            {
                Vendor vendor = context.Vendors.Find(id);

                if (vendor != null)
                {
                    context.Vendors.Remove(vendor);
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, vendor);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, vendor);
                }
            }
        }
    }
}
