import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Productos extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  idproducto: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
    required: true,
  })
  idcategoria: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
  })
  presentacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  idmarca: string;


  constructor(data?: Partial<Productos>) {
    super(data);
  }
}

export interface ProductosRelations {
  // describe navigational properties here
}

export type ProductosWithRelations = Productos & ProductosRelations;
