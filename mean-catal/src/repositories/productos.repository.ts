import {DefaultCrudRepository} from '@loopback/repository';
import {Productos, ProductosRelations} from '../models';
import {DbmongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductosRepository extends DefaultCrudRepository<
  Productos,
  typeof Productos.prototype.idproducto,
  ProductosRelations
> {
  constructor(
    @inject('datasources.dbmongo') dataSource: DbmongoDataSource,
  ) {
    super(Productos, dataSource);
  }
}
