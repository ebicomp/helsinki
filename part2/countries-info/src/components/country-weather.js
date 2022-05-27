const CountryWeather = (props) =>{
    const {weatherDetail } = props;
    return <div>
        <p>tempreture {weatherDetail.temp} Celcius</p>
        <img src={`http://openweathermap.org/img/wn/${weatherDetail.icon}@2x.png`} alt={weatherDetail.icon} />
        <p>wind {weatherDetail.wind} m/s</p>

    </div>
}
export default CountryWeather;