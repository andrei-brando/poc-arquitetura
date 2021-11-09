// import { Connection, createConnection, EntityTarget, Repository } from 'typeorm';

// export class Database {
//   connection: null as unknown as Connection;

//   public async connect(): Promise<void> {
//     if (!Database.connection) {
//       Database.connection = await createConnection();
//     }
//   }

//   public async disconnect() {
//     if (!Database.connection) {
//       throw new Error('CONEXAO_DATABASE_NAO_ABERTA');
//     }

//     await Database.connection.close();
//   }

//   async getRepository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {
//     if (!this.connection || !this.connection.isConnected) {
//       await this.connect();
//     }

//     return this.client.getRepository<T>(entity);
//   },
// }
