---
id: overview
title: CaseFabric Extensions to CMMN
sidebar_label: Do we need extensions?
---

## Introduction

[CMMN](../cmmn/overview) is a official language intended to express the proceedings of a case.<br/>
CaseFabric Engine interprets CMMN and provides a runtime for handling cases.

In the daily practice of building software solutions, CMMN is not a _solve-all_.
The CMMN authors have recognized this, and the language has been designed with extensibility in the heart.

Within any XML element of the language, we have an option to add something like

```xml
<humanTask id="pid_cm_csVQy_167" name="Receive Greeting and Send Response" isBlocking="true">
  <extensionElements mustUnderstand="false">
     <casefabric:implementation xmlns:casefabric="org.cafienne" ref="sendresponse.humantask" />
  </extensionElements>
  ...
</humanTask>
```

As you can see in the example, CaseFabric provides for extensions at the level of a HumanTask.

## CaseFabric Extensions
CaseFabric provides for the following extensions to CMMN
- [Fault Handling](fault-handling)
- [Workflow extensions](workflow)
- [Business Identifiers](business-identifiers)
