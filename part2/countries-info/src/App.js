import {useState, useEffect} from 'react'
import axios from 'axios';
import CountryDetail from './components/country-detail';
import CountryList from './components/country-list';
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

const getCountryDetail = (countryName)=>{

}

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
      setShowDetail(true);
    }
    else{
      setShowDetail(false);
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
        <CountryList countries={filterdCountriesName} />
        {showDetail && <CountryDetail countryDetail={countryDetail} />}
      </div>
    </div>
  );
}

export default App;
