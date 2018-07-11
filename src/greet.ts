export class Greeter {
  greeting: string

  constructor (options: {
    greeting?: string
  }) {
    this.greeting = options.greeting || 'Hello'
  }

  greet (whom: string): string {
    return `${this.greet}, ${whom}!`
  }
}
