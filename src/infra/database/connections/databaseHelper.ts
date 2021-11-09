import {
  Connection,
  createConnection,
  EntityTarget,
  Repository,
} from 'typeorm';

export const databaseHelper = {
  client: null as unknown as Connection,
  async connect(): Promise<void> {
    /* istanbul ignore next */
    this.client = await createConnection();
  },
  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null as any;
  },
  async getRepository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {
    if (!this.client || !this.client.isConnected) {
      await this.connect();
    }

    return this.client.getRepository<T>(entity);
  },
};
