import './index.css'
import { getRandomNumber } from './utils/randomNumber'

const template = document.querySelector('#message') as HTMLTemplateElement
const fragment = document.createDocumentFragment() as DocumentFragment
const rating = document.querySelector('#rating')
const ranking = [1, 2, 3, 4, 5].map(value => ({
  id: crypto.randomUUID(),
  value
}))

document.addEventListener('DOMContentLoaded', () => {
  ranking.forEach(element => {
    let div = document.createElement('div')
    let input = document.createElement('input')
    let label = document.createElement('label')
    input.type = 'radio'
    input.name = 'rating'
    input.id = element.id
    input.value = element.value.toString()
    input.classList.add('peer/value', 'hidden')
    label.htmlFor = element.id
    label.classList.add(
      'text-medium-grey',
      'bg-hard-grey',
      'rounded-full',
      'block',
      'w-10',
      'h-10',
      'text-center',
      'leading-10',
      'hover:bg-orange',
      'hover:text-white',
      'cursor-pointer',
      'peer-checked/value:bg-medium-grey',
      'peer-checked/value:text-white'
    )
    label.textContent = element.value.toString()
    rating?.appendChild(div)
    div?.appendChild(input)
    div?.appendChild(label)
  })

  const inputs = document.querySelectorAll('#rating input')

  inputs[getRandomNumber(0, 4)].setAttribute('checked', 'checked')

  document.querySelector('form')?.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    document.querySelector('form')?.classList.add('hidden')

    const form: any = new FormData(e.target as HTMLFormElement)

    const { rating } = Object.fromEntries(form)

    const span: HTMLSpanElement | null = template.content.querySelector('span')

    if (span !== null) span.textContent = `You selected ${rating} of 5 `

    let clone = document.importNode(template.content, true)

    fragment.appendChild(clone)

    document.querySelector('body')?.appendChild(fragment)
  })
})
