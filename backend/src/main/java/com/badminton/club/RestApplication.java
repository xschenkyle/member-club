package com.badminton.club;

import org.glassfish.jersey.server.ResourceConfig;
import com.badminton.club.config.CorsFilter;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/api") 
public class RestApplication extends ResourceConfig {
    public RestApplication() {
        // This line is critical to tell the server to use your CORS filter
        register(CorsFilter.class); 
        packages("com.badminton.club.resource");
    }
}