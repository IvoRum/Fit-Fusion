export interface HalfAYearData {
  allClientsForHalfAyear: HalfAYearDataList[];
}

export interface HalfAYearDataList {
  listOfClients: MontlyVisitors[];
}

export interface MontlyVisitors {
  firstName: string;
  lastName: string;
  subscriptionName: string;
  subscriptionPrice: number;
  count: number;
}
