export const cutDid = (did: string) => did.replace(/^(\w+:\w+:[a-f0-9]{8}).+([a-f0-9]{8})$/i, '$1...$2')
