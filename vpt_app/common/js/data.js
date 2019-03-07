function initRoutes() {
	let routes = {"routes":[{"route_type":0,"route_id":1,"route_name":"Alamein","route_number":"","route_gtfs_id":"2-ALM"},{"route_type":0,"route_id":2,"route_name":"Belgrave","route_number":"","route_gtfs_id":"2-BEL"},{"route_type":0,"route_id":3,"route_name":"Craigieburn","route_number":"","route_gtfs_id":"2-B31"},{"route_type":0,"route_id":4,"route_name":"Cranbourne","route_number":"","route_gtfs_id":"2-CRB"},{"route_type":0,"route_id":5,"route_name":"Mernda","route_number":"","route_gtfs_id":"2-MER"},{"route_type":0,"route_id":6,"route_name":"Frankston","route_number":"","route_gtfs_id":"2-FKN"},{"route_type":0,"route_id":7,"route_name":"Glen Waverley","route_number":"","route_gtfs_id":"2-GLW"},{"route_type":0,"route_id":8,"route_name":"Hurstbridge","route_number":"","route_gtfs_id":"2-HBG"},{"route_type":0,"route_id":9,"route_name":"Lilydale","route_number":"","route_gtfs_id":"2-LIL"},{"route_type":0,"route_id":11,"route_name":"Pakenham","route_number":"","route_gtfs_id":"2-PKM"},{"route_type":0,"route_id":12,"route_name":"Sandringham","route_number":"","route_gtfs_id":"2-SDM"},{"route_type":0,"route_id":13,"route_name":"Stony Point","route_number":"","route_gtfs_id":"2-SPT"},{"route_type":0,"route_id":14,"route_name":"Sunbury","route_number":"","route_gtfs_id":"2-SYM"},{"route_type":0,"route_id":15,"route_name":"Upfield","route_number":"","route_gtfs_id":"2-UFD"},{"route_type":0,"route_id":16,"route_name":"Werribee","route_number":"","route_gtfs_id":"2-WBE"},{"route_type":0,"route_id":17,"route_name":"Williamstown","route_number":"","route_gtfs_id":"2-WMN"},{"route_type":0,"route_id":1482,"route_name":"Showgrounds - Flemington Racecourse","route_number":"","route_gtfs_id":"2-ain"},{"route_type":1,"route_id":721,"route_name":"East Coburg - South Melbourne Beach","route_number":"1","route_gtfs_id":"3-001"},{"route_type":1,"route_id":722,"route_name":"Box Hill - Port Melbourne","route_number":"109","route_gtfs_id":"3-109"},{"route_type":1,"route_id":724,"route_name":"Melbourne University - Kew via St Kilda Beach","route_number":"16","route_gtfs_id":"3-016"},{"route_type":1,"route_id":725,"route_name":"North Coburg - Flinders Street Station & City","route_number":"19","route_gtfs_id":"3-019"},{"route_type":1,"route_id":761,"route_name":"Melbourne University - East Malvern","route_number":"3-3a","route_gtfs_id":"3-003"},{"route_type":1,"route_id":887,"route_name":"West Maribyrnong - Flinders Street Station & City","route_number":"57","route_gtfs_id":"3-057"},{"route_type":1,"route_id":897,"route_name":"Airport West - Flinders Street Station & City","route_number":"59","route_gtfs_id":"3-059"},{"route_type":1,"route_id":909,"route_name":"Melbourne University - East Brighton","route_number":"64","route_gtfs_id":"3-064"},{"route_type":1,"route_id":913,"route_name":"Melbourne University - Carnegie","route_number":"67","route_gtfs_id":"3-067"},{"route_type":1,"route_id":940,"route_name":"Waterfront City Docklands -  Wattle Park","route_number":"70","route_gtfs_id":"3-070"},{"route_type":1,"route_id":947,"route_name":"Melbourne University - Camberwell","route_number":"72","route_gtfs_id":"3-072"},{"route_type":1,"route_id":958,"route_name":"Etihad Stadium Docklands - Vermont South","route_number":"75","route_gtfs_id":"3-075"},{"route_type":1,"route_id":976,"route_name":"North Richmond - Balaclava via Prahran","route_number":"78","route_gtfs_id":"3-078"},{"route_type":1,"route_id":1002,"route_name":"Moonee Ponds - Footscray","route_number":"82","route_gtfs_id":"3-082"},{"route_type":1,"route_id":1041,"route_name":"East Brunswick - St Kilda Beach","route_number":"96","route_gtfs_id":"3-096"},{"route_type":1,"route_id":1083,"route_name":"Melbourne University - Malvern","route_number":"5","route_gtfs_id":"3-005"},{"route_type":1,"route_id":1112,"route_name":"City Circle (Free Tourist Tram)","route_number":"35","route_gtfs_id":"3-035"},{"route_type":1,"route_id":1880,"route_name":"St Vincents Plaza - Docklands via La Trobe St","route_number":"30","route_gtfs_id":"3-030"},{"route_type":1,"route_id":1881,"route_name":"Bundoora RMIT - Waterfront City Docklands","route_number":"86","route_gtfs_id":"3-086"},{"route_type":1,"route_id":2903,"route_name":"North Balwyn - Victoria Harbour Docklands","route_number":"48","route_gtfs_id":"3-048"},{"route_type":1,"route_id":3343,"route_name":"West Preston - Victoria Harbour Docklands","route_number":"11","route_gtfs_id":"3-011"},{"route_type":1,"route_id":8314,"route_name":"Victoria Gardens - St Kilda","route_number":"12","route_gtfs_id":"3-012"},{"route_type":1,"route_id":11529,"route_name":"West Coburg - Toorak","route_number":"58","route_gtfs_id":"3-058"},{"route_type":1,"route_id":11544,"route_name":"Moreland - Glen Iris","route_number":"6","route_gtfs_id":"3-006"},{"route_type":2,"route_id":786,"route_name":"Highpoint SC - Avondale Heights via Maribyrnong","route_number":"407","route_gtfs_id":"4-407"},{"route_type":2,"route_id":789,"route_name":"Sunshine Station - Footscray via Ballarat Road","route_number":"410","route_gtfs_id":"4-410"},{"route_type":2,"route_id":821,"route_name":"Essendon Station - Keilor Park via East Keilor","route_number":"465","route_gtfs_id":"4-465"},{"route_type":2,"route_id":822,"route_name":"Aberfeldie - Moonee Ponds via Holmes Road","route_number":"467","route_gtfs_id":"4-467"},{"route_type":2,"route_id":823,"route_name":"Essendon - Highpoint SC via Maribyrnong","route_number":"468","route_gtfs_id":"4-468"},{"route_type":2,"route_id":825,"route_name":"Williamstown - Sunshine Station via Newport & Altona Gate SC","route_number":"471","route_gtfs_id":"4-471"},{"route_type":2,"route_id":834,"route_name":"Sunbury - Moonee Ponds via Diggers Rest","route_number":"483","route_gtfs_id":"4-483"},{"route_type":2,"route_id":841,"route_name":"Moonee Ponds - Niddrie via Strathmore","route_number":"501","route_gtfs_id":"4-501"},{"route_type":2,"route_id":844,"route_name":"Moonee Ponds - Westgarth Station via Brunswick","route_number":"506","route_gtfs_id":"4-506"},{"route_type":2,"route_id":845,"route_name":"Alphington - Moonee Ponds via Northcote & Brunswick","route_number":"508","route_gtfs_id":"4-508"},{"route_type":2,"route_id":847,"route_name":"Essendon - Ivanhoe via Brunswick & Northcote & Thornbury","route_number":"510","route_gtfs_id":"4-510"},{"route_type":2,"route_id":848,"route_name":"Strathmore - East Coburg via Pascoe Vale South & Coburg West & Coburg","route_number":"512","route_gtfs_id":"4-512"},{"route_type":2,"route_id":850,"route_name":"Northland - St Helena via Viewbank & Greensborough","route_number":"517","route_gtfs_id":"4-517"},{"route_type":2,"route_id":851,"route_name":"Greensborough - St Helena West via St Helena","route_number":"518","route_gtfs_id":"4-518"},{"route_type":2,"route_id":854,"route_name":"Coburg - Reservoir via Elizabeth Street","route_number":"526","route_gtfs_id":"4-526"},{"route_type":2,"route_id":855,"route_name":"Gowrie  - Northland via Murray Road","route_number":"527","route_gtfs_id":"4-527"},{"route_type":2,"route_id":860,"route_name":"Gowrie - Glenroy via Gowrie Park","route_number":"536","route_gtfs_id":"4-536"},{"route_type":2,"route_id":861,"route_name":"Somerset Estate - Broadmeadows via Camp Road","route_number":"538","route_gtfs_id":"4-538"},{"route_type":2,"route_id":862,"route_name":"Upfield - Broadmeadows via Coolaroo","route_number":"540","route_gtfs_id":"4-540"},{"route_type":2,"route_id":867,"route_name":"Ivanhoe - Northland via Oriel Road","route_number":"549","route_gtfs_id":"4-549"},{"route_type":2,"route_id":869,"route_name":"Northland - La Trobe University via Waterdale Road","route_number":"550","route_gtfs_id":"4-550"},{"route_type":2,"route_id":870,"route_name":"Heidelberg - La Trobe University Interchange","route_number":"551","route_gtfs_id":"4-551"},{"route_type":2,"route_id":884,"route_name":"Lalor - Northland via Plenty Road & Childs Road & Grimshaw Street","route_number":"566","route_gtfs_id":"4-566"},{"route_type":2,"route_id":927,"route_name":"Lilydale - Healesville via Lilydale Station & Coldstream & Yarra Glen","route_number":"685","route_gtfs_id":"4-685"},{"route_type":2,"route_id":928,"route_name":"Healesville - Badger Creek","route_number":"686","route_gtfs_id":"4-686"},{"route_type":2,"route_id":929,"route_name":"Chum Creek - Healesville","route_number":"687","route_gtfs_id":"4-687"},{"route_type":2,"route_id":931,"route_name":"Croydon - Montrose via Hawthory Road & Durham Road","route_number":"689","route_gtfs_id":"4-689"},{"route_type":2,"route_id":932,"route_name":"Croydon - Boronia via Kilsyth & Canterbury Gardens & Kilsyth South","route_number":"690","route_gtfs_id":"4-690"},{"route_type":2,"route_id":935,"route_name":"Olinda - Belgrave via Sherbrooke Road","route_number":"694","route_gtfs_id":"4-694"},{"route_type":2,"route_id":937,"route_name":"Belgrave -  Belgrave South via Belgrave Heights","route_number":"697","route_gtfs_id":"4-697"},{"route_type":2,"route_id":939,"route_name":"Belgrave - Upwey","route_number":"699","route_gtfs_id":"4-699"},{"route_type":2,"route_id":945,"route_name":"Mordialloc - Springvale via Braeside & Clayton South","route_number":"705","route_gtfs_id":"4-7X5"},{"route_type":2,"route_id":946,"route_name":"Carrum - Hampton via Southland","route_number":"708","route_gtfs_id":"4-708"},{"route_type":2,"route_id":948,"route_name":"Box Hill - Upper Ferntree Gully via Vermont South & Knox City & Mountain Gate","route_number":"732","route_gtfs_id":"4-732"},{"route_type":2,"route_id":950,"route_name":"Glen Iris - Glen Waverley","route_number":"734","route_gtfs_id":"4-734"},{"route_type":2,"route_id":952,"route_name":"Mitcham - Blackburn via Vermont South & Glen Waverley & Forest Hill","route_number":"736","route_gtfs_id":"4-736"},{"route_type":2,"route_id":953,"route_name":"Croydon - Monash University via Boronia & Knox City Shopping Centre & Glen Waverley","route_number":"737","route_gtfs_id":"4-737"},{"route_type":2,"route_id":954,"route_name":"Mitcham - Knox City via Knox Private Hospital & Wantirna Secondary College","route_number":"738","route_gtfs_id":"4-738"},{"route_type":2,"route_id":955,"route_name":"Mitcham - Vermont East via Reserve Avenue & Churinga Avenue","route_number":"740","route_gtfs_id":"4-740"},{"route_type":2,"route_id":957,"route_name":"Knox City - Bayswater -  Wantirna Primary School","route_number":"745","route_gtfs_id":"4-745"},{"route_type":2,"route_id":959,"route_name":"Glen Waverley - Bayswater via Wheelers Hill & Knoxfield & Boronia","route_number":"753","route_gtfs_id":"4-753"},{"route_type":2,"route_id":960,"route_name":"Rowville - Glen Waverley via Caulfield Grammar & Wheelers Hill","route_number":"754","route_gtfs_id":"4-754"},{"route_type":2,"route_id":961,"route_name":"Bayswater - Knox City via Basin & Boronia & Ferntree Gully","route_number":"755","route_gtfs_id":"4-755"},{"route_type":2,"route_id":962,"route_name":"Knox City - Scoresby via Old Orchards Drive","route_number":"757","route_gtfs_id":"4-757"},{"route_type":2,"route_id":963,"route_name":"Knox City - Knoxfield via Wallace Road","route_number":"758","route_gtfs_id":"4-758"},{"route_type":2,"route_id":964,"route_name":"Mitcham - Box Hill via Brentford Square & Forest Hill & Blackburn","route_number":"765","route_gtfs_id":"4-765"},{"route_type":2,"route_id":970,"route_name":"Frankston - Eliza Heights","route_number":"772","route_gtfs_id":"4-772"},{"route_type":2,"route_id":971,"route_name":"Frankston - Frankston South via Kars Street","route_number":"773","route_gtfs_id":"4-773"},{"route_type":2,"route_id":972,"route_name":"Frankston - Delacombe Park","route_number":"774","route_gtfs_id":"4-774"},{"route_type":2,"route_id":973,"route_name":"Frankston - Lakewood via Heatherhill Road","route_number":"775","route_gtfs_id":"4-775"},{"route_type":2,"route_id":974,"route_name":"Frankston - Pearcedale via Baxter","route_number":"776","route_gtfs_id":"4-776"},{"route_type":2,"route_id":975,"route_name":"Frankston - Belvedere via Kananook","route_number":"779","route_gtfs_id":"4-779"},{"route_type":2,"route_id":977,"route_name":"Frankston - Carrum via Seaford","route_number":"780","route_gtfs_id":"4-780"},{"route_type":2,"route_id":979,"route_name":"Frankston - Flinders via Coolart Road & Hastings","route_number":"782","route_gtfs_id":"4-782"},{"route_type":2,"route_id":980,"route_name":"Frankston - Hastings via Coolart Road","route_number":"783","route_gtfs_id":"4-783"},{"route_type":2,"route_id":982,"route_name":"Frankston - Portsea via Dromana & Rosebud & Sorrento","route_number":"788","route_gtfs_id":"4-788"},{"route_type":2,"route_id":999,"route_name":"Dandenong - Waverley Gardens SC","route_number":"813","route_gtfs_id":"4-813"},{"route_type":2,"route_id":1000,"route_name":"Springvale South - Dandenong via Waverley Gardens Shopping Centre & Springvale","route_number":"814","route_gtfs_id":"4-814"},{"route_type":2,"route_id":1007,"route_name":"Moorabbin - Southland via Black Rock & Mentone","route_number":"825","route_gtfs_id":"4-825"},{"route_type":2,"route_id":1013,"route_name":"Frankston - Carrum Downs via Kananook & McCormicks Road","route_number":"832","route_gtfs_id":"4-832"},{"route_type":2,"route_id":1015,"route_name":"Emerald - Fountain Gate SC via Beaconsfield & Berwick","route_number":"838","route_gtfs_id":"4-838"},{"route_type":2,"route_id":1019,"route_name":"Fountain Gate SC - Endeavour Hills SC via Narre Warren North","route_number":"842","route_gtfs_id":"4-842"},{"route_type":2,"route_id":1023,"route_name":"Dandenong - Brandon Park Shopping Centre via Waverley Gardens Shopping Centre","route_number":"848","route_gtfs_id":"4-848"},{"route_type":2,"route_id":1026,"route_name":"Chelsea - Dandenong via Patterson Lakes","route_number":"857","route_gtfs_id":"4-857"},{"route_type":2,"route_id":1030,"route_name":"Glen Waverley - Springvale via Wanda Street","route_number":"885","route_gtfs_id":"4-885"},{"route_type":2,"route_id":1123,"route_name":"Melbourne Airport - Melbourne City","route_number":"","route_gtfs_id":"11-SKY"},{"route_type":2,"route_id":1143,"route_name":"Frankston - Mornington East via Mt Eliza & Mornington","route_number":"785","route_gtfs_id":"4-785"},{"route_type":2,"route_id":1150,"route_name":"Karingal Hub Shopping Centre - McClelland Drive","route_number":"777","route_gtfs_id":"4-777"},{"route_type":2,"route_id":1173,"route_name":"Knox City - Bayswater","route_number":"745a","route_gtfs_id":"4-45a"},{"route_type":2,"route_id":1174,"route_name":"Bayswater - Boronia Station","route_number":"745b","route_gtfs_id":"4-45b"},{"route_type":2,"route_id":1175,"route_name":"Bayswater - Wantirna Primary School","route_number":"745c","route_gtfs_id":"4-45c"},{"route_type":2,"route_id":1176,"route_name":"Bayswater - Wantirna Primary School via Mountain Highway","route_number":"745d","route_gtfs_id":"4-45d"},{"route_type":2,"route_id":1294,"route_name":"Wodonga - Albury","route_number":"AW","route_gtfs_id":"6-866"},{"route_type":2,"route_id":1295,"route_name":"Wodonga - Murray Valley Private Hospital","route_number":"F","route_gtfs_id":"6-867"},{"route_type":2,"route_id":1296,"route_name":"Wodonga - Gayview Drive","route_number":"G","route_gtfs_id":"6-868"},{"route_type":2,"route_id":1297,"route_name":"Wodonga - Wodonga TAFE","route_number":"T","route_gtfs_id":"6-869"},{"route_type":2,"route_id":1300,"route_name":"Wodonga - West Wodonga","route_number":"O","route_gtfs_id":"6-872"},{"route_type":2,"route_id":1301,"route_name":"Wodonga - Cambourne Park","route_number":"C","route_gtfs_id":"6-873"},{"route_type":2,"route_id":1302,"route_name":"Wodonga Shopper","route_number":"WS","route_gtfs_id":"6-874"},{"route_type":2,"route_id":1303,"route_name":"Wodonga - Baranduda","route_number":"B","route_gtfs_id":"6-875"},{"route_type":2,"route_id":1304,"route_name":"Wodonga (South) - Albury","route_number":"150","route_gtfs_id":"6-876"},{"route_type":2,"route_id":1305,"route_name":"Wodonga (North) - Albury","route_number":"160","route_gtfs_id":"6-877"},{"route_type":2,"route_id":1306,"route_name":"Albury - West Albury","route_number":"WA","route_gtfs_id":"6-878"},{"route_type":2,"route_id":1307,"route_name":"Albury - East Albury","route_number":"EA","route_gtfs_id":"6-879"},{"route_type":2,"route_id":1308,"route_name":"Albury - South Albury","route_number":"SA","route_gtfs_id":"6-880"},{"route_type":2,"route_id":1309,"route_name":"Albury - Beechworth via Baranduda","route_number":"","route_gtfs_id":"6-a31"},{"route_type":2,"route_id":1310,"route_name":"Albury - Corowa via Howlong","route_number":"","route_gtfs_id":"6-984"},{"route_type":2,"route_id":1311,"route_name":"Mildura - Merbein via Seventeenth Street","route_number":"250-300","route_gtfs_id":"6-920"},{"route_type":2,"route_id":1312,"route_name":"Mildura - Irymple - Red Cliffs","route_number":"100-200","route_gtfs_id":"6-921"},{"route_type":2,"route_id":1314,"route_name":"Mildura - West Mildura - Mildura Central Shopping Centre","route_number":"500","route_gtfs_id":"6-M50"},{"route_type":2,"route_id":1318,"route_name":"Swan Hill - Swan Hill North","route_number":"1","route_gtfs_id":"6-a42"},{"route_type":2,"route_id":1319,"route_name":"Swan Hill - Swan Hill South","route_number":"2","route_gtfs_id":"6-a43"},{"route_type":2,"route_id":1320,"route_name":"Swan Hill South - Schools","route_number":"","route_gtfs_id":"6-946"},{"route_type":2,"route_id":1322,"route_name":"Swan Hill - Tooleybuc via Nyah West","route_number":"","route_gtfs_id":"6-a28"},{"route_type":2,"route_id":1341,"route_name":"Mooroopna - Rodney Park","route_number":"2","route_gtfs_id":"6-904"},{"route_type":2,"route_id":1342,"route_name":"Mooroopna Park","route_number":"3","route_gtfs_id":"6-a39"},{"route_type":2,"route_id":1344,"route_name":"Echuca - Echuca South","route_number":"1","route_gtfs_id":"6-a36"},{"route_type":2,"route_id":1345,"route_name":"Echuca - Echuca East","route_number":"2 - Circular","route_gtfs_id":"6-a37"},{"route_type":2,"route_id":1346,"route_name":"Echuca - Moama","route_number":"3 - Circular","route_gtfs_id":"6-a38"},{"route_type":2,"route_id":1350,"route_name":"Shepparton - Mooroopna","route_number":"1","route_gtfs_id":"6-a40"},{"route_type":2,"route_id":1355,"route_name":"Portland - North","route_number":"1","route_gtfs_id":"6-PT1"},{"route_type":2,"route_id":1357,"route_name":"Portland to Hamilton via Heywood","route_number":"","route_gtfs_id":"6-a25"},{"route_type":2,"route_id":1365,"route_name":"Colac - Alvie via Warrion","route_number":"","route_gtfs_id":"6-a50"},{"route_type":2,"route_id":1373,"route_name":"Stawell - Patrick St","route_number":"2","route_gtfs_id":"6-S02"},{"route_type":2,"route_id":1374,"route_name":"Stawell - Ligar St","route_number":"1","route_gtfs_id":"6-S01"},{"route_type":2,"route_id":1375,"route_name":"Stawell - Stawell West","route_number":"3","route_gtfs_id":"6-S03"},{"route_type":2,"route_id":1379,"route_name":"Ballarat - Maryborough via Clunes","route_number":"","route_gtfs_id":"6-a27"},{"route_type":2,"route_id":1396,"route_name":"Wangaratta -Yarrawonga","route_number":"","route_gtfs_id":"6-960"},{"route_type":2,"route_id":1399,"route_name":"Wangaratta - Glenrowan","route_number":"","route_gtfs_id":"6-962"},{"route_type":2,"route_id":1400,"route_name":"Wangaratta - Springhurst","route_number":"","route_gtfs_id":"6-a46"},{"route_type":2,"route_id":1439,"route_name":"Bairnsdale - West Bairnsdale","route_number":"1","route_gtfs_id":"6-073"},{"route_type":2,"route_id":1440,"route_name":"Bairnsdale - Omeo","route_number":"14","route_gtfs_id":"6-014"},{"route_type":2,"route_id":1441,"route_name":"Bairnsdale - Paynesville","route_number":"13","route_gtfs_id":"6-013"},{"route_type":2,"route_id":1443,"route_name":"Bairnsdale - East Bairnsdale","route_number":"2","route_gtfs_id":"6-a32"},{"route_type":2,"route_id":1444,"route_name":"Bairnsdale - Wy Yung","route_number":"3","route_gtfs_id":"6-a33"},{"route_type":2,"route_id":1446,"route_name":"Wonthaggi - Wonthaggi North - Wonthaggi","route_number":"","route_gtfs_id":"6-a48"},{"route_type":2,"route_id":1447,"route_name":"Wonthaggi - South Wonthaggi - Wonthaggi","route_number":"","route_gtfs_id":"6-a49"},{"route_type":2,"route_id":1448,"route_name":"Wonthaggi Town Service (Cape Paterson)","route_number":"","route_gtfs_id":"6-976"},{"route_type":2,"route_id":1449,"route_name":"Coronet Bay - Wonthaggi via Corinella","route_number":"","route_gtfs_id":"6-977"},{"route_type":2,"route_id":1450,"route_name":"Cowes - Anderson - Wonthaggi","route_number":"","route_gtfs_id":"6-a47"},{"route_type":2,"route_id":1452,"route_name":"Korumburra Town Service - Carinya Lodge","route_number":"","route_gtfs_id":"6-935"},{"route_type":2,"route_id":1461,"route_name":"Wonthaggi - Leongatha via Inverloch","route_number":"","route_gtfs_id":"6-973"},{"route_type":2,"route_id":1464,"route_name":"Cowes - Fountain Gate via Anderson","route_number":"","route_gtfs_id":"6-a34"},{"route_type":2,"route_id":1469,"route_name":"Sale - Loch Sport via Longford","route_number":"","route_gtfs_id":"6-a30"},{"route_type":2,"route_id":1470,"route_name":"Sale - Stratford","route_number":"","route_gtfs_id":"6-947"},{"route_type":2,"route_id":1474,"route_name":"Wangaratta - Chiltern via Rutherglen","route_number":"","route_gtfs_id":"6-959"},{"route_type":2,"route_id":1475,"route_name":"Wangaratta - Springhurst - Corowa","route_number":"","route_gtfs_id":"6-a45"},{"route_type":2,"route_id":1493,"route_name":"Ballarat - Bendigo via Maryborough and Castlemaine","route_number":"","route_gtfs_id":"6-a29"},{"route_type":2,"route_id":1494,"route_name":"Yarram - Traralgon via Gormandale","route_number":"","route_gtfs_id":"6-855"},{"route_type":2,"route_id":1495,"route_name":"Bairnsdale - Gelantipy","route_number":"12","route_gtfs_id":"6-a18"},{"route_type":2,"route_id":1506,"route_name":"Albury - Wodonga - Myrtleford","route_number":"","route_gtfs_id":"6-a44"},{"route_type":2,"route_id":1510,"route_name":"Ballan - Hepburn via Daylesford","route_number":"","route_gtfs_id":"6-997"},{"route_type":2,"route_id":1511,"route_name":"Ballan - Mount Egerton via Gordon","route_number":"","route_gtfs_id":"6-996"},{"route_type":2,"route_id":1515,"route_name":"Warrnambool - Mortlake","route_number":"","route_gtfs_id":"6-994"},{"route_type":2,"route_id":1524,"route_name":"Hamilton West via Coleraine Road","route_number":"1","route_gtfs_id":"6-992"},{"route_type":2,"route_id":1532,"route_name":"Horsham - Donald via Murtoa and Minyip","route_number":"","route_gtfs_id":"6-R11"},{"route_type":2,"route_id":1533,"route_name":"Swan Hill - Sea Lake via Ultima","route_number":"","route_gtfs_id":"6-R12"},{"route_type":2,"route_id":1538,"route_name":"Horsham - Birchip via Warracknabeal","route_number":"","route_gtfs_id":"6-R13"},{"route_type":2,"route_id":1539,"route_name":"Horsham - Hopetoun via Dimboola","route_number":"","route_gtfs_id":"6-R14"},{"route_type":2,"route_id":1545,"route_name":"Mildura - Horsham via Hopetoun","route_number":"","route_gtfs_id":"6-MLH"},{"route_type":2,"route_id":1551,"route_name":"Ballarat - Maryborough via Avoca","route_number":"","route_gtfs_id":"6-a26"},{"route_type":2,"route_id":1571,"route_name":"Mildura - Merbein via Eleventh Street","route_number":"211-311-312","route_gtfs_id":"6-20b"},{"route_type":2,"route_id":1574,"route_name":"Mildura - Euston - Robinvale","route_number":"","route_gtfs_id":"6-R21"},{"route_type":2,"route_id":1575,"route_name":"Ballarat - Stawell via Ararat","route_number":"","route_gtfs_id":"6-R22"},{"route_type":2,"route_id":1577,"route_name":"Kilmore Town Service","route_number":"","route_gtfs_id":"6-KM1"},{"route_type":2,"route_id":1579,"route_name":"Horsham - Roberts Avenue","route_number":"7","route_gtfs_id":"6-b25"},{"route_type":2,"route_id":1586,"route_name":"Kyneton - Taradale - Castlemaine - Bendigo","route_number":"","route_gtfs_id":"6-R29"},{"route_type":2,"route_id":1587,"route_name":"Castlemaine - Taradale via Chewton","route_number":"5","route_gtfs_id":"6-R30"},{"route_type":2,"route_id":1595,"route_name":"Wangaratta - Cheshunt via Edi","route_number":"","route_gtfs_id":"6-R53"},{"route_type":2,"route_id":1596,"route_name":"Wonthaggi - Dudley - Wonthaggi","route_number":"","route_gtfs_id":"6-R54"},{"route_type":2,"route_id":1608,"route_name":"Castlemaine - Harcourt","route_number":"3","route_gtfs_id":"6-R36"},{"route_type":2,"route_id":1609,"route_name":"Castlemaine Town Loop","route_number":"2","route_gtfs_id":"6-R37"},{"route_type":2,"route_id":1610,"route_name":"Kyneton - Woodend","route_number":"","route_gtfs_id":"6-R95"},{"route_type":2,"route_id":1611,"route_name":"Castlemaine - Campbells Creek","route_number":"1","route_gtfs_id":"6-r89"},{"route_type":2,"route_id":1624,"route_name":"Daylesford - Hepburn Springs","route_number":"","route_gtfs_id":"6-89x"},{"route_type":2,"route_id":1632,"route_name":"Belgrave - Gembrook","route_number":"695","route_gtfs_id":"4-695"},{"route_type":2,"route_id":1658,"route_name":"Ararat West via Brewster Road & Lowe Road","route_number":"1","route_gtfs_id":"6-Ar1"},{"route_type":2,"route_id":1659,"route_name":"Ararat South via Burke Road & Churchill Avenue","route_number":"2","route_gtfs_id":"6-Ar2"},{"route_type":2,"route_id":1660,"route_name":"Ararat North via Baird Street & NMIT & Alfred Street","route_number":"3","route_gtfs_id":"6-Ar3"},{"route_type":2,"route_id":1664,"route_name":"Yarraville - Kingsville via Somerville Road","route_number":"431","route_gtfs_id":"4-431"},{"route_type":2,"route_id":1665,"route_name":"Newport - Yarraville via Altona Gate Shopping Centre","route_number":"432","route_gtfs_id":"4-432"},{"route_type":2,"route_id":1666,"route_name":"Williamstown - Moonee Ponds via Footscray","route_number":"472","route_gtfs_id":"4-472"},{"route_type":2,"route_id":1667,"route_name":"Airport West to Gowanbrae via Melrose Dr & Gowanbrae Dr","route_number":"490","route_gtfs_id":"4-490"},{"route_type":2,"route_id":1673,"route_name":"Glenroy to Coburg via Boundary Road & Sydney Road","route_number":"534","route_gtfs_id":"4-534"},{"route_type":2,"route_id":1878,"route_name":"Sale-South via MacArthur Street & Aquatic Centre & Sale Hospital","route_number":"1","route_gtfs_id":"6-589"},{"route_type":2,"route_id":1879,"route_name":"Sale-North via Guthridge Parade & MacArthur Street","route_number":"2","route_gtfs_id":"6-298"},{"route_type":2,"route_id":1909,"route_name":"Sale - Wurruk via Princes Highway","route_number":"3","route_gtfs_id":"6-209"},{"route_type":2,"route_id":1910,"route_name":"Sale - Sale Station via Reeve Street","route_number":"4","route_gtfs_id":"6-a19"},{"route_type":2,"route_id":1916,"route_name":"Horsham - Albert Street North","route_number":"1","route_gtfs_id":"6-HR1"},{"route_type":2,"route_id":1917,"route_name":"Horsham - Sunnyside","route_number":"2","route_gtfs_id":"6-HR2"},{"route_type":2,"route_id":1918,"route_name":"Horsham - Wawunna Road","route_number":"3","route_gtfs_id":"6-HR3"},{"route_type":2,"route_id":1921,"route_name":"Horsham - Haven","route_number":"6","route_gtfs_id":"6-HR6"},{"route_type":2,"route_id":1925,"route_name":"Ballarat - Station to Sovereign Hill (Goldrush service)","route_number":"","route_gtfs_id":"6-gld"},{"route_type":2,"route_id":1935,"route_name":"Eildon - Melbourne via Lilydale Station","route_number":"684","route_gtfs_id":"4-684"},{"route_type":2,"route_id":1947,"route_name":"Ballarat - Rokewood via Ross Creek","route_number":"","route_gtfs_id":"6-rok"},{"route_type":2,"route_id":1991,"route_name":"Omeo - Bright via Hotham Heights","route_number":"","route_gtfs_id":"6-ome"},{"route_type":2,"route_id":1995,"route_name":"Ararat - Lake Bolac via Willaura","route_number":"","route_gtfs_id":"6-alb"},{"route_type":2,"route_id":2055,"route_name":"Alexandra - Seymour via Yea","route_number":"","route_gtfs_id":"6-als"},{"route_type":2,"route_id":2079,"route_name":"Albury - Corryong via Walwa","route_number":"","route_gtfs_id":"6-a23"},{"route_type":2,"route_id":2089,"route_name":"Apollo Bay - Geelong (VLINE)","route_number":"","route_gtfs_id":"6-GVL"},{"route_type":2,"route_id":2097,"route_name":"Colac - Lorne","route_number":"","route_gtfs_id":"6-col"},{"route_type":2,"route_id":2126,"route_name":"Colac to  Colac West","route_number":"2","route_gtfs_id":"6-cc2"},{"route_type":2,"route_id":2285,"route_name":"Maryborough -Princes Park-Whirrakee","route_number":"2","route_gtfs_id":"6-MB2"},{"route_type":2,"route_id":2293,"route_name":"Maryborough - Pascoe","route_number":"3","route_gtfs_id":"6-MB3"},{"route_type":2,"route_id":2294,"route_name":"Maryborough - Maryborough Education Centre","route_number":"4","route_gtfs_id":"6-MB4"},{"route_type":2,"route_id":2295,"route_name":"Maryborough - Hedges","route_number":"1","route_gtfs_id":"6-MB1"},{"route_type":2,"route_id":2339,"route_name":"Horsham - Kaniva via Dimboola","route_number":"","route_gtfs_id":"6-86N"},{"route_type":2,"route_id":2342,"route_name":"Warneet - Cranbourne","route_number":"795","route_gtfs_id":"4-795"},{"route_type":2,"route_id":2349,"route_name":"Albury - Corowa via Rutherglen","route_number":"","route_gtfs_id":"6-alc"},{"route_type":2,"route_id":2505,"route_name":"Rosebud - Chisholm TAFE Rosebud Campus","route_number":"886","route_gtfs_id":"4-886"},{"route_type":2,"route_id":2768,"route_name":"Bendigo - Boort via Wedderburn","route_number":"","route_gtfs_id":"6-Bor"},{"route_type":2,"route_id":2808,"route_name":"Kananook - Carrum Downs via Lathams Rd","route_number":"778","route_gtfs_id":"4-778"},{"route_type":2,"route_id":2813,"route_name":"Frankston - Langwarrin via Karingal","route_number":"771","route_gtfs_id":"4-771"},{"route_type":2,"route_id":2895,"route_name":"Seymour - Seymour North","route_number":"2","route_gtfs_id":"6-SY2"},{"route_type":2,"route_id":2896,"route_name":"Seymour - Puckapunyal","route_number":"3","route_gtfs_id":"6-SY3"},{"route_type":2,"route_id":2897,"route_name":"Seymour - Wimble Street AM peak","route_number":"4","route_gtfs_id":"6-SY4"},{"route_type":2,"route_id":2913,"route_name":"Hawthorn to Fairfield via Kew","route_number":"609","route_gtfs_id":"4-609"},{"route_type":2,"route_id":2916,"route_name":"Gembrook - Fountain Gate","route_number":"695F","route_gtfs_id":"4-69F"},{"route_type":2,"route_id":2919,"route_name":"Shepparton - Parkside Gardens via GV Health","route_number":"1","route_gtfs_id":"6-Sh1"},{"route_type":2,"route_id":2922,"route_name":"Shepparton - Golf Drive-TAFE","route_number":"3","route_gtfs_id":"6-Sh3"},{"route_type":2,"route_id":2925,"route_name":"Shepparton - Connolly Park","route_number":"4","route_gtfs_id":"6-Sh4"},{"route_type":2,"route_id":2928,"route_name":"Shepparton - Archer","route_number":"5","route_gtfs_id":"6-Sh5"},{"route_type":2,"route_id":2931,"route_name":"Shepparton - South East","route_number":"6","route_gtfs_id":"6-Sh6"},{"route_type":2,"route_id":2934,"route_name":"Shepparton - Market Place","route_number":"7","route_gtfs_id":"6-Sh7"},{"route_type":2,"route_id":2937,"route_name":"Shepparton - Kialla","route_number":"8","route_gtfs_id":"6-Sh8"},{"route_type":2,"route_id":2943,"route_name":"Shepparton - Aquamoves","route_number":"9","route_gtfs_id":"6-Sh9"},{"route_type":2,"route_id":2982,"route_name":"Shepparton - Parkside Gardens via The Boulevard","route_number":"2","route_gtfs_id":"6-Sh2"},{"route_type":2,"route_id":3287,"route_name":"Coronet Bay - Grantville via Corinella","route_number":"","route_gtfs_id":"6-gvc"},{"route_type":2,"route_id":3321,"route_name":"St Arnaud - Stawell via Ararat","route_number":"","route_gtfs_id":"6-StA"},{"route_type":2,"route_id":3322,"route_name":"Ararat Station - Hopkins Correctional Centre","route_number":"","route_gtfs_id":"6-Apr"},{"route_type":2,"route_id":3324,"route_name":"Hepburn - Creswick via Daylesford","route_number":"","route_gtfs_id":"6-hep"},{"route_type":2,"route_id":3346,"route_name":"Wonthaggi - Traralgon via Leongatha","route_number":"","route_gtfs_id":"6-54n"},{"route_type":2,"route_id":3354,"route_name":"Koo Wee Rup - Pakenham","route_number":"","route_gtfs_id":"6-KWR"},{"route_type":2,"route_id":3365,"route_name":"Frankston - Karingal via Ashleigh Avenue","route_number":"770","route_gtfs_id":"4-770"},{"route_type":2,"route_id":3374,"route_name":"Wangaratta - West End","route_number":"401","route_gtfs_id":"6-a20"},{"route_type":2,"route_id":3377,"route_name":"Wangaratta - Yarrunga via Murdoch Road","route_number":"402","route_gtfs_id":"6-a21"},{"route_type":2,"route_id":3380,"route_name":"Wangaratta -Yarrawonga Road","route_number":"403","route_gtfs_id":"6-a22"},{"route_type":2,"route_id":3394,"route_name":"Warrnambool - Port Campbell - Timboon via Allansford & Nullawarre & Peterborough","route_number":"","route_gtfs_id":"6-WPC"},{"route_type":2,"route_id":3398,"route_name":"Mildura City - East Mildura - Mildura Central SC","route_number":"400","route_gtfs_id":"6-M40"},{"route_type":2,"route_id":3401,"route_name":"Mildura Central SC - West  Mildura - Mildura","route_number":"501","route_gtfs_id":"6-M51"},{"route_type":2,"route_id":3408,"route_name":"Mildura Central SC - East Mildura - Mildura","route_number":"401","route_gtfs_id":"6-M41"},{"route_type":2,"route_id":3411,"route_name":"Southland SC - St Kilda Station via Sandringham","route_number":"600-922-923 combined","route_gtfs_id":"4-C13"},{"route_type":2,"route_id":3420,"route_name":"Frankston - Coolart Rd - Hastings-Flinders","route_number":"782-783 combined","route_gtfs_id":"4-C21"},{"route_type":2,"route_id":3423,"route_name":"Eltham - Warrandyte via Research & Kangaroo Ground & Warrandyte Road","route_number":"578-579 combined","route_gtfs_id":"4-C12"},{"route_type":2,"route_id":3438,"route_name":"Frankston - Mt Eliza - Mornington East-Mt Martha","route_number":"781-784-785 combined","route_gtfs_id":"4-C15"},{"route_type":2,"route_id":3448,"route_name":"City - La Trobe University-Northland SC","route_number":"250-251 combined","route_gtfs_id":"4-C08"},{"route_type":2,"route_id":3453,"route_name":"Dandenong - Chadstone via Mulgrave & Oakleigh","route_number":"802-804-862 combined","route_gtfs_id":"4-C17"},{"route_type":2,"route_id":3483,"route_name":"Box Hill to Nunawading","route_number":"735","route_gtfs_id":"4-735"},{"route_type":2,"route_id":4543,"route_name":"Edithvale - Aspendale Gardens via Chelsea","route_number":"858","route_gtfs_id":"4-858"},{"route_type":2,"route_id":4663,"route_name":"Rye to St Andrews Beach","route_number":"786","route_gtfs_id":"4-786"},{"route_type":2,"route_id":4664,"route_name":"Gembrook - Pakenham via Pakenham Upper","route_number":"840","route_gtfs_id":"4-840"},{"route_type":2,"route_id":4711,"route_name":"Alexandra - Eildon via Thornton","route_number":"","route_gtfs_id":"6-Eil"},{"route_type":2,"route_id":4733,"route_name":"Kyneton - Kyneton Railway Station","route_number":"1","route_gtfs_id":"6-Kyl"},{"route_type":2,"route_id":4736,"route_name":"Kyneton - Kyneton South","route_number":"3","route_gtfs_id":"6-KN3"},{"route_type":2,"route_id":4745,"route_name":"Kynton Town Centre  to Kyneton West via Kyneton Station","route_number":"2","route_gtfs_id":"6-KY2"},{"route_type":2,"route_id":4747,"route_name":"Kyneton - Malmsbury","route_number":"","route_gtfs_id":"6-Kym"},{"route_type":2,"route_id":4748,"route_name":"Kurunjang - Melton Station","route_number":"458","route_gtfs_id":"4-458"},{"route_type":2,"route_id":4755,"route_name":"Craigieburn - Broadmeadows via Upfield Station","route_number":"532","route_gtfs_id":"4-532"},{"route_type":2,"route_id":4757,"route_name":"Melton - Melton Station via Brookfield","route_number":"453","route_gtfs_id":"4-453"},{"route_type":2,"route_id":4758,"route_name":"Micasa Rise-Roslyn Park - Melton Station","route_number":"455","route_gtfs_id":"4-455"},{"route_type":2,"route_id":4761,"route_name":"Melton - Melton Station via Melton West","route_number":"457","route_gtfs_id":"4-457"},{"route_type":2,"route_id":4769,"route_name":"Arnolds Creek to Melton Station via Westlake","route_number":"459","route_gtfs_id":"4-459"},{"route_type":2,"route_id":4780,"route_name":"Sunbury Railway Station - Mount Lion","route_number":"481","route_gtfs_id":"4-481"},{"route_type":2,"route_id":4786,"route_name":"Sunbury Railway Station - Wilsons Lane","route_number":"485","route_gtfs_id":"4-485"},{"route_type":2,"route_id":4789,"route_name":"Sunbury Railway Station - Rolling Meadows","route_number":"486","route_gtfs_id":"4-486"},{"route_type":2,"route_id":4792,"route_name":"Sunbury Railway Station - Killara Heights","route_number":"487","route_gtfs_id":"4-487"},{"route_type":2,"route_id":4795,"route_name":"Sunbury Railway Station - Jacksons Hill","route_number":"488","route_gtfs_id":"4-488"},{"route_type":2,"route_id":4798,"route_name":"Sunbury Railway Station - Canterbury Hills","route_number":"489","route_gtfs_id":"4-489"},{"route_type":2,"route_id":4802,"route_name":"Olinda - Monbulk via Olinda - Monbulk Road","route_number":"696","route_gtfs_id":"4-696"},{"route_type":2,"route_id":4805,"route_name":"Croydon - Upper Ferntree Gully via Olinda and Tremont","route_number":"688","route_gtfs_id":"4-688"},{"route_type":2,"route_id":4849,"route_name":"Hamilton - Penshurst via Tarrington","route_number":"","route_gtfs_id":"6-Hpt"},{"route_type":2,"route_id":4855,"route_name":"St Arnaud - Stawell via Marnoo","route_number":"","route_gtfs_id":"6-StS"},{"route_type":2,"route_id":4861,"route_name":"Ballarat - Snake Valley via Haddon","route_number":"","route_gtfs_id":"6-BSV"},{"route_type":2,"route_id":4864,"route_name":"Ararat - Maryborough via Elmhurst & Avoca","route_number":"","route_gtfs_id":"6-ArM"},{"route_type":2,"route_id":4896,"route_name":"Mansfield - Woods Point via Jamieson","route_number":"","route_gtfs_id":"6-Woo"},{"route_type":2,"route_id":5023,"route_name":"Horsham - Naracoorte via Natimuk & Goroke & Edenhope","route_number":"","route_gtfs_id":"6-Nar"},{"route_type":2,"route_id":5038,"route_name":"Albury - Tallangatta via Bonegilla","route_number":"","route_gtfs_id":"6-Tal"},{"route_type":2,"route_id":5041,"route_name":"Shepparton - Euroa via Kialla","route_number":"","route_gtfs_id":"6-Eur"},{"route_type":2,"route_id":5048,"route_name":"Geelong - Inverleigh via Fyansford","route_number":"","route_gtfs_id":"6-GIV"},{"route_type":2,"route_id":5051,"route_name":"Sea Lake - Woomelang","route_number":"","route_gtfs_id":"6-Swo"},{"route_type":2,"route_id":5052,"route_name":"Swan Hill - Wycheproof via Lalbert","route_number":"","route_gtfs_id":"6-Wyc"},{"route_type":2,"route_id":5055,"route_name":"Bendigo - Woomelang via Wedderburn & Charlton & Wycheproof & Birchip","route_number":"","route_gtfs_id":"6-BxW"},{"route_type":2,"route_id":5062,"route_name":"Sea Lake - Nullawil via Culgoa","route_number":"","route_gtfs_id":"6-Nul"},{"route_type":2,"route_id":5063,"route_name":"Ballarat - Avoca via Clunes and Maryborough","route_number":"","route_gtfs_id":"6-Avo"},{"route_type":2,"route_id":5069,"route_name":"Ballarat - Mt Egerton via Gordon","route_number":"","route_gtfs_id":"6-MtE"},{"route_type":2,"route_id":5105,"route_name":"Quambatook - Boort","route_number":"","route_gtfs_id":"6-Boo"},{"route_type":2,"route_id":5108,"route_name":"Quambatook - Kerang","route_number":"","route_gtfs_id":"6-Ker"},{"route_type":2,"route_id":5125,"route_name":"Albury - Mt Beauty via Baranduda and Tawonga South","route_number":"","route_gtfs_id":"6-MtB"},{"route_type":2,"route_id":5126,"route_name":"Maryborough - Maryborough via Daisy Hill and Talbot","route_number":"","route_gtfs_id":"6-Mta"},{"route_type":2,"route_id":5132,"route_name":"Maryborough - Maryborough via Bealiba and Dunolly","route_number":"","route_gtfs_id":"6-Mbe"},{"route_type":2,"route_id":5135,"route_name":"Maryborough - Carisbrook","route_number":"","route_gtfs_id":"6-a53"},{"route_type":2,"route_id":5331,"route_name":"Dandenong - Doveton via McCrae Street","route_number":"844","route_gtfs_id":"4-844"},{"route_type":2,"route_id":5332,"route_name":"Dandenong - Mossgiel Park via John Fawkner Drive","route_number":"845","route_gtfs_id":"4-845"},{"route_type":2,"route_id":5333,"route_name":"Dandenong - Mossgiel Park via Gleneagles Drive","route_number":"849","route_gtfs_id":"4-849"},{"route_type":2,"route_id":5334,"route_name":"Dandenong - Glen Waverley via Mulgrave & Brandon Park","route_number":"850","route_gtfs_id":"4-850"},{"route_type":2,"route_id":5335,"route_name":"Dandenong - Endeavour Hills via Thomas Mitchell Drive","route_number":"861","route_gtfs_id":"4-861"},{"route_type":2,"route_id":5368,"route_name":"Berwick Station - Beaconsfield East via Brisbane St & Beaconsfield Plaza SC","route_number":"837","route_gtfs_id":"4-837"},{"route_type":2,"route_id":5369,"route_name":"Berwick Station - Berwick North via Telford Dr & Whistler Dr","route_number":"839","route_gtfs_id":"4-839"},{"route_type":2,"route_id":5370,"route_name":"Amberly Park  - Hallam via Hampton Park","route_number":"894","route_gtfs_id":"4-894"},{"route_type":2,"route_id":5371,"route_name":"Narre Warren South - Fountain Gate SC via Narre Warren Station","route_number":"895","route_gtfs_id":"4-895"},{"route_type":2,"route_id":5375,"route_name":"Pakenham Station - Pakenham North via Meadowvale","route_number":"927","route_gtfs_id":"4-927"},{"route_type":2,"route_id":5377,"route_name":"Pakenham Station - Pakenham North via Army Rd & Windermere Bvd","route_number":"929","route_gtfs_id":"4-929"},{"route_type":2,"route_id":5378,"route_name":"Berwick Station - Eden Rise SC via Bridgewater Estate","route_number":"836","route_gtfs_id":"4-836"},{"route_type":2,"route_id":5379,"route_name":"Berwick Station - Kingsmere Estate via Casey Hospital","route_number":"831","route_gtfs_id":"4-831"},{"route_type":2,"route_id":5382,"route_name":"Pakenham Station - Lakeside via The Avenue","route_number":"925","route_gtfs_id":"4-925"},{"route_type":2,"route_id":5385,"route_name":"Berwick Station - Eden Rise SC via Bryn Mawr Bvd","route_number":"846","route_gtfs_id":"4-846"},{"route_type":2,"route_id":5415,"route_name":"Airport West SC - Melbourne Airport","route_number":"478-479 combined","route_gtfs_id":"4-a52"},{"route_type":2,"route_id":5460,"route_name":"Narre Warren North - Cranbourne via Narre Warren & Cranbourne North","route_number":"841","route_gtfs_id":"4-841"},{"route_type":2,"route_id":5480,"route_name":"Berwick Station - Narre Warren Circle via Berwick North & Narre Warren South","route_number":"834","route_gtfs_id":"4-z20"},{"route_type":2,"route_id":5481,"route_name":"Berwick Station - Narre Warren Circle via Narre Warren South & Berwick North","route_number":"835","route_gtfs_id":"4-835"},{"route_type":2,"route_id":5510,"route_name":"Hampton - Berwick Station via Southland SC & Dandenong","route_number":"828","route_gtfs_id":"4-828"},{"route_type":2,"route_id":5537,"route_name":"City - Bulleen - Doncaster SC via Kew Junction","route_number":"200-207 combined","route_gtfs_id":"4-C10"},{"route_type":2,"route_id":5540,"route_name":"Kew (Cotham Road) - La Trobe University Bundoora","route_number":"548","route_gtfs_id":"4-548"},{"route_type":2,"route_id":5589,"route_name":"Craigieburn  - Roxburgh Park","route_number":"544","route_gtfs_id":"4-544"},{"route_type":2,"route_id":5607,"route_name":"Moonee Ponds - Clifton Hill via East Brunswick","route_number":"504","route_gtfs_id":"4-504"},{"route_type":2,"route_id":5634,"route_name":"Maryborough - Maryborough Station","route_number":"","route_gtfs_id":"6-Mab"},{"route_type":2,"route_id":5664,"route_name":"Elsternwick Station - Fishermans Bend","route_number":"606","route_gtfs_id":"4-606"},{"route_type":2,"route_id":5671,"route_name":"Laverton Station - Williamstown via Altona","route_number":"415","route_gtfs_id":"4-415"},{"route_type":2,"route_id":5675,"route_name":"Morwell - Churchill","route_number":"2","route_gtfs_id":"6-L02"},{"route_type":2,"route_id":5681,"route_name":"Churchill - Boolarra via Yinnar","route_number":"4","route_gtfs_id":"6-L04"},{"route_type":2,"route_id":5684,"route_name":"Traralgon - Churchill","route_number":"3","route_gtfs_id":"6-L03"},{"route_type":2,"route_id":5700,"route_name":"Churchill town loop","route_number":"30","route_gtfs_id":"6-L30"},{"route_type":2,"route_id":5701,"route_name":"Morwell - Mid Valley Shopping Centre via Crinigan Rd","route_number":"21","route_gtfs_id":"6-L21"},{"route_type":2,"route_id":5704,"route_name":"Morwell - Mid Valley Shopping Centre via Hourigan Rd","route_number":"22","route_gtfs_id":"6-L22"},{"route_type":2,"route_id":5722,"route_name":"Morwell South","route_number":"20","route_gtfs_id":"6-L20"},{"route_type":2,"route_id":5738,"route_name":"Castlemaine - Chewton via Loddon Prison","route_number":"6","route_gtfs_id":"6-c06"},{"route_type":2,"route_id":5741,"route_name":"Traralgon - Traralgon South","route_number":"6","route_gtfs_id":"6-L06"},{"route_type":2,"route_id":5746,"route_name":"Dandenong - Brighton via Heatherton Road & Springvale","route_number":"811","route_gtfs_id":"4-811"},{"route_type":2,"route_id":5747,"route_name":"Dandenong - Brighton via Parkmore Shopping Centre","route_number":"812","route_gtfs_id":"4-812"},{"route_type":2,"route_id":5748,"route_name":"Dandenong - Brighton via Southland SC","route_number":"811-812 combined","route_gtfs_id":"4-Z09"},{"route_type":2,"route_id":5767,"route_name":"Wodonga - Mayfair Drive","route_number":"M","route_gtfs_id":"6-woM"},{"route_type":2,"route_id":5768,"route_name":"Epping Plaza SC - South Morang","route_number":"569","route_gtfs_id":"4-569"},{"route_type":2,"route_id":5770,"route_name":"Bundoora RMIT - South Morang","route_number":"564","route_gtfs_id":"4-564"},{"route_type":2,"route_id":5809,"route_name":"Mallacoota - Genoa via Gipsy Point","route_number":"","route_gtfs_id":"6-mal"},{"route_type":2,"route_id":5812,"route_name":"Eltham - Glenroy via Greensborough or Lower Plenty","route_number":"513","route_gtfs_id":"4-513"},{"route_type":2,"route_id":5814,"route_name":"Sale - Seaspray via Longford","route_number":"","route_gtfs_id":"6-Sea"},{"route_type":2,"route_id":5827,"route_name":"Lakes Entrance - Kalimna","route_number":"1","route_gtfs_id":"6-La1"},{"route_type":2,"route_id":5834,"route_name":"Lakes Entrance - Lakes Entrance North","route_number":"2","route_gtfs_id":"6-La2"},{"route_type":2,"route_id":5837,"route_name":"Lakes Entrance - Lakes Entrance East","route_number":"3","route_gtfs_id":"6-La3"},{"route_type":2,"route_id":5841,"route_name":"Echuca - Cunningham Downs Retirement Village","route_number":"4","route_gtfs_id":"6-Ec4"},{"route_type":2,"route_id":5843,"route_name":"Ararat to Stawell via Western Hwy","route_number":"","route_gtfs_id":"6-ArS"},{"route_type":2,"route_id":5844,"route_name":"Stawell to Horsham via Western Hwy","route_number":"","route_gtfs_id":"6-StH"},{"route_type":2,"route_id":5845,"route_name":"Stawell to Stawell via Pomonal and Halls Gap","route_number":"","route_gtfs_id":"6-Sha"},{"route_type":2,"route_id":5846,"route_name":"Echuca - 24 Lane","route_number":"5","route_gtfs_id":"6-Ec5"},{"route_type":2,"route_id":6572,"route_name":"Roxburgh Park - Pascoe Vale via Meadow Heights & Broadmeadows & Glenroy","route_number":"542","route_gtfs_id":"4-542"},{"route_type":2,"route_id":6647,"route_name":"Maffra town service","route_number":"","route_gtfs_id":"6-Ma1"},{"route_type":2,"route_id":6648,"route_name":"Mildura - Ouyen - Sea Lake","route_number":"","route_gtfs_id":"6-MiS"},{"route_type":2,"route_id":6649,"route_name":"Kerang - Echuca via Cohuna","route_number":"","route_gtfs_id":"6-KeE"},{"route_type":2,"route_id":6716,"route_name":"Seymour - Seymour North-East PM peak","route_number":"5","route_gtfs_id":"6-SY5"},{"route_type":2,"route_id":7318,"route_name":"Portland - South","route_number":"2","route_gtfs_id":"6-PT2"},{"route_type":2,"route_id":7395,"route_name":"Kyneton - Kyneton North","route_number":"4","route_gtfs_id":"6-KNL"},{"route_type":2,"route_id":7440,"route_name":"Caroline Springs - Highpoint SC","route_number":"215","route_gtfs_id":"4-215"},{"route_type":2,"route_id":7441,"route_name":"Sunshine - City - Gardenvale","route_number":"220","route_gtfs_id":"4-220"},{"route_type":2,"route_id":7442,"route_name":"Yarraville - Highpoint SC","route_number":"223","route_gtfs_id":"4-223"},{"route_type":2,"route_id":7445,"route_name":"The Pines - Nunawading","route_number":"273","route_gtfs_id":"4-273"},{"route_type":2,"route_id":7446,"route_name":"Box Hill - Doncaster SC via Middleborough Rd","route_number":"279","route_gtfs_id":"4-279"},{"route_type":2,"route_id":7453,"route_name":"Southland Shopping Centre - St Kilda Station","route_number":"600","route_gtfs_id":"4-600"},{"route_type":2,"route_id":7455,"route_name":"Southland SC - St Kilda Station","route_number":"922","route_gtfs_id":"4-922"},{"route_type":2,"route_id":7456,"route_name":"Southland SC - St Kilda Station","route_number":"923","route_gtfs_id":"4-923"},{"route_type":2,"route_id":7461,"route_name":"Manningham Loop via Templestowe Village SC & Doncaster SC","route_number":"282","route_gtfs_id":"4-282"},{"route_type":2,"route_id":7462,"route_name":"Manningham Loop via Tunstall Square SC & Doncaster SC","route_number":"280","route_gtfs_id":"4-280"},{"route_type":2,"route_id":7464,"route_name":"Chelsea - Airport West (SMARTBUS Service)","route_number":"902","route_gtfs_id":"4-902"},{"route_type":2,"route_id":7522,"route_name":"Box Hill - Greensborough via Doncaster SC","route_number":"293","route_gtfs_id":"4-293"},{"route_type":2,"route_id":7531,"route_name":"Frankston - Melbourne Airport (SMARTBUS Service)","route_number":"901","route_gtfs_id":"4-901"},{"route_type":2,"route_id":7613,"route_name":"Pakenham Station - Cardinia Road Station","route_number":"928","route_gtfs_id":"4-928"},{"route_type":2,"route_id":7617,"route_name":"Pakenham Station - Fountain Gate Shopping Centre via Lakeside & Beaconsfield","route_number":"926","route_gtfs_id":"4-926"},{"route_type":2,"route_id":7620,"route_name":"Horsham - Williams Road South Bank","route_number":"4","route_gtfs_id":"6-HR4"},{"route_type":2,"route_id":7624,"route_name":"Horsham - Natimuk Road","route_number":"5","route_gtfs_id":"6-HR5"},{"route_type":2,"route_id":7627,"route_name":"Seymour - Seymour East","route_number":"1","route_gtfs_id":"6-SY1"},{"route_type":2,"route_id":7700,"route_name":"Frankston - Osborne via Mt Eliza & Mornington","route_number":"784","route_gtfs_id":"4-784"},{"route_type":2,"route_id":7703,"route_name":"Cobram Town Service","route_number":"","route_gtfs_id":"6-cob"},{"route_type":2,"route_id":7723,"route_name":"Wodonga - East Wodonga","route_number":"E","route_gtfs_id":"6-WoE"},{"route_type":2,"route_id":7726,"route_name":"Wodonga - South Wodonga","route_number":"S","route_gtfs_id":"6-WoS"},{"route_type":2,"route_id":7762,"route_name":"Yarrawonga and Mulwala FlexiRide Service","route_number":"","route_gtfs_id":"6-YFR"},{"route_type":2,"route_id":7765,"route_name":"Warrnambool - Dennington","route_number":"1","route_gtfs_id":"6-wr1"},{"route_type":2,"route_id":7768,"route_name":"Warrnambool - Gateway Plaza via Centro","route_number":"2","route_gtfs_id":"6-wr2"},{"route_type":2,"route_id":7771,"route_name":"Warrnambool - Deakin University via Gateway Plaza","route_number":"3","route_gtfs_id":"6-wr3"},{"route_type":2,"route_id":7772,"route_name":"Warrnambool - Tower Square via Lilydale Heights Plaza","route_number":"4","route_gtfs_id":"6-wr4"},{"route_type":2,"route_id":7776,"route_name":"Warrnambool - Lake Pertobe Loop","route_number":"5","route_gtfs_id":"6-wr5"},{"route_type":2,"route_id":7779,"route_name":"Warrnambool - Merrivale","route_number":"6","route_gtfs_id":"6-wr6"},{"route_type":2,"route_id":7782,"route_name":"Warrnambool - Port Fairy","route_number":"8","route_gtfs_id":"6-wr8"},{"route_type":2,"route_id":7785,"route_name":"Warrnambool - Allansford","route_number":"9","route_gtfs_id":"6-wr9"},{"route_type":2,"route_id":7788,"route_name":"Colac to Elliminyt","route_number":"1","route_gtfs_id":"6-CL1"},{"route_type":2,"route_id":7791,"route_name":"Colac to Colac East","route_number":"3","route_gtfs_id":"6-CL3"},{"route_type":2,"route_id":7797,"route_name":"Frankston - Mount Martha via Mt Eliza & Mornington","route_number":"781","route_gtfs_id":"4-781"},{"route_type":2,"route_id":7891,"route_name":"Warrandyte - Ringwood Station via Croydon & Warrandyte Rd & Eastland SC","route_number":"364","route_gtfs_id":"4-364"},{"route_type":2,"route_id":7953,"route_name":"Timboon - Camperdown via Cobden","route_number":"","route_gtfs_id":"6-Tim"},{"route_type":2,"route_id":8074,"route_name":"Elsternwick - Clifton Hill via St Kilda","route_number":"246","route_gtfs_id":"4-246"},{"route_type":2,"route_id":8080,"route_name":"Doncaster Park & Ride - Box Hill via Union Road","route_number":"284","route_gtfs_id":"4-284"},{"route_type":2,"route_id":8084,"route_name":"Doncaster SC - The Pines SC via Templestowe","route_number":"295","route_gtfs_id":"4-295"},{"route_type":2,"route_id":8095,"route_name":"Airport West SC - Melbourne Airport via South Centre Rd","route_number":"482","route_gtfs_id":"4-482"},{"route_type":2,"route_id":8114,"route_name":"City (Queen St) - Bulleen","route_number":"200","route_gtfs_id":"4-200"},{"route_type":2,"route_id":8118,"route_name":"Garden City - City (Queen Victoria Market)","route_number":"234","route_gtfs_id":"4-234"},{"route_type":2,"route_id":8122,"route_name":"Altona North - City (Queen Victoria Market)","route_number":"232","route_gtfs_id":"4-232"},{"route_type":2,"route_id":8125,"route_name":"Mitcham - Ringwood via Ringwood North","route_number":"370","route_gtfs_id":"4-370"},{"route_type":2,"route_id":8128,"route_name":"Box Hill - Mitcham via Blackburn North","route_number":"270","route_gtfs_id":"4-270"},{"route_type":2,"route_id":8132,"route_name":"Ringwood - Croydon Loop","route_number":"380","route_gtfs_id":"4-380"},{"route_type":2,"route_id":8135,"route_name":"City (Queen St) - La Trobe University","route_number":"250","route_gtfs_id":"4-250"},{"route_type":2,"route_id":8139,"route_name":"City (Queen St) - Northland SC","route_number":"251","route_gtfs_id":"4-251"},{"route_type":2,"route_id":8142,"route_name":"City - Doncaster SC via Kew Junction","route_number":"207","route_gtfs_id":"4-207"},{"route_type":2,"route_id":8174,"route_name":"City - Fishermans Bend via Williamstown Road","route_number":"235","route_gtfs_id":"4-235"},{"route_type":2,"route_id":8177,"route_name":"City - Fishermans Bend via Lorimer Street","route_number":"237","route_gtfs_id":"4-237"},{"route_type":2,"route_id":8185,"route_name":"Airport West SC - Sunbury Station via Melbourne Airport","route_number":"479","route_gtfs_id":"4-479"},{"route_type":2,"route_id":8224,"route_name":"Werribee Station - Westleigh Gardens via Geelong Rd","route_number":"441","route_gtfs_id":"4-441"},{"route_type":2,"route_id":8229,"route_name":"Bacchus Marsh - Hillview Estate via Bacchus Marsh Station","route_number":"433","route_gtfs_id":"6-BM3"},{"route_type":2,"route_id":8232,"route_name":"Bacchus Marsh Station - Telford Park via Bacchus Marsh","route_number":"434","route_gtfs_id":"6-BM4"},{"route_type":2,"route_id":8233,"route_name":"Bacchus Marsh Station - Darley via Bacchus Marsh","route_number":"435","route_gtfs_id":"6-BM5"},{"route_type":2,"route_id":8243,"route_name":"Doncaster Park & Ride - Camberwell via North Balwyn","route_number":"285","route_gtfs_id":"4-285"},{"route_type":2,"route_id":8246,"route_name":"Hamilton North via Kent Road","route_number":"2","route_gtfs_id":"6-HA2"},{"route_type":2,"route_id":8250,"route_name":"Hamilton East via Ballarat Road","route_number":"3","route_gtfs_id":"6-HA3"},{"route_type":2,"route_id":8263,"route_name":"Garden City - Queen Victoria Market via City","route_number":"236","route_gtfs_id":"4-236"},{"route_type":2,"route_id":8272,"route_name":"Sunshine South - Gardenvale","route_number":"219","route_gtfs_id":"4-219"},{"route_type":2,"route_id":8275,"route_name":"Templestowe - Deakin University","route_number":"281","route_gtfs_id":"4-28X"},{"route_type":2,"route_id":8302,"route_name":"Airport West SC - Melbourne Airport via Melrose Drive","route_number":"478","route_gtfs_id":"4-478"},{"route_type":2,"route_id":8306,"route_name":"Sunshine Station - Sunshine West via Forrest St","route_number":"427","route_gtfs_id":"4-427"},{"route_type":2,"route_id":8307,"route_name":"Sunshine Station - Sunshine West via Wright St","route_number":"428","route_gtfs_id":"4-428"},{"route_type":2,"route_id":8317,"route_name":"Wangaratta - Yarrunga via Mason Street","route_number":"404","route_gtfs_id":"6-W04"},{"route_type":2,"route_id":8361,"route_name":"Benalla - Benalla West","route_number":"1","route_gtfs_id":"6-BNI"},{"route_type":2,"route_id":8362,"route_name":"Benalla - Benalla East","route_number":"2","route_gtfs_id":"6-BNZ"},{"route_type":2,"route_id":8365,"route_name":"Airport West SC - Sunbury Station via Melbourne Airport","route_number":"478-479 combined","route_gtfs_id":"4-47A"},{"route_type":2,"route_id":8373,"route_name":"Colac - Marengo via Apollo Bay","route_number":"","route_gtfs_id":"6-CMO"},{"route_type":2,"route_id":8399,"route_name":"Box Hill - Ringwood via Park Orchards","route_number":"271","route_gtfs_id":"4-271"},{"route_type":2,"route_id":8430,"route_name":"Laverton Station - Sanctuary Lakes via Sanctuary Lakes SC","route_number":"496","route_gtfs_id":"4-496"},{"route_type":2,"route_id":8435,"route_name":"Alexandra - Marysville via Taggerty & Buxton","route_number":"","route_gtfs_id":"6-ALX"},{"route_type":2,"route_id":8452,"route_name":"Werribee Station - Tarneit Station via Werribee Plaza SC","route_number":"170","route_gtfs_id":"4-170"},{"route_type":2,"route_id":8457,"route_name":"Werribee Station - Wyndham Vale Station via Ballan Rd","route_number":"190","route_gtfs_id":"4-190"},{"route_type":2,"route_id":8462,"route_name":"Werribee Station - Tarneit Station via Tarneit Rd","route_number":"180","route_gtfs_id":"4-180"},{"route_type":2,"route_id":8482,"route_name":"Werribee Station - Hoppers Crossing Station via Werribee Plaza SC","route_number":"181","route_gtfs_id":"4-181"},{"route_type":2,"route_id":8483,"route_name":"Hoppers Crossing Station - Tarneit Station via Werribee Plaza SC","route_number":"167","route_gtfs_id":"4-167"},{"route_type":2,"route_id":8484,"route_name":"Hoppers Crossing Station - Wyndham Vale Station via Werribee Plaza SC","route_number":"166","route_gtfs_id":"4-166"},{"route_type":2,"route_id":8485,"route_name":"Williams Landing Station - Tarneit Station via Sayers Rd","route_number":"150","route_gtfs_id":"4-150"},{"route_type":2,"route_id":8486,"route_name":"Hoppers Crossing Station - Tarneit Station via Morris Rd","route_number":"160","route_gtfs_id":"4-160"},{"route_type":2,"route_id":8487,"route_name":"Werribee Station - Wyndham Vale Station via Black Forest Rd","route_number":"192","route_gtfs_id":"4-192"},{"route_type":2,"route_id":8488,"route_name":"Williams Landing Station - Werribee Station via Princes Hwy","route_number":"153","route_gtfs_id":"4-153"},{"route_type":2,"route_id":8489,"route_name":"Hoppers Crossing Station - Werribee Station via Werribee Plaza SC","route_number":"161","route_gtfs_id":"4-161"},{"route_type":2,"route_id":8490,"route_name":"Williams Landing Station - Tarneit Station via Westmeadows La","route_number":"151","route_gtfs_id":"4-151"},{"route_type":2,"route_id":8493,"route_name":"Williams Landing Station -  Point Cook South via Boardwalk Bvd","route_number":"495","route_gtfs_id":"4-495"},{"route_type":2,"route_id":8494,"route_name":"Williams Landing Station - Saltwater Coast Estate via Sanctuary Lakes SC","route_number":"497","route_gtfs_id":"4-497"},{"route_type":2,"route_id":8507,"route_name":"Werribee Station - Manor Lakes via Greaves St","route_number":"191","route_gtfs_id":"4-191"},{"route_type":2,"route_id":8508,"route_name":"Laverton Station - Hoppers Crossing Station via Dunnings Rd","route_number":"498","route_gtfs_id":"4-498"},{"route_type":2,"route_id":8514,"route_name":"Williams Landing Station - Point Cook South via Alamanda Bvd","route_number":"494","route_gtfs_id":"4-494"},{"route_type":2,"route_id":8517,"route_name":"Werribee Station - Southern Loop via South Werribee","route_number":"443","route_gtfs_id":"4-443"},{"route_type":2,"route_id":8561,"route_name":"Huntly - Kangaroo Flat via Bendigo Station","route_number":"5","route_gtfs_id":"6-B05"},{"route_type":2,"route_id":8564,"route_name":"Bendigo Station - La Trobe University via Strathdale","route_number":"61","route_gtfs_id":"6-B61"},{"route_type":2,"route_id":8565,"route_name":"Bendigo Station - Spring Gully via La Trobe University","route_number":"62","route_gtfs_id":"6-B62"},{"route_type":2,"route_id":8567,"route_name":"Bendigo Station - Golden Square via Quarry Hill","route_number":"64","route_gtfs_id":"6-B64"},{"route_type":2,"route_id":8568,"route_name":"Bendigo Station - Strathfieldsaye via Kennington","route_number":"70","route_gtfs_id":"6-B70"},{"route_type":2,"route_id":8569,"route_name":"Bendigo Station - Epsom Station via Goynes Rd","route_number":"50","route_gtfs_id":"6-B50"},{"route_type":2,"route_id":8570,"route_name":"Bendigo Station - Eaglehawk via Jackass Flat","route_number":"51","route_gtfs_id":"6-B51"},{"route_type":2,"route_id":8571,"route_name":"Bendigo Station - Eaglehawk via Eaglehawk Rd","route_number":"53","route_gtfs_id":"6-B53"},{"route_type":2,"route_id":8572,"route_name":"Bendigo Station - Maiden Gully via Calder Hwy","route_number":"54","route_gtfs_id":"6-B54"},{"route_type":2,"route_id":8579,"route_name":"Geelong Station - Leopold","route_number":"32","route_gtfs_id":"6-G32"},{"route_type":2,"route_id":8582,"route_name":"Lara Station - Lara South - Corio SC","route_number":"10","route_gtfs_id":"6-G10"},{"route_type":2,"route_id":8590,"route_name":"City - The Pines SC via Eastern Fwy (SMARTBUS Service)","route_number":"908","route_gtfs_id":"4-908"},{"route_type":2,"route_id":8591,"route_name":"City - Mitcham via Doncaster Rd (SMARTBUS service)","route_number":"907","route_gtfs_id":"4-907"},{"route_type":2,"route_id":8596,"route_name":"City - Warrandyte via The Pines SC (SMARTBUS service)","route_number":"906","route_gtfs_id":"4-906"},{"route_type":2,"route_id":8599,"route_name":"Geelong Station - Corio SC","route_number":"20","route_gtfs_id":"6-G20"},{"route_type":2,"route_id":8602,"route_name":"City - The Pines SC via Eastern Fwy & Templestowe (SMARTBUS Service)","route_number":"905","route_gtfs_id":"4-905"},{"route_type":2,"route_id":8606,"route_name":"City - La Trobe University via Eastern Fwy","route_number":"350","route_gtfs_id":"4-350"},{"route_type":2,"route_id":8611,"route_name":"Geelong Station - North Shore Station via Anakie Rd","route_number":"22","route_gtfs_id":"6-G22"},{"route_type":2,"route_id":8614,"route_name":"Corio SC - North Shore Station","route_number":"23","route_gtfs_id":"6-G23"},{"route_type":2,"route_id":8615,"route_name":"City - Deep Creek","route_number":"318","route_gtfs_id":"4-318"},{"route_type":2,"route_id":8618,"route_name":"Geelong Station - North Geelong Station via Newtown","route_number":"24","route_gtfs_id":"6-G24"},{"route_type":2,"route_id":8621,"route_name":"Geelong Station - Bell Post Hill","route_number":"25","route_gtfs_id":"6-G25"},{"route_type":2,"route_id":8624,"route_name":"Geelong Station - Whittington via Newcomb","route_number":"30","route_gtfs_id":"6-G30"},{"route_type":2,"route_id":8627,"route_name":"Geelong Station - St Albans Park","route_number":"31","route_gtfs_id":"6-G31"},{"route_type":2,"route_id":8630,"route_name":"Geelong Station - Deakin University via Breakwater","route_number":"40","route_gtfs_id":"6-G40"},{"route_type":2,"route_id":8639,"route_name":"Geelong Station - Deakin University via Highton","route_number":"43","route_gtfs_id":"6-G43"},{"route_type":2,"route_id":8645,"route_name":"Geelong Station - Jan Juc via Marshall Station and Fischer St","route_number":"50","route_gtfs_id":"6-G50"},{"route_type":2,"route_id":8648,"route_name":"Geelong Station - Jan Juc via Marshall Station","route_number":"51","route_gtfs_id":"6-G51"},{"route_type":2,"route_id":8651,"route_name":"Geelong Station - Ocean Grove via Barwon Heads","route_number":"55","route_gtfs_id":"6-G55"},{"route_type":2,"route_id":8654,"route_name":"Geelong Station - Queenscliff via Ocean Grove","route_number":"56","route_gtfs_id":"6-G56"},{"route_type":2,"route_id":8657,"route_name":"Geelong Station - St Leonards via Portarlington","route_number":"60","route_gtfs_id":"6-G60"},{"route_type":2,"route_id":8660,"route_name":"Geelong Station - Drysdale via Clifton Springs","route_number":"61","route_gtfs_id":"6-G61"},{"route_type":2,"route_id":8677,"route_name":"City - Donvale via Reynolds Rd","route_number":"309","route_gtfs_id":"4-309"},{"route_type":2,"route_id":8680,"route_name":"City - The Pines SC via Eastern Fwy","route_number":"305","route_gtfs_id":"4-305"},{"route_type":2,"route_id":8681,"route_name":"City - Ringwood North via Park Rd","route_number":"303","route_gtfs_id":"4-303"},{"route_type":2,"route_id":8682,"route_name":"City - Doncaster SC via Belmore Rd and Eastern Fwy","route_number":"304","route_gtfs_id":"4-304"},{"route_type":2,"route_id":8700,"route_name":"City - Box Hill via Belmore Rd and Eastern Fwy","route_number":"302","route_gtfs_id":"4-302"},{"route_type":2,"route_id":8708,"route_name":"Werribee Station - Werribee South via Werribee Park Mansion","route_number":"439","route_gtfs_id":"4-439"},{"route_type":2,"route_id":8710,"route_name":"Sunshine Station - Watergardens Station via Deer Park","route_number":"420","route_gtfs_id":"4-420"},{"route_type":2,"route_id":8714,"route_name":"Geelong - Bannockburn","route_number":"19","route_gtfs_id":"6-G19"},{"route_type":2,"route_id":8765,"route_name":"North Shore Station - Deakin University via Geelong City","route_number":"1","route_gtfs_id":"6-G01"},{"route_type":2,"route_id":8871,"route_name":"Thomastown via West Lalor (clockwise loop)","route_number":"554","route_gtfs_id":"4-554"},{"route_type":2,"route_id":8878,"route_name":"Thomastown via West Lalor (anti clockwise loop)","route_number":"557","route_gtfs_id":"4-557"},{"route_type":2,"route_id":8879,"route_name":"Thomastown via Darebin Drive","route_number":"559","route_gtfs_id":"4-559"},{"route_type":2,"route_id":8883,"route_name":"Preston - West Preston via Reservoir","route_number":"553","route_gtfs_id":"4-553"},{"route_type":2,"route_id":8887,"route_name":"Reservoir via North West Reservoir","route_number":"558","route_gtfs_id":"4-558"},{"route_type":2,"route_id":8912,"route_name":"Eastland - Chadstone via Vermont South & Glen Waverley & Oakleigh","route_number":"742","route_gtfs_id":"4-742"},{"route_type":2,"route_id":8922,"route_name":"Dandenong - Chadstone via North Dandenong & Oakleigh","route_number":"862","route_gtfs_id":"4-862"},{"route_type":2,"route_id":8923,"route_name":"Dandenong - Chadstone via Princes Highway & Oakleigh","route_number":"800","route_gtfs_id":"4-800"},{"route_type":2,"route_id":8924,"route_name":"Dandenong - Chadstone via Mulgrave & Oakleigh","route_number":"802","route_gtfs_id":"4-802"},{"route_type":2,"route_id":8925,"route_name":"Altona - Mordialloc (SMARTBUS Service)","route_number":"903","route_gtfs_id":"4-903"},{"route_type":2,"route_id":8934,"route_name":"Dandenong - Chadstone via Wheelers Hill & Oakleigh","route_number":"804","route_gtfs_id":"4-804"},{"route_type":2,"route_id":8983,"route_name":"Bendigo Station - Spring Gully via Carpenter St","route_number":"65","route_gtfs_id":"6-B65"},{"route_type":2,"route_id":8988,"route_name":"Brunswick West - Barkly Square SC via Hope St & Sydney Rd","route_number":"509","route_gtfs_id":"4-509"},{"route_type":2,"route_id":10827,"route_name":"Moonee Ponds - Plumpton via Keilor & Watergardens","route_number":"476","route_gtfs_id":"4-476"},{"route_type":2,"route_id":10830,"route_name":"Epping Station - Wollert East via Hayston Bvd","route_number":"356","route_gtfs_id":"4-356"},{"route_type":2,"route_id":10839,"route_name":"Lara Station - Lara West","route_number":"","route_gtfs_id":"6-G12"},{"route_type":2,"route_id":10842,"route_name":"Epping Station - Wollert via Epping Plaza SC","route_number":"358","route_gtfs_id":"4-358"},{"route_type":2,"route_id":10846,"route_name":"Geelong Station - Deakin University via Grovedale","route_number":"41","route_gtfs_id":"6-G41"},{"route_type":2,"route_id":10854,"route_name":"Geelong Station - Deakin University via South Valley Rd","route_number":"42","route_gtfs_id":"6-G42"},{"route_type":2,"route_id":10861,"route_name":"Sorrento - Safety Beach","route_number":"787","route_gtfs_id":"4-787"},{"route_type":2,"route_id":10863,"route_name":"Moonee Ponds - Melbourne University via Parkville Gardens","route_number":"505","route_gtfs_id":"4-505"},{"route_type":2,"route_id":10864,"route_name":"Box Hill Station - Deakin University","route_number":"201","route_gtfs_id":"4-201"},{"route_type":2,"route_id":10900,"route_name":"Laverton Station - Footscray via Altona Meadows & Altona & Millers Rd","route_number":"411","route_gtfs_id":"4-411"},{"route_type":2,"route_id":10903,"route_name":"Laverton Station - Footscray via Altona Meadows & Altona & Mills St","route_number":"412","route_gtfs_id":"4-412"},{"route_type":2,"route_id":10917,"route_name":"Laverton Station - Footscray via Geelong Rd","route_number":"414","route_gtfs_id":"4-414"},{"route_type":2,"route_id":10923,"route_name":"Bendigo - Goornong","route_number":"","route_gtfs_id":"6-BGN"},{"route_type":2,"route_id":10924,"route_name":"Castlemaine - Maldon","route_number":"4","route_gtfs_id":"6-CM4"},{"route_type":2,"route_id":10927,"route_name":"Footscray - Moonee Ponds via Newmarket","route_number":"404","route_gtfs_id":"4-404"},{"route_type":2,"route_id":10933,"route_name":"Epping Plaza SC - Northland SC via Keon Park","route_number":"556","route_gtfs_id":"4-X55"},{"route_type":2,"route_id":10937,"route_name":"Epping - Northland via Lalor & Thomastown & Reservoir","route_number":"555","route_gtfs_id":"4-55x"},{"route_type":2,"route_id":10940,"route_name":"North East Reservoir - Northcote Plaza via High Street","route_number":"552","route_gtfs_id":"4-x56"},{"route_type":2,"route_id":10952,"route_name":"Reservoir Station - La Trobe University (Bundoora Campus)","route_number":"301","route_gtfs_id":"4-x58"},{"route_type":2,"route_id":10955,"route_name":"Macleod - Pascoe Vale via La Trobe University","route_number":"561","route_gtfs_id":"4-X59"},{"route_type":2,"route_id":10958,"route_name":"Wollert West - Thomastown Station via Epping Station","route_number":"357","route_gtfs_id":"4-357"},{"route_type":2,"route_id":10961,"route_name":"Rosebud - Monash University","route_number":"887","route_gtfs_id":"4-X62"},{"route_type":2,"route_id":10964,"route_name":"Yarraville to Highpoint SC via Footscray","route_number":"409","route_gtfs_id":"4-X61"},{"route_type":2,"route_id":10967,"route_name":"Bendigo Station - Kangaroo Flat via Golden Square","route_number":"55","route_gtfs_id":"6-B55"},{"route_type":2,"route_id":10980,"route_name":"Ouyen - Pinnaroo via Mallee Hwy","route_number":"","route_gtfs_id":"6-Ouy"},{"route_type":2,"route_id":10990,"route_name":"Northcote - Regent via Northland","route_number":"567","route_gtfs_id":"4-567"},{"route_type":2,"route_id":10994,"route_name":"Epping Plaza SC - South Morang Station via Findon Rd","route_number":"577","route_gtfs_id":"4-577"},{"route_type":2,"route_id":11003,"route_name":"Kalkee Retirement Village - Belmont Village SC","route_number":"49","route_gtfs_id":"6-G49"},{"route_type":2,"route_id":11096,"route_name":"Rochester Town Service","route_number":"","route_gtfs_id":"6-R01"},{"route_type":2,"route_id":11109,"route_name":"Kinglake - Whittlesea via Humevale","route_number":"384","route_gtfs_id":"4-384"},{"route_type":2,"route_id":11112,"route_name":"Palisades - University Hill","route_number":"383","route_gtfs_id":"4-383"},{"route_type":2,"route_id":11118,"route_name":"Thomastown - RMIT Bundoora","route_number":"570","route_gtfs_id":"4-B57"},{"route_type":2,"route_id":11121,"route_name":"Laverton - Footscray via Altona Meadows & Altona & Altona Gate SC","route_number":"411-412 combined","route_gtfs_id":"4-4l2"},{"route_type":2,"route_id":11205,"route_name":"Mernda Station - Bundoora RMIT","route_number":"386-387 combined","route_gtfs_id":"4-C67"},{"route_type":2,"route_id":11286,"route_name":"Woodend FlexiRide Service","route_number":"","route_gtfs_id":"6-WFR"},{"route_type":2,"route_id":11289,"route_name":"Greenvale Gardens  - Roxburgh Park via Greenvale Village SC","route_number":"543","route_gtfs_id":"4-543"},{"route_type":2,"route_id":11290,"route_name":"Bendigo Station - East Bendigo via Strickland Rd","route_number":"60","route_gtfs_id":"6-B60"},{"route_type":2,"route_id":11291,"route_name":"Frankston - Langwarrin via Langwarrin North","route_number":"789","route_gtfs_id":"4-789"},{"route_type":2,"route_id":11296,"route_name":"Frankston - Langwarrin via Langwarrin South","route_number":"790","route_gtfs_id":"4-790"},{"route_type":2,"route_id":11297,"route_name":"Frankston Station - Cranbourne Station","route_number":"791","route_gtfs_id":"4-791"},{"route_type":2,"route_id":11300,"route_name":"Cranbourne Station - Pearcedale","route_number":"792","route_gtfs_id":"4-792"},{"route_type":2,"route_id":11303,"route_name":"Cranbourne Station - Clyde","route_number":"796","route_gtfs_id":"4-796"},{"route_type":2,"route_id":11304,"route_name":"Cranbourne Park SC - Selandra Rise","route_number":"798","route_gtfs_id":"4-798"},{"route_type":2,"route_id":11305,"route_name":"Merinda Park Station - The Avenue Village SC","route_number":"799","route_gtfs_id":"4-799"},{"route_type":2,"route_id":11306,"route_name":"Dandenong Station - Endeavour Hills via Endeavour Hills SC","route_number":"843","route_gtfs_id":"4-843"},{"route_type":2,"route_id":11307,"route_name":"Berwick Station - The Avenue Village SC","route_number":"847","route_gtfs_id":"4-847"},{"route_type":2,"route_id":11308,"route_name":"Endeavour Hills SC - Hampton Park SC via Hallam Station","route_number":"863","route_gtfs_id":"4-863"},{"route_type":2,"route_id":11309,"route_name":"Dandenong Station - Lynbrook Station","route_number":"890","route_gtfs_id":"4-890"},{"route_type":2,"route_id":11313,"route_name":"Fountain Gate SC - Lynbrook Station via Hallam Station","route_number":"891","route_gtfs_id":"4-891"},{"route_type":2,"route_id":11318,"route_name":"Cranbourne East - Cranbourne Station via Cranbourne Park SC","route_number":"898","route_gtfs_id":"4-898"},{"route_type":2,"route_id":11319,"route_name":"The Avenue Village SC - Berwick Station","route_number":"899","route_gtfs_id":"4-899"},{"route_type":2,"route_id":11320,"route_name":"Mildura Central SC - Mildura South - Mildura Central SC","route_number":"601","route_gtfs_id":"6-M61"},{"route_type":2,"route_id":11323,"route_name":"St Albans Station - Brimbank Central SC via Cairnlea","route_number":"423","route_gtfs_id":"4-423"},{"route_type":2,"route_id":11326,"route_name":"Mildura City - Mildura Central SC","route_number":"600","route_gtfs_id":"6-M60"},{"route_type":2,"route_id":11329,"route_name":"Mildura Central SC - Mildura City","route_number":"602","route_gtfs_id":"6-M62"},{"route_type":2,"route_id":11337,"route_name":"Casey Central SC - Dandenong Station via Hampton Park SC","route_number":"892","route_gtfs_id":"4-892"},{"route_type":2,"route_id":11342,"route_name":"Bendigo - Shepparton via Kyabram","route_number":"","route_gtfs_id":"6-SBO"},{"route_type":2,"route_id":11354,"route_name":"Ballarat Station - Wendouree Station via Howitt St","route_number":"11","route_gtfs_id":"6-xyz"},{"route_type":2,"route_id":11357,"route_name":"Ballarat Station - Wendouree Station via Forest St","route_number":"12","route_gtfs_id":"6-lkm"},{"route_type":2,"route_id":11360,"route_name":"Ballarat Station - Invermay Park","route_number":"13","route_gtfs_id":"6-hnb"},{"route_type":2,"route_id":11363,"route_name":"Ballarat Station - Black Hill","route_number":"14","route_gtfs_id":"6-jjg"},{"route_type":2,"route_id":11366,"route_name":"Ballarat Station - Brown Hill","route_number":"15","route_gtfs_id":"6-dcf"},{"route_type":2,"route_id":11369,"route_name":"Ballarat Station - Canadian","route_number":"20","route_gtfs_id":"6-lok"},{"route_type":2,"route_id":11372,"route_name":"Ballarat Station - Buninyong via Federation University","route_number":"21","route_gtfs_id":"6-tyt"},{"route_type":2,"route_id":11375,"route_name":"Ballarat Station - Federation University via Sebastopol","route_number":"22","route_gtfs_id":"6-ndb"},{"route_type":2,"route_id":11378,"route_name":"Ballarat Station - Mount Pleasant","route_number":"23","route_gtfs_id":"6-fgt"},{"route_type":2,"route_id":11381,"route_name":"Ballarat Station - Sebastopol","route_number":"24","route_gtfs_id":"6-sdf"},{"route_type":2,"route_id":11384,"route_name":"Ballarat Station - Delacombe","route_number":"25","route_gtfs_id":"6-cvx"},{"route_type":2,"route_id":11387,"route_name":"Ballarat Station - Alfredton","route_number":"26","route_gtfs_id":"6-mnm"},{"route_type":2,"route_id":11390,"route_name":"Ballarat Station - Creswick","route_number":"30","route_gtfs_id":"6-ggg"},{"route_type":2,"route_id":11393,"route_name":"Wendouree Station - Miners Rest","route_number":"31","route_gtfs_id":"6-lng"},{"route_type":2,"route_id":11397,"route_name":"Watergardens Station - Caroline Springs Station via Caroline Spring Town Centre","route_number":"460","route_gtfs_id":"4-460"},{"route_type":2,"route_id":11446,"route_name":"Moe - Traralgon via Morwell","route_number":"1","route_gtfs_id":"6-L01"},{"route_type":2,"route_id":11455,"route_name":"Moe West","route_number":"11","route_gtfs_id":"6-L11"},{"route_type":2,"route_id":11456,"route_name":"Moe South","route_number":"12","route_gtfs_id":"6-L12"},{"route_type":2,"route_id":11457,"route_name":"Moe - Moe North","route_number":"13","route_gtfs_id":"6-L13"},{"route_type":2,"route_id":11458,"route_name":"Moe - Newborough via Old Sale Rd","route_number":"14","route_gtfs_id":"6-L14"},{"route_type":2,"route_id":11461,"route_name":"Moe - Newborough via Dinwoodie Dr","route_number":"15","route_gtfs_id":"6-L15"},{"route_type":2,"route_id":11462,"route_name":"Moe - Traralgon via Yallourn North","route_number":"5","route_gtfs_id":"6-L05"},{"route_type":2,"route_id":11464,"route_name":"Traralgon North","route_number":"45","route_gtfs_id":"6-L45"},{"route_type":2,"route_id":11465,"route_name":"Warragul Station - Warragul South via West Gippsland Hospital","route_number":"80","route_gtfs_id":"6-W80"},{"route_type":2,"route_id":11466,"route_name":"Warragul Station - Warragul North via Latrobe St","route_number":"81","route_gtfs_id":"6-W81"},{"route_type":2,"route_id":11472,"route_name":"Warragul Station - Warragul North via Stoddarts Rd","route_number":"82","route_gtfs_id":"6-W82"},{"route_type":2,"route_id":11473,"route_name":"Warragul Station - Warragul East via Copelands Rd","route_number":"83","route_gtfs_id":"6-W83"},{"route_type":2,"route_id":11474,"route_name":"Warragul Station - Drouin Station via Drouin South","route_number":"85","route_gtfs_id":"6-W85"},{"route_type":2,"route_id":11475,"route_name":"Drouin Station - Drouin North via McNeilly Rd","route_number":"86","route_gtfs_id":"6-W86"},{"route_type":2,"route_id":11478,"route_name":"Warragul Station - Noojee via Main Neerim Rd & Brandy Creek Rd","route_number":"89","route_gtfs_id":"6-W89"},{"route_type":2,"route_id":11504,"route_name":"Essendon - East Brunswick via Albion Street","route_number":"503","route_gtfs_id":"4-503"},{"route_type":2,"route_id":11507,"route_name":"St Albans Station - Caroline Springs via Keilor Plains Station","route_number":"418","route_gtfs_id":"4-418"},{"route_type":2,"route_id":11510,"route_name":"St Albans Station - Highpoint SC via Sunshine Station","route_number":"408","route_gtfs_id":"4-408"},{"route_type":2,"route_id":11513,"route_name":"St Albans Station - Watergardens Station via Keilor Downs","route_number":"419","route_gtfs_id":"4-419"},{"route_type":2,"route_id":11516,"route_name":"St Albans Station - Watergardens Station via Keilor Plains Station","route_number":"421","route_gtfs_id":"4-421"},{"route_type":2,"route_id":11519,"route_name":"St Albans Station - Watergardens Station via Delahey","route_number":"425","route_gtfs_id":"4-425"},{"route_type":2,"route_id":11523,"route_name":"St Albans Station - Brimbank Central SC via Albanvale","route_number":"424","route_gtfs_id":"4-424"},{"route_type":2,"route_id":11524,"route_name":"Traralgon - Cross Road","route_number":"40","route_gtfs_id":"6-L40"},{"route_type":2,"route_id":11525,"route_name":"Traralgon West","route_number":"41","route_gtfs_id":"6-L41"},{"route_type":2,"route_id":11526,"route_name":"Traralgon - Southside","route_number":"42","route_gtfs_id":"6-L42"},{"route_type":2,"route_id":11527,"route_name":"Traralgon East","route_number":"43","route_gtfs_id":"6-L43"},{"route_type":2,"route_id":11528,"route_name":"Traralgon - Ellavale","route_number":"44","route_gtfs_id":"6-L44"},{"route_type":2,"route_id":11532,"route_name":"Traralgon - Churchill (Special) via Monash University","route_number":"7","route_gtfs_id":"6-L07"},{"route_type":2,"route_id":11536,"route_name":"Traralgon - Moe","route_number":"8","route_gtfs_id":"6-L08"},{"route_type":2,"route_id":11539,"route_name":"Traralgon - Churchill","route_number":"9","route_gtfs_id":"6-L09"},{"route_type":2,"route_id":11552,"route_name":"Gardenvale - Flagstaff Station","route_number":"605","route_gtfs_id":"4-605"},{"route_type":2,"route_id":11575,"route_name":"Hurstbridge - Greensborough via Diamond Creek Station","route_number":"343","route_gtfs_id":"4-343"},{"route_type":2,"route_id":11578,"route_name":"Moonee Ponds - Broadmeadows Station via Essendon & Airport West & Gladstone Park","route_number":"477","route_gtfs_id":"4-477"},{"route_type":2,"route_id":11591,"route_name":"Frankston Station - Carrum Station via Carrum Downs","route_number":"833","route_gtfs_id":"4-833"},{"route_type":2,"route_id":11597,"route_name":"Eltham Station - Warrandyte via Research & Kangaroo Ground-Warrandyte Road","route_number":"578","route_gtfs_id":"4-578"},{"route_type":2,"route_id":11600,"route_name":"Eltham Station - Warrandyte via Research & Research-Warrandyte Road","route_number":"579","route_gtfs_id":"4-579"},{"route_type":2,"route_id":11603,"route_name":"Diamond Creek - Eltham Station via Ryans Rd","route_number":"580","route_gtfs_id":"4-580"},{"route_type":2,"route_id":11606,"route_name":"Lancefield - Kyneton via Sunbury","route_number":"","route_gtfs_id":"6-SuK"},{"route_type":2,"route_id":11609,"route_name":"Eltham Town Service via Woodridge Estate","route_number":"582","route_gtfs_id":"4-582"},{"route_type":2,"route_id":11616,"route_name":"Warragul Station to Moe - Albert St","route_number":"","route_gtfs_id":"6-w13"},{"route_type":2,"route_id":11617,"route_name":"Pakenham Station to Garfield Station","route_number":"","route_gtfs_id":"6-w19"},{"route_type":2,"route_id":11618,"route_name":"Warragul Station to Moe Station","route_number":"","route_gtfs_id":"6-w20"},{"route_type":2,"route_id":11619,"route_name":"Garfield Station to Nar Nar Goon Station","route_number":"","route_gtfs_id":"6-w28"},{"route_type":2,"route_id":11620,"route_name":"Drouin Station to Traralgon Station","route_number":"","route_gtfs_id":"6-w30"},{"route_type":2,"route_id":11621,"route_name":"Drouin North to Warragul Station","route_number":"","route_gtfs_id":"6-w31"},{"route_type":2,"route_id":11622,"route_name":"Drouin North to Newborough TAFE - Yallourn","route_number":"","route_gtfs_id":"6-w32"},{"route_type":2,"route_id":11623,"route_name":"Garfield Station to Traralgon Plaza","route_number":"","route_gtfs_id":"6-w33"},{"route_type":2,"route_id":11624,"route_name":"Drouin North to Moe - Albert St","route_number":"","route_gtfs_id":"6-w34"},{"route_type":2,"route_id":11625,"route_name":"Traralgon Station to Drouin North","route_number":"","route_gtfs_id":"6-w35"},{"route_type":2,"route_id":11626,"route_name":"Newborough TAFE - Yallourn to Drouin North","route_number":"","route_gtfs_id":"6-w36"},{"route_type":2,"route_id":11627,"route_name":"Warragul Station to Drouin North","route_number":"","route_gtfs_id":"6-w37"},{"route_type":2,"route_id":11629,"route_name":"Moe - Albert St to Drouin North","route_number":"","route_gtfs_id":"6-w39"},{"route_type":2,"route_id":11630,"route_name":"Moe - Albert St to Garfield Station","route_number":"","route_gtfs_id":"6-w40"},{"route_type":2,"route_id":11631,"route_name":"Warragul Station to Pakenham Station","route_number":"","route_gtfs_id":"6-w41"},{"route_type":2,"route_id":11632,"route_name":"Drouin Station to Warragul Station","route_number":"","route_gtfs_id":"6-w76"},{"route_type":2,"route_id":11633,"route_name":"Warragul Station to Drouin Station","route_number":"","route_gtfs_id":"6-w77"},{"route_type":2,"route_id":11634,"route_name":"Ballarat Station - Alfredton via Wendouree","route_number":"10","route_gtfs_id":"6-B10"},{"route_type":2,"route_id":11635,"route_name":"Campbellfield - Coburg via Fawkner","route_number":"530","route_gtfs_id":"4-530"},{"route_type":2,"route_id":11653,"route_name":"North Brighton - Southland via Moorabbin","route_number":"823","route_gtfs_id":"4-823"},{"route_type":2,"route_id":11664,"route_name":"Sunshine Station - Brimbank Central SC via Deer Park","route_number":"422","route_gtfs_id":"4-422"},{"route_type":2,"route_id":11694,"route_name":"Sunshine Station - Brighton Beach","route_number":"216","route_gtfs_id":"4-216"},{"route_type":2,"route_id":11697,"route_name":"Caroline Springs - Sunshine Station","route_number":"426","route_gtfs_id":"4-426"},{"route_type":2,"route_id":11699,"route_name":"Sunshine Station - Melton","route_number":"456","route_gtfs_id":"4-4S6"},{"route_type":2,"route_id":11700,"route_name":"North Melbourne Station - Melbourne University Loop via Royal Melbourne Hospital","route_number":"401","route_gtfs_id":"4-401"},{"route_type":2,"route_id":11702,"route_name":"Footscray Station - East Melbourne via North Melbourne","route_number":"402","route_gtfs_id":"4-402"},{"route_type":2,"route_id":11703,"route_name":"Footscray Station - Melbourne University via Royal Melbourne Hospital","route_number":"403","route_gtfs_id":"4-403"},{"route_type":2,"route_id":11704,"route_name":"Heidelberg Station - Melb Uni - Queen Victoria Market via Clifton Hill and Carlton","route_number":"546","route_gtfs_id":"4-546"},{"route_type":2,"route_id":11711,"route_name":"Gisborne - Gisborne Station","route_number":"473","route_gtfs_id":"6-473"},{"route_type":2,"route_id":11713,"route_name":"Watergardens Station - Caroline Springs (south) via Caroline Springs Square SC","route_number":"462","route_gtfs_id":"4-46Z"},{"route_type":2,"route_id":11714,"route_name":"Gisborne - Gisborne Station  - demand responsive","route_number":"474","route_gtfs_id":"6-474"},{"route_type":2,"route_id":11716,"route_name":"Broadmeadows - Roxburgh Park via Greenvale","route_number":"484","route_gtfs_id":"4-484"},{"route_type":2,"route_id":12743,"route_name":"Wallan Station - Wallan Central","route_number":"1","route_gtfs_id":"6-WN1"},{"route_type":2,"route_id":12746,"route_name":"Wallan Station - Springridge","route_number":"2","route_gtfs_id":"6-WN2"},{"route_type":2,"route_id":12749,"route_name":"Wallan Station - Wallara Waters Shuttle","route_number":"3","route_gtfs_id":"6-WN3"},{"route_type":2,"route_id":12750,"route_name":"Huntingdale -  Monash University (Clayton)","route_number":"601","route_gtfs_id":"4-601"},{"route_type":2,"route_id":12753,"route_name":"Stud Park SC (Rowville) - Caulfield via Monash University & Chadstone (SMARTBUS Service)","route_number":"900","route_gtfs_id":"4-90O"},{"route_type":2,"route_id":12766,"route_name":"Keilor East - Footscray via Avondale Heights and Maribyrnong","route_number":"406","route_gtfs_id":"4-4o6"},{"route_type":2,"route_id":12767,"route_name":"Sunshine Station - Laverton Station via Robinsons Road","route_number":"400","route_gtfs_id":"4-400"},{"route_type":2,"route_id":12769,"route_name":"Watergardens Station - Caroline Springs Town Centre via Fraser Rise","route_number":"461","route_gtfs_id":"4-461"},{"route_type":2,"route_id":12779,"route_name":"Cranbourne Park SC - Dandenong Station","route_number":"893","route_gtfs_id":"4-893"},{"route_type":2,"route_id":12780,"route_name":"Clyde - Lynbrook Station","route_number":"897","route_gtfs_id":"4-897"},{"route_type":2,"route_id":13024,"route_name":"Box Hill - Chadstone via Surrey Hills & Camberwell & Glen Iris","route_number":"612","route_gtfs_id":"4-612"},{"route_type":2,"route_id":13025,"route_name":"Glen Waverley - St Kilda via Mount Waverley & Chadstone & Carnegie","route_number":"623","route_gtfs_id":"4-623"},{"route_type":2,"route_id":13027,"route_name":"Elsternwick - Chadstone via Ormond & Oakleigh","route_number":"625","route_gtfs_id":"4-625"},{"route_type":2,"route_id":13028,"route_name":"Middle Brighton - Chadstone via McKinnon & Carnegie","route_number":"626","route_gtfs_id":"4-626"},{"route_type":2,"route_id":13057,"route_name":"Craigieburn Station - Craigieburn Central SC","route_number":"528","route_gtfs_id":"4-528"},{"route_type":2,"route_id":13066,"route_name":"Craigieburn Station - Mandalay Circuit","route_number":"511","route_gtfs_id":"4-511"},{"route_type":2,"route_id":13067,"route_name":"Elwood - Monash University via Gardenvale & Ormond & Huntingdale","route_number":"630","route_gtfs_id":"4-630"},{"route_type":2,"route_id":13088,"route_name":"Craigieburn - Craigieburn North via Craigieburn Central SC","route_number":"529","route_gtfs_id":"4-529"},{"route_type":2,"route_id":13089,"route_name":"Craigieburn Station - Craigieburn North via Hanson Rd","route_number":"533","route_gtfs_id":"4-533"},{"route_type":2,"route_id":13090,"route_name":"Broadmeadows Station - Craigieburn North (Mt Ridley Rd)","route_number":"541","route_gtfs_id":"4-541"},{"route_type":2,"route_id":13091,"route_name":"Upfield - North Coburg via Somerset Estate","route_number":"531","route_gtfs_id":"4-531"},{"route_type":2,"route_id":13092,"route_name":"Craigieburn Station - Craigieburn West via Craigieburn Central SC","route_number":"537","route_gtfs_id":"4-537"},{"route_type":2,"route_id":13095,"route_name":"Chirnside Park - Warburton via Lilydale Station & Seville & Yarra Junction","route_number":"683","route_gtfs_id":"4-683"},{"route_type":2,"route_id":13107,"route_name":"Mernda Station to Diamond Creek Station","route_number":"381","route_gtfs_id":"4-381"},{"route_type":2,"route_id":13109,"route_name":"Whittlesea - Northland SC via South Morang Station","route_number":"382","route_gtfs_id":"4-382"},{"route_type":2,"route_id":13113,"route_name":"Mernda Station - Bundoora RMIT via South Morang","route_number":"386","route_gtfs_id":"4-3B6"},{"route_type":2,"route_id":13115,"route_name":"Mernda Station - Bundoora RMIT via Hawkstowe Pde & South Morang","route_number":"387","route_gtfs_id":"4-3B7"},{"route_type":2,"route_id":13117,"route_name":"Mernda Station - Doreen - Mernda Station (Anti-clockwise)","route_number":"388","route_gtfs_id":"4-388"},{"route_type":2,"route_id":13119,"route_name":"Mernda Station - Doreen - Mernda Station (Clockwise)","route_number":"389","route_gtfs_id":"4-389"},{"route_type":2,"route_id":13121,"route_name":"Bendigo Hospital - La Trobe University via Bendigo Station","route_number":"63","route_gtfs_id":"6-B63"},{"route_type":2,"route_id":13127,"route_name":"Strathfiledsaye SC Loop via Strathfieldsaye and Junortoun","route_number":"71","route_gtfs_id":"6-B71"},{"route_type":2,"route_id":13132,"route_name":"Heathcote - Bendigo via Junortoun & Axedale & Knowsley","route_number":"","route_gtfs_id":"6-hea"},{"route_type":2,"route_id":13134,"route_name":"Laverton Station - Laverton Station via Laverton North","route_number":"417","route_gtfs_id":"4-417"},{"route_type":2,"route_id":13135,"route_name":"Oakleigh - Bentleigh via Mackie Road & Brady Road","route_number":"701","route_gtfs_id":"4-701"},{"route_type":2,"route_id":13138,"route_name":"Mordialloc - Aspendale - Edithvale - Chelsea","route_number":"706","route_gtfs_id":"4-706"},{"route_type":2,"route_id":13140,"route_name":"Southland - Box Hill via Chadstone & Jordanville & Deakin University","route_number":"767","route_gtfs_id":"4-767"},{"route_type":2,"route_id":13165,"route_name":"Belgrave - Lilydale via Kallista & The Patch & Monbulk & Mt Evelyn","route_number":"663","route_gtfs_id":"4-663"},{"route_type":2,"route_id":13166,"route_name":"Chirnside Park - Knox City via Croydon & Bayswater","route_number":"664","route_gtfs_id":"4-664"},{"route_type":2,"route_id":13167,"route_name":"Ringwood - Lilydale via Croydon & Chirnside Park","route_number":"670","route_gtfs_id":"4-670"},{"route_type":2,"route_id":13168,"route_name":"Croydon - Chirnside Park via Warrien Road & Patrick Street","route_number":"671","route_gtfs_id":"4-671"},{"route_type":2,"route_id":13169,"route_name":"Croydon - Chirnside Park via Wonga Park & Croydon Hills","route_number":"672","route_gtfs_id":"4-672"},{"route_type":2,"route_id":13170,"route_name":"Lilydale - Lillydale Lake","route_number":"673","route_gtfs_id":"4-673"},{"route_type":2,"route_id":13171,"route_name":"Chirnside Park - Mooroolbark via Manchester Road","route_number":"675","route_gtfs_id":"4-675"},{"route_type":2,"route_id":13172,"route_name":"Lilydale Station via Maroondah Highway","route_number":"676","route_gtfs_id":"4-676"},{"route_type":2,"route_id":13173,"route_name":"Lilydale Station - Chirnside Park via Switchback Road","route_number":"677","route_gtfs_id":"4-677"},{"route_type":2,"route_id":13174,"route_name":"Chirnside Park Shopping Centre - Ringwood via Canterbury Rd","route_number":"679","route_gtfs_id":"4-679"},{"route_type":2,"route_id":13175,"route_name":"Lilydale - Mooroolbark via Lilydale East Estate & Lakeview Estate","route_number":"680","route_gtfs_id":"4-680"},{"route_type":2,"route_id":13176,"route_name":"Lysterfield - Knox City via Wantirna & Scoresby & Rowville (clockwise)","route_number":"681","route_gtfs_id":"4-681"},{"route_type":2,"route_id":13177,"route_name":"Lysterfield - Knox City via Wantirna & Scoresby & Rowville (anti-clockwise)","route_number":"682","route_gtfs_id":"4-682"},{"route_type":2,"route_id":13178,"route_name":"Boronia  - Waverley Gardens via Ferntree Gully & Stud Park","route_number":"691","route_gtfs_id":"4-691"},{"route_type":2,"route_id":13179,"route_name":"Belgrave - Oakleigh via Ferntree Gully & Brandon Park","route_number":"693","route_gtfs_id":"4-693"},{"route_type":2,"route_id":13251,"route_name":"Lilydale - Chirnside Park (Telebus Area 1)","route_number":"","route_gtfs_id":"7-TB1"},{"route_type":2,"route_id":13252,"route_name":"Mooroolbark Station - Chirnside Park (Telebus Area 2)","route_number":"","route_gtfs_id":"7-TB2"},{"route_type":2,"route_id":13253,"route_name":"Mooroolbark Station - Chirnside Park (Telebus Area 3)","route_number":"","route_gtfs_id":"7-TB3"},{"route_type":2,"route_id":13254,"route_name":"Mooroolbark Station - Croydon Station (Telebus Area 4)","route_number":"","route_gtfs_id":"7-TB4"},{"route_type":2,"route_id":13255,"route_name":"Ferntree Gully - Stud Park SC (Telebus Area 7)","route_number":"","route_gtfs_id":"7-TB7"},{"route_type":2,"route_id":13256,"route_name":"Stud Park - Ferntree Gully Station (Telebus Area 8)","route_number":"","route_gtfs_id":"7-TB8"},{"route_type":2,"route_id":13257,"route_name":"Stud Park - Stud Park (Telebus Area 9)","route_number":"","route_gtfs_id":"7-TB9"},{"route_type":2,"route_id":13263,"route_name":"Bendigo Station - Eaglehawk via Arnold St","route_number":"52","route_gtfs_id":"6-B52"},{"route_type":2,"route_id":13266,"route_name":"Southland - Waverley Gardens via Clayton & Monash University","route_number":"631","route_gtfs_id":"4-631"},{"route_type":2,"route_id":13267,"route_name":"Mordialloc - Noble Park Station via Keysborough South","route_number":"709","route_gtfs_id":"4-709"},{"route_type":2,"route_id":13268,"route_name":"Dandenong - Noble Park","route_number":"815","route_gtfs_id":"4-815"},{"route_type":2,"route_id":13269,"route_name":"Chadstone SC - Sandringham via Murrumbeena & Southland SC (From 02-12-2018)","route_number":"822","route_gtfs_id":"4-822"},{"route_type":2,"route_id":13270,"route_name":"Middle Brighton - Blackburn via Bentleigh & Clayton & Monash University","route_number":"703","route_gtfs_id":"4-703"},{"route_type":2,"route_id":13271,"route_name":"Oakleigh - Box Hill via Clayton & Monash University & Mt Waverley","route_number":"733","route_gtfs_id":"4-733"},{"route_type":2,"route_id":13281,"route_name":"Box Hill - Burwood via Surrey Hills","route_number":"766","route_gtfs_id":"4-766"},{"route_type":2,"route_id":13343,"route_name":"Lara Station - Lara East  via Rennie St and Lara Lifestyle Village (From 16-12-2018)","route_number":"11","route_gtfs_id":"6-G11"},{"route_type":2,"route_id":13349,"route_name":"East Clayton - Oakleigh via Clayton & Huntingdale","route_number":"704","route_gtfs_id":"4-704"},{"route_type":2,"route_id":13350,"route_name":"Southland - Clayton via Heatherton","route_number":"821","route_gtfs_id":"4-821"},{"route_type":2,"route_id":13352,"route_name":"Moorabbin - Keysborough via Clayton & Westall","route_number":"824","route_gtfs_id":"4-824"},{"route_type":2,"route_id":13353,"route_name":"Kew - Oakleigh via Caulfield & Carnegie & Darling and Chadstone (From 4-11-2018)","route_number":"624","route_gtfs_id":"4-624"},{"route_type":2,"route_id":13408,"route_name":"Moonee Ponds - East Keilor via Niddrie","route_number":"475","route_gtfs_id":"4-475"},{"route_type":2,"route_id":13426,"route_name":"Whittlesea-Mernda Station - Greensborough","route_number":"385","route_gtfs_id":"4-385"},{"route_type":2,"route_id":13454,"route_name":"Barmah - Echuca via Cummeragunja and Moama","route_number":"","route_gtfs_id":"6-BM8"},{"route_type":3,"route_id":1512,"route_name":"Warrnambool - Melbourne via Ararat & Hamilton","route_number":"","route_gtfs_id":"1-995"},{"route_type":3,"route_id":1706,"route_name":"Albury - Melbourne via Seymour","route_number":"","route_gtfs_id":"1-V01"},{"route_type":3,"route_id":1710,"route_name":"Seymour - Melbourne via Broadmeadows","route_number":"","route_gtfs_id":"1-V40"},{"route_type":3,"route_id":1717,"route_name":"Batemans Bay - Melbourne via Bairnsdale","route_number":"","route_gtfs_id":"1-V09"},{"route_type":3,"route_id":1718,"route_name":"Canberra - Melbourne via Bairnsdale","route_number":"","route_gtfs_id":"1-V13"},{"route_type":3,"route_id":1719,"route_name":"Sale - Melbourne via Maffra & Traralgon","route_number":"","route_gtfs_id":"1-V43"},{"route_type":3,"route_id":1720,"route_name":"Cowes and Inverloch - Melbourne via Dandenong & Koo Wee Rup","route_number":"","route_gtfs_id":"1-V15"},{"route_type":3,"route_id":1721,"route_name":"Marlo - Lake Tyers Beach - Melbourne via Bairnsdale","route_number":"","route_gtfs_id":"1-V25"},{"route_type":3,"route_id":1722,"route_name":"Yarram - Melbourne via Koo Wee Rup & Dandenong","route_number":"","route_gtfs_id":"1-V52"},{"route_type":3,"route_id":1723,"route_name":"Griffith - Melbourne via Shepparton","route_number":"","route_gtfs_id":"1-V41"},{"route_type":3,"route_id":1724,"route_name":"Corowa - Melbourne via Rutherglen & Wangaratta","route_number":"","route_gtfs_id":"1-V17"},{"route_type":3,"route_id":1725,"route_name":"Mt Buller-Mansfield - Melbourne via Yea","route_number":"","route_gtfs_id":"1-V28"},{"route_type":3,"route_id":1726,"route_name":"Mulwala - Melbourne via Benalla & Seymour","route_number":"","route_gtfs_id":"1-V36"},{"route_type":3,"route_id":1727,"route_name":"Shepparton - Sydney via Benalla","route_number":"","route_gtfs_id":"1-V42"},{"route_type":3,"route_id":1728,"route_name":"Ballarat-Wendouree - Melbourne via Melton","route_number":"","route_gtfs_id":"1-V05"},{"route_type":3,"route_id":1731,"route_name":"Halls Gap - Melbourne via Stawell & Ballarat","route_number":"","route_gtfs_id":"1-V24"},{"route_type":3,"route_id":1732,"route_name":"Mount Gambier - Melbourne via Hamilton & Ballarat","route_number":"","route_gtfs_id":"1-V29"},{"route_type":3,"route_id":1733,"route_name":"Ouyen - Melbourne via Warracknabeal & Ballarat","route_number":"","route_gtfs_id":"1-V38"},{"route_type":3,"route_id":1734,"route_name":"Mildura - Ballarat via Swan Hill & Bendigo","route_number":"","route_gtfs_id":"1-V32"},{"route_type":3,"route_id":1735,"route_name":"Warrnambool - Melbourne via Ballarat","route_number":"","route_gtfs_id":"1-V49"},{"route_type":3,"route_id":1737,"route_name":"Adelaide - Melbourne via Nhill & Bendigo","route_number":"","route_gtfs_id":"1-V03"},{"route_type":3,"route_id":1738,"route_name":"Sydney - Adelaide via Albury","route_number":"","route_gtfs_id":"1-V47"},{"route_type":3,"route_id":1740,"route_name":"Bendigo - Melbourne via Gisborne","route_number":"","route_gtfs_id":"1-V12"},{"route_type":3,"route_id":1744,"route_name":"Barham - Melbourne via Bendigo","route_number":"","route_gtfs_id":"1-V10"},{"route_type":3,"route_id":1745,"route_name":"Geelong - Melbourne","route_number":"","route_gtfs_id":"1-V23"},{"route_type":3,"route_id":1749,"route_name":"Warrnambool - Melbourne via Apollo Bay & Geelong","route_number":"","route_gtfs_id":"1-V50"},{"route_type":3,"route_id":1751,"route_name":"Geelong - Bendigo via Ballarat","route_number":"","route_gtfs_id":"1-V22"},{"route_type":3,"route_id":1755,"route_name":"Adelaide - Melbourne via Horsham & Ballarat & Geelong","route_number":"","route_gtfs_id":"1-V02"},{"route_type":3,"route_id":1756,"route_name":"Casterton - Melbourne via Hamilton & Warrnambool","route_number":"","route_gtfs_id":"1-V16"},{"route_type":3,"route_id":1758,"route_name":"Barmah - Melbourne via Shepparton & Heathcote","route_number":"","route_gtfs_id":"1-V07"},{"route_type":3,"route_id":1759,"route_name":"Albury - Bendigo via Wangaratta & Shepparton","route_number":"","route_gtfs_id":"1-V11"},{"route_type":3,"route_id":1760,"route_name":"Daylesford - Melbourne via  Woodend or Castlemaine","route_number":"","route_gtfs_id":"1-V18"},{"route_type":3,"route_id":1761,"route_name":"Deniliquin - Melbourne via Moama & Echuca & Heathcote","route_number":"","route_gtfs_id":"1-V20"},{"route_type":3,"route_id":1762,"route_name":"Ballarat - Warrnambool via Skipton","route_number":"","route_gtfs_id":"1-V06"},{"route_type":3,"route_id":1767,"route_name":"Mount Gambier - Melbourne via Warrnambool & Geelong","route_number":"","route_gtfs_id":"1-V30"},{"route_type":3,"route_id":1768,"route_name":"Canberra - Melbourne via Albury","route_number":"","route_gtfs_id":"1-V14"},{"route_type":3,"route_id":1773,"route_name":"Donald - Melbourne via Bendigo","route_number":"","route_gtfs_id":"1-V19"},{"route_type":3,"route_id":1774,"route_name":"Lancefield - Melbourne via Sunbury or Gisborne","route_number":"","route_gtfs_id":"1-V26"},{"route_type":3,"route_id":1775,"route_name":"Maryborough - Melbourne via Castlemaine","route_number":"","route_gtfs_id":"1-V27"},{"route_type":3,"route_id":1776,"route_name":"Mildura - Albury via Kerang & Shepparton","route_number":"","route_gtfs_id":"1-V31"},{"route_type":3,"route_id":1782,"route_name":"Mildura - Melbourne via Ballarat & Donald","route_number":"","route_gtfs_id":"1-V34"},{"route_type":3,"route_id":1783,"route_name":"Mildura - Melbourne via Swan Hill & Bendigo","route_number":"","route_gtfs_id":"1-V35"},{"route_type":3,"route_id":1784,"route_name":"Sea Lake - Melbourne via Charlton & Bendigo","route_number":"","route_gtfs_id":"1-V39"},{"route_type":3,"route_id":1823,"route_name":"Bairnsdale - Melbourne via Sale & Traralgon","route_number":"","route_gtfs_id":"1-V08"},{"route_type":3,"route_id":1824,"route_name":"Traralgon - Melbourne via Morwell & Moe & Pakenham","route_number":"","route_gtfs_id":"1-V48"},{"route_type":3,"route_id":1837,"route_name":"Ararat - Melbourne via Ballarat","route_number":"","route_gtfs_id":"1-V04"},{"route_type":3,"route_id":1838,"route_name":"Nhill - Melbourne via Ararat & Ballarat","route_number":"","route_gtfs_id":"1-V37"},{"route_type":3,"route_id":1848,"route_name":"Swan Hill - Melbourne via Bendigo","route_number":"","route_gtfs_id":"1-V45"},{"route_type":3,"route_id":1849,"route_name":"Echuca-Moama - Melbourne via Bendigo or Heathcote","route_number":"","route_gtfs_id":"1-Ech"},{"route_type":3,"route_id":1853,"route_name":"Warrnambool - Melbourne via Colac & Geelong","route_number":"","route_gtfs_id":"1-V51"},{"route_type":3,"route_id":1908,"route_name":"Shepparton - Melbourne via Seymour","route_number":"","route_gtfs_id":"1-Sht"},{"route_type":3,"route_id":1912,"route_name":"Mount Beauty - Melbourne via Bright","route_number":"","route_gtfs_id":"1-mby"},{"route_type":3,"route_id":1914,"route_name":"Echuca-Moama - Melbourne via Shepparton","route_number":"","route_gtfs_id":"1-EC2"},{"route_type":3,"route_id":1915,"route_name":"Daylesford - Melbourne via Ballarat","route_number":"","route_gtfs_id":"1-DF2"},{"route_type":3,"route_id":4871,"route_name":"Maryborough - Melbourne via  Ballarat","route_number":"","route_gtfs_id":"1-my1"},{"route_type":3,"route_id":5838,"route_name":"Paynesville - Melbourne via Bairnsdale","route_number":"","route_gtfs_id":"1-pay"},{"route_type":3,"route_id":7601,"route_name":"Geelong - Colac via Winchelsea and Birregurra","route_number":"","route_gtfs_id":"5-GCL"},{"route_type":4,"route_id":8941,"route_name":"Night Bus - Carrum - Frankston - Mornington - Rosebud","route_number":"970","route_gtfs_id":"8-970"},{"route_type":4,"route_id":8948,"route_name":"Night Bus - City - Footscray - Sunshine North - Taylors Lakes - Watergardens","route_number":"941","route_gtfs_id":"8-941"},{"route_type":4,"route_id":8950,"route_name":"Night Bus - Watergardens - Caroline Springs - Melton","route_number":"943","route_gtfs_id":"8-94x"},{"route_type":4,"route_id":8951,"route_name":"Night Bus - City - Newport - Altona - Altona Meadows - Point Cook","route_number":"944","route_gtfs_id":"8-944"},{"route_type":4,"route_id":8955,"route_name":"Night Bus - City - Geelong Rd - Tarneit - Hoppers Crossing - Werribee - Wyndham Vale","route_number":"945","route_gtfs_id":"8-945"},{"route_type":4,"route_id":8956,"route_name":"Night Bus - City - Moonee Ponds - Brunswick West - Pascoe Vale - Glenroy","route_number":"951","route_gtfs_id":"8-951"},{"route_type":4,"route_id":8957,"route_name":"Night Bus - City - Footscray - Maribyrnong - Airport West - Gladstone Park - Broadmeadows","route_number":"952","route_gtfs_id":"8-952"},{"route_type":4,"route_id":8958,"route_name":"Night Bus - Broadmeadows - Meadow Heights - Roxburgh Park - Craigieburn","route_number":"953","route_gtfs_id":"8-953"},{"route_type":4,"route_id":8959,"route_name":"Night Bus - City - Brunswick - Ivanhoe - Bundoora - Mill Park - South Morang - Mernda","route_number":"955","route_gtfs_id":"8-955"},{"route_type":4,"route_id":8960,"route_name":"Night Bus - City - Collingwood - Eastern Fwy - Templestowe - Doncaster","route_number":"961","route_gtfs_id":"8-961"},{"route_type":4,"route_id":8964,"route_name":"Night Bus - Ringwood - Mooroolbark - Lilydale","route_number":"963","route_gtfs_id":"8-963"},{"route_type":4,"route_id":8965,"route_name":"Night Bus - Croydon - Kilsyth - Mt Evelyn - Lilydale","route_number":"964","route_gtfs_id":"8-964"},{"route_type":4,"route_id":8966,"route_name":"Night Bus - Lilydale - Woori Yallock - Healesville - Yarra Glen loop","route_number":"965","route_gtfs_id":"8-965"},{"route_type":4,"route_id":8967,"route_name":"Night Bus - City - Kew - Doncaster Rd - Box Hill","route_number":"966","route_gtfs_id":"8-966"},{"route_type":4,"route_id":8968,"route_name":"Night Bus - Glen Waverley - Burwood Hwy - Bayswater (returns via Bayswater North - Ferntree Gully)","route_number":"967","route_gtfs_id":"8-967"},{"route_type":4,"route_id":8969,"route_name":"Night Bus - City - Caulfield - Ferntree Gully Rd - Rowville - Wantirna - Ringwood","route_number":"969","route_gtfs_id":"8-969"},{"route_type":4,"route_id":8970,"route_name":"Night Bus - Elsternwick - Ormond - Huntingdale - Mulgrave - Dandenong (returns via Princes Hwy)","route_number":"978","route_gtfs_id":"8-978"},{"route_type":4,"route_id":8971,"route_name":"Night Bus - Elsternwick - Bentleigh - Clarinda - Keysborough - Dandenong","route_number":"979","route_gtfs_id":"8-979"},{"route_type":4,"route_id":8972,"route_name":"Night Bus - Dandenong - Berwick - Narre Warren South - Cranbourne","route_number":"981","route_gtfs_id":"8-981"},{"route_type":4,"route_id":8973,"route_name":"Night Bus - Dandenong - Endeavour Hills - Hampton Park - Cranbourne","route_number":"982","route_gtfs_id":"8-982"},{"route_type":4,"route_id":11548,"route_name":"Night Bus - City - Footscray - Sunshine - Deer Park - St Albans","route_number":"942","route_gtfs_id":"8-942"}]};
	return routes;
}

function initStopNameList() {
	let stopNameList = {
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
 return stopNameList;
}

function initRouteStopList() {
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

function initDirections() {
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

function initShopInfoList() {
	return {
   "1220":{
      "stationType":"Unstaffed Station",
      "stopId":1220,
      "stopName":"Aircraft ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1216":{
      "stationType":"Host Station",
      "stopId":1216,
      "stopName":"Yarraville ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1215":{
      "stationType":"Unstaffed Station",
      "stopId":1215,
      "stopName":"Yarraman ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1214":{
      "stationType":"Host Station",
      "stopId":1214,
      "stopName":"Windsor ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1213":{
      "stationType":"Unstaffed Station",
      "stopId":1213,
      "stopName":"Willison ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1212":{
      "stationType":"Unstaffed Station",
      "stopId":1212,
      "stopName":"Williamstown Beach ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1211":{
      "stationType":"Premium Station",
      "stopId":1211,
      "stopName":"Williamstown ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1210":{
      "stationType":"Unstaffed Station",
      "stopId":1210,
      "stopName":"Westona ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1219":{
      "stationType":"Unstaffed Station",
      "stopId":1219,
      "stopName":"Roxburgh Park ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1218":{
      "stationType":"Premium Station",
      "stopId":1218,
      "stopName":"Sunshine ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1110":{
      "stationType":"Unstaffed Station",
      "stopId":1110,
      "stopName":"Kooyong ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1228":{
      "stationType":"Premium Station",
      "stopId":1228,
      "stopName":"Mernda ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1107":{
      "stationType":"Unstaffed Station",
      "stopId":1107,
      "stopName":"Keilor Plains ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1227":{
      "stationType":"Host Station",
      "stopId":1227,
      "stopName":"Hawkstowe ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1106":{
      "stationType":"Unstaffed Station",
      "stopId":1106,
      "stopName":"Kananook ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1226":{
      "stationType":"Host Station",
      "stopId":1226,
      "stopName":"Middle Gorge ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1105":{
      "stationType":"Unstaffed Station",
      "stopId":1105,
      "stopName":"Jordanville ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1104":{
      "stationType":"Host Station",
      "stopId":1104,
      "stopName":"Jolimont-MCG ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1225":{
      "stationType":"Premium Station",
      "stopId":1225,
      "stopName":"Williams Landing ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1224":{
      "stationType":"Premium Station",
      "stopId":1224,
      "stopName":"South Morang ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1103":{
      "stationType":"Unstaffed Station",
      "stopId":1103,
      "stopName":"Jewell ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1102":{
      "stationType":"Unstaffed Station",
      "stopId":1102,
      "stopName":"Jacana ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1223":{
      "stationType":"Unstaffed Station",
      "stopId":1223,
      "stopName":"Cardinia Road ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1222":{
      "stationType":"Unstaffed Station",
      "stopId":1222,
      "stopName":"Lynbrook ",
      "taxiRank":true,
      "toilet":false,
      "zone":"2"
   },
   "1101":{
      "stationType":"Premium Station",
      "stopId":1101,
      "stopName":"Ivanhoe ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1221":{
      "stationType":"Unstaffed Station",
      "stopId":1221,
      "stopName":"Coolaroo ",
      "taxiRank":true,
      "toilet":false,
      "zone":"2"
   },
   "1100":{
      "stationType":"Premium Station",
      "stopId":1100,
      "stopName":"Hurstbridge ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1109":{
      "stationType":"Unstaffed Station",
      "stopId":1109,
      "stopName":"Keon Park ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1108":{
      "stationType":"Host Station",
      "stopId":1108,
      "stopName":"Kensington ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1120":{
      "stationType":"Premium Station",
      "stopId":1120,
      "stopName":"Melbourne Central ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1118":{
      "stationType":"Host Station",
      "stopId":1118,
      "stopName":"Malvern ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1117":{
      "stationType":"Premium Station",
      "stopId":1117,
      "stopName":"Macleod ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1116":{
      "stationType":"Unstaffed Station",
      "stopId":1116,
      "stopName":"Macaulay ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1115":{
      "stationType":"Premium Station",
      "stopId":1115,
      "stopName":"Lilydale ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1114":{
      "stationType":"Unstaffed Station",
      "stopId":1114,
      "stopName":"Leawarra ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1113":{
      "stationType":"Premium Station",
      "stopId":1113,
      "stopName":"Laverton ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1112":{
      "stationType":"Unstaffed Station",
      "stopId":1112,
      "stopName":"Lalor ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1111":{
      "stationType":"Unstaffed Station",
      "stopId":1111,
      "stopName":"Laburnum ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1119":{
      "stationType":"Host Station",
      "stopId":1119,
      "stopName":"McKinnon ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1011":{
      "stationType":"Unstaffed Station",
      "stopId":1011,
      "stopName":"Aspendale ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1132":{
      "stationType":"Premium Station",
      "stopId":1132,
      "stopName":"Moorabbin ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1131":{
      "stationType":"Host Station",
      "stopId":1131,
      "stopName":"Moonee Ponds ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1010":{
      "stationType":"Premium Station",
      "stopId":1010,
      "stopName":"Ashburton ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1130":{
      "stationType":"Unstaffed Station",
      "stopId":1130,
      "stopName":"Montmorency ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1129":{
      "stationType":"Unstaffed Station",
      "stopId":1129,
      "stopName":"Mont Albert ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1008":{
      "stationType":"Host Station",
      "stopId":1008,
      "stopName":"Armadale ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1128":{
      "stationType":"Premium Station",
      "stopId":1128,
      "stopName":"Mitcham ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1127":{
      "stationType":"Unstaffed Station",
      "stopId":1127,
      "stopName":"Middle Footscray ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1006":{
      "stationType":"Unstaffed Station",
      "stopId":1006,
      "stopName":"Anstey ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1126":{
      "stationType":"Host Station",
      "stopId":1126,
      "stopName":"Middle Brighton ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1005":{
      "stationType":"Unstaffed Station",
      "stopId":1005,
      "stopName":"Altona ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1125":{
      "stationType":"Unstaffed Station",
      "stopId":1125,
      "stopName":"Merri ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1004":{
      "stationType":"Unstaffed Station",
      "stopId":1004,
      "stopName":"Alphington ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1003":{
      "stationType":"Host Station",
      "stopId":1003,
      "stopName":"Albion ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1124":{
      "stationType":"Host Station",
      "stopId":1124,
      "stopName":"Merlynston ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1002":{
      "stationType":"Unstaffed Station",
      "stopId":1002,
      "stopName":"Alamein ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1123":{
      "stationType":"Unstaffed Station",
      "stopId":1123,
      "stopName":"Merinda Park ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1122":{
      "stationType":"Premium Station",
      "stopId":1122,
      "stopName":"Mentone ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1001":{
      "stationType":"Unstaffed Station",
      "stopId":1001,
      "stopName":"Southland ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1009":{
      "stationType":"Unstaffed Station",
      "stopId":1009,
      "stopName":"Ascot Vale ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1143":{
      "stationType":"Host Station",
      "stopId":1143,
      "stopName":"North Brighton ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1022":{
      "stationType":"Unstaffed Station",
      "stopId":1022,
      "stopName":"Bittern ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1142":{
      "stationType":"Premium Station",
      "stopId":1142,
      "stopName":"Noble Park ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1021":{
      "stationType":"Premium Station",
      "stopId":1021,
      "stopName":"Berwick ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1020":{
      "stationType":"Premium Station",
      "stopId":1020,
      "stopName":"Bentleigh ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1141":{
      "stationType":"Premium Station",
      "stopId":1141,
      "stopName":"Newport ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1140":{
      "stationType":"Unstaffed Station",
      "stopId":1140,
      "stopName":"Newmarket ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1019":{
      "stationType":"Premium Station",
      "stopId":1019,
      "stopName":"Bell ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1018":{
      "stationType":"Premium Station",
      "stopId":1018,
      "stopName":"Belgrave ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1139":{
      "stationType":"Premium Station",
      "stopId":1139,
      "stopName":"Narre Warren ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1138":{
      "stationType":"Host Station",
      "stopId":1138,
      "stopName":"Murrumbeena ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1017":{
      "stationType":"Unstaffed Station",
      "stopId":1017,
      "stopName":"Beaconsfield ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1016":{
      "stationType":"Premium Station",
      "stopId":1016,
      "stopName":"Bayswater ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1137":{
      "stationType":"Premium Station",
      "stopId":1137,
      "stopName":"Mount Waverley ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1015":{
      "stationType":"Unstaffed Station",
      "stopId":1015,
      "stopName":"Baxter ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1136":{
      "stationType":"Unstaffed Station",
      "stopId":1136,
      "stopName":"Morradoo ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1014":{
      "stationType":"Unstaffed Station",
      "stopId":1014,
      "stopName":"Batman ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1135":{
      "stationType":"Unstaffed Station",
      "stopId":1135,
      "stopName":"Moreland ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1134":{
      "stationType":"Premium Station",
      "stopId":1134,
      "stopName":"Mordialloc ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1013":{
      "stationType":"Premium Station",
      "stopId":1013,
      "stopName":"Balaclava ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1012":{
      "stationType":"Host Station",
      "stopId":1012,
      "stopName":"Auburn ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1133":{
      "stationType":"Premium Station",
      "stopId":1133,
      "stopName":"Mooroolbark ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1033":{
      "stationType":"Host Station",
      "stopId":1033,
      "stopName":"Canterbury ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1154":{
      "stationType":"Unstaffed Station",
      "stopId":1154,
      "stopName":"Parkdale ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1032":{
      "stationType":"Premium Station",
      "stopId":1032,
      "stopName":"Camberwell ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1153":{
      "stationType":"Premium Station",
      "stopId":1153,
      "stopName":"Pakenham ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1031":{
      "stationType":"Host Station",
      "stopId":1031,
      "stopName":"Burwood ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1152":{
      "stationType":"Host Station",
      "stopId":1152,
      "stopName":"Ormond ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1030":{
      "stationType":"Premium Station",
      "stopId":1030,
      "stopName":"Burnley ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1151":{
      "stationType":"Unstaffed Station",
      "stopId":1151,
      "stopName":"Officer ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1150":{
      "stationType":"Premium Station",
      "stopId":1150,
      "stopName":"Oakleigh ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1029":{
      "stationType":"Unstaffed Station",
      "stopId":1029,
      "stopName":"Brunswick ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1149":{
      "stationType":"Unstaffed Station",
      "stopId":1149,
      "stopName":"Oak Park ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1028":{
      "stationType":"Premium Station",
      "stopId":1028,
      "stopName":"Broadmeadows ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1148":{
      "stationType":"Premium Station",
      "stopId":1148,
      "stopName":"Nunawading ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1027":{
      "stationType":"Premium Station",
      "stopId":1027,
      "stopName":"Brighton Beach ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1147":{
      "stationType":"Unstaffed Station",
      "stopId":1147,
      "stopName":"Northcote ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1026":{
      "stationType":"Premium Station",
      "stopId":1026,
      "stopName":"Box Hill ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1025":{
      "stationType":"Premium Station",
      "stopId":1025,
      "stopName":"Boronia ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1146":{
      "stationType":"Unstaffed Station",
      "stopId":1146,
      "stopName":"North Williamstown ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1145":{
      "stationType":"Unstaffed Station",
      "stopId":1145,
      "stopName":"North Richmond ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1024":{
      "stationType":"Unstaffed Station",
      "stopId":1024,
      "stopName":"Bonbeach ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1023":{
      "stationType":"Premium Station",
      "stopId":1023,
      "stopName":"Blackburn ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1144":{
      "stationType":"Premium Station",
      "stopId":1144,
      "stopName":"North Melbourne ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1044":{
      "stationType":"Premium Station",
      "stopId":1044,
      "stopName":"Craigieburn ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1165":{
      "stationType":"Host Station",
      "stopId":1165,
      "stopName":"Ripponlea ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1043":{
      "stationType":"Unstaffed Station",
      "stopId":1043,
      "stopName":"Collingwood ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1164":{
      "stationType":"Unstaffed Station",
      "stopId":1164,
      "stopName":"Ringwood East ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1163":{
      "stationType":"Premium Station",
      "stopId":1163,
      "stopName":"Ringwood ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1042":{
      "stationType":"Premium Station",
      "stopId":1042,
      "stopName":"Coburg ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1162":{
      "stationType":"Premium Station",
      "stopId":1162,
      "stopName":"Richmond ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1041":{
      "stationType":"Premium Station",
      "stopId":1041,
      "stopName":"Clifton Hill ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1040":{
      "stationType":"Premium Station",
      "stopId":1040,
      "stopName":"Clayton ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1161":{
      "stationType":"Premium Station",
      "stopId":1161,
      "stopName":"Reservoir ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1160":{
      "stationType":"Host Station",
      "stopId":1160,
      "stopName":"Regent ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1039":{
      "stationType":"Premium Station",
      "stopId":1039,
      "stopName":"Cheltenham ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1159":{
      "stationType":"Premium Station",
      "stopId":1159,
      "stopName":"Preston ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1038":{
      "stationType":"Unstaffed Station",
      "stopId":1038,
      "stopName":"Chelsea ",
      "taxiRank":true,
      "toilet":false,
      "zone":"2"
   },
   "1037":{
      "stationType":"Unstaffed Station",
      "stopId":1037,
      "stopName":"Chatham ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1158":{
      "stationType":"Host Station",
      "stopId":1158,
      "stopName":"Prahran ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1036":{
      "stationType":"Premium Station",
      "stopId":1036,
      "stopName":"Caulfield ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1157":{
      "stationType":"Unstaffed Station",
      "stopId":1157,
      "stopName":"Patterson ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1156":{
      "stationType":"Unstaffed Station",
      "stopId":1156,
      "stopName":"Pascoe Vale ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1035":{
      "stationType":"Premium Station",
      "stopId":1035,
      "stopName":"Carrum ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1155":{
      "stationType":"Premium Station",
      "stopId":1155,
      "stopName":"Parliament ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1034":{
      "stationType":"Host Station",
      "stopId":1034,
      "stopName":"Carnegie ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1055":{
      "stopId":1055,
      "stopName":"Diggers Rest ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1176":{
      "stationType":"Unstaffed Station",
      "stopId":1176,
      "stopName":"Seddon ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1054":{
      "stationType":"Unstaffed Station",
      "stopId":1054,
      "stopName":"Diamond Creek ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1175":{
      "stationType":"Unstaffed Station",
      "stopId":1175,
      "stopName":"Seaholme ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1174":{
      "stationType":"Unstaffed Station",
      "stopId":1174,
      "stopName":"Seaford ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1053":{
      "stationType":"Unstaffed Station",
      "stopId":1053,
      "stopName":"Dennis ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1173":{
      "stationType":"Premium Station",
      "stopId":1173,
      "stopName":"Sandringham ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1172":{
      "stationType":"Host Station",
      "stopId":1172,
      "stopName":"Sandown Park ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1051":{
      "stationType":"Premium Station",
      "stopId":1051,
      "stopName":"Darling ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1171":{
      "stationType":"Unstaffed Station",
      "stopId":1171,
      "stopName":"Ruthven ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1050":{
      "stationType":"Unstaffed Station",
      "stopId":1050,
      "stopName":"Darebin ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1170":{
      "stationType":"Unstaffed Station",
      "stopId":1170,
      "stopName":"Rushall ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1049":{
      "stationType":"Premium Station",
      "stopId":1049,
      "stopName":"Dandenong ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1048":{
      "stationType":"Premium Station",
      "stopId":1048,
      "stopName":"Croydon ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1169":{
      "stationType":"Unstaffed Station",
      "stopId":1169,
      "stopName":"Royal Park ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1047":{
      "stationType":"Unstaffed Station",
      "stopId":1047,
      "stopName":"Croxton ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1168":{
      "stationType":"Unstaffed Station",
      "stopId":1168,
      "stopName":"Rosanna ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1046":{
      "stationType":"Unstaffed Station",
      "stopId":1046,
      "stopName":"Crib Point ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1045":{
      "stationType":"Premium Station",
      "stopId":1045,
      "stopName":"Cranbourne ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1166":{
      "stationType":"Unstaffed Station",
      "stopId":1166,
      "stopName":"Riversdale ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1187":{
      "stationType":"Premium Station",
      "stopId":1187,
      "stopName":"Sunbury ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1066":{
      "stationType":"Unstaffed Station",
      "stopId":1066,
      "stopName":"Fawkner ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1186":{
      "stationType":"Unstaffed Station",
      "stopId":1186,
      "stopName":"Strathmore ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1065":{
      "stationType":"Host Station",
      "stopId":1065,
      "stopName":"Fairfield ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1064":{
      "stationType":"Premium Station",
      "stopId":1064,
      "stopName":"Essendon ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1185":{
      "stationType":"Unstaffed Station",
      "stopId":1185,
      "stopName":"Stony Point ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1063":{
      "stationType":"Premium Station",
      "stopId":1063,
      "stopName":"Epping ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1184":{
      "stationType":"Premium Station",
      "stopId":1184,
      "stopName":"St Albans ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1183":{
      "stationType":"Premium Station",
      "stopId":1183,
      "stopName":"Springvale ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1062":{
      "stationType":"Premium Station",
      "stopId":1062,
      "stopName":"Eltham ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1061":{
      "stationType":"Premium Station",
      "stopId":1061,
      "stopName":"Elsternwick ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1182":{
      "stationType":"Host Station",
      "stopId":1182,
      "stopName":"Spotswood ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1181":{
      "stationType":"Premium Station",
      "stopId":1181,
      "stopName":"Southern Cross ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1060":{
      "stationType":"Unstaffed Station",
      "stopId":1060,
      "stopName":"Edithvale ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1180":{
      "stationType":"Premium Station",
      "stopId":1180,
      "stopName":"South Yarra ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1059":{
      "stationType":"Unstaffed Station",
      "stopId":1059,
      "stopName":"East Richmond ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1058":{
      "stationType":"Premium Station",
      "stopId":1058,
      "stopName":"East Malvern ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1179":{
      "stationType":"Unstaffed Station",
      "stopId":1179,
      "stopName":"South Kensington ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1057":{
      "stationType":"Unstaffed Station",
      "stopId":1057,
      "stopName":"East Camberwell ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1178":{
      "stationType":"Unstaffed Station",
      "stopId":1178,
      "stopName":"Somerville ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1056":{
      "stationType":"Unstaffed Station",
      "stopId":1056,
      "stopName":"Eaglemont ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1190":{
      "stationType":"Host Station",
      "stopId":1190,
      "stopName":"Syndal ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1077":{
      "stationType":"Unstaffed Station",
      "stopId":1077,
      "stopName":"Glen Iris ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1198":{
      "stationType":"Premium Station",
      "stopId":1198,
      "stopName":"Upfield ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1197":{
      "stationType":"Unstaffed Station",
      "stopId":1197,
      "stopName":"Tyabb ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1076":{
      "stationType":"Unstaffed Station",
      "stopId":1076,
      "stopName":"Ginifer ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1075":{
      "stationType":"Host Station",
      "stopId":1075,
      "stopName":"Gardiner ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1196":{
      "stationType":"Host Station",
      "stopId":1196,
      "stopName":"Tottenham ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1195":{
      "stationType":"Host Station",
      "stopId":1195,
      "stopName":"Tooronga ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1074":{
      "stationType":"Unstaffed Station",
      "stopId":1074,
      "stopName":"Gardenvale ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1194":{
      "stationType":"Host Station",
      "stopId":1194,
      "stopName":"Toorak ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1073":{
      "stationType":"Premium Station",
      "stopId":1073,
      "stopName":"Frankston ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1193":{
      "stationType":"Unstaffed Station",
      "stopId":1193,
      "stopName":"Thornbury ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1072":{
      "stationType":"Premium Station",
      "stopId":1072,
      "stopName":"Footscray ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1071":{
      "stationType":"Premium Station",
      "stopId":1071,
      "stopName":"Flinders Street ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1192":{
      "stationType":"Premium Station",
      "stopId":1192,
      "stopName":"Thomastown ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1191":{
      "stationType":"Unstaffed Station",
      "stopId":1191,
      "stopName":"Tecoma ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1070":{
      "stationType":"Unstaffed Station",
      "stopId":1070,
      "stopName":"Flemington Racecourse ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1069":{
      "stationType":"Unstaffed Station",
      "stopId":1069,
      "stopName":"Flemington Bridge ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1189":{
      "stationType":"Premium Station",
      "stopId":1189,
      "stopName":"Surrey Hills ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1068":{
      "stationType":"Premium Station",
      "stopId":1068,
      "stopName":"Flagstaff ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1067":{
      "stationType":"Premium Station",
      "stopId":1067,
      "stopName":"Ferntree Gully ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1080":{
      "stationType":"Premium Station",
      "stopId":1080,
      "stopName":"Glenferrie ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1088":{
      "stationType":"Unstaffed Station",
      "stopId":1088,
      "stopName":"Hastings ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1087":{
      "stationType":"Unstaffed Station",
      "stopId":1087,
      "stopName":"Hartwell ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1086":{
      "stationType":"Unstaffed Station",
      "stopId":1086,
      "stopName":"Hampton ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1085":{
      "stationType":"Unstaffed Station",
      "stopId":1085,
      "stopName":"Hallam ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1084":{
      "stationType":"Premium Station",
      "stopId":1084,
      "stopName":"Greensborough ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1083":{
      "stationType":"Premium Station",
      "stopId":1083,
      "stopName":"Gowrie ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1082":{
      "stationType":"Premium Station",
      "stopId":1082,
      "stopName":"Glenroy ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1081":{
      "stationType":"Host Station",
      "stopId":1081,
      "stopName":"Glenhuntly ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1079":{
      "stationType":"Unstaffed Station",
      "stopId":1079,
      "stopName":"Glenbervie ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1199":{
      "stationType":"Premium Station",
      "stopId":1199,
      "stopName":"Upper Ferntree Gully ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1078":{
      "stationType":"Premium Station",
      "stopId":1078,
      "stopName":"Glen Waverley ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1091":{
      "stationType":"Host Station",
      "stopId":1091,
      "stopName":"Heatherdale ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1090":{
      "stationType":"Host Station",
      "stopId":1090,
      "stopName":"Hawthorn ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1099":{
      "stationType":"Host Station",
      "stopId":1099,
      "stopName":"Huntingdale ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1098":{
      "stationType":"Host Station",
      "stopId":1098,
      "stopName":"Hughesdale ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1097":{
      "stationType":"Host Station",
      "stopId":1097,
      "stopName":"Hoppers Crossing ",
      "taxiRank":true,
      "toilet":true,
      "zone":"2"
   },
   "1096":{
      "stationType":"Host Station",
      "stopId":1096,
      "stopName":"Holmesglen ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1095":{
      "stationType":"Unstaffed Station",
      "stopId":1095,
      "stopName":"Highett ",
      "taxiRank":true,
      "toilet":false,
      "zone":"2"
   },
   "1094":{
      "stationType":"Unstaffed Station",
      "stopId":1094,
      "stopName":"Heyington ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1093":{
      "stationType":"Premium Station",
      "stopId":1093,
      "stopName":"Heidelberg ",
      "taxiRank":true,
      "toilet":true,
      "zone":"1"
   },
   "1092":{
      "stationType":"Unstaffed Station",
      "stopId":1092,
      "stopName":"Heathmont ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1089":{
      "stationType":"Host Station",
      "stopId":1089,
      "stopName":"Hawksburn ",
      "taxiRank":false,
      "toilet":true,
      "zone":"1"
   },
   "1206":{
      "stationType":"Unstaffed Station",
      "stopId":1206,
      "stopName":"West Footscray ",
      "taxiRank":true,
      "toilet":false,
      "zone":"1"
   },
   "1205":{
      "stationType":"Premium Station",
      "stopId":1205,
      "stopName":"Werribee ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1204":{
      "stationType":"Unstaffed Station",
      "stopId":1204,
      "stopName":"Wattle Glen ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1203":{
      "stationType":"Premium Station",
      "stopId":1203,
      "stopName":"Watsonia ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1202":{
      "stationType":"Premium Station",
      "stopId":1202,
      "stopName":"Watergardens ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1201":{
      "stationType":"Unstaffed Station",
      "stopId":1201,
      "stopName":"Victoria Park ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1200":{
      "stationType":"Unstaffed Station",
      "stopId":1200,
      "stopName":"Upwey ",
      "taxiRank":false,
      "toilet":false,
      "zone":"2"
   },
   "1209":{
      "stationType":"Unstaffed Station",
      "stopId":1209,
      "stopName":"Westgarth ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   },
   "1208":{
      "stationType":"Premium Station",
      "stopId":1208,
      "stopName":"Westall ",
      "taxiRank":false,
      "toilet":true,
      "zone":"2"
   },
   "1207":{
      "stationType":"Unstaffed Station",
      "stopId":1207,
      "stopName":"West Richmond ",
      "taxiRank":false,
      "toilet":false,
      "zone":"1"
   }
	}
}

module.exports = {
	initRoutes: initRoutes,
	initStopNameList: initStopNameList,
	initRouteStopList: initRouteStopList,
	initDirections: initDirections,
	initShopInfoList: initShopInfoList
}