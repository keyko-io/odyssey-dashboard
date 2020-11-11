[![banner](https://raw.githubusercontent.com/keyko-io/assets/master/images/logo/small/keyko_logo@2x-100.jpg)](https://keyko.io)

# Odyssey Provenance Dashboard

> A unique and trusted source of truth for supply chain

> [keyko.io](https://keyko.io)


- [Odyssey Provenance Dashboard](#odyssey-provenance-dashboard)
  - [Introduction](#introduction)
    - [Main Problems](#main-problems)
    - [What do we need to do to improve that?](#what-do-we-need-to-do-to-improve-that)
    - [Benefits](#benefits)
  - [Odyssey Demo](#odyssey-demo)
  - [Dev quickstart](#dev-quickstart)
  - [Links](#links)


---


## Introduction

Fake and counterfeit medications kill tens of thousands of people around the world each year, with profits funding other criminal activities.

While this has always been a hot topic, the COVID-19 vaccine has really put it in the spotlight: imagine the first batches of vaccines arriving after being compromised, tampered with or not kept cool throughout their journey. How would that affect global trust in a COVID-19 vaccine?

COVID-19 has revealed the crucial role of the supply-chain within the global economy. In addition to security, speed and flexibility are now more critical than ever.

Within the context of COVID-19, effective data sharing and transparency are the way forward to improve collaboration within the supply chain. If you want to be fast while mitigating risks, you need to be a team-player. You cannot afford to wait a week to release your data, even towards a competitor.

### Main Problems

Some of the main problems identified in a typical air cargo flow are:

* There is no unique source of truth. There are multiple isolated and unrelated systems everywhere
* There is no complete provenance record that can be trusted
* The product associated can be tampered or mixed with counterfeits during transportation
* The customs office needs to know upfront that some goods are going to need to be validated
* Not much transparency. If something goes wrong, it’s difficult to understand how this happened
* It is difficult to recognize a bad actor and mitigate the impact of their actions
* There is no an effective and secure data sharing between parties
* Physical world is badly connected to the digital world


### What do we need to do to improve that?

During Odyssey we worked in an on-chain Provenance registry based in the [W3C Provenance specifications](https://www.w3.org/TR/2013/NOTE-prov-overview-20130430/). The W3C worked for providing a generic and standard able to track the information about entities, activities and people involved producing data or things.

Our motivation here is to provide a unique source of truth for all the parties involved during the cargo process. This is gonna be based in a Smart Contract and will include:

* The complete provenance record during the whole cargo life-cycle. This will provide a complete lineage of the goods during the cargo flow, since the manufacturing until the final delivery.
* The digital signatures of all the parties involved. To avoid the goods tampering, during the handover of the goods between parties the signatures of the parties involved are collected. In the same provenance record the solution is gonna keep these digital signatures identifying the entities involved.
* The integrity fingerprint of the digital assets involved. Any physical good going through the cargo flow has associated multiple digital files and metadata. This can include manufacturing details, product specifications, quality controls, etc. We are gonna record the fingerprint of these digital assets to flag if any of them are changed afterward.

### Benefits

What are the main benefits of it?

* In this solution, digital signatures are required for each step in the supply chain process. It makes possible to identify if an unexpected actor is taking the cargo and at what point happened.
* We make available an on-chain Provenance record as a unique source of truth. This provides a complete lineage of the cargo.
* Existing and independent Supply Chain Management (SCM) software components used by the different entities participating in the supply chain process, can be plugged to the network without modifications, and make information available to specific users.
* Notifying the customs office upfront, we can facilitate the process of goods going through it
* Transparency, the complete transactions record is kept in unique and decentralized place where everybody involved (having the right permissions) can get access to relevant information generated during the supply chain process
* It allows an automatic way of sharing digital assets and metadata related with the cargo (like quality control checks, receipts, customs clearance documents, etc.)
* Analytics and federated learning across all the parties data


## Odyssey Demo

During the Odyssey demo we want show how the multiple parties participating in the air cargo flow can use a common backbone to track and manage the provenance record of the cargo.
This brings the benefits described above.

### Merk demo

The flow of the demo using a Merk user is:

1. We open the application as a Merk user
1. We show the Merk home page with all the goods managed by Merk and the different states (Registered, In transit, Delivered, Problem detected)
1. We click the '+' to register a new good
1. The app opens a screen with the camara enabled, the Merk user scans the good QR code
1. After the QR is scanned, a screen asking for some additional metadata (name, description, etc.) is shown
1. The view with the list of items registered now has a new item. This item has the state of "Registered"
1. The user clicks in the item just created, and see the detailed view
1. In the detailed view we can see the QR of the good and some metadata. The item is in "Registered" state.
1. If we scroll down we can see the "Provenance" list with only one entry (green tick): "Registered"
1. If the user clicks in the first and unique item of the list a new view is opened showing the:
   - Digital signature of Merk as manufacturer
   - List of files associated with the good (product specs, quality report)
   - Each file will show a fingerprint (like the md5sum but abbreviated)
1. The user clicks in the "hand over" button
1. This open a view with the good QR code that can be shown to the DHL pick-up guy

### DHL demo

The flow of the demo using a DHL user is:

1. We open the application as a DHL user
1. We show the DHL home page with all the goods managed by DHL and the different states (In transit, Delivered, Problem detected)
1. We open the "Pick up" button from the app



## Dev quickstart

- Clone git
- Install expo framework globally using `npm install -g expo-cli`
- Install packages (inside folder) `yarn`
- Start web livereload app with `expo start --web`




## Links

* [Jerry  Figma file](https://www.figma.com/file/iELl37usbIpbs4eljI28tf/ui-wireframed?node-id=0%3A1) - Initial prototype
* [Esraa Figma file](https://www.figma.com/file/zUqPfgyYUkMyqe0rZ1XTq1/Material-Design-Theme-Kit-(Copy)?node-id=34483%3A29337) - Prototype implementing the flow described here
* [Odyssey Hackathon presentation](https://docs.google.com/presentation/d/1hzoNLZUAPvrR_Y-9_SoDU3mQJqzz8NnZ8Pmd6CLal8M/edit#slide=id.ga1a4bfbe4d_0_63)
