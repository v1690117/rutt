DROP TABLE IF EXISTS tasks_usecases;
DROP TABLE IF EXISTS requirements_usecases;
DROP TABLE IF EXISTS requirements_tasks;
DROP TABLE IF EXISTS requirements;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS usecases;
DROP TABLE IF EXISTS specifications;

CREATE TABLE specifications
(
    id   BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);
CREATE TABLE requirements
(
    id   BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255),
    specification_id BIGINT NOT NULL,
    CONSTRAINT requirements_specification_id_fk
        FOREIGN KEY (specification_id)
            REFERENCES specifications (id)
);
CREATE TABLE tasks
(
    id          BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(100) NOT NULL,
    description VARCHAR(255)
);
CREATE TABLE usecases
(
    id          BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(2555)
);
CREATE TABLE requirements_tasks
(
    id             BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    requirement_id BIGINT NOT NULL,
    task_id        BIGINT NOT NULL,
    CONSTRAINT r_t_requirement_id_fk
        FOREIGN KEY (requirement_id)
            REFERENCES requirements (id),
    CONSTRAINT r_t_task_id_fk
        FOREIGN KEY (task_id)
            REFERENCES tasks (id)
);
CREATE TABLE requirements_usecases
(
    id             BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    requirement_id BIGINT NOT NULL,
    usecase_id     BIGINT NOT NULL,
    CONSTRAINT r_u_requirement_id_fk
        FOREIGN KEY (requirement_id)
            REFERENCES requirements (id),
    CONSTRAINT r_u_usecase_id_fk
        FOREIGN KEY (usecase_id)
            REFERENCES usecases (id)
);
CREATE TABLE tasks_usecases
(
    id             BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task_id BIGINT NOT NULL,
    usecase_id     BIGINT NOT NULL,
    CONSTRAINT t_u_task_id_fk
        FOREIGN KEY (task_id)
            REFERENCES tasks (id),
    CONSTRAINT t_u_usecase_id
        FOREIGN KEY (usecase_id)
            REFERENCES usecases (id)
);
