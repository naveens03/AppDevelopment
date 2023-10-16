package com.naveen.freelancerfinderapp.config;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;

public class CustomAuthenticationProvider
//  implements AuthenticationProvider
  {
    private final UserDetailsService userDetailsService;
    private final UserDetailsService clientDetailsService;

    public CustomAuthenticationProvider(UserDetailsService userDetailsService, UserDetailsService clientDetailsService) {
        this.userDetailsService = userDetailsService;
        this.clientDetailsService = clientDetailsService;
    }

    // @Override
    // public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    //     // Attempt authentication using the userDetailsService
    //     Authentication userAuth = userDetailsService.authenticate(authentication);

    //     // Attempt authentication using the clientDetailsService
    //     Authentication clientAuth = clientDetailsService.authenticate(authentication);

    //     // Combine the results as per your logic
    //     if (userAuth.isAuthenticated()) {
    //         return userAuth;
    //     } else if (clientAuth.isAuthenticated()) {
    //         return clientAuth;
    //     } else {
    //         // You can also customize the logic for handling the case when neither authentication is successful
    //         throw new AuthenticationException("Authentication failed for both user and client") {};
    //     }
    // }

    // @Override
    // public boolean supports(Class<?> authentication) {
    //     return userDetailsService.supports(authentication) || clientDetailsService.supports(authentication);
    // }
}
