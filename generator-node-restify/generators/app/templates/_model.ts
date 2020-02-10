import db from '../services/db.service';
import {Document, Model, Schema} from "mongoose";
const StringType = Schema.Types.String;

export interface I<%= model %>Update{
}

export interface I<%= model %> extends Document{
    customFunction()
}
const <%= model %>Schema: Schema = new db.Schema({
});

<%= model %>Schema.methods.customFunction = async function (): Promise <Model<I<%= model %>>>{
return this;
};

const <%= model %>: Model<I<%= model %>> = db.model('<%= model %>', <%= model %>Schema);
export {<%= model %>};
