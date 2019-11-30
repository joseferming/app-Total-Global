import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './dbmongo.datasource.json';

export class DbmongoDataSource extends juggler.DataSource {
  static dataSourceName = 'dbmongo';

  constructor(
    @inject('datasources.config.dbmongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
