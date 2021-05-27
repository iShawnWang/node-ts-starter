import {times} from 'lodash'

const Root = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const Modify = ['', 'min', 'aug', 'dim']
const Triad = Root.reduce((traidArray, current) => {
  return traidArray.concat(Modify.map(m => current + m))
}, [] as string[])

const randomGetItem = (items: any[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

console.log(times(3, () =>
  randomGetItem(Triad)
))

