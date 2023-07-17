import React, { useState } from 'react';
import SearchList from './components/SearchList';
import CountryDetail from './components/CountryDetail';
import styles from './layout.module.css'


const Search = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (commonName) => {
    setSelectedCountry(commonName);
  };

  const openCity = (event, tabName) => {
		 // Declare all variables
     var i, tabcontent, tablinks;
  
     // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
     }
   
     // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
   
     // Show the current tab, and add an "active" class to the button that opened the tab
     document.getElementById(tabName).style.display = "block";
     event.currentTarget.className += " active";
	}

  return (
    <div className="container">
        <div className="columnLeft">
            <SearchList onCountryClick={handleCountryClick} />
         </div>
        
        <div className="columnRight">
          <button className="tablinks" onClick={(event) => openCity(event, 'CountryDetails')}>Country Details</button>
          <button className="tablinks" onClick={(event) => openCity(event, 'OtherDetails')}>Other Details</button>
           <div id="CountryDetails" className="tabcontent">
              {selectedCountry && <CountryDetail commonName={selectedCountry} />}
          </div>
          <div id="OtherDetails" className="tabcontent">
             <h3>Other Details</h3>
           </div>
        </div>
        <style >{`
        .container {
          display: flex;
        }
        .columnLeft {
          flex: 1;
          padding: 20px;
          border-width:2px;
          border-style:solid;
          border-color:black;
          width: 30%
          overflow-x: hidden;
          overflow-y: auto;
          text-align: left;
          height: 850px;
        }
        .columnRight {
          flex: 1;
          padding: 20px;
          border-width:2px;
          border-style:solid;
          border-color:black;
          width: 70%
          overflow-x: hidden;
          overflow-y: auto;
          text-align: left;
          
        }
      `}</style>
        
   </div>
  );
};

 



export default Search;
