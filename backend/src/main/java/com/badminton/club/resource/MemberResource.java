package com.badminton.club.resource;

import com.badminton.club.model.Member;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Path("/members")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MemberResource {

    // Thread-safe map to simulate data storage
    private static Map<String, Member> memberStore = new ConcurrentHashMap<>();

    @GET
    public List<Member> listAllMembers() {
        return new ArrayList<>(memberStore.values());
    }

    @POST
    public Response createMember(Member member) {
        member.setId(UUID.randomUUID().toString());
        memberStore.put(member.getId(), member);
        return Response.status(Response.Status.CREATED).entity(member).build();
    }

    @PUT
    @Path("/{id}")
    public Response updateMember(@PathParam("id") String id, Member updatedMember) {
        if (!memberStore.containsKey(id)) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        updatedMember.setId(id);
        memberStore.put(id, updatedMember);
        return Response.ok(updatedMember).build();
    }

    @DELETE
    @Path("/{id}")
    public Response removeMember(@PathParam("id") String id) {
        memberStore.remove(id);
        return Response.noContent().build();
    }
}