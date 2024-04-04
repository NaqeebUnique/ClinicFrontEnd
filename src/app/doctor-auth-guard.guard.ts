import { inject } from "@angular/core";
import { Router } from "@angular/router";


export const doctorAuthGuardGuard =()=>{

  const router =inject(Router);

  const canActivate = () => {
    // Check if the user's role is admin
    const role = sessionStorage.getItem('role');
    return role === 'Doctor';
  };

  if (canActivate()) {
    return true; // Allow access to the route
  } else {
    // Redirect to login page if the user is not admin
    return router.parseUrl('/login');
  }
};
