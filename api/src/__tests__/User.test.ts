import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        try {
            await connection.runMigrations();
        } catch (err) {
            console.log(err);
        }
    })

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users")
            .send({
                email: "User@example.com",
                name: "User example"
            });
        
        expect(response.status).toBe(201);
    })

    it("Should not be able to create a user with exists email", async () => {
        const response = await request(app).post("/users")
            .send({
                email: "User@example.com",
                name: "User example"
            });
        
        expect(response.status).toBe(400);
    })

})