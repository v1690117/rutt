# RUTT - Requirement, Use case, Task Traceability
## Problem to solve
While implementing any software development project we can write different documents and schemas - Requirement Specifications, Use cases,   Scenarios, Testing plans, Solutions, etc.
All of these are usually used on implementation stage of the project. When support stage comes these documents are often forgotten and not actual. It’s hard to understand why do we have some non-standard technical decision, what for they were implemented, why we need this feature and why that piece of code mustn’t be deleted.
We can search for information using git annotations, investigating commit messages, task tracker and some documentation. But track from solving problem to written code is lost.
This is not the problem when the project is not so big, team is well organised, each team member has its own role and responsibility.
But if project continues few years. All years are in rush. Customer needs more and more features. Team is quite big and mostly consists of juniors.  There is no time or desire for quality support. In this case project sooner or later becomes a mess.

## Solution


## Technical interests
* writing tests skill
* using microservices
* implementing auth*
* try different databases7

* dynamic react modules

## Plan
* Requirements module
* Use Case module
* Test module
* Task module
* integration with GL, RM, JIRA

## Details

![](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/v1690117/rutt/master/docs/Modules.puml)    
![](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/v1690117/rutt/master/docs/Sequence.puml)

## Start the project

### Backend

todo

### Frontend

1. Go to frontend folder
2. Add file `.env.local`

```
proxy_enabled=true
proxy_server=${
  YOUR_BACKEND_SERVER_URL
}
proxy_username=${
  YOUR_USERNAME
}
proxy_password=${
  YOUR_PASSWORD
}
```

3. Update dependencies and start the app

```cmd
yarn 
yarn start
```
