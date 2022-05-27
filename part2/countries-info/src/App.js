import {useState, useEffect} from 'react'
import axios from 'axios';
import CountryDetail from './components/country-detail';
import CountryList from './components/country-list';
import CountryWeather from './components/country-weather';
function App() {

  const [searchTerm, setSearchTerm]=useState('');
  const [countriesName, setCountriesName] = useState([]);
  const [filterdCountriesName, setFilteredCountriesName] = useState([]);
  const [countryDetail , setCountryDetail] = useState({
    name:'',
    capitals:[],
    area:'',
    languages:[]
  });
  const [showDetail, setShowDetail] = useState(false);
  const [countryWeather, setCountryWeather] = useState({
    temp:'',
    icon:'',
    wind:''
  });

  useEffect(()=>{
    if(filterdCountriesName.length ===1){
      const countryName = filterdCountriesName[0];
      fillCountryDetail(countryName);
      setShowDetail(true);
    }
    else{
      setShowDetail(false);
    }
  } , [filterdCountriesName]);

  const searchTermChangeHandler = event =>{
    setSearchTerm(event.target.value);
  }

  const showContryDetail = countryName =>{
    fillCountryDetail(countryName);
    setShowDetail(true);
  }

  const fillCountryDetail = (countryName)=>{
    let languagesofCountry = [];
    axios.get(`https://restcountries.com/v3.1/name/${countryName }`)
    .then(response=>{
      const fetchedCountry = response.data[0];
      for (const [key, value] of Object.entries(fetchedCountry.languages)) {
        languagesofCountry.push(value);
      }
  
      setCountryDetail({
        name:fetchedCountry.name.common,
        capitals:fetchedCountry.capital,
        area:fetchedCountry.area,
        languages:languagesofCountry,
        flag:fetchedCountry.flags.png
      });

      getWeatherInformation(fetchedCountry.capital);
    });

  }

  const getWeatherInformation =(city)=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3f4a8880c609886c5562e9404671813&units=metric`)
    .then(response => {
      console.log(response.data.wind.speed);
      setCountryWeather({
        temp:response.data.main.temp,
        icon:response.data.weather[0].icon,
        wind:response.data.wind.speed
      });
    });
  }

  useEffect(() =>{
    if(searchTerm === '')
    setFilteredCountriesName([]);
    else
    {
      const foundCountries = countriesName.filter(value => {
         return value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        });
      setFilteredCountriesName(foundCountries);
    }

  } , [searchTerm]);


  useEffect(()=>{
      let countries = [];
     axios.get('https://restcountries.com/v3.1/all')
     .then(response =>{
        response.data.forEach(c => {
          countries.push(c.name.common);
        });
        setCountriesName(countries);
     })
  } , []);
  return (
    <div>
      <div>find countries
        <input type="text" value={searchTerm} onChange={searchTermChangeHandler }/>
        <CountryList countries={filterdCountriesName} showContryDetail={showContryDetail} />
        {showDetail &&
        <div>
         <CountryDetail countryDetail={countryDetail} />
         <CountryWeather weatherDetail={countryWeather} />
         </div>
         }
      </div>
    </div>
  );
}

export default App;
