import {<%= model %>} from '../models/<%= endpoint %>.model';
import {errorDebugger} from '../utils/debuggers';

async function list<%= model %>() {
  try {
    return await <%= model %>.find({});
  } catch (e) {
    errorDebugger(e);
    throw e;
  }
}

async function get<%= model %>ById(<%= endpoint %>Id) {
  try {
    const <%= endpoint %> = await <%= model %>.findById(<%= endpoint %>Id);
    if (!<%= endpoint %>) {
      throw Error(`No <%= endpoint %> with this id: ${<%= endpoint %>Id}`);
    }
    return <%= endpoint %>;
  } catch (e) {
    errorDebugger(e);
    throw e;
  }
}

async function add<%= model %>(options) {
  try {
    return new <%= model %>(options).save();
  } catch (e) {
    throw e;
  }
}

async function remove<%= model %>(<%= endpoint %>Id) {

  try {
    const result = await <%= model %>.findByIdAndDelete(<%= endpoint %>Id);
    if (!result) {
      throw  Error(`<%= model %> with id: ${<%= endpoint %>Id} doesn't exist`);
    }
    return result;
  } catch (e) {
    throw e;
  }

}

async function update<%= model %>(<%= endpoint %>Id, <%= endpoint %>Update: I<%= model %>Update) {

  try {
    const result = await <%= model %>.findById(<%= endpoint %>Id);
    if (!result) {
      throw  Error(`<%= model %> with id: ${<%= endpoint %>Id} doesn't exist`);
    }
    await result.updateOne(<%= endpoint %>Update);
    return result;
  } catch (e) {
    throw e;
  }
}

export = {
  list: list<%= model %>,
  add: add<%= model %>,
  remove: remove<%= model %>,
  getById: get<%= model %>ById,
}
