/********************************app.js**************************************/

let ReactRouter = window.ReactRouter
let Router = ReactRouter.Router
let IndexRoute = ReactRouter.IndexRoute
let Route = ReactRouter.Route
let Link = ReactRouter.Link
let Redirect = ReactRouter.Redirect
let History = window.History
let browserHistory = History.createBrowserHistory()

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

class SimpleLineChart extends React.Component{

	constructor(props) {console.log(props);
        super(props);
        this.state = {
            data: [	]
        };    
    }

	
	render () {
	var data = this.state.data
  	return (
    	<LineChart width={600} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

class HomePage extends React.Component{

	constructor(props){
		super(props);
		this.state = {json:[], detail:{},leftPos:0};
	}
	
	getInitialState() {
		return {
		  json: Map({ title: 0 })
		}
	}
	onClickHandler(){
        let ele = document.getElementById('wrapper');
		if(ele.className == 'active'){
			ele.className = '';
		}else{
			ele.className = 'active';
		}
		
    }
	
	componentDidMount() {
		let that = this;
		let url = "data.json" //"https://facebook.github.io/react-native/movies.json";//"http://www.androidbegin.com/tutorial/jsonparsetutorial.txt";//
		console.log(that);
		fetch(url)
		.then(response => response.json())
		.then(responseJson => {
			that.setState({json : responseJson.movies, detail:responseJson.movies[0]});
			that.json = responseJson.movies;
			console.log(that.json);
			//return responseJson.movies;
		})
		.catch(error => {
			console.error(error);
		});
	}
	
	showData(ev, data, idx) {
		let that = this;
		that.setState({detail:data});
		let total = that.json.length;
		let opt = '-';
		console.log(idx, total, (idx + 1) == total);
		if( (idx + 1) == total){
			opt = '+';
		}
		console.log(opt,opt =='-')
		if(opt =='-'){
			that.setState({leftPos: - (250 * idx)})
		}else{
			console.log((250 * (idx - 1)));
			that.setState({leftPos: - (250 * (idx - 2))})
		}
	}

	render() {
	var data = this.state.json;	
	var detail = this.state.detail;
	var leftPos = this.state.leftPos;
    return (
        <div>
			<div className="row">
				<div className="topBar">
					<div className="col-lg-1 col-md-1">
						<div className="avator padding-t-5"><img width="30" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Mi45IDQ4Mi45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIuOSA0ODIuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIzOS43LDI2MC4yYzAuNSwwLDEsMCwxLjYsMGMwLjIsMCwwLjQsMCwwLjYsMGMwLjMsMCwwLjcsMCwxLDBjMjkuMy0wLjUsNTMtMTAuOCw3MC41LTMwLjUgICAgYzM4LjUtNDMuNCwzMi4xLTExNy44LDMxLjQtMTI0LjljLTIuNS01My4zLTI3LjctNzguOC00OC41LTkwLjdDMjgwLjgsNS4yLDI2Mi43LDAuNCwyNDIuNSwwaC0wLjdjLTAuMSwwLTAuMywwLTAuNCwwaC0wLjYgICAgYy0xMS4xLDAtMzIuOSwxLjgtNTMuOCwxMy43Yy0yMSwxMS45LTQ2LjYsMzcuNC00OS4xLDkxLjFjLTAuNyw3LjEtNy4xLDgxLjUsMzEuNCwxMjQuOUMxODYuNywyNDkuNCwyMTAuNCwyNTkuNywyMzkuNywyNjAuMnogICAgIE0xNjQuNiwxMDcuM2MwLTAuMywwLjEtMC42LDAuMS0wLjhjMy4zLTcxLjcsNTQuMi03OS40LDc2LTc5LjRoMC40YzAuMiwwLDAuNSwwLDAuOCwwYzI3LDAuNiw3Mi45LDExLjYsNzYsNzkuNCAgICBjMCwwLjMsMCwwLjYsMC4xLDAuOGMwLjEsMC43LDcuMSw2OC43LTI0LjcsMTA0LjVjLTEyLjYsMTQuMi0yOS40LDIxLjItNTEuNSwyMS40Yy0wLjIsMC0wLjMsMC0wLjUsMGwwLDBjLTAuMiwwLTAuMywwLTAuNSwwICAgIGMtMjItMC4yLTM4LjktNy4yLTUxLjQtMjEuNEMxNTcuNywxNzYuMiwxNjQuNSwxMDcuOSwxNjQuNiwxMDcuM3oiIGZpbGw9IiMwMDZERjAiLz4KCQk8cGF0aCBkPSJNNDQ2LjgsMzgzLjZjMC0wLjEsMC0wLjIsMC0wLjNjMC0wLjgtMC4xLTEuNi0wLjEtMi41Yy0wLjYtMTkuOC0xLjktNjYuMS00NS4zLTgwLjljLTAuMy0wLjEtMC43LTAuMi0xLTAuMyAgICBjLTQ1LjEtMTEuNS04Mi42LTM3LjUtODMtMzcuOGMtNi4xLTQuMy0xNC41LTIuOC0xOC44LDMuM2MtNC4zLDYuMS0yLjgsMTQuNSwzLjMsMTguOGMxLjcsMS4yLDQxLjUsMjguOSw5MS4zLDQxLjcgICAgYzIzLjMsOC4zLDI1LjksMzMuMiwyNi42LDU2YzAsMC45LDAsMS43LDAuMSwyLjVjMC4xLDktMC41LDIyLjktMi4xLDMwLjljLTE2LjIsOS4yLTc5LjcsNDEtMTc2LjMsNDEgICAgYy05Ni4yLDAtMTYwLjEtMzEuOS0xNzYuNC00MS4xYy0xLjYtOC0yLjMtMjEuOS0yLjEtMzAuOWMwLTAuOCwwLjEtMS42LDAuMS0yLjVjMC43LTIyLjgsMy4zLTQ3LjcsMjYuNi01NiAgICBjNDkuOC0xMi44LDg5LjYtNDAuNiw5MS4zLTQxLjdjNi4xLTQuMyw3LjYtMTIuNywzLjMtMTguOGMtNC4zLTYuMS0xMi43LTcuNi0xOC44LTMuM2MtMC40LDAuMy0zNy43LDI2LjMtODMsMzcuOCAgICBjLTAuNCwwLjEtMC43LDAuMi0xLDAuM2MtNDMuNCwxNC45LTQ0LjcsNjEuMi00NS4zLDgwLjljMCwwLjksMCwxLjctMC4xLDIuNWMwLDAuMSwwLDAuMiwwLDAuM2MtMC4xLDUuMi0wLjIsMzEuOSw1LjEsNDUuMyAgICBjMSwyLjYsMi44LDQuOCw1LjIsNi4zYzMsMiw3NC45LDQ3LjgsMTk1LjIsNDcuOHMxOTIuMi00NS45LDE5NS4yLTQ3LjhjMi4zLTEuNSw0LjItMy43LDUuMi02LjMgICAgQzQ0Nyw0MTUuNSw0NDYuOSwzODguOCw0NDYuOCwzODMuNnoiIGZpbGw9IiMwMDZERjAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" /></div>
					</div>
				</div>
			</div>
			<div id="wrapper" className="active">      
				<div id="sidebar-wrapper">
					<ul id="sidebar_menu" className="sidebar-nav">
						<li className="sidebar-brand"  onClick={() => this.onClickHandler()} >
						<a id="menu-toggle" href="#">Menu<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
					</ul>
					<ul className="sidebar-nav" id="sidebar">
						<li><a>Link1<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
						<li><a>link2<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
					</ul>
				</div>
				<div id="page-content-wrapper">
					<div className="page-content inset">
						<div className="row padding-tb-30">
							<div className="col-lg-6 col-md-6">
								<h2>{detail.title}</h2>
								<p className=" lead">
									ETH {detail.releaseYear}
								</p>	
								<p className="currency">$12938 <span className="percentage">45%</span></p>
								
								
							</div>
							
							<div className="col-lg-6 col-md-6 outer-container">
								<div className="moving-container" style={{left:leftPos}}>
								{
									
									Object.keys(data).map((content, idx) => {
										return <div className="box-container" onClick={() => this.showData(event, data[idx], idx)}>
											<div className="box">
												<p className="text">{data[idx].title}</p>
												<p className="text">{data[idx].releaseYear}</p>
												<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>								
												</p>
											</div>
										</div>
									})
								}
								
								</div>
							</div>
						</div>
						
						<div className="row">
							
								<SimpleLineChart data={detail.data} />
							
						</div>
						
					</div>
				</div>
			</div>
	
        </div>
      );
    }
}
 function data1() {
          return {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: rand(32, 100, 7)
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: rand(32, 100, 7)
                }
            ]
          };
        }
class Dashboard extends React.Component{
    render() {
      return (
        <div>
            <h1>Hello Dashboard!</h1>
        </div>
      );
    }
}

class NotFoundPage extends React.Component{
    render() {
      return (
        <div>
            <h1>The page you looking for was not found!</h1>
        </div>
      );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={HomePage}>
           <Route path="dashboard" component={Dashboard}></Route>
        </Route>
    </Router>
, document.getElementById('root'));
