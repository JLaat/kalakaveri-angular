export interface Fish {
  map(arg0: (fish: Fish) => string): unknown;
  fish: any;
  id: number;
  name: string;
}
