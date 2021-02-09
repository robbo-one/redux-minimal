import wombats from './wombats'

test('Add wombat adds a wombat', () => {
  // Arrange
  const initialState = ['Gertrude']
  const addSallyWombat = {
    type: 'ADD_WOMBAT',
    wombat: 'Sally'
  }
  const expected = ['Gertrude', 'Sally']

  // Act
  const actual = wombats(initialState, addSallyWombat)

  // Assert
  expect(actual).toEqual(expected)

})


test('Unrecognised action', () => {
  // Arrange
  const initialState = []
  const callSallyWombat = {
    type: 'CALL_A_WOMBAT',
    wombat: 'Sally'
  }
  const expected = []

  // Act
  const actual = wombats(initialState, callSallyWombat)

  // Assert
  expect(actual).toEqual(expected)

})


test('Del wombat deletes a wombat', () => {
  // Arrange
  const initialState = ['Gertrude', 'Sally']
  const deleteGertrudeWombat = {
    type: 'DEL_WOMBAT',
    wombat: 'Gertrude'
  }
  const expected = ['Sally']

  // Act
  const actual = wombats(initialState, deleteGertrudeWombat)

  // Assert
  expect(actual).toEqual(expected)
})
