import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from 'react';

//MATERIAL UI COMPONENTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from 'react-i18next';

//Redux Import
import { useSelector, useDispatch } from "react-redux"
import { changeResult } from './weatherApiSlice';
import { fetchWeather } from './weatherApiSlice';


moment.locale("ar");

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"]
  }
})


let cancelAxios = null
function App() {

  //Redux Code
  const dispatch = useDispatch();
  const result = useSelector((state) =>{
    console.log("the state is: ",state)
    return state.result
  })

  const isLoading = useSelector((state) =>{
    return state.weather.isLoading
  })

  const { t, i18n } = useTranslation();

  const[dateAndTime, setDateAndTime] = useState("")
  const[locale, setLocale] = useState("ar")

  console.log("render component")
  const[temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null
  })

  function handleLanguageClick(){
    if(locale=="ar"){
      setLocale("en");
      i18n.changeLanguage("en")
      moment.locale("en")
    }
    else{
      setLocale("ar");
      i18n.changeLanguage("ar")
      moment.locale("ar")
    }
    setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }

  

  useEffect(() =>{
    //dispatch(changeResult());
    console.log("dispatching the fetch weather from the component");
    dispatch(fetchWeather())

    i18n.changeLanguage("ar")
  }, [])
  useEffect(() =>{
    setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=29f7d99a767467ab7d8ccae41490655e",
             {
              cancelToken: new axios.CancelToken((c) => {
                cancelAxios = c
              })
             }
            )
    .then(function (response) {
    // handle success
     console.log(response.data)
     const responseTemp = Math.round(response.data.main.temp - 272.15)
     const min = Math.round(response.data.main.temp_min - 272.15)
     const max = Math.round(response.data.main.temp_max - 272.15)
     const description = response.data.weather[0].description
     const responseIcon = response.data.weather[0].icon

     setTemp({
              number: responseTemp,
              description: description,
              min: min,
              max: max,
              icon: responseIcon
            })

     console.log(min, max, description)
     console.log(response.data.main.temp - 272.15)
    })
    .catch(function (error) {
    // handle error
     console.log(error);
    });

    return () => {
      console.log("cancelling")
      cancelAxios();
    }
  },[])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <div style={{
                     height: "100vh",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column"  
                    }}
          >
            <div 
               dir={locale == "ar" ? "rtl" : "ltr"}
               style={{
                  width: "100%", 
                  background: "rgb(28 52 91 / 36%)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "15px",
                  boxShadow: "0px 11px 1px rgba(0,0,0,0.05)" }}
            >
              <div>
                <div
                  style={{ 
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "start"
                      }} dir={locale == "ar" ? "rtl" : "ltr"}>
                        <Typography 
                            variant="h2" 
                            style={{marginRight: "20px", fontWeight: "600"}}
                        >
                         {t('London')}
                        </Typography>

                        <Typography 
                            variant="h5" 
                            style={{marginRight: "20px"}}
                        >
                         {dateAndTime}
                        </Typography>
                </div>
                <hr />
                
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      
                      { isLoading ? <CircularProgress style={{ color: "white" }} /> : ""}
                      <Typography 
                            variant="h1" 
                            style={{textAlign: "right"}}
                        >
                        {temp.number}
                      </Typography>

                      <img  
                           src={
                                `https://openweathermap.org/img/wn/${temp.icon}@2x.png`
                           }    
                      />
                    </div>

                      <Typography 
                          variant="h6"
                      >
                      {t(temp.description)}
                      </Typography>
                    <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                    }}>
                        <h5>{t('min')} : {temp.min}</h5>
                        <h5 style={{margin: "0px 5px"}}>|</h5>
                        <h5>{t("max")}: {temp.max}</h5>
                    </div>
                  </div>
                
                  <CloudIcon style={{ fontSize: "200px" }} />
                </div>
              </div>
            </div>
            <div>
              <Button 
               dir={locale == "ar" ? "rtl" : "ltr"}
               style={{ 
                  width: "550px",
                  display: "flex",
                  justifyContent: "end",
                  color: "white",
                  marginTop: "20px"
                }}
               onClick={handleLanguageClick}
               variant="text">
                {locale == "ar"? "إنجليزي" : "Arabic"}
              </Button>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
