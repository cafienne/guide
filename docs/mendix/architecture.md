---
id: architecture
title: Mendix Dynamic Case Management Architecture
sidebar_label: DCM Add-On Architecture
---

## Introduction

The Mendix Dynamic Case Management Add-On is a marketplace module embedded into the Mendix App.
Basically a set of java actions with supporting jar files are added to the App and by running 
the startup action in a startup microflow, the case engine becomes operational. 

![Architecture](assets/mendix/DCM_Architecture.jpg)

The case engine as such is based on persistent actors using event sourcing. All supporting data is stored 
in the configured mendix database prefixed by ```casemanagement$```.

This guide contains an HTTP API reference - **That is not available for the DCM module** as the module is 
embedded right into the Mendix App and made available via Java Actions.

**Note on security** 

When your app does not use any of the java actions, there is *no* functionality exposed to the outside world. 
The point as such is unrealistic as adding DCM has the intent of using it. The point is that depending on 
they way your application is built, DCM will be more or less securely available. 

## Project File Structure (and Runtime)

After adding DCM to your App project, the folder structure is extended with:

 - $PROJECT_ROOT
    - casesource = the models used by the studio pro plugin
    - resources/casemanagement = deployed case models* to be bundled for runtime deployment
    - deployment/model/resources/casemanagement = the runtime deployed case models*
    - extensions/CaseManagementExtension = the Studio Pro plugin
    - vendorlib = additional jar files required to run the case engine

* deployed case models bundle all details required to run into one xml (cmmn) file.
    Deployment of the case model does 2 things. First add it to resources/casemanagement, secondly it is\
    added to deployment/model/resources/casemanagement. The first is actually the app bundle and when you hit 
    run in studio pro, this will be copied to the deployment/model/resources/casemanagement folder. 
    As we already copy it to the deployment location, you can start with the updated case model without restarting

## Runtime 

### Case engine runtime

More detailed [information on the case engine runtime](../engine/overview) 

### Case file structure and Entity structure compatibility

Entities are used as input and output for interaction with the case. More details on how to use that are found in [Add models to your app](designmodels)

### Note on Inheritance

As you see in the sample model at the [Add models to your app](designmodels) page, it is possible to define
inheritance and its available in the case file. 
When you refer to the base Entity (Vehicle in this example), you can only use Vehicle properties in your case file model.

**Currently the specific elements (Car, Cycle) are serialized into the case file, they are not recognized as types**

### Entity and Case File integration

Entities are passed on into the case file structure when you start a case or when you complete a task. 
Next to that you are able to update the 'Context' of the case instance or task instance by explicitly updating. 

**At this moment, updates on Entities outside the case file are not automatically merged into the case file.**

But when you update a persistent entity inside the case file, **it is automatically updated in the entity.**

#### Entity and casefile transaction boundaries

**Be Aware**

When you pass on an Entity to the case engine in ways mentioned above, the Entity needs to be fully available in the database.
This means that when you create or update entities in microflows, the need to be commited **and** need an **communityCommons.EndTransaction**.
Without the EndTransaction, using the case engine will lead to errors. 

This issue is due to the fact the case engine runs as a Mendix Add-On and cannot use the same database transactions as the 
Mendix system uses as it runs with its own database connection.




