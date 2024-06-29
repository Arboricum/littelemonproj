import { useState, useEffect } from 'react';
import Select from 'react-select';
import Hero from '../Components/Hero';
import './Booking.css';
import { Link, useNavigate } from 'react-router-dom';
import heroImag from '../assets/images/chef_short.jpg'

const occasions = [
  { value: "none", label: "None" },
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "funeral", label: "Funeral" }
];

export default function Booking({
  isFormSubmitted,
  dispatch, 
  availableTimes, 
  submitForm,
  resetForm}) {
  
  const currentAvailableTimes = availableTimes.selectedDateTimes;

  const [dateRes, setDateRes] = useState("");
  const [dateError, setDateError] = useState(false);
  const [timeRes, setTimeRes] = useState(null);
  const [timeError, setTimeError] = useState(false);
  const [guestsRes, setGuestsRes] = useState("1");
  const [occasionRes, setOccasionRes] = useState('none');
  const [occasionError, setOccasionError] = useState(false);

  const dateErrorText = 'You must select a valid date';
  const timeErrorText = 'You must select a time (it depends on selected date)';
  const occasionErrorText = 'You must select an occasion';

  const [reservation, setReservation] = useState({
    dateRes,
    timeRes,
    guestsRes,
    occasionRes
  })

  const navigate = useNavigate();

  const getIsFormValid = () => { 
    return ( 
      dateRes && timeRes && guestsRes && occasionRes
    ); 
  };

  useEffect(() => {
    dispatch({type:'DATE_CHANGE', payload: dateRes});
  }, [dateRes, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReservation = {
      dateRes,
      timeRes: timeRes ? timeRes.value : "",
      guestsRes,
      occasionRes: occasionRes ? occasionRes.value : ""
    };
    setReservation(updatedReservation);
    console.log('reservation done', updatedReservation);
    submitForm(updatedReservation);
    clearForm();
  };

  const clearForm = () => {
    setDateRes("");
    setDateError(false);
    setTimeRes(null);
    setTimeError(false);
    setGuestsRes("1");
    setOccasionRes('none');
  }

  const resetReservation = () => {
    setReservation({
      dateRes,
      timeRes,
      guestsRes,
      occasionRes
    })
    resetForm();
  }

  return (
    <>
    <Hero heroImag={heroImag}/>
    {!isFormSubmitted ? 
    (<main className='booking'>
      <h1>Reserve a table</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-fields'>
          <label htmlFor="res-date">Choose date: </label>
          <input 
            type="date" 
            id="res-date"
            value={dateRes}
            onChange={(e) => {
              setDateRes(e.target.value);
              setDateError(false)
            }}
            onBlur={(e) => {
              !e.target.value? setDateError(true): setDateError(false)
            }}
            required
            className={dateError? 'error' : ''}
          />
          {dateError && <p>{dateErrorText}</p>}
        </div>

        <div className='form-fields'>
          <label htmlFor="res-time">Choose time: </label>
          <Select 
            id="res-time"
            onChange={(option) => {
              setTimeRes(option);
              setTimeError(false)
            }}
            onBlur={() => {
              !timeRes? setTimeError(true): setTimeError(false)
            }}
            options={currentAvailableTimes}
            value={timeRes}
            className={timeError? 'error' : ''}
          />
          {timeError && <p>{timeErrorText}</p>}
        </div>

        <div className='form-fields'>
          <label htmlFor="guests">Number of guests (min 1, max 20, <Link>contact us</Link> for more): </label>
          <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="20" 
            id="guests"
            value={guestsRes}
            onChange={(e) => setGuestsRes(e.target.value)}
            required
          />
        </div>

        <div className='form-fields'>
          <label htmlFor="occasion">Occasion: </label>
          <Select 
            id="occasion"
            onChange={(option) => {
              setOccasionRes(option);
              setOccasionError(false)
            }}
            onBlur={() => {
              !occasionRes? setOccasionError(true): setOccasionError(false)
            }}
            options={occasions}
            value={occasionRes}
            className={occasionError? 'error' : ''}
          />
          {occasionError && <p>{occasionErrorText}</p>}
        </div>

        <button type="submit" disabled={!getIsFormValid()} aria-label="On Click">Make your reservation!</button>
      </form>
    </main>) 
    : 
    (<main className='booking'>
      <h2>Reservation successfull!</h2>
      <p>Your reservation details:</p>
      <p>Date: {reservation.dateRes}</p>
      <p>Time: {reservation.timeRes}</p>
      <p>Number of guests: {reservation.guestsRes}</p>
      <p>Occasion: {reservation.occasionRes}</p>
      <div aria-label='end reservation buttons' className='end-res-btn-container'>
        <button className='global-btn' onClick={() => {
          resetReservation();
          navigate('/booking')
        }}>Make another reservation</button>
        <button className='global-btn' onClick={() => {
          resetReservation();
          navigate('/')}}>Home</button>
      </div>
    </main>)
    } 

    </>
  );
}
