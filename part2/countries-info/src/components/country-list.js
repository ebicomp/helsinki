const CountryList = (props)=>{
    const {countries , showContryDetail} = props;
    if(countries.length >= 10)
        return <p>Too many maches, specify another filter</p>;
    else
        return countries.map(c => {
            return <p key={c}>{c}<button onClick={()=> {showContryDetail(c)}}>show</button></p>
        });
}
export default CountryList;