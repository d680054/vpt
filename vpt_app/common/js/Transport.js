class Transport {
	
	constructor(){}
	
	setNearMeStops(gpsStops) {
		let stops = uni.getStorageSync("nearMeStops");
		stops = stops ? stops : {};
		stops[this.type]=gpsStops;
		uni.setStorageSync("nearMeStops", stops);
	}
	
	getNearMeStops() {
		return uni.getStorageSync("nearMeStops")[this.type];
	}
	
	
	setSearchHistory(keyword) {
		let historyArr = uni.getStorageSync("historyArr");
		historyArr = historyArr ? historyArr : {};
		let history = historyArr[this.type];
		history = history ? history : [];
		
		var findIndex = history.indexOf(keyword);
		if (findIndex == -1) {
			history.unshift(keyword);
		} else {
			history.splice(findIndex, 1);
			history.unshift(keyword);
		}
		//最多10个纪录
		history.length > 10 && history.pop();
		historyArr[this.type] = history;
		uni.setStorage({
			key: 'historyArr',
			data: historyArr
		});
		
		return history;
	}
	
	getSearchHistory() {
		let history = uni.getStorageSync("historyArr")[this.type]
		return history ? history:[];
	}
	
	removeSearchHistory() {
		let historyArr = uni.getStorageSync("historyArr");
		historyArr[this.type] = [];
		uni.setStorageSync("historyArr", historyArr);
	}
}

export class Train extends Transport {
	
	constructor() {
		super();
		this.name = "Train";
		this.type = 0;
		this.theme = "#0072ce";
		console.info('Creating Train Object');
	}
	
	stopNameList() {
		return {
			"Alamein": 1002,
			"Ashburton": 1010,
			"Auburn": 1012,
			"Burnley": 1030,
			"Burwood": 1031,
			"Camberwell": 1032,
			"East Richmond": 1059,
			"Flagstaff": 1068,
			"Flinders Street": 1071,
			"Glenferrie": 1080,
			"Hartwell": 1087,
			"Hawthorn": 1090,
			"Melbourne Central": 1120,
			"Parliament": 1155,
			"Richmond": 1162,
			"Riversdale": 1166,
			"Southern Cross": 1181,
			"Willison": 1213,
			"Bayswater": 1016,
			"Belgrave": 1018,
			"Blackburn": 1023,
			"Boronia": 1025,
			"Box Hill": 1026,
			"Canterbury": 1033,
			"Chatham": 1037,
			"East Camberwell": 1057,
			"Ferntree Gully": 1067,
			"Heatherdale": 1091,
			"Heathmont": 1092,
			"Laburnum": 1111,
			"Mitcham": 1128,
			"Mont Albert": 1129,
			"Nunawading": 1148,
			"Ringwood": 1163,
			"Surrey Hills": 1189,
			"Tecoma": 1191,
			"Upper Ferntree Gully": 1199,
			"Upwey": 1200,
			"Ascot Vale": 1009,
			"Broadmeadows": 1028,
			"Coolaroo": 1221,
			"Craigieburn": 1044,
			"Essendon": 1064,
			"Glenbervie": 1079,
			"Glenroy": 1082,
			"Jacana": 1102,
			"Kensington": 1108,
			"Moonee Ponds": 1131,
			"Newmarket": 1140,
			"North Melbourne": 1144,
			"Oak Park": 1149,
			"Pascoe Vale": 1156,
			"Roxburgh Park": 1219,
			"Strathmore": 1186,
			"Armadale": 1008,
			"Carnegie": 1034,
			"Caulfield": 1036,
			"Clayton": 1040,
			"Cranbourne": 1045,
			"Dandenong": 1049,
			"Hawksburn": 1089,
			"Hughesdale": 1098,
			"Huntingdale": 1099,
			"Lynbrook": 1222,
			"Malvern": 1118,
			"Merinda Park": 1123,
			"Murrumbeena": 1138,
			"Noble Park": 1142,
			"Oakleigh": 1150,
			"Sandown Park": 1172,
			"South Yarra": 1180,
			"Springvale": 1183,
			"Toorak": 1194,
			"Westall": 1208,
			"Yarraman": 1215,
			"Bell": 1019,
			"Clifton Hill": 1041,
			"Collingwood": 1043,
			"Croxton": 1047,
			"Epping": 1063,
			"Hawkstowe": 1227,
			"Jolimont-MCG": 1104,
			"Keon Park": 1109,
			"Lalor": 1112,
			"Mernda": 1228,
			"Merri": 1125,
			"Middle Gorge": 1226,
			"North Richmond": 1145,
			"Northcote": 1147,
			"Preston": 1159,
			"Regent": 1160,
			"Reservoir": 1161,
			"Rushall": 1170,
			"Ruthven": 1171,
			"South Morang": 1224,
			"Thomastown": 1192,
			"Thornbury": 1193,
			"Victoria Park": 1201,
			"West Richmond": 1207,
			"Aspendale": 1011,
			"Bentleigh": 1020,
			"Bonbeach": 1024,
			"Carrum": 1035,
			"Chelsea": 1038,
			"Cheltenham": 1039,
			"Edithvale": 1060,
			"Frankston": 1073,
			"Glenhuntly": 1081,
			"Highett": 1095,
			"Kananook": 1106,
			"McKinnon": 1119,
			"Mentone": 1122,
			"Moorabbin": 1132,
			"Mordialloc": 1134,
			"Ormond": 1152,
			"Parkdale": 1154,
			"Patterson": 1157,
			"Seaford": 1174,
			"Southland": 1001,
			"Darling": 1051,
			"East Malvern": 1058,
			"Gardiner": 1075,
			"Glen Iris": 1077,
			"Glen Waverley": 1078,
			"Heyington": 1094,
			"Holmesglen": 1096,
			"Jordanville": 1105,
			"Kooyong": 1110,
			"Mount Waverley": 1137,
			"Syndal": 1190,
			"Tooronga": 1195,
			"Alphington": 1004,
			"Darebin": 1050,
			"Dennis": 1053,
			"Diamond Creek": 1054,
			"Eaglemont": 1056,
			"Eltham": 1062,
			"Fairfield": 1065,
			"Greensborough": 1084,
			"Heidelberg": 1093,
			"Hurstbridge": 1100,
			"Ivanhoe": 1101,
			"Macleod": 1117,
			"Montmorency": 1130,
			"Rosanna": 1168,
			"Watsonia": 1203,
			"Wattle Glen": 1204,
			"Westgarth": 1209,
			"Croydon": 1048,
			"Lilydale": 1115,
			"Mooroolbark": 1133,
			"Ringwood East": 1164,
			"Beaconsfield": 1017,
			"Berwick": 1021,
			"Cardinia Road": 1223,
			"Hallam": 1085,
			"Narre Warren": 1139,
			"Officer": 1151,
			"Pakenham": 1153,
			"Balaclava": 1013,
			"Brighton Beach": 1027,
			"Elsternwick": 1061,
			"Gardenvale": 1074,
			"Hampton": 1086,
			"Middle Brighton": 1126,
			"North Brighton": 1143,
			"Prahran": 1158,
			"Ripponlea": 1165,
			"Sandringham": 1173,
			"Windsor": 1214,
			"Baxter": 1015,
			"Bittern": 1022,
			"Crib Point": 1046,
			"Hastings": 1088,
			"Leawarra": 1114,
			"Morradoo": 1136,
			"Somerville": 1178,
			"Stony Point": 1185,
			"Tyabb": 1197,
			"Albion": 1003,
			"Diggers Rest": 1055,
			"Flemington Racecourse": 1070,
			"Footscray": 1072,
			"Ginifer": 1076,
			"Keilor Plains": 1107,
			"Middle Footscray": 1127,
			"St Albans": 1184,
			"Sunbury": 1187,
			"Sunshine": 1218,
			"Tottenham": 1196,
			"Watergardens": 1202,
			"West Footscray": 1206,
			"Anstey": 1006,
			"Batman": 1014,
			"Brunswick": 1029,
			"Coburg": 1042,
			"Fawkner": 1066,
			"Flemington Bridge": 1069,
			"Gowrie": 1083,
			"Jewell": 1103,
			"Macaulay": 1116,
			"Merlynston": 1124,
			"Moreland": 1135,
			"Royal Park": 1169,
			"Upfield": 1198,
			"Aircraft": 1220,
			"Altona": 1005,
			"Hoppers Crossing": 1097,
			"Laverton": 1113,
			"Newport": 1141,
			"Seaholme": 1175,
			"Seddon": 1176,
			"South Kensington": 1179,
			"Spotswood": 1182,
			"Werribee": 1205,
			"Westona": 1210,
			"Williams Landing": 1225,
			"Yarraville": 1216,
			"North Williamstown": 1146,
			"Williamstown": 1211,
			"Williamstown Beach": 1212
		};
	}
	
	transportLines() {
		return {"1":"Alamein","2":"Belgrave","3":"Craigieburn","4":"Cranbourne","5":"Mernda","6":"Frankston","7":"Glen Waverley","8":"Hurstbridge","9":"Lilydale","11":"Pakenham","12":"Sandringham","13":"Stony Point","14":"Sunbury","15":"Upfield","16":"Werribee","17":"Williamstown","1482":"Showgrounds - Flemington Racecourse"}
	}
	
	directions() {
		return {
			"0": "Alamein",
			"1": "City (Flinders Street)",
			"2": "Craigieburn",
			"3": "Belgrave",
			"4": "Cranbourne",
			"5": "Frankston",
			"6": "Glen Waverley",
			"7": "Hurstbridge",
			"8": "Lilydale",
			"9": "Mernda",
			"10": "Pakenham",
			"11": "Sandringham",
			"12": "Stony Point",
			"13": "Sunbury",
			"14": "Upfield",
			"15": "Werribee",
			"16": "Williamstown",
			"17": "Flinders Street"
		};
	
	}
	
	routeStopList() {
		console.info('vline Train stop list');
		return {
			"1001": [
				6
			],
			"1002": [
				1
			],
			"1003": [
				14
			],
			"1004": [
				8
			],
			"1005": [
				16
			],
			"1006": [
				15
			],
			"1008": [
				4,
				6,
				11
			],
			"1009": [
				3
			],
			"1010": [
				1
			],
			"1011": [
				6
			],
			"1012": [
				1,
				2,
				9
			],
			"1013": [
				12
			],
			"1014": [
				15
			],
			"1015": [
				13
			],
			"1016": [
				2
			],
			"1017": [
				11
			],
			"1018": [
				2
			],
			"1019": [
				5
			],
			"1020": [
				6
			],
			"1021": [
				11
			],
			"1022": [
				13
			],
			"1023": [
				2,
				9
			],
			"1024": [
				6
			],
			"1025": [
				2
			],
			"1026": [
				2,
				9
			],
			"1027": [
				12
			],
			"1028": [
				3
			],
			"1029": [
				15
			],
			"1030": [
				1,
				2,
				7,
				9
			],
			"1031": [
				1
			],
			"1032": [
				1,
				2,
				9
			],
			"1033": [
				2,
				9
			],
			"1034": [
				4,
				11
			],
			"1035": [
				6
			],
			"1036": [
				4,
				6,
				11
			],
			"1037": [
				2,
				9
			],
			"1038": [
				6
			],
			"1039": [
				6
			],
			"1040": [
				4,
				11
			],
			"1041": [
				5,
				8
			],
			"1042": [
				15
			],
			"1043": [
				5,
				8
			],
			"1044": [
				3
			],
			"1045": [
				4
			],
			"1046": [
				13
			],
			"1047": [
				5
			],
			"1048": [
				9
			],
			"1049": [
				4,
				11
			],
			"1050": [
				8
			],
			"1051": [
				7
			],
			"1053": [
				8
			],
			"1054": [
				8
			],
			"1055": [
				14
			],
			"1056": [
				8
			],
			"1057": [
				2,
				9
			],
			"1058": [
				7
			],
			"1059": [
				1,
				2,
				7,
				9
			],
			"1060": [
				6
			],
			"1061": [
				12
			],
			"1062": [
				8
			],
			"1063": [
				5
			],
			"1064": [
				3
			],
			"1065": [
				8
			],
			"1066": [
				15
			],
			"1067": [
				2
			],
			"1068": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				11,
				12,
				14,
				15,
				16,
				17
			],
			"1069": [
				15
			],
			"1070": [
				14,
				1482
			],
			"1071": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				11,
				12,
				14,
				15,
				16,
				17,
				1482
			],
			"1072": [
				14,
				16,
				17
			],
			"1073": [
				6,
				13
			],
			"1074": [
				12
			],
			"1075": [
				7
			],
			"1076": [
				14
			],
			"1077": [
				7
			],
			"1078": [
				7
			],
			"1079": [
				3
			],
			"1080": [
				1,
				2,
				9
			],
			"1081": [
				6
			],
			"1082": [
				3
			],
			"1083": [
				15
			],
			"1084": [
				8
			],
			"1085": [
				11
			],
			"1086": [
				12
			],
			"1087": [
				1
			],
			"1088": [
				13
			],
			"1089": [
				4,
				6,
				11
			],
			"1090": [
				1,
				2,
				9
			],
			"1091": [
				2,
				9
			],
			"1092": [
				2
			],
			"1093": [
				8
			],
			"1094": [
				7
			],
			"1095": [
				6
			],
			"1096": [
				7
			],
			"1097": [
				16
			],
			"1098": [
				4,
				11
			],
			"1099": [
				4,
				11
			],
			"1100": [
				8
			],
			"1101": [
				8
			],
			"1102": [
				3
			],
			"1103": [
				15
			],
			"1104": [
				5,
				8
			],
			"1105": [
				7
			],
			"1106": [
				6
			],
			"1107": [
				14
			],
			"1108": [
				3
			],
			"1109": [
				5
			],
			"1110": [
				7
			],
			"1111": [
				2,
				9
			],
			"1112": [
				5
			],
			"1113": [
				16
			],
			"1114": [
				13
			],
			"1115": [
				9
			],
			"1116": [
				15
			],
			"1117": [
				8
			],
			"1118": [
				4,
				6,
				11
			],
			"1119": [
				6
			],
			"1120": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				11,
				12,
				14,
				15,
				16,
				17
			],
			"1122": [
				6
			],
			"1123": [
				4
			],
			"1124": [
				15
			],
			"1125": [
				5
			],
			"1126": [
				12
			],
			"1127": [
				14
			],
			"1128": [
				2,
				9
			],
			"1129": [
				2,
				9
			],
			"1130": [
				8
			],
			"1131": [
				3
			],
			"1132": [
				6
			],
			"1133": [
				9
			],
			"1134": [
				6
			],
			"1135": [
				15
			],
			"1136": [
				13
			],
			"1137": [
				7
			],
			"1138": [
				4,
				11
			],
			"1139": [
				11
			],
			"1140": [
				3
			],
			"1141": [
				16,
				17
			],
			"1142": [
				4,
				11
			],
			"1143": [
				12
			],
			"1144": [
				3,
				14,
				15,
				16,
				17,
				1482
			],
			"1145": [
				5,
				8
			],
			"1146": [
				17
			],
			"1147": [
				5
			],
			"1148": [
				2,
				9
			],
			"1149": [
				3
			],
			"1150": [
				4,
				11
			],
			"1151": [
				11
			],
			"1152": [
				6
			],
			"1153": [
				11
			],
			"1154": [
				6
			],
			"1155": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				11,
				12,
				14,
				15,
				16,
				17
			],
			"1156": [
				3
			],
			"1157": [
				6
			],
			"1158": [
				12
			],
			"1159": [
				5
			],
			"1160": [
				5
			],
			"1161": [
				5
			],
			"1162": [
				1,
				2,
				4,
				6,
				7,
				9,
				11,
				12
			],
			"1163": [
				2,
				9
			],
			"1164": [
				9
			],
			"1165": [
				12
			],
			"1166": [
				1
			],
			"1168": [
				8
			],
			"1169": [
				15
			],
			"1170": [
				5
			],
			"1171": [
				5
			],
			"1172": [
				4,
				11
			],
			"1173": [
				12
			],
			"1174": [
				6
			],
			"1175": [
				16
			],
			"1176": [
				16,
				17
			],
			"1178": [
				13
			],
			"1179": [
				16,
				17
			],
			"1180": [
				4,
				6,
				11,
				12
			],
			"1181": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				11,
				12,
				14,
				15,
				16,
				17,
				1482
			],
			"1182": [
				16,
				17
			],
			"1183": [
				4,
				11
			],
			"1184": [
				14
			],
			"1185": [
				13
			],
			"1186": [
				3
			],
			"1187": [
				14
			],
			"1189": [
				2,
				9
			],
			"1190": [
				7
			],
			"1191": [
				2
			],
			"1192": [
				5
			],
			"1193": [
				5
			],
			"1194": [
				4,
				6,
				11
			],
			"1195": [
				7
			],
			"1196": [
				14
			],
			"1197": [
				13
			],
			"1198": [
				15
			],
			"1199": [
				2
			],
			"1200": [
				2
			],
			"1201": [
				5,
				8
			],
			"1202": [
				14
			],
			"1203": [
				8
			],
			"1204": [
				8
			],
			"1205": [
				16
			],
			"1206": [
				14
			],
			"1207": [
				5,
				8
			],
			"1208": [
				4,
				11
			],
			"1209": [
				8
			],
			"1210": [
				16
			],
			"1211": [
				17
			],
			"1212": [
				17
			],
			"1213": [
				1
			],
			"1214": [
				12
			],
			"1215": [
				4,
				11
			],
			"1216": [
				16,
				17
			],
			"1218": [
				14
			],
			"1219": [
				3
			],
			"1220": [
				16
			],
			"1221": [
				3
			],
			"1222": [
				4
			],
			"1223": [
				11
			],
			"1224": [
				5
			],
			"1225": [
				16
			],
			"1226": [
				5
			],
			"1227": [
				5
			],
			"1228": [
				5
			]
		};
	}
	
	hotKeywords() {
		return ['Flinders Street', 'Southern Cross', 'Melbourne Central', 'Flagstaff', 'Parliament'];
	}
	
	setTabBar() {
		uni.setTabBarItem({
			iconPath: 'static/images/train-inactive.png',
			selectedIconPath: 'static/images/train.png',
			index: 0,
			text: "Train",
		})
	}
}

export class VLine extends Transport {
	
	constructor() {
		super();
		this.name = "V/Line";
		this.type = 3;
		this.theme = "#8f1995";
		console.info('Creating VLine Object');
	}
	
	stopNameList() {
		return {
			"Eversley St/Hamilton - Port Fairy Rd": 21122,
			"Port Fairy Visitor Centre/Bank St": 4156,
			"Pearses Rd/Hamilton - Port Fairy Rd": 21861,
			"Ararat": 1501,
			"Southern Cross": 1181,
			"Lake Fyans Tourist Rd/Ararat - Pomonal Rd": 26150,
			"Southern Cross Coach Terminal/Spencer St": 4529,
			"White St/Hamilton - Port Fairy Rd": 23376,
			"Hamilton Station/Station St": 4125,
			"Warrnambool Station/Merri St": 4103,
			"Information Centre/Grampians Rd": 4539,
			"Moyston - Dunkeld Rd/Ararat - Pomonal Rd": 26317,
			"Ararat Town Hall/Barkly St": 26759,
			"Koroit St Interchange/Koroit St": 21770,
			"Avenel": 1502,
			"Tallarook": 1560,
			"Wandong": 1566,
			"Wangaratta": 1567,
			"Wodonga TAFE/87 McKoy St": 29462,
			"Donnybrook": 1520,
			"Wodonga": 1571,
			"Craigieburn": 1044,
			"Springhurst": 1557,
			"Kilmore East": 1532,
			"Heathcote Junction": 1529,
			"Violet Town": 1565,
			"North Melbourne": 1144,
			"Ovens St/Rowan St": 23745,
			"Seymour": 1554,
			"King George Gardens/Rowan St": 4532,
			"Broadford": 1511,
			"Broadmeadows": 1028,
			"Wodonga CBD/Elgin Bvd": 4582,
			"Albury": 1500,
			"Benalla": 1508,
			"McGuinness St/Railway St": 4576,
			"Wallan": 1574,
			"Essendon": 1064,
			"Chiltern": 1515,
			"Euroa": 1525,
			"Hadfield Park/High St": 4327,
			"Family Store/Malaya Rd": 14238,
			"Hudson Park/Sydney St": 4306,
			"Bridges Barracks/Morobe Rd": 27458,
			"Carp St/Church St": 4282,
			"Traralgon": 1563,
			"Caltex Service Station/Princes Hwy": 4278,
			"Bendigo Bank/Maurice Ave": 4503,
			"Orient St": 4289,
			"Wonboyn Rd/Princes Hwy": 4277,
			"Stratford": 1558,
			"Park St": 4280,
			"Post Office/Princes Hwy": 4259,
			"Warragul": 1568,
			"Cann River Police Staion/Ward St": 4264,
			"Sale": 1553,
			"Caulfield": 1036,
			"ANZ Bank/Wagonga St": 4283,
			"Mort Ave/Princes Hwy": 4499,
			"Apex Park/Princes Hwy": 4287,
			"Wairewa Rd/Princes Hwy": 30270,
			"Rosedale": 1551,
			"Hector McWilliams Dr/Princes Hwy": 4285,
			"Wapengo St/Wallaga Lake Rd": 4591,
			"Waygara Rd/Princes Hwy": 4274,
			"Flinders Street": 1071,
			"Moe": 1540,
			"Warrens Rd/Princes Hwy": 4275,
			"Bairnsdale": 1504,
			"Bennet Lane": 4279,
			"Narooma Visitor Information Centre/Princes Hwy": 4284,
			"Bermagui Motor Inn/Lamont St": 4596,
			"Service Station/Tarlington St": 4281,
			"Nowa Nowa General Store/Princes Hwy": 4527,
			"Nicholson St/Wolseley St": 4270,
			"Morwell": 1542,
			"Bemm River Rd/Princes Hwy": 3336,
			"Shops/Princes Hwy": 4286,
			"Pakenham": 1153,
			"opposite Genoa Hotel/Alexanders Rd": 4276,
			"Nowa Nowa/Princes Hwy": 4269,
			"Township/Gipsy Point Rd": 4520,
			"Dandenong": 1049,
			"Centennial Park/Bombala St": 4265,
			"Police Station/Roadknight St": 4072,
			"General Store/Princes Hwy(Cabbage Tree Creek)": 4271,
			"General Store/Princes Hwy(Johnsonville)": 4255,
			"General Store/Princes Hwy(Swan Reach)": 4256,
			"General Store/Princes Hwy(Nicholson)": 4254,
			"Hotel/Western Hwy(Buangor)": 4145,
			"Hotel/Western Hwy(Kiata)": 4226,
			"Post Office/Sunraysia Hwy(Donald)": 4211,
			"Post Office/Sunraysia Hwy(Avoca)": 4042,
			"Post Office/Hamilton Hwy(Penshurst)": 4113,
			"Princes Hwy(Mogo-NSW)": 4288,
			"Princes Hwy(Tyrendarra)": 4158,
			"General Store/Mallee Hwy(Underbool)": 4193,
			"General Store/Mallee Hwy(Walpeup)": 4194,
			"General Store/Glenelg Hwy(Linton)": 4235,
			"General Store/Glenelg Hwy(Westmere)": 4132,
			"Information Centre/Glenelg Hwy(Dunkeld)": 4130,
			"Information Centre/Glenelg Hwy(Lake Bolac)": 4129,
			"Exeter Rd/Maroondah Hwy(Croydon North)": 4348,
			"Exeter Rd/Maroondah Hwy": 12737,
			"Clyde-Five Ways Rd/South Gippsland Hwy(Clyde)": 4454,
			"Clyde-Five Ways Rd/South Gippsland Hwy(Devon Meadows)": 4147,
			"General Store/Midland Hwy(Guildford)": 4243,
			"General Store/Midland Hwy(Elaine)": 4217,
			"General Store/Midland Hwy(Lethbridge)": 4221,
			"Nimmitabel Bakery/Bombala St": 4267,
			"Lindenow Rd/Princes Hwy": 4250,
			"Gippsland Shopping Centre/Cunninghame St": 4074,
			"Latrobe St/Princes Hwy": 4304,
			"Barracouta Rd/Lake Tyers Rd": 4262,
			"War Memorial/Forbes St": 4266,
			"Hunters Lane/Princes Hwy": 4257,
			"Canberra Railway Station/Burke Cres": 4268,
			"Lookout Rd/Princes Hwy": 4258,
			"Jetty Rd/Princes Hwy": 4588,
			"Forest Tech/Princes Hwy": 30926,
			"Bailey St/Princes Hwy": 4253,
			"Jolimont Centre/Northbourne Ave": 4263,
			"General Store/Traralgon-Maffra Rd": 4378,
			"Victoria St/Cowen St": 4512,
			"79 Moe-Glengarry Rd": 4522,
			"McEwan Rd/Traralgon - Maffra Rd": 4177,
			"Opp Glengarry Hotel/Main St": 4573,
			"Hunt Pl/Princes Hwy": 4052,
			"Garfield": 1526,
			"Drouin": 1521,
			"Boisdale St/Johnson St": 4506,
			"Pearson St/Johnson St": 4507,
			"Traralgon Plaza SC/Franklin St": 4498,
			"Gordon St/Mary St": 4509,
			"Primary School/Harbeck St": 4510,
			"Pier Rd/Bass Hwy": 4459,
			"Post Office/Marine Pde": 4465,
			"Inverloch Police Station/Bayview Ave": 32527,
			"Ramsay Bvd/The Esplanade": 4474,
			"Deep Creek St/Bass Hwy": 27134,
			"Kallay Dr/Bass Hwy": 4210,
			"Thompson Ave/Chapel St": 4468,
			"Cranbourne Park SC/High St": 4537,
			"Walton St/Thompson Ave": 4467,
			"Seaward Dr/Cape Paterson Rd": 4473,
			"Cranbourne Park SC/Lyall St": 4452,
			"Phillip Island Rd": 25817,
			"Ozone Hotel/Bass Hwy": 4470,
			"Stanley Rd/Bass Hwy": 4496,
			"Panorama Dr/Phillip Island Rd": 25809,
			"Corinella Rd/Bass Hwy": 4460,
			"Gurdies - St Helier Rd/Bass Hwy": 4475,
			"South Dudley Rd/Bass Hwy": 4471,
			"Forrest Ave/Phillip Island Rd": 4153,
			"opp 137 McKenzie St": 4366,
			"Station St/High St": 4437,
			"Comfort Station Bus Interchange/Western Port Rd": 4457,
			"Miners Rest Hotel/McKenzie St": 4152,
			"Bus Interchange/Biggs Dr": 29567,
			"General Store/Phillip Island Rd": 25814,
			"Bus Interchange/Rossiter Rd": 4456,
			"Phillip Island Rd/Bass Hwy": 4464,
			"Bay Rd/Bass Hwy": 29542,
			"General Store/Hade Ave": 4463,
			"Mickle St/South Gippsland Hwy": 4587,
			"Peppermint Rd/Bass Hwy": 4469,
			"Nar Nar Goon": 1545,
			"Trafalgar": 1562,
			"Bunyip": 1512,
			"Longwarry": 1536,
			"Bairnsdale Railway Station/MacLeod St": 4107,
			"Tynong": 1564,
			"Yarragon": 1573,
			"Richmond": 1162,
			"Marlo Primary School/Jorgensen St": 30279,
			"Clayton": 1040,
			"King St/Commercial St": 4442,
			"Mitchell St/Davis St": 4355,
			"Pulhams Store/Main St": 4552,
			"Roo Fuel/Meeniyan - Promontory Rd": 4438,
			"Koala Dr/Swan Rd": 31273,
			"Newsagency/Stanley St": 4440,
			"Coal Creek Museum/South Gippsland Hwy": 4445,
			"Welsford St/South Gippsland Hwy": 4439,
			"Clarence St/Victoria Rd": 4551,
			"Alberton Store/South Gippsland Hwy": 4435,
			"Leongatha Railway Station/Long St": 4448,
			"Post Office/South Gippsland Hwy": 4447,
			"Neals Rd/Meeniyan - Promontory Rd": 3334,
			"Memorial Park/Grant St": 4446,
			"Big Strawberry Restaurant/Goulburn Valley Hwy": 4249,
			"Cobram Station/Punt Rd": 4352,
			"Farrell Park/3591 Katamatite-Shepparton Rd": 4581,
			"Shepparton": 1555,
			"Murchison/Stevenson St": 4186,
			"General Store/Numurkah Rd": 4415,
			"Maguire St/Murray Valley Hwy": 4354,
			"Caltex Roadhouse/Newell Hwy": 4421,
			"Fraser St/Wyndham St": 4462,
			"Vine St/Vine St": 4491,
			"Nagambie": 1544,
			"Deniliquin Rd/Morris St": 4051,
			"Mill St/McLennan St": 4110,
			"Opposite Bendigo Bank/Kingfisher Ave": 4414,
			"Mooroopna": 1541,
			"Kokoda Rd/Murray Valley Hwy": 4353,
			"Victoria Rd/Goulburn Valley Hwy": 4423,
			"Hogan St/Fraser St": 4505,
			"Murchison East": 1543,
			"Walter St/Goulburn Valley Hwy": 4424,
			"High St/Vine St": 4526,
			"General Store/Nangunia St": 4417,
			"Visitors Centre/Jondaryan Ave": 4416,
			"Memorial Park/Wollamai St": 4419,
			"Rivadestra Pizza & Pasta/Bridge Rd": 4422,
			"Mill St/Midland Hwy": 4171,
			"Quinn St/Mieklejohn St": 4356,
			"Goulburn Valley Health/Graham St": 22638,
			"Cross Lane/Toolamba Rd": 4420,
			"Post Office/Anzac Rd": 4065,
			"High St/Murray St": 28596,
			"Sanger St/River St": 4299,
			"Blanche St/Foord St": 4350,
			"RMIT Bundoora Campus West/Plenty Rd": 26954,
			"Walnut St/Church St": 3335,
			"General Store/Goulburn Valley Hwy": 4548,
			"Lilydale Railway Station/Maroondah Hwy": 4411,
			"Herbert Rd/Melba Hwy": 4344,
			"east of Pechell St/High St": 4236,
			"Bundoora RMIT/Plenty Rd": 10391,
			"Phillip St/Bon Cres": 4403,
			"Flowerdale Hotel/Whittlesea-Yea Rd": 4409,
			"Watts St/Whitehorse Rd": 4407,
			"Wrights St/Maroondah Hwy": 4413,
			"Hazeldene Bridge/Whittlesea-Yea Rd": 4525,
			"Silver Creek Rd/Whittlesea-Yea Rd": 4405,
			"Eastland SC/Warrandyte Rd": 13970,
			"Roadhouse/Melba Hwy": 4401,
			"Euroa-Mansfield Rd/Maroondah Hwy": 4347,
			"Ringwood Station/Maroondah Hwy": 27939,
			"Church St/Walnut St": 4346,
			"Walker Park/Whitehorse Rd": 4547,
			"Woolshed Rd/Maroondah Hwy": 4412,
			"Euroa - Mansfield Rd/Maroondah Hwy": 4579,
			"General Store/Whittlesea-Yea Rd": 4410,
			"Opposite CFA/Maroondah Hwy": 4404,
			"MMBL Depot/High St": 4400,
			"Saunders Reserve/Middleton St": 4427,
			"Belmore St/Orr St": 4297,
			"Town Hall/Devenish Rd": 4139,
			"St James Rd/Devenish Rd": 4428,
			"Melbourne St/Inglis St": 4426,
			"Victory Park/Hall Rd": 4549,
			"Service Station/Gisborne Rd": 27052,
			"Ballan": 1505,
			"Rockbank": 1167,
			"Bacchus Marsh": 1503,
			"Ballarat": 1506,
			"Caroline Springs": 1601,
			"Ballan Police Station/Old Melbourne Rd": 24626,
			"Ardeer": 1007,
			"Ballarat Railway Station/Lydiard St": 4458,
			"Melton": 1121,
			"Sunshine": 1218,
			"Wendouree": 1589,
			"Footscray": 1072,
			"Deer Park": 1052,
			"Former Pleasant Creek Courthouse/Western Hwy": 4593,
			"Grampians Gardens Caravan Park/Grampians Rd": 33340,
			"Brambuk the National Park and Cultural Centre/Grampians Rd": 33415,
			"Stawell Town Hall/Main St": 26640,
			"Recreation Reserve/Grampians Rd": 4524,
			"Lakeside Caravan Park/Tymna Dr": 33416,
			"Lake Bellfield/Tymna Dr": 33417,
			"Stawell Station": 29654,
			"BP Roadhouse/Glenelg Hwy": 4227,
			"Casterton Memorial Hospital/Russell St": 4391,
			"Milk Bar/Glenelg Hwy": 4131,
			"Rubicon St/Albert St": 4128,
			"CFA Station/Glenelg Hwy": 4133,
			"Loader St/Glenelg Hwy": 4240,
			"Wathen St/Henty St": 4117,
			"Cameron St/Glenelg Hwy": 4116,
			"Drummond St/Glenelg Hwy": 4233,
			"Whyte St/Henty St": 4126,
			"Tourist Information Centre/Jubilee Hwy East": 4163,
			"Beaufort": 1507,
			"CFA/Sunraysia Hwy": 4143,
			"near Fire Station/Henty Hwy": 4134,
			"General Store/Sunraysia Hwy": 4038,
			"Sheep Hills Rd/Stawell-Warracknabeal Rd": 4142,
			"Ouyen Community Park/Oke St": 28234,
			"Rosebery Station/Henty Hwy": 4140,
			"Swann St/Henty Hwy": 4144,
			"Scott St/Woolcock St": 4141,
			"Cuibitt St/Western Hwy": 4574,
			"Galaquil West Rd/Henty Hwy": 4136,
			"Hogans Newsagent/Phillips St": 4137,
			"Cubitt St/Western Hwy": 4105,
			"Service Station/Sunraysia Hwy": 4216,
			"Trawalla PS/Western Hwy": 4592,
			"Walter St/Cromie St": 4070,
			"Wills St/Edwards St": 4146,
			"Boree St/Sunraysia Hwy": 4135,
			"Main St/Church St": 4138,
			"Hotel/Midland Hwy": 4100,
			"Railway Hotel/Creswick - Newstead Rd": 4108,
			"Gear Ave/Warrenheip St": 4017,
			"Cumberland Hotel/Creswick-Newstead Rd": 4387,
			"Acacia Rd/Creswick-Newstead Rd": 4385,
			"Bendigo Station/Railway Pl": 4071,
			"Market St/Calder Hwy": 4245,
			"Opposite Old Garage/Creswick-Newstead Rd": 4388,
			"Pinjarra Dr/Bendigo - Maldon Rd": 4096,
			"Creswick-Newstead Rd": 4386,
			"CFA/Bridport St": 4246,
			"Post Office/Murray Valley Hwy": 4295,
			"Antique Shop/Midland Hwy": 4244,
			"Kerang": 1531,
			"Francis St/High St": 4533,
			"Mildura": 4558,
			"Creswick": 1590,
			"Robinvale Railway Station/Bromley Rd": 4296,
			"Two Bays Roadhouse/Murray Valley Hwy": 4251,
			"Roadside Store/Calder Alternative Hwy": 4081,
			"Lakeside Dr/Midland Hwy": 17143,
			"Post Office/High St": 4390,
			"Gully Rd/Maldon-Newstead Rd": 4098,
			"Bendigo": 1509,
			"Kangaroo Flat Station/High St": 4389,
			"Swan Hill": 1559,
			"Castlemaine": 1514,
			"Broomfield Rd/Clunes-Creswick Rd": 29829,
			"Panmure St/Pyrenees Hwy": 4317,
			"Raglan St/Albert St": 4219,
			"Caltex Roadhouse/Sturt Hwy": 4358,
			"Hotel/Hamilton Hwy": 4237,
			"Warrnambool": 1569,
			"Ballarat Base Hospital/Sturt St": 17376,
			"Newsagency/Hamilton Hwy": 4232,
			"Bells Rd/Glenelg Hwy": 4228,
			"Memorial Dr/Sago Hill Rd": 4055,
			"Terang": 1561,
			"General Store/Hamilton Hwy": 4238,
			"Camperdown": 1513,
			"Webster St/Dunlop St": 4242,
			"Poverty St/Commercial Rd": 4075,
			"Station Rd/Commercial Rd": 4453,
			"Kyneton": 1533,
			"Opposite Cornerstone College/Adelaide Rd": 4090,
			"Sunbury": 1187,
			"South Eastern Fwy": 4455,
			"Shell Roadhouse/North Tce": 4088,
			"Grain Silo/Wimmera Hwy": 4077,
			"Watergardens": 1202,
			"Dundas St/Market St": 4047,
			"Bull St/Broadway": 4039,
			"Coach Terminal/24 Roberts Ave": 4080,
			"Information Centre/Western Hwy": 4082,
			"Sweetie's Bakery/North Tce": 4084,
			"85 Franklin St": 4092,
			"Woodend": 1572,
			"Kangaroo Flat": 1530,
			"Tintinara Travel Stop (Mobil Roadhouse)/Dukes Hwy": 4087,
			"BP Roadhouse/North Tce": 4086,
			"Kaniva Community Roadhouse/Western Hwy": 4083,
			"Information Centre/South Tce": 4089,
			"Makin St/Heritage St": 4085,
			"Murtoa Medical Centre/McDonald St": 4079,
			"Mobil Roadhouse/Sunraysia Hwy": 4076,
			"Car Park Rear Toilet Block/Lloyd St": 4094,
			"Algie Rd/Murray Valley Hwy": 4294,
			"Peake Hotel/Mallee Hwy": 4184,
			"McAlpine Rd/Murray Valley Hwy": 4178,
			"Post Office/King Edward St": 4174,
			"Murray Valley Hwy": 4380,
			"Caltex Roadhouse Rose St/Northern Hwy": 4196,
			"BP Roadhouse/Homburg Tce": 4191,
			"Newsagent/Murray Valley Hwy": 4291,
			"Parilla Store/Mallee Hwy": 4190,
			"Echuca": 1523,
			"General Store/Murray St": 4383,
			"Roadside Stop/Mallee Hwy": 4425,
			"Service Station/Murray Valley Hwy": 4176,
			"Jabuk Store/Mallee Hwy": 4185,
			"Sherlock Store/Mallee Hwy": 4182,
			"Robinvale - Sea Lake Rd/Mallee Hwy": 4179,
			"Murrayville Hotel/Mallee Hwy": 4192,
			"Post Office/Railway Tce": 4189,
			"Macedon": 1537,
			"Malmsbury": 1538,
			"Coles Supermarket/Aitken St": 4066,
			"Gisborne": 1528,
			"Australia Post/Mollison St": 27433,
			"Clarkefield": 1516,
			"Riddells Creek": 1549,
			"Eaglehawk": 1522,
			"Epsom": 1597,
			"General Store/Northern Hwy": 4481,
			"Romsey Community Hub/Main St": 4338,
			"Rochester": 1550,
			"Singer Rd/Lockington Rd": 4335,
			"Barry St/Main St": 4550,
			"Melbourne Airport/Grants Rd": 27402,
			"Thompson St/Main St": 4336,
			"High St/Main Rd": 4545,
			"High St/Romsey Rd": 4331,
			"Axedale Rd/Northern Hwy": 4483,
			"Elmore": 1524,
			"Border Service Station/Murray St": 4337,
			"King Albert Ave/Leitchville Rd": 4332,
			"Jennings St/Northern Hwy": 4482,
			"Mitchell St/High St": 4234,
			"Power St/High St": 4480,
			"Bendigo-Murchison Rd/Northern Hwy": 4484,
			"General Store/Murray Valley Hwy": 4334,
			"Kelly Park/26 Kelly St": 4541,
			"Sydney Rd/Bell St": 4488,
			"Corio": 1518,
			"North Geelong": 1546,
			"Lara": 1534,
			"South Geelong": 1556,
			"Waurn Ponds": 1596,
			"Wyndham Vale": 1598,
			"Geelong": 1527,
			"Little River": 1535,
			"Marshall": 1539,
			"Tarneit": 1599,
			"North Shore": 1547,
			"Anglesea Motor Inn/Great Ocean Rd": 4016,
			"Moorabool St/Malop St": 4018,
			"Point Roadknight/Great Ocean Rd": 4008,
			"Grossmans Rd/Surf Coast Hwy": 4011,
			"Post Office/Great Ocean Rd": 4003,
			"Visitor Information Centre/Great Ocean Rd": 4599,
			"Lorne Hotel/Great Ocean Rd": 14132,
			"Geelong Station/Railway Tce": 4321,
			"Skenes Creek Valley Rd/Great Ocean Rd": 4021,
			"Torquay Holiday Resort/Surf Coast Hwy": 4022,
			"Old Ocean Rd/Great Ocean Rd": 4034,
			"McRae Rd/Great Ocean Rd": 4015,
			"School Rd/Great Ocean Rd": 4239,
			"Pioneer Rd/Torquay Rd": 4019,
			"Twelve Apostles/Great Ocean Rd": 4033,
			"Jennifer Ct/Pioneer Rd": 4540,
			"Duffields Rd/Great Ocean Rd": 4007,
			"Bells Bvd/Great Ocean Rd": 4005,
			"Bambra Rd/Great Ocean Rd": 4004,
			"Surf Club/Tregea St": 4028,
			"Merrijig Dr/Surf Coast Hwy": 27849,
			"General Store/Great Ocean Rd": 4029,
			"Grey River Rd/Hawdon Ave": 4441,
			"General Store/Macs St": 4027,
			"Roslyn Rd/High St": 4020,
			"Lorne Visitor Centre/Great Ocean Rd": 4536,
			"Waurn Ponds Shopping Centre/Pioneer Rd": 15524,
			"Adiscott Rd/Great Ocean Rd": 4002,
			"London Bridge/Great Ocean Rd": 4032,
			"Great Ocean Rd/Camp Rd": 4006,
			"Pisces Holiday Park/Great Ocean Rd": 4009,
			"Bay  of Islands": 4528,
			"Hawdon Ave/Great Ocean Rd": 4014,
			"Jarosite Rd/Great Ocean Rd": 4493,
			"Loch Ard Gorge/Great Ocean Rd": 4030,
			"Mount Duneed Rd/Surf Coast Hwy": 25735,
			"Yarringa Rd/Great Ocean Rd": 4026,
			"Golf Links Rd/Great Ocean Rd": 4010,
			"Harrison St/Marengo Crst": 4584,
			"Forest St/Warrenheip St": 4048,
			"Clarendon-Lal Lal Rd/Midland Hwy": 4043,
			"Lawler St/Midland Hwy": 4209,
			"Calvert St/Ballarat Rd": 4605,
			"McPhillips Rd/High St": 4212,
			"Ryan Rd/Midland Hwy": 4222,
			"River St/Midland Hwy": 4220,
			"Sovereign Hill/Bradshaw St": 4046,
			"Navigators Rd": 4035,
			"Nhill": 1611,
			"Dimboola": 1604,
			"Warrenheip Rd/Navigators Rd": 4224,
			"Eaglesons Rd/Clarendon-Lal Lal Rd": 4049,
			"Yendon Rd/Harbours Rd": 4225,
			"Stawell": 1613,
			"Fisher St/Western Hwy": 4106,
			"Horsham": 1595,
			"Post Office/Hamilton Hwy": 4118,
			"Sherwood Park Bus Stop/Aitken Dr": 4102,
			"Post Office/Terang-Mortlake Rd": 4124,
			"Austin St/Penhurst-Warrnambool Rd": 4112,
			"Tarrington Lutheran School/Hamilton Hwy": 4119,
			"General Store/Warrnambool-Caramut Rd": 4122,
			"Village Green/North Rd": 4578,
			"Colac": 1517,
			"Hexham-Chatsworth Rd/Hamilton Hwy": 4121,
			"Milk Bar/Echuca - Nathalia Rd": 4544,
			"Camp Rd/Sydney Rd": 23586,
			"General Store/Barmah - Shepparton Rd": 22236,
			"Campbellfield Plaza/Sydney Rd": 4324,
			"Zeerust Rd/Barmah - Shepparton Rd": 4430,
			"School St/Moora Rd": 4342,
			"Milk Bar/Station St": 4341,
			"Birdwood Ave/Brundenell St": 4399,
			"Nathalia Hotel/Blake St": 22229,
			"High St/Moora Rd": 4120,
			"Transit Centre/Union St": 4293,
			"Kaarimba Rd/Barmah - Shepparton Rd": 4436,
			"Caltex Service Station/Waverley Ave": 4519,
			"Colbinabbin General Store/Mitchell St": 25631,
			"Barmah Hotel/Maloney St": 4343,
			"La Trobe University/Retreat Rd": 4397,
			"BP Service Station/1929 Midland Hwy": 4492,
			"La Trobe University/Sharon St": 4396,
			"Main St/Daylesford-Trentham Rd": 4318,
			"Trentham Milk Bar/Market St": 4305,
			"Tylden Produce Store/Tylden-Woodend Rd": 4535,
			"Service Station/Daylesford-Trentham Rd": 4534,
			"Opposite Station/Daylesford-Trentham Rd": 4303,
			"344 Whitelock St": 4329,
			"Murray River Council/Cobb Hwy": 4307,
			"Sun River Home Park/Northern Hwy": 4326,
			"Caltex Service Station/Cobb Hwy": 4323,
			"Narrawong Store/Princes Hwy": 4159,
			"General Store/Greenham St": 4162,
			"Winchelsea": 1570,
			"Annesley St": 4157,
			"Birregurra": 1510,
			"Austin St/Warncoort-Birregurra Rd": 4151,
			"Spring St/Commercial Rd": 4155,
			"Lindsay St/Princes Hwy": 4161,
			"Henty Street Bus Interchange/Henty St": 4160,
			"Sherwood Park": 1575,
			"Caltex Service Station/Sydney St": 4059,
			"Tourist Information Centre/249 Sheridan St": 4060,
			"Westpac Bank/Albury St": 4058,
			"BP Service Station/Hume Hwy": 4057,
			"Murrumbateman Hotel/Barton Hwy": 4062,
			"Tourist Information Centre/Lead St": 4061,
			"Newbridge General Store/Wimmera Hwy": 30024,
			"Corner Store/Main St": 4044,
			"Dunolly Rd": 4301,
			"Riddells Creek Rd/Melbourne Rd": 4521,
			"Newham Primary School/Rochford Rd": 4562,
			"Gisborne Station/Early St": 30398,
			"Daylesford - Newstead Rd/Newstead - Guildford Rd": 4260,
			"Havelock St/Clarendon St": 4205,
			"Sutton Rd": 4466,
			"Maryborough": 1592,
			"General Store/Green St": 4523,
			"Highview College/Kars St": 4395,
			"Locks Lane/Pyrenees Hwy": 4316,
			"Annuello turn off/Robinvale - Sea Lake Rd": 4382,
			"Mangan St/Henderson Rd": 4095,
			"Tungamah Rd/Murray Valley Hwy": 4302,
			"Fitzgerald Rd/Robinvale - Sea Lake Rd": 4381,
			"Post Office/Indi Ave": 4208,
			"Scandinavian Cres/Ballarat St": 4223,
			"Napier St/Derby St": 4213,
			"Hassell St/Calder Hwy": 4203,
			"Woomelang Station/Sunraysia Hwy": 4218,
			"Hotel/Sunraysia Hwy": 4206,
			"Talbot Station/Railway St": 30977,
			"Clunes Station/Ballarat Maryborough Rd": 4585,
			"Caltex Station/Calder Hwy": 4040,
			"Memorial Park/Cumming Ave": 4202,
			"BP Store/Calder Hwy": 4204,
			"Butcher Shop/Service St": 4200,
			"Holyrood St/Park Rd": 4207,
			"Pyramid": 1548,
			"Dingee": 1519,
			"Pierce Rd/Bendigo - Pyramid Rd": 4172,
			"Loddon Valley Hwy": 4500,
			"Boort - Pyramid Rd/Loddon Valley Hwy": 4379,
			"Inglewood St/Bendigo - Pyramid Rd": 4376,
			"Victoria St/High St": 4201,
			"Hunter St/Loddon Valley Hwy": 4375,
			"Glossop St/Bendigo - Pyramid Rd": 4063,
			"Glenloth Rd/Calder Hwy": 4311,
			"Nullawil - Birchip Rd/Calder Hwy": 4313,
			"Newsagency/Best St": 4309,
			"Houston St/Calder Hwy": 4365,
			"Teddywaddy Rd/Calder Hwy": 4315,
			"Garage/Main St": 4312,
			"Maiden Gully Rd/Calder Hwy": 4362,
			"Caltex Service Station/Calder Hwy": 4308,
			"Travellers Rest/John Curtin Dr": 4310,
			"Jacka Park/Chapel St": 4093,
			"Park St/Calder Hwy": 4364,
			"Marong General Store/Calder Hwy": 4363,
			"Post Office/Calder Hwy": 4314,
			"Berwick": 1021,
			"Bunyip Railway Station/Nar Nar Goon-Longwarry Rd": 30088,
			"Newborough TAFE/Monash Rd": 4546,
			"Princes Fwy": 4359,
			"Centre Valley Rd/Princes Dr": 4495,
			"Latrobe Regional Hospital": 4450,
			"John Field Dr/Narracan Dr (north side)": 32145,
			"Mid Valley Shopping Centre/Mid Valley Dr": 4377,
			"Bloomfield Rd/Queen St": 4479,
			"Warragul Station/Queen St": 4478,
			"Bridle Rd/Princes Dr": 19768,
			"Windermere Way/Madden Rd": 25323,
			"Lake Burrumbeet Caravan Park/Remembrance Dr": 25320,
			"Dadswells Bridge Motel/Western Hwy": 4398,
			"Boort-Wederburn Rd": 28831,
			"Information Centre/Godfrey St": 4371,
			"CFA/Boort-Wedderburn Rd": 4372,
			"Barraport East Rd/Boort - Quambatook Rd": 4370,
			"Monica St/Guthrie St": 4369,
			"Korong Vale Senior Citizens/Allen St": 29073,
			"McGregor's Garage/Donald - Swan Hill Rd": 4368,
			"Township/Boort - Quambatook Rd": 4394,
			"Goornong Newsagency/Midland Hwy": 4542,
			"Deakin University/Alfred Deakin Dr": 15335,
			"Milawa-Bobinawarrah Rd/Snow Rd": 25946,
			"Bailey St/Nicholson St": 4516,
			"Alpine Hotel/Anderson St": 4517,
			"Everton General Store/Great Alpine Rd": 4429,
			"Ford St/Camp St": 4514,
			"Ely St/Snow Rd": 25940,
			"Falls Creek Coaches/233 Kiewa Valley Hwy": 4518,
			"Post Office/Myrtle St": 4515,
			"Weller Rd/Byrneside-Kyabram Rd": 25887,
			"Talbot": 1594,
			"Clunes": 1591,
			"Raymond Island Ferry Terminal/Devon Rd": 4531
		}
	}
	
	transportLines() {
		return {"1512":"Warrnambool - Melbourne via Ararat & Hamilton","1706":"Albury - Melbourne via Seymour","1710":"Seymour - Melbourne via Broadmeadows","1717":"Batemans Bay - Melbourne via Bairnsdale","1718":"Canberra - Melbourne via Bairnsdale","1719":"Sale - Melbourne via Maffra & Traralgon","1720":"Cowes and Inverloch - Melbourne via Dandenong & Koo Wee Rup","1721":"Marlo - Lake Tyers Beach - Melbourne via Bairnsdale","1722":"Yarram - Melbourne via Koo Wee Rup & Dandenong","1723":"Griffith - Melbourne via Shepparton","1724":"Corowa - Melbourne via Rutherglen & Wangaratta","1725":"Mt Buller-Mansfield - Melbourne via Yea","1726":"Mulwala - Melbourne via Benalla & Seymour","1727":"Shepparton - Sydney via Benalla","1728":"Ballarat-Wendouree - Melbourne via Melton","1731":"Halls Gap - Melbourne via Stawell & Ballarat","1732":"Mount Gambier - Melbourne via Hamilton & Ballarat","1733":"Ouyen - Melbourne via Warracknabeal & Ballarat","1734":"Mildura - Ballarat via Swan Hill & Bendigo","1735":"Warrnambool - Melbourne via Ballarat","1737":"Adelaide - Melbourne via Nhill & Bendigo","1738":"Sydney - Adelaide via Albury","1740":"Bendigo - Melbourne via Gisborne","1744":"Barham - Melbourne via Bendigo","1745":"Geelong - Melbourne","1749":"Warrnambool - Melbourne via Apollo Bay & Geelong","1751":"Geelong - Bendigo via Ballarat","1755":"Adelaide - Melbourne via Horsham & Ballarat & Geelong","1756":"Casterton - Melbourne via Hamilton & Warrnambool","1758":"Barmah - Melbourne via Shepparton & Heathcote","1759":"Albury - Bendigo via Wangaratta & Shepparton","1760":"Daylesford - Melbourne via  Woodend or Castlemaine","1761":"Deniliquin - Melbourne via Moama & Echuca & Heathcote","1762":"Ballarat - Warrnambool via Skipton","1767":"Mount Gambier - Melbourne via Warrnambool & Geelong","1768":"Canberra - Melbourne via Albury","1773":"Donald - Melbourne via Bendigo","1774":"Lancefield - Melbourne via Sunbury or Gisborne","1775":"Maryborough - Melbourne via Castlemaine","1776":"Mildura - Albury via Kerang & Shepparton","1782":"Mildura - Melbourne via Ballarat & Donald","1783":"Mildura - Melbourne via Swan Hill & Bendigo","1784":"Sea Lake - Melbourne via Charlton & Bendigo","1823":"Bairnsdale - Melbourne via Sale & Traralgon","1824":"Traralgon - Melbourne via Morwell & Moe & Pakenham","1837":"Ararat - Melbourne via Ballarat","1838":"Nhill - Melbourne via Ararat & Ballarat","1848":"Swan Hill - Melbourne via Bendigo","1849":"Echuca-Moama - Melbourne via Bendigo or Heathcote","1853":"Warrnambool - Melbourne via Colac & Geelong","1908":"Shepparton - Melbourne via Seymour","1912":"Mount Beauty - Melbourne via Bright","1914":"Echuca-Moama - Melbourne via Shepparton","1915":"Daylesford - Melbourne via Ballarat","4871":"Maryborough - Melbourne via  Ballarat","5838":"Paynesville - Melbourne via Bairnsdale","7601":"Geelong - Colac via Winchelsea and Birregurra"};
	}
	
	directions() {
		return {
			"22": "Halls Gap",
			"23": "Marlo",
			"24": "Lancefield",
			"25": "Maryborough",
			"26": "Mansfield",
			"27": "Mt Gambier",
			"28": "Mount Gambier",
			"29": "Mildura",
			"30": "Mulwala",
			"31": "Nhill",
			"32": "Ouyen",
			"10": "Barmah",
			"33": "Sea Lake",
			"11": "Bairnsdale",
			"12": "Batemans Bay",
			"34": "Seymour",
			"35": "Griffith",
			"13": "Barham",
			"36": "Sydney",
			"14": "Bendigo",
			"37": "Sale",
			"15": "Canberra",
			"16": "Cowes or Inverloch",
			"38": "Swan Hill",
			"17": "Casterton",
			"39": "Traralgon",
			"18": "Corowa",
			"19": "Donald",
			"0": "Warrnambool",
			"1": "Melbourne",
			"2": "Daylesford",
			"3": "Echuca/Moama",
			"4": "Colac",
			"5": "Shepparton",
			"6": "Albury",
			"7": "Adelaide",
			"8": "Ararat",
			"9": "Ballarat",
			"40": "Yarram",
			"41": "Mount Beauty",
			"20": "Deniliquin",
			"42": "Paynesville",
			"21": "Geelong"
		}
	}
	
	routeStopList() {
		console.info('vline route stop list');
		return {
			4096: [1734],
			4098: [1734],
			1028: [1706, 1710, 1723, 1908],
			4100: [1734, 1751, 1915],
			4102: [1756],
			4103: [1512],
			4105: [1733, 1838],
			4106: [1755, 1838],
			4107: [1721, 5838],
			1036: [1717, 1718, 1719, 1720, 1721, 1722, 1823, 1824, 5838],
			4108: [1734],
			4110: [1723, 1738, 1759, 1908, 1914],
			1040: [1721, 1823, 1824],
			26640: [1731],
			4112: [1756],
			4113: [1756],
			1044: [1706, 1710, 1723, 1908],
			4116: [1732],
			4117: [1732, 1756],
			4118: [1756],
			4119: [1756],
			4120: [1758],
			1049: [1717, 1718, 1719, 1720, 1721, 1722, 1823, 1824, 5838],
			4121: [1756],
			4122: [1756],
			1052: [1728, 1745, 1837, 1853, 4871],
			4124: [1756],
			4125: [1512, 1732, 1756],
			4126: [1732, 1756],
			25631: [1758],
			4128: [1732],
			4129: [1732],
			4130: [1512, 1732],
			23586: [1758, 1761],
			4131: [1732],
			4132: [1732],
			4133: [1732],
			4134: [1733],
			4135: [1733, 1782],
			1064: [1706, 1710, 1723, 1908],
			4136: [1733],
			4137: [1733],
			4138: [1733],
			4139: [1726],
			4140: [1733],
			4141: [1733],
			4142: [1733],
			1071: [1717, 1718, 1719, 1720, 1721, 1722, 1823, 1824, 5838],
			4143: [1733],
			1072: [1728, 1735, 1740, 1745, 1767, 1783, 1837, 1848, 1849, 1853, 4871],
			4144: [1733],
			4145: [1733, 1837, 1838],
			24626: [1728],
			4146: [1733, 1755, 1838],
			4147: [1720, 1722],
			4151: [1767, 1853, 7601],
			4152: [1720],
			4153: [1720],
			4155: [1767],
			4156: [1512, 1767],
			4157: [1767],
			4158: [1767],
			4159: [1767],
			4160: [1767],
			4161: [1767],
			4162: [1767],
			4163: [1732, 1767],
			4171: [1723, 1738, 1758, 1759, 1776, 1908, 1914],
			4172: [1783, 1848],
			4174: [1738, 1744, 1776, 1783, 1848],
			4176: [1738, 1776, 1783, 1848],
			4177: [1719],
			4178: [1738, 1776, 1783],
			4179: [1738, 1776, 1783],
			4182: [1738],
			4184: [1738],
			4185: [1738],
			4186: [1723, 1908, 1914],
			4189: [1738],
			4190: [1738],
			4191: [1738],
			4192: [1738],
			1121: [1728, 1732, 1837, 1915, 4871],
			4193: [1738],
			4194: [1738],
			4196: [1738, 1761, 1776, 1849],
			4200: [1782, 4871],
			4201: [1783, 1848],
			4202: [1782, 1784],
			4203: [1782],
			4204: [1782],
			4205: [1775, 1782, 4871],
			22638: [1723, 1758, 1908],
			4206: [1782],
			4207: [1782, 4871],
			4208: [1782],
			4209: [1751, 1755],
			4210: [1720],
			4211: [1773, 1782],
			4212: [1751, 1755],
			4213: [1782, 4871],
			1144: [1706, 1710, 1723, 1908],
			4216: [1733, 1782],
			4217: [1751, 1755],
			4218: [1782],
			4219: [1734, 1751, 1782],
			4220: [1751, 1755],
			4221: [1751, 1755],
			4222: [1751, 1755],
			4223: [1782, 4871],
			4224: [1755],
			1153: [1717, 1719, 1721, 1823, 1824, 5838],
			4225: [1755],
			4226: [1838],
			4227: [1732, 1735, 1762],
			4228: [1735, 1762],
			29829: [1734, 1782],
			26759: [1512],
			25735: [1749],
			4232: [1735, 1762],
			4233: [1732, 1735, 1762],
			1162: [1721, 1823, 1824, 5838],
			4234: [1744, 1758, 1761, 1849],
			4235: [1732, 1735, 1762],
			4236: [1725],
			4237: [1735, 1762],
			4238: [1735, 1762],
			1167: [1728, 1837, 4871],
			4239: [1749],
			4240: [1732, 1735, 1762],
			4242: [1735, 1756, 1762],
			4243: [1734, 1751, 1775],
			4244: [1734, 1751, 1915],
			4245: [1734, 1751],
			4246: [1734, 1751, 1760, 1915],
			10391: [1725],
			4249: [1723],
			4250: [1718, 1721, 1823],
			4251: [1734, 1738, 1776, 1783],
			4253: [1718, 1721, 5838],
			1181: [1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1726, 1728, 1731, 1732, 1733, 1735, 1737,
				1740, 1744, 1745, 1749, 1755, 1756, 1758, 1760, 1767, 1768, 1773, 1774, 1775, 1782, 1783, 1784, 1823, 1824, 1837,
				1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838
			],
			4254: [1718, 1721],
			4255: [1718, 1721],
			28831: [1848],
			4256: [1718, 1721],
			4257: [1718, 1721],
			4258: [1718, 1721],
			4259: [1717, 1718, 1721],
			1187: [1737, 1740, 1774, 1783, 1848, 1849],
			15524: [1749],
			4260: [1775],
			4262: [1718, 1721],
			4263: [1718, 1768],
			4264: [1717, 1718],
			4265: [1718],
			4266: [1718],
			4267: [1718],
			4268: [1718],
			4269: [1717, 1718, 1721],
			4270: [1717, 1718, 1721],
			4271: [1717, 1718],
			4274: [1717, 1721],
			1202: [1737, 1740, 1774, 1783, 1848, 1849],
			4275: [1717, 1721],
			4276: [1717],
			4277: [1717],
			4278: [1717],
			4279: [1717],
			4280: [1717],
			4281: [1717],
			4282: [1717],
			4283: [1717],
			4284: [1717],
			4285: [1717],
			4286: [1717],
			4287: [1717],
			4288: [1717],
			23745: [1706, 1724, 1912],
			4289: [1717],
			1218: [1728, 1745, 1837, 1853, 4871],
			4291: [1738, 1744, 1776],
			4293: [1758, 1776, 1914],
			4294: [1738, 1776, 1783],
			4295: [1734, 1776, 1783],
			4296: [1734, 1776, 1783],
			4297: [1726, 1776],
			27849: [1749],
			4299: [1724, 1776],
			4301: [1773, 1782],
			30926: [1718, 1721],
			4302: [1776],
			4303: [1760],
			4304: [1718, 1719, 1721, 1823],
			25809: [1720],
			4305: [1760],
			4306: [1710, 1744, 1758, 1761, 1849],
			4307: [1761, 1849, 1914],
			4308: [1784],
			4309: [1784],
			25814: [1720],
			4310: [1784],
			4311: [1784],
			4312: [1784],
			25817: [1720],
			4313: [1784],
			4314: [1784],
			4315: [1784],
			4316: [1775],
			4317: [1734, 1775],
			4318: [1760],
			4321: [1749, 1751, 1755, 1756, 1767, 1853, 7601],
			4323: [1761, 1849],
			4324: [1758, 1761],
			4326: [1761, 1849],
			4327: [1710, 1744, 1758, 1761, 1849],
			4329: [1761, 1849],
			4331: [1744, 1774],
			4332: [1744],
			4334: [1744],
			4335: [1744],
			4336: [1744],
			4337: [1744],
			4338: [1744, 1774],
			4341: [1758],
			4342: [1758],
			4343: [1758],
			4344: [1725],
			4346: [1725],
			4347: [1725],
			4348: [1725],
			4350: [1724, 1776],
			4352: [1723, 1776],
			4353: [1723, 1776],
			30977: [1782, 4871],
			4354: [1723, 1776],
			4355: [1722],
			4356: [1723, 1776],
			3334: [1722],
			4358: [1734, 1776, 1783],
			3335: [1725],
			4359: [1824],
			3336: [1717, 1718],
			21770: [1512],
			4362: [1784, 1848],
			4363: [1784, 1848],
			4364: [1784, 1848],
			4365: [1784, 1848],
			4366: [1720],
			4368: [1848],
			4369: [1848],
			4370: [1848],
			4371: [1848],
			4372: [1848],
			4375: [1783, 1848],
			4376: [1783, 1848],
			4377: [1824],
			4378: [1719],
			4379: [1783, 1848],
			4380: [1738, 1776, 1783, 1848],
			4381: [1776, 1783],
			4382: [1776, 1783],
			4383: [1738, 1783],
			25887: [1914],
			4385: [1734],
			4386: [1734],
			27939: [1725],
			4387: [1734],
			4388: [1734],
			4389: [1734, 1751],
			4390: [1734],
			4391: [1732, 1756],
			4394: [1848],
			4395: [1775],
			4396: [1759],
			4397: [1759],
			4398: [1838],
			4399: [1758, 1759],
			4400: [1725],
			4401: [1725],
			4403: [1725],
			4404: [1725],
			4405: [1725],
			4407: [1725],
			19768: [1824],
			4409: [1725],
			4410: [1725],
			4411: [1725],
			4412: [1725],
			4413: [1725],
			4414: [1723],
			4415: [1723, 1776],
			4416: [1723],
			4417: [1723],
			4419: [1723],
			4420: [1723],
			4421: [1723],
			4422: [1723],
			4423: [1723, 1776],
			4424: [1723, 1776],
			30024: [1773],
			4425: [1738],
			26954: [1725],
			4426: [1726, 1776],
			4427: [1726],
			4428: [1726],
			4429: [1912],
			4430: [1758],
			4435: [1722],
			4436: [1758],
			25940: [1912],
			4437: [1720, 1722],
			4438: [1722],
			4439: [1722],
			4440: [1722],
			4441: [1749],
			4442: [1722],
			25946: [1912],
			4445: [1722],
			4446: [1722],
			4447: [1722],
			4448: [1722],
			4450: [1824],
			4452: [1720, 1722],
			21861: [1512],
			4453: [1737, 1755],
			4454: [1720, 1722],
			4455: [1737, 1738, 1755],
			4456: [1720, 1722],
			4457: [1720, 1722],
			4458: [1728, 1731, 1732, 1733, 1734, 1735, 1751, 1755, 1756, 1762, 1782, 1837, 1838, 1915, 4871],
			4459: [1720],
			4460: [1720],
			4462: [1723, 1758, 1908, 1914],
			4463: [1720],
			4464: [1720],
			4465: [1720],
			4466: [1775],
			4467: [1720],
			4468: [1720],
			4469: [1720],
			4470: [1720],
			4471: [1720],
			4473: [1720],
			4474: [1720],
			4475: [1720],
			4478: [1824],
			4479: [1824],
			4480: [1744, 1758, 1761, 1849],
			4481: [1744, 1758, 1761, 1849],
			4482: [1744, 1758, 1761, 1849],
			4483: [1744, 1761, 1849],
			4484: [1744, 1761, 1849],
			4488: [1744, 1758],
			30088: [1824],
			4491: [1723, 1908],
			4492: [1759],
			4493: [1749],
			4495: [1824],
			4496: [1720],
			32145: [1824],
			29073: [1848],
			4498: [1719, 1721, 1823, 1824],
			4499: [1717],
			4500: [1783, 1848],
			4503: [1717],
			4505: [1723, 1758, 1914],
			4506: [1719],
			4507: [1719],
			4509: [1719],
			4510: [1719],
			4512: [1719],
			4514: [1912],
			4515: [1912],
			4516: [1912],
			4517: [1912],
			4518: [1912],
			4519: [1758, 1914],
			4520: [1717],
			4521: [1774],
			4522: [1719],
			4523: [1775],
			27052: [1728],
			4524: [1731],
			4525: [1725],
			4526: [1723, 1908, 1914],
			4527: [1717, 1718, 1721],
			4528: [1749],
			4529: [1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1725, 1728, 1731, 1732, 1733, 1737, 1740, 1744,
				1745, 1749, 1755, 1758, 1760, 1761, 1773, 1774, 1775, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853,
				1908, 1912, 1914, 1915, 4871, 5838
			],
			4531: [5838],
			4532: [1706, 1724, 1912],
			4533: [1734],
			4534: [1760],
			4535: [1760],
			4536: [1749],
			4537: [1720, 1722],
			4539: [1512, 1731],
			4540: [1749],
			4541: [1744, 1783, 1848],
			4542: [1849],
			4544: [1758],
			12737: [1725],
			4545: [1744, 1761, 1774, 1849],
			4546: [1824],
			4547: [1725],
			4548: [1725],
			4549: [1726],
			4550: [1744, 1761, 1774, 1849],
			4551: [1722],
			4552: [1722],
			4558: [1734, 1776, 1782, 1783],
			4562: [1774],
			1500: [1706, 1727, 1738, 1759, 1768, 1776],
			1501: [1512, 1731, 1733, 1755, 1837, 1838],
			4573: [1719],
			1502: [1706],
			4574: [1733, 1755, 1838],
			1503: [1728, 1732, 1837, 1915, 4871],
			1504: [1717, 1718, 1721, 1823, 5838],
			4576: [1706],
			1505: [1728, 1732, 1837, 1915, 4871],
			1506: [1728, 1731, 1732, 1733, 1735, 1755, 1782, 1837, 1838, 1915, 4871],
			4578: [1756],
			4579: [1725],
			1507: [1733, 1755, 1837, 1838],
			1508: [1706, 1726, 1727, 1738, 1759, 1912],
			4581: [1723, 1776],
			1509: [1734, 1737, 1740, 1744, 1773, 1774, 1783, 1784, 1848, 1849],
			4582: [1706],
			1510: [1767, 1853],
			1511: [1706, 1710, 1723, 1908],
			1512: [1721, 1823, 1824],
			4584: [1749],
			1513: [1735, 1756, 1762, 1767, 1853],
			4585: [1782],
			1514: [1734, 1737, 1740, 1751, 1760, 1774, 1775, 1783, 1848, 1849],
			4587: [1720, 1722],
			1515: [1706, 1759],
			4588: [1718, 1721],
			1516: [1740, 1774, 1848, 1849],
			1517: [1756, 1767, 1853, 7601],
			1518: [1745, 1853],
			4591: [1717],
			1519: [1783, 1848],
			4592: [1733, 1837, 1838],
			1520: [1706, 1710, 1723, 1908],
			4593: [1731],
			1521: [1719, 1721, 1823, 1824, 5838],
			1522: [1740, 1783, 1848],
			1523: [1738, 1761, 1776, 1849, 1914],
			4596: [1717],
			1524: [1744, 1759, 1761, 1849],
			1525: [1706],
			1526: [1719, 1721, 1823, 1824, 5838],
			1527: [1745, 1749, 1755, 1756, 1767, 1853],
			4599: [1749],
			1528: [1740, 1774, 1783, 1848, 1849],
			1529: [1706, 1710, 1723, 1908],
			1530: [1737, 1740, 1774, 1783, 1848, 1849],
			1531: [1734, 1738, 1776, 1783, 1848],
			1532: [1706, 1710, 1723, 1908],
			1533: [1737, 1740, 1774, 1783, 1848, 1849],
			4605: [1751, 1755],
			27134: [1720],
			1534: [1745, 1853],
			1535: [1745, 1853],
			1536: [1721, 1823, 1824],
			1537: [1740, 1848, 1849],
			1538: [1740, 1774, 1848, 1849],
			1539: [1745, 1767, 1853],
			1540: [1717, 1718, 1719, 1721, 1823, 1824, 5838],
			1541: [1723, 1758, 1908],
			1542: [1717, 1718, 1719, 1721, 1823, 1824, 5838],
			1543: [1723, 1908, 1914],
			1544: [1723, 1908, 1914],
			1545: [1721, 1823, 1824],
			1546: [1745, 1853],
			1547: [1745, 1755, 1853],
			1548: [1783, 1848],
			1549: [1740, 1774, 1848, 1849],
			1550: [1744, 1761, 1849],
			1551: [1717, 1718, 1719, 1721, 1823, 5838],
			1553: [1717, 1718, 1719, 1721, 1823, 5838],
			1554: [1706, 1710, 1723, 1724, 1726, 1768, 1908, 1912, 1914],
			1555: [1723, 1727, 1738, 1758, 1759, 1776, 1908, 1914],
			1556: [1745, 1767, 1853],
			1557: [1706, 1759],
			1558: [1717, 1718, 1721, 1823, 5838],
			1559: [1734, 1738, 1776, 1783, 1848],
			1560: [1706, 1710, 1723, 1908],
			1561: [1735, 1756, 1762, 1767, 1853],
			1562: [1721, 1823, 1824],
			1563: [1717, 1718, 1719, 1721, 1823, 1824, 5838],
			1564: [1721, 1823, 1824],
			1565: [1706],
			1566: [1706, 1710, 1723, 1908],
			1567: [1706, 1724, 1727, 1738, 1759, 1768, 1912],
			1568: [1717, 1718, 1719, 1721, 1823, 1824, 5838],
			1569: [1735, 1749, 1756, 1762, 1767, 1853],
			1570: [1767, 1853, 7601],
			1571: [1706, 1738, 1759, 1768, 1776],
			1572: [1737, 1740, 1760, 1783, 1848, 1849],
			1573: [1721, 1823, 1824],
			26150: [1512],
			1574: [1706, 1710, 1723, 1908],
			1575: [1767, 1853],
			31273: [1722],
			1589: [1728, 1837],
			1590: [1734, 1751, 1782, 4871],
			1591: [4871],
			1592: [1775, 1782, 4871],
			1594: [4871],
			1595: [1755],
			33340: [1731],
			1596: [1745, 1853],
			1597: [1740, 1849],
			30270: [1717, 1721],
			1598: [1745, 1853],
			1599: [1745, 1853],
			1601: [1728, 1837, 4871],
			1604: [1755],
			30279: [1721],
			28234: [1733, 1738],
			1611: [1755, 1838],
			1613: [1755, 1838],
			21122: [1512],
			33415: [1731],
			33416: [1731],
			33417: [1731],
			13970: [1725],
			30398: [1774],
			26317: [1512],
			22229: [1758],
			22236: [1758],
			25320: [1837, 1838],
			25323: [1837, 1838],
			17143: [1734, 1782],
			27402: [1744, 1761],
			32527: [1720],
			29462: [1706],
			27433: [1740],
			14132: [1749],
			27458: [1710],
			23376: [1512],
			29542: [1720],
			29567: [1720],
			14238: [1710],
			4002: [1749],
			4003: [1749],
			4004: [1749],
			4005: [1749],
			4006: [1749],
			4007: [1749],
			4008: [1749],
			4009: [1749],
			4010: [1749],
			4011: [1749],
			4014: [1749],
			4015: [1749],
			4016: [1749],
			4017: [1734, 1751, 1755],
			4018: [1749, 1751, 1755],
			4019: [1749],
			28596: [1724, 1776],
			4020: [1749],
			4021: [1749],
			4022: [1749],
			4026: [1749],
			4027: [1749],
			4028: [1749],
			4029: [1749],
			4030: [1749],
			4032: [1749],
			4033: [1749],
			4034: [1749],
			4035: [1755],
			4038: [1733, 1782],
			4039: [1737, 1773, 1782],
			4040: [1782],
			4042: [1782],
			4043: [1751, 1755],
			4044: [1773, 1782],
			4046: [1751, 1755],
			4047: [1737, 1773, 1782],
			4048: [1751, 1755],
			4049: [1755],
			4051: [1723],
			4052: [1719, 1721, 1823],
			29654: [1731, 1733, 1755, 1838],
			4055: [1735, 1762],
			4057: [1768],
			4058: [1768],
			4059: [1768],
			4060: [1768],
			4061: [1768],
			4062: [1768],
			4063: [1783, 1848],
			17376: [1735, 1762],
			4065: [1724],
			4066: [1740, 1774],
			4070: [1733, 1737, 1755, 1838],
			4071: [1734, 1737, 1744, 1751, 1759, 1773, 1783, 1784, 1848, 1849],
			15335: [1853, 7601],
			4072: [1718, 1721],
			4074: [1718, 1719, 1721, 1823],
			4075: [1737, 1773],
			4076: [1737, 1773],
			4077: [1737],
			1007: [1728, 1745, 1837, 1853, 4871],
			4079: [1737, 1755, 1838],
			4080: [1737, 1755, 1838],
			4081: [1734],
			4082: [1737, 1755, 1838],
			4083: [1737],
			4084: [1737, 1755],
			4085: [1737, 1755],
			4086: [1737],
			4087: [1737, 1755],
			4088: [1737, 1738, 1755],
			4089: [1737, 1738, 1755],
			4090: [1737, 1738, 1755],
			4092: [1737, 1738, 1755],
			4093: [1784, 1848],
			1021: [1823, 1824],
			4094: [1737, 1755, 1838],
			4095: [1776, 1914]
		}
	}
	
	hotKeywords() {
		return ['Flinders Street','Southern Cross'];
	}
	
	setTabBar() {
		uni.setTabBarItem({
			iconPath: 'static/images/train-inactive.png',
			selectedIconPath: 'static/images/vline.png',
			index: 0,
			text: 'V/Line',
		})
	}
}
