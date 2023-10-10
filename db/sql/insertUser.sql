/* @name insertUser */
INSERT INTO
    "User" ("email", "name", "age", "carModel", "yearsOfDrivingExperience")
VALUES
    (:email, :name, :age, :carModel, :yearsOfDrivingExperience) RETURNING *;