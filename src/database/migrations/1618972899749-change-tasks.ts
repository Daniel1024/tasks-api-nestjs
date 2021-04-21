import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeTasks1618972899749 implements MigrationInterface {
  name = 'changeTasks1618972899749';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task_entity" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "task_entity" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "creation_at"`);
  }

}
