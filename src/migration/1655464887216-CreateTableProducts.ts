import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProducts1655464887216 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Products (
                id INT PRIMARY KEY AUTO_INCREMENT,
                categoryId INT NOT NULL,
                userId INT NOT NULL,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255),
                price INT NOT NULL,
                year INT CHECK (year <= 2022),
                status BOOLEAN NOT NULL,
                FOREIGN KEY (categoryId) REFERENCES Categories (id) ON DELETE CASCADE,
                FOREIGN KEY (userId) REFERENCES Users (id) ON DELETE CASCADE,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Products
        `);
    }
}
