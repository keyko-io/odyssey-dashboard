
import config from './configRinkeby'
import { Nevermined, Account, DDO } from '@nevermined-io/nevermined-sdk-js'
import { getMetadata } from './ddo-metadata-generator'

async function publishDdo() {
    let nevermined: Nevermined
    let msd: Account
    let cargoDdo: DDO
    // Change the path to the ddo you want to publish
    let cargoMetadata = require('../resources/data/mock-data/ddo5.json')

    // nevermined instance
    nevermined = await Nevermined.getInstance(config)

    // Accounts
    ;[msd] = await nevermined.accounts.list()
    console.log(msd.getId())

    console.log('Registering the DDO')
    cargoDdo = await nevermined.assets.create(cargoMetadata, msd)
    console.log('Registered DDO with: ' + cargoDdo.id)
}

publishDdo()