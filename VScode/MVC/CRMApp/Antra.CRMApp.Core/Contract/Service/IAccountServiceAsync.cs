using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Antra.CRMApp.Core.Model;

namespace Antra.CRMApp.Core.Contract.Service
{
    public interface IAccountServiceAsync
    {
        Task<IdentityResult> SignUpAsync(SignupModel model);
        Task<SignInResult> SignInAsync(LoginModel model);
    }
}
