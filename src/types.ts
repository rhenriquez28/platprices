export interface ErrorResponse {
  error: number;
  errorDesc: string;
}

export interface BaseResponse extends ErrorResponse {
  apiLimit: string;
  apiUsage: string;
}

export interface GetGameResponse extends BaseResponse {
  GameName: string;
  GuidePSNP: string;
  GuidePS3T: string;
  GuidePS3I: string;
  GuidePyx: string;
  GuideKnoef: string;
  GuideYoutube: string;
  GuideDex: string;
  GuideTrophiesDE: string;
  GuideCust: string;
  GuideCustLabel: string;
  GameImg: string;
  UnobtainableTrophies: string;
  GameID: string;
  Desc: string;
  Img: string;
  CoverArt: string;
  LogoImg: string;
  Screenshot1: string;
  Screenshot2: string;
  Screenshot3: string;
  Screenshot4: string;
  Screenshot5: string;
  Screenshot6: string;
  Screenshot7: string;
  Screenshot8: string;
  Screenshot9: string;
  PreviewVideo: string;
  Publisher: string;
  Developer: string;
  IsPS4: "0" | "1";
  IsPS5: "0" | "1";
  IsVR: "0" | "1" | "2";
  IsMove: "0" | "1" | "2";
  VitaCB: "0" | "1";
  PS4Size: string;
  PS5Size: string;
  OnlinePlay: "0" | "1" | "2";
  OfflinePlayers: string;
  OnlinePlayers: string;
  PSPlusNeeded: string;
  IsDLC: string;
  VoiceLang: string;
  SubtitleLang: string;
  OpenCriticID: string;
  MetacriticURL: string;
  GenreRPG: "0" | "1";
  GenreAction: "0" | "1";
  GenreAdventure: "0" | "1";
  GenreTPS: "0" | "1";
  GenreFPS: "0" | "1";
  GenreMMO: "0" | "1";
  GenrePlatformer: "0" | "1";
  GenreFighting: "0" | "1";
  GenreSimulation: "0" | "1";
  GenreArcade: "0" | "1";
  GenreStrategy: "0" | "1";
  GenreSports: "0" | "1";
  GenrePuzzle: "0" | "1";
  GenreMusic: "0" | "1";
  GenreRacing: "0" | "1";
  GenreHorror: "0" | "1";
  GenreIntStory: "0" | "1";
  OldDifficulty: string;
  Region: string;
  BasePrice: string;
  PlusPrice: string;
  SalePrice: string;
  LowestEverPrice: string;
  LowestEverPlusPrice: string;
  DiscPerc: string;
  ReleaseDate: string;
  LastDiscounted: string;
  DiscountedUntil: string;
  PSPExPremUntil: string;
  PSPExtra: "0" | "1";
  PSPPremium: "0" | "1";
  PSNID: string;
  ProductName: string;
  PPID: string;
  TrophyListURL: string;
  Rating: string;
  RatingDesc: string;
  IsDemoOrSoundtrack: string;
  Bronze: string;
  Silver: string;
  Gold: string;
  Platinum: string;
  Difficulty: string;
  HoursLow: number;
  HoursHigh: number;
  formattedBasePrice: string;
  formattedSalePrice: string;
  formattedPlusPrice: string;
  PSStoreURL: string;
  PlatPricesURL: string;
}

export interface FormattedGetGameResponse {
  id: string;
  gameName: string;
  description: string;
  guides: {
    psnProfiles: string;
    playstationTrophiesOrg: string;
    ps3I: string;
    powerPyx: string;
    knoef: string;
    youtube: string;
    dex: string;
    trophiesDE: string;
    cust: string;
    custLabel: string;
  };
  media: {
    img: string;
    storeImg: string;
    coverArt: string;
  };
  GuidePSNP: string;
  GuidePS3T: string;
  GuidePS3I: string;
  GuidePyx: string;
  GuideKnoef: string;
  GuideYoutube: string;
  GuideDex: string;
  GuideTrophiesDE: string;
  GuideCust: string;
  GuideCustLabel: string;
  GameImg: string;
  UnobtainableTrophies: string;
  GameID: string;
  Desc: string;
  Img: string;
  CoverArt: string;
  LogoImg: string;
  Screenshot1: string;
  Screenshot2: string;
  Screenshot3: string;
  Screenshot4: string;
  Screenshot5: string;
  Screenshot6: string;
  Screenshot7: string;
  Screenshot8: string;
  Screenshot9: string;
  PreviewVideo: string;
  Publisher: string;
  Developer: string;
  IsPS4: "0" | "1";
  IsPS5: "0" | "1";
  IsVR: "0" | "1" | "2";
  IsMove: "0" | "1" | "2";
  VitaCB: "0" | "1";
  PS4Size: string;
  PS5Size: string;
  OnlinePlay: "0" | "1" | "2";
  OfflinePlayers: string;
  OnlinePlayers: string;
  PSPlusNeeded: string;
  IsDLC: string;
  VoiceLang: string;
  SubtitleLang: string;
  OpenCriticID: string;
  MetacriticURL: string;
  GenreRPG: "0" | "1";
  GenreAction: "0" | "1";
  GenreAdventure: "0" | "1";
  GenreTPS: "0" | "1";
  GenreFPS: "0" | "1";
  GenreMMO: "0" | "1";
  GenrePlatformer: "0" | "1";
  GenreFighting: "0" | "1";
  GenreSimulation: "0" | "1";
  GenreArcade: "0" | "1";
  GenreStrategy: "0" | "1";
  GenreSports: "0" | "1";
  GenrePuzzle: "0" | "1";
  GenreMusic: "0" | "1";
  GenreRacing: "0" | "1";
  GenreHorror: "0" | "1";
  GenreIntStory: "0" | "1";
  OldDifficulty: string;
  Region: string;
  BasePrice: string;
  PlusPrice: string;
  SalePrice: string;
  LowestEverPrice: string;
  LowestEverPlusPrice: string;
  DiscPerc: string;
  ReleaseDate: string;
  LastDiscounted: string;
  DiscountedUntil: string;
  PSPExPremUntil: string;
  PSPExtra: "0" | "1";
  PSPPremium: "0" | "1";
  PSNID: string;
  ProductName: string;
  PPID: string;
  TrophyListURL: string;
  Rating: string;
  RatingDesc: string;
  IsDemoOrSoundtrack: string;
  Bronze: string;
  Silver: string;
  Gold: string;
  Platinum: string;
  Difficulty: string;
  HoursLow: number;
  HoursHigh: number;
  formattedBasePrice: string;
  formattedSalePrice: string;
  formattedPlusPrice: string;
  PSStoreURL: string;
  PlatPricesURL: string;
}

export interface GetRecentGamesOnSaleResponse extends BaseResponse {
  discounts: {
    PPID: string;
    Name: string;
    PlatPricesURL: string;
    LastDiscounted: string;
    DiscountedUntil: string;
    BasePrice: string;
    SalePrice: string;
    PlusPrice: string;
    formattedBasePrice: string;
    formattedSalePrice: string;
    formattedPlusPrice: string;
    Difficulty: string;
    HoursLow: string;
    HoursHigh: string;
    IsPS4: "0" | "1";
    IsPS5: "0" | "1";
  }[];
}

export interface GetActiveSalesResponse extends BaseResponse {
  sales: {
    ID: string;
    SaleTime: string;
    SaleEnd: string;
    NumGames: string;
    ImgURL: string;
    SaleName: string;
  }[];
}

export interface GetSaleResponse extends BaseResponse {
  SaleName: string;
  SaleTime: string;
  SaleEnd: string;
  ImgURL: string;
  Region: string;
  game_discounts: {
    PPID: string;
    Name: string;
    Difficulty: string;
    HoursLow: number;
    HoursHigh: number;
    IsPS4: "0" | "1";
    IsPS5: "0" | "1";
    LastDiscounted: string;
    DiscountedUntil: string;
    BasePrice: string;
    SalePrice: string;
    PlusPrice: string;
    formattedBasePrice: string;
    formattedSalePrice: string;
    formattedPlusPrice: string;
    PlatPricesURL: string;
  }[];
  dlc_discounts: {
    PPID: string;
    Name: string;
    BasePrice: string;
    SalePrice: string;
    PlusPrice: string;
    ParentGame: string;
    formattedBasePrice: string;
    formattedSalePrice: string;
    formattedPlusPrice: string;
    PlatPricesURL: string;
  }[];
}
