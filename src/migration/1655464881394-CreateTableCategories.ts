import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCategories1655464881394 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Categories (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nameCategory VARCHAR(255) NOT NULL,
                icon VARCHAR(255) NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Categories
        `);
    }
}
