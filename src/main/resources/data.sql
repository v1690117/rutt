INSERT INTO specifications
VALUEs (1, 'Project initial requirements');
INSERT INTO specifications
VALUEs (2, 'Another one specification');

INSERT INTO requirements
VALUES (1, 'App should be useful', 1, NULL);
INSERT INTO requirements
VALUES (2, 'App should work', 1, NULL);
INSERT INTO requirements
VALUES (3, 'App should be implemented using Spring', 1, NULL);
INSERT INTO requirements
VALUES (4, 'App should have SPA based UI', 1, NULL);
INSERT INTO requirements
VALUES (5, 'App should contain DB interactions using Spring Data or/and Spring JDBC', 1, NULL);
INSERT INTO requirements
VALUES (6, 'App should contain auth things using Spring Security', 1, NULL);
INSERT INTO requirements
VALUES (7, 'Project should be cloud-ready', 1, NULL);
INSERT INTO requirements
VALUES (8, 'App should do smth', 1, 1);
INSERT INTO requirements
VALUES (9, 'App should start', 1, 2);
INSERT INTO requirements
VALUES (10, 'App should stop', 1, 2);
INSERT INTO requirements
VALUES (11, 'App should not stop without command', 1, 9);
INSERT INTO requirements
VALUES (12, 'Spring boot should be used', 1, 3);
INSERT INTO requirements
VALUES (13, 'App should have strong types', 1, 4);
INSERT INTO requirements
VALUES (14, 'TS should be used', 1, 13);

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

INSERT INTO business_processes
VALUES (1, 'Test Plan', 'Describes base steps for Test Plan creation.');
INSERT INTO business_processes
VALUES (2, 'Requirement BP Traceability', 'Describes base steps for Test Plan creation.');

INSERT INTO bp_steps
VALUES (1, 'Business Processes Description', '', 1);
INSERT INTO bp_steps
VALUES (2, 'Functional Specification Creation', '', 1);
INSERT INTO bp_steps
VALUES (3, 'BP - FS Matrix Creation', '', 1);

INSERT INTO functional_specifications
VALUES (1, 'Functional Specifications', 'Functions to work with Functional Specifications, its content and relations');
INSERT INTO functional_specifications
VALUES (2, 'Business Processes', 'Functions to work with Business Processes, its content and relations');

INSERT INTO functions
VALUES (1, 'Create FS',
        'Creates new Functional Specification (FS) in the system. It is possible to provide title and description for the new FS.',
        1);
INSERT INTO functions
VALUES (2, 'Edit FS',
        'Provides possibility to change  new Functional Specification (FS) attributes', 1);
INSERT INTO functions
VALUES (3, 'Delete FS',
        'Provides possibility to delete new Functional Specification (FS) from the system.
To delete FS it is necessary to have special rights.',
        1);