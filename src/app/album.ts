export class Album {
  // id: string,
  // ref: string;
  // name: string;
  // title: string;
  // description: string;
  // duration: number;
  // status: string;
  // url?: string;
  // tags?: string[];
  // like?: string;

  // injection de propriétés (promotion de constucteur php 8)
  constructor(
    public id: string,
    public ref: string,
    public name: string,
    public title: string,
    public description: string,
    public duration: number,
    public status: string,
    public url?: string,
    public tags?: string[],
    public like?: string,
  ){

  }


}

export interface List {
  id: string;
  list: string[];
}
