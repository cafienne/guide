---
id: ObtainingCafDemo
title: Obtaining CaseFabric Demo
sidebar_label: Obtaining CaseFabric Demo
---

In order to get access to the demo environment, you need to be registered with CaseFabric. You can fill out the form at [casefabric.com](https://casefabric.com). 

## Prerequisites
In order to run CaseFabric Demo, you need to have
- [Docker](https://www.docker.com/) installation
- a [GitHub](https://github.com/join) account

The demo runs as a set of docker images, and the configuration of these images is available in a git repository.
We assume you have some basic knowledge of working with GitHub and Docker.


## Clone the repository and get started
When authorized, you can clone the repository from Github by running the following command in a terminal: `git clone https://github.com/cafienne/getting-started`.

Now, you can pull the latest CaseFabric docker images by running `docker-compose pull` and bringing it up by running  `docker-compose up`. You can now start working with CaseFabric.

There are  two methods to stop and/or remove the environment.  

* `docker-compose down`   will stop the running environment and remove all created containers. Only use this method if you want to rebuild all containers and start with a clean environment, because everything is completely removed.

* `docker-compose stop`   only stops the running containers. All data is preserved. Use this method if you want to preserve all your running cases.Once stopped, you can start the containers by running docker-compose -f cafienne-demo.yml start 

## Exposed URLs of the CaseFabric Demo environment
After starting up the CaseFabric Demo environment, the following URL allow you to access the various parts of the environment:

* CaseFabric IDE: http://localhost:2081
* CaseFabric task user interface: http://localhost:3317
* CaseFabric API (exposed through Swagger): http://localhost:2027
* MailCatcher web UI: http://localhost:1080

You can logon to these parts by using `admin` for the username and `cafienne` for the password.
<br/>Next to the admin there are 3 predefined users:

| name | password |
| ---- | -------- |
| lara | lara |
| suzy | suzy |
| hank | hank |


## More information
More information about running the CaseFabric Demo environment is available in the documentation of the [getting-started](https://github.com/cafienne/getting-started) repository in GitHub.
