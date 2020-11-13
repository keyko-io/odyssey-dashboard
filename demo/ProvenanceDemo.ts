
import config from './configRinkeby'
import { Nevermined, Account, DDO, Keeper } from '@nevermined-io/nevermined-sdk-js'
import { getMetadata } from './ddo-metadata-generator'
import ProvenanceRegistry, { Activities } from '@nevermined-io/nevermined-sdk-js/dist/node/keeper/contracts/ProvenanceRegistry'


async function demo() {
    let nevermined: Nevermined
    let provenanceRegistry: ProvenanceRegistry

    let msd: Account
    let dhl: Account
    let klm: Account
    let johnDoe: Account
    let customs: Account

    let cargoDdo: DDO

    // nevermined instance
    nevermined = await Nevermined.getInstance(config)
    provenanceRegistry = nevermined.keeper.provenanceRegistry

    // Accounts
    ;[msd, dhl, klm, johnDoe, customs] = await nevermined.accounts.list()
    console.log(msd.getId())
    console.log(dhl.getId())
    console.log(klm.getId())
    console.log(johnDoe.getId())
    console.log(customs.getId())

    console.log('MSD should register and asset for the cargo')
    cargoDdo = await nevermined.assets.create(getMetadata() as any, msd)

    console.log('MSD generates entity [wasGeneratedBy]')
    await provenanceRegistry.wasGeneratedBy(
        cargoDdo.id,
        msd.getId(),
        Activities.GENERATED,
        [dhl.getId(), klm.getId(), johnDoe.getId()],
        'acmeStuffManufacturing',
        msd.getId()
    )

    console.log('MSD assigns responsibility for manufacturing [wasAssociatedWith]')
    await provenanceRegistry.wasAssociatedWith(
        cargoDdo.id,
        msd.getId(),
        Activities.MANUFACTURING,
        [],
        'acmeStuffManufacturing',
        msd.getId()
    )

    console.log('MSD delegates to DHL [actedOnBehalfOf]')
    await provenanceRegistry.actedOnBehalfOf(
        cargoDdo.id,
        dhl.getId(),
        msd.getId(),
        Activities.TRANSPORTATION,
        [],
        'groundTransportation',
        msd.getId()
    )

    console.log('DHL assigns responsibility for ground transportation [wasAssociatedWith]')
    await provenanceRegistry.wasAssociatedWith(
        cargoDdo.id,
        dhl.getId(),
        Activities.TRANSPORTATION,
        [],
        'groundTransportation',
        dhl.getId()
    )


    console.log('DHL begins transportation [used]')
    await provenanceRegistry.used(
        cargoDdo.id,
        dhl.getId(),
        Activities.TRANSPORTATION,
        'groundTransportation',
        dhl.getId()
    )

    console.log('DHL delegates to KLM [actedOnBehalfOf]')
    await provenanceRegistry.actedOnBehalfOf(
        cargoDdo.id,
        klm.getId(),
        dhl.getId(),
        Activities.TRANSPORTATION,
        [],
        'airTransportation',
        dhl.getId()
    )


    console.log('KLM assigns responsibility for air transportation [wasAssociatedWith]')
    await provenanceRegistry.wasAssociatedWith(
        cargoDdo.id,
        klm.getId(),
        Activities.TRANSPORTATION,
        [],
        'airTransportation',
        klm.getId()
    )

    console.log('KLM begins transportation [used]')
    await provenanceRegistry.used(
        cargoDdo.id,
        klm.getId(),
        Activities.TRANSPORTATION,
        'AirTransportation',
        klm.getId()
    )


    console.log('KLM delegates to John Doe [actedOnBehalfOf]')
    await provenanceRegistry.actedOnBehalfOf(
        cargoDdo.id,
        johnDoe.getId(),
        klm.getId(),
        Activities.DELIVERY,
        [],
        'delivery',
        klm.getId()
    )
}

demo()