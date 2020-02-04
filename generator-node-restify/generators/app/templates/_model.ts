import db from '../services/db.service';
import {Document, Model, Schema, SchemaTypes} from "mongoose";
const String = SchemaTypes.String;

export interface I<%= model %>Update{
}

export interface I<%= model %> extends Document{
  id: string,
    customFunction()
}
const <%= model %>Schema: Schema = new db.Schema({
  id: String,
});

<%= model %>Schema.methods.customFunction = async function (): Promise <Model<I<%= model %>>>{
  this.id = 'custom';
await this.save();
return this;
};

const <%= model %>: Model<I<%= model %>> = db.model('<%= model %>', <%= model %>Schema);
export {<%= model %>};
