
let code = {}

code.install = `
npm install -g @syman/ark-cli
`

code.init = `
ark init
`

code.generate = `
ark generate --doc

`
code.preview = `
ark preview --doc
`
code.build = `
ark build --doc
`
code.publish = `
ark publish --doc
`

export default code;