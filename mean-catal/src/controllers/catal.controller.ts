import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Productos} from '../models';
import {ProductosRepository} from '../repositories';

export class CatalController {
  constructor(
    @repository(ProductosRepository)
    public productosRepository : ProductosRepository,
  ) {}

  @post('/productos', {
    responses: {
      '200': {
        description: 'Productos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Productos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
  schema: getModelSchemaRef(Productos, {exclude: ['idproducto']}),
        },
      },
    })
    productos: Omit<Productos, 'idproducto'>,
  ): Promise<Productos> {
    return this.productosRepository.create(productos);
  }

  @get('/productos/count', {
    responses: {
      '200': {
        description: 'Productos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Productos)) where?: Where<Productos>,
  ): Promise<Count> {
    return this.productosRepository.count(where);
  }

  @get('/productos', {
    responses: {
      '200': {
        description: 'Array of Productos model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Productos)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Productos)) filter?: Filter<Productos>,
  ): Promise<Productos[]> {
    return this.productosRepository.find(filter);
  }

  @patch('/productos', {
    responses: {
      '200': {
        description: 'Productos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productos, {partial: true}),
        },
      },
    })
    productos: Productos,
    @param.query.object('where', getWhereSchemaFor(Productos)) where?: Where<Productos>,
  ): Promise<Count> {
    return this.productosRepository.updateAll(productos, where);
  }

  @get('/productos/{idproducto}', {
    responses: {
      '200': {
        description: 'Productos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Productos)}},
      },
    },
  })
  async findById(@param.path.string('idproducto') id: string): Promise<Productos> {
    return this.productosRepository.findById(id);
  }

  @patch('/productos/{idproducto}', {
    responses: {
      '204': {
        description: 'Productos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('idproducto') idproducto: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productos, {partial: true}),
        },
      },
    })
    productos: Productos,
  ): Promise<void> {
    await this.productosRepository.updateById(idproducto, productos);
  } 

  @put('/productos/{idproducto}', {
    responses: {
      '204': {
        description: 'Productos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('idproducto') idproducto: string,
    @requestBody() productos: Productos,
  ): Promise<void> {
    await this.productosRepository.replaceById(idproducto, productos);
  }

  @del('/productos/{idproducto}', {
    responses: {
      '204': {
        description: 'Productos DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('idproducto') idproducto: string): Promise<void> {
    await this.productosRepository.deleteById(idproducto);
  }
}
