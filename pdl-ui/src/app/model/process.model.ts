export class ProcessModel {
  id: number
  name: string;
  description: string;
  sequence: number;
  tag: string;
  
  constructor(id: number, name: string, description: string, 
    sequence: number, tag: string) {

      this.id = id;
      this.name = name;
      this.description = description;
      this.sequence = sequence;
      this.tag = tag;
    }
}