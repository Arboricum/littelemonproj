import { initializeTimes, updateTimes } from './Components/Main_Component'; 

describe('initializeTimes', () => {
  it('should return the correct initial times based on the input date', () => {
    const inputDate = new Date();
    const expectedTimes = {
      selectedDate: inputDate,
      selectedDateTimes: [
        { value: "17:00", label: "17:00" },
        { value: "18:00", label: "18:00" },
        { value: "19:00", label: "19:00" },
        { value: "20:00", label: "20:00" },
        { value: "21:00", label: "21:00" },
        { value: "22:00", label: "22:00" }
      ]
    };

    const result = initializeTimes(inputDate);
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same state if the action type is not recognized', () => {
    const initialState = {
      selectedDate: new Date(),
      selectedDateTimes: [
        { value: "17:00", label: "17:00" },
        { value: "18:00", label: "18:00" },
        { value: "19:00", label: "19:00" },
        { value: "20:00", label: "20:00" },
        { value: "21:00", label: "21:00" },
        { value: "22:00", label: "22:00" }
      ]
    };

    const action = { type: 'UNKNOWN_ACTION', payload: {} };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('should update the selected date on DATE_CHANGE action', () => {
    const initialState = {
      selectedDate: new Date('2024-06-27T00:00:00Z'),
      selectedDateTimes: [
        { value: "17:00", label: "17:00" },
        { value: "18:00", label: "18:00" },
        { value: "19:00", label: "19:00" },
        { value: "20:00", label: "20:00" },
        { value: "21:00", label: "21:00" },
        { value: "22:00", label: "22:00" }
      ]
    };

    const newDate = new Date('2024-06-28T00:00:00Z');
    const action = { type: 'DATE_CHANGE', payload: newDate };
    const expectedState = {
      ...initialState,
      selectedDate: newDate
    };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedState);
  });

  it('should update the selected date times on TIMES_CHANGE action', () => {
    const initialState = {
      selectedDate: new Date(),
      selectedDateTimes: [
        { value: "17:00", label: "17:00" },
        { value: "18:00", label: "18:00" },
        { value: "19:00", label: "19:00" },
        { value: "20:00", label: "20:00" },
        { value: "21:00", label: "21:00" },
        { value: "22:00", label: "22:00" }
      ]
    };

    const newTimes = [
      { value: "10:00", label: "10:00" },
      { value: "11:00", label: "11:00" }
    ];
    const action = { type: 'TIMES_CHANGE', payload: newTimes };
    const expectedState = {
      ...initialState,
      selectedDateTimes: newTimes
    };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
