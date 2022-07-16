import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTokensTable1655446526941 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS Tokens(
        id INT PRIMARY KEY AUTO_INCREMENT,
        userId INT NOT NULL,
        accessToken VARCHAR(250) NOT NULL, 
        refreshToken VARCHAR(250) NOT NULL, 
        FOREIGN KEY (userId) REFERENCES Users (id) ,
        createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
        deletedAt TIMESTAMP 
        )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Tokens
        `);
    }
}
