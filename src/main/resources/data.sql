INSERT INTO specifications
VALUEs (1, 'Project initial requirements');
INSERT INTO specifications
VALUEs (2, 'Another one specification');

INSERT INTO requirements
VALUES (1, 'App should do something', 1);
INSERT INTO requirements
VALUES (2, 'App should work', 1);
INSERT INTO requirements
VALUES (3, 'App should be implemented using Spring', 1);
INSERT INTO requirements
VALUES (4, 'App should have SPA based UI', 1);
INSERT INTO requirements
VALUES (5, 'App should contain DB interactions using Spring Data or/and Spring JDBC', 1);
INSERT INTO requirements
VALUES (6, 'App should contain auth things using Spring Security', 1);
INSERT INTO requirements
VALUES (7, 'Project should be cloud-ready', 1);

INSERT INTO tasks
VALUES (1, 'Form idea', '1)  find an idea  2) describe it  3)  plan implementation ');
INSERT INTO tasks
VALUES (2, 'Init project', 'Create basis using https://start.spring.io/');
INSERT INTO tasks
VALUES (3, 'Configure auto build and checks', 'Configure maven plugins, travis and codecov to run for push');
INSERT INTO tasks
VALUES (4, 'Initial UI configuration',
        'Configure typescript, webpack, react and so on to be ready to start UI development');

INSERT INTO requirements_tasks
VALUES (NULL, 3, 2);
INSERT INTO requirements_tasks
VALUES (NULL, 3, 3);
INSERT INTO requirements_tasks
VALUES (NULL, 1, 1);
INSERT INTO requirements_tasks
VALUES (NULL, 4, 4);
