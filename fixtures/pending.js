import { describe, it } from 'node:test'

describe('suite', () => {
  it.skip('is skipped', () => {})
  it.todo('is todo')
  it('skips itself', (t) => t.skip())
  // More than one test, to check that the skipped suite is counted once.
  describe.skip('is a skipped suite', () => {
    it('never runs', () => {})
    it('never runs either', () => {})
  })
  // More than one test, to check that each test of the todo suite is counted.
  describe.todo('is a todo suite', () => {
    it('runs as todo', () => {})
    it('runs as todo too', () => {})
  })
  it('passes', () => {})
})
