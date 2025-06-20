---
id: designmodels
title: Design Case Models in Mendix Studio Pro
sidebar_label: Add models to your App
---

## Introduction

## Start the modeler

When you want to add a case model to your Application - go to the domain model and
right-click on a persistent entity. That gives a context menu with starting the modeler.

![Start Modeler](assets/mendix/start_modeler.png)

As you see at the end of the context menu, you are able to start the modeler with the 'Case Management'
option or start the modeler with a specific Entity as root case file type.

![Start Modeler CaseFile](assets/mendix/start_modeler_casefile.png)

With the modeler started you can start building a model. [The IDE section](../ide/design-case) gives
more information how to use the modeler and build a model.

### Entities as Case File elements

The Case File structure inside a case instance is a JSON based (tree) structure. The Entity structure is Relational based (ERD)

Relational Database structures may refer to eachother circularly that is not possible with a tree based structure.
To ensure compatabily between Entity and Case File, you need to select the parts of the Entity and its associations become part
of the Case File.

Below we have a sample (test) model of a Person with different types of associations.

![Person domain model](assets/mendix/person_domain_model.png)

As you can see below, there is an option to checkmark the part of the Entity structure you like to use.
The schema below uses the MyFirstModule.Person type in a field named 'GivenPerson' and the connected vehicles
are part of the model. The other associations are not used or available in the case file.

The next thing you see is that it is possible to select '.MX' types as type for the case file item. These are
the Mendix entities availble in the various domain models. Multiplicity is selected due to the association settings
and business identifiers are not (yet) available for the DCM plugin.

![Person case file model](assets/mendix/person_casefile_model.png)

### Using Pages as Human Tasks

All pages available in your App are available as Human Tasks. 

![Page to HumanTask](assets/mendix/modeler_mxpage.png)

As the modeler cannot see wether a page should be usable as human task page, all pages are listed
so you can drag and drop it onto the case model. It automatically creates a input mapping
for the parameters defined on the page. 

The page as such needs to call the Task java actions to proceed the case.

### Using Microflows as Process Tasks

Within the modeler, all created microflows are available to add to your case model.

![Microflow to ProcessTask](assets/mendix/modeler_microflow.png)

All input and output parameters are mapped to be used with the case file. 

The mapping details of HumanTask and ProcessTask are found by clicking the 🔍 icon of the halo around the 
task representation (hover over the task)

![Click Magnifier](assets/mendix/modeler_implementation.png)

## Deploy the model

[Deploying a case](../ide/deploy-case) works as described but there are some limitations. 
The validation of the case model does not work via Studio Pro as it needs a running case engine at this moment. 

Deployment writes the files to ```$PROJECT_ROOT/resources/casemanagement``` to make it part of the App. 
Next to that it is directly written to ```$PROJECT_ROOT/deployment/model/resources/casemanagement``` allowing your running
App in Studio Pro to directly use the updated model in a running environment. (Hot Deployment)

**You need to use the Deploy option in the Case Modeler - otherwise the case is not available for use**



