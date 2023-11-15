/*
  Warnings:

  - You are about to drop the column `description` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `SkillGroup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `description`,
    DROP COLUMN `firstName`,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `summary` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SkillGroup_name_key` ON `SkillGroup`(`name`);
