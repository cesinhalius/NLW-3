import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import Orphanage from '../model/Orphanege';
import orphanageView from '../views/Orphanage_view';
import * as Yup from 'yup';

export default {
  async show(req: Request,resp:Response){

    const { id } = req.params;
    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations:['images']
    });

    return resp.json(orphanageView.render(orphanage))
  },
    async index(req: Request,resp:Response){
      const orphanagesRepository = getRepository(Orphanage)

      const orphanages = await orphanagesRepository.find({
        relations: ['images']
      });

      return resp.json(orphanageView.renderMany(orphanages))
    },

  async create(req: Request,resp:Response){
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_weekends
    } = req.body;
  
    const orphanagesRepository = getRepository(Orphanage);

    const requestImg = req.files as Express.Multer.File[];

    const images = requestImg.map(image => {
      return {path: image.filename}
    })
  
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_weekends,
      images
    };

    const schema = Yup.object().shape({
      name:Yup.string().required(),
      latitude:Yup.number().required(),
      longitude:Yup.number().required(),
      about:Yup.string().required().max(300),
      instructions:Yup.string().required(),
      opening_hours:Yup.string().required(),
      open_weekends:Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path:Yup.string().required()
        }) )
    });

    await schema.validate(data,{
      abortEarly: false
    });
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_weekends,
      images
    });
  
    await orphanagesRepository.save(orphanage);
  
    return resp.status(201).json(orphanage)
  }
  }
