import { useReducer, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import { fetchAPI, submitAPI } from '../mockAPI/mockAPI';
import About from '../pages/About';

export const initializeTimes = (inputDate) => {
  let times = {
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
  return times;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'DATE_CHANGE':
      return { ...state, selectedDate: action.payload };
    case 'TIMES_CHANGE':
      return { ...state, selectedDateTimes: action.payload };
    default:
      return state;
  }
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(""));
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  console.log('available', availableTimes);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const result = fetchAPI(new Date(availableTimes.selectedDate)); 
        const formattedResult = result.map(time => ({ value: time, label: time }));
        console.log(formattedResult)
        dispatch({ type: 'TIMES_CHANGE', payload: formattedResult });
      } catch (error) {
        console.error('Failed to fetch times:', error);
      }
    };
    fetchTimes();
  }, [availableTimes.selectedDate]);
  
  const submitForm = (formData) => {
    console.log('submitted!')
    const submitResult = submitAPI(formData);
    if (submitResult) {
      setIsFormSubmitted(true)
    } else {
      setIsFormSubmitted(false)
    }
  }

  const resetForm = () => {
    setIsFormSubmitted(false)
  }

  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/booking' 
          element={<Booking 
            isFormSubmitted={isFormSubmitted}
            dispatch={dispatch}
            availableTimes={availableTimes}
            submitForm={submitForm}
            resetForm={resetForm}
          />}
        />
        <Route path='/about' element={<About />}/>
      </Routes>
    </main>
  );
}
