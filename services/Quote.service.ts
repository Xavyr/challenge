import { client } from "../db/connection";
import { head } from "lodash";
import { insertQuote, IInsertQuoteParams } from "../db/sql/insertQuote.queries";
import {
  getBestThreeQuotesByUserId,
  IGetBestThreeQuotesByUserIdParams,
} from "../db/sql/getBestThreeQuotesByUserId.queries";

export const quoteService = {
  insertQuote: async (params: IInsertQuoteParams) => {
    const insertedQuote = head(await insertQuote.run(params, client));
    return insertedQuote;
  },
  getBestThreeQuotesByUserId: async (
    userId: string
  ) => {
    const bestThreeQuotes = await getBestThreeQuotesByUserId.run(
      { userId },
      client
    );
    return bestThreeQuotes;
  },
};
