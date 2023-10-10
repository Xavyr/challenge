/** Types generated for queries found in "db/sql/insertQuotes.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertQuotes' parameters type */
export interface IInsertQuotesParams {
  customerId?: string | null | void;
  price?: string | null | void;
  provider?: string | null | void;
}

/** 'InsertQuotes' return type */
export interface IInsertQuotesResult {
  customerId: string;
  id: string;
  price: string;
  provider: string;
}

/** 'InsertQuotes' query type */
export interface IInsertQuotesQuery {
  params: IInsertQuotesParams;
  result: IInsertQuotesResult;
}

const insertQuotesIR: any = {"usedParamSet":{"provider":true,"price":true,"customerId":true},"params":[{"name":"provider","required":false,"transform":{"type":"scalar"},"locs":[{"a":72,"b":80}]},{"name":"price","required":false,"transform":{"type":"scalar"},"locs":[{"a":83,"b":88}]},{"name":"customerId","required":false,"transform":{"type":"scalar"},"locs":[{"a":91,"b":101}]}],"statement":"INSERT INTO\n    \"Quote\" (\"provider\", \"price\", \"customerId\")\nVALUES\n    (:provider, :price, :customerId) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "Quote" ("provider", "price", "customerId")
 * VALUES
 *     (:provider, :price, :customerId) RETURNING *
 * ```
 */
export const insertQuotes = new PreparedQuery<IInsertQuotesParams,IInsertQuotesResult>(insertQuotesIR);


