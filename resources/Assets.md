# Assets used during the demo

## Assets Description

Assuming the following supply chain:
```
MSD -> DHL -> KLM -> Recipient
```
- MSD creates the DDO (important information in this step is the `houseWaybill`)
- MSD handsover to DHL (important information in this step is the `DHLairWaybill`)
- DHL handsover to KLM (important information in this step is the `KLMairWaybill`)
- KLM handsover to Recipient

For each supply chain scenario we will have a ddo containing 3 xml files (one `HouseWaybill` and 2 `AirWaybill` one for each of the transporters in supply chain):

**HouseWaybill**: Master document containing information about the shipment
- ID: identifier
- Consigner: Information about the creator of the shipment
- Consignee: Final Recipient of the shipment
- Weight: Weight of the shipment
- Quantity: Number of items
- Description: Description about the shipment
- Origin: Origin location
- Destination: Final destination

**AirWaybill**: Document created for each freight forwarder (DHL, KLM)
- ID: identifier (same as `HouseWaybill` linking the documents together)
- Consigner: Information about entity doing the handover
- Consignee: Information about the entity accepting the handover
- FreightForwarder: Information about the transporter
- Origin: Origin of the freight with country code and airport code (possibly gps coordinates)
- Destination: Destination of the freight
- HandlingInstructions: Information about goods for handling (medical, covid, fragile, ...)
- ChargeAmount: Price of the shipment
- ConsignmentItem: information about the cargo (quantity, weight, volume, ...)
- OperationalFlight: Information about flight carrier and flight number

During the demo we are gonna use the following assets:


Title                       | Author            | When was created      | Content Type      | Files                 | DID (and url)
----------------------------|-------------------|-----------------------|-------------------|-----------------------|-----------------------
MSD Covid-19 Shipment  | MSD               | 2020-10-10T17:00:000Z | application/json   | [ddo1.json](https://raw.githubusercontent.com/keyko-io/odyssey-dashboard/2c72ef7baf8972f058803031f466e6f445bab114/resources/data/mock-data/ddo1.json) | [`did:nv:1b31817b8c459eafad9bf407b17222330780e74625d3417bf767ee3e158581e0`]( https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did:nv:1b31817b8c459eafad9bf407b17222330780e74625d3417bf767ee3e158581e0)         
MSD Test Shipment 2  | MSD               | 2020-10-10T17:00:000Z | application/json   | [ddo2.json](https://raw.githubusercontent.com/keyko-io/odyssey-dashboard/main/resources/data/mock-data/ddo2.json) | [`did:nv:d85c33f16f4e814eac81028eb8e0261119159154b900814c4089970d622a011f`]( https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did:nv:d85c33f16f4e814eac81028eb8e0261119159154b900814c4089970d622a011f)
MSD Test Shipment 3  | MSD               | 2020-10-10T17:00:000Z | application/json   | [ddo3.json](https://raw.githubusercontent.com/keyko-io/odyssey-dashboard/main/resources/data/mock-data/ddo3.json) | [`did:nv:99133f0ed537c4744fafabeb5981c0ad913093a8596dde00da1f57389990b900`]( https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did:nv:99133f0ed537c4744fafabeb5981c0ad913093a8596dde00da1f57389990b900)
MSD Test Shipment 4  | MSD               | 2020-10-10T17:00:000Z | application/json   | [ddo4.json](https://raw.githubusercontent.com/keyko-io/odyssey-dashboard/main/resources/data/mock-data/ddo4.json) | [`did:nv:10cf09531ab22f4092154cfecdb44af1efa95849facabbcb6c68c7fc8868a014`]( https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did:nv:10cf09531ab22f4092154cfecdb44af1efa95849facabbcb6c68c7fc8868a014)
MSD Test Shipment 5  | MSD               | 2020-10-10T17:00:000Z | application/json   | [ddo5.json](https://raw.githubusercontent.com/keyko-io/odyssey-dashboard/main/resources/data/mock-data/ddo5.json) | [`did:nv:493c26667cd2a4af27209927eae319e66f9932554714151b7d549cf9fe1b3755`]( https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did:nv:493c26667cd2a4af27209927eae319e66f9932554714151b7d549cf9fe1b3755)


## QR codes

When the assets are registered in Nevermined, the assets will be available in the Metadata API:

```
https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did%3Anv%3A1234
```

Using each URL, we should be able to generate a QR code. Each QR code to use during the demo
should be copied to the `resources/qr/` directory.
