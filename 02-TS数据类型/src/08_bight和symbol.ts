export default {}

// bight类型: 表示非常大的数
// symbol类型: 表示全局唯一引用
// ES2020可用

const Hundred1: bigint = BigInt(100)
const Hundred2: bigint = 100n

const firstName = Symbol("name")
const secondName = Symbol("name")

// if (firstName === secondName) {
//   console.log('ok')
// }