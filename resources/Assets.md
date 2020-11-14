# Assets used during the demo

## Assets Description

Assuming the following supply chain:
```
MSD -> DHL -> KLM -> DHL -> Recipient
```

For each supply chain scenario we will have a ddo containing 4 xml files (one `HouseWaybill` and 3 `AirWaybill` one for each of the transporters in supply chain):

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


Title                       | Author            | When was created      | Content Type      | Files
----------------------------|-------------------|-----------------------|-------------------|-----------------------
Covid Vaccines (box of 10)  | MSD               | 2020-10-10T17:00:000Z | application/xml   | https://github.com/keyko-io/odyssey-dashboard/blob/main/resources/data/w001559_v02_XFZB/UnqualifiedDataType_8p0.xsd          
Covid Vaccines (box of 50)  | MSD               | 2019-11-10T13:24:530Z | application/xml   | https://github.com/keyko-io/odyssey-dashboard/blob/main/resources/data/w001559_v02_XFZB/HouseWaybill_1.xsd + https://github.com/keyko-io/odyssey-dashboard/blob/main/resources/data/w001559_v02_XFZB/UnqualifiedDataType_8p0.xsd          


## QR codes

When the assets are registered in Nevermined, the assets will be available in the Metadata API:

```
https://metadata.keyko.rocks/api/v1/metadata/assets/ddo/did%3Anv%3A1234
```

Using each URL, we should be able to generate a QR code. Each QR code to use during the demo
should be copied to the `resources/qr/` directory.
