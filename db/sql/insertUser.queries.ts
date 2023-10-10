/** Types generated for queries found in "db/sql/insertUser.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertUser' parameters type */
export interface IInsertUserParams {
  age?: number | null | void;
  carModel?: string | null | void;
  email?: string | null | void;
  name?: string | null | void;
  yearsOfDrivingExperience?: number | null | void;
}

/** 'InsertUser' return type */
export interface IInsertUserResult {
  age: number;
  carModel: string;
  email: string;
  id: string;
  name: string;
  yearsOfDrivingExperience: number;
}

/** 'InsertUser' query type */
export interface IInsertUserQuery {
  params: IInsertUserParams;
  result: IInsertUserResult;
}

const insertUserIR: any = {"usedParamSet":{"email":true,"name":true,"age":true,"carModel":true,"yearsOfDrivingExperience":true},"params":[{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":100,"b":105}]},{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":108,"b":112}]},{"name":"age","required":false,"transform":{"type":"scalar"},"locs":[{"a":115,"b":118}]},{"name":"carModel","required":false,"transform":{"type":"scalar"},"locs":[{"a":121,"b":129}]},{"name":"yearsOfDrivingExperience","required":false,"transform":{"type":"scalar"},"locs":[{"a":132,"b":156}]}],"statement":"INSERT INTO\n    \"User\" (\"email\", \"name\", \"age\", \"carModel\", \"yearsOfDrivingExperience\")\nVALUES\n    (:email, :name, :age, :carModel, :yearsOfDrivingExperience) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "User" ("email", "name", "age", "carModel", "yearsOfDrivingExperience")
 * VALUES
 *     (:email, :name, :age, :carModel, :yearsOfDrivingExperience) RETURNING *
 * ```
 */
export const insertUser = new PreparedQuery<IInsertUserParams,IInsertUserResult>(insertUserIR);


