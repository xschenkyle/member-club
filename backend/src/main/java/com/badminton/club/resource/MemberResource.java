package com.badminton.club.resource;

import com.badminton.club.model.Member;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Path("/members")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MemberResource {

    private static final String FILE_PATH = "data/members.json";
    private final ObjectMapper mapper;

    public MemberResource() {
        this.mapper = new ObjectMapper();
        // Registers the module to handle Java 8 Date/Time types correctly
        this.mapper.registerModule(new JavaTimeModule());
        ensureFileExists();
    }

    private void ensureFileExists() {
        File file = new File(FILE_PATH);
        if (!file.exists()) {
            try {
                file.getParentFile().mkdirs();
                file.createNewFile();
                saveToFile(new ArrayList<>());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private List<Member> loadFromFile() {
        try {
            File file = new File(FILE_PATH);
            if (!file.exists() || file.length() == 0) {
                return new ArrayList<>();
            }
            // Correct usage of TypeReference to preserve generic type info
            return mapper.readValue(file, new TypeReference<List<Member>>() {});
        } catch (IOException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    private void saveToFile(List<Member> members) {
        try {
            mapper.writerWithDefaultPrettyPrinter().writeValue(new File(FILE_PATH), members);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @GET
    public List<Member> listAllMembers() {
        return loadFromFile();
    }

    @GET
    @Path("/{id}")
    public Response getMemberById(@PathParam("id") String id) {
        return loadFromFile().stream()
                .filter(m -> m.getId().equals(id))
                .findFirst()
                .map(m -> Response.ok(m).build())
                .orElse(Response.status(Response.Status.NOT_FOUND).build());
    }

    @POST
    public Response createMember(Member member) {
        List<Member> members = loadFromFile();
        member.setId(UUID.randomUUID().toString());
        members.add(member);
        saveToFile(members);
        return Response.status(Response.Status.CREATED).entity(member).build();
    }

    @PUT
    @Path("/{id}")
    public Response updateMember(@PathParam("id") String id, Member updatedMember) {
        List<Member> members = loadFromFile();
        for (int i = 0; i < members.size(); i++) {
            if (members.get(i).getId().equals(id)) {
                updatedMember.setId(id);
                members.set(i, updatedMember);
                saveToFile(members);
                return Response.ok(updatedMember).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @DELETE
    @Path("/{id}")
    public Response removeMember(@PathParam("id") String id) {
        List<Member> members = loadFromFile();
        boolean removed = members.removeIf(m -> m.getId().equals(id));
        if (removed) {
            saveToFile(members);
            return Response.noContent().build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }
}