# SUSE Challenge - Systems Dashboard

This challenge is composed by two modules

For more information and how to run each module please consult their own README


# Systems API

Api to serve all the needed data for the UI


# Systems UI

Dashboard for SUSE systems built with react. It uses the systems-api to gather all the needed data.


# Nice improvements that were out of this project scope

* Transform this in a multi module project, thus having a easier life runing integrated tests and launching everything needed.
 We could use lerna or the yarn multi module new feature

* Have E2E and integration tests integrated with the systems-api. I would probably check this out: https://www.cypress.io/
