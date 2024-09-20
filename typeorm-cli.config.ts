import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeReFactor1726747818693 } from 'src/migrations/1726812619975-CoffeeRefactor';
import { SchemaSync1726816023709 } from 'src/migrations/1726816023709-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeReFactor1726747818693, SchemaSync1726816023709],
});
