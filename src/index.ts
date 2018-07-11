import { Greeter } from './greet'

function hello () {
  const greeter = new Greeter({ greeting: 'Good evening' })
  return greeter.greet('world')
}

hello()
