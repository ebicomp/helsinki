import {useState, useEffect} from 'react'
import axios from 'axios';
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

  useEffect(()=>{
    if(filterdCountriesName.length ===1){
      const countryName = filterdCountriesName[0];
      let languagesofCountry = [];
      axios.get(`https://restcountries.com/v3.1/name/${countryName }`)
      .then(response=>{
        const fetchedCountry = response.data[0];
        console.log(fetchedCountry);
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
      });
    }
  } , [filterdCountriesName]);

  const searchTermChangeHandler = event =>{
    setSearchTerm(event.target.value);
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
        {filterdCountriesName.length >= 10 && <p>Too many maches, specify another filter</p> }
        {filterdCountriesName.length < 10 && filterdCountriesName.length !== 1 && filterdCountriesName.map(c => {return <p key={c}>{c}</p>})}
        {filterdCountriesName.length === 1 && 
        <div>
          <h2>{countryDetail.name}</h2>
          <p>capital {countryDetail.capitals[0]}</p>
          <p>area {countryDetail.area}</p>
          <h3>languages</h3>
          <p>{countryDetail.languages.map(la => <p>{la}</p>)}</p>
          <img src={countryDetail.flag} alt={countryDetail.name}/>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
