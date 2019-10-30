import wait from './wait';

// ASYNC TESTS

// method 1
test('wait for promise to resolve', (done) => {
    wait(3).then(result => {
        expect(result).toBe('hurray')
        done()
    })
})

// method 2
// if promise fails test fails
test('wait for promise to resolve', () => {
    return wait(3).then(result => {
        expect(result).toBe('hurray')
    })
})

// method 3 - Jasons fave - industry standard
test('wait for promise to resolve', async () => {
    const result = await wait(3)
    expect(result).toBe('hurray')
})