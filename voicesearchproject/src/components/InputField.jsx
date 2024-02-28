import React,{useState,useEffect} from 'react'
import axios from 'axios';
import MovieList from './MovieList';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'

function InputField() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const commands=[
    {
      command:'*',
      callback:()=>setSearchTerm(transcript)
    }, 
  ];
  const {transcript}= useSpeechRecognition({commands});
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=f056e2f7`)
      .then((response) => {
        console.log(response);
        setMovies(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });

    }, [searchTerm]);
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div className="container">
        <h1 className='text-success'>Movie Application</h1>
        <div className='d-flex justify-content-center'>
    <input
      type="text"
      className="form-control w-25 "
      id="exampleFormControlInput1"
      placeholder="search for movies...." name='search' value={searchTerm} onChange={handleInputChange}/>
      <button className='btn btn-primary ' onClick={SpeechRecognition.startListening}><i class="fa-solid fa-microphone" style={{color:' #f7f9fc'}}></i></button>
      </div>
        <MovieList  movies={movies} />
        </div>
    
      
    );
  }
  export default InputField;