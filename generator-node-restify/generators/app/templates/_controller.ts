import {<%= endpoint %>Service} from '../services/<%= endpoint %>.service';
import {errorDebugger} from '../utils/debuggers';
import {Request, Response} from "express";

const list<%= model %>s = async (req: Request, res: Response) => {
  try {
    const <%= endpoint %>s = await <%= endpoint %>Service.list();
    return res.send(<%= endpoint %>s || []);
  } catch (e) {
    errorDebugger(e);
    return res.status(500).send(e);
  }
};

const get<%= model %>ById = async (req: Request, res: Response) => {
  try {
    const <%= endpoint %> = await <%= endpoint %>Service.getById(req.params.id);
    res.send(<%= endpoint %>);
  } catch (e) {
    errorDebugger(e);
    return res.status(500).send(e);
  }
};

const remove<%= model %> = async (req: Request, res: Response) => {
  try {
    const response = await <%= endpoint %>Service.remove(req.params.id);
    return res.send(response);
  } catch (e) {
    errorDebugger(e);
    return res.status(500).send(e);
  }
};


const add<%= model %> = async (req: Request, res: Response) => {
  try {
    const result = await <%= endpoint %>Service.add({
      options
    });
    return res.send(result);
  } catch (e) {
    errorDebugger(e);
    return res.status(409).send(e);
  }

};



export = {
  list: list<%= model %>s,
  add: add<%= model %>,
  remove: remove<%= model %>,
  getById: get<%= model %>ById,
};
