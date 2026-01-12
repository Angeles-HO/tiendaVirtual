import { Pool } from 'pg'; // Importa el módulo 'pg' para manejar conexiones a PostgreSQL

const poolConfig = {
  user: usuario_de_la_database, // process.env.PG_USER debe estar definido en las variables de entorno
  password: contraseña_de_la_database, // process.env.PG_PASSWORD debe estar definido en las variables de entorno
  host: host_de_la_database, // process.env.PG_HOST debe estar definido en las variables de entorno
  port: puerto_de_la_database, // process.env.PG_PORT debe estar definido en las variables de entorno
  database: nombre_de_la_database, // process.env.PG_DATABASE debe estar definido en las variables de entorno
  options: '-c search_path=public', // Establece el esquema de búsqueda a 'public'
};

const pool = new Pool(poolConfig);

export default pool;
