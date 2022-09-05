import fetch from "isomorphic-unfetch";
import {
  BaseResponse,
  GetActiveSalesResponse,
  GetGameResponse,
  GetRecentGamesOnSaleResponse,
  GetSaleResponse,
} from "./types";

export class PlatPricesClient {
  protected BASE_URL: string;

  constructor(apiKey: string) {
    this.BASE_URL = `https://platprices.com/api.php?key=${apiKey}`;
  }

  private async getGame({
    platPricesId,
    psStoreId,
    name,
    region,
    rawResponse,
  }: {
    platPricesId?: string;
    psStoreId?: string;
    name?: string;
    region?: string;
    rawResponse?: boolean;
  }): Promise<GetGameResponse> {
    return this.call<GetGameResponse>(
      new URLSearchParams({
        ...(platPricesId && { ppid: platPricesId }),
        ...(psStoreId && { psnid: psStoreId }),
        ...(name && { name }),
        ...(region && { region }),
      })
    );
  }

  async getGameByName(
    name: string,
    options: { region?: string; rawResponse: boolean }
  ): Promise<GetGameResponse> {
    return this.getGame({ name, region: options.region });
  }

  getGameByPlatPricesId(
    id: string,
    options: { region?: string; rawResponse: boolean }
  ): Promise<GetGameResponse> {
    return this.getGame({ platPricesId: id, region: options.region });
  }

  getGameByPsStoreId(
    id: string,
    options: { region?: string; rawResponse: boolean }
  ): Promise<GetGameResponse> {
    return this.getGame({ psStoreId: id, region: options.region });
  }

  async getRecentGamesOnSale(): Promise<GetRecentGamesOnSaleResponse> {
    return this.call<GetRecentGamesOnSaleResponse>(
      new URLSearchParams({
        discount: "1",
      })
    );
  }

  async getActiveSales(): Promise<GetActiveSalesResponse> {
    return this.call<GetActiveSalesResponse>(
      new URLSearchParams({
        sales: "1",
      })
    );
  }

  async getSale(saleId: string): Promise<GetSaleResponse> {
    return this.call<GetSaleResponse>(
      new URLSearchParams({
        sale: saleId,
      })
    );
  }

  private async call<T extends BaseResponse>(
    params: URLSearchParams
  ): Promise<T> {
    const res = await fetch(`${this.BASE_URL}&${params.toString()}`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = (await res.json()) as T;
    if (data.error > 0) {
      throw { error: data.error, errorDesc: data.errorDesc };
    }
    return data;
  }
}
