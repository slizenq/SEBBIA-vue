import { shallowEqual } from "shallow-equal-object";



const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
  };
  
  export abstract class Entity<T> {
    protected props: T;
  
    constructor (props: T) {
      this.props = props;
    }
  
    public equals (object?: Entity<T>) : boolean {
  
      if (object == null || object == undefined) {
        return false;
      }
  
      if (this === object) {
        return true;
      }
  
      if (!isEntity(object)) {
        return false;
      }
      return shallowEqual(this.props, object.props)
  
    }
  }