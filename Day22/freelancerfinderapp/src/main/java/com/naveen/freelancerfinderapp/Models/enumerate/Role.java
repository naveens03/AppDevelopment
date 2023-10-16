package com.naveen.freelancerfinderapp.Models.enumerate;

import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_CREATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_DELETE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_READ;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_UPDATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_CREATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_DELETE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_READ;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_UPDATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_CREATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_DELETE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_READ;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_UPDATE;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(ADMIN_READ,ADMIN_CREATE, ADMIN_UPDATE, ADMIN_DELETE)),
    CLIENT(Set.of(CLIENT_READ,CLIENT_CREATE, CLIENT_UPDATE, CLIENT_DELETE)),
    FREELANCER(Set.of(FREELANCER_READ,FREELANCER_CREATE, FREELANCER_UPDATE, FREELANCER_DELETE));

     @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthority(){
            List<SimpleGrantedAuthority> authorities = new ArrayList<>();
            for(Permission permission : getPermissions()){
                authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
            }
            // var authorities = getPermissions()
            //               .stream()
            //               .map(permissions -> new SimpleGrantedAuthority(permissions.name()))
            //               .toList();
            authorities.add(new SimpleGrantedAuthority("ROLE_"+ this.name()));
            return authorities;
    }
}

