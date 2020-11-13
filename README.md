[![banner](https://raw.githubusercontent.com/keyko-io/assets/master/images/logo/small/keyko_logo@2x-100.jpg)](https://keyko.io)

# Odyssey Provenance Dashboard

> A unique and trusted source of truth for supply chain

> [keyko.io](https://keyko.io)


[![Discord](https://img.shields.io/discord/775670012446507028.svg?color=7289da&label=Discord&logo=discord&style=flat-square)](https://discord.gg/H7gUwekcSt)

> Join the Odyssey Hackthon conversation in Nevermined Discord server (#odyssey)

---

* [Odyssey Provenance Dashboard](#odyssey-provenance-dashboard)
   * [Introduction](#introduction)
      * [Main Problems](#main-problems)
      * [What do we need to do to improve that?](#what-do-we-need-to-do-to-improve-that)
      * [Benefits](#benefits)
   * [Odyssey Demo](#odyssey-demo)
      * [MSD demo](#msd-demo)
      * [DHL demo](#dhl-demo)
      * [KLM demo](#klm-demo)
      * [Final recipient](#final-recipient)
      * [Customs Agent](#customs-agent)
   * [Bad Handover scenarios](#bad-handover-scenarios)
      * [Scenario 1 - Failed due diligence](#scenario-1---failed-due-diligence)
   * [Dev quickstart](#dev-quickstart)
   * [Nevermined integration](#nevermined-integration)
      * [Services](#services)
      * [Accounts](#accounts)
   * [Links](#links)



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

### MSD demo

The flow of the demo using a *MSD* user is:

1. We open the application as a *MSD* user
1. We show the *MSD* home page with all the goods managed by *MSD* and the different states (Registered, In transit, Delivered, Problem detected)
1. We click the '+' to register a new good
1. The app opens a screen with the camara enabled, the *MSD* user scans the good QR code
1. After the QR is scanned, a screen asking for some additional metadata (name, description, etc.) is shown
1. The view with the list of items registered now has a new item. This item has the state of "Registered"
1. The user clicks in the item just created, and see the detailed view
1. In the detailed view we can see the QR of the good and some metadata. The item is in "Registered" state.
1. If we scroll down we can see the "Provenance" list with only one entry (green tick): "Registered"
1. If the user clicks in the first and unique item of the list a new view is opened showing the:
   - Digital signature of *MSD* as manufacturer
   - List of files associated with the good (product specs, quality report)
   - Each file will show a fingerprint (like the md5sum but abbreviated)
1. The user clicks in the "hand over" button
1. This open a view with the good QR code that can be shown to the *DHL* pick-up guy

### DHL demo

The flow of the demo using a *DHL* user is:

1. We open the application as a *DHL* user
1. We show the *DHL* home page with all the goods managed by *DHL* and the different states (In transit, Delivered, Problem detected)
1. We open the "Pick up" button from the app, this open the camara view for scanning a QR
1. We scan the QR from the *MSD* app. We show a confirmation page where we say everything is looking good
1. We show again the home page, with the new cargo added, now the state is "In Transit"
1. The user clicks in the item just created, and see the detailed view
1. In the detailed view we can see the QR of the good and some metadata. The item is in "In Transit" state.
1. If we scroll down we can see the "Provenance" list with 2 entries (green tick): "Registered" and "Handed over"
1. If the user clicks in the second item of the list (Handed Over) a new view is opened showing the:
   - Digital signature of *MSD* as manufacturer and *DHL* as carrier
   - List of files associated with the good (product specs, quality report)
   - Each file will show a fingerprint (like the md5sum but abbreviated)
1. The user clicks in the "hand over" button

### KLM demo

The flow of the demo using a *KLM* user is:

1. We open the application as a *KLM* user
1. We show the *KLM* home page with all the goods managed by *KLM* and the different states (In transit, Delivered, Problem detected)
1. We open the "Pick up" button from the app, this open the camara view for scanning a QR
1. We scan the QR from the *DHL* app. We show a confirmation page where we say everything is looking good
1. We show again the home page, with the new cargo added, now the state is "In Transit"
1. The user clicks in the item just created, and see the detailed view
1. In the detailed view we can see the QR of the good and some metadata. The item is in "In Transit" state.
1. If we scroll down we can see the "Provenance" list with 3 entries (green tick): "Registered" and "Handed over" two times
1. If the user clicks in the third item of the list (Handed Over) a new view is opened showing the:
   - Digital signature of *DHL* and *KLM* as carriers
   - List of files associated with the good (product specs, quality report)
   - Each file will show a fingerprint (like the md5sum but abbreviated)
1. The user clicks in the "hand over" button

### Final recipient

The flow of the demo using the John Doe user is:

1. We open the application as a John Doe user
1. We show the user home page with all the goods controlled by the user and the different states (In transit, Delivered, Problem detected)
1. We open the "Pick up" button from the app, this open the camara view for scanning a QR
1. We scan the QR from the *KLM* app. We show a confirmation page where we say everything is looking good
1. We show again the home page, with the new cargo added, now the state is "In Transit"
1. The user clicks in the item just created, and see the detailed view
1. In the detailed view we can see the QR of the good and some metadata. The item is in "In Transit" state.
1. If we scroll down we can see the "Provenance" list with 4 entries (green tick): "Registered" and "Handed over" two times and "Delivered"
1. If the user clicks in the third item of the list (Handed Over) a new view is opened showing the:
   - Digital signature of *KLM* as carrier and John Doe
   - List of files associated with the good (product specs, quality report)
   - Each file will show a fingerprint (like the md5sum but abbreviated)
1. The user scroll down and can see the map with the complete journey of the cargo


### Customs Agent

The flow of the demo using the Customs Agent user is:

1. We open the application as a Customs Agent user
1. We show the user home page with all the goods needing clearance by the user and the in transit state
1. The Customs Agent wants to know who the Consignee is for a package so he presses the "Request Consginee Info" button
1. The Consignee, in this case *MSD*, gets a push notification that Customs is requesting additional information
1. The Consignee can select the "Accept Request" button, or the "Deny Request" button
    - If the Consignee selects "Accept", their infomation is signed and pushed the Customs Agent
    - If the Consignee selects "Deny", a "Request Denied" message is pushed to the Customs Agent
1. A response is received by the Customs Agent from the Consignee
1. The Customs Agent wants to know who the Consigner is for a package so he presses the "Request Consigner Info" button
1. The Consigner, in this case *John Doe*, gets a push notification that Customs is requesting additional information
1. The Consigner can select the "Accept Request" button, or the "Deny Request" button
    - If the Consigner selects "Accept", their infomation is signed and pushed the Customs Agent
    - If the Consigner selects "Deny", a "Request Denied" message is pushed to the Customs Agent
1. A response is received by the Customs Agent from the Consigner
1. The Customs Agent can then scroll down to two buttons: "Pre-Clear Shipment" or "Deny Pre-Clearance"
1. The Customs Agent selects either "Pre-Clear Shipment" or "Deny Pre-Clearance"
    - If "Pre-Clear Shipment" is selected, both the Consignee and the Consigner get a push notification that shipment has been pre-cleared by customs
    - If "Deny Pre-Clearance" is selected, both the Consignee and the Consigner get a push notification that shipment failed pre-clearance and additional information is required
1. The Customs Agent gets a notification that *KLM* is ready with a shipment and information about the shipment
1. The Customs Agent scrolls down to two buttons, one that says "Shipment Cleared" and what that says "Request Additional Information"
    - If the shipment matches a shipment that has been pre-cleared, the user selects the "Shipment Cleared" button
    - If the shipment does not match a shipment that has been pre-cleared, the user can request the Consignee and Consigner information (see same flow above)
      - The user selects either "Approve Shipment" or "Deny Shipment"
      - If "Approve Shipment" is selected, the Consignee, the Consigner and *KLM* get push notifications that shipment has been "Approved for Shipping" by customs
      - If "Deny Shipment" is selected, the Consignee, the Consigner and *KLM* get a push notification that shipment failed clearance and additional information is required

## Bad Handover scenarios

Since the handover seems to be the most important part of the supply chain it is important to go through some of the failure scenarios that can happen during the handover and detail how our solution behaves in this case. The users of this solution don't want just to see an ❌ but we want to also know what was the reason for the handover to fail.

Imagine the case where a handover fails between *MSD* and *DHL*. Which side is at fault? Maybe *DHL* presented wrong identity credentials during the handover and *MSD* decied to cancel the handover. Or maybe *DHL* after looking at the metadata associated with the cargo found problems and decided to cancel the handover.

In this section we detail some failed handover scenario. We will focus on two actors, with *MSD* trying to handover cargo the *DHL*.

### Scenario 1 - Failed due diligence

1. *MSD* clicks in the "hand over" button:
   - *MSD* possibly needs to select the identity of *DHL* or this is already somehow predefined for this cargo.
   - This represents *MSD's* intent to handover the cargo to *DHL*
   - (Could this action be recorded in the provenance contract?)
2. This open a view with the QR code (unique to this handover) that can be shown to the *DHL* pick-up guy
3. *DHL* opens the application
4. We show the *DHL* home page with all the goods managed by *DHL* and the different states (In transit, Delivered, Problem detected)
5. *DHL* clicks the "Pick up" button from the app, this open the camara view for scanning a QR
6. We scan the QR from the *MSD* app. We show a confirmation page where we say that there is a problem with the cargo
7. We show again the home page, with the new cargo added, still in the state "Registered"
8. The user clicks in the item just created, and see the detailed view
9.  In the detailed view we can see the QR of the good and some metadata. The item is in the "Registered" state.
10. If we scroll down we can see the "Provenance" list with 2 entries (green tick): "Registered" and (greyed out pending) "Handed over"
11. If the user clicks in the second item of the list (Handed Over) a new view is opened showing the:
    - Digital signature of *MSD* as manufacturer
    - List of files associated with the good (product specs, quality report)
    - Each file will show a fingerprint (like the md5sum but abbreviated)
12. *DHL* clicks in the "cancel hand over" button
    - Maybe this can also be recorded in the provenance contract

Depending on what is recorded in the provenance contract in this scenario we could learn that:
- *MSD* met with *DHL* and showed intent to handover the cargo
- *DHL* denied the handover specifying some reason


## Dev quickstart

- Clone git
- Install expo framework globally using `npm install -g expo-cli`
- Install packages (inside folder) `yarn`
- Start web livereload app with `expo start --web`


## Nevermined integration

We are using Rinkeby network

### Services

* Keeper (Infura) - https://rinkeby.infura.io/v3/1c75f192257c497e91f30832666d179e
* Gateway - https://gateway.keyko.rocks/
* Metadata API - https://metadata.keyko.rocks/

### Accounts

Owner               | Address                                      | Info
--------------------|----------------------------------------------|--------------
MSD                 | `0xe2DD09d719Da89e5a3D0F2549c7E24566e947260` | 0.1          
DHL                 | `0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e` | 0.1          
KLM                 | `0xA78deb2Fa79463945C247991075E2a0e98Ba7A09` | 0.1          
John Doe            | `0x02354A1F160A3fd7ac8b02ee91F04104440B28E7` | 0.1          
Customs             | `0xe17D2A07EFD5b112F4d675ea2d122ddb145d117B` | 0.1          



## Links

* [Jerry  Figma file](https://www.figma.com/file/iELl37usbIpbs4eljI28tf/ui-wireframed?node-id=0%3A1) - Initial prototype
* [Esraa Figma file](https://www.figma.com/file/zUqPfgyYUkMyqe0rZ1XTq1/Material-Design-Theme-Kit-(Copy)?node-id=34483%3A29337) - Prototype implementing the flow described here
* [Odyssey Hackathon presentation](https://docs.google.com/presentation/d/1hzoNLZUAPvrR_Y-9_SoDU3mQJqzz8NnZ8Pmd6CLal8M/edit#slide=id.ga1a4bfbe4d_0_63)
