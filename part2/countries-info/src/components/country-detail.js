const CountryDetail = (props)=>{
    const{countryDetail} = props;
    return(<div>
    <h2>{countryDetail.name}</h2>
    <p>capital {countryDetail.capitals[0]}</p>
    <p>area {countryDetail.area}</p>
    <h3>languages</h3>
    <div>{countryDetail.languages.map(la => <p key={la}>{la}</p>)}</div>
    <img src={countryDetail.flag} alt={countryDetail.name}/>
  </div>)
}
export default CountryDetail;