import { RoleUser } from "../../utils/role.enum";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.date("dateOfBirth").notNullable();
    table.boolean("isActive").defaultTo(true);
    table.enum("role", Object.values(RoleUser)).defaultTo(RoleUser.USER);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
