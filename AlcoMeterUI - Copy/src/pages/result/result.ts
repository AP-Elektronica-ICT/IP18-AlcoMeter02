import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Component, ViewChild } from '@angular/core';
import { GeocodeProvider, IAddressComponent, IRootObject } from '../../providers/geocode/geocode';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  @ViewChild('barCanvas') barCanvas;
  mixedChart: any;
  promilleLevel: Number;
  allowedPromilleLevel :Number;
  barColor: String;
  warningString: String;
  driveWarningSafe:String;
  driveWarningMild:String;
  driveWarningDanger:String;
  hoursTillDriving: String;
  voltage:any;
  maxTick;
  maxPro;
  array = [["Afghanistan",0],["Albania",0.05],["Algeria",0.02],["American Samoa",0.08],["Angola",0.06],["Anguilla",0.8],["Antigua and Barbuda",0.8],["Argentina",0.05],["Armenia",0.04],["Aruba",0.05],["Australia",0.05],["Austria",0.05],["Azerbaijan",0],["Bahamas",0.08],["Bahrain",0],["Bangladesh",0],["Barbados",0.08],["Belarus",0.03],["Belgium",0.05],["Belize",0.08],["Benin",0.05],["Bermuda",0.08],["Bhutan",0.08],["Bolivia",0.8],["Bosnia and Herzegovina",0.03],["Botswana",0.08],["Bouvet Island",0.02],["Brazil",0.02],["British Virgin Islands",0.08],["Brunei",0.08],["Bulgaria",0.05],["Burkina Faso",0.8],["Burma (Myanmar)",0.9],["Burundi",0.8],["Cambodia",0.05],["Cameroon",0.08],["Canada",0.05],["Cape Verde",0.08],["Cayman Islands",0.1],["Chad",0.05],["Chile",0.03],["China",0.02],["Christmas Island",0.05],["Cocos (Keeling) Islands",0.05],["Colombia",0.04],["Comoros",0],["Cook Islands",0.08],["Costa Rica",0.05],["Cote d'Ivoire",0.08],["Croatia",0.05],["Cuba",0.05],["Cyprus",0.05],["Czech Republic",0],["Democratic Republic of Congo",0.01],["Denmark",0.05],["Djibouti",0.9],["Dominican Republic",0.05],["East Timor",0.05],["Ecuador",0.03],["Egypt",0.05],["El Salvador",0.05],["England",0.08],["Equatorial Guinea",0.15],["Eritrea",0.05],["Estonia",0.02],["Ethiopia",0.08],["Falkland Islands",0.08],["Faroe Islands",0.05],["Fiji",0.08],["Finland",0.05],["France",0.05],["French Guiana",0.05],["French Polynesia",0.05],["Gabon",0.08],["Gambia",0.8],["Georgia",0.02],["Germany",0.05],["Ghana",0.08],["Gibraltar",0.05],["Greece",0.05],["Greenland",0.05],["Grenada",0.8],["Guadeloupe",0.05],["Guam",0.08],["Guatemala",0.8],["Guernsey",0.08],["Guinea",0.08],["Guinea-Bissau",0.15],["Guyana",0.08],["Haiti",0.9],["Holland",0.05],["Honduras",0.07],["Hong Kong",0.05],["Hungary",0],["Iceland",0.05],["India",0.03],["Indonesia",0],["Iran",0],["Iraq",0.08],["Ireland",0.05],["Isle of Man",0.08],["Israel",0.05],["Italy",0.05],["Jamaica",0.08],["Japan",0.03],["Jersey",0.08],["Jordan",0.05],["Kazakhstan",0],["Kenya",0.8],["Kiribati",0.08],["Kosovo",0.05],["Kuwait",0],["Kyrgyzstan",0.05],["Laos",0.08],["Latvia",0.05],["Lebanon",0.08],["Lesotho",0.08],["Liberia",0.05],["Libya",0],["Liechtenstein",0.08],["Lithuania",0.04],["Luxembourg",0.05],["Macau",0.05],["Macedonia",0.05],["Madagascar",0.08],["Malawi",0.08],["Malaysia",0.08],["Maldives",0],["Mali",0.03],["Malta",0.08],["Manitoba",0.05],["Mariana Islands",0.08],["Marshall Islands",0.8],["Martinique",0.05],["Mauritania",0],["Mauritius",0.05],["Mayotte",0.05],["Mexico",0.08],["Micronesia",0.05],["Midway Islands",0.08],["Moldova",0.03],["Monaco",0.05],["Mongolia",0.05],["Montenegro",0.05],["Montserrat",0.08],["Morocco",0.06],["Mozambique",0.06],["Namibia",0.08],["Nauru",0.9],["Navassa Island",0.08],["Nepal",0],["Netherlands",0.05],["Netherlands Antilles",0.05],["New Caledonia",0.05],["New Zealand",0.05],["Nicaragua",0.05],["Niger",0.08],["Nigeria",0.05],["Niue",0.08],["Norfolk Island",0.05],["North Korea",0.05],["Norway",0.02],["Oman",0.08],["Pakistan",0],["Palau",0.1],["Panama",0],["Papua New Guinea",0.08],["Paraguay",0.08],["Peru",0.05],["Philippines",0.05],["Pitcairn Islands",0.08],["Poland",0.02],["Portugal",0.05],["Puerto Rico",0.08],["Qatar",0],["Reunion",0.05],["Romania",0],["Russia",0],["Rwanda",0.08],["Saint Barthelemy",0.05],["Saint Helena",0.08],["Saint Kitts and Nevis",0.08],["Saint Lucia",0.08],["Saint Martin",0.05],["Saint Pierre and Miquelon",0.05],["Saint Vincent",0.08],["Samoa",0.04],["San Marino",0.05],["SÃ£o TomÃ© and PrÃ­ncipe",0.05],["Saudi Arabia",0],["Scotland",0.05],["Senegal",0],["Serbia",0.03],["Seychelles",0.08],["Sierra Leone",0.08],["Singapore",0.08],["Slovakia",0],["Slovenia",0.05],["Solomon Islands",0.05],["Somalia",0.8],["South Africa",0.05],["South Georgia and the South Sandwich Islands",0.08],["South Korea",0.05],["Spain",0.05],["Sri Lanka",0.08],["Sudan",0],["Suriname",0.05],["Swaziland",0.05],["Sweden",0.02],["Switzerland",0.05],["Syria",0.05],["Taiwan",0.05],["Tajikistan",0.03],["Tanzania",0.08],["Thailand",0.05],["The Congo",0.8],["Togo",0.8],["Tokelau",0.08],["Tonga",0.03],["Trinidad and Tobago",0.08],["Tunisia",0.05],["Turkey",0.05],["Turkmenistan",0],["Turks and Caicos",0.08],["Tuvalu",0.08],["Uganda",0.08],["Ukraine",0.02],["United Arab Emirates",0],["United States",0.08],["Uruguay",0.03],["Uzbekistan",0],["Vanuatu",0.8],["Venezuela",0.08],["Vietnam",0],["Virgin Islands",0.08],["Wallis and Futuna",0.05],["Yemen",0],["Yugoslavia",0.05],["Zambia",0.08],["Zimbabwe",0.08]];
  BACLevels = [0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.002,0.003,0.004,0.005,0.006,0.006,0.007,0.008,0.008,0.009,0.010,0.010,0.011,0.011,0.012,0.013,0.013,0.014,0.014,0.015,0.015,0.016,0.016,0.017,0.017,0.017,0.018,0.018,0.019,0.019,0.019,0.020,0.020,0.020,0.021,0.021,0.021,0.022,0.022,0.022,0.022,0.023,0.023,0.023,0.023,0.024,0.024,0.024,0.024,0.024,0.024,0.025,0.025,0.025,0.025,0.025,0.025,0.026,0.026,0.026,0.026,0.026,0.026,0.026,0.026,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.027,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.028,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.029,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.030,0.031,0.031,0.031,0.031,0.031,0.031,0.031,0.031,0.031,0.031,0.031,0.031,0.032,0.032,0.032,0.032,0.032,0.032,0.032,0.032,0.032,0.032,0.033,0.033,0.033,0.033,0.033,0.033,0.033,0.033,0.033,0.034,0.034,0.034,0.034,0.034,0.034,0.034,0.035,0.035,0.035,0.035,0.035,0.035,0.035,0.035,0.036,0.036,0.036,0.036,0.036,0.036,0.037,0.037,0.037,0.037,0.037,0.037,0.037,0.038,0.038,0.038,0.038,0.038,0.038,0.039,0.039,0.039,0.039,0.039,0.039,0.040,0.040,0.040,0.040,0.040,0.040,0.041,0.041,0.041,0.041,0.041,0.041,0.042,0.042,0.042,0.042,0.042,0.043,0.043,0.043,0.043,0.043,0.043,0.044,0.044,0.044,0.044,0.044,0.044,0.045,0.045,0.045,0.045,0.045,0.046,0.046,0.046,0.046,0.046,0.046,0.047,0.047,0.047,0.047,0.047,0.048,0.048,0.048,0.048,0.048,0.048,0.049,0.049,0.049,0.049,0.049,0.050,0.050,0.050,0.050,0.050,0.050,0.051,0.051,0.051,0.051,0.051,0.052,0.052,0.052,0.052,0.052,0.052,0.053,0.053,0.053,0.053,0.053,0.054,0.054,0.054,0.054,0.054,0.054,0.055,0.055,0.055,0.055,0.055,0.056,0.056,0.056,0.056,0.056,0.057,0.057,0.057,0.057,0.058,0.058,0.058,0.058,0.058,0.059,0.059,0.059,0.059,0.060,0.060,0.060,0.060,0.061,0.061,0.061,0.061,0.062,0.062,0.062,0.062,0.063,0.063,0.063,0.064,0.064,0.064,0.064,0.065,0.065,0.065,0.066,0.066,0.066,0.067,0.067,0.067,0.068,0.068,0.069,0.069,0.069,0.070,0.070,0.071,0.071,0.071,0.072,0.072,0.073,0.073,0.074,0.074,0.075,0.075,0.076,0.076,0.077,0.077,0.078,0.078,0.079,0.080,0.080,0.081,0.081,0.082,0.083,0.083,0.084,0.085,0.085,0.086,0.087,0.088,0.088,0.089,0.090,0.091,0.092,0.093,0.093,0.094,0.095,0.096,0.097,0.098,0.099,0.100,0.101,0.102,0.103,0.104,0.105,0.106,0.107,0.109,0.110,0.111,0.112,0.113,0.115,0.116,0.117,0.119,0.120,0.121,0.123,0.124,0.126,0.127,0.129,0.130,0.132,0.134,0.135,0.137,0.139,0.140,0.142,0.144,0.146,0.148,0.150,0.151,0.153,0.155,0.157,0.160,0.162,0.164,0.166,0.168,0.170,0.173,0.175,0.177,0.180,0.182,0.185,0.187,0.190,0.193,0.195,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250,0.250];
  country;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geocodeProvider: GeocodeProvider,public geolocation: Geolocation) {
  }
  

  
  ngOnInit(){
    this.geolocation.getCurrentPosition().then((position) => {
        //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.getCountry(lat,long);
        
        
        
    }, (err) => {
      console.log("err");
    });
  }

  ionViewDidLoad() {

    var data = {
        labels: ["x1"],
        datasets: [{
          label: "First",
          backgroundColor: this.barColor,
          borderWidth: 1,
          data: [0],
          xAxisID: "bar-x-axis1",
        }, {
          label: "Second",
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderWidth: 1,
          data: [0],
          xAxisID: "bar-x-axis1", // will not work if set to 'bar-x-axis2'
        }]
      };
  
    var options = {
        scales: {
          xAxes: [{
            stacked: true,
            id: "bar-x-axis1",
            barThickness: 70,
          }],
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero: true
            },
          }]
  
        }
      };

    
    
      Chart.plugins.register({
      afterDatasetsUpdate: function(chart) {
        Chart.helpers.each(chart.getDatasetMeta(0).data, function(rectangle, index) {
          rectangle._view.width = rectangle._model.width = 30;
        });
      },
     })

    Chart.defaults.global.legend.display = false;
    this.mixedChart = new Chart(this.barCanvas.nativeElement,{type: 'bar',data: data,options: options});
    
    }
    

    getCountry(lat,long){

        this.geocodeProvider.getCountry(lat,long).subscribe(result =>this.country = this.getName(result));
    }

    getName(JSON:IRootObject){
        var location = JSON.results[0].address_components[0].long_name;
        console.log(location);
        this.getMaxPro(location);
        return location;   
    }

    getMaxPro(land){
        var i;
        for(i =0;i<this.array.length;i++){
            if(this.array[i][0] == land){
                console.log((+this.array[i][1])*10);
              this.maxPro = (+this.array[i][1])*10 ;
                this.mixedChart.destroy();
              this.newChart(0.5,this.maxPro); // Hier waarde van meting invoegen !!Hier waarde van meting invoegen !!Hier waarde van meting invoegen !!Hier waarde van meting invoegen !!Hier waarde van meting invoegen !!Hier waarde van meting invoegen !!
            }
        }
    }

   
    clearStrings(){
        this.driveWarningSafe = "";
        this.driveWarningMild = "";
        this.driveWarningDanger = "";
    }
    
    newChart(newPromilleLevel, maxpromille){
        var maxTick;
        var hours = Math.floor((newPromilleLevel - maxpromille)/0.07) + 1;
        if(newPromilleLevel > maxpromille){
            this.barColor = 'rgba(255, 5, 5, 1)';
            this.warningString = "Your BAC is: " + newPromilleLevel + ". This is too much, the legal limit is: " + maxpromille  + ".";
            this.clearStrings();
            this.driveWarningDanger = "It is illegal to drive in your current state.";
            this.hoursTillDriving = "You are APPROXIMATELY able to drive legally again in " + hours + " hours. Test before driving!";
        }
        if(newPromilleLevel == maxpromille){
            this.barColor = 'rgba(255, 113, 25, 1)';
            this.warningString = "Your BAC is: " + newPromilleLevel + ". This is the legal limit.";
            this.driveWarningMild = "We discourage driving in your current state.";
            this.hoursTillDriving = "";
        }
        if(newPromilleLevel < maxpromille && newPromilleLevel>0){
            this.barColor = 'rgba(52, 255, 25, 1)';
            this.warningString = "Your BAC is: " + newPromilleLevel + ". This is under the legal limit" + "(" + maxpromille + ").";
            this.driveWarningSafe = "Drive with caution.";
            this.hoursTillDriving = "";
        }
        if(newPromilleLevel == 0){
            this.barColor = 'rgba(52, 255, 25, 1)';
            this.warningString = "Your BAC is: " + newPromilleLevel + ".";
            this.driveWarningSafe = "Drive safely";
            this.hoursTillDriving = "";
        }

        if(newPromilleLevel<0.5){maxTick = 0.6}
        else if(newPromilleLevel< 0.9){maxTick = 1}
        else if (newPromilleLevel<1.4){maxTick = 1.5}
        else {maxTick = 2}
        

        this.mixedChart.destroy();


            var data = {
                labels: [""],
                datasets: [{
                  label: "Your BAC",
                  backgroundColor: this.barColor,
                  borderWidth: 1,
                  data: [newPromilleLevel],
                  xAxisID: "bar-x-axis1",
                }, {
                  label: "Max allowed BAC",
                  backgroundColor: 'rgba(255, 206, 86, 0.2)',
                  borderWidth: 1,
                  data: [maxpromille],
                  xAxisID: "bar-x-axis1", // will not work if set to 'bar-x-axis2'
                }]
              };
          
              var options = {
                scales: {
                  xAxes: [{
                    stacked: true,
                    id: "bar-x-axis1",
                    barThickness: 70,
                  }],
                  yAxes: [{
                    stacked: false,
                    ticks: {
                      beginAtZero: true
                    },
                  }]
          
                }
              };

              var myBarChart = new Chart(this.barCanvas.nativeElement, {
                type: 'bar',
                data: data,
                options: options
              });

    }
}

