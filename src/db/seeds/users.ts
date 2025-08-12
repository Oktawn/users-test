import { Knex } from "knex";
import { hashSync } from "bcrypt";
import { RoleUser } from "../../utils/role.enum";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const hashedPassword = hashSync("password123", 12);

    await knex("users").insert([
        {
            email: "admin@example.com",
            password: hashedPassword,
            firstName: "Admin",
            lastName: "User",
            dateOfBirth: new Date("1985-01-15"),
            role: RoleUser.ADMIN,

        },
        {
            email: "jane.admin@example.com",
            password: hashedPassword,
            firstName: "Jane",
            lastName: "Administrator",
            dateOfBirth: new Date("1988-06-22"),
            role: RoleUser.ADMIN,

        },
        {
            email: "super.admin@example.com",
            password: hashedPassword,
            firstName: "Super",
            lastName: "Admin",
            dateOfBirth: new Date("1982-12-03"),
            role: RoleUser.ADMIN,

        },

        {
            email: "john.doe@example.com",
            password: hashedPassword,
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: new Date("1990-01-01"),
            role: RoleUser.USER,

        },
        {
            email: "alice.smith@example.com",
            password: hashedPassword,
            firstName: "Alice",
            lastName: "Smith",
            dateOfBirth: new Date("1992-05-14"),
            role: RoleUser.USER,

        },
        {
            email: "bob.johnson@example.com",
            password: hashedPassword,
            firstName: "Bob",
            lastName: "Johnson",
            dateOfBirth: new Date("1987-09-30"),
            role: RoleUser.USER,

        },
        {
            email: "carol.williams@example.com",
            password: hashedPassword,
            firstName: "Carol",
            lastName: "Williams",
            dateOfBirth: new Date("1995-03-18"),
            role: RoleUser.USER,

        },
        {
            email: "david.brown@example.com",
            password: hashedPassword,
            firstName: "David",
            lastName: "Brown",
            dateOfBirth: new Date("1991-11-07"),
            role: RoleUser.USER,

        },
        {
            email: "emma.davis@example.com",
            password: hashedPassword,
            firstName: "Emma",
            lastName: "Davis",
            dateOfBirth: new Date("1993-08-25"),
            role: RoleUser.USER,

        },
        {
            email: "frank.miller@example.com",
            password: hashedPassword,
            firstName: "Frank",
            lastName: "Miller",
            dateOfBirth: new Date("1989-02-12"),
            role: RoleUser.USER,

        },
        {
            email: "grace.wilson@example.com",
            password: hashedPassword,
            firstName: "Grace",
            lastName: "Wilson",
            dateOfBirth: new Date("1994-07-04"),
            role: RoleUser.USER,

        },
        {
            email: "henry.taylor@example.com",
            password: hashedPassword,
            firstName: "Henry",
            lastName: "Taylor",
            dateOfBirth: new Date("1986-10-16"),
            role: RoleUser.USER,

        },
        {
            email: "iris.anderson@example.com",
            password: hashedPassword,
            firstName: "Iris",
            lastName: "Anderson",
            dateOfBirth: new Date("1996-04-09"),
            role: RoleUser.USER,

        },
        {
            email: "jack.thomas@example.com",
            password: hashedPassword,
            firstName: "Jack",
            lastName: "Thomas",
            dateOfBirth: new Date("1984-12-21"),
            role: RoleUser.USER,

        },
        {
            email: "kate.jackson@example.com",
            password: hashedPassword,
            firstName: "Kate",
            lastName: "Jackson",
            dateOfBirth: new Date("1997-01-28"),
            role: RoleUser.USER,

        },
        {
            email: "liam.white@example.com",
            password: hashedPassword,
            firstName: "Liam",
            lastName: "White",
            dateOfBirth: new Date("1991-06-13"),
            role: RoleUser.USER,

        },
        {
            email: "mia.harris@example.com",
            password: hashedPassword,
            firstName: "Mia",
            lastName: "Harris",
            dateOfBirth: new Date("1998-09-05"),
            role: RoleUser.USER,

        },
        {
            email: "noah.martin@example.com",
            password: hashedPassword,
            firstName: "Noah",
            lastName: "Martin",
            dateOfBirth: new Date("1990-03-17"),
            role: RoleUser.USER,

        },
        {
            email: "olivia.garcia@example.com",
            password: hashedPassword,
            firstName: "Olivia",
            lastName: "Garcia",
            dateOfBirth: new Date("1995-11-24"),
            role: RoleUser.USER,

        },
        {
            email: "peter.rodriguez@example.com",
            password: hashedPassword,
            firstName: "Peter",
            lastName: "Rodriguez",
            dateOfBirth: new Date("1988-08-11"),
            role: RoleUser.USER,
        },
        {
            email: "blocked.user@example.com",
            password: hashedPassword,
            firstName: "Blocked",
            lastName: "User",
            dateOfBirth: new Date("1993-05-20"),
            role: RoleUser.USER,
            isActive: false
        }
    ]);
};
