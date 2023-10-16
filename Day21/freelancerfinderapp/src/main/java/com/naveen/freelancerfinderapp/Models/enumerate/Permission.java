package com.naveen.freelancerfinderapp.Models.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public enum Permission {
    FREELANCER_READ("freelancer:read"),
    FREELANCER_UPDATE("freelancer:update"),
    FREELANCER_CREATE("freelancer:create"),
    FREELANCER_DELETE("freelancer:delete"),
    CLIENT_READ("client:read"),
    CLIENT_UPDATE("client:update"),
    CLIENT_CREATE("client:create"),
    CLIENT_DELETE("client:delete"),
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete");   
    @Getter
    private final String permission;
}
