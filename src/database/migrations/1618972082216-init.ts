import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1618972082216 implements MigrationInterface {
  name = 'init1618972082216';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "task_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "complete" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_0385ca690d1697cdf7ff1ed3c2f" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "task_entity"`);
  }

}
